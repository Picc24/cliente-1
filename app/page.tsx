const PHONE_DISPLAY = "0385 781564";
const PHONE_TEL = "+390385781564";
const WHATSAPP_NUMBER = "390385781564"; // telefono fisso del locale, usato su richiesta del cliente
const WHATSAPP_MSG = "Ciao! Vorrei prenotare un tavolo da Vineria Stradella";
const WA_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MSG
)}`;
const EMAIL = "infovineriastradella@gmail.com";
const ADDRESS = "Corso XXVI Aprile 81, 27049 Stradella (PV)";

type ExperienceCard = { title: string; text: string };

const ABOUT_CARDS: ExperienceCard[] = [
  {
    title: "Vino",
    text: "Un'ampia selezione di etichette italiane, tra tradizione e proposte più di ricerca, oltre a vini sfusi serviti al calice.",
  },
  {
    title: "Taglieri",
    text: "Salumi e formaggi selezionati, serviti in taglieri pensati per essere condivisi a tavola con calma.",
  },
  {
    title: "Atmosfera",
    text: "Un locale raccolto nel centro di Stradella, dove il personale è attento e l'ambiente resta conviviale tutta la sera.",
  },
];

type ScheduleRow = { days: string; hours: string[] };

const SCHEDULE: ScheduleRow[] = [
  { days: "Martedì — Giovedì", hours: ["11:00–15:00", "18:00–00:00"] },
  { days: "Venerdì — Sabato", hours: ["11:00–15:00", "18:00–02:00"] },
  { days: "Domenica", hours: ["11:00–15:00", "18:00–01:00"] },
  { days: "Lunedì", hours: ["Chiuso"] },
];

export default function Home() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #16100d;
          color: #f3ece3;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        a { color: inherit; text-decoration: none; }
        :focus-visible { outline: 2px solid #7a1f2b; outline-offset: 3px; }

        .wrap { width: 100%; max-width: 1120px; margin: 0 auto; padding: 0 24px; }

        /* ── nav ── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          padding: 20px 0;
          background: linear-gradient(to bottom, rgba(22,16,13,0.92), transparent);
        }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; }
        .nav-mark {
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          font-weight: 700;
          font-size: 20px;
          letter-spacing: 0.02em;
          color: #fff;
        }
        .nav-mark span { color: #c9a13b; }
        .nav-links { display: none; gap: 28px; }
        .nav-link {
          font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #c2b7aa;
        }
        .nav-link:hover { color: #c9a13b; }
        .nav-cta {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 10px 18px; border-radius: 999px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.04em;
          background: #25d366; color: #06150c;
        }
        @media (min-width: 760px) { .nav-links { display: flex; } }

        /* ── hero ── */
        .hero {
          min-height: 100svh;
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 140px 0 80px;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(ellipse 70% 50% at 20% 10%, rgba(122,31,43,0.30), transparent 60%),
            radial-gradient(ellipse 60% 50% at 90% 30%, rgba(201,161,59,0.16), transparent 65%),
            #16100d;
        }
        .hero-grid {
          position: absolute; inset: 0; opacity: 0.5; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
        }
        .hero-content { position: relative; z-index: 2; }
        .hero-eyebrow {
          font-size: 12px; font-weight: 700; letter-spacing: 0.22em;
          text-transform: uppercase; color: #c9a13b;
        }
        .hero-title {
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          font-weight: 700;
          font-size: clamp(42px, 9vw, 96px);
          line-height: 0.98;
          letter-spacing: -0.01em;
          margin-top: 16px;
          color: #fff;
        }
        .hero-title em { color: #7a1f2b; font-style: italic; }
        .hero-sub {
          margin-top: 22px; font-size: 17px; line-height: 1.65;
          color: #c2b7aa; max-width: 480px;
        }
        .hero-tagrow {
          margin-top: 28px; display: flex; gap: 10px; flex-wrap: wrap;
        }
        .pill {
          display: inline-flex; align-items: center;
          padding: 6px 14px; border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.16);
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #f3ece3;
        }
        .hero-ctas { margin-top: 34px; display: flex; gap: 14px; flex-wrap: wrap; }

        /* ── buttons ── */
        .btn {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 15px 26px; border-radius: 999px;
          font-size: 14px; font-weight: 700; letter-spacing: 0.02em;
          border: 1px solid transparent;
        }
        .btn-wa { background: #25d366; color: #06150c; }
        .btn-outline { border-color: rgba(255,255,255,0.22); color: #f3ece3; }
        .btn-outline:hover { border-color: #c9a13b; color: #c9a13b; }

        /* ── sections ── */
        .section { padding: 88px 0; position: relative; }
        .section-alt { background: #1f1712; }
        .eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 0.2em;
          text-transform: uppercase; color: #7a1f2b;
        }
        .section-title {
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          font-weight: 700;
          font-size: clamp(28px, 4vw, 44px);
          line-height: 1.08;
          margin-top: 12px;
          color: #fff;
        }
        .section-text {
          margin-top: 18px; font-size: 16px; line-height: 1.75;
          color: #c2b7aa; max-width: 600px;
        }

        /* ── about / esperienza (griglia 3 card) ── */
        .about-grid {
          margin-top: 48px;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          overflow: hidden;
        }
        .about-card { background: #16100d; padding: 30px 26px; }
        .about-card h3 {
          font-family: Georgia, serif; font-style: italic; font-size: 19px;
          color: #c9a13b; margin-bottom: 8px;
        }
        .about-card p { font-size: 14px; line-height: 1.6; color: #c2b7aa; }

        /* ── menu / selezione vini & taglieri (stesso pattern menu-group, senza prezzi) ── */
        .menu-nav {
          display: flex; gap: 10px; flex-wrap: wrap; margin-top: 44px; margin-bottom: 48px;
        }
        .menu-nav a {
          padding: 9px 16px; border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.15);
          font-size: 12px; font-weight: 700; letter-spacing: 0.04em;
          text-transform: uppercase; color: #c2b7aa;
        }
        .menu-nav a:hover { border-color: #7a1f2b; color: #7a1f2b; }

        .menu-group { padding: 40px 0; border-top: 1px solid rgba(255,255,255,0.1); }
        .menu-group:first-of-type { border-top: none; padding-top: 0; }
        .menu-group-title {
          font-family: Georgia, serif; font-style: italic; font-weight: 700;
          font-size: 26px; color: #fff; margin-bottom: 18px;
        }
        .menu-group-title span { color: #7a1f2b; }
        .menu-group-text {
          font-size: 16px; line-height: 1.75; color: #c2b7aa; max-width: 640px;
        }

        /* ── eventi / esperienza extra (riusa lo stesso pattern a righe) ── */
        .events-list { margin-top: 44px; display: flex; flex-direction: column; }
        .event-row {
          display: grid; grid-template-columns: 110px 1fr auto;
          align-items: center; gap: 24px;
          padding: 26px 0; border-top: 1px solid rgba(255,255,255,0.1);
        }
        .events-list .event-row:last-child { border-bottom: 1px solid rgba(255,255,255,0.1); }
        .event-day {
          font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #7a1f2b;
        }
        .event-title {
          font-family: Georgia, serif; font-style: italic; font-weight: 700;
          font-size: clamp(18px, 2.4vw, 24px); color: #fff;
        }
        .event-time { font-size: 13px; color: #c2b7aa; white-space: nowrap; }

        /* ── galleria (pattern grafico CSS, nessuna immagine reale) ── */
        .gallery-grid {
          margin-top: 44px;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;
        }
        .gallery-tile {
          aspect-ratio: 4 / 5;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
          display: flex; align-items: flex-end;
          padding: 16px;
        }
        .gallery-tile span {
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: rgba(243,236,227,0.7);
        }
        .gallery-tile.t1 { background: radial-gradient(ellipse 90% 70% at 30% 20%, rgba(122,31,43,0.55), transparent 70%), #1f1712; }
        .gallery-tile.t2 { background: radial-gradient(ellipse 90% 70% at 70% 30%, rgba(201,161,59,0.35), transparent 70%), #1f1712; }
        .gallery-tile.t3 { background: radial-gradient(ellipse 90% 70% at 50% 80%, rgba(122,31,43,0.40), transparent 70%), #1f1712; }
        .gallery-tile.t4 { background: radial-gradient(ellipse 90% 70% at 20% 80%, rgba(201,161,59,0.30), transparent 70%), #1f1712; }
        .gallery-tile.t5 { background: radial-gradient(ellipse 90% 70% at 80% 20%, rgba(122,31,43,0.45), transparent 70%), #1f1712; }
        .gallery-tile.t6 { background: radial-gradient(ellipse 90% 70% at 50% 50%, rgba(201,161,59,0.40), transparent 70%), #1f1712; }

        /* ── orari / info ── */
        .info-grid {
          margin-top: 44px; display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px; overflow: hidden;
        }
        .info-card { background: #1f1712; padding: 28px 26px; }
        .info-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #c9a13b; margin-bottom: 8px;
        }
        .info-value { font-size: 15px; line-height: 1.7; color: #f3ece3; }

        .schedule-list { display: flex; flex-direction: column; gap: 0; }
        .schedule-row {
          display: flex; align-items: baseline; justify-content: space-between; gap: 12px;
          padding: 8px 0;
        }
        .schedule-row + .schedule-row { border-top: 1px dashed rgba(255,255,255,0.12); }
        .schedule-days { font-size: 13px; font-weight: 700; color: #f3ece3; }
        .schedule-hours { font-size: 13px; color: #c2b7aa; text-align: right; }

        /* ── prenota ── */
        .book-box {
          margin-top: 44px;
          display: flex; flex-wrap: wrap; align-items: center; gap: 26px;
          padding: 34px; border-radius: 12px;
          border: 1px solid rgba(122,31,43,0.35);
          background: radial-gradient(ellipse 80% 100% at 0% 0%, rgba(122,31,43,0.18), transparent 70%), #1f1712;
        }
        .book-text { font-size: 14px; color: #c2b7aa; line-height: 1.7; }

        /* ── footer ── */
        .footer {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 30px 0; text-align: center;
          font-size: 12px; color: #7a7064;
        }

        .float-wa {
          position: fixed; bottom: 22px; right: 22px; z-index: 60;
          width: 56px; height: 56px; border-radius: 50%;
          background: #25d366; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 26px rgba(0,0,0,0.5);
        }

        @media (max-width: 720px) {
          .about-grid { grid-template-columns: 1fr; }
          .info-grid { grid-template-columns: 1fr; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
          .event-row { grid-template-columns: 1fr; gap: 8px; }
          .event-time { text-align: left; }
        }
      `}</style>

      {/* ───────── NAV ───────── */}
      <nav className="nav">
        <div className="wrap nav-inner">
          <span className="nav-mark">
            Vineria <span>Stradella</span>
          </span>
          <div className="nav-links">
            <a className="nav-link" href="#about">Chi siamo</a>
            <a className="nav-link" href="#vini">Vini</a>
            <a className="nav-link" href="#aperitivi">Aperitivi</a>
            <a className="nav-link" href="#orari">Orari</a>
            <a className="nav-link" href="#contatti">Contatti</a>
          </div>
          <a className="nav-cta" href={WA_HREF} target="_blank" rel="noopener noreferrer">
            Prenota
          </a>
        </div>
      </nav>

      {/* ───────── 1. HERO ───────── */}
      <header className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="wrap hero-content">
          <p className="hero-eyebrow">Stradella (PV) — Lombardia</p>
          <h1 className="hero-title">
            Vineria
            <br />
            <em>Stradella</em>
          </h1>
          <p className="hero-sub">
            Wine shop &amp; more: enoteca, aperitivi e cena informale nel cuore di
            Stradella. Un buon calice e un tagliere, senza fretta.
          </p>
          <div className="hero-tagrow">
            <span className="pill">Enoteca</span>
            <span className="pill">Aperitivi</span>
            <span className="pill">Taglieri</span>
            <span className="pill">Cena informale</span>
          </div>
          <div className="hero-ctas">
            <a className="btn btn-wa" href={WA_HREF} target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M16.04 3C9.37 3 3.96 8.38 3.96 15c0 2.22.6 4.3 1.66 6.09L4 29l8.1-2.55a12.1 12.1 0 0 0 3.94.66c6.67 0 12.08-5.38 12.08-12s-5.41-12-12.08-12Zm0 21.8c-1.3 0-2.58-.34-3.7-.99l-.27-.16-4.8 1.51 1.55-4.62-.18-.28a9.7 9.7 0 0 1-1.53-5.26c0-5.4 4.43-9.78 9.93-9.78 5.5 0 9.96 4.39 9.96 9.78 0 5.4-4.46 9.8-9.96 9.8Zm5.46-7.33c-.3-.15-1.77-.86-2.04-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.65-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.07 2.86 1.22 3.06c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
              </svg>
              Prenota su WhatsApp
            </a>
            <a className="btn btn-outline" href="#vini">Scopri la cantina</a>
          </div>
        </div>
      </header>

      {/* ───────── 2. CHI SIAMO ───────── */}
      <section id="about" className="section">
        <div className="wrap">
          <span className="eyebrow">Chi siamo</span>
          <h2 className="section-title">Un'enoteca nel centro di Stradella</h2>
          <p className="section-text">
            Vineria Stradella è un wine shop &amp; more in Corso XXVI Aprile: un
            locale raccolto dove fermarsi per un calice durante il giorno o per
            un aperitivo conviviale la sera. Selezione di etichette, taglieri
            curati e un servizio attento sono il cuore dell'esperienza.
          </p>

          <div className="about-grid">
            {ABOUT_CARDS.map((c) => (
              <div className="about-card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 3. SELEZIONE VINI ───────── */}
      <section id="vini" className="section section-alt">
        <div className="wrap">
          <span className="eyebrow">Selezione vini</span>
          <h2 className="section-title">La cantina di Vineria Stradella</h2>
          <p className="section-text">
            Una carta dei vini pensata per accompagnare ogni momento della
            giornata, dal calice veloce all'ora di pranzo alla bottiglia
            condivisa la sera. Etichette selezionate con attenzione, accanto a
            proposte sfuse per chi cerca un buon bicchiere senza troppi fronzoli.
          </p>
        </div>
      </section>

      {/* ───────── 4. APERITIVI E TAGLIERI ───────── */}
      <section id="aperitivi" className="section">
        <div className="wrap">
          <span className="eyebrow">Aperitivi &amp; taglieri</span>
          <h2 className="section-title">L'aperitivo, fatto con calma</h2>
          <p className="section-text">
            Taglieri di salumi e formaggi selezionati, pensati per accompagnare
            un calice di vino in buona compagnia. L'aperitivo da Vineria
            Stradella è un momento conviviale, senza buffet impersonali: solo
            prodotti curati e tempo per godersela.
          </p>
        </div>
      </section>

      {/* ───────── 5. ESPERIENZA DEL LOCALE ───────── */}
      <section className="section section-alt">
        <div className="wrap">
          <span className="eyebrow">L'esperienza</span>
          <h2 className="section-title">Perché tornare da Vineria Stradella</h2>
          <p className="section-text">
            Chi ci ha visitato racconta di un ambiente accogliente e di un
            servizio attento, in un locale piccolo ma curato nei dettagli — il
            posto giusto per un aperitivo tra amici o una cena informale senza
            fretta.
          </p>

          <div className="events-list">
            <div className="event-row">
              <span className="event-day">Servizio</span>
              <span className="event-title">Personale attento e disponibile</span>
              <span className="event-time">Sempre</span>
            </div>
            <div className="event-row">
              <span className="event-day">Ambiente</span>
              <span className="event-title">Atmosfera conviviale e raccolta</span>
              <span className="event-time">Pranzo &amp; sera</span>
            </div>
            <div className="event-row">
              <span className="event-day">Format</span>
              <span className="event-title">Enoteca, aperitivo e cena informale</span>
              <span className="event-time">Mar–Dom</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 6. GALLERIA ───────── */}
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Galleria</span>
          <h2 className="section-title">Un'idea dell'atmosfera</h2>
          <p className="section-text">
            In attesa delle foto del locale, ecco un'anteprima dei toni e
            dell'atmosfera di Vineria Stradella.
          </p>

          <div className="gallery-grid">
            <div className="gallery-tile t1"><span>Vino</span></div>
            <div className="gallery-tile t2"><span>Taglieri</span></div>
            <div className="gallery-tile t3"><span>Aperitivo</span></div>
            <div className="gallery-tile t4"><span>Atmosfera</span></div>
            <div className="gallery-tile t5"><span>Cantina</span></div>
            <div className="gallery-tile t6"><span>Centro Stradella</span></div>
          </div>
        </div>
      </section>

      {/* ───────── 7. ORARI ───────── */}
      <section id="orari" className="section section-alt">
        <div className="wrap">
          <span className="eyebrow">Orari</span>
          <h2 className="section-title">Quando trovarci</h2>

          <div className="info-grid">
            <div className="info-card">
              <div className="info-label">Orari di apertura</div>
              <div className="schedule-list">
                {SCHEDULE.map((row) => (
                  <div className="schedule-row" key={row.days}>
                    <span className="schedule-days">{row.days}</span>
                    <span className="schedule-hours">{row.hours.join(" · ")}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="info-card">
              <div className="info-label">Location</div>
              <div className="info-value">{ADDRESS}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 8. CONTATTI ───────── */}
      <section id="contatti" className="section">
        <div className="wrap">
          <span className="eyebrow">Contatti</span>
          <h2 className="section-title">Scrivici o chiamaci</h2>

          <div className="info-grid">
            <div className="info-card">
              <div className="info-label">Telefono</div>
              <div className="info-value">
                <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              </div>
            </div>
            <div className="info-card">
              <div className="info-label">Email</div>
              <div className="info-value">
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 9. PRENOTAZIONE ───────── */}
      <section className="section section-alt">
        <div className="wrap">
          <span className="eyebrow">Prenota</span>
          <h2 className="section-title">Vieni a trovarci a Stradella</h2>
          <p className="section-text">
            Scrivici su WhatsApp per prenotare un tavolo o avere informazioni
            sulla disponibilità.
          </p>

          <div className="book-box">
            <a className="btn btn-wa" href={WA_HREF} target="_blank" rel="noopener noreferrer">
              Scrivici su WhatsApp
            </a>
            <span className="book-text">
              {ADDRESS}
              <br />
              Tel. {PHONE_DISPLAY}
            </span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          © {new Date().getFullYear()} Vineria Stradella — Stradella (PV)
        </div>
      </footer>

      <a className="float-wa" href={WA_HREF} target="_blank" rel="noopener noreferrer" aria-label="Scrivici su WhatsApp">
        <svg width="26" height="26" viewBox="0 0 32 32" fill="#06150c" aria-hidden="true">
          <path d="M16.04 3C9.37 3 3.96 8.38 3.96 15c0 2.22.6 4.3 1.66 6.09L4 29l8.1-2.55a12.1 12.1 0 0 0 3.94.66c6.67 0 12.08-5.38 12.08-12s-5.41-12-12.08-12Zm0 21.8c-1.3 0-2.58-.34-3.7-.99l-.27-.16-4.8 1.51 1.55-4.62-.18-.28a9.7 9.7 0 0 1-1.53-5.26c0-5.4 4.43-9.78 9.93-9.78 5.5 0 9.96 4.39 9.96 9.78 0 5.4-4.46 9.8-9.96 9.8Zm5.46-7.33c-.3-.15-1.77-.86-2.04-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.65-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.07 2.86 1.22 3.06c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </>
  );
}
