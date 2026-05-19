"use client";

import { useState, useEffect } from "react";

export default function GoogleMap() {
  const [consentState, setConsentState] = useState("unset"); // "unset" | "accepted" | "rejected"

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem("zori-cookie-consent");
      if (consent === "accepted") {
        setConsentState("accepted");
      } else if (consent === "rejected") {
        setConsentState("rejected");
      } else {
        setConsentState("unset");
      }
    };

    // Listen for changes from the banner or other components
    window.addEventListener("cookie-consent-change", checkConsent);
    checkConsent(); // Initial check

    return () => {
      window.removeEventListener("cookie-consent-change", checkConsent);
    };
  }, []);

  const handleAcceptConsent = () => {
    localStorage.setItem("zori-cookie-consent", "accepted");
    window.dispatchEvent(new Event("cookie-consent-change"));
    setConsentState("accepted");
  };

  if (consentState === "accepted") {
    return (
      <iframe
        src="https://maps.google.com/maps?q=Zoraida%20psicol%C3%B3loga%20Granada,%20C.%20Pintor%20Zuloaga,%203,%20local%202,%20Ronda,%2018005%20Granada&t=&z=16&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "15px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de la consulta de Zoraida"
      ></iframe>
    );
  }

  // Fallback box for unset or rejected cookies
  return (
    <div className="map-fallback-container">
      <div className="map-fallback-card">
        <div className="map-fallback-icon">📍</div>
        <h4 className="map-fallback-title">Mapa de Google Maps bloqueado</h4>
        <p className="map-fallback-text">
          Para poder visualizar el mapa interactivo de la consulta y facilitar la localización de la dirección, debes autorizar la carga de las cookies de terceros de Google Maps.
        </p>
        <button onClick={handleAcceptConsent} className="map-fallback-btn" id="btn-allow-map-cookies">
          Permitir cookies y mostrar mapa
        </button>
      </div>

      <style jsx>{`
        .map-fallback-container {
          width: 100%;
          height: 100%;
          background: #F8F9FA;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 24px;
          border-radius: 15px;
          border: 1px solid rgba(14, 82, 93, 0.1);
        }

        .map-fallback-card {
          max-width: 420px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .map-fallback-icon {
          font-size: 2.8rem;
          line-height: 1;
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.05));
        }

        .map-fallback-title {
          font-family: 'Sabon', 'EB Garamond', serif;
          font-size: 1.25rem;
          color: var(--text);
          margin: 0;
          font-weight: 700;
        }

        .map-fallback-text {
          font-size: 0.88rem;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 0;
        }

        .map-fallback-btn {
          background-color: #0E525D;
          color: white;
          border: none;
          padding: 12px 24px;
          font-size: 0.88rem;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(14, 82, 93, 0.15);
          margin-top: 6px;
        }

        .map-fallback-btn:hover {
          background-color: #136977;
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(14, 82, 93, 0.2);
        }

        .map-fallback-btn:active {
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
