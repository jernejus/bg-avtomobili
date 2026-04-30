# Vsebina spletne strani

V tej mapi je **vsa vsebina** spletne strani B&G Avtomobili. Tukaj urejate besedila, številke, kontakte in obvestila — **brez programiranja**.

## Datoteke

| Datoteka | Kaj vsebuje |
|---|---|
| `podjetje.json` | Ime podjetja, naslov, telefon, e-pošta, delovni čas, kontaktne osebe |
| `domov.json` | Vsebina domače strani (predstavitev, številke, razlogi, CTA) |
| `naslovni-zaslon.json` | Vrteči se uvodni zaslon (4 slike z naslovi) |
| `storitve.json` | Stran "Storitve" — pot stranke + seznam storitev |
| `o-nas.json` | Stran "O nas" — zgodba, mejniki, ekipa |
| `obvestila.json` | Seznam obvestil (najnovejše na vrhu) |
| `poti-do-nas.json` | Stran "Poti do nas" — naslovi, obrazec, teme povpraševanja |
| `ponudba.json` | Stran "Ponudba vozil" |

## Kako urejati

1. Odprite datoteko v urejevalniku (npr. Notepad, VS Code).
2. Spremenite besedilo med narekovaji `"..."`.
3. **Ne brišite** vejic, oklepajev `{ }` ali oglatih oklepajev `[ ]`.
4. Shranite. Sprememba se prikaže ob naslednji izgradnji strani.

## Dodajanje novega obvestila

V `obvestila.json` dodajte nov vnos na vrh seznama:

```json
{
  "id": "2026-05-naslov",
  "datum": "2026-05-15",
  "naslov": "Naslov obvestila",
  "povzetek": "Krajše besedilo obvestila..."
}
```

**Pomembno:** med vnosi mora biti vejica `,`, za zadnjim vnosom pa NE.
