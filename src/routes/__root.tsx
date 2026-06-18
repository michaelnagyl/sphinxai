import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import faviconAsset from "../assets/sphinx-favicon-32.png.asset.json";
import faviconLargeAsset from "../assets/sphinx-favicon-512.png.asset.json";

const SITE_URL = "https://www.sphinxai.net";
const OG_IMAGE_URL = "https://www.sphinxai.net/og-image.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      {
        title: "SphinxAI | AI Voice Agents for Calls, Leads & Appointments",
      },
      {
        name: "description",
        content:
          "SphinxAI helps businesses answer calls instantly, qualify leads, book appointments, and automate customer communication in Arabic and English.",
      },
      { name: "author", content: "SphinxAI" },

      {
        property: "og:site_name",
        content: "SphinxAI",
      },
      {
        property: "og:title",
        content: "SphinxAI | AI Voice Agents for Calls, Leads & Appointments",
      },
      {
        property: "og:description",
        content:
          "SphinxAI helps businesses answer calls instantly, qualify leads, book appointments, and automate customer communication in Arabic and English.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: SITE_URL,
      },
      {
        property: "og:image",
        content: OG_IMAGE_URL,
      },
      {
        property: "og:image:secure_url",
        content: OG_IMAGE_URL,
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:type",
        content: "image/png",
      },
      {
        property: "og:image:alt",
        content: "SphinxAI — AI Voice Agents for Calls, Leads & Appointments",
      },

      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "SphinxAI | AI Voice Agents for Calls, Leads & Appointments",
      },
      {
        name: "twitter:description",
        content:
          "SphinxAI helps businesses answer calls instantly, qualify leads, book appointments, and automate customer communication in Arabic and English.",
      },
      {
        name: "twitter:image",
        content: OG_IMAGE_URL,
      },
      {
        name: "twitter:image:alt",
        content: "SphinxAI — AI Voice Agents for Calls, Leads & Appointments",
      },
    ],

    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "canonical",
        href: SITE_URL,
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: faviconAsset.url,
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        href: faviconLargeAsset.url,
      },
      {
        rel: "apple-touch-icon",
        href: faviconLargeAsset.url,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "SphinxAI",
              url: SITE_URL,
              logo: `${SITE_URL}/sphinx-logo.png`,
              description:
                "AI voice agents for clinics, real estate, customer service, and sales teams in Egypt and MENA.",
            },
            {
              "@type": "WebSite",
              name: "SphinxAI",
              url: SITE_URL,
            },
          ],
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
