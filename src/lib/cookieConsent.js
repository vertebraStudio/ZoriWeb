// Consentimiento de cookies en un único sitio: lo usan el banner, el mapa y el
// enlace "Configurar cookies" del pie.
//
// Se guarda en localStorage con la fecha de la elección porque la política de
// cookies promete conservarla un máximo de 12 meses: pasado ese plazo se trata
// como si no hubiera respuesta y el banner vuelve a preguntar.
//
// Los valores antiguos ("accepted" / "rejected" a secas) no llevan fecha, así
// que no se puede saber si han caducado: se descartan y se pregunta una vez más.

const STORAGE_KEY = 'zori-cookie-consent';
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export const CONSENT_CHANGE_EVENT = 'cookie-consent-change';
export const OPEN_SETTINGS_EVENT = 'cookie-settings-open';

// Devuelve "accepted", "rejected" o null si no hay respuesta válida.
export function getConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const { value, date } = JSON.parse(raw);
    if (value !== 'accepted' && value !== 'rejected') return null;
    if (!date || Date.now() - date > MAX_AGE_MS) return null;
    return value;
  } catch {
    // JSON inválido (formato antiguo) o localStorage bloqueado (modo privado).
    return null;
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, date: Date.now() }));
  } catch {
    // Sin almacenamiento la elección vale solo para esta visita.
  }
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

// Vuelve a mostrar el banner para que el usuario cambie o retire su elección.
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
