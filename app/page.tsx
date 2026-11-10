import Image from "next/image";
import Countdown from "./components/Countdown";
import Rsvp from "./components/Rsvp";
import {
  about,
  gallery,
  practical,
  program,
  toastmaster,
  venue,
  wedding,
  welcomeText,
} from "./content";

function LeafDivider() {
  return (
    <svg aria-hidden="true" width="80" height="28" viewBox="0 0 80 28" fill="none">
      <path d="M0 22h28M52 22h28" stroke="#5B5726" strokeWidth="1" />
      <path
        d="M40 22c-6-2-9-8-8-14 6 1 9 7 8 14Zm0 0c6-2 9-8 8-14-6 1-9 7-8 14Z"
        stroke="#5B5726"
        strokeWidth="1.2"
        fill="#E6E2C6"
      />
      <circle cx="40" cy="24" r="3" fill="#E8A285" />
    </svg>
  );
}

export default function Home() {
  const couple = `${wedding.bride} & ${wedding.groom}`;

  return (
    <>
      <nav className="container nav" aria-label="Hovedmeny">
        <a href="#top" className="nav-logo" aria-label={`${couple} – til toppen`}>
          <Image
            src="/images/monogram-emblem.png"
            alt=""
            width={600}
            height={578}
            sizes="96px"
            priority
            className="nav-logo-img"
          />
        </a>
        <div className="nav-links">
          <a href="#program">Program</a>
          <a href="#stedet">Stedet</a>
          <a href="#praktisk">Praktisk info</a>
          <a href="#oss">Om oss</a>
          <a href="#rsvp" className="nav-cta">
            Svar her
          </a>
        </div>
      </nav>

      <main>
        <header id="top" className="container hero">
          <p className="eyebrow hero-eyebrow">Vi gifter oss</p>
          <Image
            src="/images/monogram.png"
            alt={`Monogram M og C med fersken blomster og olivenblader – ${wedding.bride} og ${wedding.groom}, ${wedding.dateShort}`}
            width={1000}
            height={667}
            priority
            className="hero-monogram"
          />
          <p className="hero-date">
            {wedding.dateLong} · {venue.name}, Arendal
          </p>
          <Countdown dateISO={wedding.dateISO} />
          <div className="hero-actions">
            <a href="#rsvp" className="btn btn-solid">
              Svar på invitasjonen
            </a>
            <a href="#program" className="btn btn-outline">
              Se programmet
            </a>
          </div>
        </header>

        <section className="welcome" aria-labelledby="velkommen">
          <div className="welcome-inner">
            <LeafDivider />
            <h2 id="velkommen" className="h2">
              Velkommen til bryllupet vårt
            </h2>
            <p>{welcomeText}</p>
            <p className="signature">{couple}</p>
          </div>
        </section>

        <section id="program" className="section" aria-labelledby="program-tittel">
          <div className="container program-inner">
            <div className="section-head">
              <p className="eyebrow">Lørdag 4. september</p>
              <h2 id="program-tittel" className="h2">
                Program for dagen
              </h2>
            </div>
            <ol className="program-list">
              {program.map((p) => (
                <li key={p.title} className="program-item">
                  <span className="program-time">{p.time}</span>
                  <h3 className="h3">{p.title}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="stedet" className="venue" aria-labelledby="stedet-tittel">
          <div className="container venue-inner">
            <div className="venue-text">
              <p className="eyebrow">Vielse og fest</p>
              <h2 id="stedet-tittel" className="venue-title">
                {venue.name}, Arendal
              </h2>
              <p>{venue.intro}</p>
              <p>
                {venue.name}
                <br />
                {venue.street}
                <br />
                {venue.postal}
              </p>
              <div className="venue-actions">
                <a href={venue.website} className="btn btn-light" target="_blank" rel="noopener noreferrer">
                  kokkeplassengard.no
                </a>
                <a href={venue.mapsUrl} className="btn btn-ghost-light" target="_blank" rel="noopener noreferrer">
                  Vis i kart
                </a>
              </div>
            </div>
            <Image
              src="/images/kokkeplassen.jpg"
              alt="Festlokalet på Kokkeplassen med dekkede bord og store vinduer ut mot sjøen og båthavna"
              width={1136}
              height={736}
              sizes="(max-width: 900px) 100vw, 560px"
              className="venue-photo"
            />
          </div>
        </section>

        <section id="praktisk" className="section" aria-labelledby="praktisk-tittel">
          <div className="container practical-inner">
            <div className="section-head">
              <p className="eyebrow">Godt å vite</p>
              <h2 id="praktisk-tittel" className="h2">
                Praktisk informasjon
              </h2>
            </div>
            <div className="cards">
              {practical.map((c) => (
                <div key={c.title} className="card">
                  <h3 className="h3">{c.title}</h3>
                  <p>{c.text}</p>
                  {c.link && (
                    <a href={c.link.href} target="_blank" rel="noopener noreferrer">
                      {c.link.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="oss" className="about" aria-labelledby="oss-tittel">
          <div className="container about-inner">
            <div className="about-top">
              <div className="about-text">
                <p className="eyebrow">Om oss</p>
                <h2 id="oss-tittel" className="h2">
                  {couple}
                </h2>
                {about.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <Image
                src="/images/tull.jpg"
                alt="Marita og Caspar tuller foran kameraet"
                width={665}
                height={1182}
                sizes="320px"
                className="about-portrait"
              />
            </div>
            <div className="gallery">
              {gallery.map((g) => (
                <Image
                  key={g.src}
                  src={g.src}
                  alt={g.alt}
                  width={665}
                  height={1182}
                  sizes="(max-width: 600px) 50vw, 300px"
                  style={{ objectPosition: g.position }}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="rsvp" className="rsvp" aria-labelledby="rsvp-tittel">
          <div className="rsvp-inner">
            <div className="section-head">
              <p className="eyebrow">Svar innen {wedding.rsvpDeadline}</p>
              <h2 id="rsvp-tittel" className="h2">
                Kommer du?
              </h2>
            </div>
            <Rsvp />
          </div>
        </section>
      </main>

      <footer className="footer">
        <Image src="/images/monogram.png" alt="" width={1000} height={667} sizes="200px" />
        <p>Spørsmål? {toastmaster}</p>
        <p className="small">
          {couple} · {wedding.dateShort} · Arendal
        </p>
      </footer>
    </>
  );
}
