# Marita & Caspar – bryllupsnettside

Nettside for bryllupet til Marita Vikingsdal og Caspar Rieber-Mohn, lørdag 4. september 2027 på Kokkeplassen i Arendal.

Bygget med Next.js (App Router) og laget for å deployes på Vercel.

## Kom i gang

```bash
npm install
npm run dev
```

Åpne http://localhost:3000.

## Endre innhold

All tekst og praktisk info ligger i `app/content.ts`: program, adresse, overnatting, praktiske kort, om oss og bildegalleri. Tekst i `[klammer]` er plassholdere som skal fylles ut.

Bilder ligger i `public/images/`.

Farger og typografi ligger i `app/globals.css` (fersken og olivengrønt, Cormorant Garamond + Jost).

## Svarskjema (RSVP)

Skjemaet sender svar til `/api/rsvp`, som sender en e-post per svar via [Resend](https://resend.com). Sett disse i Vercel (Project → Settings → Environment Variables):

| Variabel | Verdi |
| --- | --- |
| `RESEND_API_KEY` | API-nøkkelen fra Resend |
| `RSVP_EMAIL_TO` | Adressen svarene skal til (flere kan skilles med komma) |
| `RSVP_EMAIL_FROM` | Valgfri. F.eks. `Bryllup <svar@maritaogcaspar.no>` når domenet er verifisert i Resend |

Uten egen avsender brukes Resends testavsender, som bare kan sende til e-posten Resend-kontoen er registrert med.

Valgfritt: `RSVP_WEBHOOK_URL` sender svarene i tillegg til f.eks. et Google Sheet. Alle svar logges også i Vercel-loggen.

## Deploy til Vercel

1. Push repoet til GitHub.
2. Gå til vercel.com/new og importer repoet. Standardinnstillingene for Next.js fungerer.
3. Legg eventuelt til `RSVP_WEBHOOK_URL` og ditt eget domene.

Siden er satt til `noindex`, så den dukker ikke opp i søkemotorer.
