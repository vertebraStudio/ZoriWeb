"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  getConsent,
  setConsent,
  acceptAll,
  rejectAll,
  OPTIONAL_CATEGORIES,
  OPEN_SETTINGS_EVENT,
} from "@/lib/cookieConsent";

// Dos vistas: el aviso (primera capa) y el panel para elegir por categorías.
// Aceptar y rechazar tienen el mismo peso visual en las dos, como pide la AEPD.
export default function CookieBanner() {
  const [view, setView] = useState(null); // null | "notice" | "settings"
  const [choices, setChoices] = useState({});

  useEffect(() => {
    // Los botones "Configurar cookies" lo reabren directamente en el panel,
    // con lo que se eligió marcado, para poder cambiarlo o retirarlo.
    const openSettings = () => {
      setChoices(getConsent() ?? {});
      setView("settings");
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, openSettings);

    let timer;
    if (!getConsent()) {
      // Small timeout to show banner smoothly
      timer = setTimeout(() => setView("notice"), 1000);
    }

    return () => {
      window.removeEventListener(OPEN_SETTINGS_EVENT, openSettings);
      clearTimeout(timer);
    };
  }, []);

  const close = () => setView(null);

  const handleAccept = () => {
    acceptAll();
    close();
  };

  const handleReject = () => {
    rejectAll();
    close();
  };

  const handleSave = () => {
    setConsent(choices);
    close();
  };

  if (!view) return null;

  return (
    <div className="cookie-banner-overlay" role="dialog" aria-labelledby="cookie-banner-title">
      <div className="cookie-banner-card glass">
        {view === "notice" ? (
          <div className="cookie-banner-content">
            <h4 className="cookie-banner-title" id="cookie-banner-title">Tu privacidad nos importa</h4>
            <p className="cookie-banner-text">
              Este sitio web utiliza cookies técnicas necesarias para su funcionamiento y, solo si lo aceptas, cookies de terceros de Google Maps para mostrarte el mapa interactivo de la consulta. Puedes aceptarlas, rechazarlas o elegir cuáles permites en «Configurar». Consulta más detalles en nuestra{" "}
              <Link href="/politica-cookies" className="cookie-policy-link">
                política de cookies
              </Link>
              .
            </p>
          </div>
        ) : (
          <div className="cookie-banner-content">
            <h4 className="cookie-banner-title" id="cookie-banner-title">Configurar cookies</h4>
            <p className="cookie-banner-text">
              Elige qué cookies permites. Puedes cambiar tu elección cuando quieras desde «Configurar cookies», en el pie de página. Más información en la{" "}
              <Link href="/politica-cookies" className="cookie-policy-link">
                política de cookies
              </Link>
              .
            </p>

            <ul className="cookie-categories">
              <li className="cookie-category">
                <div>
                  <p className="cookie-category-name">Técnicas</p>
                  <p className="cookie-category-desc">
                    Necesarias para que la web funcione y para recordar tu elección sobre las cookies. No se pueden desactivar.
                  </p>
                </div>
                <span className="cookie-category-always">Siempre activas</span>
              </li>
              {OPTIONAL_CATEGORIES.map(({ id, name, description }) => (
                <li className="cookie-category" key={id}>
                  <label className="cookie-category-label" htmlFor={`cookie-cat-${id}`}>
                    <p className="cookie-category-name">{name}</p>
                    <p className="cookie-category-desc">{description}</p>
                  </label>
                  <input
                    type="checkbox"
                    role="switch"
                    id={`cookie-cat-${id}`}
                    className="cookie-switch"
                    checked={choices[id] === true}
                    onChange={(e) => setChoices((prev) => ({ ...prev, [id]: e.target.checked }))}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="cookie-banner-actions">
          <button onClick={handleReject} className="cookie-btn cookie-btn-primary" id="btn-reject-cookies">
            Rechazar opcionales
          </button>
          {view === "notice" ? (
            <button onClick={() => setView("settings")} className="cookie-btn cookie-btn-secondary" id="btn-settings-cookies">
              Configurar
            </button>
          ) : (
            <button onClick={handleSave} className="cookie-btn cookie-btn-secondary" id="btn-save-cookies">
              Guardar selección
            </button>
          )}
          <button onClick={handleAccept} className="cookie-btn cookie-btn-primary" id="btn-accept-cookies">
            Aceptar todas
          </button>
        </div>
      </div>

      <style jsx>{`
        .cookie-banner-overlay {
          position: fixed;
          bottom: 24px;
          left: 24px;
          right: 24px;
          z-index: 99999;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .cookie-banner-card {
          width: 100%;
          max-width: 850px;
          max-height: calc(100vh - 48px);
          overflow-y: auto;
          background: rgba(255, 255, 255, 0.97);
          border: 1px solid rgba(14, 82, 93, 0.15);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cookie-banner-title {
          font-family: 'Sabon', 'EB Garamond', serif;
          font-size: 1.2rem;
          color: var(--text);
          margin: 0 0 8px 0;
          font-weight: 700;
        }

        .cookie-banner-text {
          font-size: 0.88rem;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 0;
        }

        .cookie-banner-card :global(.cookie-policy-link) {
          color: #0E525D;
          text-decoration: underline;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .cookie-banner-card :global(.cookie-policy-link:hover) {
          color: var(--text);
        }

        .cookie-categories {
          list-style: none;
          margin: 16px 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .cookie-category {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 14px 16px;
          border: 1px solid rgba(14, 82, 93, 0.12);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.6);
        }

        .cookie-category-label {
          cursor: pointer;
        }

        .cookie-category-name {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 4px;
        }

        .cookie-category-desc {
          font-size: 0.82rem;
          line-height: 1.5;
          color: var(--text-muted);
          margin: 0;
        }

        .cookie-category-always {
          font-size: 0.8rem;
          font-weight: 600;
          color: #0E525D;
          white-space: nowrap;
        }

        /* Interruptor hecho con el propio checkbox para no perder el foco
           de teclado ni la lectura en lectores de pantalla. */
        .cookie-switch {
          appearance: none;
          -webkit-appearance: none;
          flex-shrink: 0;
          width: 44px;
          height: 24px;
          border-radius: 999px;
          background: #c9d3d6;
          position: relative;
          cursor: pointer;
          transition: background 0.2s ease;
          margin: 0;
        }

        .cookie-switch::after {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s ease;
        }

        .cookie-switch:checked {
          background: #0E525D;
        }

        .cookie-switch:checked::after {
          transform: translateX(20px);
        }

        .cookie-switch:focus-visible {
          outline: 2px solid #0E525D;
          outline-offset: 2px;
        }

        .cookie-banner-actions {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          flex-wrap: wrap;
        }

        .cookie-btn {
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          min-width: 160px;
          text-align: center;
          display: inline-block;
        }

        /* Aceptar y rechazar con el mismo estilo: ninguna de las dos opciones
           puede destacar sobre la otra (Guía de cookies de la AEPD). */
        .cookie-btn-primary {
          background-color: #0E525D;
          border: 2px solid #0E525D;
          color: white;
        }

        .cookie-btn-primary:hover {
          background-color: #136977;
          border-color: #136977;
          transform: translateY(-1px);
        }

        .cookie-btn-secondary {
          background-color: transparent;
          border: 2px solid #0E525D;
          color: #0E525D;
        }

        .cookie-btn-secondary:hover {
          background-color: rgba(14, 82, 93, 0.05);
          transform: translateY(-1px);
        }

        @keyframes slideUp {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .cookie-banner-overlay {
            bottom: 16px;
            left: 16px;
            right: 16px;
          }

          .cookie-banner-card {
            max-height: calc(100vh - 32px);
            padding: 20px;
          }

          .cookie-banner-actions {
            flex-direction: column;
            gap: 10px;
          }

          .cookie-btn {
            width: 100%;
            min-width: unset;
          }
        }
      `}</style>
    </div>
  );
}
