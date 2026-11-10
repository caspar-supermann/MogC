import { NextResponse } from "next/server";

// Tar imot svar fra skjemaet.
// Sett miljøvariabelen RSVP_WEBHOOK_URL i Vercel for å sende svarene videre
// (f.eks. til Google Sheets via Apps Script, Make, Zapier eller Slack).
// Uten den blir svarene bare logget i Vercel-loggen.

const MAX = 2000;
const clean = (v: unknown) => (typeof v === "string" ? v.trim().slice(0, MAX) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ugyldig forespørsel" }, { status: 400 });
  }

  const svar = {
    navn: clean(body.navn),
    epost: clean(body.epost),
    kommer: body.kommer === true,
    allergier: clean(body.allergier),
    sang: clean(body.sang),
    hilsen: clean(body.hilsen),
    tidspunkt: new Date().toISOString(),
  };

  if (!svar.navn || !svar.epost) {
    return NextResponse.json({ ok: false, error: "Navn og e-post må fylles ut" }, { status: 400 });
  }

  const webhook = process.env.RSVP_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(svar),
    });
    if (!res.ok) {
      console.error("RSVP-webhook feilet", res.status);
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  } else {
    console.log("RSVP mottatt (ingen RSVP_WEBHOOK_URL satt):", JSON.stringify(svar));
  }

  return NextResponse.json({ ok: true });
}
