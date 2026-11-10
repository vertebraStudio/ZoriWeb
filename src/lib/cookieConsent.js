// Consentimiento de cookies en un único sitio: lo usan el banner, el mapa y los
// botones de "Configurar cookies" del pie y de la política de cookies.
//
// Se guarda en localStorage qué categorías opcionales ha aceptado el usuario y
// la fecha de la elección, porque la política de cookies promete conservarla
// un máximo de 12 meses: pasado ese plazo se trata como si no hubiera respuesta
// y el banner vuelve a preguntar.

const STORAGE_KEY = 'zori-cookie-consent';
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export const CONSENT_CHANGE_EVENT = 'cookie-consent-change';
export const OPEN_SETTINGS_EVENT = 'cookie-settings-open';

// Categorías que el usuario puede activar o no. Las técnicas no están aquí
// porque no requieren consentimiento. Añadir una categoría nueva (analítica,
// por ejemplo) es añadir una entrada: el panel del banner se pinta desde aquí.
export const OPTIONAL_CATEGORIES = [
  {
    id: 'maps',
    name: 'Mapa interactivo (Google Maps)',
    description:
      'Muestra el mapa de la consulta en la página de contacto. Google puede instalar sus propias cookies al cargarlo.',
  },
];

const ALL_OFF = Object.fromEntries(OPTIONAL_CATEGORIES.map(({ id }) => [id, false]));
const ALL_ON = Object.fromEntries(OPTIONAL_CATEGORIES.map(({ id }) => [id, true]));

// Devuelve { maps: true|false, ... } o null si no hay una elección vigente.
export function getConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw);
    if (!saved?.date || Date.now() - saved.date > MAX_AGE_MS) return null;

    // Formato de octubre de 2026: { value: "accepted" | "rejected", date }.
    // Solo existía el mapa, así que equivale a esa categoría.
    if (saved.value === 'accepted' || saved.value === 'rejected') {
      return { ...ALL_OFF, maps: saved.value === 'accepted' };
    }

    if (!saved.categories) return null;
    return { ...ALL_OFF, ...saved.categories };
  } catch {
    // JSON inválido (el formato más antiguo, un texto sin fecha) o
    // localStorage bloqueado (modo privado): se vuelve a preguntar.
    return null;
  }
}

export function hasConsent(categoryId) {
  return getConsent()?.[categoryId] === true;
}

export function setConsent(categories) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ categories: { ...ALL_OFF, ...categories }, date: Date.now() })
    );
  } catch {
    // Sin almacenamiento la elección vale solo para esta visita.
  }
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

export const acceptAll = () => setConsent(ALL_ON);
export const rejectAll = () => setConsent(ALL_OFF);

// Vuelve a mostrar el banner, ya en el panel de configuración, para que el
// usuario vea qué aceptó y pueda cambiarlo o retirarlo.
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
