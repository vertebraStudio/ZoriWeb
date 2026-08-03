'use client';

import { useState, useEffect, useRef } from 'react';
import Header from "@/components/Header";
import ClinicGallery from "@/components/ClinicGallery";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MarqueeBand from "@/components/MarqueeBand";
import HomeHero from "@/components/HomeHero";
import Link from 'next/link';

const reviews = [
  {
    stars: "★★★★★",
    text: "Desde que empezamos a trabajar con Zori mi hija ha dado un cambio impresionante, tanto ella como yo hemos aprendido a escucharnos y tratarnos, Zori siempre nos aporta esa luz y esa guía que muchas veces necesitamos los padres cuando nos perdemos en la crianza de nuestros hijos. Otra cosa a destacar de ella, es la gran confianza que cogió mi hija con ella desde la primera sesión, conectaron al 100%. Las 5 estrellas se le quedan cortas para valorar lo profesional que es y su gran calidad humana.",
    author: "Patricia R."
  },
  {
    stars: "★★★★★",
    text: "Zoraida tiene una conexión increíble con los niños. Mi hijo ha mejorado muchísimo en su gestión emocional gracias a ella.",
    author: "Laura R."
  },
  {
    stars: "★★★★★",
    text: "Como adolescente, me sentí escuchado y comprendido desde el primer momento. Me ha ayudado mucho con mis problemas de instituto.",
    author: "Pablo M."
  },
  {
    stars: "★★★★★",
    text: "Buscaba una psicóloga en Granada para adultos y encontré en Zoraida la guía perfecta para superar mi ansiedad.",
    author: "Elena S."
  },
  {
    stars: "★★★★★",
    text: "Magnífica experiencia, trato y calidad humana excelente! Zoraida una gran terapeuta que enamora, todo lo hace sencillo, armonioso y lleno de empatía. Gracias por todo 💜 Volvemos a vernos en septiembre 😘 te vamos a extrañar este verano 😘😘. Disfruta de él",
    author: "Mer R."
  },
  {
    stars: "★★★★★",
    text: "Muy buenos profesionales, Zoraida la psicóloga infantil es un amor y muy buena profesional, conecta enseguida con los peques y las terapias que utiliza son geniales, la recomiendo 100%😊",
    author: "Maria L."
  },
  {
    stars: "★★★★★",
    text: "Desde el primer momento me encantó esa dulzura con la que nos trata tanto a los padres como a los niños, salíamos muy liberados y con mucha paz, gracias a ella el niño dio un cambio radical se lo tendré agradecido toda la vida gracias Zoraida por habernos ayudado muchísimo, encantadísima de haberte conocido un 💋",
    author: "Ester T."
  },
  {
    stars: "★★★★★",
    text: "Una decisión maravillosa y un acierto aún mayor, Zoraida nos está ayudando muchísimo, dándonos las herramientas necesarias para algo tan importante como la gestión y desarrollo emocional de mi hija, gracias por formar parte del camino, con tu ayuda todo es más fácil.",
    author: "Patricia C."
  },
  {
    stars: "★★★★★",
    text: "Buscábamos a alguien que nos acompañara y guiara en unos momentos familiares complicados y dimos con Zoraida, nos la habían recomendado y fue un acierto. Desde el primer momento conectó con nuestro hijo, le transmitió confianza y ha generado un espacio donde todos nos hemos sentido escuchados y ayudados. Ha sido un auténtico placer este tiempo y hemos conseguido grandes avances. Sin duda una gran profesional, cercana y dulce. Esperamos poder seguir caminando solos, pero si necesitáramos ayuda de nuevo, sin duda volveríamos a ella!",
    author: "Maribel"
  },
  {
    stars: "★★★★★",
    text: "Cuando empezamos con Zori, no pensé que la terapia nos ayudaría tanto en tan poco tiempo. Mi hija está encantada, la está ayudando a enfrentarse a sus miedos, relaciones e inseguridades y a entenderse para poner límites a aquello que no le hace bien. Se está reconstruyendo de manera positiva, con unos valores firmes. Y por ende, nos está sirviendo a toda la familia. Muchas gracias Zoraida por ayudarnos tanto en el difícil camino de la adolescencia.",
    author: "Ana M."
  },
  {
    stars: "★★★★★",
    text: "Desde pequeño he pasado por muchos psicólogos, pero la que más me ha ayudado de todos es Zoraida. Cuando entré por primera vez a su consulta tenía muchos problemas de ansiedad que me congelaban a la hora de hacer tanto cosas importantes, como del día a día y también al momento de relacionarme con otras personas. Gracias a ella, ahora soy capaz de gestionar esa ansiedad. Le doy muchas gracias a Zoraida por eso y por muchas otras dificultades que me ha ayudado a superar.",
    author: "BlueTile"
  }
];

// Líneas de reseña visibles en la vista compacta. Con el alto de tarjeta de
// 320px y su relleno, tres líneas es lo máximo que cabe sin desbordar.
const REVIEW_LINES = 3;
// Alto de una línea del texto: font-size 1.02rem x line-height 1.75.
const REVIEW_LINE = 1.785;

export default function Home() {
  const [expandedSection, setExpandedSection] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState({});
  const trackRef = useRef(null);
  const quoteRefs = useRef({});

  // Qué reseñas necesitan "leer más". Se estima por longitud en el primer
  // render (el servidor no puede medir) y se corrige midiendo las líneas
  // reales al montar: el mismo texto ocupa el doble de líneas en móvil que
  // en escritorio, así que un umbral por caracteres no vale para ambos.
  const [clampedReviews, setClampedReviews] = useState(() =>
    Object.fromEntries(reviews.map((rev, idx) => [idx, rev.text.length > 150]))
  );

  useEffect(() => {
    const measure = () => {
      const next = {};
      Object.entries(quoteRefs.current).forEach(([idx, el]) => {
        if (!el) return;
        // El recorte vive en el contenedor, así que el <p> conserva su alto
        // natural y se puede medir esté desplegada o no.
        const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
        next[idx] = el.getBoundingClientRect().height / lineHeight > REVIEW_LINES + 0.5;
      });
      setClampedReviews(next);
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const toggleReviewExpand = (idx) => {
    setExpandedReviews(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const scrollPrev = () => {
    if (trackRef.current) {
      const card = trackRef.current.firstElementChild;
      if (card) {
        const cardWidth = card.getBoundingClientRect().width;
        const gap = 24;
        trackRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
      }
    }
  };

  const scrollNext = () => {
    if (trackRef.current) {
      const card = trackRef.current.firstElementChild;
      if (card) {
        const cardWidth = card.getBoundingClientRect().width;
        const gap = 24;
        trackRef.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
      }
    }
  };



  return (
    <>
      <Header />

      <main>
        {/* HERO SECTION */}
        <HomeHero />

        {/* MARQUEE BAND */}
        <MarqueeBand />

        {/* SOBRE MÍ SECTION */}
        <section id="sobre-mi" className="about reveal" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="container">
            <div className="about-grid">
              <div className="about-image-wrapper reveal" style={{ position: 'relative' }}>
                {/* Círculo decorativo de puntos */}
                <div className="dotted-circle"></div>

                <div className="about-image" style={{ 
                  overflow: 'hidden', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  borderRadius: '180px 40px 180px 40px',
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}>
                  <div className="about-photo-soon">
                    <span className="about-photo-soon-badge">Próximamente</span>
                    <p className="about-photo-soon-text">Estoy preparando nuevas fotos.</p>
                  </div>
                </div>

                <style jsx>{`
                  /* Sustituye a la foto mientras no haya nuevas. Conserva la
                     proporción 3/4 que tenía la imagen porque .about-image
                     toma su alto del contenido y si no, colapsaría. */
                  .about-photo-soon {
                    width: 100%;
                    aspect-ratio: 3 / 4;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 14px;
                    padding: 24px;
                    text-align: center;
                    border-radius: inherit;
                    background: linear-gradient(135deg, var(--primary-light), var(--soft-purple));
                    border: 1px dashed rgba(211, 152, 207, 0.55);
                  }

                  .about-photo-soon-badge {
                    font-family: 'Sabon', 'EB Garamond', serif;
                    font-size: 1.5rem;
                    color: var(--accent);
                  }

                  .about-photo-soon-text {
                    font-size: 0.95rem;
                    line-height: 1.7;
                    color: var(--text-muted);
                    margin: 0;
                  }

                  .dotted-circle {
                    position: absolute;
                    top: -30px;
                    left: -30px;
                    width: 200px;
                    height: 200px;
                    border: 2px dashed var(--primary);
                    border-radius: 50%;
                    opacity: 0.2;
                    z-index: 1;
                  }

                  @media (max-width: 768px) {
                    .dotted-circle { display: none; }
                  }
                `}</style>
              </div>

              <div className="about-content">
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '10px' }}>Sobre mí</h2>
                <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: '0', marginBottom: '20px', color: 'var(--primary)' }}>¡Hola! Soy Zoraida, aunque puedes llamarme Zori</p>
                <p>Soy <strong>psicóloga especializada</strong> en infancia, adolescencia, jóvenes, adultos y familias.</p>
                <p>Me considero una <strong>persona sensible</strong>, algo que valoro profundamente en mi trabajo, porque creo que sentir y comprender nuestras emociones con intensidad nos permite vivir, conocer y <strong>conectar mejor</strong> con la persona que tengo delante. Como dice Miriam Tirado, es un súper poder.</p>
                <p>Los pacientes valoran de mí que trasmito <strong>calma, comprensión sin juicios, atención plena y creatividad</strong>. Además, suelen mencionar que mis terapias son <strong>distendidas</strong>, donde se ríe y se llora cada vez que es necesario.</p>
                <p>Me apasionan los momentos de calma, las <strong>conversaciones profundas</strong>, el deporte y la naturaleza. Los animales y las plantas forman parte esencial de mi vida. Además, valoro las <strong>relaciones interpersonales sanas</strong> que mantengo con amigos, familia...</p>

              </div>
            </div>
          </div>
        </section>

        {/* TRAYECTORIA SECTION */}
        <section id="trayectoria" className="trayectoria reveal" style={{ backgroundColor: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
          <div className="container">
            <div className="trayectoria-grid">
              <div className="trayectoria-content">
                <span className="trayectoria-subtitle">— Formación</span>
                <h2 className="trayectoria-title">Formación clínica, sanitaria y neuropsicológica.</h2>
                <p className="trayectoria-text">
                  Me gradué en Psicología por la <strong>Universidad de Granada (UGR)</strong> y continué mi especialización con el <strong>Máster en Psicología General Sanitaria (UAL)</strong> en la Universidad de Almería, con especial énfasis en <strong>Psicología Clínica y Neuropsicológica</strong>.
                </p>
                <p className="trayectoria-text">
                  Además colaboré con la universidad en su propia clínica psicológica y realicé una <strong>beca de atención a la diversidad funcional</strong>. He trabajado en Madrid en una clínica multidisciplinar, en Granada en la clínica donde realicé las prácticas y ahora estoy en Granada capital.
                </p>
              </div>
              <div className="trayectoria-list">
                <div className="trayectoria-card glass">
                  <span className="trayectoria-card-num">01</span>
                  <div className="trayectoria-card-content">
                    <h4 className="trayectoria-card-title">Grado Psicología</h4>
                    <p className="trayectoria-card-desc">Universidad de Granada</p>
                  </div>
                </div>
                <div className="trayectoria-card glass">
                  <span className="trayectoria-card-num">02</span>
                  <div className="trayectoria-card-content">
                    <h4 className="trayectoria-card-title">Máster Sanitario</h4>
                    <p className="trayectoria-card-desc">Universidad de Almería</p>
                  </div>
                </div>
                <div className="trayectoria-card glass">
                  <span className="trayectoria-card-num">03</span>
                  <div className="trayectoria-card-content">
                    <h4 className="trayectoria-card-title">Especialidad</h4>
                    <p className="trayectoria-card-desc">Psicóloga clínica experta en Terapia de Aceptación y Compromiso (ACT)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            .trayectoria-grid {
              display: grid;
              grid-template-columns: 1fr 1.1fr;
              gap: 80px;
              align-items: center;
            }
            .trayectoria-content {
              text-align: left;
            }
            .trayectoria-subtitle {
              font-size: 0.85rem;
              font-weight: 600;
              letter-spacing: 2px;
              color: #0E525D;
              text-transform: uppercase;
              margin-bottom: 15px;
              display: block;
            }
            .trayectoria-title {
              font-size: 2.6rem;
              line-height: 1.25;
              color: var(--text);
              margin-bottom: 24px;
              font-family: 'Sabon', 'EB Garamond', serif;
            }
            .trayectoria-text {
              font-size: 1.05rem;
              line-height: 1.7;
              color: var(--text);
              margin-bottom: 20px;
            }
            .trayectoria-text:last-child {
              margin-bottom: 0;
            }
            .trayectoria-list {
              display: flex;
              flex-direction: column;
              gap: 24px;
            }
            .trayectoria-card {
              background: var(--glass);
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              padding: 28px 32px;
              display: flex;
              align-items: center;
              gap: 24px;
              border: 1px solid rgba(14, 82, 93, 0.15);
              border-radius: 16px;
              transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
            }
            .trayectoria-card:hover {
              transform: translateY(-3px);
              border-color: #0E525D;
              box-shadow: 0 10px 25px rgba(14, 82, 93, 0.08);
            }
            .trayectoria-card-num {
              font-size: 1.15rem;
              font-weight: 600;
              color: #0E525D;
              font-family: 'Sabon', 'EB Garamond', serif;
              opacity: 0.9;
              min-width: 25px;
            }
            .trayectoria-card-content {
              text-align: left;
            }
            .trayectoria-card-title {
              font-size: 1.15rem;
              margin-bottom: 4px;
              color: var(--text);
              font-family: 'Sabon', 'EB Garamond', serif;
              font-weight: 600;
            }
            .trayectoria-card-desc {
              font-size: 0.9rem;
              color: var(--text-muted);
              margin: 0;
            }
            @media (max-width: 992px) {
              .trayectoria-grid {
                grid-template-columns: 1fr;
                gap: 48px;
              }
              .trayectoria-title {
                font-size: 2.2rem;
              }
            }
          `}</style>

          {/* Ola decorativa inferior movida aquí */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', lineHeight: 0, pointerEvents: 'none' }}>
            <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '80px' }}>
              <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="var(--primary)" fillOpacity="0.18" />
              <path d="M0,55 C360,10 720,80 1080,30 C1260,10 1380,50 1440,55 L1440,80 L0,80 Z" fill="var(--primary)" fillOpacity="0.30" />
            </svg>
          </div>
        </section>

        {/* MI TERAPIA + SERVICIOS (fusionado) */}
        <section id="terapias" className="terapias reveal" style={{ backgroundColor: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
          <div className="container">

            {/* Introducción terapia */}
            <div className="terapia-intro-grid">
              <div className="therapy-text">
                <h2 className="section-title therapy-title">Mi terapia</h2>
                <p>Mi terapia se basa en la <strong>Terapia de Aceptación y Compromiso (ACT)</strong>, que nos ayuda a reconocer nuestras emociones y pensamientos como válidos, sin tener que cambiarlos.</p>
                <p>Lo importante es decidir qué hacer con estas emociones y pensamientos: si dejarnos llevar por ellos y que nos limiten, o si —a pesar de ellos— continuar haciendo lo que es importante para nosotros.</p>
                <p>Es una terapia de tercera generación, que cuenta con una base científica amplia en la psicología clínica actual.</p>
              </div>
              <div className="formation-box glass" style={{ border: '1px solid #e0e0e0', padding: '30px' }}>
                <h3 style={{ color: 'var(--text)', marginBottom: '24px' }}>Formación continua</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  
                  {/* POSTGRADOS CARD */}
                  <div style={{
                    border: '1px solid rgba(14, 82, 93, 0.1)',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: expandedSection === 0 ? '0 4px 15px rgba(0,0,0,0.04)' : 'none'
                  }}>
                    <button 
                      onClick={() => setExpandedSection(expandedSection === 0 ? null : 0)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '18px 20px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <span className="formation-icon" style={{ margin: 0, width: '40px', height: '40px', fontSize: '1.25rem' }}>🎓</span>
                        <strong style={{ fontSize: '1.05rem', color: 'var(--text)' }}>Postgrados</strong>
                      </div>
                      <span style={{
                        fontSize: '1.4rem',
                        color: 'var(--primary)',
                        fontWeight: '300',
                        lineHeight: '1',
                        userSelect: 'none'
                      }}>{expandedSection === 0 ? '−' : '+'}</span>
                    </button>
                    <div style={{
                      maxHeight: expandedSection === 0 ? '200px' : '0px',
                      opacity: expandedSection === 0 ? 1 : 0,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      overflow: 'hidden'
                    }}>
                      <div style={{ padding: '0 20px 20px 74px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                            <span style={{ color: 'var(--accent)', fontSize: '1rem', lineHeight: '1.4', flexShrink: 0 }}>•</span>
                            <span>Psicología clínica aplicada</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                            <span style={{ color: 'var(--accent)', fontSize: '1rem', lineHeight: '1.4', flexShrink: 0 }}>•</span>
                            <span>Neuropsicología y trastornos del desarrollo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CURSOS ESPECIALIZADOS CARD */}
                  <div style={{
                    border: '1px solid rgba(14, 82, 93, 0.1)',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: expandedSection === 1 ? '0 4px 15px rgba(0,0,0,0.04)' : 'none'
                  }}>
                    <button 
                      onClick={() => setExpandedSection(expandedSection === 1 ? null : 1)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '18px 20px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <span className="formation-icon" style={{ margin: 0, width: '40px', height: '40px', fontSize: '1.25rem' }}>📚</span>
                        <strong style={{ fontSize: '1.05rem', color: 'var(--text)' }}>Cursos especializados</strong>
                      </div>
                      <span style={{
                        fontSize: '1.4rem',
                        color: 'var(--primary)',
                        fontWeight: '300',
                        lineHeight: '1',
                        userSelect: 'none'
                      }}>{expandedSection === 1 ? '−' : '+'}</span>
                    </button>
                    <div style={{
                      maxHeight: expandedSection === 1 ? '500px' : '0px',
                      opacity: expandedSection === 1 ? 1 : 0,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      overflow: 'hidden'
                    }}>
                      <div style={{ padding: '0 20px 20px 74px' }}>
                        <div style={{ 
                          display: 'grid', 
                          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                          gap: '8px 16px' 
                        }}>
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                            <span style={{ color: 'var(--accent)', fontSize: '1rem', lineHeight: '1.4', flexShrink: 0 }}>•</span>
                            <span>Habilidades sociales</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                            <span style={{ color: 'var(--accent)', fontSize: '1rem', lineHeight: '1.4', flexShrink: 0 }}>•</span>
                            <span>Ansiedad</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                            <span style={{ color: 'var(--accent)', fontSize: '1rem', lineHeight: '1.4', flexShrink: 0 }}>•</span>
                            <span>Depresión</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                            <span style={{ color: 'var(--accent)', fontSize: '1rem', lineHeight: '1.4', flexShrink: 0 }}>•</span>
                            <span>Duelo</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                            <span style={{ color: 'var(--accent)', fontSize: '1rem', lineHeight: '1.4', flexShrink: 0 }}>•</span>
                            <span>Terapia de pareja</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                            <span style={{ color: 'var(--accent)', fontSize: '1rem', lineHeight: '1.4', flexShrink: 0 }}>•</span>
                            <span>Llantos y rabietas</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                            <span style={{ color: 'var(--accent)', fontSize: '1rem', lineHeight: '1.4', flexShrink: 0 }}>•</span>
                            <span>Habilidades comunicativas (asertividad)</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                            <span style={{ color: 'var(--accent)', fontSize: '1rem', lineHeight: '1.4', flexShrink: 0 }}>•</span>
                            <span>Educación Montessori y respetuosa</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                            <span style={{ color: 'var(--accent)', fontSize: '1rem', lineHeight: '1.4', flexShrink: 0 }}>•</span>
                            <span>Autoestima</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* INTERVENCIÓN CARD */}
                  <div style={{
                    border: '1px solid rgba(14, 82, 93, 0.1)',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: expandedSection === 2 ? '0 4px 15px rgba(0,0,0,0.04)' : 'none'
                  }}>
                    <button 
                      onClick={() => setExpandedSection(expandedSection === 2 ? null : 2)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '18px 20px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <span className="formation-icon" style={{ margin: 0, width: '40px', height: '40px', fontSize: '1.25rem' }}>👥</span>
                        <strong style={{ fontSize: '1.05rem', color: 'var(--text)' }}>Intervención con colectivos vulnerables</strong>
                      </div>
                      <span style={{
                        fontSize: '1.4rem',
                        color: 'var(--primary)',
                        fontWeight: '300',
                        lineHeight: '1',
                        userSelect: 'none'
                      }}>{expandedSection === 2 ? '−' : '+'}</span>
                    </button>
                    <div style={{
                      maxHeight: expandedSection === 2 ? '200px' : '0px',
                      opacity: expandedSection === 2 ? 1 : 0,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      overflow: 'hidden'
                    }}>
                      <div style={{ padding: '0 20px 20px 74px', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                        Niños y adolescentes desde terapias contextuales.
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Separador */}
            <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.07)', marginBottom: '60px' }} />

            {/* Tarjetas de terapia minimalistas */}
            <div className="terapia-cards-grid">

              {/* Infantil */}
              <Link href="/terapias/infantil" style={{ textDecoration: 'none', border: '1px solid #e0e0e0', borderRadius: '16px' }} className="therapy-mini-card">
                <div style={{ aspectRatio: '4/3', overflow: 'hidden', borderRadius: '16px 16px 0 0' }}>
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/rec1.png`} alt="Terapia Infantil" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} className="therapy-mini-img" />
                </div>
                <div style={{ padding: '20px 20px 22px', backgroundColor: 'white', borderRadius: '0 0 16px 16px' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px', fontFamily: "'Sabon','EB Garamond',serif" }}>Psicología infantil</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>Un espacio de confianza para que los más pequeños comprendan y expresen sus emociones.</p>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)' }}>Leer más →</span>
                </div>
              </Link>

              {/* Adolescentes */}
              <Link href="/terapias/adolescentes" style={{ textDecoration: 'none', border: '1px solid #e0e0e0', borderRadius: '16px' }} className="therapy-mini-card">
                <div style={{ aspectRatio: '4/3', overflow: 'hidden', borderRadius: '16px 16px 0 0' }}>
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/rec2.png`} alt="Psicología para adolescentes" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} className="therapy-mini-img" />
                </div>
                <div style={{ padding: '20px 20px 22px', backgroundColor: 'white', borderRadius: '0 0 16px 16px' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px', fontFamily: "'Sabon','EB Garamond',serif" }}>Psicología para adolescentes</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>Acompañamiento en la revolución emocional y los retos propios de la adolescencia.</p>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)' }}>Leer más →</span>
                </div>
              </Link>

              {/* Adultos */}
              <Link href="/terapias/adultos" style={{ textDecoration: 'none', border: '1px solid #e0e0e0', borderRadius: '16px' }} className="therapy-mini-card">
                <div style={{ aspectRatio: '4/3', overflow: 'hidden', borderRadius: '16px 16px 0 0' }}>
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/adulto.jpeg`} alt="Psicología para adultos" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} className="therapy-mini-img" />
                </div>
                <div style={{ padding: '20px 20px 22px', backgroundColor: 'white', borderRadius: '0 0 16px 16px' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px', fontFamily: "'Sabon','EB Garamond',serif" }}>Psicología para adultos</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>Apoyo en ansiedad, pareja, duelo, crisis vitales y mucho más, con enfoque ACT.</p>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)' }}>Leer más →</span>
                </div>
              </Link>

            </div>
          </div>

          <style jsx>{`
            .terapia-intro-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 60px;
              align-items: start;
              margin-bottom: 70px;
            }

            .terapia-cards-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 24px;
            }

            .therapy-mini-card {
              border-radius: 16px;
              box-shadow: 0 2px 12px rgba(0,0,0,0.06);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              display: block;
              overflow: hidden;
            }
            .therapy-mini-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 12px 30px rgba(0,0,0,0.1);
            }
            .therapy-mini-card:hover .therapy-mini-img {
              transform: scale(1.05);
            }

            @media (max-width: 768px) {
              .terapia-intro-grid {
                grid-template-columns: 1fr;
                gap: 32px;
                margin-bottom: 40px;
              }

              .terapia-cards-grid {
                grid-template-columns: 1fr;
                gap: 16px;
              }

              .therapy-title {
                text-align: left;
              }
            }
          `}</style>

          {/* Ola decorativa inferior */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', lineHeight: 0, pointerEvents: 'none' }}>
            <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '100px' }}>
              <path d="M0,50 C480,100 960,0 1440,50 L1440,100 L0,100 Z" fill="var(--primary)" fillOpacity="0.12" />
              <path d="M0,70 C360,90 720,40 1080,80 C1260,100 1380,70 1440,60 L1440,100 L0,100 Z" fill="var(--primary)" fillOpacity="0.22" />
            </svg>
          </div>
        </section>

        {/* EXPERIENCIAS SECTION */}
        <section id="experiencias" className="experiences" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container">
            <h2 className="section-title">Experiencias</h2>
            <p className="section-subtitle">Lo que dicen las personas que han confiado en mi proceso terapéutico.</p>

            <div style={{
              maxWidth: '1250px',
              margin: '0 auto',
              position: 'relative',
              padding: '20px 10px',
              '--gap': '24px',
              '--visible-cards-ratio': '3.15',
              '--visible-gaps': '3',
            }} className="experience-scroll-container">
              
              {/* Navigation Arrows overlaying the sides of the viewport */}
              <button
                onClick={scrollPrev}
                style={{
                  position: 'absolute',
                  left: '-25px',
                  top: '40%',
                  transform: 'translateY(-50%)',
                  background: 'var(--white)',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  borderRadius: '50%',
                  width: '46px',
                  height: '46px',
                  fontSize: '1.4rem',
                  color: 'var(--primary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  transition: 'all 0.2s ease',
                  lineHeight: 1,
                  userSelect: 'none'
                }}
                className="carousel-nav-btn"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
                aria-label="Anterior"
              >
                ‹
              </button>

              <button
                onClick={scrollNext}
                style={{
                  position: 'absolute',
                  right: '-25px',
                  top: '40%',
                  transform: 'translateY(-50%)',
                  background: 'var(--white)',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  borderRadius: '50%',
                  width: '46px',
                  height: '46px',
                  fontSize: '1.4rem',
                  color: 'var(--primary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  transition: 'all 0.2s ease',
                  lineHeight: 1,
                  userSelect: 'none'
                }}
                className="carousel-nav-btn"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
                aria-label="Siguiente"
              >
                ›
              </button>

              {/* Review Viewport */}
              <div style={{
                overflow: 'hidden',
                width: '100%',
                padding: '10px 0'
              }}>
                {/* Scroll Track */}
                <div 
                  ref={trackRef}
                  className="experience-scroll-track"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--gap)',
                    overflowX: 'auto',
                    scrollSnapType: 'x mandatory',
                    padding: '10px 5px 30px',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    scrollBehavior: 'smooth'
                  }}
                >
                  {reviews.map((rev, idx) => {
                    const isLongText = clampedReviews[idx];
                    const isExpanded = expandedReviews[idx];

                    return (
                      <div
                        key={idx}
                        className="experience-card"
                        onClick={() => {
                          if (isLongText) {
                            toggleReviewExpand(idx);
                          }
                        }}
                        style={{
                          flex: '0 0 calc((100% - var(--visible-gaps) * var(--gap)) / var(--visible-cards-ratio))',
                          backgroundColor: 'var(--white)',
                          padding: '40px 30px 45px',
                          borderRadius: '20px',
                          border: '1px solid #e2e8f0',
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          textAlign: 'left',
                          scrollSnapAlign: 'start',
                          height: isExpanded ? 'auto' : '320px',
                          cursor: isLongText ? 'pointer' : 'default',
                          transition: 'height 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease, box-shadow 0.3s ease',
                        }}
                      >
                        <div>
                          <div className="stars" style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '18px' }}>{rev.stars}</div>
                          
                          {/* Smooth Expansion Wrapper */}
                          <div style={{
                            position: 'relative',
                            // Colapsada se recorta por líneas, no por píxeles, para que
                            // el recorte sea el mismo en móvil y escritorio. Desplegada
                            // el tope es holgado a propósito: solo existe para que la
                            // transición pueda animarse, nunca para cortar el texto.
                            maxHeight: isExpanded ? '1500px' : `${REVIEW_LINES * REVIEW_LINE}rem`,
                            overflow: 'hidden',
                            transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            marginBottom: isLongText ? '10px' : '20px'
                          }}>
                            <p
                              ref={(el) => { quoteRefs.current[idx] = el; }}
                              style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '1.02rem',
                              lineHeight: '1.75',
                              color: 'var(--text)',
                              fontStyle: 'italic',
                              textAlign: 'left',
                              margin: 0,
                            }}>
                              "{rev.text}"
                            </p>
                            
                            {/* Fade mask for compact view */}
                            {isLongText && !isExpanded && (
                              <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: '35px',
                                background: 'linear-gradient(to bottom, rgba(255,255,255,0), var(--white))',
                                pointerEvents: 'none'
                              }} />
                            )}
                          </div>

                          {isLongText && (
                            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', marginTop: '5px' }}>
                              <span
                                style={{
                                  color: 'var(--primary)',
                                  fontWeight: '600',
                                  fontSize: '0.88rem',
                                  fontFamily: "'Inter', sans-serif",
                                  marginBottom: '20px',
                                  borderBottom: '1px dashed rgba(211, 152, 207, 0.5)',
                                  paddingBottom: '2px',
                                  userSelect: 'none',
                                  transition: 'color 0.2s ease'
                                }}
                              >
                                {isExpanded ? 'leer menos' : 'leer más'}
                              </span>
                            </div>
                          )}
                        </div>
                        <span className="experience-author" style={{ 
                          fontFamily: "'Sabon', 'EB Garamond', serif",
                          fontSize: '1.15rem',
                          fontWeight: '600',
                          color: 'var(--text)',
                          display: 'block',
                          marginTop: '5px'
                        }}>
                          — {rev.author}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Scroll Guidance Indicator */}
              <div style={{
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
                marginTop: '15px',
                opacity: 0.7,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                userSelect: 'none'
              }}>
                <span>Desliza lateralmente para explorar más opiniones</span>
                <span style={{ fontSize: '1.2rem', animation: 'bounce-right 1.5s infinite' }}>→</span>
              </div>
            </div>

            <style jsx>{`
              .experience-scroll-track::-webkit-scrollbar {
                display: none;
              }
              @media (max-width: 1024px) {
                .experience-scroll-container {
                  --visible-cards-ratio: 2.15 !important;
                  --visible-gaps: 2 !important;
                }
                :global(.carousel-nav-btn) {
                  display: none !important; /* Hide arrows on touch devices to favor native swiping */
                }
              }
              @media (max-width: 600px) {
                .experience-scroll-container {
                  --visible-cards-ratio: 1.15 !important;
                  --visible-gaps: 1 !important;
                }
              }
              @keyframes bounce-right {
                0%, 100% { transform: translateX(0); }
                50% { transform: translateX(4px); }
              }
            `}</style>
          </div>
        </section>

        {/* CLINIC GALLERY CAROUSEL */}
        <ClinicGallery />

        {/* FAQ SECTION */}
        <FAQ />

      </main>

      <Footer />
    </>
  );
}
