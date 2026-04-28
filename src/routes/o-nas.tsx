import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import teamOwners from "@/assets/team-owners.jpg";
import teamSales from "@/assets/team-sales.jpg";
import teamInsurance from "@/assets/team-insurance.jpg";
import teamMechanic from "@/assets/team-mechanic.jpg";
import teamBodywork from "@/assets/team-bodywork.jpg";
import teamPaint from "@/assets/team-paint.jpg";
import teamTires from "@/assets/team-tires.jpg";
import dealershipExterior from "@/assets/dealership-exterior.jpg";

export const Route = createFileRoute("/o-nas")({
  head: () =>
    buildMeta({
      title: `O nas — ${site.name} | Partnerstvo in zaupanje od 2001`,
      description:
        "B&G Avtomobili — 25 let tradicije v Šentjurju. Spoznajte našo zgodbo, partnerja in ekipo: prodajo, zavarovanja, mehanike, kleparje in ličarje.",
      path: "/o-nas",
      image: "/og-o-nas.jpg",
    }),
  component: ONas,
});

const departments = [
  {
    title: "Vodstvo",
    members: [
      { name: "Boštjan Brečko & Gregor Golob", role: "Partnerja in ustanovitelja", image: teamOwners, wide: true },
    ],
  },
  {
    title: "Prodaja",
    members: [
      { name: "Marko Kranjc", role: "Vodja prodaje", image: teamSales },
    ],
  },
  {
    title: "Zavarovanja",
    members: [
      { name: "Ana Horvat", role: "Zavarovalniški referent", image: teamInsurance },
    ],
  },
  {
    title: "Servis in delavnica",
    members: [
      { name: "Tomaž Kos", role: "Mehanik", image: teamMechanic },
      { name: "Jure Petek", role: "Klepar", image: teamBodywork },
      { name: "Aleš Vidic", role: "Ličar", image: teamPaint },
      { name: "Boris Zorko", role: "Vulkanizer", image: teamTires },
    ],
  },
];

const milestones = [
  { year: "2001", text: "Boštjan in Gregor odpreta majhno avto trgovino v Šentjurju — rojstvo B&G Avtomobili." },
  { year: "2007", text: "Razširitev na lastno servisno delavnico." },
  { year: "2014", text: "Začetek sodelovanja z Zavarovalnico Triglav, Sava in Adriatic." },
  { year: "2019", text: "Selitev v večji salon, dodano kleparstvo in ličarstvo." },
  { year: "2026", text: "25 let tradicije in več kot 5.000 zadovoljnih strank." },
];

function ONas() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-16 lg:py-24">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            O nas
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl text-balance max-w-3xl">
            Zgodba dveh partnerjev, ki traja že 25 let
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/80">
            Od majhne trgovine z rabljenimi vozili do celovite avtohiše. Naša zgodba je zgodba zaupanja
            naših strank v Šentjurju in širši Štajerski.
          </p>
        </div>
      </section>

      {/* Zgodba + slika */}
      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Naša zgodba
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Začelo se je leta 2001.
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Boštjan Brečko in Gregor Golob — dva prijatelja, dva partnerja — sta z željo
                po poštenem avto trgu odprla majhno avtohišo v Šentjurju. Začela sta z
                desetimi vozili in ogromno vere, da se v tej panogi da delati drugače: z
                osebnim pristopom in dolgoročnimi odnosi.
              </p>
              <p>
                Danes, 25 let kasneje, smo še vedno dva partnerja in ena ekipa. Zavestno smo
                se odločili, da rastemo počasi in skupaj s strankami. Veliko vas je z nami že
                tretji ali četrti avto. Hvala za to zaupanje.
              </p>
              <p>
                Nismo veliki, smo pa popolni. Vse storitve okrog vašega avtomobila ponujamo
                pod eno streho — od prodaje in odkupa, prek zavarovanj, do servisa in
                kleparstva. Tako, kot bi to storil dober prijatelj.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elevated)]">
            <img
              src={dealershipExterior}
              alt="B&G Avtomobili v Šentjurju"
              loading="lazy"
              width={1536}
              height={1024}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mejniki */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Mejniki
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
              25 let v številkah in dejanjih
            </h2>
          </div>
          <ol className="mt-10 relative max-w-3xl mx-auto">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
            {milestones.map((m) => (
              <li key={m.year} className="relative pl-12 pb-8 last:pb-0">
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-[10px] font-bold">
                  ●
                </div>
                <div className="font-display text-xl font-bold text-primary">{m.year}</div>
                <div className="mt-1 text-muted-foreground">{m.text}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ekipa */}
      <section className="container-page py-16 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Ekipa
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Spoznajte ljudi za nasmehom
          </h2>
        </div>

        <div className="mt-12 space-y-12">
          {departments.map((dept) => (
            <div key={dept.title}>
              <h3 className="font-display text-xl font-bold text-foreground border-l-4 border-accent pl-3">
                {dept.title}
              </h3>
              <div
                className={`mt-6 grid gap-6 ${
                  dept.members.some((m) => "wide" in m && m.wide)
                    ? "sm:grid-cols-1"
                    : "sm:grid-cols-2 lg:grid-cols-4"
                }`}
              >
                {dept.members.map((m) => (
                  <div
                    key={m.name}
                    className={`overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] ${
                      "wide" in m && m.wide ? "sm:col-span-1 lg:max-w-2xl" : ""
                    }`}
                  >
                    <div
                      className={`overflow-hidden bg-surface ${
                        "wide" in m && m.wide ? "aspect-[16/10]" : "aspect-square"
                      }`}
                    >
                      <img
                        src={m.image}
                        alt={m.name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="font-display text-base font-bold text-foreground">{m.name}</div>
                      <div className="text-sm text-muted-foreground">{m.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
