import { useEffect, useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import heroPartnership from "@/assets/hero-partnership.jpg";
import heroWorkshop from "@/assets/hero-workshop.jpg";
import heroCars from "@/assets/hero-cars.jpg";
import heroTrade from "@/assets/hero-trade.jpg";

type Slide = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: { label: string; to: string };
  image: string;
  alt: string;
};

const slides: Slide[] = [
  {
    eyebrow: "Partnerstvo in zaupanje • od 2001",
    title: "Stisk roke, ki velja 25 let.",
    subtitle:
      "B&G Avtomobili — vaš partner za rabljena vozila v Šentjurju in širši Štajerski. Vaši sosedje, vaš avto trgovec.",
    cta: { label: "Spoznajte nas", to: "/o-nas" },
    image: heroPartnership,
    alt: "Stisk roke pred salonom B&G Avtomobili v Šentjurju",
  },
  {
    eyebrow: "Vse na enem mestu",
    title: "Vaš avto. Pod eno streho.",
    subtitle:
      "Prodaja, odkup, zavarovanje, mehanika, kleparstvo, ličarstvo. Z osebnim pristopom — od prvega ogleda do servisa.",
    cta: { label: "Naše storitve", to: "/storitve" },
    image: heroWorkshop,
    alt: "Sodobna servisna delavnica B&G Avtomobili",
  },
  {
    eyebrow: "Nova ponudba vsak teden",
    title: "Vaš novi rabljeni avto vas čaka.",
    subtitle:
      "Skrbno izbrana, preverjena vozila. Vsak avto prej pregledamo v naši delavnici.",
    cta: { label: "Poglejte ponudbo vozil", to: "/ponudba" },
    image: heroCars,
    alt: "Ponudba rabljenih vozil v B&G Avtomobili",
  },
  {
    eyebrow: "Star za nov",
    title: "Vaš stari avto del nove zgodbe.",
    subtitle:
      "Pošten odkup ali menjava. Hitra ocena, takojšnje plačilo, brez skrivnih stroškov.",
    cta: { label: "Pošljite povpraševanje", to: "/poti-do-nas" },
    image: heroTrade,
    alt: "Predaja ključev v B&G Avtomobili",
  },
];

export function HeroRotator() {
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => {
      if (!paused.current) setActive((i) => (i + 1) % slides.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  const slide = slides[active];

  return (
    <section
      className="relative overflow-hidden bg-primary"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      aria-roledescription="carousel"
    >
      <div className="grid min-h-[560px] lg:min-h-[640px] lg:grid-cols-2">
        {/* Text side */}
        <div className="relative z-10 flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <div key={`text-${active}`} className="hero-fade-enter max-w-xl">
            <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
              {slide.eyebrow}
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              {slide.title}
            </h1>
            <p className="mt-5 text-base text-primary-foreground/80 sm:text-lg max-w-lg">
              {slide.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={slide.cta.to}
                className="inline-flex items-center gap-1.5 rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5"
              >
                {slide.cta.label} <ChevronRight className="h-5 w-5" />
              </Link>
              <Link
                to="/poti-do-nas"
                className="inline-flex items-center gap-1.5 rounded-md border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 text-base font-medium text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                Kontaktirajte nas
              </Link>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-10 flex gap-2" role="tablist" aria-label="Predstavitev">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}: ${s.title}`}
                aria-selected={i === active}
                role="tab"
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-10 bg-accent" : "w-5 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="relative h-[280px] sm:h-[360px] lg:h-auto overflow-hidden">
          {slides.map((s, i) => (
            <img
              key={i}
              src={s.image}
              alt={s.alt}
              width={1536}
              height={1024}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                i === active ? "opacity-100" : "opacity-0"
              } ${i === active ? "hero-zoom" : ""}`}
            />
          ))}
          {/* Subtle gradient blend on left edge for desktop */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
