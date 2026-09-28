import LeadForm from "@/components/LeadForm";
import {
  ArrowDownRight,
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  Database,
  GitBranch,
  LockKeyhole,
  Menu,
  Network,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    icon: Zap,
    title: "Capture",
    description: "Beautiful forms that convert",
  },
  {
    icon: BrainCircuit,
    title: "AI Qualify",
    description: "Extract intent, urgency and buying signals",
  },
  {
    icon: Database,
    title: "Store & Organize",
    description: "Keep every lead structured and searchable",
  },
  {
    icon: ArrowDownRight,
    title: "Take Action",
    description: "Trigger the right workflow automatically",
  },
];

const features = [
  {
    icon: BrainCircuit,
    title: "AI qualification",
    description:
      "Understand intent, urgency, service needs and buying signals before a salesperson gets involved.",
  },
  {
    icon: Network,
    title: "n8n orchestration",
    description:
      "Connect forms, AI, CRM, email and notifications into one automated workflow.",
  },
  {
    icon: Database,
    title: "Structured data",
    description:
      "Keep every lead queryable, searchable and ready for reporting.",
  },
  {
    icon: GitBranch,
    title: "Human handoff",
    description:
      "Route high-value or uncertain leads to the right person automatically.",
  },
];

const integrations = [
  "Next.js",
  "TypeScript",
  "n8n",
  "Supabase",
  "OpenAI",
  "APIs",
];

const workflowSteps = [
  {
    number: "01",
    title: "Capture",
    text: "A visitor submits an enquiry through the LeadFlow form.",
  },
  {
    number: "02",
    title: "Qualify",
    text: "AI analyses intent, urgency, service requirements and buying signals.",
  },
  {
    number: "03",
    title: "Store",
    text: "The structured result is saved for search, reporting and follow-up.",
  },
  {
    number: "04",
    title: "Take action",
    text: "n8n routes the lead to the appropriate workflow or human.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* -------------------------------------------------- */}
      {/* NAVIGATION */}
      {/* -------------------------------------------------- */}

      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#05070b]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="group flex items-center gap-2 text-[15px] font-bold tracking-[-0.03em]"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-violet-400/30 bg-violet-500/10 text-xs font-black text-violet-300">
              IT
            </span>

            <span>
              LEAD
              <span className="text-violet-400 transition-colors group-hover:text-violet-300">
                FLOW
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-[13px] text-slate-400 lg:flex">
            <a
              href="#home"
              className="relative font-medium text-white after:absolute after:-bottom-7 after:left-0 after:h-px after:w-full after:bg-violet-400"
            >
              Home
            </a>
            <a
              href="#how-it-works"
              className="transition-colors hover:text-white"
            >
              How it works
            </a>
            <a href="#features" className="transition-colors hover:text-white">
              Features
            </a>
            <a
              href="#integrations"
              className="transition-colors hover:text-white"
            >
              Integrations
            </a>
            <a href="#use-cases" className="transition-colors hover:text-white">
              Use cases
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="group hidden items-center gap-2 rounded-full border border-violet-400/30 bg-white/[0.02] px-5 py-2.5 text-[13px] font-medium text-slate-200 transition-all hover:border-violet-400/60 hover:bg-violet-500/10 sm:flex"
            >
              View dashboard
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* -------------------------------------------------- */}
      {/* HERO */}
      {/* -------------------------------------------------- */}

      <section id="home" className="relative">
        {/* ambient lighting */}
        <div className="pointer-events-none absolute left-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-violet-600/[0.09] blur-[140px]" />
        <div className="pointer-events-none absolute right-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.07] blur-[150px]" />

        <div className="tech-grid relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid min-h-[calc(100vh-80px)] items-center gap-14 py-20 lg:grid-cols-[1fr_0.88fr] lg:gap-16 lg:py-24">
            {/* LEFT */}
            <div className="relative z-10">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/[0.07] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-violet-200">
                <Sparkles size={13} />
                AI-powered lead automation
              </div>

              <h1 className="max-w-3xl text-[3.4rem] font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.65rem]">
                Turn enquiries into{" "}
                <span className="gradient-text">qualified opportunities.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-[16px] leading-7 text-slate-400 sm:text-[17px]">
                LeadFlow helps businesses capture enquiries, qualify them with
                AI, store the results and trigger the next action —{" "}
                <span className="text-slate-200">automatically.</span>
              </p>

              {/* capabilities */}
              <div className="mt-10 grid max-w-2xl grid-cols-2 border-y border-white/[0.07] py-5 sm:grid-cols-4">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={`pr-4 ${index > 1 ? "mt-5 sm:mt-0" : ""} ${
                        index !== 0
                          ? "border-white/[0.08] sm:border-l sm:pl-5"
                          : ""
                      }`}
                    >
                      <Icon
                        size={18}
                        className="mb-3 text-violet-400"
                        strokeWidth={1.8}
                      />

                      <p className="text-[13px] font-semibold text-slate-100">
                        {item.title}
                      </p>

                      <p className="mt-1 text-[11px] leading-4 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#capture"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(109,40,217,0.22)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_50px_rgba(109,40,217,0.32)]"
                >
                  Start capturing leads
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-5 py-3 text-sm font-medium text-slate-200 transition-all hover:border-white/20 hover:bg-white/[0.05]"
                >
                  View dashboard
                </Link>
              </div>

              {/* integrations */}
              <div id="integrations" className="mt-9">
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-600">
                  Works with your favourite tools
                </p>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                  {integrations.map((item) => (
                    <span
                      key={item}
                      className="text-[12px] font-medium text-slate-500 transition-colors hover:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT / FORM + FLOW */}
            <div id="capture" className="relative z-10">
              {/* Automation visual */}
              <div className="pointer-events-none absolute -left-44 top-28 hidden w-36 lg:block">
                <div className="space-y-3 opacity-75">
                  {/* New enquiry */}
                  <div className="rounded-xl border border-white/[0.08] bg-[#0a0e14]/90 p-3 shadow-xl backdrop-blur-xl">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                        <Zap size={13} />
                      </div>

                      <div>
                        <p className="text-[9px] font-semibold text-slate-300">
                          New enquiry
                        </p>
                        <p className="text-[8px] text-slate-600">
                          Incoming lead
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 space-y-1.5">
                      <div className="h-1.5 w-full rounded-full bg-white/[0.06]" />
                      <div className="h-1.5 w-3/4 rounded-full bg-white/[0.06]" />
                    </div>
                  </div>

                  {/* Connector */}
                  <div className="ml-8 h-5 w-px bg-gradient-to-b from-violet-400/70 to-transparent" />

                  {/* AI */}
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/[0.10] shadow-[0_0_40px_rgba(139,92,246,0.20)]">
                    <Bot size={22} className="text-violet-300" />
                  </div>

                  {/* Connector */}
                  <div className="ml-8 h-5 w-px bg-gradient-to-b from-violet-400/70 to-transparent" />

                  {/* Qualified lead */}
                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/[0.04] p-3 shadow-xl backdrop-blur-xl">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
                        <Check size={12} />
                      </div>

                      <div>
                        <p className="text-[9px] font-semibold text-slate-300">
                          Qualified lead
                        </p>
                        <p className="text-[8px] text-slate-600">
                          Score 92 / 100
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* form shell */}
              <div className="relative overflow-hidden rounded-[26px] border border-white/[0.10] bg-[#0b0f16]/90 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-7">
                {/* glow */}
                <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-violet-500/[0.12] blur-[90px]" />

                <div className="relative">
                  <div className="mb-7 flex items-start justify-between">
                    <div>
                      <div className="mb-3 flex items-center gap-2 text-[11px] font-medium text-slate-400">
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-400/10 text-violet-300">
                          <Workflow size={12} />
                        </span>
                        Get started
                      </div>

                      <h2 className="text-xl font-semibold tracking-[-0.025em] text-white">
                        Tell us about your enquiry
                      </h2>

                      <p className="mt-1.5 text-xs text-slate-500">
                        This form feeds the automation workflow.
                      </p>
                    </div>

                    <div className="hidden text-right sm:block">
                      <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-slate-600">
                        Step 1 of 2
                      </p>

                      <div className="mt-2 flex gap-1">
                        <span className="h-1 w-8 rounded-full bg-violet-400" />
                        <span className="h-1 w-8 rounded-full bg-white/10" />
                      </div>
                    </div>
                  </div>

                  <LeadForm />

                  <div className="mt-5 flex items-center justify-center gap-1.5 text-[10px] text-slate-600">
                    <LockKeyhole size={11} />
                    Your information is secure and only used to process your
                    enquiry.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* WHY LEADFLOW */}
      {/* -------------------------------------------------- */}

      <section
        id="features"
        className="relative border-y border-white/[0.06] bg-[#070a0f]/70"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-300">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                Why LeadFlow
              </div>

              <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                From enquiry to action —{" "}
                <span className="text-slate-500">on autopilot.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
                A complete lead automation system built around a simple business
                pattern: capture, understand, organize and act.
              </p>
            </div>

            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-2 self-start rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-violet-400/30 hover:text-white md:self-auto"
            >
              How it works
              <ArrowRight
                size={13}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.035]"
                >
                  <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08] text-violet-300 transition-colors group-hover:border-violet-400/30 group-hover:bg-violet-500/[0.13]">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <h3 className="text-sm font-semibold text-slate-100">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* HOW IT WORKS */}
      {/* -------------------------------------------------- */}

      <section id="how-it-works" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-300">
              The workflow
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              One enquiry. Four automated stages.
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              LeadFlow demonstrates how individual tools can become one
              connected business system.
            </p>
          </div>

          <div className="mt-14 grid gap-0 border-y border-white/[0.07] md:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative py-8 pr-8 ${
                  index > 0 ? "border-white/[0.07] md:border-l md:pl-8" : ""
                } ${index > 1 ? "border-t md:border-t-0" : ""}`}
              >
                <span className="text-[11px] font-medium text-violet-400">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* USE CASE */}
      {/* -------------------------------------------------- */}

      <section id="use-cases" className="relative border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="relative overflow-hidden rounded-[28px] border border-violet-400/15 bg-gradient-to-br from-violet-500/[0.10] via-white/[0.025] to-blue-500/[0.06] p-8 sm:p-12">
            <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-80 w-80 rounded-full bg-violet-500/[0.12] blur-[100px]" />

            <div className="relative max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-300">
                <Sparkles size={13} />
                Built for modern teams
              </div>

              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Stop moving leads between tools manually.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                LeadFlow turns a simple enquiry into structured intelligence and
                an actionable next step — giving teams a clearer path from first
                contact to follow-up.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#capture"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
                >
                  Try the demo
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-5 py-3 text-sm font-medium text-slate-200 hover:bg-black/30"
                >
                  Open dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* FOOTER */}
      {/* -------------------------------------------------- */}

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-[-0.02em]">
              LEAD<span className="text-violet-400">FLOW</span>
            </p>

            <p className="mt-1 text-[11px] text-slate-600">
              AI automation & full-stack systems.
            </p>
          </div>

          <div className="flex items-center gap-5 text-[11px] text-slate-600">
            <span>Next.js</span>
            <span>n8n</span>
            <span>Supabase</span>
            <span>AI</span>
          </div>

          <p className="text-[11px] text-slate-700">© 2026 LeadFlow</p>
        </div>
      </footer>
    </main>
  );
}
