
# Avtohiša — spletna stran (predlog)

Statična, hitra, večstranska spletna stran v slovenščini za rabljena vozila. Bela podlaga, sive površine, temno modra / mornarsko modra kot glavna barva, z dodanim toplim akcentom (jantarno rumena) za CTA-je in poudarke zaupanja.

## Blagovna znamka in placeholderji

Ker pravih podatkov še ni, uporabimo verodostojne slovenske placeholderje, ki jih kasneje preprosto zamenjate:
- **Naziv:** Avtohiša Novak d.o.o.
- **Lokacija:** Ptujska cesta 45, 2000 Maribor
- **Telefon prodaje:** +386 2 123 45 67
- **E-pošta:** info@avtohisa-novak.si
- **Delovni čas:** Pon–Pet 8–18, Sob 8–13
- **Lastnika:** Janez Novak, Marko Novak
- **Ekipa (placeholder imena):** prodajni svetovalci, zavarovalniški referent, mehaniki, kleparji, ličarji, vulkanizer

Vsi placeholderji bodo jasno označeni v komentarjih kode za enostavno menjavo.

## Barvna paleta

- Ozadje: bela `#FFFFFF`
- Površine / kartice: zelo svetlo siva `#F5F6F8`
- Mejne črte: `#E2E5EA`
- Glavna barva (mornarsko modra): `#0B2A4A`
- Sekundarna modra: `#1E4A8C`
- Akcent (CTA, poudarki zaupanja): topla jantarna `#E0A82E`
- Tekst: `#0F172A` glavni, `#475569` sekundarni

Tipografija: Inter (body) + Plus Jakarta Sans ali Manrope (naslovi) — moderno, berljivo, dobro za slovenske šumnike.

## Struktura strani (route-i)

Vsaka stran je samostojna route z lastnim `head()` (title, description, og:title, og:description, og:image) — ključno za SEO in deljenje na sporočilih (ker stranke ne uporabljajo socialnih omrežij, je ključno deljenje preko WhatsApp/Viber/SMS, kjer se preview kartice generirajo iz og: meta tagov).

```
/                 Domov (Index)
/storitve         Storitve
/o-nas            O nas
/obvestila        Obvestila
/poti-do-nas      Poti do nas (kontakt)
/ponudba          Ponudba vozil (iframe na zunanjo stran)
```

Globalni header z logotipom + navigacija + viden CTA gumb **"Poglejte ponudbo vozil →"** (jantarni gumb, prisoten na vseh straneh, sticky na desktopu, hamburger meni na mobilnem).

Globalni footer: kratek opis, kontakt, delovni čas, naslov, povezave, "25 let tradicije" značka, NAP podatki za lokalni SEO.

---

## 1. Domov (`/`) — najpomembnejša stran

**Hero (rotirajoči, vsakih ~6 sekund):**
- Layout pol/pol: levo besedilo + CTA, desno velika slika (na mobilnem: slika zgoraj, tekst spodaj)
- Avtomatska rotacija med 3–4 slidi z mehkim fade prehodom + tipkanje teksta ali subtilen slide animacijo
- Pavza ob hover, navigacijske pikice spodaj, dostopno (prefers-reduced-motion respektirano)
- Predlog slidov:
  1. **"Zaupanje, ki traja že 25 let."** — slika ekipe ali salona → CTA: Spoznajte nas
  2. **"Vse za vaš avto. Pod eno streho."** — slika servisne hale → CTA: Naše storitve
  3. **"Vaš novi rabljeni avto vas čaka."** — slika avtomobila → CTA: Poglejte ponudbo
  4. **"Star za nov. Brez skrbi."** — slika menjave/odkupa → CTA: Pošljite povpraševanje

**Nato sekcije po vrsti:**

1. **Kratek "kdo smo" naslov** — eno-vrstični opis + 3 ključne številke (25 let, X zadovoljnih strank, X vozil letno)
2. **Zakaj nam zaupati** — 4 kartice z ikonami: Družinska tradicija, Vse na enem mestu, Lokalni partner, Pošten odnos
3. **Dva velika "kontakt" bloka side-by-side:**
   - Prodaja & svetovanje — slika prodajalca + ime + telefon + WhatsApp/Viber/poklicni gumbi
   - Zavarovanja — slika referenta + ime + telefon + "Pokličite za ponudbo"
4. **Velik vizualen blok "Naša ponudba vozil"** — slika ali kolaž avtomobilov z velikim CTA gumbom, ki vodi na `/ponudba`
5. **Zadnje obvestilo** — najnovejše obvestilo kot kartica + povezava na `/obvestila`
6. **Footer CTA** — "Pridite v Maribor" s kratkim naslovom, telefonom in mapo

---

## 2. Storitve (`/storitve`)

**Vrh strani — Vizualna pot stranke** (horizontal step flow, 5 korakov):
```text
[1 Izberite vozilo] → [2 Financiranje*] → [3 Zavarovanje] → [4 Servis & vzdrževanje] → [5 Skrb po nakupu]
```
Vsak korak z ikono, kratko vrstico, in oznako kjer to izvajamo sami / pri partnerju (*). Kratek pripis: "Vse uredimo na enem mestu — kar pa ni naša specialnost (npr. financiranje banke, registracija, pranje), vas pošljemo k zaupanja vrednim partnerjem."

**Spodaj — mreža 9 storitev (kartice z ikono + naslov + 1 vrstica opisa):**
- Odkup rabljenih vozil
- Prodaja rabljenih vozil → CTA na `/ponudba`
- Kleparska dela
- Ličarska dela
- Vulkanizerske storitve
- Mehanska dela
- Sklepanje zavarovanj
- Cenitve in prijava škode (Triglav, Sava, Adriatic Slovenica) — z logotipi zavarovalnic
- Hladno ravnanje pločevine (odprava posledic toče brez lakiranja) — poudarjeno kot specialnost

Spodaj CTA pas: "Niste prepričani, kaj potrebujete? Pokličite nas."

---

## 3. O nas (`/o-nas`)

- Kratka zgodba (3–4 odstavki): začetki 1999, družinska tradicija, lokalna vpetost, vrednote
- Časovni trak ključnih mejnikov (1999, 2005, 2015, 2024…)
- **Ekipa po oddelkih** — slike s podpisi (ime + funkcija), grupirano:
  - Vodstvo (2 lastnika)
  - Prodaja
  - Zavarovanja
  - Servis (mehaniki, kleparji, ličarji, vulkanizer)
- Foto galerija salona/delavnice (lightbox)

---

## 4. Obvestila (`/obvestila`)

- Preprost seznam kartic: datum + naslov + kratek tekst + opcijska slika
- Vsebina v statični datoteki (TS array), za enostavno dodajanje obvestil
- Najnovejše na vrhu, brez paginacije (zadnjih 10–15)

---

## 5. Poti do nas (`/poti-do-nas`)

- **Lokacija:** vgrajena Google Maps mapa + naslov + gumb "Navigacija"
- **Delovni čas** v jasni tabeli
- **Kontaktne osebe** — kartice z fotografijo, imenom, vlogo:
  - Prodajalec: telefon, WhatsApp link (`wa.me/...`), Viber link (`viber://chat?number=...`), e-pošta
  - Zavarovalniški referent: enako
  - Splošni kontakt: telefon, e-pošta
- **Obrazec "Pokličite me nazaj / potrebujem nasvet"** — ime, telefon, kratko sporočilo, izbira teme (prodaja/zavarovanje/servis). Pošlje preko `mailto:` linka (statična stran, brez backenda) ali Web3Forms/Formspree (brezplačna storitev za statične strani)

---

## 6. Ponudba vozil (`/ponudba`)

- Naslovni pas z razlago + CTA "Odpri v novem oknu" (varovalo za primer, da iframe ne deluje dobro)
- Iframe z zunanjo ponudbo, full-width, višina ~1200px na desktopu, scroll znotraj iframe-a
- Pod iframe: "Niste našli pravega? Pokličite nas, redno dobivamo nova vozila."
- Sticky CTA gumbi v headerju ostanejo prisotni povsod drugod

---

## SEO, AI in družbeno deljenje

Ker stranka ni na socialnih omrežjih, je ključno: (a) odlično lokalno Google rangiranje, (b) lepi previewi pri deljenju linkov v sporočilih.

- **Per-page meta:** vsaka route ima edinstven `title`, `description`, `og:title`, `og:description`, `og:image`, `twitter:card`
- **JSON-LD strukturirani podatki:**
  - `AutoDealer` schema na vseh straneh (naziv, naslov, telefon, delovni čas, geo koordinate, valuta, regija)
  - `LocalBusiness` z `openingHoursSpecification`
  - `BreadcrumbList` na podstraneh
  - `Service` schema za vsako storitev na `/storitve`
  - `Person` schema za zaposlene na `/o-nas`
- **AI-friendly:** semantičen HTML (proper h1/h2 hierarhija, opisni `alt` atributi, jasne sekcije z `<section>`), `robots.txt` dovoli vse, vključno GPTBot/ClaudeBot/Google-Extended
- **`sitemap.xml`** generiran statično, **`robots.txt`** s sklicem nanj
- **Open Graph slike** velikosti 1200×630 za vsako route (hero slika strani = og slika)
- **Lighthouse cilj:** 95+ na Performance, SEO 100, Accessibility 95+
- **Lokalni SEO:** ključne besede vključene naravno ("rabljena vozila Maribor", "odkup avtomobilov", "kleparstvo ličarstvo Maribor", "zavarovanje Triglav Maribor", "odprava posledic toče")
- **`lang="sl"`** na html, vse vsebine v slovenščini, Slovenian datumski format
- **Canonical URLs** in `hreflang="sl"`

## Odzivnost in dostopnost

- Mobile-first; testirano pri 360, 414, 768, 1024, 1440 px
- Hamburger meni z mehkim drawer-om na mobilnem
- Tap targets ≥ 44px, telefonske številke kot `tel:` linki
- WCAG AA kontrast, focus stanja jasno vidna, `prefers-reduced-motion` respektira hero rotacijo
- Slike z `loading="lazy"` in `width`/`height` atributi (preprečuje CLS)

## Tehnične podrobnosti

- TanStack Start (React 19, Vite 7), Tailwind v4, file-based routing v `src/routes/`
- Statična generacija; brez backenda, brez baze
- Hero slike: kvalitetne stock placeholder slike avtomobilov / servisa (Unsplash) z atribucijo v komentarju, kasneje zamenjate z vašimi
- Komponente: `<Hero>` (rotator), `<ServiceCard>`, `<TeamMember>`, `<Notice>`, `<ContactCard>`, `<JourneyStep>`, `<CTABanner>`, `<SiteHeader>`, `<SiteFooter>`
- WhatsApp/Viber linki kot navadni `<a>` z deep linki, brez tracking skript
- Obrazec na `/poti-do-nas` najprej z `mailto:` (deluje takoj brez ključev); kasneje lahko dodamo Web3Forms za pravo pošiljanje
- JSON-LD vbrizgan preko `head().scripts` v vsaki route

## Kaj zgradimo (vrstni red implementacije)

1. Barvna paleta + tipografija + globalni layout (header sticky s CTA, footer)
2. Domov z rotirajočim hero in vsemi sekcijami
3. Storitve z journey diagramom + 9 storitev
4. O nas z ekipo
5. Obvestila (statična data datoteka)
6. Poti do nas + obrazec
7. Ponudba vozil (iframe + fallback)
8. SEO sloj: per-page meta, JSON-LD, sitemap.xml, robots.txt
9. Polish: animacije, lazy loading, finalni Lighthouse pass

Po vaši potrditvi gradimo po tem vrstnem redu in vse besedilo pišemo v slovenščini.
