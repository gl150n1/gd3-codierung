import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/diagnostic-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GD3 — Fahrzeugdiagnose & Softwarekonfiguration in Würzburg" },
      {
        name: "description",
        content:
          "GD3 Würzburg: VCDS Diagnose, Fehlercodeanalyse, Freischaltung versteckter Funktionen, Infotainment-Individualisierung und Software-Konfiguration. TÜV-konform.",
      },
      { property: "og:title", content: "GD3 — Fahrzeugdiagnose Würzburg" },
      {
        property: "og:description",
        content:
          "Professionelle Fahrzeugdiagnose und Softwarekonfiguration in Würzburg — VCDS, Codierung, Infotainment, Echtzeit-Telemetrie.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

const services = [
  {
    code: "01 / VCDS",
    title: "VCDS Diagnose",
    body: "Tiefgreifende Systemanalyse für alle Marken der VAG-Gruppe. Auslesen und Löschen von Fehlerspeichern auf Herstellerniveau.",
  },
  {
    code: "02 / ANALYSIS",
    title: "Fehlercodeanalyse",
    body: "Logische Auswertung komplexer Fehlerszenarien zur gezielten Instandsetzung — ohne unnötigen Teiletausch.",
  },
  {
    code: "03 / CODES",
    title: "Funktionsfreischaltung",
    body: "Aktivierung versteckter Komfortfunktionen wie Zeigerausschlag, Abbiegelicht oder Parkhilfe-Visualisierung.",
  },
  {
    code: "04 / UIX",
    title: "Infotainment-Modding",
    body: "Individuelle Anpassung von Startlogos, Skins und Funktionen Ihres Navigations- und Mediensystems.",
  },
  {
    code: "05 / CONFIG",
    title: "Software-Konfiguration",
    body: "Präzise Einstellung von Steuergeräten nach Hardware-Nachrüstungen oder zur Optimierung bestehender Systeme.",
  },
  {
    code: "06 / TELEMETRY",
    title: "Echtzeit-Auswertung",
    body: "Aufzeichnung und Analyse von Live-Parametern während der Fahrt zur Prüfung der Motorperformance.",
  },
];

function Index() {
  return (
    <div className="bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="py-6 px-6 border-b border-hairline">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="font-mono text-sm tracking-tighter font-medium">
              GD3 // DIAGNOSE
            </span>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#technik" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
                Technik
              </a>
              <a href="#standort" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
                Standort
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-muted-foreground uppercase hidden sm:inline">
              Würzburg DE // 49.7913° N
            </span>
            <div className="size-1.5 rounded-full bg-[var(--signal)] shadow-[0_0_8px_color-mix(in_oklab,var(--signal)_60%,transparent)]" />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-start gap-8">
            <div className="inline-flex items-center gap-2 px-2 py-1 bg-surface ring-1 ring-white/10 rounded">
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                Status: System Ready
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-balance max-w-[20ch]">
              Präzision in jedem{" "}
              <span className="text-muted-foreground">Datenpunkt.</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-[56ch] text-pretty">
              Professionelle Fahrzeugdiagnose und Softwarekonfiguration in
              Würzburg. Wir schöpfen das volle Potenzial Ihres Fahrzeugs aus —
              sicher, legal und TÜV-konform.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="#standort"
                className="bg-foreground text-background px-5 py-2.5 rounded-sm font-medium text-sm ring-1 ring-foreground hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                Anfrage senden
                <span className="text-muted-foreground">→</span>
              </a>
              <a
                href="#services"
                className="bg-surface text-foreground px-5 py-2.5 rounded-sm font-medium text-sm ring-1 ring-white/10 hover:bg-surface-elevated transition-colors"
              >
                Leistungskatalog
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature image */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full aspect-[21/9] bg-surface outline outline-1 -outline-offset-1 outline-white/5 rounded-[min(1vw,12px)] overflow-hidden">
            <img
              src={heroImage}
              alt="Diagnose-Interface zeigt Echtzeit-Sensordaten eines Fahrzeugs"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-24 bg-surface/50 border-y border-hairline"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                Expertise
              </span>
              <h2 className="text-3xl font-medium text-balance max-w-[35ch]">
                Unsere Kernkompetenzen
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 ring-1 ring-white/5">
              {services.map((s) => (
                <article
                  key={s.code}
                  className="bg-background p-8 flex flex-col gap-4"
                >
                  <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-tighter">
                    {s.code}
                  </span>
                  <h3 className="text-xl font-medium">{s.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                    {s.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section id="technik" className="py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-medium text-balance">
                Gesetzlich sicher.
                <br />
                TÜV-konform.
              </h2>
              <p className="text-muted-foreground max-w-[48ch] text-pretty">
                Alle Modifikationen und Diagnosen erfolgen unter strikter
                Einhaltung der geltenden Gesetze und Herstellerrichtlinien. Wir
                garantieren professionelle Arbeit ohne Garantieverlust.
              </p>
              <div className="flex items-center gap-8 py-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    Prüfung
                  </span>
                  <span className="text-sm font-medium">TÜV-konform</span>
                </div>
                <div className="w-px h-8 bg-surface-elevated" />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    Region
                  </span>
                  <span className="text-sm font-medium">Würzburg & Bayern</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-square bg-surface rounded-[min(1vw,12px)] outline outline-1 -outline-offset-1 outline-white/5 flex flex-col items-center justify-center p-12 text-center">
            <div className="size-24 rounded-full border-2 border-surface-elevated border-t-muted-foreground flex items-center justify-center mb-6">
              <span className="font-mono text-xl font-medium italic">GD3</span>
            </div>
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Zertifizierte Prüfung
            </span>
            <p className="text-xs text-muted-foreground mt-2">
              System-ID: 993-AUT-2024
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="standort"
        className="py-24 bg-background border-t border-hairline"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            <div className="flex flex-col gap-6 max-w-[35ch]">
              <span className="font-mono text-sm font-medium">
                GD3 FAHRZEUGTECHNIK
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Ihr Partner für präzise Fahrzeugdiagnostik in Unterfranken. Wir
                verbinden Ingenieurskunst mit moderner Softwaretechnik.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                Kontakt
              </span>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:hallo@gd3-diagnose.de"
                  className="text-lg font-medium hover:text-muted-foreground transition-colors"
                >
                  hallo@gd3-diagnose.de
                </a>
                <span className="text-sm text-muted-foreground">
                  Würzburg, Deutschland
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                Rechtliches
              </span>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
                  Impressum
                </a>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
                  Datenschutz
                </a>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
                  AGB
                </a>
              </div>
            </div>
          </div>
          <div className="mt-24 pt-8 border-t border-hairline flex justify-between items-center">
            <span className="text-[10px] font-mono text-zinc-600">
              © 2024 GD3 TECHNOLOGIES
            </span>
            <span className="text-[10px] font-mono text-zinc-600">
              49.7913° N, 9.9533° E
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
