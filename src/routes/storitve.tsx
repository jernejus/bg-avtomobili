import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Car, ShoppingBag, Hammer, Paintbrush, CircleDot, Wrench,
  ShieldCheck, FileSearch, Snowflake, ChevronRight,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { buildMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const Route = createFileRoute("/storitve")({
  head: () =>
    buildMeta({
      title: `Storitve — ${site.name} | Šentjur`,
      description:
        "Prodaja in odkup rabljenih vozil, sklepanje zavarovanj (Triglav, Sava, Adriatic), kleparstvo, ličarstvo, vulkanizerstvo, mehanika in hladno ravnanje pločevine.",
      path: "/storitve",
      image: "/og-storitve.jpg",
    }),
  component: Storitve,
});

const journey = [
  { n: "1", title: "Izberete vozilo", desc: "Iz naše ponudbe ali uvoz po vaši želji.", partner: false },
  { n: "2", title: "Financiranje*", desc: "Povežemo vas s partnersko banko.", partner: true },
  { n: "3", title: "Zavarovanje", desc: "Triglav, Sava, Adriatic — sklenemo na mestu.", partner: false },
  { n: "4", title: "Servis & vzdrževanje", desc: "Mehanika, kleparstvo, ličarstvo, gume.", partner: false },
  { n: "5", title: "Skrb po nakupu", desc: "Cenitve škode, pomoč pri prijavah, nasvet.", partner: false },
];

const services = [
  { icon: ShoppingBag, title: "Odkup rabljenih vozil", desc: "Pošten odkup, takojšnja izplačila." },
  { icon: Car, title: "Prodaja rabljenih vozil", desc: "Skrbno izbrana in preverjena vozila.", cta: { label: "Naša ponudba", to: "/ponudba" as const } },
  { icon: Hammer, title: "Kleparska dela", desc: "Karosersko popravilo po nesrečah." },
  { icon: Paintbrush, title: "Ličarska dela", desc: "Lakiranje s sodobno opremo in pravim odtenkom." },
  { icon: CircleDot, title: "Vulkanizerske storitve", desc: "Menjava, hramba in prodaja gum." },
  { icon: Wrench, title: "Mehanska dela", desc: "Servisni pregledi, popravila, diagnostika." },
  { icon: ShieldCheck, title: "Sklepanje zavarovanj", desc: "Avtomobilska in premoženjska — Triglav, Sava, Adriatic." },
  { icon: FileSearch, title: "Cenitve in prijava škode", desc: "Za Triglav, Sava in Adriatic Slovenica." },
  { icon: Snowflake, title: "Hladno ravnanje pločevine", desc: "Posledice toče — brez lakiranja, brez izgube vrednosti." },
];

function Storitve() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-16 lg:py-24">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Storitve
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl text-balance max-w-3xl">
            Vse za vaš avto. Pod eno streho.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/80">
            Devet storitev, en tim. Kar pa ne počnemo sami (npr. financiranje, registracija, pranje),
            vas pošljemo k zaupanja vrednim partnerjem.
          </p>
        </div>
      </section>

      {/* Pot stranke */}
      <section className="container-page py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Pot stranke
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Od ogleda do skrbi po nakupu
          </h2>
        </div>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {journey.map((step, i) => (
            <li
              key={step.n}
              className="relative rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground font-display font-bold">
                  {step.n}
                </div>
                {step.partner && (
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Partner
                  </span>
                )}
              </div>
              <div className="mt-4 font-display text-base font-bold text-foreground">
                {step.title}
              </div>
              <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.desc}</div>
              {i < journey.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 z-10 h-0.5 w-4 bg-border" />
              )}
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-muted-foreground text-center">
          * Storitev izvajamo prek preverjenega partnerja.
        </p>
      </section>

      {/* Vse storitve */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Naše storitve
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
              9 storitev, en tim
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                {s.cta && (
                  <Link
                    to={s.cta.to}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                  >
                    {s.cta.label} <ChevronRight className="h-4 w-4" />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16">
        <div className="rounded-2xl bg-primary p-8 sm:p-12 text-center text-primary-foreground">
          <h2 className="font-display text-2xl font-bold sm:text-3xl text-balance">
            Niste prepričani, kaj potrebujete?
          </h2>
          <p className="mt-2 text-primary-foreground/80">Pokličite — najdemo rešitev.</p>
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
