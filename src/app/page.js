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
                <h3>¡Hola! Soy Zoraida, aunque puedes llamarme Zori</h3>
                <p>Soy psicóloga especializada en infancia, adolescencia, jóvenes, adultos y familias. Me considero una persona sensible, algo que valoro profundamente en mi trabajo, porque creo que sentir y comprender nuestras emociones con intensidad nos permite vivir, conocer y conectar mejor con la persona que tengo delante. Como dice Miriam Tirado, es un súper poder.</p>
                <p>Los pacientes valoran de mí que trasmito calma, comprensión sin juicios, atención plena y creatividad. Además, suelen mencionar que mis terapias son distendidas, donde se ríe y se llora cada vez que es necesario.</p>
                <p>Me apasionan los momentos de calma, las conversaciones profundas, el deporte y la naturaleza. Los animales y las plantas forman parte esencial de mi vida. Además, valoro las relaciones interpersonales sanas que mantengo con amigos, familia...</p>
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
