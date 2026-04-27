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
            <div className="brand-contact">
              <a href="tel:+34692642252">
                <img src={`${BASE}/media/PhoneIcon.png`} alt="" className="footer-icon" />
                +34 692 64 22 52
              </a>
              <a href="mailto:info@zoraidapsicologa.com">
                <img src={`${BASE}/media/MailIcon.png`} alt="" className="footer-icon" />
                info@zoraidapsicologa.com
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
          background-color: var(--soft-purple);
          border-top: 1px solid var(--primary-light);
          padding: 60px 0 30px;
          color: var(--text);
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
          color: var(--text);
          font-size: 0.95rem;
          margin-top: 5px;
          margin-bottom: 25px;
        }

        .brand-contact a {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
          color: var(--text);
          text-decoration: none;
          font-size: 0.95rem;
          transition: var(--transition);
        }

        .brand-contact a:hover {
          color: var(--primary);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 30px;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        .footer-links {
          margin-top: 10px;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-links a {
          color: var(--text-muted);
          text-decoration: none;
          margin: 0 5px;
        }
        
        .footer-links a:hover {
          color: var(--primary);
        }

        .footer-icon {
          width: 24px;
          height: 24px;
          object-fit: contain;
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
