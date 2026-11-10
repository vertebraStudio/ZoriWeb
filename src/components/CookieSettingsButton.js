'use client';

import { openCookieSettings } from '@/lib/cookieConsent';

// Botón de consentimiento revocable: reabre el banner en el panel de
// configuración. Es un botón (no navega), así que cada sitio le da su estilo.
export default function CookieSettingsButton({ className, children = 'Configurar cookies' }) {
  return (
    <button type="button" className={className} onClick={openCookieSettings}>
      {children}
    </button>
  );
}
