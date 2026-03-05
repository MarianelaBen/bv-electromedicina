import CONFIG from "../data/config";
import { ECGLine, IconPhone, IconMail } from "../icons/icons";

const Footer = () => (
  <footer role="contentinfo" style={{ background: "#091520", borderTop: "3px solid #8B0000", padding: "44px 20px 24px" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>

      <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, marginBottom: 36 }}>

        {/* Columna 1: Marca */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            {/* EDITAR: Reemplazá con <img src="logo.png" alt="B&V" height="36" /> */}
            <div style={{ width: 36, height: 36, background: "#1A2E42", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#8B0000", fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 11 }}>B&V</span>
            </div>
            <span style={{ color: "#C8DFF0", fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 14 }}>B&V Electromedicina</span>
          </div>
          {/* EDITAR: Descripción corta en footer */}
          <p style={{ color: "#5A7A96", fontSize: 13, lineHeight: 1.75, fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
            Reparación, mantenimiento y provisión de insumos para equipos médicos.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div>
          <div style={{ color: "#5A7A96", fontSize: 10, fontWeight: 700, marginBottom: 14, fontFamily: "'DM Sans', sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>
            Navegación
          </div>
          {[
            ["#inicio",    "Inicio"],
            ["#servicios", "Servicios"],
            ["#proceso",   "Proceso"],
            ["#contacto",  "Contacto"],
          ].map(([href, label]) => (
            <a
              key={href} href={href}
              style={{ display: "block", color: "#4A6580", fontSize: 13, textDecoration: "none", marginBottom: 9, fontFamily: "'DM Sans', sans-serif", transition: "color 0.2s", fontWeight: 400 }}
              onMouseEnter={e => e.currentTarget.style.color = "#C8DDEF"}
              onMouseLeave={e => e.currentTarget.style.color = "#555"}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Columna 3: Contacto rápido */}
        <div>
          <div style={{ color: "#5A7A96", fontSize: 10, fontWeight: 700, marginBottom: 14, fontFamily: "'DM Sans', sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>
            Contacto Rápido
          </div>
          {[
            { href: `https://wa.me/${CONFIG.whatsapp1}?text=${CONFIG.contactoMsg}`, label: CONFIG.whatsapp1_display, Icon: IconPhone, external: true },
            { href: `https://wa.me/${CONFIG.whatsapp2}?text=${CONFIG.contactoMsg}`, label: CONFIG.whatsapp2_display, Icon: IconPhone, external: true },
            { href: `mailto:${CONFIG.email}`,                                        label: CONFIG.email,             Icon: IconMail,  external: false },
          ].map(({ href, label, Icon, external }) => (
            <a
              key={href} href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              style={{ display: "flex", alignItems: "center", gap: 7, color: "#4A6580", fontSize: 13, textDecoration: "none", marginBottom: 9, fontFamily: "'DM Sans', sans-serif", transition: "color 0.2s", fontWeight: 400 }}
              onMouseEnter={e => e.currentTarget.style.color = "#25D366"}
              onMouseLeave={e => e.currentTarget.style.color = "#555"}
            >
              <span style={{ display: "flex", flexShrink: 0 }}><Icon size={14} /></span>
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Separador ECG decorativo */}
      <div style={{ opacity: 0.18, marginBottom: 20 }}>
        <ECGLine color="#8B0000" height={28} />
      </div>

      {/* EDITAR: Año de copyright */}
      <div style={{ textAlign: "center", color: "#3D5166", fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>
        © 2025 B&V Electromedicina · Todos los derechos reservados
      </div>
    </div>

    <style>{`
      @media (max-width: 640px) {
        .footer-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </footer>
);

export default Footer;
