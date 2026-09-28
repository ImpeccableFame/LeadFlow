"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  Loader2,
  Mail,
  UserRound,
  WalletCards,
} from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formElement = e.currentTarget;

    setStatus("loading");
    setMessage("");

    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage(data.message || "Your enquiry has been received.");

      formElement.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-6 sm:p-7">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10">
          <CheckCircle2
            size={22}
            className="text-emerald-300"
            strokeWidth={1.8}
          />
        </div>

        <h3 className="mt-5 text-base font-semibold tracking-[-0.02em] text-white">
          Lead captured successfully.
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">{message}</p>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
          className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-emerald-300 transition-colors hover:text-emerald-200"
        >
          Submit another enquiry
          <ArrowRight size={13} />
        </button>
      </div>
    );
  }

  const field =
    "mt-2 h-11 w-full rounded-xl border border-white/[0.09] bg-[#080b10] px-3.5 text-[13px] text-slate-200 outline-none transition-all duration-200 placeholder:text-slate-700 hover:border-white/[0.14] focus:border-violet-400/50 focus:bg-[#0a0e14] focus:ring-4 focus:ring-violet-500/[0.07]";

  const textareaField =
    "mt-2 w-full resize-none rounded-xl border border-white/[0.09] bg-[#080b10] px-3.5 py-3 text-[13px] leading-5 text-slate-200 outline-none transition-all duration-200 placeholder:text-slate-700 hover:border-white/[0.14] focus:border-violet-400/50 focus:bg-[#0a0e14] focus:ring-4 focus:ring-violet-500/[0.07]";

  const label = "text-[11px] font-medium tracking-[0.01em] text-slate-400";

  return (
    <form onSubmit={submit} className="space-y-4">
      {/* NAME + EMAIL */}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={label}>
          <span className="flex items-center gap-1.5">
            <UserRound size={12} className="text-slate-600" />
            Name
            <span className="text-violet-400">*</span>
          </span>

          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Jane Doe"
            className={field}
          />
        </label>

        <label className={label}>
          <span className="flex items-center gap-1.5">
            <Mail size={12} className="text-slate-600" />
            Email
            <span className="text-violet-400">*</span>
          </span>

          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder="jane@company.com"
            className={field}
          />
        </label>
      </div>

      {/* COMPANY */}
      <label className={`block ${label}`}>
        <span className="flex items-center gap-1.5">
          <Building2 size={12} className="text-slate-600" />
          Company
        </span>

        <input
          name="company"
          autoComplete="organization"
          placeholder="Acme Ltd"
          className={field}
        />
      </label>

      {/* MESSAGE */}
      <label className={`block ${label}`}>
        <span className="flex items-center gap-1.5">
          <span className="text-slate-600">✦</span>
          What do you need?
          <span className="text-violet-400">*</span>
        </span>

        <textarea
          required
          name="message"
          rows={4}
          placeholder="Tell us what you want to automate or build..."
          className={textareaField}
        />
      </label>

      {/* BUDGET + TIMELINE */}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={label}>
          <span className="flex items-center gap-1.5">
            <WalletCards size={12} className="text-slate-600" />
            Budget range
          </span>

          <select name="budget" defaultValue="" className={field}>
            <option value="" disabled>
              Select range
            </option>
            <option value="$100–$500">$100–$500</option>
            <option value="$500–$1,500">$500–$1,500</option>
            <option value="$1,500–$5,000">$1,500–$5,000</option>
            <option value="$5,000+">$5,000+</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>

        <label className={label}>
          <span className="flex items-center gap-1.5">
            <CalendarDays size={12} className="text-slate-600" />
            Timeline
          </span>

          <select name="timeline" defaultValue="" className={field}>
            <option value="" disabled>
              Select timeline
            </option>
            <option value="ASAP">ASAP</option>
            <option value="Within 2 weeks">Within 2 weeks</option>
            <option value="Within 1 month">Within 1 month</option>
            <option value="1–3 months">1–3 months</option>
            <option value="Just exploring">Just exploring</option>
          </select>
        </label>
      </div>

      {/* ERROR */}
      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-400/15 bg-red-400/[0.05] px-4 py-3 text-xs leading-5 text-red-300"
        >
          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-red-400/30 text-[9px]">
            !
          </span>

          <span>{message}</span>
        </div>
      )}

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="group relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(109,40,217,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(109,40,217,0.28)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        <span className="absolute inset-0 bg-white/[0.08] opacity-0 transition-opacity group-hover:opacity-100" />

        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Processing enquiry...
          </>
        ) : (
          <>
            Submit enquiry
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </>
        )}
      </button>

      {/* SECURITY */}
      <div className="flex items-center justify-center gap-1.5 pt-0.5 text-[9px] text-slate-700">
        <Check size={10} />
        Your information is only used to process your enquiry.
      </div>
    </form>
  );
}
