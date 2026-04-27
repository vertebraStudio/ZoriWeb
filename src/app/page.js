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
        <section id="sobre-mi" className="about">
          <div className="container">
            <h2 className="section-title">Sobre mí</h2>
            <p className="section-subtitle">Conoce mi enfoque y trayectoria profesional en el ámbito de la salud mental.</p>
            
            <div className="about-grid">
              <div className="about-image">
                {/* Optional: Add an actual image here later */}
              </div>
              <div className="about-content">
                <h3>Directa, empática y profesional</h3>
                <p>Soy Zoraida, psicóloga colegiada en Granada. Mi labor se centra en ofrecer un espacio seguro y especializado para el crecimiento emocional de niños, adolescentes y adultos.</p>
                <p>Entiendo que cada etapa vital tiene sus propios desafíos. Por ello, adapto mi metodología para trabajar de forma efectiva tanto en el desarrollo infantil y juvenil como en las problemáticas propias de la adultez, siempre desde una base científica y humana.</p>
                <ul style={{marginTop: '20px', listStyle: 'disc', paddingLeft: '20px'}}>
                  <li>Psicología Infantil y Juvenil.</li>
                  <li>Terapia para Adultos.</li>
                  <li>Especialista en Gestión Emocional y Ansiedad.</li>
                  <li>Consulta en zona Ronda, Granada.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TERAPIAS SECTION */}
        <section id="terapias" className="terapias">
          <div className="container">
            <h2 className="section-title">Nuestros servicios</h2>
            <p className="section-subtitle">Conoce nuestras áreas de especialidad y encuentra el apoyo que necesitas.</p>
            
            <div className="terapias-grid">
              <Link href="#" className="therapy-card">
                <div className="therapy-image-placeholder"></div>
                <div className="therapy-title-overlay">Terapia Infantil</div>
              </Link>
              <Link href="#" className="therapy-card">
                <div className="therapy-image-placeholder"></div>
                <div className="therapy-title-overlay">Terapia para Adolescentes</div>
              </Link>
              <Link href="#" className="therapy-card">
                <div className="therapy-image-placeholder"></div>
                <div className="therapy-title-overlay">Terapia para Adultos</div>
              </Link>
              <Link href="#" className="therapy-card">
                <div className="therapy-image-placeholder"></div>
                <div className="therapy-title-overlay">Terapia de Pareja</div>
              </Link>
            </div>
          </div>
        </section>

        {/* EXPERIENCIAS SECTION */}
        <section id="experiencias" className="experiences" style={{backgroundColor: 'var(--off-white)'}}>
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
