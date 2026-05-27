'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "¿Qué duración tiene cada sesión?",
    answer: <>Las sesiones duran <strong>una hora</strong> normalmente. Con niños, los padres entran los primeros 15 minutos para establecer nuevos objetivos y los últimos 15 minutos para ver lo que hemos realizado en sesión.</>
  },
  {
    question: "¿Cómo puedo pedir mi primera cita?",
    answer: "Por la mañana puedes llamarme de 10 a 13h. Si no, lo mejor y más rápido es un WhatsApp, te responderé lo antes posible."
  },
  {
    question: "¿Realizas terapia online o solo presencial?",
    answer: "Ofrezco ambas modalidades. La terapia presencial se realiza en mi consulta en Granada (zona Ronda), mientras que la terapia online se lleva a cabo a través de plataformas seguras de videoconferencia, permitiendo la misma calidad de atención desde la comodidad de tu hogar."
  },
  {
    question: "¿Trabajas con niños y adolescentes?",
    answer: "Sí, estoy especializada en psicología infantil y juvenil. Trabajo con una metodología adaptada a cada rango de edad, involucrando también a las familias en el proceso para asegurar un desarrollo integral y duradero."
  },
  {
    question: "¿Trabajas con adultos?",
    answer: "Sí, por supuesto. Acompaño a adultos en sesiones individuales para abordar la ansiedad, el estrés, la autoestima, el duelo, la gestión de emociones o crisis vitales, ayudándote a construir herramientas basadas en la Terapia de Aceptación y Compromiso."
  },
  {
    question: "¿Trabajas con parejas?",
    answer: "Sí, realizo terapia familiar y acompaño en dificultades de relación y de pareja, ya sea mediante sesiones de intervención familiar o en procesos individuales enfocados a mejorar tus vínculos y comunicación."
  },
  {
    question: "¿Qué precio tienen las sesiones?",
    answer: "Para consultar las tarifas actuales y posibles bonos de sesiones, puedes contactar conmigo directamente. Estaré encantada de informarte de forma detallada sobre la inversión en tu salud emocional o la de tu familia."
  },
  {
    question: "¿Haces evaluaciones?",
    answer: "Sí, tales como problemas de aprendizaje, déficit de atención, autoestima, depresión, ansiedad, trastorno obsesivo compulsivo, trastorno negativista desafiante, trastorno límite de la personalidad, entre otros."
  },
  {
    question: "¿Llevas becas de necesidades especiales?",
    answer: "Sí, de reeducación pedagógica. Además, te asesoro en cómo funcionan: tramitación, facturación, burocracia, entre otros."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">Preguntas Frecuentes</h2>
        <p className="section-subtitle">Resuelvo tus dudas principales antes de comenzar el proceso terapéutico.</p>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item glass ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq {
          background-color: var(--off-white);
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .faq-item {
          cursor: pointer;
          border-radius: 12px;
          padding: 20px;
          transition: var(--transition);
          border: 1px solid rgba(142, 68, 173, 0.1);
        }

        .faq-item:hover {
          border-color: var(--primary-light);
          transform: translateY(-2px);
        }

        .faq-item.open {
          border-color: var(--primary);
          background: var(--white);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .faq-question h3 {
          margin: 0;
          font-size: 1.1rem;
          color: var(--text-color);
          transition: var(--transition);
        }

        .faq-item.open .faq-question h3 {
          color: var(--primary);
        }

        .faq-icon {
          font-size: 1.5rem;
          color: var(--primary);
          font-weight: 300;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out, padding 0.3s ease;
          padding-top: 0;
        }

        .faq-item.open .faq-answer {
          max-height: 200px;
          padding-top: 15px;
        }

        .faq-answer p {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
