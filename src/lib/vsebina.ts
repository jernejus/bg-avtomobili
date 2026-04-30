// Centralni dostop do vse vsebine. Vsi JSON-i so v mapi `vsebina/`.
import domov from "../../vsebina/domov.json";
import naslovniZaslon from "../../vsebina/naslovni-zaslon.json";
import storitve from "../../vsebina/storitve.json";
import oNas from "../../vsebina/o-nas.json";
import obvestila from "../../vsebina/obvestila.json";
import potiDoNas from "../../vsebina/poti-do-nas.json";
import ponudba from "../../vsebina/ponudba.json";

export const vsebina = {
  domov,
  naslovniZaslon,
  storitve,
  oNas,
  obvestila,
  potiDoNas,
  ponudba,
};

// Slovar slik — vsebina/*.json se sklicuje na slike po ključu (npr. "hero-cars"),
// tu pa dejansko uvozimo datoteke iz src/assets, da Vite poskrbi za optimizacijo.
import heroPartnership from "@/assets/hero-partnership.jpg";
import heroWorkshop from "@/assets/hero-workshop.jpg";
import heroCars from "@/assets/hero-cars.jpg";
import heroTrade from "@/assets/hero-trade.jpg";
import sentjurTown from "@/assets/sentjur-town.jpg";
import dealershipExterior from "@/assets/dealership-exterior.jpg";
import teamOwners from "@/assets/team-owners.jpg";
import teamSales from "@/assets/team-sales.jpg";
import teamInsurance from "@/assets/team-insurance.jpg";
import teamMechanic from "@/assets/team-mechanic.jpg";
import teamBodywork from "@/assets/team-bodywork.jpg";
import teamPaint from "@/assets/team-paint.jpg";
import teamTires from "@/assets/team-tires.jpg";

export const slike: Record<string, string> = {
  "hero-partnership": heroPartnership,
  "hero-workshop": heroWorkshop,
  "hero-cars": heroCars,
  "hero-trade": heroTrade,
  "sentjur-town": sentjurTown,
  "dealership-exterior": dealershipExterior,
  "team-owners": teamOwners,
  "team-sales": teamSales,
  "team-insurance": teamInsurance,
  "team-mechanic": teamMechanic,
  "team-bodywork": teamBodywork,
  "team-paint": teamPaint,
  "team-tires": teamTires,
};

export function slika(kljuc: string): string {
  return slike[kljuc] ?? "";
}

// Slovar ikon (lucide-react) — JSON-i navajajo ime ikone kot niz.
import {
  Handshake, Sparkles, MapPin, ShieldCheck,
  ShoppingBag, Car, Hammer, Paintbrush, CircleDot, Wrench, FileSearch, Snowflake,
} from "lucide-react";

export const ikone = {
  Handshake, Sparkles, MapPin, ShieldCheck,
  ShoppingBag, Car, Hammer, Paintbrush, CircleDot, Wrench, FileSearch, Snowflake,
} as const;

export type IkonaIme = keyof typeof ikone;
