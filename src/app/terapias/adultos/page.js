import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from 'next/link';
import AdultosHero from './AdultosHero';

export const metadata = {
  title: "Psicología para Adultos | Zoraida | Psicóloga en Granada",
  description: "Terapia psicológica para adultos en Granada. Ansiedad, depresión, terapia de pareja, duelo, gestión del estrés y acompañamiento en crisis vitales.",
};

const servicios = [
  {
    titulo: "Ansiedad y depresión",
    desc: "Aprendemos a entender qué nos genera malestar y desarrollamos herramientas para gestionar el día a día con mayor equilibrio emocional.",
  },
  {
    titulo: "Terapia de pareja",
    desc: "Acompañamiento a parejas que atraviesan crisis, problemas de comunicación o quieren fortalecer su vínculo desde un espacio neutral y seguro.",
  },
  {
    titulo: "Duelo",
    desc: "Acompañamiento en los procesos de pérdida, ya sea por fallecimiento, rupturas, cambios vitales u otras situaciones de pérdida significativa.",
  },
  {
    titulo: "Gestión de la ira y crisis vitales",
    desc: "Trabajamos las emociones intensas y los momentos de quiebre vital —cambios de trabajo, separaciones, enfermedades— para encontrar un nuevo equilibrio.",
  },
  {
    titulo: "Asesoramiento sobre la crianza",
    desc: "Orientación a padres y madres que quieren mejorar la relación con sus hijos, gestionar conflictos en casa o encontrar un estilo de crianza más respetuoso.",
  },
  {
    titulo: "Resolución de conflictos y toma de decisiones",
    desc: "Herramientas para afrontar situaciones complejas, mejorar la comunicación y tomar decisiones importantes con mayor claridad y seguridad.",
  },
  {
    titulo: "Divorcios y separaciones",
    desc: "Apoyo emocional y psicológico durante los procesos de ruptura, con especial atención al bienestar de toda la familia cuando hay hijos implicados.",
  },
];

export default function AdultosPage() {
  return (
    <>
      <Header solid={true} />
      <main className="therapy-page fade-in">

        {/* Hero */}
        <AdultosHero />

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
                  Un espacio para ti
                </h2>
                <p style={{ lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '16px' }}>
                  A veces el cansancio se acumula, la motivación desaparece o simplemente sientes que algo no va bien, aunque no sepas exactamente qué. El estrés crónico, los cambios de vida o las dificultades en las relaciones pueden desgastarnos sin que nos demos cuenta.
                </p>
                <p style={{ lineHeight: '1.9', fontSize: '1.05rem' }}>
                  En consulta trabajamos desde un enfoque cercano, respetuoso y sin juicios. Juntos exploramos qué está pasando, qué lo sostiene y cómo puedes volverte a sentir tú misma o tú mismo. No hace falta estar en crisis para pedir ayuda: a veces simplemente necesitas a alguien que te acompañe.
                </p>
              </div>

              {/* Separador */}
              <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0' }} />

              {/* Bloque 2: Servicios */}
              <div className="reveal">
                <h2 style={{
                  fontFamily: "'Sabon', 'EB Garamond', serif",
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  marginBottom: '30px',
                  color: 'var(--text)',
                }}>
                  Áreas de trabajo
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {servicios.map((s, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'flex-start',
                      padding: '20px',
                      borderRadius: '14px',
                      backgroundColor: 'var(--off-white)',
                      border: '1px solid #eee',
                    }}>
                      <span style={{
                        minWidth: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary-light)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        color: 'var(--accent)',
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: '2px',
                      }}>✓</span>
                      <div>
                        <p style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text)', margin: '0 0 6px' }}>{s.titulo}</p>
                        <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
                  ¿Quieres valorar tu caso?
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
