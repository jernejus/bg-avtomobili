import { useEffect, useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { vsebina, slika } from "@/lib/vsebina";

export function HeroRotator() {
  const slides = vsebina.naslovniZaslon.diapozitivi;
  const drugiGumb = vsebina.naslovniZaslon.drugiGumb;
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
  }, [slides.length]);

  const slide = slides[active];

  return (
    <section
      className="relative overflow-hidden bg-primary"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      aria-roledescription="carousel"
    >
      <div className="grid min-h-[560px] lg:min-h-[640px] lg:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <div key={`text-${active}`} className="hero-fade-enter max-w-xl">
            <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
              {slide.nadnaslov}
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              {slide.naslov}
            </h1>
            <p className="mt-5 text-base text-primary-foreground/80 sm:text-lg max-w-lg">
              {slide.podnaslov}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={slide.gumb.povezava}
                className="inline-flex items-center gap-1.5 rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5"
              >
                {slide.gumb.besedilo} <ChevronRight className="h-5 w-5" />
              </Link>
              <Link
                to={drugiGumb.povezava}
                className="inline-flex items-center gap-1.5 rounded-md border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 text-base font-medium text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                {drugiGumb.besedilo}
              </Link>
            </div>
          </div>

          <div className="mt-10 flex gap-2" role="tablist" aria-label="Predstavitev">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}: ${s.naslov}`}
                aria-selected={i === active}
                role="tab"
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-10 bg-accent" : "w-5 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative h-[280px] sm:h-[360px] lg:h-auto overflow-hidden">
          {slides.map((s, i) => (
            <img
              key={i}
              src={slika(s.slika)}
              alt={s.opisSlike}
              width={1536}
              height={1024}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                i === active ? "opacity-100" : "opacity-0"
              } ${i === active ? "hero-zoom" : ""}`}
            />
          ))}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
