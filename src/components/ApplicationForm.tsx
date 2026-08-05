"use client";

import { useState } from "react";

type State = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl bg-cream-50 border border-navy-900/15 px-4 py-3.5 text-[15px] text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-navy-900/25 focus:border-navy-900/30 transition";
const labelClass = "block text-[13px] font-medium text-navy-900 mb-2";

export function ApplicationForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error ?? "Something went wrong");
      }
      setState("success");
      form.reset();
    } catch (e) {
      setError((e as Error).message);
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-[1.75rem] bg-navy-950 text-cream-50 p-10 md:p-14 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-azure-500 text-navy-950">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 12l5 5 9-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-6 font-display text-3xl font-medium">Application received.</h3>
        <p className="mt-4 text-cream-100/85 max-w-md mx-auto">
          Thank you. Our admissions team will be in touch to schedule the next step.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <FormSection number="01" title="About your child">
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Child&rsquo;s full name" name="childName" required />
          <Field label="Date of birth" name="childDob" type="date" required />
          <Field label="Gender" name="childGender">
            <select name="childGender" className={inputClass} defaultValue="">
              <option value="" disabled>Select…</option>
              <option>Female</option>
              <option>Male</option>
              <option>Prefer not to say</option>
            </select>
          </Field>
          <Field label="Applying for" name="level" required>
            <select name="level" required className={inputClass} defaultValue="">
              <option value="" disabled>Select level…</option>
              <option>Nursery (Ages 2 – 5)</option>
              <option>Primary (Ages 6 – 11)</option>
              <option>Secondary (Ages 12 – 17)</option>
            </select>
          </Field>
          <Field label="Preferred start term" name="startTerm" required>
            <select name="startTerm" required className={inputClass} defaultValue="">
              <option value="" disabled>Select term…</option>
              <option>September {new Date().getFullYear() + 1}</option>
              <option>January {new Date().getFullYear() + 2}</option>
              <option>April {new Date().getFullYear() + 2}</option>
            </select>
          </Field>
          <Field label="Current school (if any)" name="currentSchool" />
        </div>
      </FormSection>

      <FormSection number="02" title="Parent or guardian">
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Full name" name="parentName" required />
          <Field label="Relationship to child" name="parentRelation" required />
          <Field label="Email" name="parentEmail" type="email" required />
          <Field label="Phone" name="parentPhone" type="tel" required />
          <Field label="Home address" name="parentAddress" required className="md:col-span-2">
            <textarea name="parentAddress" required rows={2} className={inputClass} />
          </Field>
        </div>
      </FormSection>

      <FormSection number="03" title="A little more">
        <div className="grid gap-5">
          <Field label="How did you hear about Surebloom?" name="referral">
            <select name="referral" className={inputClass} defaultValue="">
              <option value="" disabled>Select…</option>
              <option>Google search</option>
              <option>A current or former Surebloom family</option>
              <option>Social media</option>
              <option>Community event</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Anything you&rsquo;d like us to know about your child?" name="notes">
            <textarea name="notes" rows={5} placeholder="Interests, needs, hopes — anything at all." className={inputClass} />
          </Field>
        </div>
      </FormSection>

      {error && (
        <div className="rounded-xl bg-clay-500/10 border border-clay-500/30 px-4 py-3 text-[14px] text-clay-600">
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
        <p className="text-[13px] text-ink-400 max-w-md">
          By submitting, you consent to Surebloom contacting you about admissions.
          We&apos;ll never share your details.
        </p>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-8 py-4 text-[15px] font-medium text-cream-50 hover:bg-navy-800 transition disabled:opacity-60"
        >
          {state === "submitting" ? "Sending…" : "Submit application"}
          {state !== "submitting" && (
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden className="transition-transform group-hover:translate-x-1">
              <path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}

function FormSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <fieldset className="rounded-[1.5rem] bg-cream-100/70 border border-navy-900/10 p-6 md:p-8">
      <legend className="px-3 -ml-3">
        <span className="inline-flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.2em] text-navy-800">
          <span className="font-display text-base normal-case tracking-normal text-azure-600 font-medium">{number}</span>
          {title}
        </span>
      </legend>
      <div className="mt-6">{children}</div>
    </fieldset>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className,
  children,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className={labelClass} dangerouslySetInnerHTML={{ __html: `${label}${required ? " <span class='text-clay-500'>*</span>" : ""}` }} />
      {children ?? (
        <input id={name} name={name} type={type} required={required} className={inputClass} />
      )}
    </div>
  );
}
