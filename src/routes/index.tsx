import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, ShieldCheck, Users, MapPin, Sparkles, Car, Phone } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { HeroRotator } from "@/components/HeroRotator";
import { ContactCard } from "@/components/ContactCard";
import { buildMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { notices } from "@/lib/notices";
import heroCars from "@/assets/hero-cars.jpg";
import teamSales from "@/assets/team-sales.jpg";
import teamInsurance from "@/assets/team-insurance.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    buildMeta({
      title: `${site.name} — Rabljena vozila Maribor • 25 let tradicije`,
      description:
        "Družinska avtohiša v Mariboru. Prodaja in odkup rabljenih vozil, zavarovanja Triglav, Sava, Adriatic, kleparstvo, ličarstvo, mehanika — vse na enem mestu.",
      path: "/",
      image: "/og-home.jpg",
    }),
  component: Index,
});

function Index() {
  const latest = notices[0];
  return (
    <SiteLayout>
      <HeroRotator />

      {/* Kratko predstavitev + številke */}
      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Kdo smo
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Domača avtohiša, ki vas pozna po imenu.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Že {site.yearsTradition} let pomagamo Štajercem do njihovega naslednjega avta.
              Verjamemo v poštene odnose, kakovostna vozila in v to, da se stranka po nakupu
              vrne — za zavarovanje, servis ali zgolj nasvet.
            </p>
            <div className="mt-6">
              <Link
                to="/o-nas"
                className="inline-flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all"
              >
                Naša zgodba <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {[
              { n: "25+", l: "let tradicije" },
              { n: "5.000+", l: "zadovoljnih strank" },
              { n: "9", l: "storitev pod eno streho" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-border bg-surface p-4 text-center sm:p-6"
              >
                <div className="font-display text-3xl font-bold text-primary sm:text-4xl">
                  {s.n}
                </div>
                <div className="mt-2 text-xs text-muted-foreground sm:text-sm leading-tight">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zakaj nam zaupati */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Zakaj Avtohiša Novak
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Štirje razlogi, zakaj nam stranke zaupajo
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: "Družinska tradicija",
                text: "Tri generacije, ena vrednota — pošten odnos.",
              },
              {
                icon: Sparkles,
                title: "Vse na enem mestu",
                text: "Nakup, zavarovanje, servis, kleparstvo — brez tekanja.",
              },
              {
                icon: MapPin,
                title: "Lokalni partner",
                text: "Maribor in Štajerska. Tu smo bili včeraj, smo danes, bomo jutri.",
              },
              {
                icon: ShieldCheck,
                title: "Pošten odnos",
                text: "Brez skrivnih stroškov. Vsak avto preverjen pred prodajo.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dva kontakta side-by-side */}
      <section className="container-page py-16 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Pokličite nas
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Govorite z osebo, ki vas razume
          </h2>
          <p className="mt-3 text-muted-foreground">
            Brez klicnih centrov. Pokličete — odgovori vaš svetovalec.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ContactCard
            contact={site.contacts.sales}
            image={teamSales}
            title="Prodaja in svetovanje"
          />
          <ContactCard
            contact={site.contacts.insurance}
            image={teamInsurance}
            title="Zavarovanja"
          />
        </div>
      </section>

      {/* Ponudba vozil — velik vizualni blok */}
      <section className="container-page pb-16 lg:pb-24">
        <Link
          to="/ponudba"
          className="group relative block overflow-hidden rounded-3xl bg-primary"
        >
          <img
            src={heroCars}
            alt="Ponudba rabljenih vozil"
            loading="lazy"
            width={1536}
            height={1024}
            className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/30" />
          <div className="relative z-10 grid gap-6 p-8 sm:p-12 lg:grid-cols-[1.5fr_auto] lg:items-center lg:p-16">
            <div>
              <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                Naša ponudba
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-primary-foreground sm:text-5xl text-balance">
                Vaš naslednji avto je verjetno že pri nas.
              </h2>
              <p className="mt-4 max-w-xl text-primary-foreground/85">
                Skrbno izbrana, preverjena vozila. Ponudbo posodabljamo tedensko.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-4 text-base font-bold text-accent-foreground shadow-[var(--shadow-glow)] w-fit">
              <Car className="h-5 w-5" />
              Poglejte ponudbo
              <ChevronRight className="h-5 w-5" />
            </div>
          </div>
        </Link>
      </section>

      {/* Zadnje obvestilo */}
      {latest && (
        <section className="container-page pb-16 lg:pb-24">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                Najnovejše
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
                Zadnje obvestilo
              </h2>
            </div>
            <Link
              to="/obvestila"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
            >
              Vsa obvestila <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-soft)]">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {new Date(latest.date).toLocaleDateString("sl-SI", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
            <h3 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">
              {latest.title}
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{latest.summary}</p>
            <Link
              to="/obvestila"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
            >
              Več obvestil <ChevronRight className="h-4 w-4" />
            </Link>
          </article>
        </section>
      )}

      {/* Footer CTA */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Pridite k nam v Maribor
          </h2>
          <p className="mt-3 text-muted-foreground">
            {site.address.street}, {site.address.postal} {site.address.city}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-deep transition-colors"
            >
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
            <Link
              to="/poti-do-nas"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 font-semibold text-foreground hover:bg-surface transition-colors"
            >
              <MapPin className="h-4 w-4" /> Kako do nas
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
