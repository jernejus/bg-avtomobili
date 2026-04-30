// Obvestila se urejajo v: vsebina/obvestila.json
import data from "../../vsebina/obvestila.json";

export type Notice = {
  id: string;
  date: string;
  title: string;
  summary: string;
};

export const notices: Notice[] = data.seznam.map((n) => ({
  id: n.id,
  date: n.datum,
  title: n.naslov,
  summary: n.povzetek,
}));

export const obvestilaVsebina = data;
