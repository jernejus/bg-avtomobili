import { createFileRoute } from "@tanstack/react-router";
import { Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { buildMeta } from "@/lib/seo";
import { notices } from "@/lib/notices";
import { vsebina } from "@/lib/vsebina";

const o = vsebina.obvestila;

export const Route = createFileRoute("/obvestila")({
  head: () =>
    buildMeta({
      title: o.seo.naslov,
      description: o.seo.opis,
      path: "/obvestila",
      image: "/og-obvestila.jpg",
    }),
  component: Obvestila,
});

function Obvestila() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-16 lg:py-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            {o.uvod.nadnaslov}
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl text-balance max-w-3xl">
            {o.uvod.naslov}
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">{o.uvod.besedilo}</p>
        </div>
      </section>

      <section className="container-page py-12 lg:py-16">
        <div className="grid gap-5 max-w-3xl mx-auto">
          {notices.map((n) => (
            <article
              key={n.id}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(n.date).toLocaleDateString("sl-SI", { day: "numeric", month: "long", year: "numeric" })}
              </div>
              <h2 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">{n.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{n.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
