'use client';

import Link from 'next/link';

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero-inner">

        {/* Columna izquierda */}
        <div className="home-hero-left">
          <span className="home-hero-category">PSICÓLOGA EN GRANADA</span>

          <h1 className="home-hero-title">
            Hola, soy<br />
            <em>Zoraida</em>
          </h1>

          <p className="home-hero-desc">
            Especialista en psicología infantil, adolescentes y adultos. Te acompaño a entender lo que sientes y a encontrar herramientas para vivir con más calma y bienestar.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '-8px', lineHeight: '1.6' }}>
            Consulta de psicología en <strong>Granada</strong> y <strong>terapia online</strong> desde cualquier punto de España.
          </p>

          <div className="home-hero-ctas">
            <Link href="/contacto" className="home-btn-primary">
              Pedir cita
            </Link>
            <Link href="/#sobre-mi" className="home-btn-secondary">
              Conóceme →
            </Link>
          </div>

          {/* Badges */}
          <div className="home-hero-badges">
            <span className="home-badge">🌿 Infantil</span>
            <span className="home-badge">✦ Adolescentes</span>
            <span className="home-badge">◎ Adultos</span>
            <span className="home-badge">💻 Online y presencial</span>
          </div>
        </div>

        {/* Columna derecha: imagen */}
        <div className="home-hero-right">
          <div className="home-hero-img-wrapper">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/ProfilePic.jpg`}
              alt="Zoraida, psicóloga en Granada"
              className="home-hero-img"
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
        .home-hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(225deg, #f2fafa 0%, #EBF4F5 100%);
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .home-hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 120px 40px 100px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .home-hero-left {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .home-hero-category {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--accent);
          text-transform: uppercase;
        }

        .home-hero-title {
          font-family: 'Sabon', 'EB Garamond', serif;
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 400;
          line-height: 1.05;
          color: #1a2e35;
          margin: 0;
        }

        .home-hero-title em {
          font-style: italic;
          color: var(--accent);
        }

        .home-hero-desc {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #3a4a50;
          max-width: 480px;
          margin: 0;
        }

        .home-hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 4px;
        }

        :global(.home-btn-primary) {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 14px 30px !important;
          background-color: #B275AF !important;
          color: white !important;
          border-radius: 50px !important;
          font-size: 1rem !important;
          font-weight: 500 !important;
          text-decoration: none !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 4px 14px rgba(178, 117, 175, 0.25) !important;
        }

        :global(.home-btn-primary:hover) {
          background-color: #9b5a98 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 20px rgba(178, 117, 175, 0.35) !important;
        }

        :global(.home-btn-secondary) {
          display: inline-flex !important;
          align-items: center !important;
          gap: 6px !important;
          padding: 14px 28px !important;
          background-color: rgba(255,255,255,0.8) !important;
          color: #1a2e35 !important;
          border-radius: 50px !important;
          border: 1.5px solid rgba(0,0,0,0.1) !important;
          font-size: 1rem !important;
          font-weight: 500 !important;
          text-decoration: none !important;
          transition: all 0.3s ease !important;
        }

        :global(.home-btn-secondary:hover) {
          background-color: white !important;
          box-shadow: 0 4px 14px rgba(0,0,0,0.08) !important;
        }

        .home-hero-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 8px;
        }

        .home-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 50px;
          font-size: 0.82rem;
          color: #3a4a50;
          font-weight: 500;
          backdrop-filter: blur(4px);
        }

        /* Columna derecha */
        .home-hero-right {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .home-hero-img-wrapper {
          position: relative;
          width: 100%;
          max-width: 440px; /* Reduced width for arch look */
        }

        .home-hero-img {
          width: 100%;
          height: 580px;
          object-fit: cover;
          object-position: top;
          border-radius: 250px 250px 28px 28px; /* Arch shape */
          display: block;
          box-shadow: 0 24px 60px rgba(0,0,0,0.14);
        }

        /* Tarjeta flotante */
        .home-hero-float-card {
          position: absolute;
          bottom: 28px;
          left: -20px;
          background: white;
          border-radius: 14px;
          padding: 12px 18px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          font-weight: 500;
          color: #1a2e35;
          animation: float 3s ease-in-out infinite;
        }

        .float-card-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #4CAF50;
          flex-shrink: 0;
          box-shadow: 0 0 0 3px rgba(76,175,80,0.2);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .home-hero-inner {
            grid-template-columns: 1fr;
            padding: 20px 24px 80px;
            gap: 40px;
          }

          .home-hero-right {
            order: -1;
          }

          .home-hero-img {
            height: 340px;
          }

          .home-hero-float-card {
            left: 10px;
            bottom: 16px;
          }
        }
      `}</style>
    </section>
  );
}
