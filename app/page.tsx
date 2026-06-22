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

type WineCategory = { name: string; text: string; tone: string };

const WINE_CATEGORIES: WineCategory[] = [
  {
    name: "Rossi",
    text: "Etichette strutturate e proposte più leggere, dal Nord al Sud Italia, per accompagnare un tagliere o una serata intera.",
    tone: "#8a2e1f",
  },
  {
    name: "Bianchi",
    text: "Selezione fresca e versatile, perfetta per il calice veloce a pranzo o l'aperitivo serale.",
    tone: "#a8823f",
  },
  {
    name: "Bollicine",
    text: "Per chi cerca qualcosa di più mosso: metodo classico e charmat, scelti per ogni occasione.",
    tone: "#5a6b3f",
  },
];

type ScheduleRow = { days: string; hours: string[] };

const SCHEDULE: ScheduleRow[] = [
  { days: "Martedì — Giovedì", hours: ["11:00–15:00", "18:00–00:00"] },
  { days: "Venerdì — Sabato", hours: ["11:00–15:00", "18:00–02:00"] },
  { days: "Domenica", hours: ["11:00–15:00", "18:00–01:00"] },
  { days: "Lunedì", hours: ["Chiuso"] },
];

function VineSprig({ color, flip }: { color: string; flip?: boolean }) {
  return (
    <svg
      width="120"
      height="60"
      viewBox="0 0 120 60"
      fill="none"
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M2 30c20-18 40-18 60-4s40 14 56-6" stroke={color} strokeWidth="1.4" fill="none" />
      <path d="M22 24c-4-6-2-12 4-14" stroke={color} strokeWidth="1.2" fill="none" />
      <path d="M22 24c2-7 8-10 14-8" stroke={color} strokeWidth="1.2" fill="none" />
      <circle cx="70" cy="18" r="3" fill={color} opacity="0.85" />
      <circle cx="76" cy="14" r="3" fill={color} opacity="0.85" />
      <circle cx="74" cy="22" r="3" fill={color} opacity="0.85" />
      <circle cx="80" cy="20" r="3" fill={color} opacity="0.85" />
      <circle cx="78" cy="27" r="3" fill={color} opacity="0.85" />
      <path d="M48 22c5-8 14-9 19-3" stroke={color} strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function GrapeCluster({ color, size = 26 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 28" fill="none" aria-hidden="true">
      <path d="M12 2v5" stroke={color} strokeWidth="1.3" />
      <path d="M9 4c-2 0-3 1.5-2.5 3.5" stroke={color} strokeWidth="1.1" fill="none" />
      <circle cx="12" cy="10" r="3.1" fill={color} />
      <circle cx="8" cy="13.5" r="3.1" fill={color} opacity="0.92" />
      <circle cx="16" cy="13.5" r="3.1" fill={color} opacity="0.92" />
      <circle cx="6" cy="18.5" r="3.1" fill={color} opacity="0.85" />
      <circle cx="12" cy="19" r="3.1" fill={color} opacity="0.85" />
      <circle cx="18" cy="18.5" r="3.1" fill={color} opacity="0.85" />
      <circle cx="12" cy="24" r="3.1" fill={color} opacity="0.78" />
    </svg>
  );
}

function OliveLeaf({ color, size = 22 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 40 20" fill="none" aria-hidden="true">
      <path
        d="M2 10c8-9 22-9 36 0-8 9-22 9-36 0Z"
        stroke={color}
        strokeWidth="1.3"
        fill={color}
        fillOpacity="0.18"
      />
      <path d="M4 10h32" stroke={color} strokeWidth="0.9" />
    </svg>
  );
}

function GlassMark({ color, size = 22 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 3h12l-1.2 8.4A4.8 4.8 0 0 1 12 16a4.8 4.8 0 0 1-4.8-4.6L6 3Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M12 16v5M8.5 21h7" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #f3e9d8;
          color: #3a2a1c;
          font-family: Georgia, "Times New Roman", serif;
          -webkit-font-smoothing: antialiased;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
        }
        a { color: inherit; text-decoration: none; }
        :focus-visible { outline: 2px solid #b5562f; outline-offset: 3px; }

        .wrap { width: 100%; max-width: 1140px; margin: 0 auto; padding: 0 24px; }
        .sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; }

        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          padding: 18px 0;
          background: rgba(243,233,216,0.94);
          border-bottom: 2px solid #c98a4f;
        }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; }
        .nav-mark {
          display: flex; align-items: center; gap: 10px;
          font-family: Georgia, serif; font-weight: 700; font-size: 19px; color: #3a2a1c;
        }
        .nav-mark em { font-style: italic; color: #b5562f; font-weight: 400; }
        .nav-links { display: none; gap: 26px; }
        .nav-link {
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #6b5639;
        }
        .nav-link:hover { color: #b5562f; }
        .nav-cta {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 10px 18px; border-radius: 3px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          background: #25d366; color: #0a2e16;
        }
        @media (min-width: 760px) { .nav-links { display: flex; } }

        .hero {
          padding: 130px 0 0;
          position: relative; overflow: hidden;
          background:
            radial-gradient(ellipse 80% 60% at 15% 0%, rgba(181,86,47,0.16), transparent 65%),
            radial-gradient(ellipse 70% 55% at 95% 30%, rgba(90,107,63,0.14), transparent 60%);
        }
        .hero-frame {
          margin: 0 16px;
          border: 2px solid #b5562f;
          padding: 56px 40px 0;
          position: relative;
        }
        .hero-frame::before {
          content: "";
          position: absolute; inset: 8px;
          border: 1px solid #c98a4f;
          pointer-events: none;
        }
        .hero-vine-top { display: flex; justify-content: center; margin-bottom: 18px; }
        .hero-eyebrow {
          text-align: center;
          font-size: 11px; font-weight: 700; letter-spacing: 0.26em;
          text-transform: uppercase; color: #b5562f;
        }
        .hero-title {
          text-align: center;
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 700;
          font-size: clamp(40px, 8vw, 86px);
          line-height: 1.0; letter-spacing: -0.01em;
          margin-top: 14px; color: #3a2a1c;
        }
        .hero-title em { font-style: italic; color: #b5562f; font-weight: 400; }
        .hero-sub {
          text-align: center;
          margin: 22px auto 0; font-size: 17px; line-height: 1.7;
          color: #6b5639; max-width: 480px;
        }
        .hero-tagrow { margin-top: 26px; display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; }
        .pill {
          display: inline-flex; align-items: center;
          padding: 6px 14px; border: 1px solid #c98a4f; border-radius: 999px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #6b5639;
        }
        .hero-ctas { margin-top: 32px; display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
        .hero-vine-bottom { display: flex; justify-content: center; margin-top: 40px; }

        .btn {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 14px 26px; border-radius: 3px;
          font-size: 13px; font-weight: 700; letter-spacing: 0.03em;
          border: 1px solid transparent;
        }
        .btn-wa { background: #25d366; color: #0a2e16; }
        .btn-outline { border-color: #3a2a1c; color: #3a2a1c; }
        .btn-outline:hover { border-color: #b5562f; color: #b5562f; }

        .section { padding: 80px 0; position: relative; }
        .section-alt { background: #ebd9bc; }
        .eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 0.2em;
          text-transform: uppercase; color: #b5562f;
        }
        .section-title {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 700; font-size: clamp(26px, 3.6vw, 40px);
          line-height: 1.12; margin-top: 10px; color: #3a2a1c;
        }
        .section-title em { font-style: italic; color: #b5562f; font-weight: 400; }
        .section-text { margin-top: 16px; font-size: 16px; line-height: 1.8; color: #6b5639; max-width: 600px; }

        .about-grid { margin-top: 44px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .about-card { padding: 0; }
        .about-card-icon { margin-bottom: 14px; }
        .about-card h3 { font-family: Georgia, serif; font-weight: 700; font-size: 19px; color: #3a2a1c; margin-bottom: 8px; }
        .about-card p { font-size: 14px; line-height: 1.7; color: #6b5639; }

        .wine-frame { margin-top: 44px; border: 2px solid #5a6b3f; padding: 36px 30px; position: relative; }
        .wine-frame::before {
          content: ""; position: absolute; inset: 7px;
          border: 1px solid #9aa87a; pointer-events: none;
        }
        .wine-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
        .wine-card { padding: 10px 22px; border-left: 1px dotted #c9a876; }
        .wine-card:first-child { border-left: none; padding-left: 0; }
        .wine-card-icon { margin-bottom: 12px; }
        .wine-card h3 { font-family: Georgia, serif; font-weight: 700; font-size: 19px; color: #3a2a1c; margin-bottom: 8px; }
        .wine-card p { font-size: 14px; line-height: 1.7; color: #6b5639; }
        .wine-vine-row { display: flex; justify-content: center; margin-top: 28px; }

        .chalk-box {
          margin-top: 44px; border: 2px solid #b5562f; padding: 38px;
          position: relative; background: rgba(181,86,47,0.04);
        }
        .chalk-box::before, .chalk-box::after {
          content: ""; position: absolute; width: 18px; height: 18px; border: 2px solid #b5562f;
        }
        .chalk-box::before { top: -2px; left: -2px; border-right: none; border-bottom: none; }
        .chalk-box::after { bottom: -2px; right: -2px; border-left: none; border-top: none; }
        .chalk-title { font-size: 12px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: #b5562f; margin-bottom: 14px; }
        .chalk-text { font-size: 17px; line-height: 1.8; color: #3a2a1c; max-width: 640px; }

        .events-list { margin-top: 40px; display: flex; flex-direction: column; }
        .event-row {
          display: grid; grid-template-columns: 130px 1fr auto;
          align-items: center; gap: 24px; padding: 20px 0; border-top: 1px solid #c9a876;
        }
        .events-list .event-row:last-child { border-bottom: 1px solid #c9a876; }
        .event-day { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #b5562f; }
        .event-title { font-family: Georgia, serif; font-weight: 700; font-size: clamp(17px, 2.2vw, 22px); color: #3a2a1c; }
        .event-time { font-size: 12px; color: #6b5639; white-space: nowrap; }

        .gallery-strip { margin-top: 44px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .gallery-frame {
          aspect-ratio: 3 / 4; border: 2px solid #3a2a1c;
          background: #f3e9d8; display: flex; align-items: center; justify-content: center;
          position: relative;
        }
        .gallery-frame::before { content: ""; position: absolute; inset: 6px; border: 1px solid #c9a876; }

        .info-grid {
          margin-top: 40px; display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: #c9a876; border: 1px solid #c9a876;
        }
        .info-card { background: #f3e9d8; padding: 26px 24px; }
        .section-alt .info-card { background: #ebd9bc; }
        .info-label { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #b5562f; margin-bottom: 10px; }
        .info-value { font-size: 15px; line-height: 1.8; color: #3a2a1c; }

        .schedule-list { display: flex; flex-direction: column; gap: 0; }
        .schedule-row { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; padding: 8px 0; }
        .schedule-row + .schedule-row { border-top: 1px dotted #c9a876; }
        .schedule-days { font-size: 13px; font-weight: 700; color: #3a2a1c; }
        .schedule-hours { font-size: 13px; color: #6b5639; text-align: right; }

        .book-box {
          margin-top: 40px; display: flex; flex-wrap: wrap; align-items: center; gap: 26px;
          padding: 36px; border: 2px solid #b5562f; background: #f3e9d8;
        }
        .book-text { font-size: 13px; color: #6b5639; line-height: 1.8; }

        .footer { border-top: 2px solid #c98a4f; padding: 26px 0; text-align: center; font-size: 12px; color: #8a7355; }

        .float-wa {
          position: fixed; bottom: 22px; right: 22px; z-index: 60;
          width: 54px; height: 54px; border-radius: 50%;
          background: #25d366; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 22px rgba(58,42,28,0.35);
        }

        @media (max-width: 860px) { .hero-frame { padding: 44px 24px 0; } }
        @media (max-width: 720px) {
          .about-grid { grid-template-columns: 1fr; }
          .wine-grid { grid-template-columns: 1fr; gap: 22px; }
          .wine-card { border-left: none; padding-left: 0; }
          .info-grid { grid-template-columns: 1fr; }
          .gallery-strip { grid-template-columns: repeat(2, 1fr); }
          .event-row { grid-template-columns: 1fr; gap: 6px; }
          .event-time { text-align: left; }
        }
      `}</style>

      <nav className="nav sans">
        <div className="wrap nav-inner">
          <span className="nav-mark">
            <GrapeCluster color="#b5562f" size={20} />
            Vineria <em>Stradella</em>
          </span>
          <div className="nav-links">
            <a className="nav-link" href="#about">Chi siamo</a>
            <a className="nav-link" href="#vini">Vini</a>
            <a className="nav-link" href="#aperitivi">Aperitivi</a>
            <a className="nav-link" href="#orari">Orari</a>
            <a className="nav-link" href="#contatti">Contatti</a>
          </div>
          <a className="nav-cta" href={WA_HREF} target="_blank" rel="noopener noreferrer">Prenota</a>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap">
          <div className="hero-frame">
            <div className="hero-vine-top"><VineSprig color="#5a6b3f" /></div>
            <p className="hero-eyebrow sans">Stradella (PV) — Lombardia</p>
            <h1 className="hero-title">Vineria <em>Stradella</em></h1>
            <p className="hero-sub">
              Wine shop &amp; more: enoteca, aperitivi e cena informale nel cuore
              di Stradella. Un buon calice e un tagliere, senza fretta.
            </p>
            <div className="hero-tagrow sans">
              <span className="pill">Enoteca</span>
              <span className="pill">Aperitivi</span>
              <span className="pill">Taglieri</span>
              <span className="pill">Cena informale</span>
            </div>
            <div className="hero-ctas sans">
              <a className="btn btn-wa" href={WA_HREF} target="_blank" rel="noopener noreferrer">
                <svg width="17" height="17" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                  <path d="M16.04 3C9.37 3 3.96 8.38 3.96 15c0 2.22.6 4.3 1.66 6.09L4 29l8.1-2.55a12.1 12.1 0 0 0 3.94.66c6.67 0 12.08-5.38 12.08-12s-5.41-12-12.08-12Zm0 21.8c-1.3 0-2.58-.34-3.7-.99l-.27-.16-4.8 1.51 1.55-4.62-.18-.28a9.7 9.7 0 0 1-1.53-5.26c0-5.4 4.43-9.78 9.93-9.78 5.5 0 9.96 4.39 9.96 9.78 0 5.4-4.46 9.8-9.96 9.8Zm5.46-7.33c-.3-.15-1.77-.86-2.04-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.65-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.07 2.86 1.22 3.06c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                </svg>
                Prenota su WhatsApp
              </a>
              <a className="btn btn-outline" href="#vini">Scopri la cantina</a>
            </div>
            <div className="hero-vine-bottom"><VineSprig color="#b5562f" flip /></div>
          </div>
        </div>
      </header>

      <section id="about" className="section">
        <div className="wrap">
          <span className="eyebrow sans">Chi siamo</span>
          <h2 className="section-title">Un'<em>enoteca</em> nel centro di Stradella</h2>
          <p className="section-text">
            Vineria Stradella è un wine shop &amp; more in Corso XXVI Aprile: un locale raccolto
            dove fermarsi per un calice durante il giorno o per un aperitivo conviviale la sera.
            Selezione di etichette, taglieri curati e un servizio attento sono il cuore dell'esperienza.
          </p>
          <div className="about-grid">
            {ABOUT_CARDS.map((c, i) => (
              <div className="about-card" key={c.title}>
                <div className="about-card-icon">
                  {i === 0 && <GrapeCluster color="#b5562f" />}
                  {i === 1 && <OliveLeaf color="#5a6b3f" />}
                  {i === 2 && <GlassMark color="#a8823f" />}
                </div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vini" className="section section-alt">
        <div className="wrap">
          <span className="eyebrow sans">Selezione vini</span>
          <h2 className="section-title">La <em>cantina</em> di Vineria Stradella</h2>
          <p className="section-text">
            Una carta dei vini pensata per accompagnare ogni momento della giornata,
            dal calice veloce all'ora di pranzo alla bottiglia condivisa la sera.
          </p>
          <div className="wine-frame">
            <div className="wine-grid">
              {WINE_CATEGORIES.map((w) => (
                <div className="wine-card" key={w.name}>
                  <div className="wine-card-icon"><GlassMark color={w.tone} /></div>
                  <h3>{w.name}</h3>
                  <p>{w.text}</p>
                </div>
              ))}
            </div>
            <div className="wine-vine-row"><VineSprig color="#5a6b3f" /></div>
          </div>
        </div>
      </section>

      <section id="aperitivi" className="section">
        <div className="wrap">
          <span className="eyebrow sans">Aperitivi &amp; taglieri</span>
          <h2 className="section-title">L'aperitivo, fatto con <em>calma</em></h2>
          <div className="chalk-box">
            <div className="chalk-title sans">Ogni giorno, dal tardo pomeriggio</div>
            <p className="chalk-text">
              Taglieri di salumi e formaggi selezionati, pensati per accompagnare un calice di vino
              in buona compagnia. L'aperitivo da Vineria Stradella è un momento conviviale, senza
              buffet impersonali: solo prodotti curati e tempo per godersela.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <span className="eyebrow sans">L'esperienza</span>
          <h2 className="section-title">Perché tornare da <em>Vineria Stradella</em></h2>
          <p className="section-text">
            Chi ci ha visitato racconta di un ambiente accogliente e di un servizio attento,
            in un locale piccolo ma curato nei dettagli — il posto giusto per un aperitivo
            tra amici o una cena informale senza fretta.
          </p>
          <div className="events-list sans">
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

      <section className="section">
        <div className="wrap">
          <span className="eyebrow sans">Galleria</span>
          <h2 className="section-title">Un'idea dell'<em>atmosfera</em></h2>
          <p className="section-text">
            In attesa delle foto del locale, ecco quattro piccole incisioni che raccontano
            lo spirito di Vineria Stradella.
          </p>
          <div className="gallery-strip">
            <div className="gallery-frame"><GrapeCluster color="#b5562f" size={32} /></div>
            <div className="gallery-frame"><OliveLeaf color="#5a6b3f" size={32} /></div>
            <div className="gallery-frame"><GlassMark color="#a8823f" size={30} /></div>
            <div className="gallery-frame"><VineSprig color="#b5562f" /></div>
          </div>
        </div>
      </section>

      <section id="orari" className="section section-alt">
        <div className="wrap">
          <span className="eyebrow sans">Orari</span>
          <h2 className="section-title">Quando <em>trovarci</em></h2>
          <div className="info-grid sans">
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

      <section id="contatti" className="section">
        <div className="wrap">
          <span className="eyebrow sans">Contatti</span>
          <h2 className="section-title">Scrivici o <em>chiamaci</em></h2>
          <div className="info-grid sans">
            <div className="info-card">
              <div className="info-label">Telefono</div>
              <div className="info-value"><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></div>
            </div>
            <div className="info-card">
              <div className="info-label">Email</div>
              <div className="info-value"><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <span className="eyebrow sans">Prenota</span>
          <h2 className="section-title">Vieni a trovarci a <em>Stradella</em></h2>
          <p className="section-text">
            Scrivici su WhatsApp per prenotare un tavolo o avere informazioni sulla disponibilità.
          </p>
          <div className="book-box sans">
            <a className="btn btn-wa" href={WA_HREF} target="_blank" rel="noopener noreferrer">
              Scrivici su WhatsApp
            </a>
            <span className="book-text">{ADDRESS}<br />Tel. {PHONE_DISPLAY}</span>
          </div>
        </div>
      </section>

      <footer className="footer sans">
        <div className="wrap">
          © {new Date().getFullYear()} Vineria Stradella — Stradella (PV)
        </div>
      </footer>

      <a className="float-wa" href={WA_HREF} target="_blank" rel="noopener noreferrer" aria-label="Scrivici su WhatsApp">
        <svg width="25" height="25" viewBox="0 0 32 32" fill="#0a2e16" aria-hidden="true">
          <path d="M16.04 3C9.37 3 3.96 8.38 3.96 15c0 2.22.6 4.3 1.66 6.09L4 29l8.1-2.55a12.1 12.1 0 0 0 3.94.66c6.67 0 12.08-5.38 12.08-12s-5.41-12-12.08-12Zm0 21.8c-1.3 0-2.58-.34-3.7-.99l-.27-.16-4.8 1.51 1.55-4.62-.18-.28a9.7 9.7 0 0 1-1.53-5.26c0-5.4 4.43-9.78 9.93-9.78 5.5 0 9.96 4.39 9.96 9.78 0 5.4-4.46 9.8-9.96 9.8Zm5.46-7.33c-.3-.15-1.77-.86-2.04-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.65-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.07 2.86 1.22 3.06c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </>
  );
}
