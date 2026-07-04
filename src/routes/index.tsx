import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImage from "@/assets/diagnostic-hero.jpg";
import logoAsset from "@/assets/gd3-logo.png.asset.json";
import vcdsBg1 from "@/assets/vcds-bg-1.jpg";
import vcdsBg2 from "@/assets/vcds-bg-2.jpg";
import {
  Activity,
  Wrench,
  Sparkles,
  Cpu,
  AlertCircle,
  Car,
  Shield,
  Clock,
  MapPin,
  MessageCircleMore,
  Phone,
  Mail,
  ChevronDown,
  Check,
  Sun,
  Moon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VCDS Coding & Auto Programmierung Würzburg — GD3 Diagnose" },
      {
        name: "description",
        content:
          "VCDS Coding, Diagnose & Freischaltung versteckter Funktionen in Würzburg. Spezialist für VW, Audi, Skoda, Seat. Retrofit-Codierung, Fehleranalyse, faire Preise.",
      },
      { name: "keywords", content: "VCDS Würzburg, Auto coding Würzburg, Audi coding Würzburg, VW Diagnose Würzburg, Skoda Codierung, Seat Codierung, Retrofit Würzburg" },
      { property: "og:title", content: "VCDS Coding & Auto Programmierung Würzburg — GD3" },
      {
        property: "og:description",
        content:
          "Professionelle Fahrzeugdiagnose, VCDS Codierung und Feature-Freischaltung für VW, Audi, Skoda, Seat in Würzburg.",
      },
      { property: "og:image", content: heroImage },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "GD3 Fahrzeugdiagnose",
          description:
            "VCDS Coding, Diagnose und Programmierung für VW, Audi, Skoda und Seat in Würzburg.",
          areaServed: "Würzburg",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Würzburg",
            addressCountry: "DE",
          },
          telephone: "+49 1573 4685334",
          email: "gd3.codierung@gmail.com",
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    code: "01 / VCDS",
    icon: Activity,
    title: "VCDS Diagnose",
    body: "Tiefgreifende Systemanalyse über VCDS auf Herstellerniveau — vollständiges Auslesen aller Steuergeräte.",
  },
  {
    code: "02 / CODING",
    icon: Wrench,
    title: "Coding & Adaptationen",
    body: "Präzise Anpassung von Steuergeräten an Ihre Wünsche und nach Hardware-Nachrüstungen.",
  },
  {
    code: "03 / HIDDEN",
    icon: Sparkles,
    title: "Hidden Feature Aktivierung",
    body: "Freischaltung versteckter Komfortfunktionen: Abbiegelicht, Coming-Home, Spurhalter und mehr.",
  },
  {
    code: "04 / RETROFIT",
    icon: Cpu,
    title: "Retrofit Programmierung",
    body: "Einbindung nachgerüsteter Hardware: Tempomat, Park-Sensoren, Multifunktionslenkrad, Apple CarPlay.",
  },
  {
    code: "05 / ANALYSIS",
    icon: AlertCircle,
    title: "Fehlercode-Analyse",
    body: "Logische Auswertung komplexer Fehlerspeicher zur gezielten Instandsetzung — ohne unnötigen Teiletausch.",
  },
  {
    code: "06 / VAG",
    icon: Car,
    title: "VW · Audi · Skoda · Seat",
    body: "Spezialisiert auf die gesamte Volkswagen-Gruppe — von älteren MQB- bis hin zu aktuellen MEB-Plattformen.",
  },
];

const reasons = [
  { title: "Professionelle Tools", body: "Originale VCDS-Lizenz, ODIS-fähige Hardware und kalibrierte Messtechnik." },
  { title: "Faire Preise", body: "Transparente Festpreise pro Codierung — keine versteckten Kosten." },
  { title: "Schnelle Termine", body: "Meist innerhalb von 24 Stunden vor Ort in Würzburg." },
  { title: "Lokale Expertise", body: "Persönlicher Ansprechpartner direkt in Unterfranken." },
  { title: "Klare Kommunikation", body: "Verständliche Erklärung jeder Änderung — vor und nach der Arbeit." },
  { title: "Garantiert sicher", body: "Vollständiges Backup vor jeder Codierung. Reversibel und TÜV-konform." },
];

const faqs = [
  {
    q: "Welche Fahrzeuge unterstützt ihr?",
    a: "Wir sind spezialisiert auf die Volkswagen-Gruppe: VW, Audi, Skoda und Seat — alle Modelle ab Baujahr 2005 inklusive aktueller MEB-Elektrofahrzeuge.",
  },
  {
    q: "Wie lange dauert eine Codierung?",
    a: "Einzelne Feature-Freischaltungen dauern meist 15–30 Minuten. Komplexe Retrofit-Codierungen oder Komplettauslesungen 1–2 Stunden.",
  },
  {
    q: "Ist Coding sicher für mein Fahrzeug?",
    a: "Ja. Vor jeder Änderung erstellen wir ein vollständiges Backup der Steuergeräte. Alle Anpassungen sind reversibel und bleiben innerhalb der Herstellerparameter.",
  },
  {
    q: "Brauche ich einen Termin?",
    a: "Ja, bitte. So können wir uns die nötige Zeit für Ihr Fahrzeug nehmen. Termine vereinbaren wir am schnellsten via WhatsApp.",
  },
  {
    q: "Verliere ich die Garantie?",
    a: "Reine Software-Codierungen innerhalb der Herstellerparameter sind unkritisch. Bei Retrofit-Arbeiten beraten wir Sie individuell zu Ihrem Modell.",
  },
];

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/4915734685334"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

function Index() {
  return (
    <div className="bg-background text-foreground font-sans">
      <Navigation />
      <Hero />
      <FeatureImage />
      <Services />
      <About />
      <WhyChooseMe />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function Navigation() {
  return (
    <nav className="sticky top-0 z-50 py-4 px-6 border-b border-hairline bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#top" className="flex items-center gap-2.5 font-mono text-sm tracking-tighter font-medium">
            <img src={logoAsset.url} alt="GD3 Logo" className="size-8 object-contain" />
            GD3 <span className="text-accent-blue">//</span> DIAGNOSE
          </a>
          <div className="hidden md:flex items-center gap-6">
            {[
              ["Services", "#services"],
              ["Über mich", "#about"],
              ["Preise", "/preise"],
              ["FAQ", "#faq"],
              ["Kontakt", "#contact"],
            ].map(([label, href]) =>
              href.startsWith("/") ? (
                <Link key={href} to={href} className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
                  {label}
                </Link>
              ) : (
                <a key={href} href={href} className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
                  {label}
                </a>
              ),
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <span className="text-[10px] font-mono text-muted-foreground uppercase hidden sm:inline">
            Würzburg DE
          </span>
          <div className="size-1.5 rounded-full bg-[var(--signal)] shadow-[0_0_8px_color-mix(in_oklab,var(--signal)_60%,transparent)]" />
        </div>
      </div>
    </nav>
  );
}

function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  useEffect(() => {
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);
  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("gd3-theme", next ? "light" : "dark");
    } catch {}
  };
  return (
    <button
      onClick={toggle}
      aria-label="Theme umschalten"
      className="size-8 inline-flex items-center justify-center rounded-full bg-surface ring-1 ring-[var(--hairline-strong)] hover:bg-surface-elevated transition-colors"
    >
      {isLight ? <Moon className="size-3.5" /> : <Sun className="size-3.5" />}
    </button>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={vcdsBg1}
          alt=""
          aria-hidden
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--overlay-scrim),var(--background)_85%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--accent-blue)_18%,transparent),transparent_55%)]" />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex flex-col items-start gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface ring-1 ring-[var(--hairline-strong)] rounded-full">
            <div className="size-1.5 rounded-full bg-[var(--signal)] animate-pulse" />
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
              VCDS · VAG-Spezialist · Würzburg
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] text-balance max-w-[22ch] tracking-tight">
            Professionelles VCDS Coding &{" "}
            <span className="text-accent-blue">Auto Programmierung</span>{" "}
            <span className="text-muted-foreground">in Würzburg.</span>
          </h1>
          <p className="text-foreground/80 text-lg max-w-[60ch] text-pretty">
            Diagnose, Codierung und Freischaltung versteckter Funktionen für
            VW, Audi, Skoda und Seat. Persönlich, transparent und mit
            originaler VCDS-Hardware.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#contact"
              className="bg-foreground text-background px-5 py-3 rounded-sm font-medium text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Termin buchen
              <span className="opacity-60">→</span>
            </a>
            <a
              href="#services"
              className="bg-surface text-foreground px-5 py-3 rounded-sm font-medium text-sm ring-1 ring-[var(--hairline-strong)] hover:bg-surface-elevated transition-colors"
            >
              Leistungen ansehen
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 text-xs font-mono text-muted-foreground uppercase tracking-widest">
            <span className="flex items-center gap-2"><Check className="size-3 text-accent-blue" /> Original VCDS</span>
            <span className="flex items-center gap-2"><Check className="size-3 text-accent-blue" /> Backup vor jeder Codierung</span>
            <span className="flex items-center gap-2"><Check className="size-3 text-accent-blue" /> Termine innerhalb 24h</span>
            <span className="flex items-center gap-2"><Check className="size-3 text-accent-blue" /> Kostenlos vor Ort – Würzburg &amp; Umgebung</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureImage() {
  return (
    <section className="pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="w-full aspect-[21/9] bg-surface outline outline-1 -outline-offset-1 outline-white/5 rounded-[min(1vw,12px)] overflow-hidden">
          <img
            src={heroImage}
            alt="Diagnose-Interface mit Echtzeit-Sensordaten eines VW/Audi Fahrzeugs"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24 border-y border-hairline overflow-hidden">
      <div className="absolute inset-0">
        <img src={vcdsBg2} alt="" aria-hidden className="w-full h-full object-cover opacity-15" loading="lazy" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--background),color-mix(in_oklab,var(--background)_80%,transparent),var(--background))]" />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionHeader eyebrow="Leistungen" title="Was wir für Ihr Fahrzeug tun." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--hairline-strong)] ring-1 ring-hairline mt-12">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article key={s.code} className="group bg-background p-8 flex flex-col gap-4 hover:bg-surface transition-colors">
                <div className="flex items-center justify-between">
                  <div className="size-10 rounded-md bg-surface ring-1 ring-white/10 flex items-center justify-center text-accent-blue group-hover:text-foreground transition-colors">
                    <Icon className="size-4" />
                  </div>
                  <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-tighter">
                    {s.code}
                  </span>
                </div>
                <h3 className="text-xl font-medium">{s.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{s.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col gap-6">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Über GD3</span>
          <h2 className="text-3xl md:text-4xl font-medium text-balance leading-tight">
            Leidenschaft für Autos. <br />
            <span className="text-muted-foreground">Präzision in der Technik.</span>
          </h2>
          <p className="text-muted-foreground text-pretty leading-relaxed">
            GD3 ist Ihr lokaler Spezialist für VCDS Coding und
            Fahrzeugprogrammierung in Würzburg. Aus Leidenschaft für
            VW- und Audi-Technik entstanden, biete ich persönlichen,
            ehrlichen Service ohne Werkstattgrößen-Aufschlag.
          </p>
          <p className="text-muted-foreground text-pretty leading-relaxed">
            Jedes Fahrzeug bekommt die Zeit, die es braucht. Sie wissen
            vorher genau, was passiert — und nachher genau, was geändert wurde.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-accent-blue/10 ring-1 ring-accent-blue/20 rounded-[min(1vw,12px)] p-8 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <MapPin className="size-5 text-accent-blue" />
              <span className="text-sm font-mono text-accent-blue uppercase tracking-widest">Vor-Ort-Service</span>
            </div>
            <p className="text-lg font-medium text-pretty leading-snug">
              Wir kommen zu Ihnen – <span className="text-accent-blue">kostenlos</span> in Würzburg und Umgebung.
            </p>
            <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
              Kein Werkstattbesuch nötig. Wir führen Codierung und Diagnose direkt bei Ihnen vor Ort durch – unkompliziert, persönlich und ohne Anfahrtskosten in der Region Würzburg.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/10 ring-1 ring-white/5 rounded-[min(1vw,12px)] overflow-hidden">
            {[
              ["24h", "Reaktionszeit"],
              ["100%", "Backup-Garantie"],
            ].map(([num, label]) => (
              <div key={label} className="bg-background p-8 flex flex-col gap-2">
                <span className="text-3xl font-medium">{num}</span>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseMe() {
  return (
    <section id="why" className="py-24 bg-surface/40 border-y border-hairline">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Warum GD3" title="Sechs Gründe, die für sich sprechen." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {reasons.map((r, i) => (
            <div key={r.title} className="bg-background p-6 rounded-[min(1vw,12px)] ring-1 ring-white/5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-accent-blue uppercase tracking-widest">
                  / 0{i + 1}
                </span>
              </div>
              <h3 className="text-base font-medium">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader eyebrow="FAQ" title="Häufig gestellte Fragen." />
        <div className="flex flex-col mt-12 ring-1 ring-white/10 rounded-[min(1vw,12px)] overflow-hidden">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-hairline last:border-b-0 bg-surface/30">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-surface transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-base">{f.q}</span>
                  <ChevronDown className={`size-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed text-pretty">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const car = String(data.get("car") || "").trim();
    const message = String(data.get("message") || "").trim();
    const text = `Hallo GD3,%0A%0AName: ${encodeURIComponent(name)}%0AFahrzeug: ${encodeURIComponent(car)}%0A%0A${encodeURIComponent(message)}`;
    window.open(`https://wa.me/4915734685334?text=${text}`, "_blank");
    setSent(true);
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-surface/40 border-y border-hairline">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-8">
          <SectionHeader eyebrow="Kontakt" title="Termin anfragen." />
          <p className="text-muted-foreground text-pretty leading-relaxed max-w-[48ch]">
            Schreiben Sie kurz, welches Fahrzeug Sie fahren und was Sie sich
            wünschen — ich melde mich meist innerhalb weniger Stunden zurück.
          </p>
          <div className="flex flex-col gap-4">
            <a href="https://wa.me/4915734685334" target="_blank" rel="noreferrer"
              className="flex items-center gap-4 p-4 bg-background rounded-md ring-1 ring-white/10 hover:ring-accent-blue/40 transition">
              <MessageCircleMore className="size-5 text-accent-blue" />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">WhatsApp</span>
                <span className="text-sm font-medium">Sofort schreiben</span>
              </div>
            </a>
            <a href="tel:+4915734685334"
              className="flex items-center gap-4 p-4 bg-background rounded-md ring-1 ring-white/10 hover:ring-accent-blue/40 transition">
              <Phone className="size-5 text-accent-blue" />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Telefon</span>
                <span className="text-sm font-medium">+49 1573 4685334</span>
              </div>
            </a>
            <a href="mailto:gd3.codierung@gmail.com"
              className="flex items-center gap-4 p-4 bg-background rounded-md ring-1 ring-white/10 hover:ring-accent-blue/40 transition">
              <Mail className="size-5 text-accent-blue" />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">E-Mail</span>
                <span className="text-sm font-medium">gd3.codierung@gmail.com</span>
              </div>
            </a>
            <div className="flex items-center gap-4 p-4 bg-background rounded-md ring-1 ring-white/10">
              <MapPin className="size-5 text-accent-blue" />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Standort</span>
                <span className="text-sm font-medium">Würzburg, Bayern</span>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-background p-8 rounded-[min(1vw,12px)] ring-1 ring-white/10 flex flex-col gap-5 h-fit">
          <label className="flex flex-col gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Name</span>
            <input
              name="name" required maxLength={100}
              className="bg-surface ring-1 ring-white/10 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-accent-blue/60"
              placeholder="Max Mustermann"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Fahrzeug</span>
            <input
              name="car" required maxLength={120}
              className="bg-surface ring-1 ring-white/10 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-accent-blue/60"
              placeholder="z.B. Audi A4 B9 2018"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Nachricht</span>
            <textarea
              name="message" required maxLength={1000} rows={4}
              className="bg-surface ring-1 ring-white/10 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-accent-blue/60 resize-none"
              placeholder="Welche Codierung oder Diagnose wünschen Sie?"
            />
          </label>
          <button type="submit" className="bg-foreground text-background px-5 py-3 rounded-sm font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
            <MessageCircleMore className="size-4" />
            Via WhatsApp senden
          </button>
          {sent && (
            <p className="text-xs font-mono text-[var(--signal)] uppercase tracking-widest text-center">
              ✓ WhatsApp geöffnet — Nachricht abschicken
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 bg-background border-t border-hairline">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="flex flex-col gap-4 max-w-[35ch]">
            <div className="flex items-center gap-2.5">
              <img src={logoAsset.url} alt="GD3 Logo" className="size-10 object-contain" />
              <span className="font-mono text-sm font-medium">
                GD3 <span className="text-accent-blue">//</span> FAHRZEUGTECHNIK
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              VCDS Coding, Diagnose und Programmierung für VW, Audi, Skoda und
              Seat in Würzburg & Umgebung.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground">
              <Shield className="size-3 text-accent-blue" /> Backup garantiert
              <span className="text-zinc-700">·</span>
              <Clock className="size-3 text-accent-blue" /> 24h Termine
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Kontakt</span>
            <a href="mailto:gd3.codierung@gmail.com" className="text-sm hover:text-accent-blue transition-colors">gd3.codierung@gmail.com</a>
            <a href="tel:+4915734685334" className="text-sm hover:text-accent-blue transition-colors">+49 1573 4685334</a>
            <span className="text-sm text-muted-foreground">Würzburg, DE</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Rechtliches</span>
            <Link to="/preise" className="text-xs text-muted-foreground hover:text-foreground">Preise</Link>
            <Link to="/impressum" className="text-xs text-muted-foreground hover:text-foreground">Impressum</Link>
            <Link to="/datenschutz" className="text-xs text-muted-foreground hover:text-foreground">Datenschutz</Link>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-hairline flex flex-wrap justify-between items-center gap-2">
          <span className="text-[10px] font-mono text-zinc-600">© 2026 GD3 FAHRZEUGTECHNIK</span>
          <span className="text-[10px] font-mono text-zinc-600">49.7913° N · 9.9533° E</span>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-xs text-accent-blue uppercase tracking-widest">{eyebrow}</span>
      <h2 className="text-3xl md:text-4xl font-medium text-balance max-w-[28ch] tracking-tight">{title}</h2>
    </div>
  );
}
