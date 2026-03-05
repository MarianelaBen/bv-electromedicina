import { useState, useEffect } from "react";

import "./styles/global.css";

import Header       from "./components/Header";
import Hero         from "./components/Hero";
import Servicios    from "./components/Servicios";
import PorQue       from "./components/PorQue";
import Proceso      from "./components/Proceso";
import Contacto     from "./components/Contacto";
import Footer       from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    // SEO: title y meta description
    document.title = "B&V Electromedicina · Reparación y Mantenimiento de Equipos Médicos";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Servicio técnico de equipos médicos en Argentina. Mantenimiento preventivo, reparación correctiva, diagnóstico e insumos médicos. Contacto por WhatsApp.");
    }

    // Detectar sección activa al hacer scroll (para el highlight del menú)
    const sections = ["inicio", "servicios", "por-que", "proceso", "contacto"];
    const handleScroll = () => {
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header activeSection={activeSection} />
      <main id="main-content">
        <Hero />
        <Servicios />
        <PorQue />
        <Proceso />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
