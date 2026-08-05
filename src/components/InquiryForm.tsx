"use client";

import { useState } from "react";

type State = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl bg-cream-50 border border-navy-900/15 px-4 py-3.5 text-[15px] text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-navy-900/25 focus:border-navy-900/30 transition";
const labelClass = "block text-[13px] font-medium text-navy-900 mb-2";

export function InquiryForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/inquiry", {
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
      <div className="rounded-[1.5rem] bg-navy-950 text-cream-50 p-10 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-azure-500 text-navy-950">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 12l5 5 9-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl font-medium">Message sent.</h3>
        <p className="mt-3 text-cream-100/85">
          We&rsquo;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Your name *</label>
          <input id="name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input id="phone" name="phone" type="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="topic" className={labelClass}>I&rsquo;m enquiring about</label>
          <select id="topic" name="topic" className={inputClass} defaultValue="">
            <option value="" disabled>Select…</option>
            <option>Admissions</option>
            <option>School tour</option>
            <option>Fees</option>
            <option>General question</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Message *</label>
        <textarea id="message" name="message" rows={5} required className={inputClass} />
      </div>

      {error && (
        <div className="rounded-xl bg-clay-500/10 border border-clay-500/30 px-4 py-3 text-[14px] text-clay-600">
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 pt-2">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-[14.5px] font-medium text-cream-50 hover:bg-navy-800 transition disabled:opacity-60"
        >
          {state === "submitting" ? "Sending…" : "Send message"}
          {state !== "submitting" && (
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden className="transition-transform group-hover:translate-x-1">
              <path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}
