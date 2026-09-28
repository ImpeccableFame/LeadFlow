import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  company: z.string().max(160).optional().default(""),
  message: z.string().min(10).max(5000),
  budget: z.string().max(80).optional().default(""),
  timeline: z.string().max(80).optional().default(""),
});

export async function POST(request: Request) {
  try {
    const body = schema.parse(await request.json());

    const lead = {
      ...body,
      source: "website",
      status: "new",
    };

    // -----------------------------------------
    // 1. Check Supabase configuration
    // -----------------------------------------

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing Supabase environment variables.");

      return NextResponse.json(
        {
          error:
            "Supabase is not configured. Check NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
        },
        { status: 500 },
      );
    }

    // -----------------------------------------
    // 2. Create Supabase client
    // -----------------------------------------

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    // -----------------------------------------
    // 3. Save lead to Supabase
    // -----------------------------------------

    const { data, error } = await supabase
      .from("leads")
      .insert(lead)
      .select()
      .single();

    if (error) {
      console.error("Supabase insert failed:", error);

      return NextResponse.json(
        {
          error: `Supabase insert failed: ${error.message}`,
        },
        { status: 500 },
      );
    }

    console.log("Lead saved successfully:", data);

    // -----------------------------------------
    // 4. Send to n8n if configured
    // -----------------------------------------

    const webhook = process.env.N8N_LEAD_WEBHOOK_URL;

    if (webhook) {
      try {
        const n8nResponse = await fetch(webhook, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...lead,
            id: data.id,
          }),
          cache: "no-store",
        });

        if (!n8nResponse.ok) {
          console.error(
            "n8n webhook returned:",
            n8nResponse.status,
            await n8nResponse.text(),
          );
        }
      } catch (n8nError) {
        console.error("n8n webhook failed:", n8nError);
      }
    }

    // -----------------------------------------
    // 5. Return success
    // -----------------------------------------

    return NextResponse.json({
      ok: true,
      message: "Thanks — your enquiry has been captured successfully.",
      leadId: data.id,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Please provide valid lead information.",
        },
        { status: 400 },
      );
    }

    console.error("Lead processing error:", error);

    return NextResponse.json(
      {
        error: "Unable to process the enquiry.",
      },
      { status: 500 },
    );
  }
}
