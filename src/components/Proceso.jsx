import CONFIG from "../data/config";
import { WhatsAppIcon, IconMessageCircle, IconSearch, IconClipboard, IconCheckCircle } from "../icons/icons";

// EDITAR: Modificá los pasos del proceso
const PASOS = [
  {
    Icon: IconMessageCircle,
    num: "01",
    titulo: "Contacto",
    desc: "Escribinos por WhatsApp o completá el formulario. Te respondemos rápido con una fecha de visita o consulta.",
  },
  {
    Icon: IconSearch,
    num: "02",
    titulo: "Diagnóstico",
    desc: "Nuestro técnico evalúa el equipo en tu ubicación o en nuestro taller. Detallamos el problema encontrado.",
  },
  {
    Icon: IconClipboard,
    num: "03",
    titulo: "Presupuesto",
    desc: "Presupuesto claro con repuestos y mano de obra. Sin costos ocultos. Vos decidís si avanzar.",
  },
  {
    Icon: IconCheckCircle,
    num: "04",
    titulo: "Reparación y Entrega",
    desc: "Realizamos el trabajo con garantía. Entregamos el equipo funcionando con informe técnico incluido.",
  },
];

const Proceso = () => (
  <section id="proceso" aria-labelledby="proceso-title" style={{ background: "#fff", padding: "88px 20px" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>

      {/* Encabezado */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <span style={{ display: "inline-block", background: "#8B0000", color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", padding: "4px 14px", borderRadius: 3, marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
          Cómo trabajamos
        </span>
        {/* EDITAR: Título y descripción */}
        <h2 id="proceso-title" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#1B2B3B", marginBottom: 16, lineHeight: 1.2 }}>
          Proceso simple y transparente
        </h2>
        <p style={{ color: "#5A7A96", fontSize: 16, maxWidth: 480, margin: "0 auto", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, fontWeight: 400 }}>
          Cuatro pasos claros desde que nos contactás hasta que recuperás tu equipo.
        </p>
      </div>

      {/* Pasos */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 0, position: "relative" }}>
        {PASOS.map((p, i) => (
          <div key={i} style={{ textAlign: "center", padding: "28px 20px", position: "relative" }}>
            {/* Línea conectora entre pasos (excepto el último) */}
            {i < PASOS.length - 1 && (
              <div aria-hidden="true" style={{ position: "absolute", top: 46, right: "-2%", width: "54%", height: 1, background: "linear-gradient(90deg, rgba(139,0,0,0.4), transparent)", zIndex: 0 }} />
            )}
            {/* Ícono del paso */}
            <div style={{ width: 56, height: 56, background: "#1B2B3B", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", color: "#dd3737", position: "relative", zIndex: 1, border: "2px solid rgba(139,0,0,0.3)" }}>
              <p.Icon size={24} />
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#8B0000", letterSpacing: 2, marginBottom: 8, fontFamily: "'DM Sans', sans-serif", textTransform: "uppercase" }}>
              Paso {p.num}
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: "#1B2B3B", marginBottom: 10 }}>
              {p.titulo}
            </h3>
            <p style={{ color: "#5A7A96", fontSize: 13, lineHeight: 1.75, fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
              {p.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA final */}
      <div style={{ textAlign: "center", marginTop: 48 }}>
        <a
          href={`https://wa.me/${CONFIG.whatsapp1}?text=${CONFIG.heroMsg}`}
          target="_blank" rel="noopener noreferrer"
          aria-label="Empezar el proceso contactando por WhatsApp"
          style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#1B2B3B", color: "#fff", padding: "13px 26px", borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", transition: "background 0.2s, transform 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.background = "#8B0000"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#1B2B3B"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          <WhatsAppIcon size={19} /> Empezar ahora
        </a>
      </div>
    </div>
  </section>
);

export default Proceso;
