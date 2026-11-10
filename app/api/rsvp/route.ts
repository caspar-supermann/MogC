import { NextResponse } from "next/server";

// Tar imot svar fra skjemaet og sender dem videre.
//
// E-post (Resend) – sett disse i Vercel → Settings → Environment Variables:
//   RESEND_API_KEY   nøkkelen fra resend.com
//   RSVP_EMAIL_TO    e-postadressen svarene skal sendes til (kan være flere, kommaseparert)
//   RSVP_EMAIL_FROM  valgfri avsender, f.eks. "Bryllup <svar@maritaogcaspar.no>"
//                    (krever at domenet er verifisert i Resend). Standard er
//                    Resends testavsender, som bare kan sende til e-posten på Resend-kontoen.
//
// Valgfritt i tillegg: RSVP_WEBHOOK_URL for å sende svarene til f.eks. Google Sheets.

const MAX = 2000;
const clean = (v: unknown) => (typeof v === "string" ? v.trim().slice(0, MAX) : "");
const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

type Svar = {
  navn: string;
  epost: string;
  kommer: boolean;
  allergier: string;
  sang: string;
  hilsen: string;
  tidspunkt: string;
};

async function sendEmail(svar: Svar) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.RSVP_EMAIL_TO;
  if (!key || !to) return { skipped: true as const };

  const from = process.env.RSVP_EMAIL_FROM || "Bryllupet <onboarding@resend.dev>";
  const status = svar.kommer ? "kommer ✅" : "kan ikke komme ❌";
  const rows: [string, string][] = [
    ["Navn", svar.navn],
    ["E-post", svar.epost],
    ["Svar", svar.kommer ? "Ja, kommer" : "Kan dessverre ikke"],
    ...(svar.kommer
      ? ([
          ["Allergier / mat", svar.allergier || "–"],
          ["Ønskesang", svar.sang || "–"],
        ] as [string, string][])
      : []),
    ["Hilsen", svar.hilsen || "–"],
  ];

  const html = `
<div style="font-family:Georgia,serif;color:#3A381A;max-width:560px">
  <h2 style="color:#5B5726;font-weight:500">Nytt svar: ${esc(svar.navn)} ${esc(status)}</h2>
  <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:15px">
    ${rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:8px 12px 8px 0;color:#8A5A44;vertical-align:top;white-space:nowrap">${esc(k)}</td><td style="padding:8px 0;white-space:pre-wrap">${esc(v)}</td></tr>`
      )
      .join("")}
  </table>
</div>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()).filter(Boolean),
      reply_to: svar.epost,
      subject: `RSVP: ${svar.navn} ${status}`,
      html,
      text,
    }),
  });
  if (!res.ok) {
    console.error("Resend feilet", res.status, await res.text());
    return { ok: false as const };
  }
  return { ok: true as const };
}

async function sendWebhook(svar: Svar) {
  const url = process.env.RSVP_WEBHOOK_URL;
  if (!url) return { skipped: true as const };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(svar),
  });
  if (!res.ok) console.error("RSVP-webhook feilet", res.status);
  return { ok: res.ok };
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ugyldig forespørsel" }, { status: 400 });
  }

  const svar: Svar = {
    navn: clean(body.navn),
    epost: clean(body.epost),
    kommer: body.kommer === true,
    allergier: clean(body.allergier),
    sang: clean(body.sang),
    hilsen: clean(body.hilsen),
    tidspunkt: new Date().toISOString(),
  };

  if (!svar.navn || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(svar.epost)) {
    return NextResponse.json({ ok: false, error: "Navn og gyldig e-post må fylles ut" }, { status: 400 });
  }

  // Alltid i loggen, så ingen svar går tapt selv om e-posten skulle feile.
  console.log("RSVP mottatt:", JSON.stringify(svar));

  const [email, hook] = await Promise.all([sendEmail(svar), sendWebhook(svar)]);
  const delivered = ("ok" in email && email.ok) || ("ok" in hook && hook.ok);
  const configured = !("skipped" in email) || !("skipped" in hook);

  if (configured && !delivered) {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}

// Enkel statussjekk: viser om e-post/webhook er konfigurert (aldri selve verdiene).
export async function GET() {
  return NextResponse.json({
    epostKonfigurert: Boolean(process.env.RESEND_API_KEY && process.env.RSVP_EMAIL_TO),
    harApiNokkel: Boolean(process.env.RESEND_API_KEY),
    harMottaker: Boolean(process.env.RSVP_EMAIL_TO),
    egenAvsender: Boolean(process.env.RSVP_EMAIL_FROM),
    webhookKonfigurert: Boolean(process.env.RSVP_WEBHOOK_URL),
  });
}
