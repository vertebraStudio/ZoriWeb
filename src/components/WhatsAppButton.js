'use client';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34692642252"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <img 
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/whatsappIcon.png`} 
        alt="WhatsApp" 
      />
      
      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          z-index: 9999;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .whatsapp-float:hover {
          transform: scale(1.1) translateY(-5px);
        }

        .whatsapp-float img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 4px 10px rgba(0,0,0,0.2));
        }

        @media (max-width: 768px) {
          .whatsapp-float {
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </a>
  );
}
