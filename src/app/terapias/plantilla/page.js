import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from 'next/link';

export const metadata = {
  title: "Nombre de la Terapia | Zoraida | Psicóloga en Granada",
  description: "Descripción breve de la terapia para SEO. Explica en qué consiste y para quién está recomendada.",
};

export default function TerapiaPlantillaPage() {
  return (
    <>
      <Header solid={true} />
      
      {/* Hero Section para la Terapia */}
      <main className="therapy-page fade-in">
        <section className="therapy-hero" style={{ 
          backgroundImage: 'linear-gradient(rgba(211, 152, 207, 0.4), rgba(211, 152, 207, 0.4)), linear-gradient(rgba(240, 235, 248, 0.7), rgba(240, 235, 248, 0.7)), url("/media/rec1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 'calc(80px + var(--header-height)) 5% 80px',
          textAlign: 'center' 
        }}>
          <div className="container">
            <h1 className="section-title" style={{ marginBottom: '15px' }}>Nombre de la Terapia</h1>
            <p className="section-subtitle" style={{ color: 'var(--text)', maxWidth: '800px', margin: '0 auto' }}>
              Descripción de cómo esta terapia puede ayudarte a mejorar tu bienestar y calidad de vida.
            </p>
          </div>
        </section>

        {/* Contenido Principal */}
        <section className="therapy-content padding-top" style={{ padding: '80px 0' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            
            {/* Bloque 1: Texto e Imagen */}
            <div className="therapy-grid-block reveal">
              <div className="therapy-text-content">
                <h2 className="therapy-block-title">¿En qué consiste?</h2>
                <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. 
                </p>
                <p style={{ marginBottom: '30px', lineHeight: '1.8' }}>
                  Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus velit ipsum, sit amet congue nisi pellentesque sit amet. Phasellus quis ipsum mattis, interdum sem in, semper libero.
                </p>
                <Link href="/contacto" className="btn btn-primary">
                  Solicitar cita
                </Link>
              </div>
              
              <div className="therapy-image-container glass">
                <img src="/media/rec10.png" alt="Sesión de terapia" className="therapy-block-image" />
              </div>
            </div>

            {/* Bloque 2: Beneficios (Imagen a la izquierda, Texto a la derecha) */}
            <div className="therapy-grid-block reveal">
              <div className="therapy-image-container glass">
                <img src="/media/rec11.png" alt="Detalle de consulta" className="therapy-block-image" />
              </div>

              <div className="therapy-text-content">
                <h2 className="therapy-block-title">Beneficios principales</h2>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li><strong>Lorem ipsum:</strong> dolor sit amet, consectetur adipiscing elit.</li>
                  <li><strong>Phasellus quis:</strong> ipsum mattis, interdum sem in, semper libero.</li>
                  <li><strong>Sed rhoncus:</strong> velit ipsum, sit amet congue nisi pellentesque sit amet.</li>
                  <li><strong>Duis pretium:</strong> gravida enim, vel maximus ligula fermentum a.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Llamada a la acción (CTA) */}
        <section className="therapy-cta" style={{ backgroundColor: 'var(--off-white)', padding: '80px 5%', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '600px' }}>
            <h2 style={{ color: 'var(--text)', marginBottom: '20px', fontSize: '2.2rem' }}>¿Crees que esta terapia es para ti?</h2>
            <p style={{ marginBottom: '30px', color: 'var(--text)', fontSize: '1.1rem' }}>
              Si tienes preguntas o te gustaría dar el primer paso, estaré encantada de escucharte y valorar tu caso sin compromiso.
            </p>
            <Link href="/contacto" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '15px 30px' }}>
              Pedir una cita ahora
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      
    </>
  );
}
