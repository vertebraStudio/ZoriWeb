import Header from "@/components/Header";
import ClinicGallery from "@/components/ClinicGallery";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="hero fade-in">
          <div className="container hero-content">
            <h1>Zoraida - Psicóloga en Granada</h1>
            <p>Especialista en psicología infantil, adolescentes y adultos. Un acompañamiento profesional en cada etapa de tu vida.</p>
            <div className="hero-ctas">
              <Link href="/contacto" className="btn">Pedir mi primera cita</Link>
            </div>
          </div>
        </section>

        {/* SOBRE MÍ SECTION */}
        <section id="sobre-mi" className="about reveal" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="container">
            <div className="about-grid">
              <div className="about-image" style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/ProfilePic.jpg`} 
                  alt="Zoraida - Psicóloga" 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div className="about-content">
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '10px' }}>Sobre mí</h2>
                <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: '0', marginBottom: '30px', color: 'var(--primary)' }}>¡Hola! Soy Zoraida, aunque puedes llamarme Zori</p>
                <p>Soy psicóloga especializada en infancia, adolescencia, jóvenes, adultos y familias.</p>
                <p>Me considero una persona sensible, algo que valoro profundamente en mi trabajo, porque creo que sentir y comprender nuestras emociones con intensidad nos permite vivir, conocer y conectar mejor con la persona que tengo delante. Como dice Miriam Tirado, es un súper poder.</p>
                <p>Los pacientes valoran de mí que trasmito calma, comprensión sin juicios, atención plena y creatividad. Además, suelen mencionar que mis terapias son distendidas, donde se ríe y se llora cada vez que es necesario.</p>
                <p>Me apasionan los momentos de calma, las conversaciones profundas, el deporte y la naturaleza. Los animales y las plantas forman parte esencial de mi vida. Además, valoro las relaciones interpersonales sanas que mantengo con amigos, familia...</p>
              </div>
            </div>
          </div>

          {/* Ola decorativa inferior */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', lineHeight: 0, pointerEvents: 'none' }}>
            <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '80px' }}>
              <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="var(--primary)" fillOpacity="0.18" />
              <path d="M0,55 C360,10 720,80 1080,30 C1260,10 1380,50 1440,55 L1440,80 L0,80 Z" fill="var(--primary)" fillOpacity="0.30" />
            </svg>
          </div>
        </section>

        {/* TRAYECTORIA SECTION */}
        <section id="trayectoria" className="trayectoria reveal" style={{ backgroundColor: 'var(--off-white)' }}>
          <div className="container">
            <div className="about-grid">
              <div className="about-content" style={{ textAlign: 'left', justifyContent: 'center' }}>
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>Mi trayectoria</h2>
                <p>
                  Me gradué en Psicología por la <strong>Universidad de Granada (UGR)</strong> y continué mi especialización con el <strong>Máster en Psicología General Sanitaria (UAL)</strong> en la Universidad de Almería, con especial énfasis en <strong>Psicología Clínica y Neuropsicológica</strong>.
                </p>
                <p>
                  Además colaboré con la universidad en su propia clínica psicológica y realicé una <strong>beca de atención a la diversidad funcional</strong>. He trabajado en Madrid en una clínica multidisciplinar, en Granada en la clínica donde realicé las prácticas y ahora estoy en Granada capital.
                </p>
              </div>
              <div className="milestones-grid">
                <div className="milestone-card glass" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <img 
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/gradoPsicologia.png`} 
                    alt="Grado Psicología" 
                    style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'top' }}
                  />
                  <div style={{ padding: '15px', textAlign: 'center' }}>
                    <h4 style={{ fontSize: '1rem', marginBottom: '5px', color: 'var(--text)' }}>Grado Psicología</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Universidad de Granada</p>
                  </div>
                </div>
                <div className="milestone-card glass" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <img 
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/masterSanitario.png`} 
                    alt="Máster Sanitario" 
                    style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center' }}
                  />
                  <div style={{ padding: '15px', textAlign: 'center' }}>
                    <h4 style={{ fontSize: '1rem', marginBottom: '5px', color: 'var(--text)' }}>Máster Sanitario</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Univ. de Almería</p>
                  </div>
                </div>
                <div className="milestone-card glass" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <img 
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/cerebro.png`} 
                    alt="Especialidad" 
                    style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center' }}
                  />
                  <div style={{ padding: '15px', textAlign: 'center' }}>
                    <h4 style={{ fontSize: '1rem', marginBottom: '5px', color: 'var(--text)' }}>Especialidad</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Clínica y Neuropsicológica</p>
                  </div>
                </div>
                <div className="milestone-card glass" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <img 
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/experiencia.png`} 
                    alt="Experiencia" 
                    style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center' }}
                  />
                  <div style={{ padding: '15px', textAlign: 'center' }}>
                    <h4 style={{ fontSize: '1rem', marginBottom: '5px', color: 'var(--text)' }}>Experiencia</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Madrid & Granada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MI TERAPIA SECTION */}
        <section id="mi-terapia" className="mi-terapia reveal" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="container">
            <div className="therapy-intro-grid">
              <div className="therapy-text">
                <h2 className="section-title therapy-title">Mi terapia</h2>
                <p>Mi terapia se basa en la <strong>Terapia de Aceptación y Compromiso (ACT)</strong>, que nos ayuda a reconocer nuestras emociones y pensamientos como válidos, sin tener que cambiarlos.</p>
                <p>Lo importante es decidir qué hacer con estas emociones y pensamientos: si dejarnos llevar por ellos y que nos limiten, o si —a pesar de ellos— continuar haciendo lo que es importante para nosotros.</p>
                <p>Es una terapia de tercera generación, que cuenta con una base científica amplia en la psicología clínica actual.</p>
              </div>
              <div className="formation-box glass">
                <h3>Formación continua</h3>
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
          </div>

          {/* Nueva ola decorativa inferior (patrón diferente) */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', lineHeight: 0, pointerEvents: 'none' }}>
            <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '100px' }}>
              <path d="M0,50 C480,100 960,0 1440,50 L1440,100 L0,100 Z" fill="var(--primary)" fillOpacity="0.12" />
              <path d="M0,70 C360,90 720,40 1080,80 C1260,100 1380,70 1440,60 L1440,100 L0,100 Z" fill="var(--primary)" fillOpacity="0.22" />
            </svg>
          </div>
        </section>

        {/* TERAPIAS SECTION */}
        <section id="terapias" className="terapias reveal" style={{ backgroundColor: 'var(--off-white)' }}>
          <div className="container">
            <h2 className="section-title">Mis servicios</h2>
            <p className="section-subtitle">Conoce mis áreas de especialidad y encuentra el apoyo que necesitas.</p>

            <div className="terapias-grid">
              <Link href="/terapias/infantil" className="therapy-card">
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/rec1.png`} alt="Terapia Infantil" className="therapy-image" />
                <div className="therapy-title-overlay">Terapia Infantil</div>
              </Link>
              <Link href="/terapias/adolescentes" className="therapy-card">
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/rec2.png`} alt="Terapia para Adolescentes" className="therapy-image" />
                <div className="therapy-title-overlay">Terapia para Adolescentes</div>
              </Link>
              <Link href="/terapias/adultos" className="therapy-card">
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/rec4.png`} alt="Terapia para Adultos" className="therapy-image" />
                <div className="therapy-title-overlay">Terapia para Adultos</div>
              </Link>
              <Link href="/terapias/pareja" className="therapy-card">
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/rec5.png`} alt="Terapia de Pareja" className="therapy-image" />
                <div className="therapy-title-overlay">Terapia de Pareja</div>
              </Link>
            </div>
          </div>
        </section>

        {/* EXPERIENCIAS SECTION */}
        <section id="experiencias" className="experiences" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container">
            <h2 className="section-title">Experiencias</h2>
            <p className="section-subtitle">Lo que dicen las personas que han confiado en mi proceso terapéutico.</p>

            <div className="experiences-grid">
              <div className="experience-card glass">
                <div className="stars">★★★★★</div>
                <p>"Zoraida tiene una conexión increíble con los niños. Mi hijo ha mejorado muchísimo en su gestión emocional gracias a ella."</p>
                <span className="experience-author">— Laura R.</span>
              </div>
              <div className="experience-card glass">
                <div className="stars">★★★★★</div>
                <p>"Como adolescente, me sentí escuchado y comprendido desde el primer momento. Me ha ayudado mucho con mis problemas de instituto."</p>
                <span className="experience-author">— Pablo M.</span>
              </div>
              <div className="experience-card glass">
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
