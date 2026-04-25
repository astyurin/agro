# Agro Landing (Next.js static export)

## SEO architecture

- Main commercial page: `/`
- Country cluster pages:
  - `/fishmeal-buyers`
  - `/fishmeal-buyers/india`
  - `/fishmeal-buyers/pakistan`
  - `/fishmeal-buyers/morocco`
  - `/fishmeal-buyers/mauritania`
  - `/fishmeal-buyers/south-africa`
- Generated metadata routes:
  - `/robots.txt` (from `app/robots.ts`)
  - `/sitemap.xml` (from `app/sitemap.ts`)

## Run locally

```bash
npm install
npm run dev
```

## Build static output

```bash
npm run build
```

Static files are generated in `out/`.

## Deploy to Cloudflare (Wrangler)

```bash
npx wrangler deploy
```

Wrangler serves assets from `out/` using `wrangler.toml`.
