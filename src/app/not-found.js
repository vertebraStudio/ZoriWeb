import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sustituye a la 404 por defecto de Next, que sale en inglés. En el export
// estático se genera como out/404.html, que es la que GitHub Pages sirve para
// cualquier URL que no exista.
export const metadata = {
  title: "Página no encontrada | Zoraida | Psicóloga en Granada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header solid={true} />
      <main className="not-found">
        <div className="container not-found-inner">
          <span className="not-found-code">Error 404</span>
          <h1 className="not-found-title">Esta página no existe</h1>
          <p className="not-found-text">
            Puede que el enlace haya cambiado o que la página ya no esté disponible.
            Desde aquí puedes volver al inicio o escribirme si buscabas algo en concreto.
          </p>
          <div className="not-found-actions">
            <Link href="/" className="btn">Volver al inicio</Link>
            <Link href="/contacto" className="not-found-link">Contactar →</Link>
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        .not-found {
          min-height: 80vh;
          display: flex;
          align-items: center;
          padding: 140px 24px 80px;
          background: linear-gradient(225deg, #f2fafa 0%, #EBF4F5 100%);
        }
        .not-found-inner {
          max-width: 640px;
          text-align: center;
        }
        .not-found-code {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 16px;
        }
        .not-found-title {
          font-family: 'Sabon', 'EB Garamond', serif;
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 400;
          color: var(--text);
          margin-bottom: 20px;
        }
        .not-found-text {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-muted);
          margin-bottom: 32px;
        }
        .not-found-actions {
          display: flex;
          gap: 24px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .not-found-link {
          font-weight: 600;
          color: #0E525D;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
