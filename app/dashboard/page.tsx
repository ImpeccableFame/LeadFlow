import { createClient } from "@supabase/supabase-js";
import DashboardClient, { type Lead } from "./DashboardClient";

async function getLeads(): Promise<Lead[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) return [];

  const supabase = createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    console.error("Dashboard leads fetch failed:", error.message);
    return [];
  }

  return (data ?? []) as Lead[];
}

export default async function Dashboard() {
  const leads = await getLeads();

  return <DashboardClient leads={leads} />;
}
