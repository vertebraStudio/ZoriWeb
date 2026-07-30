'use client';

import { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleRegistry, createStyleRegistry } from 'styled-jsx';

// Sin este registro, los <style jsx> de los componentes no se emiten en el HTML
// y solo se inyectan al hidratar, lo que provoca un parpadeo sin estilos al
// cargar. Recoge las reglas durante el renderizado y las mete en el <head>.
export default function StyledJsxRegistry({ children }) {
  // Estado con inicializador diferido para crear el registro una sola vez.
  const [jsxStyleRegistry] = useState(() => createStyleRegistry());

  useServerInsertedHTML(() => {
    const styles = jsxStyleRegistry.styles();
    jsxStyleRegistry.flush();
    return <>{styles}</>;
  });

  return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>;
}
