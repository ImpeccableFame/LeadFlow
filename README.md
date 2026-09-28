# Impeccable LeadFlow

A portfolio-grade AI lead qualification and automation demo built for ImpeccableTech.

## Architecture

Website (Next.js) → API route → n8n → AI qualification → Supabase → Dashboard

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- n8n
- OpenAI API
- Supabase/PostgreSQL
- REST APIs

## 1. Requirements

Install:

- Node.js 20+
- VS Code
- A Supabase project
- An n8n instance (local Docker is fine)
- An OpenAI API key

## 2. Install

```bash
npm install
```

Copy `.env.example` to `.env.local` and fill in your values.

## 3. Create the database

Open Supabase SQL Editor and run:

```text
supabase/schema.sql
```

## 4. Configure n8n

Import:

```text
n8n/leadflow-workflow.json
```

Then configure the n8n environment variables:

- OPENAI_API_KEY
- OPENAI_MODEL
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY

Activate the workflow and copy the production webhook URL into:

```text
N8N_LEAD_WEBHOOK_URL
```

## 5. Start the app

```bash
npm run dev
```

Open:

http://localhost:3000

Dashboard:

http://localhost:3000/dashboard

## Important security notes

- Never put `SUPABASE_SERVICE_ROLE_KEY` in browser code.
- Never commit `.env.local`.
- For production, add authentication before exposing the dashboard.
- Add rate limiting and bot protection to the public lead form.
- Use a dedicated low-privilege database role where practical.

## Portfolio story

The project demonstrates:

1. Lead capture
2. API design
3. Workflow automation
4. AI qualification
5. Structured data storage
6. Dashboard reporting
7. Human-in-the-loop routing potential

## Next improvements

- Add authentication
- Add lead detail pages
- Add filters/search
- Add Slack/WhatsApp notifications
- Add automated email response
- Add follow-up scheduler
- Add AI confidence and human approval
- Add CRM integration
- Add analytics
