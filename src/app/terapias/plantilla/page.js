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
      <Header />
      
      {/* Hero Section para la Terapia */}
      <main className="therapy-page fade-in">
        <section className="therapy-hero" style={{ 
          backgroundColor: 'var(--soft-purple)', 
          padding: 'calc(60px + var(--header-height)) 5% 60px',
          textAlign: 'center' 
        }}>
          <div className="container">
            <h1 className="section-title" style={{ marginBottom: '15px' }}>Nombre de la Terapia</h1>
            <p className="section-subtitle" style={{ color: 'var(--text)', maxWidth: '800px', margin: '0 auto' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </section>

        {/* Contenido Principal */}
        <section className="therapy-content padding-top" style={{ padding: '60px 0' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            
            {/* Bloque 1: Texto e Imagen */}
            <div className="content-block" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '40px', alignItems: 'center' }}>
              <div>
                <h2 style={{ color: 'var(--text)', marginBottom: '20px', fontSize: '2rem' }}>¿En qué consiste?</h2>
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
              
              {/* Placeholder Imagen 1 */}
              <div className="image-placeholder glass" style={{
                height: '350px',
                width: '100%',
                borderRadius: '15px',
                backgroundColor: 'var(--primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                fontWeight: '600',
                border: '2px dashed var(--accent)'
              }}>
                [ Placeholder Foto 1: Sesión de Terapia ]
              </div>
            </div>

            {/* Bloque 2: Beneficios (Imagen a la izquierda, Texto a la derecha) */}
            <div className="content-block reverse" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '40px', alignItems: 'center' }}>
              {/* Placeholder Imagen 2 */}
              <div className="image-placeholder glass" style={{
                height: '350px',
                width: '100%',
                borderRadius: '15px',
                backgroundColor: 'var(--primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                fontWeight: '600',
                border: '2px dashed var(--accent)',
                order: -1
              }}>
                [ Placeholder Foto 2: Detalle o metáfora ]
              </div>

              <div>
                <h2 style={{ color: 'var(--text)', marginBottom: '20px', fontSize: '2rem' }}>Beneficios principales</h2>
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
