// PLACEHOLDER PODATKI — zamenjajte z dejanskimi podatki podjetja.
export const site = {
  name: "Avtohiša Novak",
  legalName: "Avtohiša Novak d.o.o.",
  tagline: "Vse za vaš avto. Pod eno streho.",
  description:
    "25 let tradicije v prodaji rabljenih vozil v Mariboru. Odkup, prodaja, zavarovanja, kleparstvo, ličarstvo, vulkanizerstvo in mehanika — vse na enem mestu.",
  url: "https://avtohisa-novak.si",
  founded: "1999",
  yearsTradition: 25,
  address: {
    street: "Ptujska cesta 45",
    postal: "2000",
    city: "Maribor",
    country: "Slovenija",
    countryCode: "SI",
    region: "Štajerska",
  },
  geo: { lat: 46.5547, lng: 15.6459 },
  phone: "+386 2 123 45 67",
  phoneRaw: "+38621234567",
  email: "info@avtohisa-novak.si",
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
      email: "prodaja@avtohisa-novak.si",
      whatsapp: "38641123456",
      viber: "+38641123456",
    },
    insurance: {
      name: "Ana Horvat",
      role: "Zavarovalniški referent",
      phone: "+386 41 234 567",
      phoneRaw: "+38641234567",
      email: "zavarovanja@avtohisa-novak.si",
      whatsapp: "38641234567",
      viber: "+38641234567",
    },
    service: {
      name: "Servis & delavnica",
      role: "Mehanika in karoserija",
      phone: "+386 2 123 45 68",
      phoneRaw: "+38621234568",
      email: "servis@avtohisa-novak.si",
    },
  },
};

export type Contact = typeof site.contacts.sales;
