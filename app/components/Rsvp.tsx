"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const MAX_TEASES = 3;

export default function Rsvp() {
  const [attending, setAttending] = useState(true);
  const [teasing, setTeasing] = useState(false);
  const [tries, setTries] = useState(0);
  const [gaveUp, setGaveUp] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kommer: attending }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rsvp-thanks" role="status">
        <h3 className="h3">Tusen takk!</h3>
        <p>
          {attending
            ? "Svaret ditt er registrert. Vi gleder oss til å feire med deg."
            : "Svaret ditt er registrert. Så synd at du ikke kan komme – vi tenker på deg den dagen."}
        </p>
        <button type="button" className="btn btn-outline" onClick={() => setStatus("idle")}>
          Endre svar
        </button>
      </div>
    );
  }

  return (
    <form className="rsvp-form" onSubmit={onSubmit}>
      <div className="field-row">
        <label className="field">
          Navn
          <input type="text" name="navn" autoComplete="name" required />
        </label>
        <label className="field">
          E-post
          <input type="email" name="epost" autoComplete="email" required />
        </label>
      </div>

      <fieldset className="choice">
        <legend>Kan du komme?</legend>
        <button
          type="button"
          className="choice-btn"
          aria-pressed={attending}
          onClick={() => setAttending(true)}
        >
          Ja, jeg kommer!
        </button>
        <button
          type="button"
          className="choice-btn"
          aria-pressed={!attending && !teasing}
          onPointerEnter={(e) => {
            // Lite påskeegg: med mus forvandles knappen til «Ja» noen ganger før den gir seg.
            if (e.pointerType !== "mouse" || gaveUp) return;
            const next = tries + 1;
            setTries(next);
            if (next > MAX_TEASES) setGaveUp(true);
            else setTeasing(true);
          }}
          onPointerLeave={() => setTeasing(false)}
          onClick={() => {
            if (teasing) {
              setAttending(true);
              setTeasing(false);
            } else {
              setAttending(false);
            }
          }}
        >
          {teasing ? "Ja, jeg kommer!" : "Kan dessverre ikke"}
        </button>
        {gaveUp && attending && (
          <p className="tease-note" aria-live="polite">
            Ok, ok … vi skjønner tegningen. Du kan trykke nå.
          </p>
        )}
      </fieldset>

      {attending && (
        <>
          <label className="field">
            Allergier eller matpreferanser
            <textarea name="allergier" rows={3} />
          </label>
          <label className="field">
            En sang som får deg ut på dansegulvet
            <input type="text" name="sang" />
          </label>
        </>
      )}

      <label className="field">
        Hilsen til brudeparet (valgfritt)
        <textarea name="hilsen" rows={3} />
      </label>

      {status === "error" && (
        <p className="form-error" role="alert">
          Noe gikk galt. Prøv igjen, eller ta kontakt med oss direkte.
        </p>
      )}

      <button type="submit" className="btn btn-solid rsvp-submit" disabled={status === "sending"}>
        {status === "sending" ? "Sender …" : "Send svar"}
      </button>
    </form>
  );
}
