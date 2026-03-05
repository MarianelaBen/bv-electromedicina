import CONFIG from "../data/config";
import { IconShield, IconWrench, IconSearch, IconSettings, IconPackage, IconAward, IconArrowRight } from "../icons/icons";

// EDITAR: Agregá, eliminá o modificá servicios aquí
const SERVICIOS = [
  {
    Icon: IconShield,
    titulo: "Mantenimiento Preventivo",
    desc: "Planes periódicos para mantener tus equipos funcionando de forma óptima y evitar fallas imprevistas.",
    waMsg: "Hola%2C%20quiero%20consultar%20por%20mantenimiento%20preventivo%20de%20equipos%20m%C3%A9dicos.",
  },
  {
    Icon: IconWrench,
    titulo: "Reparación Correctiva",
    desc: "Diagnóstico y reparación de equipos con fallas. Usamos repuestos de calidad y garantizamos el trabajo.",
    waMsg: "Hola%2C%20quiero%20consultar%20por%20reparaci%C3%B3n%20correctiva%20de%20equipos%20m%C3%A9dicos.",
  },
  {
    Icon: IconSearch,
    titulo: "Diagnóstico y Evaluación",
    desc: "Evaluamos el estado técnico de tus equipos y emitimos informe detallado. Ideal para inventarios y auditorías.",
    waMsg: "Hola%2C%20quiero%20consultar%20por%20diagn%C3%B3stico%20de%20equipos%20m%C3%A9dicos.",
  },
  {
    Icon: IconSettings,
    titulo: "Instalación y Puesta en Marcha",
    desc: "Instalamos y configuramos nuevos equipos médicos asegurando el funcionamiento correcto desde el primer día.",
    waMsg: "Hola%2C%20quiero%20consultar%20por%20instalaci%C3%B3n%20de%20equipos%20m%C3%A9dicos.",
  },
  {
    Icon: IconPackage,
    titulo: "Insumos Médicos",
    desc: "Provisión y venta de insumos médicos para clínicas, hospitales y consultorios. Consulte disponibilidad.",
    waMsg: "Hola%2C%20quiero%20consultar%20por%20insumos%20m%C3%A9dicos.",
  },
  {
    Icon: IconAward,
    titulo: "Calibración y Certificación",
    desc: "Calibración de equipos de medición con documentación técnica para cumplimiento de normativas.",
    waMsg: "Hola%2C%20quiero%20consultar%20por%20calibraci%C3%B3n%20de%20equipos%20m%C3%A9dicos.",
  },
];

const Servicios = () => (
  <section id="servicios" aria-labelledby="servicios-title" style={{ background: "#EFF4F9", padding: "88px 20px" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>

      {/* Encabezado de sección */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <span style={{ display: "inline-block", background: "#8B0000", color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", padding: "4px 14px", borderRadius: 3, marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
          Nuestros Servicios
        </span>
        {/* EDITAR: Título y descripción de la sección */}
        <h2 id="servicios-title" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#1B2B3B", marginBottom: 16, lineHeight: 1.2 }}>
          Todo lo que necesitás para tus equipos médicos
        </h2>
        <p style={{ color: "#5A7A96", fontSize: 16, maxWidth: 540, margin: "0 auto", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, fontWeight: 400 }}>
          Soluciones técnicas integrales para el sector salud, con respaldo profesional y compromiso en cada intervención.
        </p>
      </div>

      {/* Grid de cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
        {SERVICIOS.map((s, i) => (
          <div
            key={i}
            style={{ background: "#fff", borderRadius: 8, padding: "28px 24px", border: "1px solid #D6E4F0", transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(0,0,0,0.08)"; e.currentTarget.style.borderColor = "#c0392b"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#D6E4F0"; }}
          >
            {/* Ícono monocromático con fondo suave */}
            <div style={{ width: 44, height: 44, background: "rgba(139,0,0,0.07)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, color: "#8B0000" }}>
              <s.Icon size={22} />
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: "#1B2B3B", marginBottom: 10, lineHeight: 1.3 }}>
              {s.titulo}
            </h3>
            <p style={{ color: "#5A7A96", fontSize: 14, lineHeight: 1.75, marginBottom: 20, fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
              {s.desc}
            </p>
            <a
              href={`https://wa.me/${CONFIG.whatsapp1}?text=${s.waMsg}`}
              target="_blank" rel="noopener noreferrer"
              aria-label={`Consultar por ${s.titulo} vía WhatsApp`}
              style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#8B0000", fontSize: 13, fontWeight: 600, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", borderBottom: "1px solid transparent", transition: "border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#8B0000"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "transparent"}
            >
              Consultar <IconArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Servicios;
