import CONFIG from "../data/config";
import { WhatsAppIcon, ECGLine, IconZap, IconAward, IconClipboard, IconSettings, IconChevronDown } from "../icons/icons";

const Hero = () => (
  <section
    id="inicio"
    aria-labelledby="hero-title"
    style={{
      paddingTop: 110, paddingBottom: 0,
      background: "linear-gradient(160deg, #0F1C2E 0%, #1E3248 55%, #0F1C2E 100%)",
      position: "relative", overflow: "hidden",
    }}
  >
    {/* Fondo punteado decorativo */}
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />

    <div
      className="hero-grid"
      style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 20px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}
    >
      {/* Columna izquierda: copy */}
      <div>
        {/* EDITAR: Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(139,0,0,0.12)", border: "1px solid rgba(139,0,0,0.35)", borderRadius: 4, padding: "5px 14px", marginBottom: 24 }}>
          <span style={{ width: 6, height: 6, background: "#8B0000", borderRadius: "50%", display: "inline-block", boxShadow: "0 0 6px #8B0000" }} />
          <span style={{ color: "#c88", fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>
            Servicio Técnico Especializado
          </span>
        </div>

        {/* EDITAR: H1 principal */}
        <h1 id="hero-title" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.8vw, 48px)", fontWeight: 700, color: "#fff", lineHeight: 1.18, marginBottom: 22, letterSpacing: -0.3 }}>
          Reparación y mantenimiento de{" "}
          <span style={{ color: "#c0392b" }}>equipos médicos</span>
        </h1>

        {/* EDITAR: Subtítulo */}
        <p style={{ color: "#9BBACE", fontSize: 16, lineHeight: 1.75, marginBottom: 36, fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
          Servicio técnico &nbsp;·&nbsp; Mantenimiento preventivo y correctivo &nbsp;·&nbsp; Insumos médicos
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href={`https://wa.me/${CONFIG.whatsapp1}?text=${CONFIG.heroMsg}`}
            target="_blank" rel="noopener noreferrer"
            aria-label="Solicitar servicio por WhatsApp"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#25D366", color: "#fff", padding: "13px 22px", borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: "none", boxShadow: "0 4px 20px rgba(37,211,102,0.3)", transition: "transform 0.2s, box-shadow 0.2s", fontFamily: "'DM Sans', sans-serif" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(37,211,102,0.42)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.3)"; }}
          >
            <WhatsAppIcon size={20} /> Solicitar servicio por WhatsApp
          </a>

          <a
            href="#servicios"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#C8DFF0", padding: "13px 22px", borderRadius: 6, fontSize: 14, fontWeight: 500, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)", transition: "border-color 0.2s, color 0.2s", fontFamily: "'DM Sans', sans-serif" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#C8DDEF"; }}
          >
            Ver servicios
          </a>
        </div>

        {/* Badges de confianza con iconos SVG */}
        <div style={{ display: "flex", gap: 24, marginTop: 40, flexWrap: "wrap" }}>
          {[
            { Icon: IconZap,       text: "Respuesta rápida" },
            { Icon: IconAward,     text: "Técnicos certificados" },
            { Icon: IconClipboard, text: "Presupuesto sin cargo" },
          ].map(({ Icon, text }) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ color: "#8B0000", display: "flex" }}><Icon size={15} /></span>
              <span style={{ color: "#7A9AB5", fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Columna derecha: card visual */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ position: "relative", width: "100%", maxWidth: 380, aspectRatio: "4/3", background: "linear-gradient(135deg, rgba(30,80,130,0.2) 0%, rgba(255,255,255,0.04) 100%)", border: "1px solid rgba(100,160,220,0.25)", borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, padding: 28, overflow: "hidden" }}>
          <div style={{ color: "rgba(255,255,255,0.12)", display: "flex" }}><IconSettings size={68} /></div>
          {/* EDITAR: Texto dentro del card visual */}
          <div style={{ color: "#fff", fontSize: 17, fontWeight: 600, fontFamily: "'Playfair Display', Georgia, serif", textAlign: "center", lineHeight: 1.3 }}>
            Equipos médicos en manos expertas
          </div>
          <div style={{ color: "#7A9AB5", fontSize: 13, textAlign: "center", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.65, fontWeight: 400 }}>
            Reparamos, calibramos y mantenemos equipamiento biomédico con precisión técnica.
          </div>
          <div style={{ width: "100%", marginTop: 4 }}>
            <ECGLine color="#c0392b" opacity={0.85} height={34} />
          </div>
          {/* Indicador "Activo" */}
          <div style={{ position: "absolute", top: 16, right: 16, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, background: "#25D366", borderRadius: "50%", display: "inline-block", animation: "pulse 2s infinite" }} />
            <span style={{ color: "#25D366", fontSize: 11, fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>Activo</span>
          </div>
        </div>
      </div>
    </div>

    {/* Separador ECG inferior */}
    <div style={{ marginTop: 44 }}>
      <ECGLine color="#8B0000" opacity={0.55} height={50} />
    </div>

    <style>{`
      @media (max-width: 768px) {
        .hero-grid { grid-template-columns: 1fr !important; }
        .hero-grid > div:last-child { display: none !important; }
      }
    `}</style>
  </section>
);

export default Hero;
