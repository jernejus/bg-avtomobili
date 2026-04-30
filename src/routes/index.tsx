import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, MapPin, Car, Phone } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { HeroRotator } from "@/components/HeroRotator";
import { ContactCard } from "@/components/ContactCard";
import { buildMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { notices } from "@/lib/notices";
import { vsebina, ikone, slika, type IkonaIme } from "@/lib/vsebina";
import heroCars from "@/assets/hero-cars.jpg";
import sentjurTown from "@/assets/sentjur-town.jpg";
import teamSales from "@/assets/team-sales.jpg";
import teamInsurance from "@/assets/team-insurance.jpg";

const v = vsebina.domov;

export const Route = createFileRoute("/")({
  head: () =>
    buildMeta({
      title: v.seo.naslov,
      description: v.seo.opis,
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

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              {v.predstavitev.nadnaslov}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
              {v.predstavitev.naslov}
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              {v.predstavitev.besedilo}
            </p>
            <div className="mt-6">
              <Link
                to={v.predstavitev.povezava.povezava}
                className="inline-flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all"
              >
                {v.predstavitev.povezava.besedilo} <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {v.stevilke.map((s) => (
              <div
                key={s.opis}
                className="rounded-2xl border border-border bg-surface p-4 text-center sm:p-6"
              >
                <div className="font-display text-3xl font-bold text-primary sm:text-4xl">
                  {s.stevilo}
                </div>
                <div className="mt-2 text-xs text-muted-foreground sm:text-sm leading-tight">
                  {s.opis}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              {v.razlogiZaupanja.nadnaslov}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
              {v.razlogiZaupanja.naslov}
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {v.razlogiZaupanja.kartice.map((card) => {
              const Icon = ikone[card.ikona as IkonaIme];
              return (
                <div
                  key={card.naslov}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                    {card.naslov}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{card.besedilo}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            {v.kontaktnaSekcija.nadnaslov}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {v.kontaktnaSekcija.naslov}
          </h2>
          <p className="mt-3 text-muted-foreground">{v.kontaktnaSekcija.besedilo}</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ContactCard contact={site.contacts.sales} image={teamSales} title={v.kontaktnaSekcija.naslovProdaja} />
          <ContactCard contact={site.contacts.insurance} image={teamInsurance} title={v.kontaktnaSekcija.naslovZavarovanja} />
        </div>
      </section>

      <section className="container-page pb-16 lg:pb-24">
        <Link to="/ponudba" className="group relative block overflow-hidden rounded-3xl bg-primary">
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
                {v.ponudbaCta.nadnaslov}
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-primary-foreground sm:text-5xl text-balance">
                {v.ponudbaCta.naslov}
              </h2>
              <p className="mt-4 max-w-xl text-primary-foreground/85">{v.ponudbaCta.besedilo}</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-4 text-base font-bold text-accent-foreground shadow-[var(--shadow-glow)] w-fit">
              <Car className="h-5 w-5" />
              {v.ponudbaCta.gumb}
              <ChevronRight className="h-5 w-5" />
            </div>
          </div>
        </Link>
      </section>

      {latest && (
        <section className="container-page pb-16 lg:pb-24">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                {v.zadnjeObvestilo.nadnaslov}
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
                {v.zadnjeObvestilo.naslov}
              </h2>
            </div>
            <Link to="/obvestila" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
              {v.zadnjeObvestilo.vsaPovezava} <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-soft)]">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {new Date(latest.date).toLocaleDateString("sl-SI", { day: "numeric", month: "long", year: "numeric" })}
            </div>
            <h3 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">{latest.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{latest.summary}</p>
            <Link to="/obvestila" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
              {v.zadnjeObvestilo.vecPovezava} <ChevronRight className="h-4 w-4" />
            </Link>
          </article>
        </section>
      )}

      <section className="relative overflow-hidden">
        <img
          src={sentjurTown}
          alt="Šentjur in okolica — naš dom"
          loading="lazy"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        <div className="relative z-10 container-page py-20 lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
              {v.lokalnaPripadnost.nadnaslov}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-primary-foreground sm:text-5xl text-balance">
              {v.lokalnaPripadnost.naslov}
            </h2>
            <p className="mt-4 text-primary-foreground/85 text-lg leading-relaxed">
              {v.lokalnaPripadnost.besedilo}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground hover:shadow-[var(--shadow-glow)] transition-all"
              >
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
              <Link
                to="/poti-do-nas"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                <MapPin className="h-4 w-4" /> {v.lokalnaPripadnost.gumbKontakt}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {v.spodnjiCta.naslov}
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
              <MapPin className="h-4 w-4" /> {v.spodnjiCta.gumbKontakt}
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
