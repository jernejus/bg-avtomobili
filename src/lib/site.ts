// Vsebina podjetja se ureja v: vsebina/podjetje.json
// Ta datoteka samo prebere JSON in ga preslika na obliko, ki jo uporablja koda.
import data from "../../vsebina/podjetje.json";

export const site = {
  name: data.ime,
  legalName: data.pravnoIme,
  tagline: data.slogan,
  description: data.opis,
  url: data.spletnaStran,
  founded: data.letoUstanovitve,
  yearsTradition: data.letaTradicije,
  address: {
    street: data.naslov.ulica,
    postal: data.naslov.postnaStevilka,
    city: data.naslov.kraj,
    country: data.naslov.drzava,
    countryCode: data.naslov.kodaDrzave,
    region: data.naslov.regija,
  },
  geo: data.lokacija,
  phone: data.telefon,
  phoneRaw: data.telefonSurov,
  email: data.epostElek,
  hours: data.delovniCas.map((h) => ({ day: h.dan, time: h.ura })),
  inventoryUrl: data.povezavaPonudbeVozil,
  contacts: {
    sales: mapContact(data.kontaktneOsebe.prodaja),
    insurance: mapContact(data.kontaktneOsebe.zavarovanja),
    service: mapContact(data.kontaktneOsebe.servis),
  },
};

type RawContact = {
  ime: string;
  vloga: string;
  telefon: string;
  telefonSurov: string;
  eposta: string;
  whatsapp?: string;
  viber?: string;
};

function mapContact(c: RawContact) {
  return {
    name: c.ime,
    role: c.vloga,
    phone: c.telefon,
    phoneRaw: c.telefonSurov,
    email: c.eposta,
    whatsapp: c.whatsapp,
    viber: c.viber,
  };
}

export type Contact = {
  name: string;
  role: string;
  phone: string;
  phoneRaw: string;
  email: string;
  whatsapp?: string;
  viber?: string;
};
