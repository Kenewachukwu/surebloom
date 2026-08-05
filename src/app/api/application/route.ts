import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { site } from "@/lib/site";

const schema = z.object({
  childName: z.string().min(1).max(120),
  childDob: z.string().min(1),
  childGender: z.string().max(40).optional().or(z.literal("")),
  level: z.string().min(1),
  startTerm: z.string().min(1),
  currentSchool: z.string().max(160).optional().or(z.literal("")),
  parentName: z.string().min(1).max(120),
  parentRelation: z.string().min(1).max(80),
  parentEmail: z.string().email(),
  parentPhone: z.string().min(1).max(40),
  parentAddress: z.string().min(1).max(500),
  referral: z.string().max(80).optional().or(z.literal("")),
  notes: z.string().max(4000).optional().or(z.literal("")),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }
  const d = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL ?? site.email;
  const from = process.env.INQUIRY_FROM_EMAIL ?? "noreply@surebloom.school";

  const summary =
    `New application via surebloom.school\n\n` +
    `— CHILD —\n` +
    `Name: ${d.childName}\nDOB: ${d.childDob}\nGender: ${d.childGender || "—"}\n` +
    `Level: ${d.level}\nStart term: ${d.startTerm}\nCurrent school: ${d.currentSchool || "—"}\n\n` +
    `— PARENT / GUARDIAN —\n` +
    `Name: ${d.parentName}\nRelation: ${d.parentRelation}\nEmail: ${d.parentEmail}\n` +
    `Phone: ${d.parentPhone}\nAddress: ${d.parentAddress}\n\n` +
    `— MORE —\n` +
    `Referral: ${d.referral || "—"}\nNotes: ${d.notes || "—"}\n`;

  if (!apiKey) {
    console.warn("[application] RESEND_API_KEY not set — logging submission instead");
    console.log(summary);
    return NextResponse.json({ ok: true, note: "logged" });
  }

  const resend = new Resend(apiKey);
  try {
    await resend.emails.send({
      from: `Surebloom Website <${from}>`,
      to: [to],
      replyTo: d.parentEmail,
      subject: `Application — ${d.level.split(" ")[0]} — ${d.childName}`,
      text: summary,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[application] send failed", e);
    return NextResponse.json({ error: "Could not submit application." }, { status: 500 });
  }
}
