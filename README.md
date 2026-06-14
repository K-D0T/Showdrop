# Showdrop 👟

A clean, fast website that tracks **upcoming sneaker drops** from the biggest
brands — **Jordan, Nike, adidas, and New Balance** — with release dates,
retail prices, product images, and direct links to each drop.

Built with **Next.js (App Router)** and deployed on **Vercel**.

## Features

- **Upcoming drops grid** — every release sorted soonest-first, with shoe
  imagery, brand, MSRP, and a link to the product/drop page.
- **Live countdowns** — each card shows how long until the drop (`Drops in 3d 4h`)
  and flags anything releasing within 7 days with a **Soon** badge.
- **Filter & search** — filter by brand or search by name instantly.
- **Auto-expiring** — drops whose date has passed are hidden automatically, so
  the site only ever shows what's still ahead.
- **JSON API** — `GET /api/drops` returns the current upcoming drops as JSON.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- React 18
- Plain CSS (no UI framework) for a self-contained, fast build

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm start
```

## Deploying to Vercel

This is a standard Next.js app, so Vercel auto-detects everything.

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Keep the defaults (Framework: **Next.js**, Build: `next build`) and click
   **Deploy**.

Or deploy from the CLI:

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

No environment variables are required.

## Updating the drops

Release data lives in [`lib/drops.ts`](./lib/drops.ts) as a typed array. Each
entry looks like:

```ts
{
  id: "aj5-sunset",
  name: 'Air Jordan 5 "Sunset"',
  brand: "Jordan",
  releaseDate: "2026-07-01", // YYYY-MM-DD
  price: 215,                // USD MSRP
  image: "https://…",        // product image URL
  link: "https://…",         // product / drop details page
}
```

Add, edit, or remove entries and the site updates on the next build. Past-dated
drops are filtered out automatically by `getUpcomingDrops()`.

> **Want it fully automated?** The data layer is intentionally isolated. To pull
> drops from a live source instead of the static list, replace the body of
> `getUpcomingDrops()` (and `app/api/drops/route.ts`) with a fetch to your feed
> of choice — the UI consumes the same `Drop[]` shape either way.

## Data & attribution

Release dates, prices, and imagery are community-sourced from public sneaker
release calendars (e.g. [House of Heat](https://houseofheat.co)). Dates marked
with `*` are estimates and prices are manufacturer suggested retail — both are
subject to change. Showdrop is an informational project and is not affiliated
with any brand or retailer.
