import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung — GD3 Codierung Würzburg" },
      { name: "description", content: "Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten bei GD3 Codierung in Würzburg." },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: Datenschutz,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">{title}</h2>
      <div className="text-sm leading-relaxed text-muted-foreground flex flex-col gap-3">{children}</div>
    </section>
  );
}

function Datenschutz() {
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
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight">Datenschutzerklärung</h1>
        </div>

        <Section title="1. Verantwortlicher">
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
            <span className="text-foreground">Glison Doci — GD3 Codierung</span><br />
            Klara-Oppenheimer-Weg 39, 97074 Würzburg<br />
            Telefon: +49 1573 4685334 · E-Mail: gd3.codierung@gmail.com
          </p>
        </Section>

        <Section title="2. Allgemeine Hinweise">
          <p>
            Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren
            Seiten personenbezogene Daten erhoben werden, erfolgt dies stets auf freiwilliger Basis. Diese Daten werden
            ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
          </p>
        </Section>

        <Section title="3. Server-Logfiles">
          <p>
            Der Provider dieser Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles,
            die Ihr Browser übermittelt (Browsertyp/-version, Betriebssystem, Referrer-URL, Hostname, Uhrzeit und
            IP-Adresse). Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren Betrieb der Website).
          </p>
        </Section>

        <Section title="4. Kontaktaufnahme">
          <p>
            Wenn Sie uns per E-Mail, Telefon, WhatsApp oder über das Kontaktformular kontaktieren, werden Ihre Angaben
            zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. lit. f (berechtigtes Interesse an der Beantwortung).
          </p>
        </Section>

        <Section title="5. WhatsApp / Meta">
          <p>
            Für die Terminvereinbarung nutzen wir WhatsApp (Meta Platforms Ireland Ltd.). Wenn Sie uns über WhatsApp
            kontaktieren, gelten zusätzlich die Datenschutzbestimmungen von Meta. Wir haben keinen Einfluss auf die
            dortige Datenverarbeitung.
          </p>
        </Section>

        <Section title="6. Cookies">
          <p>
            Diese Website verwendet ausschließlich technisch notwendige Cookies (z. B. zur Speicherung Ihrer
            Theme-Präferenz). Es werden keine Tracking- oder Marketing-Cookies gesetzt.
          </p>
        </Section>

        <Section title="7. Ihre Rechte">
          <p>
            Sie haben jederzeit das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17),
            Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch (Art. 21).
            Zudem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu (Bayerisches Landesamt für
            Datenschutzaufsicht, Ansbach).
          </p>
        </Section>

        <Section title="8. SSL-Verschlüsselung">
          <p>
            Diese Seite nutzt aus Gründen der Sicherheit eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung
            erkennen Sie am Schloss-Symbol Ihrer Browserzeile.
          </p>
        </Section>
      </main>
      <footer className="border-t border-hairline py-8">
        <div className="max-w-4xl mx-auto px-6 flex justify-between text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          <span>© 2026 GD3 Codierung</span>
          <Link to="/impressum" className="hover:text-foreground">Impressum</Link>
        </div>
      </footer>
    </div>
  );
}
