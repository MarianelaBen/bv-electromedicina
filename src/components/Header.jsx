import { useState, useEffect } from "react";
import CONFIG from "../data/config";
import { WhatsAppIcon } from "../icons/icons";

const Header = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // EDITAR: Links de navegación
  const navLinks = [
    { href: "#inicio",    label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#por-que",   label: "¿Por qué elegirnos?" },
    { href: "#proceso",   label: "Proceso" },
    { href: "#contacto",  label: "Contacto" },
  ];

  return (
    <header
      role="banner"
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.10)" : "0 1px 0 #D0E3F0",
        transition: "box-shadow 0.3s",
        borderBottom: "3px solid #8B0000",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>

        {/* EDITAR: Logo — reemplazá el bloque interior con <img src="logo.png" alt="B&V Electromedicina" height="40" /> */}
        <a href="#inicio" aria-label="B&V Electromedicina - Inicio" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 42, height: 42, background: "#1B2B3B", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ color: "#ffffff", fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 13 }}>B&V</span>
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 15, color: "#1B2B3B", lineHeight: 1.1 }}>B&V Electromedicina</div>
            <div style={{ fontSize: 10, color: "#6A8AA6", letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>Servicio Técnico Médico</div>
          </div>
        </a>


        {/* Nav desktop */}
        <nav aria-label="Navegación principal" style={{ display: "flex", gap: 4, alignItems: "center" }} className="nav-desktop">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              style={{
                padding: "6px 12px", fontSize: 13,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: activeSection === link.href.slice(1) ? 700 : 500,
                color: activeSection === link.href.slice(1) ? "#8B0000" : "#444",
                textDecoration: "none",
                borderBottom: activeSection === link.href.slice(1) ? "2px solid #8B0000" : "2px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
              }}>
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${CONFIG.whatsapp1}?text=${CONFIG.contactoMsg}`}
            target="_blank" rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            style={{ marginLeft: 8, background: "#25D366", color: "#fff", padding: "7px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 6, fontFamily: "'DM Sans', sans-serif", transition: "background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "#1ebe57"}
            onMouseLeave={e => e.currentTarget.style.background = "#25D366"}
          >
            <WhatsAppIcon size={15} /> WhatsApp
          </a>
        </nav>

        {/* Botón hamburger (mobile) */}
        <button
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8, flexDirection: "column", gap: 5 }}
        >
          <span style={{ display: "block", width: 24, height: 2, background: "#1B2B3B", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span style={{ display: "block", width: 24, height: 2, background: "#1B2B3B", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: 24, height: 2, background: "#1B2B3B", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </div>

      {/* Menú mobile desplegable */}
      {menuOpen && (
        <nav aria-label="Menú móvil" style={{ background: "#fff", borderTop: "1px solid #EDF4FB", padding: "12px 20px 20px" }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "12px 0", fontSize: 15, fontWeight: 500, color: "#1B2B3B", textDecoration: "none", borderBottom: "1px solid #EDF2F8", fontFamily: "'DM Sans', sans-serif" }}>
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${CONFIG.whatsapp1}?text=${CONFIG.contactoMsg}`}
            target="_blank" rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16, background: "#25D366", color: "#fff", padding: "12px 20px", borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: "none", justifyContent: "center", fontFamily: "'DM Sans', sans-serif" }}
          >
            <WhatsAppIcon size={20} /> Contactar por WhatsApp
          </a>
        </nav>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop  { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
