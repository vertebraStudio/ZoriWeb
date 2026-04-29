import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contacto | Zoraida | Psicóloga en Granada",
  description: "Ponte en contacto con Zoraida, psicóloga en Granada. Solicita tu primera cita o resuelve tus dudas a través de mi formulario o información de contacto.",
};

export default function ContactoPage() {
  return (
    <>
      <Header solid={true} />
      <main className="contact-page fade-in">
        <section className="contact-hero page-hero" style={{ 
          backgroundImage: `linear-gradient(rgba(211, 152, 207, 0.45), rgba(211, 152, 207, 0.45)), url("${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/rec7.png")`
        }}>
          <div className="container">
            <h1 className="section-title" style={{ marginBottom: '15px' }}>Contacto</h1>
            <p className="section-subtitle" style={{ color: 'var(--text)', maxWidth: '800px', margin: '0 auto' }}>
              ¿Damos el primer paso? Estoy aquí para escucharte y ayudarte.
            </p>
          </div>
        </section>
        <section className="contact padding-top" style={{ paddingTop: '60px' }}>
          <div className="container">
            <div className="contact-container">
              {/* Formulario */}
              <form className="contact-form glass">
                <div className="form-group">
                  <label htmlFor="name">Nombre completo</label>
                  <input type="text" id="name" placeholder="Tu nombre" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input type="email" id="email" placeholder="Tu email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Teléfono de contacto</label>
                  <input type="tel" id="phone" placeholder="Tu teléfono" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">¿En qué puedo ayudarte?</label>
                  <textarea id="message" placeholder="Escribe aquí tu mensaje..." rows="5" required></textarea>
                </div>
                <button type="submit" className="btn full-width">Enviar mensaje</button>
              </form>
              
              {/* Información y Mapa */}
              <div className="contact-info">
                <div className="info-card glass">
                  <h3>Ubicación y Datos</h3>
                  <p>Mi consulta se encuentra en la zona de Ronda, en Granada, un entorno accesible y diseñado para ofrecerte la máxima tranquilidad.</p>
                  <ul>
                    <li>
                      <span className="icon">📍</span> 
                      <span>C. Pintor Zuloaga, 3, local 2, 18005 Granada</span>
                    </li>
                    <li>
                      <span className="icon">📞</span> 
                      <a href="tel:+34692642252">+34 692 64 22 52</a>
                    </li>
                    <li>
                      <span className="icon">✉️</span> 
                      <a href="mailto:info@zoraidapsicologa.com">info@zoraidapsicologa.com</a>
                    </li>
                    <li>
                      <span className="icon">⏰</span> 
                      <span>Lunes a Viernes: 09:00 - 20:00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="location-section padding-top" style={{ paddingBottom: '60px' }}>
          <div className="container">
            <h2 className="section-title">¿Cómo llegar a la consulta?</h2>
            <div className="large-map-wrapper glass">
               <iframe 
                 src="https://maps.google.com/maps?q=Zoraida%20psicol%C3%B3loga%20Granada,%20C.%20Pintor%20Zuloaga,%203,%20local%202,%20Ronda,%2018005%20Granada&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen="" 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
