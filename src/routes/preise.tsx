import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircleMore, Check } from "lucide-react";

export const Route = createFileRoute("/preise")({
  head: () => ({
    meta: [
      { title: "Preise — VCDS Coding & Fahrzeugoptimierung Würzburg | GD3" },
      {
        name: "description",
        content:
          "Transparente Festpreise für VCDS Codierung, Feature-Freischaltung, Retrofit und Diagnose in Würzburg. VW, Audi, Skoda, Seat.",
      },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Preise — GD3 Fahrzeugtechnik Würzburg" },
      { property: "og:description", content: "Festpreise für Codierung, Retrofit und Diagnose in Würzburg." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/preise" }],
  }),
  component: Preise,
});

type Product = {
  code: string;
  title: string;
  price: string;
  body: string;
  tags?: string[];
};

const products: Product[] = [
  {
    code: "P01",
    title: "VCDS Komplettauslesung",
    price: "49,00 €",
    body: "Vollständiges Auslesen aller Steuergeräte, ausführlicher Fehlerspeicher-Report und Beratung zu sinnvollen nächsten Schritten.",
    tags: ["Diagnose", "Report"],
  },
  {
    code: "P02",
    title: "Hidden Features Freischaltung",
    price: "ab 39,00 €",
    body: "Freischaltung versteckter Komfortfunktionen: Coming/Leaving-Home, Abbiegelicht, Spurhalter-Erinnerung, Menüsprachen u. v. m.",
    tags: ["Coding"],
  },
  {
    code: "P03",
    title: "Digital Cockpit Aktivierung",
    price: "ab 79,00 €",
    body: "Aktivierung erweiterter Ansichten und Layouts im Virtual Cockpit (Audi) bzw. Active Info Display (VW/Skoda/Seat).",
    tags: ["Infotainment"],
  },
  {
    code: "P04",
    title: "Apple CarPlay & Android Auto",
    price: "ab 149,00 €",
    body: "Softwareseitige Freischaltung von Apple CarPlay und Android Auto auf kompatiblen MIB2/MIB3-Systemen.",
    tags: ["Infotainment", "Retrofit"],
  },
  {
    code: "P05",
    title: "Retrofit-Codierung",
    price: "ab 89,00 €",
    body: "Codierung nach Hardware-Nachrüstung: Tempomat, Parksensoren, Multifunktionslenkrad, Rückfahrkamera, Ambientebeleuchtung.",
    tags: ["Retrofit"],
  },
  {
    code: "P06",
    title: "Fehlercode-Analyse & Löschung",
    price: "29,00 €",
    body: "Präzise Interpretation komplexer Fehlerbilder, gezielte Diagnose und Löschen behobener Einträge — ohne unnötigen Teiletausch.",
    tags: ["Diagnose"],
  },
  {
    code: "P07",
    title: "Steuergerät-Anpassung",
    price: "ab 45,00 €",
    body: "Anpassung einzelner Steuergeräte-Parameter nach Werkstattbesuch, Batteriewechsel oder Modulaustausch.",
    tags: ["Coding"],
  },
  {
    code: "P08",
    title: "Individuelle Konfiguration",
    price: "auf Anfrage",
    body: "Sie haben einen speziellen Wunsch? Schreiben Sie uns kurz Ihr Fahrzeug und die gewünschte Änderung — Sie erhalten einen Festpreis.",
    tags: ["Custom"],
  },
];

function Preise() {
  return (
    <div className="bg-background text-foreground font-sans min-h-screen">
      <header className="border-b border-hairline sticky top-0 bg-background/80 backdrop-blur-md z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-mono text-sm font-medium">
            GD3 <span className="text-accent-blue">//</span> DIAGNOSE
          </Link>
          <Link to="/" className="text-xs uppercase font-mono tracking-widest text-muted-foreground hover:text-foreground">
            ← Startseite
          </Link>
        </div>
      </header>

      <section className="border-b border-hairline py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-5">
          <span className="font-mono text-xs text-accent-blue uppercase tracking-widest">Preise / Leistungen</span>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight max-w-[22ch]">
            Fahrzeugoptimierung <span className="text-muted-foreground">— transparente Festpreise.</span>
          </h1>
          <p className="text-muted-foreground max-w-[60ch] text-pretty leading-relaxed">
            Alle Leistungen erfolgen vor Ort in Würzburg, mit originaler VCDS-Hardware, Backup vor jeder
            Codierung und im Rahmen der Herstellerparameter. Preise gelten für Fahrzeuge der VAG-Gruppe
            (VW, Audi, Skoda, Seat).
          </p>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Kein Ausweis der Umsatzsteuer, da Kleinunternehmer gemäß § 19 Abs. 1 UStG.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--hairline-strong)] ring-1 ring-hairline">
            {products.map((p) => (
              <article key={p.code} className="bg-background p-8 flex flex-col gap-5 hover:bg-surface transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">/ {p.code}</span>
                  <span className="text-accent-blue font-mono text-sm">{p.price}</span>
                </div>
                <h3 className="text-xl font-medium leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty leading-relaxed flex-1">{p.body}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.tags?.map((t) => (
                    <span key={t} className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 bg-surface ring-1 ring-[var(--hairline-strong)] rounded-sm text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://wa.me/4915734685334?text=${encodeURIComponent(`Hallo GD3, ich interessiere mich für: ${p.title} (${p.price})`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium mt-2 text-foreground hover:text-accent-blue transition-colors"
                >
                  <MessageCircleMore className="size-4" /> Anfragen
                </a>
              </article>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              "Backup vor jeder Codierung",
              "Originale VCDS-Lizenz",
              "Termine meist innerhalb 48h",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3 p-5 bg-surface/40 ring-1 ring-hairline rounded-sm">
                <Check className="size-4 text-accent-blue" />
                <span className="text-sm">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-hairline py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between gap-4 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          <span>© 2026 GD3 Fahrzeugtechnik · Würzburg</span>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-foreground">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-foreground">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
