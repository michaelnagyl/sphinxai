SphinxAI favicon / app icon assets

Upload all files in this folder to the repository public/ folder:
- favicon.ico
- favicon-16x16.png
- favicon-32x32.png
- apple-touch-icon.png
- android-chrome-192x192.png
- android-chrome-512x512.png
- maskable-icon-512x512.png
- site.webmanifest

Then make sure src/routes/__root.tsx has these links once:
{
  rel: "icon",
  href: "/favicon.ico",
  sizes: "any",
},
{
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "/favicon-16x16.png",
},
{
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "/favicon-32x32.png",
},
{
  rel: "apple-touch-icon",
  sizes: "180x180",
  href: "/apple-touch-icon.png",
},
{
  rel: "manifest",
  href: "/site.webmanifest",
},

After commit and Vercel deploy, test:
https://www.sphinxai.net/android-chrome-512x512.png
https://www.sphinxai.net/site.webmanifest
