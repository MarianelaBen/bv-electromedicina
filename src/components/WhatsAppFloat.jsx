import CONFIG from "../data/config";
import { WhatsAppIcon } from "../icons/icons";

// Botón flotante fijo en la esquina inferior derecha
// Visible en mobile y desktop, abre WhatsApp con mensaje prellenado
const WhatsAppFloat = () => (
  <a
    href={`https://wa.me/${CONFIG.whatsapp1}?text=${CONFIG.contactoMsg}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    style={{
      position: "fixed", bottom: 24, right: 24, zIndex: 2000,
      width: 56, height: 56, background: "#25D366",
      borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 4px 18px rgba(37,211,102,0.45)",
      transition: "transform 0.2s, box-shadow 0.2s",
      textDecoration: "none",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "scale(1.1)";
      e.currentTarget.style.boxShadow = "0 8px 28px rgba(37,211,102,0.6)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 4px 18px rgba(37,211,102,0.45)";
    }}
  >
    <WhatsAppIcon size={30} />
    {/* EDITAR: Podés cambiar o quitar esta etiqueta "Chat" */}
    <span style={{
      position: "absolute", top: -7, right: -7,
      background: "#8B0000", color: "#fff",
      fontSize: 9, fontWeight: 700, borderRadius: 8,
      padding: "2px 6px", fontFamily: "'DM Sans', sans-serif",
      letterSpacing: 0.5,
    }}>
      Chat
    </span>
  </a>
);

export default WhatsAppFloat;
