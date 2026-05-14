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
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Nº colegiada AO-12108 | NICA 63321
            </div>
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
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Zoraida - Psicóloga en Granada. Todos los derechos reservados.</p>
          <div className="footer-links">
            <a href="#">Aviso Legal</a> | <a href="#">Política de Privacidad</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-global {
          background-color: #0E525D;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 60px 0 30px;
          color: white;
        }

        .container {
          padding: 0 80px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.95rem;
          margin-top: 5px;
          margin-bottom: 15px;
        }

        .brand-contact a {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 0.95rem;
          transition: var(--transition);
        }

        .brand-contact a:hover {
          color: var(--primary);
          transform: translateX(5px);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-links {
          margin-top: 10px;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          margin: 0 5px;
        }
        
        .footer-links a:hover {
          color: white;
        }

        .footer-icon {
          width: 24px;
          height: 24px;
          object-fit: contain;
          filter: brightness(0) invert(1); /* Force icons to be white */
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }
          .footer-content {
            text-align: center;
          }
          .brand-contact a {
            justify-content: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
