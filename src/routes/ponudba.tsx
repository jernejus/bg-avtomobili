import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Phone } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { buildMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { vsebina } from "@/lib/vsebina";

const v = vsebina.ponudba;

export const Route = createFileRoute("/ponudba")({
  head: () =>
    buildMeta({
      title: v.seo.naslov,
      description: v.seo.opis,
      path: "/ponudba",
      image: "/og-ponudba.jpg",
    }),
  component: Ponudba,
});

function Ponudba() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-12 lg:py-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                {v.uvod.nadnaslov}
              </span>
              <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl text-balance">
                {v.uvod.naslov}
              </h1>
              <p className="mt-3 max-w-2xl text-primary-foreground/80">{v.uvod.besedilo}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={site.inventoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:shadow-[var(--shadow-glow)] transition-all"
              >
                {v.uvod.gumbZunanjaPovezava} <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={`tel:${site.contacts.sales.phoneRaw}`}
                className="inline-flex items-center gap-1.5 rounded-md border border-primary-foreground/30 bg-primary-foreground/5 px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                <Phone className="h-4 w-4" /> {site.contacts.sales.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-soft)]">
          <iframe
            title="Ponudba rabljenih vozil"
            src={site.inventoryUrl}
            className="w-full border-0 bg-background"
            style={{ height: "min(1400px, 80vh)", minHeight: 720 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          {v.opozoriloIframe.predBesedilo}{" "}
          <a
            href={site.inventoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium underline underline-offset-2"
          >
            {v.opozoriloIframe.povezavaBesedilo}
          </a>
          {v.opozoriloIframe.poBesedilu}
        </p>
      </section>

      <section className="container-page py-12">
        <div className="rounded-2xl bg-surface p-8 sm:p-12 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl text-balance">
            {v.spodnjiCta.naslov}
          </h2>
          <p className="mt-2 text-muted-foreground">{v.spodnjiCta.besedilo}</p>
          <a
            href={`tel:${site.contacts.sales.phoneRaw}`}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-deep transition-colors"
          >
            <Phone className="h-4 w-4" /> {v.spodnjiCta.gumbPredBesedilo} {site.contacts.sales.phone}
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
