import { useState } from "react";
import CONFIG from "../data/config";
import { WhatsAppIcon, IconMail, IconPhone, IconCheckCircle } from "../icons/icons";

const Contacto = () => {
  const [form, setForm] = useState({ nombre: "", telefono: "", equipo: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // EDITAR: Para recibir por email en lugar de WhatsApp,
    // reemplazá esta función con una llamada a Formspree o EmailJS.
    // Ejemplo Formspree: fetch("https://formspree.io/f/TU_ID", { method:"POST", body: JSON.stringify(form) })
    const msg =
      `Hola%2C%20me%20contacto%20desde%20el%20sitio%20web.%0A` +
      `Nombre%3A%20${encodeURIComponent(form.nombre)}%0A` +
      `Tel%C3%A9fono%3A%20${encodeURIComponent(form.telefono)}%0A` +
      `Equipo%2FMarca%3A%20${encodeURIComponent(form.equipo)}%0A` +
      `Mensaje%3A%20${encodeURIComponent(form.mensaje)}`;
    window.open(`https://wa.me/${CONFIG.whatsapp1}?text=${msg}`, "_blank", "noopener,noreferrer");
    setEnviado(true);
  };

  const inputBase = {
    width: "100%", padding: "10px 14px",
    border: "1px solid #C8DDEF", borderRadius: 6,
    fontSize: 14, fontFamily: "'DM Sans', sans-serif",
    outline: "none", transition: "border-color 0.2s",
    boxSizing: "border-box", color: "#1B2B3B",
    background: "#F7FAFD", fontWeight: 400,
  };

  const labelBase = {
    display: "block", fontSize: 13, fontWeight: 600,
    color: "#3D5166", marginBottom: 6, fontFamily: "'DM Sans', sans-serif",
  };

  return (
    <section id="contacto" aria-labelledby="contacto-title" style={{ background: "#EFF4F9", padding: "88px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Encabezado */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ display: "inline-block", background: "#8B0000", color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", padding: "4px 14px", borderRadius: 3, marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
            Contacto
          </span>
          {/* EDITAR: Título y descripción */}
          <h2 id="contacto-title" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#1B2B3B", marginBottom: 16, lineHeight: 1.2 }}>
            Ponete en contacto con nosotros
          </h2>
          <p style={{ color: "#5A7A96", fontSize: 16, maxWidth: 480, margin: "0 auto", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, fontWeight: 400 }}>
            La forma más directa es por WhatsApp, pero también podés dejarnos tu consulta acá.
          </p>
        </div>

        <div className="contacto-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>

          {/* ── Columna izquierda: info de contacto + QR ── */}
          <div>
            <div style={{ background: "#fff", borderRadius: 8, padding: "28px", border: "1px solid #D6E4F0", marginBottom: 16 }}>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: "#1B2B3B", marginBottom: 24 }}>
                Canales de contacto
              </h3>

              {/* WhatsApp 1 */}
              <div style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#8B0000", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 7, fontFamily: "'DM Sans', sans-serif" }}>WhatsApp Principal</div>
                <a
                  href={`https://wa.me/${CONFIG.whatsapp1}?text=${CONFIG.contactoMsg}`}
                  target="_blank" rel="noopener noreferrer"
                  aria-label={`Abrir WhatsApp ${CONFIG.whatsapp1_display}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#25D366", color: "#fff", padding: "9px 16px", borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", transition: "background 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#1ebe57"}
                  onMouseLeave={e => e.currentTarget.style.background = "#25D366"}
                >
                  <WhatsAppIcon size={18} />
                  {/* EDITAR: Número 1 */}
                  {CONFIG.whatsapp1_display}
                </a>
              </div>

              {/* WhatsApp 2 */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#8B0000", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 7, fontFamily: "'DM Sans', sans-serif" }}>WhatsApp Alternativo</div>
                <a
                  href={`https://wa.me/${CONFIG.whatsapp2}?text=${CONFIG.contactoMsg}`}
                  target="_blank" rel="noopener noreferrer"
                  aria-label={`Abrir WhatsApp ${CONFIG.whatsapp2_display}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#25D366", color: "#fff", padding: "9px 16px", borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", transition: "background 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#1ebe57"}
                  onMouseLeave={e => e.currentTarget.style.background = "#25D366"}
                >
                  <WhatsAppIcon size={18} />
                  {/* EDITAR: Número 2 */}
                  {CONFIG.whatsapp2_display}
                </a>
              </div>

              {/* Email */}
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#8B0000", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 7, fontFamily: "'DM Sans', sans-serif" }}>Email</div>
                <a
                  href={`mailto:${CONFIG.email}`}
                  aria-label={`Enviar email a ${CONFIG.email}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#2C4159", fontSize: 14, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#8B0000"}
                  onMouseLeave={e => e.currentTarget.style.color = "#333"}
                >
                  <span style={{ color: "#8B0000", display: "flex" }}><IconMail size={16} /></span>
                  {/* EDITAR: Email */}
                  {CONFIG.email}
                </a>
              </div>
            </div>

          </div>

          {/* ── Columna derecha: formulario ── */}
          <div style={{ background: "#fff", borderRadius: 8, padding: "28px", border: "1px solid #D6E4F0" }}>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: "#1B2B3B", marginBottom: 24 }}>
              Dejanos tu consulta
            </h3>

            {enviado ? (
              /* Estado: formulario enviado */
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{ color: "#25D366", display: "flex", justifyContent: "center", marginBottom: 16 }}>
                  <IconCheckCircle size={52} />
                </div>
                <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, color: "#1B2B3B", marginBottom: 10 }}>¡Consulta enviada!</h4>
                <p style={{ color: "#5A7A96", fontFamily: "'DM Sans', sans-serif", marginBottom: 22, fontSize: 14, lineHeight: 1.65 }}>
                  Se abrió WhatsApp con tu consulta. Te respondemos a la brevedad.
                </p>
                <button
                  onClick={() => setEnviado(false)}
                  style={{ background: "#8B0000", color: "#fff", border: "none", padding: "10px 22px", borderRadius: 6, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14 }}
                >
                  Nueva consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Campos de texto */}
                {[
                  { name: "nombre",   label: "Nombre completo",  type: "text", placeholder: "Tu nombre",                          required: true  },
                  { name: "telefono", label: "Teléfono",          type: "tel",  placeholder: "Tu número de teléfono",               required: false },
                  { name: "equipo",   label: "Equipo / Marca",    type: "text", placeholder: "Ej: Electrocardiógrafo Nihon Kohden", required: false },
                ].map(f => (
                  <div key={f.name} style={{ marginBottom: 16 }}>
                    <label htmlFor={f.name} style={labelBase}>
                      {f.label}
                      {f.required && <span style={{ color: "#8B0000" }}> *</span>}
                    </label>
                    <input
                      id={f.name} name={f.name} type={f.type}
                      placeholder={f.placeholder} required={f.required}
                      value={form[f.name]} onChange={handleChange}
                      style={inputBase}
                      onFocus={e => e.target.style.borderColor = "#8B0000"}
                      onBlur={e  => e.target.style.borderColor = "#C8DDEF"}
                    />
                  </div>
                ))}

                {/* Textarea */}
                <div style={{ marginBottom: 22 }}>
                  <label htmlFor="mensaje" style={labelBase}>
                    Mensaje <span style={{ color: "#8B0000" }}>*</span>
                  </label>
                  <textarea
                    id="mensaje" name="mensaje"
                    placeholder="Describí el problema o tu consulta..."
                    required rows={4}
                    value={form.mensaje} onChange={handleChange}
                    style={{ ...inputBase, resize: "vertical" }}
                    onFocus={e => e.target.style.borderColor = "#8B0000"}
                    onBlur={e  => e.target.style.borderColor = "#C8DDEF"}
                  />
                </div>

                <button
                  type="submit"
                  style={{ width: "100%", background: "#25D366", color: "#fff", border: "none", padding: "13px", borderRadius: 6, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 9, transition: "background 0.2s, transform 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#1ebe57"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#25D366"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <WhatsAppIcon size={19} /> Enviar por WhatsApp
                </button>
                <p style={{ fontSize: 11, color: "#AACADE", textAlign: "center", marginTop: 10, fontFamily: "'DM Sans', sans-serif" }}>
                  Al enviar se abrirá WhatsApp con tu mensaje precargado.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contacto-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contacto;
