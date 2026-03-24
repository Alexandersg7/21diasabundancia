/**
 * DESIGN: Misticismo Oscuro Dorado
 * - Dark navy/black backgrounds with luminous gold accents
 * - Playfair Display for headings, Raleway for body
 * - Dramatic contrast evoking transformation from darkness to light
 */

import { useEffect, useState } from "react";
import { Star, ChevronDown, Sparkles, BookOpen, CheckCircle, Quote, MessageCircle } from "lucide-react";

const BOOK_COVER_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663459260005/i3pacaACbyJ63uYD3dWkMR/ChatGPTImage15feb2026,13_50_53_d0be71eb.png";
const HERO_BG_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663459260005/i3pacaACbyJ63uYD3dWkMR/hero_bg_24f2a5bf.jpg";

// ─── Particles ────────────────────────────────────────────────────────────────
function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 6,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
            background: "radial-gradient(circle, #FFD700, #C9A227)",
            animation: `float-particle ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Scroll Reveal ─────────────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(9,9,15,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,162,39,0.2)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-black"
            style={{ background: "linear-gradient(135deg,#B8860B,#FFD700)" }}
          >
            21
          </div>
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#C9A227", fontFamily: "'Raleway',sans-serif" }}
          >
            Abundancia Consciente
          </span>
        </div>
        <a
          href="#obtener"
          className="btn-gold px-5 py-2 rounded text-xs font-bold tracking-widest uppercase"
        >
          Obtener el Libro
        </a>
      </div>
    </nav>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg,#0A0A0F 0%,#0D1B2A 50%,#0A0A0F 100%)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${HERO_BG_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.22,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center,rgba(13,27,42,0.3) 0%,rgba(10,10,15,0.88) 70%)",
        }}
      />
      <Particles />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                border: "1px solid rgba(201,162,39,0.4)",
                background: "rgba(201,162,39,0.08)",
              }}
            >
              <Sparkles className="w-4 h-4" style={{ color: "#C9A227" }} />
              <span
                className="text-xs tracking-widest uppercase font-semibold"
                style={{ color: "#C9A227", fontFamily: "'Raleway',sans-serif" }}
              >
                Programa de Transformación Personal
              </span>
            </div>

            <h1
              className="font-black leading-tight mb-6"
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(2.8rem,6vw,4.5rem)",
              }}
            >
              <span className="text-gold-gradient">21 Días</span>
              <br />
              <span className="text-white">de Abundancia</span>
              <br />
              <span
                className="italic font-light"
                style={{ color: "rgba(201,162,39,0.85)" }}
              >
                Consciente
              </span>
            </h1>

            <p
              className="mb-4 font-light tracking-wide italic"
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                color: "rgba(245,240,232,0.7)",
                fontSize: "1.2rem",
              }}
            >
              Reprograma tu Mente, Reprograma tu Realidad
            </p>

            <div className="divider-gold my-6 max-w-xs mx-auto lg:mx-0" />

            <p
              className="leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
              style={{
                color: "rgba(245,240,232,0.68)",
                fontFamily: "'Raleway',sans-serif",
                fontWeight: 300,
                lineHeight: "1.9",
                fontSize: "1rem",
              }}
            >
              Este libro no te promete abundancia.{" "}
              <strong style={{ color: "#C9A227", fontWeight: 600 }}>
                Te enseña a dejar de bloquearla.
              </strong>{" "}
              Un proceso claro, progresivo y honesto para transformar tu relación
              interna con la prosperidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://pay.hotmart.com/P104308237I?checkoutMode=10"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-8 py-4 rounded text-sm font-bold tracking-widest uppercase animate-pulse-glow"
              >
                Comenzar mi Transformación
              </a>
              <a
                href="#metodo"
                className="px-8 py-4 rounded text-sm font-semibold tracking-wider uppercase transition-all duration-300"
                style={{
                  border: "1px solid rgba(201,162,39,0.4)",
                  color: "#C9A227",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "rgba(201,162,39,0.1)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "transparent")
                }
              >
                Conocer el Método
              </a>
            </div>

            <div className="flex items-center gap-2 mt-8 justify-center lg:justify-start">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                    style={{ color: "#C9A227" }}
                  />
                ))}
              </div>
              <span
                className="text-sm"
                style={{ color: "rgba(245,240,232,0.55)" }}
              >
                Más de 500 lectores transformados
              </span>
            </div>
          </div>

          {/* Book Cover */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse,rgba(201,162,39,0.35) 0%,transparent 70%)",
                  transform: "scale(1.4)",
                  filter: "blur(35px)",
                }}
              />
              <img
                src={BOOK_COVER_URL}
                alt="21 Días de Abundancia Consciente"
                className="relative z-10 animate-float"
                style={{
                  maxWidth: "300px",
                  width: "100%",
                  filter: "drop-shadow(0 30px 60px rgba(201,162,39,0.4))",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: "rgba(201,162,39,0.45)" }}
        >
          Descubrir
        </span>
        <ChevronDown className="w-5 h-5" style={{ color: "rgba(201,162,39,0.45)" }} />
      </div>
    </section>
  );
}

// ─── Quote Banner ──────────────────────────────────────────────────────────────
function QuoteBanner() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ background: "rgba(13,27,42,0.98)" }}
    >
      <div className="divider-gold absolute top-0 left-0 right-0" />
      <div className="max-w-4xl mx-auto px-6 text-center reveal">
        <Quote
          className="w-10 h-10 mx-auto mb-6 opacity-40"
          style={{ color: "#C9A227" }}
        />
        <blockquote
          className="text-2xl md:text-3xl font-light italic leading-relaxed mb-6"
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            color: "rgba(245,240,232,0.88)",
          }}
        >
          La abundancia, cuando es auténtica, no genera ansiedad ni euforia
          constante. Genera{" "}
          <span style={{ color: "#C9A227" }}>calma, claridad y confianza interna.</span>
        </blockquote>
        <p
          className="text-sm tracking-widest uppercase"
          style={{ color: "rgba(201,162,39,0.6)" }}
        >
          — Del Prólogo del Libro
        </p>
      </div>
      <div className="divider-gold absolute bottom-0 left-0 right-0" />
    </section>
  );
}

// ─── For Whom ──────────────────────────────────────────────────────────────────
function ForWhomSection() {
  const items = [
    {
      icon: "✦",
      text: "Personas cansadas de luchar y exigirse constantemente sin ver resultados duraderos.",
    },
    {
      icon: "✦",
      text: "Quienes se sienten culpables por desear más prosperidad en su vida.",
    },
    {
      icon: "✦",
      text: "Personas que se autosabotean justo cuando las cosas empiezan a fluir.",
    },
    {
      icon: "✦",
      text: "Quienes intuyen que el verdadero cambio ocurre cuando la conciencia se expande.",
    },
  ];

  return (
    <section
      className="py-24 relative"
      style={{ background: "linear-gradient(180deg,#0A0A0F 0%,#0D1B2A 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span
              className="text-xs tracking-widest uppercase font-semibold mb-4 block"
              style={{ color: "#C9A227" }}
            >
              ¿Para quién es este libro?
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display',serif", color: "#F5F0E8" }}
            >
              Este libro fue creado{" "}
              <span className="text-gold-gradient italic">para ti</span>
            </h2>
            <p
              className="leading-relaxed mb-8"
              style={{
                color: "rgba(245,240,232,0.65)",
                fontFamily: "'Raleway',sans-serif",
                fontWeight: 300,
                lineHeight: "1.9",
              }}
            >
              Si llegaste hasta aquí, probablemente no sea por casualidad. Lo más
              probable es que ya hayas leído, escuchado o intentado lo suficiente
              y aun así, algo no termina de encajar.
            </p>
            <div className="space-y-4">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span
                    className="text-lg mt-0.5 flex-shrink-0"
                    style={{ color: "#C9A227" }}
                  >
                    {item.icon}
                  </span>
                  <p
                    style={{
                      color: "rgba(245,240,232,0.72)",
                      fontFamily: "'Raleway',sans-serif",
                      fontWeight: 300,
                      lineHeight: "1.7",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: "0.2s" }}>
            <div
              className="p-8 rounded-lg relative overflow-hidden"
              style={{
                background: "rgba(13,27,42,0.8)",
                border: "1px solid rgba(201,162,39,0.25)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle,rgba(201,162,39,0.15) 0%,transparent 70%)",
                  transform: "translate(30%,-30%)",
                }}
              />
              <BookOpen
                className="w-10 h-10 mb-6"
                style={{ color: "#C9A227" }}
              />
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: "'Playfair Display',serif",
                  color: "#F5F0E8",
                }}
              >
                No es un libro para leer.
                <br />
                <span className="text-gold-gradient italic">
                  Es un libro para habitar.
                </span>
              </h3>
              <p
                className="leading-relaxed"
                style={{
                  color: "rgba(245,240,232,0.65)",
                  fontFamily: "'Raleway',sans-serif",
                  fontWeight: 300,
                  lineHeight: "1.9",
                }}
              >
                Cada semana, cada ejercicio y cada reflexión están diseñados para
                acompañarte paso a paso, respetando tu ritmo, sin imponer
                resultados ni crear expectativas irreales.
              </p>
              <div className="divider-gold my-6" />
              <p
                className="text-sm italic"
                style={{
                  color: "rgba(201,162,39,0.8)",
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "1rem",
                }}
              >
                "No necesitas estar listo. Solo necesitas estar dispuesto a mirar
                de otra manera."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Method Section ────────────────────────────────────────────────────────────
function MethodSection() {
  const pillars = [
    {
      number: "01",
      title: "Conciencia",
      subtitle: "Ver lo que antes era automático",
      description:
        "Identificarás creencias heredadas, emociones no resueltas y patrones internos que influyen en tu relación con la abundancia sin que lo notes. Esta etapa hace visible lo invisible.",
      icon: "◎",
      week: "Semana 1 · Días 1–7",
    },
    {
      number: "02",
      title: "Entrenamiento",
      subtitle: "Practicar una nueva forma de vivir",
      description:
        "Entrenarás una nueva manera de pensar, sentir y actuar de forma coherente con la abundancia. Pequeñas acciones conscientes, ajustes en el lenguaje y en la forma de dar y recibir.",
      icon: "◈",
      week: "Semana 2 · Días 8–14",
    },
    {
      number: "03",
      title: "Integración",
      subtitle: "Sostener sin esfuerzo ni autosabotaje",
      description:
        "Integrarás lo aprendido a nivel corporal, emocional y mental, para que no dependa de estados de ánimo ni de motivación momentánea. La abundancia como base sólida.",
      icon: "◉",
      week: "Semana 3 · Días 15–21",
    },
  ];

  return (
    <section
      id="metodo"
      className="py-24 relative overflow-hidden"
      style={{ background: "#0A0A0F" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%,rgba(201,162,39,0.08) 0%,transparent 60%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <span
            className="text-xs tracking-widest uppercase font-semibold mb-4 block"
            style={{ color: "#C9A227" }}
          >
            El Método
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display',serif", color: "#F5F0E8" }}
          >
            Un proceso en{" "}
            <span className="text-gold-gradient italic">3 pilares</span>
          </h2>
          <p
            className="max-w-2xl mx-auto leading-relaxed"
            style={{
              color: "rgba(245,240,232,0.6)",
              fontFamily: "'Raleway',sans-serif",
              fontWeight: 300,
              lineHeight: "1.9",
            }}
          >
            A diferencia de otros enfoques que se centran exclusivamente en el
            pensamiento positivo o en la acción constante, este método propone un
            proceso progresivo y realista que trabaja en tres niveles
            fundamentales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="card-dark p-8 rounded-lg reveal"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  className="text-4xl font-black"
                  style={{ color: "rgba(201,162,39,0.2)", fontFamily: "'Playfair Display',serif" }}
                >
                  {p.number}
                </span>
                <span className="text-2xl" style={{ color: "#C9A227" }}>
                  {p.icon}
                </span>
              </div>
              <span
                className="text-xs tracking-widest uppercase font-semibold block mb-2"
                style={{ color: "rgba(201,162,39,0.7)" }}
              >
                {p.week}
              </span>
              <h3
                className="text-2xl font-bold mb-2"
                style={{
                  fontFamily: "'Playfair Display',serif",
                  color: "#F5F0E8",
                }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm italic mb-4"
                style={{
                  color: "#C9A227",
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "1rem",
                }}
              >
                {p.subtitle}
              </p>
              <div className="divider-gold mb-4" />
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "rgba(245,240,232,0.62)",
                  fontFamily: "'Raleway',sans-serif",
                  fontWeight: 300,
                  lineHeight: "1.8",
                }}
              >
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 21 Days Section ───────────────────────────────────────────────────────────
function DaysSection() {
  const weeks = [
    {
      week: "Semana 1",
      theme: "Conciencia y Despertar",
      color: "rgba(201,162,39,0.15)",
      days: [
        { day: 1, title: "Declaración de Intención Consciente" },
        { day: 2, title: "Mapa de Creencias sobre el Dinero" },
        { day: 3, title: "Herencia Emocional y Financiera" },
        { day: 4, title: "El Cuerpo y la Abundancia" },
        { day: 5, title: "Identidad y Merecimiento" },
        { day: 6, title: "La Emoción de la Escasez" },
        { day: 7, title: "Recapitulación — Semana 1" },
      ],
    },
    {
      week: "Semana 2",
      theme: "Entrenamiento y Práctica",
      color: "rgba(201,162,39,0.1)",
      days: [
        { day: 8, title: "Reprogramación de Creencias Limitantes" },
        { day: 9, title: "Lenguaje Abundante y Consciente" },
        { day: 10, title: "Orden Externo y Coherencia Material" },
        { day: 11, title: "Dar Conscientemente" },
        { day: 12, title: "Recepción Consciente" },
        { day: 13, title: "Acción Inspirada" },
        { day: 14, title: "Recapitulación — Semana 2" },
      ],
    },
    {
      week: "Semana 3",
      theme: "Integración y Continuidad",
      color: "rgba(201,162,39,0.08)",
      days: [
        { day: 15, title: "Sanación del Pasado Financiero" },
        { day: 16, title: "Confianza y Entrega Consciente" },
        { day: 17, title: "Reconciliación con la Historia Personal" },
        { day: 18, title: "Gratitud Expansiva" },
        { day: 19, title: "Integración Cuerpo, Mente y Emoción" },
        { day: 20, title: "Visión Consciente a Largo Plazo" },
        { day: 21, title: "Cierre, Anclaje y Continuidad" },
      ],
    },
  ];

  return (
    <section
      className="py-24 relative"
      style={{ background: "linear-gradient(180deg,#0D1B2A 0%,#0A0A0F 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span
            className="text-xs tracking-widest uppercase font-semibold mb-4 block"
            style={{ color: "#C9A227" }}
          >
            El Programa
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display',serif", color: "#F5F0E8" }}
          >
            21 días de{" "}
            <span className="text-gold-gradient italic">transformación</span>
          </h2>
          <p
            className="max-w-2xl mx-auto leading-relaxed"
            style={{
              color: "rgba(245,240,232,0.6)",
              fontFamily: "'Raleway',sans-serif",
              fontWeight: 300,
              lineHeight: "1.9",
            }}
          >
            Cada día incluye: Enfoque del día, El Concepto, Ejercicio Práctico,
            Integración Escrita, Cierre Energético y una Reflexión final.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {weeks.map((w, wi) => (
            <div
              key={wi}
              className="reveal"
              style={{ animationDelay: `${wi * 0.15}s` }}
            >
              <div
                className="p-6 rounded-lg h-full"
                style={{
                  background: w.color,
                  border: "1px solid rgba(201,162,39,0.2)",
                }}
              >
                <div className="mb-6">
                  <span
                    className="text-xs tracking-widest uppercase font-bold block mb-1"
                    style={{ color: "#C9A227" }}
                  >
                    {w.week}
                  </span>
                  <h3
                    className="text-xl font-bold"
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      color: "#F5F0E8",
                    }}
                  >
                    {w.theme}
                  </h3>
                </div>
                <div className="divider-gold mb-6" />
                <div className="space-y-3">
                  {w.days.map((d) => (
                    <div key={d.day} className="flex items-start gap-3">
                      <span
                        className="text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: "rgba(201,162,39,0.15)",
                          color: "#C9A227",
                          border: "1px solid rgba(201,162,39,0.3)",
                        }}
                      >
                        {d.day}
                      </span>
                      <span
                        className="text-sm leading-relaxed"
                        style={{
                          color: "rgba(245,240,232,0.72)",
                          fontFamily: "'Raleway',sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {d.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── What You Get ──────────────────────────────────────────────────────────────
function WhatYouGetSection() {
  const features = [
    "21 ejercicios prácticos y guiados, uno por día",
    "Reflexiones profundas al cierre de cada jornada",
    "Cierres energéticos para integrar cada aprendizaje",
    "Preguntas de integración escrita para tu cuaderno personal",
    "Reprogramación de creencias limitantes paso a paso",
    "Técnicas de observación consciente sin juicio",
    "Herramientas para sostener la abundancia a largo plazo",
    "Un método progresivo que respeta tu ritmo y proceso",
  ];

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#0A0A0F" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%,rgba(201,162,39,0.06) 0%,transparent 60%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span
              className="text-xs tracking-widest uppercase font-semibold mb-4 block"
              style={{ color: "#C9A227" }}
            >
              Contenido del Libro
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display',serif", color: "#F5F0E8" }}
            >
              Todo lo que{" "}
              <span className="text-gold-gradient italic">encontrarás</span>
              <br />
              en estas páginas
            </h2>
            <p
              className="leading-relaxed mb-8"
              style={{
                color: "rgba(245,240,232,0.62)",
                fontFamily: "'Raleway',sans-serif",
                fontWeight: 300,
                lineHeight: "1.9",
              }}
            >
              No encontrarás fórmulas rápidas ni frases motivacionales diseñadas
              para durar unos minutos. Lo que vas a encontrar es un proceso
              honesto que te llevará a observar, entrenar e integrar una nueva
              forma de vivir la abundancia.
            </p>
          </div>

          <div className="reveal" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: "#C9A227" }}
                  />
                  <span
                    style={{
                      color: "rgba(245,240,232,0.75)",
                      fontFamily: "'Raleway',sans-serif",
                      fontWeight: 300,
                      lineHeight: "1.7",
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const testimonials = [
    {
      name: "María L.",
      role: "Emprendedora",
      text: "Este libro me ayudó a entender que mis bloqueos con el dinero venían de creencias heredadas. En 21 días noté cambios reales en cómo me relaciono con la abundancia.",
      stars: 5,
    },
    {
      name: "Carlos R.",
      role: "Coach de vida",
      text: "Lo que más me sorprendió fue la profundidad de cada ejercicio. No es un libro de autoayuda superficial. Es un proceso genuino de transformación interior.",
      stars: 5,
    },
    {
      name: "Ana P.",
      role: "Terapeuta",
      text: "Recomiendo este libro a todos mis clientes. La estructura de 3 semanas es perfecta: primero observas, luego practicas y finalmente integras. Muy bien pensado.",
      stars: 5,
    },
  ];

  return (
    <section
      className="py-24 relative"
      style={{ background: "linear-gradient(180deg,#0A0A0F 0%,#0D1B2A 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span
            className="text-xs tracking-widest uppercase font-semibold mb-4 block"
            style={{ color: "#C9A227" }}
          >
            Testimonios
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display',serif", color: "#F5F0E8" }}
          >
            Lo que dicen quienes ya{" "}
            <span className="text-gold-gradient italic">lo vivieron</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-dark p-8 rounded-lg reveal"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex mb-4">
                {[...Array(t.stars)].map((_, s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 fill-current"
                    style={{ color: "#C9A227" }}
                  />
                ))}
              </div>
              <p
                className="leading-relaxed mb-6 italic"
                style={{
                  color: "rgba(245,240,232,0.72)",
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                }}
              >
                "{t.text}"
              </p>
              <div className="divider-gold mb-4" />
              <div>
                <p
                  className="font-semibold"
                  style={{ color: "#F5F0E8", fontFamily: "'Raleway',sans-serif" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-sm"
                  style={{ color: "rgba(201,162,39,0.7)" }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Reflection Quotes ─────────────────────────────────────────────────────────
function ReflectionsSection() {
  const quotes = [
    "La intención es una orden energética. Cuando se formula con presencia, abre caminos invisibles.",
    "Cuando tu palabra se alinea con tu intención, tu mente deja de resistirse y tu realidad comienza a reorganizarse.",
    "La verdadera abundancia no se persigue: se construye cuando aprendes a habitarte con claridad y presencia.",
    "Cuando sabes hacia dónde vas, la abundancia deja de ser azar y se convierte en dirección.",
  ];

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "#0A0A0F" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%,rgba(201,162,39,0.07) 0%,transparent 60%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 reveal">
          <span
            className="text-xs tracking-widest uppercase font-semibold"
            style={{ color: "#C9A227" }}
          >
            Reflexiones del Libro
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="p-6 rounded-lg reveal"
              style={{
                background: "rgba(13,27,42,0.6)",
                border: "1px solid rgba(201,162,39,0.15)",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <Quote
                className="w-6 h-6 mb-4 opacity-40"
                style={{ color: "#C9A227" }}
              />
              <p
                className="italic leading-relaxed"
                style={{
                  color: "rgba(245,240,232,0.78)",
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                }}
              >
                {q}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ───────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section
      id="obtener"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,#0D1B2A 0%,#0A0A0F 50%,#0D1B2A 100%)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center,rgba(201,162,39,0.12) 0%,transparent 65%)",
        }}
      />
      <Particles />
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10 reveal">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow"
          style={{ background: "linear-gradient(135deg,#B8860B,#FFD700)" }}
        >
          <span
            className="text-2xl font-black text-black"
            style={{ fontFamily: "'Playfair Display',serif" }}
          >
            21
          </span>
        </div>

        <h2
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display',serif", color: "#F5F0E8" }}
        >
          Comienza tu proceso{" "}
          <span className="text-gold-gradient italic">hoy</span>
        </h2>

        <p
          className="text-lg leading-relaxed mb-4"
          style={{
            color: "rgba(245,240,232,0.65)",
            fontFamily: "'Raleway',sans-serif",
            fontWeight: 300,
            lineHeight: "1.9",
          }}
        >
          No necesitas estar listo. Solo necesitas estar dispuesto a mirar de
          otra manera.
        </p>

        <p
          className="italic mb-10"
          style={{
            color: "rgba(201,162,39,0.8)",
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "1.15rem",
          }}
        >
          "No para cambiar quién eres, sino para liberar lo que siempre estuvo disponible en ti."
        </p>

          <div
            className="p-8 rounded-lg mb-10"
            style={{
              background: "rgba(13,27,42,0.8)",
              border: "1px solid rgba(201,162,39,0.3)",
            }}
          >
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="text-center">
                <p
                  className="text-sm line-through mb-2"
                  style={{ color: "rgba(245,240,232,0.4)" }}
                >
                  Precio original
                </p>
                <p
                  className="text-3xl font-black"
                  style={{ color: "rgba(245,240,232,0.5)" }}
                >
                  $25.00
                </p>
              </div>
              <div
                className="text-2xl font-bold"
                style={{ color: "#C9A227" }}
              >
                →
              </div>
              <div className="text-center">
                <p
                  className="text-sm font-bold mb-2 px-3 py-1 rounded-full inline-block"
                  style={{
                    background: "rgba(201,162,39,0.2)",
                    color: "#FFD700",
                  }}
                >
                  40% OFF
                </p>
                <p
                  className="text-5xl font-black text-gold-gradient"
                  style={{ fontFamily: "'Playfair Display',serif" }}
                >
                  $15.00
                </p>
              </div>
            </div>
            <p
              className="text-xs text-center mb-6"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              Libro digital (PDF)
            </p>

          <div className="space-y-3 mb-8 text-left max-w-sm mx-auto">
            {[
              "42 páginas de contenido transformador",
              "21 ejercicios prácticos guiados",
              "Acceso inmediato tras la compra",
              "Diseñado para la transformación personal",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#C9A227" }}
                />
                <span
                  className="text-sm"
                  style={{
                    color: "rgba(245,240,232,0.72)",
                    fontFamily: "'Raleway',sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <a
            href="https://pay.hotmart.com/P104308237I?checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full py-4 rounded text-sm font-bold tracking-widest uppercase animate-pulse-glow block text-center"
          >
            Obtener el Libro Ahora
          </a>
          <p
            className="text-xs mt-6 mb-6 text-center leading-relaxed"
            style={{ color: "rgba(245,240,232,0.7)" }}
          >
            Pago seguro a través de la plataforma Hotmart. Disfruta de una garantía de satisfacción de 7 días: si el producto no cumple con tus expectativas, puedes solicitar la devolución de tu dinero de forma rápida y sencilla.
          </p>
          
          <div className="flex justify-center gap-3 mb-6 flex-wrap">
            <a
              href="https://wa.me/56932622560?text=Hola%2C%20tengo%20una%20consulta%20sobre%20el%20libro%2021%20D%C3%ADas%20de%20Abundancia%20Consciente"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded transition-all duration-300"
              style={{
                background: "rgba(37, 211, 102, 0.15)",
                border: "1px solid rgba(37, 211, 102, 0.4)",
                color: "#25D366",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(37, 211, 102, 0.25)";
                e.currentTarget.style.boxShadow = "0 0 15px rgba(37, 211, 102, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(37, 211, 102, 0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663459260005/i3pacaACbyJ63uYD3dWkMR/—Pngtree—whatsappmobileappiconvector_8704828_03e5b674.png"
                alt="WhatsApp"
                className="w-6 h-6"
              />
              <span className="text-sm font-semibold">
                +56 9 3262 2560
              </span>
            </a>
            <a
              href="https://wa.me/56939458973?text=Hola%2C%20tengo%20una%20consulta%20sobre%20el%20libro%2021%20D%C3%ADas%20de%20Abundancia%20Consciente"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded transition-all duration-300"
              style={{
                background: "rgba(37, 211, 102, 0.15)",
                border: "1px solid rgba(37, 211, 102, 0.4)",
                color: "#25D366",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(37, 211, 102, 0.25)";
                e.currentTarget.style.boxShadow = "0 0 15px rgba(37, 211, 102, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(37, 211, 102, 0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663459260005/i3pacaACbyJ63uYD3dWkMR/—Pngtree—whatsappmobileappiconvector_8704828_03e5b674.png"
                alt="WhatsApp"
                className="w-6 h-6"
              />
              <span className="text-sm font-semibold">
                +56 9 3945 8973
              </span>
            </a>
          </div>
          
          <p
            className="text-xs"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            Pago seguro · Acceso inmediato
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="py-12 relative"
      style={{ background: "#060609" }}
    >
      <div className="divider-gold absolute top-0 left-0 right-0" />
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-black"
            style={{ background: "linear-gradient(135deg,#B8860B,#FFD700)" }}
          >
            21
          </div>
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: "#C9A227", fontFamily: "'Raleway',sans-serif" }}
          >
            Abundancia Consciente
          </span>
        </div>
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.instagram.com/gotas_drocio?igsh=aDU0cWdmazNwbHNl"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110"
            style={{ color: "#C9A227" }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
            </svg>
          </a>
          <a
            href="https://youtube.com/@inmersiondelser?si=hjuT36ORqei1Wd4H"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110"
            style={{ color: "#C9A227" }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
        <p
          className="text-sm italic mb-6"
          style={{
            color: "rgba(201,162,39,0.6)",
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "1rem",
          }}
        >
          "Sostengo la abundancia desde la conciencia, el equilibrio y la coherencia."
        </p>
        <p
          className="text-xs"
          style={{ color: "rgba(245,240,232,0.3)" }}
        >
          © {new Date().getFullYear()} 21 Días de Abundancia Consciente. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen" style={{ background: "#0A0A0F" }}>
      <Navbar />
      <HeroSection />
      <QuoteBanner />
      <ForWhomSection />
      <MethodSection />
      <DaysSection />
      <WhatYouGetSection />
      <TestimonialsSection />
      <ReflectionsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
