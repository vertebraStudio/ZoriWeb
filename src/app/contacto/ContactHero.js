'use client';

import Link from 'next/link';

export default function ContactHero() {
  return (
    <section className="page-hero-split">
      <div className="hero-split-inner">
        {/* Columna izquierda */}
        <div className="hero-split-left">
          <Link href="/" className="hero-back-btn">
            <span style={{ marginRight: '8px' }}>←</span> Volver al inicio
          </Link>
          <span className="hero-category">CONTACTO</span>

          <h1 className="hero-split-title">
            Hablemos<br />
            <em>sin compromiso</em>
          </h1>

          <p className="hero-split-desc">
            Dar el primer paso puede generar dudas. Estoy aquí para acompañarte desde el primer momento; elige la vía que te resulte más cómoda para escribirme o resolver tus inquietudes.
          </p>
        </div>

        {/* Columna derecha: imagen compacta */}
        <div className="hero-split-right">
          <div className="hero-img-wrapper">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/rec6.png`}
              alt="Consulta de Zoraida, psicóloga en Granada"
              className="hero-split-img"
            />
          </div>
        </div>
      </div>

      {/* Ola decorativa inferior */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', lineHeight: 0, pointerEvents: 'none', zIndex: 1 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '80px' }}>
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="var(--primary)" fillOpacity="0.18" />
          <path d="M0,55 C360,10 720,80 1080,30 C1260,10 1380,50 1440,55 L1440,80 L0,80 Z" fill="var(--primary)" fillOpacity="0.30" />
        </svg>
      </div>

      <style jsx>{`
        .page-hero-split {
          position: relative;
          width: 100%;
          min-height: auto;
          background-color: #EBF4F5;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-top: 150px; /* Space for the floating header */
          padding-bottom: 70px;
        }

        .hero-split-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }

        .hero-split-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .hero-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #2C3E50;
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 50px;
          padding: 8px 16px;
          width: fit-content;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .hero-back-btn:hover {
          background: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        }

        .hero-category {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--accent);
          text-transform: uppercase;
        }

        .hero-split-title {
          font-family: 'Sabon', 'EB Garamond', serif;
          font-size: clamp(2.4rem, 4vw, 3.6rem);
          font-weight: 600;
          line-height: 1.15;
          color: #1a2e35;
          margin: 0;
        }

        .hero-split-title em {
          font-style: italic;
          color: var(--accent);
        }

        .hero-split-desc {
          font-size: 1rem;
          line-height: 1.7;
          color: #4a5a60;
          max-width: 460px;
          margin: 0;
        }

        .hero-split-right {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-img-wrapper {
          width: 100%;
          max-width: 440px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 45px rgba(0,0,0,0.08);
        }

        .hero-split-img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 768px) {
          .page-hero-split {
            padding-top: 120px;
            padding-bottom: 50px;
          }

          .hero-split-inner {
            grid-template-columns: 1fr;
            padding: 0 24px;
            gap: 30px;
          }

          .hero-split-right {
            order: -1;
          }

          .hero-img-wrapper {
            max-width: 100%;
          }

          .hero-split-img {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
}
