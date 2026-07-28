'use client';

import Link from 'next/link';

export default function Footer() {
  const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <footer className="footer-global">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={`${BASE}/media/ZoriLogoFooter.png`} alt="Zoraida Psicóloga" className="footer-logo" />
            <p className="subtitle">Especialista en psicología infantil, adolescentes y adultos.</p>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap', marginTop: '5px' }}>
              <span style={{ fontSize: '0.78rem', letterSpacing: '0.5px', fontWeight: 600, padding: '4px 12px', borderRadius: '50px', background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.3)', color: 'rgba(255, 255, 255, 0.85)' }}>
                Nº Colegiada AO-12108
              </span>
              <span style={{ fontSize: '0.78rem', letterSpacing: '0.5px', fontWeight: 600, padding: '4px 12px', borderRadius: '50px', background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.3)', color: 'rgba(255, 255, 255, 0.85)' }}>
                NICA 59834
              </span>
            </div>
          </div>

          <div className="footer-nav-col">
            <h3 className="footer-title-styled">Web</h3>
            <ul className="footer-nav-links">
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/#sobre-mi">Sobre mí</Link></li>
              <li><Link href="/#terapias">Terapias</Link></li>
              <li><Link href="/#experiencias">Experiencias</Link></li>
              <li><Link href="/#faq">Preguntas frecuentes</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact-col">
            <h3 className="footer-title-styled">Contacto</h3>
            <div className="brand-contact">
              <a href="tel:+34692642252">
                <img src={`${BASE}/media/PhoneIcon.png`} alt="" className="footer-icon" />
                +34 692 64 22 52
              </a>
              <a href="mailto:zoripsico@gmail.com">
                <img src={`${BASE}/media/MailIcon.png`} alt="" className="footer-icon" />
                zoripsico@gmail.com
              </a>
              <a href="https://www.instagram.com/zoripsico/" target="_blank" rel="noopener noreferrer">
                <img src={`${BASE}/media/IgIcon.png`} alt="" className="footer-icon" />
                Instagram
              </a>
            </div>
          </div>

          <div className="footer-legal-col">
            <h3 className="footer-title-styled">Legal</h3>
            <div className="footer-legal-links">
              <Link href="/aviso-legal">Aviso Legal</Link>
              <Link href="/politica-privacidad">Política de Privacidad</Link>
              <Link href="/politica-cookies">Política de Cookies</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-flex">
            <p>&copy; {new Date().getFullYear()} Zoraida - Psicóloga en Granada. Todos los derechos reservados.</p>
            <p className="credit-text">
              Sitio web creado por <a href="https://vertebrastudio.es" target="_blank" rel="noopener noreferrer" className="credit-link">Vertebra Studio</a>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-bottom-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          width: 100%;
        }

        .footer-bottom-flex p {
          margin: 0;
        }

        .credit-link {
          color: rgba(255, 255, 255, 0.8) !important; /* Lighter / clearer */
          text-decoration: none !important; /* Removed underline */
          font-weight: 500 !important;
          transition: var(--transition) !important;
        }

        .credit-link:hover {
          color: var(--primary) !important;
          text-decoration: none !important;
        }

        .footer-global {
          background-color: #0E525D;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 60px 0 35px;
          color: white;
        }

        .container {
          padding: 0 80px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1.3fr 0.8fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .footer-logo {
          height: 60px;
          width: auto;
          margin-bottom: 20px;
        }

        .subtitle {
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.92rem;
          margin-top: 5px;
          margin-bottom: 18px;
          max-width: 400px;
          line-height: 1.6;
        }

        .footer-nav-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .footer-nav-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0;
          margin: 0;
        }

        .footer-nav-links li {
          list-style: none;
        }

        .footer-nav-links :global(a) {
          color: rgba(255, 255, 255, 0.65) !important;
          font-size: 0.82rem !important;
          text-decoration: none !important;
          transition: var(--transition) !important;
        }

        .footer-nav-links :global(a:hover) {
          color: var(--primary) !important;
        }

        .footer-contact-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .footer-legal-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .footer-title-styled {
          font-size: 0.88rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 20px;
          font-family: var(--font-sans), 'Inter', sans-serif;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .brand-contact {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .brand-contact :global(a) {
          display: flex !important;
          align-items: center !important;
          gap: 10px !important;
          color: rgba(255, 255, 255, 0.65) !important;
          text-decoration: none !important;
          font-size: 0.82rem !important;
          transition: var(--transition) !important;
        }

        .brand-contact :global(a:hover) {
          color: var(--primary) !important;
        }

        .footer-legal-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-legal-links :global(a) {
          color: rgba(255, 255, 255, 0.65) !important;
          font-size: 0.82rem !important;
          text-decoration: none !important;
          transition: var(--transition) !important;
        }

        .footer-legal-links :global(a:hover) {
          color: var(--primary) !important;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .footer-icon {
          width: 18px;
          height: 18px;
          object-fit: contain;
          filter: brightness(0) invert(1); /* Force icons to be white */
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .brand-contact a:hover .footer-icon {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 24px;
          }
          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: left;
          }
          .footer-brand {
            align-items: flex-start;
            text-align: left;
          }
          .footer-nav-col {
            align-items: flex-start;
            text-align: left;
          }
          .footer-contact-col {
            align-items: flex-start;
            text-align: left;
          }
          .footer-legal-col {
            align-items: flex-start;
            text-align: left;
          }
          .footer-nav-links {
            align-items: flex-start;
          }
          .footer-nav-links a:hover {
            padding-left: 0;
          }
          .brand-contact {
            align-items: flex-start;
          }
          .brand-contact a:hover {
            transform: none;
          }
          .footer-legal-links {
            align-items: flex-start;
          }
          .footer-legal-links a:hover {
            padding-left: 0;
          }
          .footer-bottom {
            text-align: left;
          }
        }
      `}</style>
    </footer>
  );
}
