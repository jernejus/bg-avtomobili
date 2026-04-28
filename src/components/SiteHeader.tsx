import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { site } from "@/lib/site";

const nav = [
  { to: "/", label: "Domov" },
  { to: "/storitve", label: "Storitve" },
  { to: "/o-nas", label: "O nas" },
  { to: "/obvestila", label: "Obvestila" },
  { to: "/poti-do-nas", label: "Poti do nas" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur transition-all ${
        scrolled
          ? "bg-background/90 border-b border-border shadow-[var(--shadow-soft)]"
          : "bg-background/70"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold font-display">
            AN
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-foreground">{site.name}</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              od {site.founded} • Maribor
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                className:
                  "px-3 py-2 text-sm font-medium text-primary rounded-md bg-surface",
              }}
              inactiveProps={{
                className:
                  "px-3 py-2 text-sm font-medium text-foreground/80 rounded-md hover:bg-surface hover:text-primary transition-colors",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/ponudba"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5"
          >
            Ponudba vozil
            <ChevronRight className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-surface"
            aria-label="Meni"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container-page flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                activeProps={{ className: "py-3 text-base font-semibold text-primary" }}
                inactiveProps={{ className: "py-3 text-base text-foreground/80" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/ponudba"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-md bg-accent px-4 py-3 text-base font-semibold text-accent-foreground sm:hidden"
            >
              Poglejte ponudbo vozil →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
