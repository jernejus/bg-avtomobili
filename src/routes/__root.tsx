import { createRootRoute, HeadContent, Outlet, Scripts, Link } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { site } from "@/lib/site";
import { autoDealerJsonLd } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="text-xs uppercase tracking-widest text-accent font-semibold">404</div>
        <h1 className="mt-3 font-display text-4xl font-bold text-foreground">Stran ne obstaja</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Iskane strani nismo našli. Mogoče je bila premaknjena ali odstranjena.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-deep transition-colors"
          >
            Nazaj na domačo stran
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0B2A4A" },
      { httpEquiv: "content-language", content: "sl" },
      { title: `${site.name} — Rabljena vozila, zavarovanja in servis v Šentjurju` },
      { name: "description", content: site.description },
      { name: "author", content: site.legalName },
      { property: "og:site_name", content: site.name },
      { property: "og:locale", content: "sl_SI" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(autoDealerJsonLd()),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sl">
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
  return <Outlet />;
}
