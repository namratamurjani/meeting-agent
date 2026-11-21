# Meeting-to-Execution Agent

Next.js 14 · TypeScript · Tailwind · Prisma (SQLite) · Anthropic / OpenAI / offline mock

## Run locally
```bash
cd meeting-agent
npm install
cp .env.example .env          # Windows: copy .env.example .env
npx prisma db push
npx prisma db seed
npm run dev                   # http://localhost:3000
```
Reset demo data any time: `npm run db:reset`

## Demo script (works with zero API keys)
1. Ingest transcript -> "Load sample transcript" -> "Analyze transcript"
2. Review & confirm -> resolve the Timeline reversal conflict (Nov 15 -> Dec 10), fix the owner of the unowned task, confirm the vague date -> "Approve & execute"
3. Memory & task board -> old decision is Superseded (toggle "Show superseded too"), tasks have simulated tracker links
4. Demo Control Panel (top right) -> "Simulate 24h deadline check" and "Run weekly digest now"
5. Weekly digests & logs -> per-person digests and every notification payload

## Real providers
Edit `.env`: `LLM_PROVIDER=anthropic|openai` + key; `TRACKER_PROVIDER=trello|webhook` + keys;
`NOTIFY_SLACK_WEBHOOK_URL`, `NOTIFY_DISCORD_WEBHOOK_URL`, `RESEND_API_KEY` or `SMTP_*`; `ENABLE_CRON=true` for node-cron.

## Endpoints
POST /api/meetings/analyze · GET /api/meetings · GET /api/meetings/:id · POST /api/meetings/:id/approve
GET /api/board · PATCH /api/tasks/:id · GET /api/logs · GET /api/team · GET /api/status
POST|GET /api/cron/{deadline-reminders|weekly-digest} (x-cron-secret if CRON_SECRET set) · POST /api/demo/{job}
POST /api/webhooks/tracker (Trello / Zapier inbound sync)
