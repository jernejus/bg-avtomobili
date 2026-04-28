import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Clock, Phone, Mail, Send } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactCard } from "@/components/ContactCard";
import { buildMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import teamSales from "@/assets/team-sales.jpg";
import teamInsurance from "@/assets/team-insurance.jpg";

export const Route = createFileRoute("/poti-do-nas")({
  head: () =>
    buildMeta({
      title: `Poti do nas — ${site.name} | Maribor`,
      description: `Kontaktni podatki, lokacija in delovni čas Avtohiše Novak v Mariboru. Pokličite, pišite preko WhatsApp ali Viber, ali oddajte povpraševanje.`,
      path: "/poti-do-nas",
      image: "/og-kontakt.jpg",
    }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-16 lg:py-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Kontakt
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl text-balance max-w-3xl">
            Poti do nas
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Najdete nas v Mariboru. Pokličite, pišite ali se enostavno oglasite.
          </p>
        </div>
      </section>

      {/* Lokacija + delovni čas */}
      <section className="container-page py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
            <iframe
              title="Lokacija Avtohiša Novak"
              src={`https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=15&output=embed`}
              className="w-full h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                <MapPin className="h-4 w-4" /> Naslov
              </div>
              <div className="mt-3 font-display text-lg font-bold text-foreground">
                {site.legalName}
              </div>
              <div className="text-muted-foreground">
                {site.address.street}<br />
                {site.address.postal} {site.address.city}, {site.address.country}
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${site.geo.lat},${site.geo.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-deep transition-colors"
              >
                Navigacija
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                <Clock className="h-4 w-4" /> Delovni čas
              </div>
              <ul className="mt-3 space-y-1.5 text-sm">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span className="text-foreground font-medium">{h.day}</span>
                    <span className="text-muted-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                Splošni kontakt
              </div>
              <div className="mt-3 space-y-2 text-sm">
                <a href={`tel:${site.phoneRaw}`} className="flex items-center gap-2 text-foreground hover:text-primary">
                  <Phone className="h-4 w-4" /> {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-foreground hover:text-primary">
                  <Mail className="h-4 w-4" /> {site.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontaktne osebe */}
      <section className="container-page py-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Vaši svetovalci
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Pokličite osebo, ki vam najbolj pomaga
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ContactCard contact={site.contacts.sales} image={teamSales} title="Prodaja in svetovanje" />
          <ContactCard contact={site.contacts.insurance} image={teamInsurance} title="Zavarovanja" />
        </div>
        <div className="mt-6 grid gap-6 max-w-3xl mx-auto">
          <ContactCard
            contact={site.contacts.service}
            title="Servis in delavnica"
            showWhatsapp={false}
            showViber={false}
          />
        </div>
      </section>

      {/* Obrazec */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] max-w-5xl mx-auto">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                Pišite nam
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Pokličemo vas nazaj.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Pustite kontakt in kratko vprašanje. Oglasimo se vam še isti delovni dan.
              </p>
            </div>
            <CallbackForm />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function CallbackForm() {
  const [topic, setTopic] = useState("Prodaja");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const subject = encodeURIComponent(`Povpraševanje (${topic}) — ${name || "spletna stran"}`);
  const body = encodeURIComponent(
    `Ime: ${name}\nTelefon: ${phone}\nTema: ${topic}\n\nSporočilo:\n${message}`,
  );
  const mailto = `mailto:${site.email}?subject=${subject}&body=${body}`;

  return (
    <form
      action={mailto}
      method="post"
      encType="text/plain"
      className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-soft)] space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-foreground">Vaše ime</span>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Janez Novak"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-foreground">Telefon</span>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="+386 41 ..."
          />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-foreground">Tema</span>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option>Prodaja</option>
          <option>Odkup vozila</option>
          <option>Zavarovanje</option>
          <option>Servis</option>
          <option>Kleparstvo / ličarstvo</option>
          <option>Drugo</option>
        </select>
      </label>
      <label className="block">
        <span className="text-sm font-medium text-foreground">Sporočilo</span>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Kratek opis..."
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all"
      >
        <Send className="h-4 w-4" /> Pošlji povpraševanje
      </button>
      <p className="text-xs text-muted-foreground">
        Klik odpre vaš e-poštni program z vnaprej pripravljenim sporočilom.
      </p>
    </form>
  );
}
