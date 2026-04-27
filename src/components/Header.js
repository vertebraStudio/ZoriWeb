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
    <header className={`header glass ${isScrolled || solid ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/ZoriLogo2.png`} 
              alt="Zoraida Psicóloga" 
              className="logo-desktop"
              style={{ height: '65px', width: 'auto' }} 
            />
            <img 
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/ZoriLogo.png`} 
              alt="Zoraida Psicóloga" 
              className="logo-mobile"
              style={{ height: '40px', width: 'auto' }} 
            />
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
            <li><Link href="/#sobre-mi" onClick={() => setIsMenuOpen(false)}>Sobre mí</Link></li>
            <li><Link href="/terapias/plantilla" onClick={() => setIsMenuOpen(false)}>Terapias</Link></li>
            <li><Link href="/contacto" onClick={() => setIsMenuOpen(false)}>Contacto</Link></li>
            <li className="mobile-cta">
               <Link href="/contacto" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Pedir Cita</Link>
            </li>
          </ul>
        </nav>

        <div className="cta desktop-cta">
          <Link href="/contacto" className="btn btn-primary">Pedir Cita</Link>
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
          padding: 15px 0;
          transition: var(--transition);
        }

        .header.scrolled {
          padding: 10px 0;
          box-shadow: var(--shadow);
          background: white;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 40px;
          max-width: 1440px;
          margin: 0 auto;
        }

        .logo a {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
        }

        .nav ul {
          display: flex;
          gap: 45px;
          align-items: center;
        }

        .nav a {
          font-weight: 600;
          color: var(--text-color);
          font-size: 1rem;
          text-decoration: none;
        }

        .nav a:hover {
          color: var(--primary);
        }

        .btn {
          box-shadow: none;
        }

        .mobile-cta { display: none; }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1001;
        }

        .bar {
          width: 25px;
          height: 2px;
          background-color: var(--primary);
          transition: var(--transition);
        }

        .bar.open:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .bar.open:nth-child(2) { opacity: 0; }
        .bar.open:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        @media (max-width: 900px) {
          .nav {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 100%;
            background: white;
            transition: var(--transition);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .nav-open {
            right: 0;
          }

          .nav ul {
            flex-direction: column;
            gap: 30px;
          }

          .nav a { font-size: 1.5rem; }

          .menu-toggle { display: flex; }
          .desktop-cta { display: none; }
          .mobile-cta { display: block; }
        }
      `}</style>
    </header>
  );
}
