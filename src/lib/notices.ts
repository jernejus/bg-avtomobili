export type Notice = {
  id: string;
  date: string; // ISO
  title: string;
  summary: string;
};

// PLACEHOLDER vsebine — ureja podjetje.
export const notices: Notice[] = [
  {
    id: "2026-04-novosti-ponudbe",
    date: "2026-04-20",
    title: "Nova prispela vozila — april 2026",
    summary:
      "Ta teden smo prejeli 12 novih rabljenih vozil, vključno s SUV in družinskimi limuzinami. Vsa vozila so pregledana in pripravljena za testno vožnjo.",
  },
  {
    id: "2026-03-akcija-zavarovanja",
    date: "2026-03-15",
    title: "Akcija avtomobilskih zavarovanj",
    summary:
      "Pri sklenitvi avtomobilskega zavarovanja Triglav prejmete brezplačno asistenco po Sloveniji za eno leto. Ponudba velja do konca aprila 2026.",
  },
  {
    id: "2026-02-tocna-skoda",
    date: "2026-02-08",
    title: "Sezona toče — pravočasno najavite popravilo",
    summary:
      "Hladno ravnanje pločevine je naša specialnost. Brez lakiranja, brez izgube vrednosti vozila. Pokličite za hitro oceno škode.",
  },
  {
    id: "2026-01-novo-leto",
    date: "2026-01-10",
    title: "Srečno novo leto 2026",
    summary:
      "Hvala vsem strankam za zaupanje v letu 2025. Z največjim veseljem nadaljujemo z osebnim pristopom tudi v novem letu.",
  },
];
