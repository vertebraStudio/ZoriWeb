import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Piezas comunes de las tres páginas legales (aviso legal, privacidad y
// cookies). Los textos son los de la consultora de protección de datos
// (Protection Report, noviembre de 2026), maquetados con el estilo de la web.

export function LegalPage({ title, updated, children }) {
  return (
    <>
      <Header solid={true} />
      <main style={{ paddingTop: '100px', minHeight: '80vh' }}>

        <section className="legal-section-header">
          <div className="container">
            <span style={{ fontSize: '0.85rem', color: '#0E525D', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Legal</span>
            <h1 style={{ fontSize: '2.5rem', fontFamily: "'EB Garamond', serif", color: 'var(--text)', marginTop: '10px', marginBottom: '10px' }}>{title}</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 0 }}>Última actualización: {updated}</p>
          </div>
        </section>

        <section className="legal-section-body">
          <div className="container">
            <div className="legal-content" style={{ maxWidth: '780px' }}>
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({ title, children }) {
  return (
    <div style={{ marginBottom: '50px' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid #eee' }}>{title}</h2>
      {children}
    </div>
  );
}

export function LegalSubtitle({ children }) {
  return (
    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', margin: '24px 0 12px' }}>{children}</h3>
  );
}

// Tabla de dos columnas: etiqueta y valor.
export function LegalTable({ rows }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px', marginBottom: '16px' }}>
      <tbody>
        {rows.map(([label, value], i) => (
          <tr key={i} style={{ borderBottom: '1px solid #f0f0f0' }}>
            <td style={{ padding: '10px 16px 10px 0', fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem', width: '40%', verticalAlign: 'top' }}>{label}</td>
            {/* overflowWrap: el dominio no tiene espacios y en móvil desbordaba. */}
            <td style={{ padding: '10px 0', color: 'var(--text-muted)', fontSize: '0.9rem', verticalAlign: 'top', overflowWrap: 'anywhere' }}>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Tabla con cabecera. En móvil se desplaza en horizontal en vez de apretar
// las columnas hasta hacerlas ilegibles.
export function LegalDataTable({ head, rows }) {
  const cell = { padding: '10px 12px', fontSize: '0.85rem', verticalAlign: 'top', textAlign: 'left', borderBottom: '1px solid #eee' };
  return (
    <div style={{ overflowX: 'auto', margin: '16px 0' }}>
      <table style={{ width: '100%', minWidth: '560px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: 'var(--primary-light)' }}>
            {head.map((h) => (
              <th key={h} style={{ ...cell, fontWeight: 700, color: 'var(--text)' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((value, j) => (
                <td key={j} style={{ ...cell, color: j === 0 ? 'var(--text)' : 'var(--text-muted)', fontWeight: j === 0 ? 600 : 400 }}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Mención que pide la consultora al pie de cada texto. `prefix` lleva el
// participio concordado: "Aviso legal revisado", "Política de cookies revisada".
export function ReviewedBy({ prefix }) {
  return (
    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '-20px' }}>
      {prefix} por PROTECTION REPORT S, S.L.,{' '}
      <a href="https://www.protectionreport.com" target="_blank" rel="noopener noreferrer">empresa de RGPD</a>,
      quien se reserva las acciones legales que correspondan contra todo aquel que copie y utilice de forma ilegítima el contenido.
    </p>
  );
}
