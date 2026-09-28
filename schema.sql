create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  message text not null,
  budget text,
  timeline text,
  source text default 'website',
  status text default 'new',
  ai_score integer,
  ai_summary text,
  ai_intent text,
  ai_urgency text,
  ai_service text,
  ai_reason text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads(created_at desc);
create index if not exists leads_status_idx on public.leads(status);

alter table public.leads enable row level security;

-- Demo policy: server-side service role access is used by the dashboard/API.
-- Do NOT expose the service role key in the browser.
