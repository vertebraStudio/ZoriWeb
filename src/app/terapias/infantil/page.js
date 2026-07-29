import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from 'next/link';
import InfantilHero from './InfantilHero';

export const metadata = {
  title: "Psicología Infantil | Zoraida | Psicóloga en Granada",
  description: "Terapia psicológica para niños en Granada. Acompañamiento especializado en gestión emocional, comportamiento, autoestima y comunicación familiar.",
  alternates: {
    canonical: "/terapias/infantil/",
  },
};

const senales = [
  "¿Tu hijo no sabe describir cómo se siente?",
  "¿Te preocupan las rabietas de tu pequeño?",
  "¿Te gustaría que tus hijos te hicieran más caso?",
  "¿Tu hijo se muerde las uñas, la camiseta o tiene pesadillas?",
  "¿Tu peque tiene explosiones de ira?",
  "¿Te gustaría que tu peque siguiera mejor las normas y rutinas?",
  "¿Te gustaría valorar si tu hijo tiene problemas de control de impulsos?",
  "¿Tu peque se aísla de sus compañeros o se pelea con ellos?",
  "¿Tu hijo tiene dolores de barriga o cabeza sin causa médica detectada?",
  "¿Crees que sus compañeros podrían estar haciéndole daño?",
];

const herramientas = [
  "Gestión emocional",
  "Trabajo de autoestima",
  "Facilitación de la expresión emocional",
  "Gestión del comportamiento",
  "Técnicas de relajación",
  "Sesiones de comunicación familiar",
  "Técnicas respetuosas para la interacción papás e hijos",
];

export default function InfantilPage() {
  return (
    <>
      <Header solid={true} />
      <main className="therapy-page fade-in">

        {/* Hero */}
        <InfantilHero />

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
                  Un espacio seguro para tu peque
                </h2>
                <p style={{ lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '16px' }}>
                  Los niños expresan sus emociones y dificultades de formas muy distintas a los adultos. A veces el cuerpo habla cuando las palabras no llegan: dolores, rabietas, pesadillas, aislamiento…
                </p>
                <p style={{ lineHeight: '1.9', fontSize: '1.05rem' }}>
                  Trabajo con niños creando un espacio de confianza donde puedan explorar y comprender lo que sienten, utilizando el juego, el arte y la creatividad como puentes de comunicación. Siempre con la familia como parte esencial del proceso.
                </p>
              </div>

              {/* Separador */}
              <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0' }} />

              {/* Bloque 2: Señales */}
              <div className="reveal">
                <h2 style={{
                  fontFamily: "'Sabon', 'EB Garamond', serif",
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  marginBottom: '20px',
                  color: 'var(--text)',
                }}>
                  ¿Te identificas con alguna de estas situaciones?
                </h2>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingLeft: '0', listStyle: 'none' }}>
                  {senales.map((item, i) => (
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
                        flexShrink: 0,
                      }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Separador */}
              <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0' }} />

              {/* Bloque 3: Herramientas */}
              <div className="reveal">
                <h2 style={{
                  fontFamily: "'Sabon', 'EB Garamond', serif",
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  marginBottom: '20px',
                  color: 'var(--text)',
                }}>
                  ¿Qué trabajamos en sesión?
                </h2>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingLeft: '0', listStyle: 'none' }}>
                  {herramientas.map((item, i) => (
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
                        flexShrink: 0,
                      }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
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
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '10px' }}>NICA 59834</p>
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
                    width: '38px', height: '38px', borderRadius: '10px',
                    backgroundColor: 'var(--primary-light)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.1rem',
                  }}>📞</div>
                  <a href="tel:+34692642252" style={{ fontSize: '1rem', color: 'var(--text)', fontWeight: 500, textDecoration: 'none' }}>
                    +34 692 64 22 52
                  </a>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    backgroundColor: 'var(--primary-light)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1rem',
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
