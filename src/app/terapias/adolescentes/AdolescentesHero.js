'use client';

import Link from 'next/link';

export default function AdolescentesHero() {
  return (
    <section className="page-hero-split">
      <div className="hero-split-inner">
        {/* Columna izquierda */}
        <div className="hero-split-left">
          <Link href="/" className="hero-back-btn">
            <span style={{ marginRight: '8px' }}>←</span> Volver a especialidades
          </Link>
          <span className="hero-category">PSICOLOGÍA PARA JÓVENES</span>

          <h1 className="hero-split-title">
            Terapia para<br />
            <em>adolescentes</em>
          </h1>

          <p className="hero-split-desc">
            La adolescencia es uno de los mayores retos para nuestros jóvenes. Una gran revolución a nivel emocional y comportamental que muchas veces necesita un acompañamiento psicológico.
          </p>

          <div className="hero-split-ctas">
            <Link href="/contacto" className="btn-hero-primary">
              Pedir cita
            </Link>
          </div>
        </div>

        {/* Columna derecha: imagen */}
        <div className="hero-split-right">
          <div className="hero-img-wrapper">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/rec11.png`}
              alt="Terapia para adolescentes en Granada"
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
          min-height: 100vh;
          background-color: #EBF4F5;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-split-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 100px 40px 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-split-left {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .hero-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #2C3E50;
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 50px;
          padding: 10px 20px;
          width: fit-content;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .hero-back-btn:hover {
          background: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .hero-category {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--accent);
          text-transform: uppercase;
        }

        .hero-split-title {
          font-family: 'Sabon', 'EB Garamond', serif;
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          font-weight: 600;
          line-height: 1.1;
          color: #1a2e35;
          margin: 0;
        }

        .hero-split-title em {
          font-style: italic;
          color: var(--accent);
        }

        .hero-split-desc {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #3a4a50;
          max-width: 480px;
          margin: 0;
        }

        .hero-split-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 8px;
        }

        :global(.btn-hero-primary) {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 8px !important;
          padding: 14px 28px !important;
          background-color: #B275AF !important; /* var(--accent) */
          color: white !important;
          border-radius: 50px !important;
          font-size: 0.95rem !important;
          font-weight: 500 !important;
          text-decoration: none !important;
          transition: all 0.2s ease !important;
          width: fit-content !important;
          box-shadow: 0 4px 14px rgba(178, 117, 175, 0.25) !important;
        }

        :global(.btn-hero-primary:hover) {
          background-color: #9b5a98 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(178, 117, 175, 0.4) !important;
        }

        .btn-hero-secondary {
          display: inline-flex;
          align-items: center;
          padding: 14px 28px;
          background-color: white;
          color: #2C3E50;
          border: 1.5px solid rgba(0,0,0,0.15);
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-hero-secondary:hover {
          background-color: #f8f8f8;
          border-color: rgba(0,0,0,0.25);
          transform: translateY(-2px);
        }

        .hero-split-right {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-img-wrapper {
          width: 100%;
          max-width: 540px;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
        }

        .hero-split-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 768px) {
          .hero-split-inner {
            grid-template-columns: 1fr;
            padding: 100px 24px 60px;
            gap: 40px;
          }

          .hero-split-right {
            order: -1;
          }

          .hero-img-wrapper {
            max-width: 100%;
          }

          .hero-split-img {
            height: 280px;
          }
        }
      `}</style>
    </section>
  );
}
