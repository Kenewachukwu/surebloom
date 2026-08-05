import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { site } from "@/lib/site";

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  phone: z.string().max(40).optional().or(z.literal("")),
  topic: z.string().max(80).optional().or(z.literal("")),
  message: z.string().min(3).max(4000),
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

  if (!apiKey) {
    console.warn("[inquiry] RESEND_API_KEY not set — logging submission instead", d);
    return NextResponse.json({ ok: true, note: "logged" });
  }

  const resend = new Resend(apiKey);
  try {
    await resend.emails.send({
      from: `Surebloom Website <${from}>`,
      to: [to],
      replyTo: d.email,
      subject: `Website enquiry — ${d.topic || "General"} — ${d.name}`,
      text: `New enquiry via surebloom.school\n\nName: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone || "—"}\nTopic: ${d.topic || "—"}\n\nMessage:\n${d.message}\n`,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[inquiry] send failed", e);
    return NextResponse.json({ error: "Could not send message." }, { status: 500 });
  }
}
