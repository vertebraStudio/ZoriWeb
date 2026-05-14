import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from 'next/link';
import AdolescentesHero from './AdolescentesHero';

export const metadata = {
  title: "Psicología para Adolescentes | Zoraida | Psicóloga en Granada",
  description: "Acompañamiento psicológico para jóvenes en la etapa de la adolescencia. Un espacio de calma y seguridad para afrontar retos emocionales.",
};

export default function AdolescentesPage() {
  return (
    <>
      <Header solid={true} />
      <main className="therapy-page fade-in">

        {/* Hero */}
        <AdolescentesHero />

        {/* Layout modular: columna de contenido + sidebar */}
        <section style={{ padding: '80px 5%', backgroundColor: 'var(--white)' }}>
          <div className="therapy-layout">

            {/* ── COLUMNA PRINCIPAL ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>

              {/* Bloque 1: Introducción */}
              <div className="reveal">
                <h2 style={{
                  fontFamily: "'Sabon', 'EB Garamond', serif",
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  marginBottom: '20px',
                  color: 'var(--text)',
                }}>
                  Un espacio de calma en plena revolución
                </h2>
                <p style={{ lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '16px' }}>
                  La adolescencia es una etapa de cambios profundos. A veces los jóvenes se sienten solos, incomprendidos o no saben cómo gestionar lo que sienten.{' '}
                  <strong>La ansiedad, el aislamiento, los problemas en el instituto o en casa</strong> son señales de que algo necesita atención.
                </p>
                <p style={{ lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '16px' }}>
                  Durante mi trayectoria profesional he trabajado con bastantes adolescentes. Suelo crear un espacio de calma y seguridad en el cual comienzan a abrirse, comprenderse y descubrirse.
                </p>
                <p style={{ lineHeight: '1.9', fontSize: '1.05rem' }}>
                  Juntos encontramos maneras de gestionar de forma diferente y funcional los retos de la adolescencia. Además, me gusta que la familia esté involucrada en la terapia para que las relaciones sean más armónicas.
                </p>
              </div>

              {/* Separador */}
              <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0' }} />

              {/* Bloque 2: Señales de alerta */}
              <div className="reveal">
                <h2 style={{
                  fontFamily: "'Sabon', 'EB Garamond', serif",
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  marginBottom: '20px',
                  color: 'var(--text)',
                }}>
                  Si notas que tu hijo…
                </h2>
                <ul style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  paddingLeft: '0',
                  listStyle: 'none',
                }}>
                  {[
                    'Podría tener ansiedad',
                    'Se aísla de la familia y las interacciones son desde el enfado',
                    'Sus notas han bajado',
                    'No sabe qué quiere estudiar o siente incertidumbre sobre su futuro',
                    'No tiene un estilo de vida saludable',
                    'Está irritable, triste o decaído',
                    'No cuenta lo que siente o le cuesta abrirse',
                    'Te preocupan sus relaciones con la gente de su edad',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', lineHeight: '1.7', fontSize: '1rem' }}>
                      <span style={{
                        minWidth: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary-light)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '3px',
                        fontSize: '0.7rem',
                        color: 'var(--accent)',
                        fontWeight: 700,
                      }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Separador */}
              <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0' }} />

              {/* Bloque 3: Mi enfoque */}
              <div className="reveal">
                <h2 style={{
                  fontFamily: "'Sabon', 'EB Garamond', serif",
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  marginBottom: '20px',
                  color: 'var(--text)',
                }}>
                  Mi enfoque terapéutico
                </h2>
                <p style={{ lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '16px' }}>
                  Trabajo desde un enfoque adaptado a cada adolescente, creando un espacio seguro donde se sientan escuchados y comprendidos, sin juicios. Utilizo herramientas de la{' '}
                  <strong>Terapia de Aceptación y Compromiso (ACT)</strong> y técnicas creativas adaptadas a su edad.
                </p>
                <p style={{ lineHeight: '1.9', fontSize: '1.05rem' }}>
                  También integro a la familia en el proceso cuando es necesario, para que el acompañamiento en casa sea coherente con el trabajo en sesión y las relaciones familiares mejoren.
                </p>
              </div>

            </div>

            {/* ── SIDEBAR ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'sticky', top: '120px' }}>

              {/* Tarjeta perfil */}
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

              {/* Tarjeta CTA */}
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
                  ¿Quieres valorar el caso de tu hijo?
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.8)', marginBottom: '20px' }}>
                  Puedes escribirme para resolver dudas antes de empezar y orientarte en el primer paso.
                </p>
                <Link href="/contacto" style={{
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
                }}>
                  Pedir primera cita →
                </Link>
              </div>

              {/* Tarjeta contacto */}
              <div style={{
                backgroundColor: 'var(--white)',
                border: '1px solid #e8e8e8',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase', margin: '0 0 5px' }}>Información de contacto</p>
                
                {/* Teléfono */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--primary-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '1.1rem',
                  }}>📞</div>
                  <a href="tel:+34692642252" style={{ fontSize: '1rem', color: 'var(--text)', fontWeight: 500, textDecoration: 'none' }}>
                    +34 692 64 22 52
                  </a>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--primary-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '1rem',
                  }}>✉️</div>
                  <a href="mailto:zoripsico@gmail.com" style={{ fontSize: '0.92rem', color: 'var(--text)', fontWeight: 500, textDecoration: 'none', wordBreak: 'break-all' }}>
                    zoripsico@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
