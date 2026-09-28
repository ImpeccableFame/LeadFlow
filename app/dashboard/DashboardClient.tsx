"use client";

import { useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Clock3,
  Database,
  Filter,
  LayoutDashboard,
  Search,
  Settings,
  Sparkles,
  Users,
  Workflow,
  X,
  Mail,
  Building2,
  MessageSquare,
} from "lucide-react";

export type Lead = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  budget: string | null;
  timeline: string | null;
  status: string;
  ai_score: number | null;
  ai_summary: string | null;
  ai_intent: string | null;
  ai_urgency: string | null;
  ai_service: string | null;
  ai_reason: string | null;
  created_at: string;
};

type DashboardClientProps = {
  leads: Lead[];
};

export default function DashboardClient({ leads }: DashboardClientProps) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const filteredLeads = useMemo(() => {
    const query = search.trim().toLowerCase();

    return leads.filter((lead) => {
      const matchesSearch =
        !query ||
        lead.name.toLowerCase().includes(query) ||
        lead.email.toLowerCase().includes(query) ||
        (lead.company ?? "").toLowerCase().includes(query) ||
        lead.message.toLowerCase().includes(query) ||
        (lead.ai_summary ?? "").toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "all" || lead.status.toLowerCase() === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [leads, search, statusFilter]);

  const totalLeads = leads.length;

  const qualifiedLeads = leads.filter(
    (lead) => lead.status === "qualified",
  ).length;

  const nurtureLeads = leads.filter((lead) => lead.status === "nurture").length;

  const newLeads = leads.filter((lead) => lead.status === "new").length;

  const scoredLeads = leads.filter((lead) => typeof lead.ai_score === "number");

  const averageScore =
    scoredLeads.length > 0
      ? Math.round(
          scoredLeads.reduce((sum, lead) => sum + (lead.ai_score ?? 0), 0) /
            scoredLeads.length,
        )
      : 0;

  return (
    <main className="min-h-screen bg-[#05070b] text-slate-100">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-violet-600/[0.05] blur-[140px]" />
        <div className="absolute right-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.04] blur-[140px]" />
      </div>

      {/* TOP BAR */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#05070b]/85 backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between px-5 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-400/25 bg-violet-500/[0.08] text-[10px] font-black text-violet-300">
              IT
            </div>

            <div>
              <p className="text-[12px] font-bold tracking-[-0.02em]">
                LEAD
                <span className="text-violet-400">FLOW</span>
              </p>

              <p className="text-[9px] uppercase tracking-[0.12em] text-slate-600">
                LeadFlow
              </p>
            </div>
          </div>

          {/* SEARCH */}
          <div className="hidden w-full max-w-sm lg:block">
            <div className="flex h-9 items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3">
              <Search size={14} className="text-slate-600" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search leads..."
                className="w-full bg-transparent text-xs text-slate-300 outline-none placeholder:text-slate-600"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="text-[9px] text-slate-600 hover:text-slate-300"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.04] px-3 py-1.5 text-[10px] text-emerald-300 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              System operational
            </div>

            <a
              href="/"
              className="group flex items-center gap-2 rounded-lg border border-violet-400/25 bg-violet-500/[0.06] px-3.5 py-2 text-xs font-medium text-slate-200 transition hover:border-violet-400/50 hover:bg-violet-500/10"
            >
              <span>+</span>
              New lead
            </a>
          </div>
        </div>
      </header>

      <div className="relative flex">
        {/* SIDEBAR */}
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-60 shrink-0 border-r border-white/[0.06] bg-[#07090e]/70 px-4 py-6 lg:block">
          <nav className="space-y-1">
            <SidebarItem icon={LayoutDashboard} label="Overview" active />
            <SidebarItem icon={Users} label="Leads" />
            <SidebarItem icon={BarChart3} label="Analytics" />
            <SidebarItem icon={Workflow} label="Automations" />
            <SidebarItem icon={Database} label="Integrations" />
          </nav>

          <div className="my-7 border-t border-white/[0.06]" />

          <p className="px-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-700">
            Workspace
          </p>

          <nav className="mt-3 space-y-1">
            <SidebarItem icon={Activity} label="Activity" />
            <SidebarItem icon={Settings} label="Settings" />
          </nav>

          <div className="mt-10 rounded-xl border border-white/[0.06] bg-white/[0.018] p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
                <Bot size={14} />
              </div>

              <div>
                <p className="text-[10px] font-semibold text-slate-300">
                  AI qualification
                </p>

                <p className="text-[9px] text-slate-600">Automation active</p>
              </div>
            </div>

            <div className="mt-4 h-1 rounded-full bg-white/[0.06]">
              <div className="h-full w-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <section className="min-w-0 flex-1">
          <div className="mx-auto max-w-[1500px] px-5 py-8 lg:px-8 lg:py-10">
            {/* HEADING */}
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-violet-300">
                  <Sparkles size={12} />
                  LeadFlow overview
                </div>

                <h1 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                  Good to see you.
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                  Here&apos;s what&apos;s happening with your enquiries.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-slate-600">
                <Clock3 size={12} />
                Updated from your latest leads
              </div>
            </div>

            {/* METRICS */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              <Metric icon={Users} label="Total leads" value={totalLeads} />

              <Metric
                icon={CheckCircle2}
                label="Qualified"
                value={qualifiedLeads}
                accent="emerald"
              />

              <Metric
                icon={Clock3}
                label="Nurture"
                value={nurtureLeads}
                accent="amber"
              />

              <Metric
                icon={Sparkles}
                label="New"
                value={newLeads}
                accent="violet"
              />

              <Metric
                icon={BarChart3}
                label="Avg. AI score"
                value={averageScore}
                suffix="/100"
                accent="blue"
              />
            </div>

            {/* CONTENT */}
            <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_300px]">
              {/* LEADS */}
              <div className="min-w-0 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018]">
                <div className="flex flex-col justify-between gap-4 border-b border-white/[0.06] px-5 py-5 sm:flex-row sm:items-center">
                  <div>
                    <h2 className="text-sm font-semibold text-white">
                      Recent leads
                    </h2>

                    <p className="mt-1 text-[11px] text-slate-600">
                      {filteredLeads.length} of {leads.length} leads shown.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setShowFilters((value) => !value)}
                      className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-[10px] font-medium transition ${
                        showFilters || statusFilter !== "all"
                          ? "border-violet-400/25 bg-violet-500/[0.07] text-violet-300"
                          : "border-white/[0.07] text-slate-400 hover:border-white/[0.15] hover:text-white"
                      }`}
                    >
                      <Filter size={12} />
                      Filter
                    </button>
                  </div>
                </div>

                {/* FILTERS */}
                {showFilters && (
                  <div className="border-b border-white/[0.05] px-5 py-4">
                    <div className="flex flex-wrap gap-2">
                      {[
                        ["all", "All"],
                        ["new", "New"],
                        ["qualified", "Qualified"],
                        ["nurture", "Nurture"],
                        ["disqualified", "Disqualified"],
                      ].map(([value, label]) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setStatusFilter(value)}
                          className={`rounded-full border px-3 py-1.5 text-[10px] font-medium transition ${
                            statusFilter === value
                              ? "border-violet-400/25 bg-violet-500/10 text-violet-300"
                              : "border-white/[0.07] text-slate-500 hover:border-white/[0.14] hover:text-slate-300"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {filteredLeads.length === 0 ? (
                  <SearchEmptyState
                    hasSearch={Boolean(search.trim())}
                    hasFilter={statusFilter !== "all"}
                    clearSearch={() => setSearch("")}
                    clearFilter={() => setStatusFilter("all")}
                  />
                ) : (
                  <div>
                    <div className="hidden grid-cols-[1.5fr_1fr_.7fr_.7fr_auto] gap-4 border-b border-white/[0.05] px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.1em] text-slate-700 md:grid">
                      <span>Lead</span>
                      <span>Requirement</span>
                      <span>Score</span>
                      <span>Status</span>
                      <span />
                    </div>

                    <div className="divide-y divide-white/[0.05]">
                      {filteredLeads.map((lead) => (
                        <LeadRow
                          key={lead.id}
                          lead={lead}
                          onView={() => setSelectedLead(lead)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT PANEL */}
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.018] p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-violet-300">
                        Automation
                      </p>

                      <h3 className="mt-2 text-sm font-semibold text-white">
                        Lead qualification
                      </h3>
                    </div>

                    <span className="flex items-center gap-1.5 text-[9px] text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Active
                    </span>
                  </div>

                  <div className="mt-5 space-y-2">
                    <FlowItem icon={Sparkles} label="New enquiry" />
                    <FlowConnector />
                    <FlowItem icon={Bot} label="AI qualification" active />
                    <FlowConnector />
                    <FlowItem icon={Database} label="Store in Supabase" />
                    <FlowConnector />
                    <FlowItem icon={ArrowRight} label="Take action" />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.018] p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                    Connected systems
                  </p>

                  <div className="mt-4 space-y-3">
                    <SystemItem name="n8n" status="Connected" />
                    <SystemItem name="AI qualification" status="Active" />
                    <SystemItem name="Supabase" status="Connected" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {selectedLead && (
        <LeadDetailsDrawer
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
        />
      )}
    </main>
  );
}

/* ======================================================
   COMPONENTS
====================================================== */

function SidebarItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs transition ${
        active
          ? "border border-violet-400/10 bg-violet-500/[0.08] text-white"
          : "text-slate-500 hover:bg-white/[0.03] hover:text-slate-200"
      }`}
    >
      <Icon
        size={15}
        className={active ? "text-violet-300" : "text-slate-600"}
        strokeWidth={1.8}
      />

      <span>{label}</span>
    </a>
  );
}

function Metric({
  icon: Icon,
  label,
  value,
  suffix,
  accent = "default",
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  suffix?: string;
  accent?: "default" | "emerald" | "amber" | "violet" | "blue";
}) {
  const iconColors = {
    default: "text-slate-400 bg-white/[0.04]",
    emerald: "text-emerald-300 bg-emerald-400/[0.06]",
    amber: "text-amber-300 bg-amber-400/[0.06]",
    violet: "text-violet-300 bg-violet-400/[0.07]",
    blue: "text-blue-300 bg-blue-400/[0.06]",
  };

  return (
    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.018] p-5 transition-colors hover:border-white/[0.12]">
      <div className="flex items-start justify-between">
        <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-slate-600">
          {label}
        </p>

        <div
          className={`flex h-8 w-8 items-center justify-center rounded-lg ${iconColors[accent]}`}
        >
          <Icon size={15} strokeWidth={1.8} />
        </div>
      </div>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-2xl font-semibold tracking-[-0.04em] text-white">
          {value}
        </span>

        {suffix && <span className="text-[10px] text-slate-600">{suffix}</span>}
      </div>
    </div>
  );
}

function LeadRow({ lead, onView }: { lead: Lead; onView: () => void }) {
  const status =
    lead.status === "qualified"
      ? {
          label: "Qualified",
          className:
            "border-emerald-400/15 bg-emerald-400/[0.06] text-emerald-300",
          dot: "bg-emerald-400",
        }
      : lead.status === "nurture"
        ? {
            label: "Nurture",
            className: "border-amber-400/15 bg-amber-400/[0.05] text-amber-300",
            dot: "bg-amber-400",
          }
        : lead.status === "disqualified"
          ? {
              label: "Disqualified",
              className: "border-red-400/15 bg-red-400/[0.05] text-red-300",
              dot: "bg-red-400",
            }
          : {
              label: lead.status || "New",
              className:
                "border-violet-400/15 bg-violet-400/[0.06] text-violet-300",
              dot: "bg-violet-400",
            };
  return (
    <article className="group grid gap-4 px-5 py-5 transition-colors hover:bg-white/[0.018] md:grid-cols-[1.5fr_1fr_.7fr_.7fr_auto] md:items-center">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />

          <h3 className="truncate text-xs font-semibold text-slate-200">
            {lead.name}
          </h3>
        </div>

        <p className="mt-1 truncate text-[10px] text-slate-600">
          {lead.company || "Independent"} · {lead.email}
        </p>
      </div>

      <div className="min-w-0">
        <p className="text-[10px] text-slate-600">Requirement</p>

        <p className="mt-1 truncate text-xs text-slate-300">
          {lead.ai_summary || lead.message}
        </p>
      </div>

      <div>
        <p className="text-[10px] text-slate-600 md:hidden">AI score</p>

        <div className="mt-1 flex items-center gap-2 md:mt-0">
          <span className="text-sm font-semibold text-violet-300">
            {lead.ai_score ?? "—"}
          </span>

          {typeof lead.ai_score === "number" && (
            <div className="hidden h-1 w-12 overflow-hidden rounded-full bg-white/[0.06] sm:block">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
                style={{
                  width: `${Math.min(Math.max(lead.ai_score, 0), 100)}%`,
                }}
              />
            </div>
          )}
        </div>
      </div>

      <div>
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[9px] font-medium ${status.className}`}
        >
          {status.label}
        </span>
      </div>

      <div className="hidden md:block">
        <button
          onClick={onView}
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-slate-700 transition group-hover:border-white/[0.08] group-hover:text-slate-300"
          aria-label={`View ${lead.name}`}
        >
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 border-t border-white/[0.05] pt-3 md:hidden">
        <div>
          <p className="text-[9px] text-slate-700">Budget</p>
          <p className="mt-1 text-[10px] text-slate-400">
            {lead.budget || "Not provided"}
          </p>
        </div>

        <div>
          <p className="text-[9px] text-slate-700">Timeline</p>
          <p className="mt-1 text-[10px] text-slate-400">
            {lead.timeline || "Not provided"}
          </p>
        </div>
      </div>
    </article>
  );
}

function LeadDetailsDrawer({
  lead,
  onClose,
}: {
  lead: Lead;
  onClose: () => void;
}) {
  const score = lead.ai_score ?? 0;

  const statusStyles: Record<string, string> = {
    qualified: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    nurture: "border-amber-400/20 bg-amber-400/10 text-amber-300",
    disqualified: "border-red-400/20 bg-red-400/10 text-red-300",
    new: "border-blue-400/20 bg-blue-400/10 text-blue-300",
  };

  return (
    <>
      <div
        className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <aside className="fixed right-0 top-0 z-[80] flex h-full w-full max-w-xl flex-col border-l border-white/[0.08] bg-[#080b11] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-400">
              Lead Details
            </p>
            <h2 className="mt-1 text-lg font-semibold text-white">
              Enquiry overview
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-slate-400 transition hover:bg-white/[0.07] hover:text-white"
            aria-label="Close lead details"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="truncate text-2xl font-semibold tracking-tight text-white">
                {lead.name}
              </h3>

              <div className="mt-2 space-y-1.5">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{lead.email}</span>
                </div>

                {lead.company && (
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Building2 className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{lead.company}</span>
                  </div>
                )}
              </div>
            </div>

            <span
              className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium capitalize ${
                statusStyles[lead.status] ??
                "border-white/10 bg-white/[0.04] text-slate-300"
              }`}
            >
              {lead.status || "new"}
            </span>
          </div>

          <div className="mt-6 rounded-2xl border border-violet-400/10 bg-gradient-to-br from-violet-500/[0.08] to-blue-500/[0.04] p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-violet-400" />
                  <span className="text-sm font-medium text-white">
                    AI Qualification
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Automated lead assessment
                </p>
              </div>

              <div className="text-right">
                <span className="text-3xl font-bold text-white">{score}</span>
                <span className="text-sm text-slate-500">/100</span>
              </div>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500 transition-all"
                style={{ width: `${Math.min(Math.max(score, 0), 100)}%` }}
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <DetailItem
              label="Intent"
              value={lead.ai_intent || "Not assessed"}
            />
            <DetailItem
              label="Urgency"
              value={lead.ai_urgency || "Not assessed"}
            />
            <DetailItem
              label="Service"
              value={lead.ai_service || "Not assessed"}
            />
            <DetailItem
              label="Timeline"
              value={lead.timeline || "Not specified"}
            />
            <DetailItem label="Budget" value={lead.budget || "Not specified"} />
            <DetailItem
              label="Received"
              value={new Date(lead.created_at).toLocaleDateString("en-NG", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            />
          </div>

          <DetailSection
            title="AI Summary"
            icon={<Sparkles className="h-3.5 w-3.5" />}
          >
            {lead.ai_summary || "No AI summary available."}
          </DetailSection>

          <DetailSection
            title="Qualification Reason"
            icon={<Sparkles className="h-3.5 w-3.5" />}
          >
            {lead.ai_reason || "No qualification reasoning available."}
          </DetailSection>

          <DetailSection
            title="Original Enquiry"
            icon={<MessageSquare className="h-3.5 w-3.5" />}
          >
            {lead.message || "No enquiry message provided."}
          </DetailSection>

          <div className="mt-6 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.04] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/10">
                <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Automation processed
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  LeadFlow qualification workflow is active
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 truncate text-sm font-medium capitalize text-slate-200">
        {value}
      </p>
    </div>
  );
}

function DetailSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {icon}
        {title}
      </div>
      <div className="mt-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
        <p className="whitespace-pre-wrap text-sm leading-6 text-slate-300">
          {children}
        </p>
      </div>
    </div>
  );
}

function SearchEmptyState({
  hasSearch,
  hasFilter,
  clearSearch,
  clearFilter,
}: {
  hasSearch: boolean;
  hasFilter: boolean;
  clearSearch: () => void;
  clearFilter: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.02] text-slate-500">
        <Search size={19} />
      </div>

      <h3 className="mt-5 text-sm font-semibold text-slate-200">
        No matching leads
      </h3>

      <p className="mt-2 max-w-sm text-xs leading-5 text-slate-600">
        Try a different search term or clear your active filter.
      </p>

      <div className="mt-5 flex gap-2">
        {hasSearch && (
          <button
            type="button"
            onClick={clearSearch}
            className="rounded-lg border border-white/[0.08] px-3 py-2 text-[10px] text-slate-400 hover:text-white"
          >
            Clear search
          </button>
        )}

        {hasFilter && (
          <button
            type="button"
            onClick={clearFilter}
            className="rounded-lg border border-white/[0.08] px-3 py-2 text-[10px] text-slate-400 hover:text-white"
          >
            Clear filter
          </button>
        )}
      </div>
    </div>
  );
}

function FlowItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 ${
        active
          ? "border-violet-400/15 bg-violet-500/[0.06]"
          : "border-white/[0.05] bg-white/[0.015]"
      }`}
    >
      <div
        className={`flex h-7 w-7 items-center justify-center rounded-lg ${
          active
            ? "bg-violet-500/10 text-violet-300"
            : "bg-white/[0.03] text-slate-600"
        }`}
      >
        <Icon size={13} />
      </div>

      <span className="text-[10px] font-medium text-slate-400">{label}</span>

      {active && (
        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-violet-400" />
      )}
    </div>
  );
}

function FlowConnector() {
  return (
    <div className="ml-6 h-2 border-l border-dashed border-violet-400/20" />
  );
}

function SystemItem({ name, status }: { name: string; status: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="text-xs text-slate-400">{name}</span>
      </div>

      <span className="text-[9px] text-emerald-400/70">{status}</span>
    </div>
  );
}
