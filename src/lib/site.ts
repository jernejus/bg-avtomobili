// PLACEHOLDER PODATKI — zamenjajte z dejanskimi podatki podjetja.
export const site = {
  name: "B&G Avtomobili",
  legalName: "B&G Avtomobili d.o.o.",
  tagline: "Vse za vaš avto. Pod eno streho.",
  description:
    "25 let tradicije v prodaji rabljenih vozil v Šentjurju. Odkup, prodaja, zavarovanja, kleparstvo, ličarstvo, vulkanizerstvo in mehanika — vse na enem mestu.",
  url: "https://bg-avtomobili.si",
  founded: "2001",
  yearsTradition: 25,
  address: {
    street: "Cesta Leona Dobrotinška 12",
    postal: "3230",
    city: "Šentjur",
    country: "Slovenija",
    countryCode: "SI",
    region: "Štajerska",
  },
  geo: { lat: 46.2156, lng: 15.3947 },
  phone: "+386 3 749 12 34",
  phoneRaw: "+38637491234",
  email: "info@bg-avtomobili.si",
  hours: [
    { day: "Pon–Pet", time: "8:00 – 18:00" },
    { day: "Sobota", time: "8:00 – 13:00" },
    { day: "Nedelja", time: "Zaprto" },
  ],
  // Zunanja stran s ponudbo vozil
  inventoryUrl: "https://www.avto.net",
  contacts: {
    sales: {
      name: "Marko Kranjc",
      role: "Vodja prodaje",
      phone: "+386 41 123 456",
      phoneRaw: "+38641123456",
      email: "prodaja@bg-avtomobili.si",
      whatsapp: "38641123456",
      viber: "+38641123456",
    },
    insurance: {
      name: "Ana Horvat",
      role: "Zavarovalniški referent",
      phone: "+386 41 234 567",
      phoneRaw: "+38641234567",
      email: "zavarovanja@bg-avtomobili.si",
      whatsapp: "38641234567",
      viber: "+38641234567",
    },
    service: {
      name: "Servis & delavnica",
      role: "Mehanika in karoserija",
      phone: "+386 3 749 12 35",
      phoneRaw: "+38637491235",
      email: "servis@bg-avtomobili.si",
    },
  },
};

export type Contact = {
  name: string;
  role: string;
  phone: string;
  phoneRaw: string;
  email: string;
  whatsapp?: string;
  viber?: string;
};
