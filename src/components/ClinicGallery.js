'use client';

import { useState, useEffect, useRef } from 'react';

const placeholders = [
  { id: 1, color: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)', text: 'Sala de Consulta 1' },
  { id: 2, color: 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)', text: 'Recepción' },
  { id: 3, color: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)', text: 'Sala de Espera' },
  { id: 4, color: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)', text: 'Detalle de la consulta' }
];

export default function ClinicGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + placeholders.length) % placeholders.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  return (
    <section id="galeria" className="gallery" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="container">
        <h2 className="section-title">Nuestra Consulta</h2>
        <p className="section-subtitle">Un espacio diseñado para tu bienestar y tranquilidad en el centro de Granada.</p>
        
        <div className="carousel-wrapper">
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Anterior">‹</button>
          
          <div className="carousel-inner">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {placeholders.map((item) => (
                <div key={item.id} className="carousel-slide">
                  <div className="placeholder-image" style={{ background: item.color }}>
                    <span>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn next" onClick={nextSlide} aria-label="Siguiente">›</button>

          <div className="carousel-dots">
            {placeholders.map((_, index) => (
              <button 
                key={index} 
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir a diapositiva ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .gallery {
          background-color: var(--white);
          overflow: hidden;
        }

        .carousel-wrapper {
          position: relative;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        .carousel-inner {
          overflow: hidden;
          border-radius: 20px;
          box-shadow: var(--shadow);
          aspect-ratio: 16 / 9;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.8s cubic-bezier(0.45, 0, 0.55, 1);
          height: 100%;
        }

        .carousel-slide {
          min-width: 100%;
          height: 100%;
        }

        .placeholder-image {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          color: var(--text-muted);
          font-size: 1.2rem;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: var(--glass);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 2rem;
          cursor: pointer;
          z-index: 10;
          color: var(--primary);
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-btn:hover {
          background: var(--primary);
          color: var(--white);
        }

        .prev { left: -25px; }
        .next { right: -25px; }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ddd;
          border: none;
          cursor: pointer;
          transition: var(--transition);
        }

        .dot.active {
          background: var(--primary);
          transform: scale(1.2);
        }

        @media (max-width: 1100px) {
          .prev { left: 10px; }
          .next { right: 10px; }
        }

        @media (max-width: 600px) {
          .carousel-inner { aspect-ratio: 4 / 3; }
        }
      `}</style>
    </section>
  );
}
