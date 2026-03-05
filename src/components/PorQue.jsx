import { ECGLine, IconZap, IconSearch, IconDollarSign, IconClipboard, IconShield, IconHandshake } from "../icons/icons";

// EDITAR: Modificá, agregá o quitá beneficios
const BENEFICIOS = [
  {
    Icon: IconZap,
    titulo: "Respuesta rápida",
    desc: "Coordinamos la visita técnica en el menor tiempo posible para minimizar el tiempo fuera de servicio del equipo.",
  },
  {
    Icon: IconSearch,
    titulo: "Diagnóstico transparente",
    desc: "Te explicamos exactamente qué tiene el equipo y cuál es la solución antes de iniciar cualquier trabajo.",
  },
  {
    Icon: IconDollarSign,
    titulo: "Presupuesto claro sin sorpresas",
    desc: "Presupuesto detallado y sin costos ocultos. Vos decidís si avanzar o no.",
  },
  {
    Icon: IconHandshake,
    titulo: "Atención personalizada",
    desc: "Trato directo con el técnico. Sin intermediarios ni call centers. Siempre disponibles por WhatsApp.",
  },
];

// ============================================================
// EDITAR: URLs de imágenes
// Para usar fotos propias, reemplazá las URLs por rutas locales:
//   principal:  "/images/tecnico-reparando.jpg"
//   secundaria: "/images/equipo-medico.jpg"
// Las imágenes actuales son de Unsplash (libres de uso).
// ============================================================
const IMAGENES = {
  principal:      "https://images.unsplash.com/photo-1725859189283-eaeb03a0a1c9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  principalAlt:   "Técnico biomédico reparando equipo médico en taller",
  secundaria:     "https://images.unsplash.com/photo-1559000357-f6b52ddfbe37?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  secundariaAlt:  "Equipamiento médico de diagnóstico",
};

const PorQue = () => (
  <section
    id="por-que"
    aria-labelledby="porque-title"
    style={{ background: "#0F1C2E", padding: "88px 20px", position: "relative", overflow: "hidden" }}
  >
    {/* Separador ECG superior */}
    <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
      <ECGLine color="#8B0000" opacity={0.45} height={44} />
    </div>

    <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>

      {/* Encabezado */}
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span style={{ display: "inline-block", background: "rgba(139,0,0,0.18)", color: "#d88", fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", padding: "4px 14px", borderRadius: 3, marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
          ¿Por qué elegirnos?
        </span>
        {/* EDITAR: Título y descripción */}
        <h2
          id="porque-title"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}
        >
          Confianza, experiencia y compromiso
        </h2>
        <p style={{ color: "#7A9AB5", fontSize: 16, maxWidth: 500, margin: "0 auto", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, fontWeight: 400 }}>
          Elegir al técnico adecuado importa. En B&V te damos razones concretas para confiar tu equipamiento a nosotros.
        </p>
      </div>

      {/* Layout: imágenes izquierda · beneficios derecha */}
      <div
        className="porque-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}
      >

        {/* ── Columna izquierda: bloque de imágenes apiladas ── */}
        <div style={{ position: "relative", paddingBottom: 40 }}>

          {/* Imagen principal */}
          <div style={{
            borderRadius: 12,
            overflow: "hidden",
            aspectRatio: "4/3",
            boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
            border: "1px solid rgba(100,160,220,0.12)",
          }}>
            <img
              src={IMAGENES.principal}
              alt={IMAGENES.principalAlt}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              loading="lazy"
            />
          </div>

          {/* Imagen secundaria superpuesta abajo a la derecha */}
          <div style={{
            position: "absolute",
            bottom: 0,
            right: -20,
            width: "50%",
            aspectRatio: "4/3",
            borderRadius: 10,
            overflow: "hidden",
            boxShadow: "0 12px 36px rgba(0,0,0,0.55)",
            border: "3px solid #0F1C2E",
          }}>
            <img
              src={IMAGENES.secundaria}
              alt={IMAGENES.secundariaAlt}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              loading="lazy"
            />
          </div>

          {/* Badge flotante sobre imagen principal */}
          <div style={{
            position: "absolute",
            top: 20,
            left: 20,
            background: "rgba(9, 21, 32, 0.90)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(100,160,220,0.2)",
            borderRadius: 8,
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}>
            <div style={{
              width: 36, height: 36,
              background: "rgba(139,0,0,0.18)",
              border: "1px solid rgba(139,0,0,0.4)",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
              color: "#c0392b",
            }}>
              <IconShield size={17} />
            </div>
            <div>
              {/* EDITAR: Estadística del badge flotante */}
              <div style={{ color: "#fff", fontSize: 14, fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.2 }}>+500 equipos</div>
              <div style={{ color: "#7A9AB5", fontSize: 11, fontFamily: "'DM Sans', sans-serif", marginTop: 2 }}>reparados exitosamente</div>
            </div>
          </div>

          {/* Línea ECG decorativa entre las dos imágenes */}
          <div style={{
            position: "absolute",
            bottom: "30%",
            left: 0,
            right: "20%",
            opacity: 0.4,
            pointerEvents: "none",
          }}>
            <ECGLine color="#8B0000" opacity={1} height={28} />
          </div>
        </div>

        {/* ── Columna derecha: lista de beneficios ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          {BENEFICIOS.map((b, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 8,
                padding: "16px 18px",
                display: "flex",
                gap: 14,
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(139,0,0,0.09)"; e.currentTarget.style.borderColor = "rgba(139,0,0,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.035)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
            >
              <div style={{ color: "#8B0000", flexShrink: 0, marginTop: 2 }}>
                <b.Icon size={20} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: "#E8EFF6", marginBottom: 4, lineHeight: 1.3 }}>
                  {b.titulo}
                </h3>
                <p style={{ color: "#7A9AB5", fontSize: 13, lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Separador ECG inferior */}
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
      <ECGLine color="#8B0000" opacity={0.45} height={44} />
    </div>

    <style>{`
      @media (max-width: 900px) {
        .porque-grid {
          grid-template-columns: 1fr !important;
        }
        .porque-grid > div:first-child {
          margin-bottom: 56px;
        }
      }
    `}</style>
  </section>
);

export default PorQue;
