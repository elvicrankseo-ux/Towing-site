# Ironline Towing — Next.js Starter

A one-page towing/roadside-assistance site built with Next.js 14 (App
Router) and Tailwind CSS. Designed to be re-skinned quickly for different
towing clients — all business details live in one file.

## Rebrand for a new client

Edit `lib/business.ts` — name, phone number, tagline, service list,
service areas, and testimonials all pull from there. Colors and fonts are
in `tailwind.config.ts` and `app/layout.tsx` if you want a different
palette per client.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel (free)

**Option A — GitHub (recommended for ongoing edits)**
1. Create a new GitHub repo and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial towing site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
2. Go to vercel.com → New Project → import the GitHub repo.
3. Leave the default build settings (Next.js is auto-detected) and click
   Deploy. You'll get a live `.vercel.app` URL in about a minute.
4. Every future push to `main` auto-deploys.

**Option B — Vercel CLI (fastest, no GitHub needed)**
```bash
npm install -g vercel
vercel
```
Follow the prompts; it deploys straight from this folder.

## Connect a custom domain

In the Vercel project → Settings → Domains, add the client's domain (e.g.
`ironlinetowing.com`) and update the DNS records it gives you at their
registrar (Hostinger, GoDaddy, etc.).

## What's included

- Sticky header with tap-to-call
- Hero with dispatch-style beacon indicator and average response time
- Services grid (towing, flatbed, jump-start, lockout, tire change, fuel)
- Service-area list (edit for local SEO — one entry per city/neighborhood
  you actually cover)
- Testimonials
- Mobile sticky "Call Now" bar
- Fully responsive, keyboard-focus visible, respects reduced-motion
