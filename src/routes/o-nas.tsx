import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildMeta } from "@/lib/seo";
import { vsebina, slika } from "@/lib/vsebina";

const v = vsebina.oNas;

export const Route = createFileRoute("/o-nas")({
  head: () =>
    buildMeta({
      title: v.seo.naslov,
      description: v.seo.opis,
      path: "/o-nas",
      image: "/og-o-nas.jpg",
    }),
  component: ONas,
});

function ONas() {
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

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              {v.zgodba.nadnaslov}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
              {v.zgodba.naslov}
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              {v.zgodba.odstavki.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elevated)]">
            <img
              src={slika(v.zgodba.slika)}
              alt={v.zgodba.opisSlike}
              loading="lazy"
              width={1536}
              height={1024}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              {v.mejniki.nadnaslov}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
              {v.mejniki.naslov}
            </h2>
          </div>
          <ol className="mt-10 relative max-w-3xl mx-auto">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
            {v.mejniki.seznam.map((m) => (
              <li key={m.leto} className="relative pl-12 pb-8 last:pb-0">
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-[10px] font-bold">
                  ●
                </div>
                <div className="font-display text-xl font-bold text-primary">{m.leto}</div>
                <div className="mt-1 text-muted-foreground">{m.besedilo}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            {v.ekipa.nadnaslov}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {v.ekipa.naslov}
          </h2>
        </div>

        <div className="mt-12 space-y-12">
          {v.ekipa.oddelki.map((dept) => {
            const hasWide = dept.clani.some((m) => "siroko" in m && m.siroko);
            return (
              <div key={dept.naslov}>
                <h3 className="font-display text-xl font-bold text-foreground border-l-4 border-accent pl-3">
                  {dept.naslov}
                </h3>
                <div
                  className={`mt-6 grid gap-6 ${
                    hasWide ? "sm:grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-4"
                  }`}
                >
                  {dept.clani.map((m) => {
                    const wide = "siroko" in m && m.siroko;
                    return (
                      <div
                        key={m.ime}
                        className={`overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] ${
                          wide ? "sm:col-span-1 lg:max-w-2xl" : ""
                        }`}
                      >
                        <div className={`overflow-hidden bg-surface ${wide ? "aspect-[16/10]" : "aspect-square"}`}>
                          <img
                            src={slika(m.slika)}
                            alt={m.ime}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="font-display text-base font-bold text-foreground">{m.ime}</div>
                          <div className="text-sm text-muted-foreground">{m.vloga}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
