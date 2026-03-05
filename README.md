This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Blog View Counter

Blog views are stored in [Upstash Redis](https://upstash.com/). For the counter to work in production, set these environment variables (e.g. in Vercel):

- `UPSTASH_REDIS_REST_URL` – your Upstash **REST API** URL (starts with `https://`, e.g. `https://xxx.upstash.io`)  
- `UPSTASH_REDIS_REST_TOKEN` – your Upstash **REST API** token  

In the Upstash dashboard, use the **REST API** section (not "Redis connect" / `redis://`). The REST URL is an `https://...` link; the token is shown there as well. You can create a free Redis database at [console.upstash.com](https://console.upstash.com/). If these variables are not set or the URL is invalid, view counts stay at 0 and the site still runs.

To set initial view counts once (e.g. after first deploy), add `BLOG_VIEWS_SEED_SECRET` in Vercel, then call:

```bash
curl -X POST "https://www.aneedashraf.de/api/blog/views/seed" -H "Content-Type: application/json" -d "{\"secret\":\"YOUR_SECRET\"}"
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
