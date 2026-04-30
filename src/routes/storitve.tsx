import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { buildMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { vsebina, ikone, type IkonaIme } from "@/lib/vsebina";

const v = vsebina.storitve;

export const Route = createFileRoute("/storitve")({
  head: () =>
    buildMeta({
      title: v.seo.naslov,
      description: v.seo.opis,
      path: "/storitve",
      image: "/og-storitve.jpg",
    }),
  component: Storitve,
});

function Storitve() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-16 lg:py-24">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            {v.uvod.nadnaslov}
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl text-balance max-w-3xl">
            {v.uvod.naslov}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/80">{v.uvod.besedilo}</p>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            {v.potStranke.nadnaslov}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {v.potStranke.naslov}
          </h2>
        </div>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {v.potStranke.koraki.map((step, i) => (
            <li key={step.stevilka} className="relative rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground font-display font-bold">
                  {step.stevilka}
                </div>
                {step.partner && (
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Partner
                  </span>
                )}
              </div>
              <div className="mt-4 font-display text-base font-bold text-foreground">{step.naslov}</div>
              <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.opis}</div>
              {i < v.potStranke.koraki.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 z-10 h-0.5 w-4 bg-border" />
              )}
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-muted-foreground text-center">{v.potStranke.opomba}</p>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              {v.vseStoritve.nadnaslov}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
              {v.vseStoritve.naslov}
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {v.vseStoritve.seznam.map((s) => {
              const Icon = ikone[s.ikona as IkonaIme];
              return (
                <article
                  key={s.naslov}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">{s.naslov}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.opis}</p>
                  {"gumb" in s && s.gumb && (
                    <Link
                      to={s.gumb.povezava}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                    >
                      {s.gumb.besedilo} <ChevronRight className="h-4 w-4" />
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="rounded-2xl bg-primary p-8 sm:p-12 text-center text-primary-foreground">
          <h2 className="font-display text-2xl font-bold sm:text-3xl text-balance">
            {v.spodnjiCta.naslov}
          </h2>
          <p className="mt-2 text-primary-foreground/80">{v.spodnjiCta.besedilo}</p>
          <a
            href={`tel:${site.phoneRaw}`}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground hover:shadow-[var(--shadow-glow)] transition-all"
          >
            {site.phone}
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
