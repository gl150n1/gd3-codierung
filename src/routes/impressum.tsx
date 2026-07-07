import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — GD3 Codierung Würzburg" },
      { name: "description", content: "Impressum und Anbieterkennzeichnung von GD3 Codierung, Glison Doci, Würzburg." },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <div className="bg-background text-foreground font-sans min-h-screen">
      <header className="border-b border-hairline">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="font-mono text-sm font-medium">
            GD3 <span className="text-accent-blue">//</span> DIAGNOSE
          </Link>
          <Link to="/" className="text-xs uppercase font-mono tracking-widest text-muted-foreground hover:text-foreground">
            ← Zurück
          </Link>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs text-accent-blue uppercase tracking-widest">Rechtliches</span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight">Impressum</h1>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Angaben gemäß § 5 TMG</h2>
          <p className="text-base leading-relaxed">
            Glison Doci<br />
            GD3 Codierung<br />
            Klara-Oppenheimer-Weg 39<br />
            97074 Würzburg<br />
            Deutschland
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Kontakt</h2>
          <p className="text-base leading-relaxed">
            Telefon: <a href="tel:+4915734685334" className="text-accent-blue hover:underline">+49 1573 4685334</a><br />
            E-Mail: <a href="mailto:gd3.codierung@gmail.com" className="text-accent-blue hover:underline">gd3.codierung@gmail.com</a>
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Umsatzsteuer</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Kein Ausweis der Umsatzsteuer, da Kleinunternehmer gemäß § 19 Abs. 1 UStG.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p className="text-base leading-relaxed">
            Glison Doci<br />
            Klara-Oppenheimer-Weg 39<br />
            97074 Würzburg
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">EU-Streitschlichtung</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer" className="text-accent-blue hover:underline">
              https://ec.europa.eu/consumers/odr/
            </a>
            . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Haftung für Inhalte</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Urheberrecht</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </main>
      <footer className="border-t border-hairline py-8">
        <div className="max-w-4xl mx-auto px-6 flex justify-between text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          <span>© 2026 GD3 Codierung</span>
          <Link to="/datenschutz" className="hover:text-foreground">Datenschutz</Link>
        </div>
      </footer>
    </div>
  );
}
