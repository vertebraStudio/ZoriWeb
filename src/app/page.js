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
        <section id="sobre-mi" className="about reveal">
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
        </section>

        {/* TRAYECTORIA SECTION */}
        <section id="trayectoria" className="trayectoria reveal" style={{ backgroundColor: 'var(--off-white)' }}>
          <div className="container">
            <div className="about-grid">
              <div className="about-content" style={{ textAlign: 'left', justifyContent: 'center' }}>
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>Mi trayectoria</h2>
                <p>
                  Me gradué en Psicología por la Universidad de Granada (UGR) y continué mi especialización con el Máster en Psicología General Sanitaria (UAL) en la Universidad de Almería, con especial énfasis en Psicología Clínica y Neuropsicológica.
                </p>
                <p>
                  Además colaboré con la universidad en su propia clínica psicológica y realicé una beca de atención a la diversidad funcional. He trabajado en Madrid en una clínica multidisciplinar, en Granada en la clínica donde realicé las prácticas y ahora estoy en Granada capital.
                </p>
              </div>
              <div className="milestones-grid">
                <div className="milestone-card glass">
                  <span className="milestone-icon">🎓</span>
                  <h4>Grado Psicología</h4>
                  <p>Universidad de Granada</p>
                </div>
                <div className="milestone-card glass">
                  <span className="milestone-icon">📚</span>
                  <h4>Máster Sanitario</h4>
                  <p>Univ. de Almería</p>
                </div>
                <div className="milestone-card glass">
                  <span className="milestone-icon">🧠</span>
                  <h4>Especialidad</h4>
                  <p>Clínica y Neuropsicológica</p>
                </div>
                <div className="milestone-card glass">
                  <span className="milestone-icon">📍</span>
                  <h4>Experiencia</h4>
                  <p>Madrid & Granada</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MI TERAPIA SECTION */}
        <section id="mi-terapia" className="mi-terapia reveal">
          <div className="container">
            <div className="therapy-intro-grid">
              <div className="therapy-text">
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>Mi terapia</h2>
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
        </section>

        {/* TERAPIAS SECTION */}
        <section id="terapias" className="terapias reveal">
          <div className="container">
            <h2 className="section-title">Nuestros servicios</h2>
            <p className="section-subtitle">Conoce nuestras áreas de especialidad y encuentra el apoyo que necesitas.</p>

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
        <section id="experiencias" className="experiences" style={{ backgroundColor: 'var(--off-white)' }}>
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
