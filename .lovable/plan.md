## 1. Build status

`bun run build` completes successfully (verified — 0 errors, all routes including `DemoVideo` built). The "preview has not been built yet" message was transient (sandbox restart). I'll call `restart_dev_server` once in build mode to make sure the preview re-attaches. No code changes are needed for the build issue itself.

## 2. Create stable OG image asset

- Generate a 1200×630 `og-image.png` using `imagegen` (premium tier, since it contains brand text).
- Save it as a CDN-backed permanent asset via `lovable-assets create`, with output written to `src/assets/og-image.png.asset.json`. This is the project's standard pattern for stable, permanent public assets (same pattern already used for favicons and the hero video). The image is served from Lovable's CDN at a stable `/__l5e/assets-v1/{asset_id}/og-image.png` URL — immutable, no R2 preview-domain churn.
- Note: the user asked for the URL path to be exactly `/og-image.png`. Vite's `public/` folder can serve that path literally, but uploaded `.asset.json` URLs use the `/__l5e/assets-v1/...` prefix. I'll use the asset-pointer URL (full absolute URL) in the meta tags — this is what crawlers actually need (absolute URL on the production origin) and matches the rest of the project. If you specifically want the literal `/og-image.png` path, say so and I'll drop the PNG straight into `public/` instead.

Image prompt: dark navy SphinxAI branded card, large "SphinxAI" wordmark, subtitle "AI Voice Agents for Calls, Leads & Appointments", subtle waveform/phone motif, premium gradient — matches the site's existing premium dark aesthetic.

## 3. Update metadata in `src/routes/__root.tsx`

Replace the stale R2 preview-domain image URL with the new permanent asset. Update tags to:

- `<title>` → `SphinxAI | AI Voice Agents for Calls, Leads & Appointments`
- `description` → `SphinxAI helps businesses answer calls instantly, qualify leads, book appointments, and automate customer communication in Arabic and English.`
- `og:title` / `og:description` → same as above
- `og:image` → absolute URL `https://sphinxai.lovable.app/__l5e/assets-v1/{asset_id}/og-image.png` (1200×630)
- Add `og:image:width=1200`, `og:image:height=630`, `og:image:type=image/png`
- `twitter:card` → `summary_large_image` (currently `summary`)
- `twitter:image` → same absolute URL as `og:image`
- `twitter:title` / `twitter:description` → updated to match
- Remove `twitter:site=@Lovable` (not the user's handle)

Note: `src/routes/index.tsx` already sets its own title/description/og:title/og:description for the homepage. Per the head-meta rules, leaf route meta overrides root, so the root-level title still applies to all *other* routes. I'll keep the homepage's existing leaf head() intact (it already matches the requested copy) and only update the root.

## 4. Verification

- Re-run `bun run build` to confirm the new asset import resolves and the build stays green.
- `restart_dev_server` to clear the stale preview message.
- Confirm the rendered `<head>` includes the new absolute `og:image` URL (view-source check).
- Tell the user that WhatsApp/Facebook/LinkedIn/X cache previews — they'll need to re-scrape via each platform's debugger (FB Sharing Debugger, LinkedIn Post Inspector, X Card Validator) once published for the new image to appear on already-shared links.

## Files touched

- `src/assets/og-image.png.asset.json` (new)
- `src/routes/__root.tsx` (meta updates)
