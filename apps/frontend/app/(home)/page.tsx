export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Jewelry Store MVP</h1>
        <p className="muted">
          Frontend is ready. Catalog pages and admin UI will be implemented on top
          of this skeleton.
        </p>
        <span className="pill">Next.js + TypeScript</span>
      </section>

      <section className="grid" aria-label="Planned modules">
        <article>
          <h2>Catalog</h2>
          <p className="muted">Groups, product cards, stock status, manual order.</p>
        </article>
        <article>
          <h2>Admin</h2>
          <p className="muted">JWT auth, content management, media attachment.</p>
        </article>
        <article>
          <h2>Media</h2>
          <p className="muted">
            Direct uploads to MinIO via pre-signed URLs from backend.
          </p>
        </article>
      </section>
    </main>
  );
}

