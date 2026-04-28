import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground font-bold font-display">
              AN
            </div>
            <div>
              <div className="font-display font-bold text-lg">{site.name}</div>
              <div className="text-[10px] uppercase tracking-widest text-primary-foreground/70">
                {site.yearsTradition} let tradicije
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/75 leading-relaxed">
            {site.description}
          </p>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-accent">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <span>
                {site.address.street}<br />
                {site.address.postal} {site.address.city}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <a href={`tel:${site.phoneRaw}`} className="hover:text-accent transition-colors">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-accent">
            Delovni čas
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {site.hours.map((h) => (
              <li key={h.day} className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent shrink-0" />
                <span className="text-primary-foreground/85">
                  <span className="font-medium text-primary-foreground">{h.day}:</span> {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-accent">
            Povezave
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/storitve" className="hover:text-accent transition-colors">Storitve</Link></li>
            <li><Link to="/o-nas" className="hover:text-accent transition-colors">O nas</Link></li>
            <li><Link to="/obvestila" className="hover:text-accent transition-colors">Obvestila</Link></li>
            <li><Link to="/poti-do-nas" className="hover:text-accent transition-colors">Poti do nas</Link></li>
            <li><Link to="/ponudba" className="hover:text-accent transition-colors">Ponudba vozil</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {site.legalName}. Vse pravice pridržane.</div>
          <div>Družinsko podjetje • {site.address.city}, {site.address.country}</div>
        </div>
      </div>
    </footer>
  );
}
