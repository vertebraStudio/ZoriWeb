'use client';

import Header from "@/components/Header";
import ClinicGallery from "@/components/ClinicGallery";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MarqueeBand from "@/components/MarqueeBand";
import HomeHero from "@/components/HomeHero";
import Link from 'next/link';

export default function Home() {
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
                  <img 
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/ProfilePic.jpg`} 
                    alt="Zoraida - Psicóloga" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                <style jsx>{`
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
                <p>Soy psicóloga especializada en infancia, adolescencia, jóvenes, adultos y familias.</p>
                <p>Me considero una persona sensible, algo que valoro profundamente en mi trabajo, porque creo que sentir y comprender nuestras emociones con intensidad nos permite vivir, conocer y conectar mejor con la persona que tengo delante. Como dice Miriam Tirado, es un súper poder.</p>
                <p>Los pacientes valoran de mí que trasmito calma, comprensión sin juicios, atención plena y creatividad. Además, suelen mencionar que mis terapias son distendidas, donde se ríe y se llora cada vez que es necesario.</p>
                <p>Me apasionan los momentos de calma, las conversaciones profundas, el deporte y la naturaleza. Los animales y las plantas forman parte esencial de mi vida. Además, valoro las relaciones interpersonales sanas que mantengo con amigos, familia...</p>

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
                    <p className="trayectoria-card-desc">Clínica y Neuropsicológica</p>
                  </div>
                </div>
                <div className="trayectoria-card glass">
                  <span className="trayectoria-card-num">04</span>
                  <div className="trayectoria-card-content">
                    <h4 className="trayectoria-card-title">Experiencia</h4>
                    <p className="trayectoria-card-desc">Madrid & Granada</p>
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
              gap: 16px;
            }
            .trayectoria-card {
              background: var(--glass);
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              padding: 22px 28px;
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
              <div className="formation-box glass" style={{ border: '1px solid #e0e0e0' }}>
                <h3 style={{ color: 'var(--text)' }}>Formación continua</h3>
                <ul className="formation-list">
                  <li>
                    <span className="formation-icon">🎓</span>
                    <div>
                      <strong>Postgrados</strong>
                      <p>Psicología Clínica, Neuropsicología y Trastornos del Neurodesarrollo.</p>
                    </div>
                  </li>
                  <li>
                    <span className="formation-icon">📚</span>
                    <div>
                      <strong>Cursos especializados</strong>
                      <p>Habilidades sociales, duelo, ansiedad, terapia familiar y de pareja, entre otros.</p>
                    </div>
                  </li>
                  <li>
                    <span className="formation-icon">👥</span>
                    <div>
                      <strong>Intervención psicológica</strong>
                      <p>Niños, adolescentes, adultos y colectivos vulnerables.</p>
                    </div>
                  </li>
                </ul>
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
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/rec4.png`} alt="Psicología para adultos" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} className="therapy-mini-img" />
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

            <div className="experiences-grid">
              <div className="experience-card">
                <div className="stars">★★★★★</div>
                <p>"Zoraida tiene una conexión increíble con los niños. Mi hijo ha mejorado muchísimo en su gestión emocional gracias a ella."</p>
                <span className="experience-author">— Laura R.</span>
              </div>
              <div className="experience-card">
                <div className="stars">★★★★★</div>
                <p>"Como adolescente, me sentí escuchado y comprendido desde el primer momento. Me ha ayudado mucho con mis problemas de instituto."</p>
                <span className="experience-author">— Pablo M.</span>
              </div>
              <div className="experience-card">
                <div className="stars">★★★★★</div>
                <p>"Buscaba una psicóloga en Granada para adultos y encontré en Zoraida la guía perfecta para superar mi ansiedad."</p>
                <span className="experience-author">— Elena S.</span>
              </div>
            </div>
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
