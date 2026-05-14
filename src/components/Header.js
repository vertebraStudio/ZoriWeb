'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header({ solid = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`header ${isScrolled || solid ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <div className="logo">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/ZoriLogo2.png`} 
              alt="Zoraida Psicóloga" 
              className="logo-desktop"
              style={{ height: '55px', width: 'auto' }} 
            />
            <img 
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/ZoriLogo.png`} 
              alt="Zoraida Psicóloga" 
              className="logo-mobile"
              style={{ height: '38px', width: 'auto' }} 
            />
          </Link>
        </div>
               <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
            <li><Link href="/#sobre-mi" onClick={() => setIsMenuOpen(false)}>Sobre mí</Link></li>
            <li className="has-dropdown">
              <Link href="/#terapias" className="dropdown-trigger" onClick={() => setIsMenuOpen(false)}>
                Terapias <span className="arrow">▾</span>
              </Link>
              <div className="dropdown-card">
                <div className="dropdown-inner">
                  <Link href="/terapias/adultos" onClick={() => setIsMenuOpen(false)}>Psicología para adultos</Link>
                  <Link href="/terapias/infantil" onClick={() => setIsMenuOpen(false)}>Psicología infantil</Link>
                  <Link href="/terapias/adolescentes" onClick={() => setIsMenuOpen(false)}>Psicología para adolescentes</Link>
                </div>
              </div>
            </li>
            <li><Link href="/#experiencias" onClick={() => setIsMenuOpen(false)}>Experiencias</Link></li>
            <li><Link href="/#faq" onClick={() => setIsMenuOpen(false)}>Preguntas frecuentes</Link></li>
            <li><Link href="/contacto" onClick={() => setIsMenuOpen(false)}>Contacto</Link></li>
            <li className="mobile-cta">
               <Link href="/contacto" className="btn-cta" onClick={() => setIsMenuOpen(false)}>Pedir cita</Link>
            </li>
          </ul>
        </nav>

        <div className="cta desktop-cta">
          <Link href="/contacto" className="btn-cta">Pedir cita</Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menú">
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 16px 24px;
          transition: var(--transition);
        }

        .header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 50px;
          padding: 10px 20px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.6);
          transition: var(--transition);
        }

        .header.scrolled .header-inner {
          box-shadow: 0 6px 30px rgba(0, 0, 0, 0.12);
          background: rgba(255, 255, 255, 0.98);
        }

        .nav ul {
          display: flex;
          gap: 36px;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav a {
          font-weight: 500;
          color: var(--text);
          font-size: 0.95rem;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: color 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .nav a:hover {
          color: var(--primary);
        }

        .arrow {
          font-size: 0.7rem;
          opacity: 0.6;
          transition: transform 0.3s ease;
        }

        /* Dropdown Styles */
        .has-dropdown {
          position: relative;
        }

        .dropdown-card {
          position: absolute;
          top: calc(100% + 30px);
          left: 50%;
          transform: translateX(-50%) translateY(-10px);
          width: 280px;
          background: white;
          border-radius: 20px;
          padding: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.12);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1001;
        }

        .dropdown-card::before {
          content: '';
          position: absolute;
          top: -40px; /* Larger bridge for the larger gap */
          left: 0;
          right: 0;
          height: 50px;
          background: transparent;
        }

        .has-dropdown:hover .dropdown-card {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .has-dropdown:hover .arrow {
          transform: rotate(180deg);
          color: var(--primary);
        }

        .dropdown-inner {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .dropdown-inner :global(a) {
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 0.9rem !important;
          color: #4A5568 !important;
          transition: all 0.2s ease;
          display: block !important;
          white-space: normal !important;
          line-height: 1.4 !important;
          font-weight: 400 !important;
        }

        .dropdown-inner :global(a:hover) {
          background-color: var(--soft-purple);
          color: var(--accent) !important;
          padding-left: 20px !important;
        }

        :global(.btn-cta) {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 10px 24px !important;
          border-radius: 50px !important;
          background-color: #B275AF !important;
          color: white !important;
          font-weight: 500 !important;
          font-size: 0.95rem !important;
          text-decoration: none !important;
          transition: all 0.3s ease !important;
          white-space: nowrap !important;
        }

        :global(.btn-cta:hover) {
          background-color: #9b5a98 !important;
          box-shadow: 0 4px 14px rgba(178, 117, 175, 0.3) !important;
        }

        .mobile-cta { display: none; }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1001;
          padding: 4px;
        }

        .bar {
          width: 22px;
          height: 2px;
          background-color: var(--text);
          border-radius: 2px;
          transition: var(--transition);
        }

        .bar.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .bar.open:nth-child(2) { opacity: 0; }
        .bar.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        @media (max-width: 900px) {
          .header {
            padding: 12px 16px;
          }

          .header-inner {
            border-radius: 24px;
            padding: 8px 16px;
            position: relative;
          }

          .nav {
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            right: 0;
            width: 100%;
            max-height: 0;
            overflow: hidden;
            background: white;
            transition: all 0.4s ease-in-out;
            display: flex;
            flex-direction: column;
            border-radius: 20px;
            box-shadow: none;
            border: none;
          }

          .nav-open {
            max-height: 80vh;
            overflow-y: auto;
            padding: 20px 24px 24px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(0, 0, 0, 0.05);
          }

          .nav ul {
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
            width: 100%;
          }

          .dropdown-card {
            position: static;
            transform: none;
            width: 100%;
            opacity: 1;
            visibility: visible;
            box-shadow: none;
            padding: 0;
            margin-top: 10px;
            display: block;
          }

          .dropdown-inner :global(a) {
            padding: 8px 0;
          }

          .nav a { font-size: 1.1rem; }

          .menu-toggle { display: flex; }
          .desktop-cta { display: none; }
          .mobile-cta { display: block; }
        }
      `}</style>
    </header>
  );
}
