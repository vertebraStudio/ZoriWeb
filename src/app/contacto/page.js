import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import ContactHero from "./ContactHero";

export const metadata = {
  title: "Contacto | Zoraida | Psicóloga en Granada",
  description: "Ponte en contacto con Zoraida, psicóloga en Granada. Solicita tu primera cita o resuelve tus dudas por teléfono, email o WhatsApp.",
};

export default function ContactoPage() {
  return (
    <>
      <Header solid={true} />
      <main className="therapy-page fade-in">

        {/* Hero estilo terapias */}
        <ContactHero />

        {/* Sección de vías de contacto */}
        <section style={{ padding: '80px 5%', backgroundColor: 'var(--white)' }}>
          <div className="therapy-layout">

            {/* ── COLUMNA PRINCIPAL ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>

              {/* Intro */}
              <div className="reveal">
                <h2 style={{
                  fontFamily: "'Sabon', 'EB Garamond', serif",
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  marginBottom: '20px',
                  color: 'var(--text)',
                }}>
                  ¿Cómo puedo ayudarte?
                </h2>
                <p style={{ lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '16px' }}>
                  Si tienes alguna pregunta antes de tu primera cita o simplemente quieres saber más sobre cómo trabajo, no dudes en contactar. Puedes elegir la vía que te resulte más cómoda — respondo personalmente a cada mensaje.
                </p>
                <p style={{ lineHeight: '1.9', fontSize: '1.05rem' }}>
                  El primer paso no tiene por qué ser difícil. A veces, una llamada o un mensaje es todo lo que se necesita para empezar.
                </p>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0' }} />

              {/* Tarjetas de contacto */}
              <div className="reveal">
                <h2 style={{
                  fontFamily: "'Sabon', 'EB Garamond', serif",
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  marginBottom: '30px',
                  color: 'var(--text)',
                }}>
                  Vías de contacto
                </h2>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '20px',
                }}>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/34692642252"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                      padding: '28px 24px',
                      borderRadius: '16px',
                      backgroundColor: 'var(--white)',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                    }}
                    className="contact-card-link"
                  >
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{
                        width: '46px', height: '46px', borderRadius: '50%',
                        backgroundColor: 'rgba(37, 211, 102, 0.08)', display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                        color: '#25D366',
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                      </div>
                      <span style={{
                        fontSize: '0.62rem',
                        fontWeight: 600,
                        border: '1px solid rgba(15, 81, 50, 0.18)',
                        color: '#0f5132',
                        backgroundColor: 'rgba(25, 135, 84, 0.05)',
                        padding: '4px 10px',
                        borderRadius: '50px',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}>Preferente</span>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--text)', margin: '0 0 6px' }}>WhatsApp</p>
                      <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-muted)', margin: 0 }}>
                        Escríbeme en cualquier momento. Suelo responder de manera inmediata o en un plazo máximo de 24 horas.
                      </p>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0E525D', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      Enviar mensaje directo →
                    </span>
                  </a>

                  {/* Teléfono */}
                  <a
                    href="tel:+34692642252"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                      padding: '28px 24px',
                      borderRadius: '16px',
                      backgroundColor: 'var(--white)',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    className="contact-card-link"
                  >
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{
                        width: '46px', height: '46px', borderRadius: '50%',
                        backgroundColor: 'rgba(14, 82, 93, 0.06)', display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                        color: '#0E525D',
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--text)', margin: '0 0 6px' }}>Llamada telefónica</p>
                      <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-muted)', margin: 0 }}>
                        Si prefieres hablar directamente para explicarme tu caso o agendar. De lunes a viernes, de 15:00 a 21:00.
                      </p>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0E525D', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      Llamar ahora →
                    </span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:zoripsico@gmail.com"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                      padding: '28px 24px',
                      borderRadius: '16px',
                      backgroundColor: 'var(--white)',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    className="contact-card-link"
                  >
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{
                        width: '46px', height: '46px', borderRadius: '50%',
                        backgroundColor: 'rgba(14, 82, 93, 0.06)', display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                        color: '#0E525D',
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--text)', margin: '0 0 6px' }}>Correo electrónico</p>
                      <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-muted)', margin: 0 }}>
                        Para consultas profesionales, colaboraciones o si prefieres detallar tu situación de forma más extensa.
                      </p>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0E525D', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      zoripsico@gmail.com →
                    </span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/zoripsico/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                      padding: '28px 24px',
                      borderRadius: '16px',
                      backgroundColor: 'var(--white)',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    className="contact-card-link"
                  >
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{
                        width: '46px', height: '46px', borderRadius: '50%',
                        backgroundColor: 'rgba(14, 82, 93, 0.06)', display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                        color: '#0E525D',
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--text)', margin: '0 0 6px' }}>Instagram</p>
                      <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-muted)', margin: 0 }}>
                        Sigue mi perfil para leer contenido sobre bienestar, reflexiones diarias y psicología general sanitaria.
                      </p>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0E525D', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      @zoripsico →
                    </span>
                  </a>

                </div>
              </div>

              {/* Mapa */}
              <div className="reveal">
                <h2 style={{
                  fontFamily: "'Sabon', 'EB Garamond', serif",
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  marginBottom: '20px',
                  color: 'var(--text)',
                }}>
                  ¿Cómo llegar?
                </h2>
                <p style={{ lineHeight: '1.9', fontSize: '1rem', marginBottom: '24px', color: 'var(--text-muted)' }}>
                  Mi consulta se encuentra en la zona de Ronda, en Granada — un entorno accesible y tranquilo.
                </p>
                <div style={{
                  width: '100%',
                  height: '380px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #eee',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                }} className="glass">
                  <GoogleMap />
                </div>
              </div>

            </div>

            {/* ── SIDEBAR ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'sticky', top: '120px' }}>

              {/* Perfil */}
              <div style={{
                backgroundColor: 'var(--white)',
                border: '1px solid #e8e8e8',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/ProfilePic.jpg`}
                    alt="Zoraida"
                    style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top' }}
                  />
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text)', margin: 0 }}>Zoraida</p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>Psicóloga en Granada</p>
                  </div>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid #eee', marginBottom: '16px' }} />
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Nº colegiada AO-12108</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '10px' }}>NICA 63321</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 500 }}>
                  <a href="https://www.instagram.com/zoripsico/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    @zoripsico
                  </a>
                </p>
              </div>

              {/* Dirección */}
              <div style={{
                backgroundColor: 'var(--white)',
                border: '1px solid #e8e8e8',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase', margin: '0 0 16px' }}>Consulta</p>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    backgroundColor: 'var(--primary-light)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1rem',
                  }}>📍</div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text)', margin: '0 0 2px' }}>Dirección</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>C. Pintor Zuloaga, 3, local 2<br />18005 Granada</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    backgroundColor: 'var(--primary-light)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1rem',
                  }}>⏰</div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text)', margin: '0 0 2px' }}>Horario</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>Lunes a Viernes<br />15:00 – 21:00</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div style={{
                backgroundColor: '#0E525D',
                borderRadius: '16px',
                padding: '28px 24px',
                color: 'white',
              }}>
                <h3 style={{
                  fontFamily: "'Sabon', 'EB Garamond', serif",
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  marginBottom: '12px',
                  color: 'white',
                  lineHeight: '1.3',
                }}>
                  ¿Lista para empezar?
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.8)', marginBottom: '20px' }}>
                  Escríbeme por WhatsApp — es la forma más rápida de contactar y resolver cualquier duda inicial.
                </p>
                <a
                  href="https://wa.me/34692642252"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '13px 20px',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    border: '1.5px solid rgba(255,255,255,0.5)',
                    borderRadius: '50px',
                    color: 'white',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Escribir por WhatsApp →
                </a>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
