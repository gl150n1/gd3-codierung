import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImage from "@/assets/diagnostic-hero.jpg";
import logoAsset from "@/assets/gd3-logo.png";
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
import { useT } from "@/lib/i18n";
import { LangToggle } from "@/components/lang-toggle";

const VEHICLE_DATA: Record<string, string[]> = {
  Audi: [
    "A1", "A3", "A4", "A5", "A6", "A7", "A8",
    "Q2", "Q3", "Q5", "Q7", "Q8",
    "TT", "R8",
    "e-tron", "e-tron GT",
    "RS3", "RS4", "RS5", "RS6", "RS7",
    "S3", "S4", "S5", "S6", "S7", "S8",
  ],
  Porsche: [
    "911", "718 Boxster", "718 Cayman",
    "Panamera", "Cayenne", "Macan", "Taycan",
  ],
  Seat: [
    "Ibiza", "Leon", "Toledo",
    "Arona", "Ateca", "Tarraco",
    "Cupra Formentor", "Cupra Leon", "Cupra Born",
    "Alhambra", "Mii",
  ],
  Skoda: [
    "Fabia", "Octavia", "Superb", "Scala",
    "Kamiq", "Karoq", "Kodiaq", "Enyaq",
    "Citigo", "Rapid", "Yeti",
  ],
  VW: [
    "Polo", "Golf", "Passat", "Jetta", "Bora",
    "Tiguan", "Touareg", "Arteon",
    "T-Roc", "T-Cross", "Taigo",
    "ID.3", "ID.4", "ID.5", "ID.7", "ID.Buzz",
    "Caddy", "Transporter",
    "Sharan", "Touran",
    "Beetle", "Scirocco", "Up!", "Phaeton",
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VCDS Coding & Auto Programmierung Würzburg & Berlin — GD3 Diagnose" },
      {
        name: "description",
        content:
          "VCDS Coding, Diagnose & Freischaltung versteckter Funktionen in Würzburg & Berlin. Spezialist für VW, Audi, Skoda, Seat. Retrofit-Codierung, Fehleranalyse, faire Preise.",
      },
      { name: "keywords", content: "VCDS Würzburg, VCDS Berlin, Auto coding Würzburg, Auto coding Berlin, Audi coding Würzburg, Audi coding Berlin, VW Diagnose Würzburg, VW Diagnose Berlin, Skoda Codierung, Seat Codierung, Retrofit Würzburg, Retrofit Berlin" },
      { property: "og:title", content: "VCDS Coding & Auto Programmierung Würzburg & Berlin — GD3" },
      {
        property: "og:description",
        content:
          "Professionelle Fahrzeugdiagnose, VCDS Codierung und Feature-Freischaltung für VW, Audi, Skoda, Seat in Würzburg & Berlin.",
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
            "VCDS Coding, Diagnose und Programmierung für VW, Audi, Skoda und Seat in Würzburg & Berlin.",
          areaServed: ["Würzburg", "Berlin"],
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

const serviceIcons = [Activity, Wrench, Sparkles, Cpu, AlertCircle, Car];
const serviceCodes = ["01 / VCDS", "02 / CODING", "03 / HIDDEN", "04 / RETROFIT", "05 / ANALYSIS", "06 / VAG"];

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

function Banner() {
  const t = useT();
  return (
    <div className="bg-accent-blue/10 ring-1 ring-accent-blue/20 border-l-4 border-accent-blue">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-3">
        <MapPin className="size-4 text-accent-blue shrink-0" />
        <span className="text-sm font-medium text-foreground">
          {t.banner.text}
        </span>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="bg-background text-foreground font-sans">
      <Navigation />
      <Banner />
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
  const t = useT();
  return (
    <nav className="sticky top-0 z-50 py-4 px-6 border-b border-hairline bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#top" className="flex items-center gap-2.5 font-mono text-sm tracking-tighter font-medium">
            <img src={logoAsset} alt="GD3 Logo" className="size-8 object-contain" />
            GD3 <span className="text-accent-blue">//</span> DIAGNOSE
          </a>
          <div className="hidden md:flex items-center gap-6">
            {([
              [t.nav.services, "#services"],
              [t.nav.about, "#about"],
              [t.nav.prices, "/preise"],
              [t.nav.faq, "#faq"],
              [t.nav.contact, "#contact"],
            ] as const).map(([label, href]) =>
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
          <LangToggle />
          <ThemeToggle />
          <span className="text-[10px] font-mono text-muted-foreground uppercase hidden sm:inline">
            {t.nav.loc}
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
      aria-label="Theme"
      className="size-8 inline-flex items-center justify-center rounded-full bg-surface ring-1 ring-[var(--hairline-strong)] hover:bg-surface-elevated transition-colors"
    >
      {isLight ? <Moon className="size-3.5" /> : <Sun className="size-3.5" />}
    </button>
  );
}

function Hero() {
  const t = useT();
  return (
    <section id="top" className="relative pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={vcdsBg1} alt="" aria-hidden className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--overlay-scrim),var(--background)_85%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--accent-blue)_18%,transparent),transparent_55%)]" />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex flex-col items-start gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface ring-1 ring-[var(--hairline-strong)] rounded-full">
            <div className="size-1.5 rounded-full bg-[var(--signal)] animate-pulse" />
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
              {t.hero.badge}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] text-balance max-w-[22ch] tracking-tight">
            {t.hero.title1}{" "}
            <span className="text-accent-blue">{t.hero.title2}</span>{" "}
            <span className="text-muted-foreground">{t.hero.title3}</span>
          </h1>
          <p className="text-foreground/80 text-lg max-w-[60ch] text-pretty">{t.hero.desc}</p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#contact" className="bg-foreground text-background px-5 py-3 rounded-sm font-medium text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
              {t.hero.book}
              <span className="opacity-60">→</span>
            </a>
            <a href="#services" className="bg-surface text-foreground px-5 py-3 rounded-sm font-medium text-sm ring-1 ring-[var(--hairline-strong)] hover:bg-surface-elevated transition-colors">
              {t.hero.view}
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 text-xs font-mono text-muted-foreground uppercase tracking-widest">
            <span className="flex items-center gap-2"><Check className="size-3 text-accent-blue" /> {t.hero.c1}</span>
            <span className="flex items-center gap-2"><Check className="size-3 text-accent-blue" /> {t.hero.c2}</span>
            <span className="flex items-center gap-2"><Check className="size-3 text-accent-blue" /> {t.hero.c3}</span>
            <span className="flex items-center gap-2"><Check className="size-3 text-accent-blue" /> {t.hero.c4}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureImage() {
  const t = useT();
  return (
    <section className="pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="w-full aspect-[21/9] bg-surface outline outline-1 -outline-offset-1 outline-white/5 rounded-[min(1vw,12px)] overflow-hidden">
          <img src={heroImage} alt={t.imgAlt} className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function Services() {
  const t = useT();
  return (
    <section id="services" className="relative py-24 border-y border-hairline overflow-hidden">
      <div className="absolute inset-0">
        <img src={vcdsBg2} alt="" aria-hidden className="w-full h-full object-cover opacity-15" loading="lazy" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--background),color-mix(in_oklab,var(--background)_80%,transparent),var(--background))]" />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionHeader eyebrow={t.servicesHeader.eyebrow} title={t.servicesHeader.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--hairline-strong)] ring-1 ring-hairline mt-12">
          {t.services.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <article key={i} className="group bg-background p-8 flex flex-col gap-4 hover:bg-surface transition-colors">
                <div className="flex items-center justify-between">
                  <div className="size-10 rounded-md bg-surface ring-1 ring-white/10 flex items-center justify-center text-accent-blue group-hover:text-foreground transition-colors">
                    <Icon className="size-4" />
                  </div>
                  <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-tighter">
                    {serviceCodes[i]}
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
  const t = useT();
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col gap-6">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{t.about.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-medium text-balance leading-tight">
            {t.about.title1} <br />
            <span className="text-muted-foreground">{t.about.title2}</span>
          </h2>
          <p className="text-muted-foreground text-pretty leading-relaxed">{t.about.p1}</p>
          <p className="text-muted-foreground text-pretty leading-relaxed">{t.about.p2}</p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-accent-blue/10 ring-1 ring-accent-blue/20 rounded-[min(1vw,12px)] p-8 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <MapPin className="size-5 text-accent-blue" />
              <span className="text-sm font-mono text-accent-blue uppercase tracking-widest">{t.about.onSite}</span>
            </div>
            <p className="text-lg font-medium text-pretty leading-snug">
              {t.about.onSiteTitle1} <span className="text-accent-blue">{t.about.onSiteTitle2}</span> {t.about.onSiteTitle3}
            </p>
            <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{t.about.onSiteDesc}</p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/10 ring-1 ring-white/5 rounded-[min(1vw,12px)] overflow-hidden">
            {([["24h", t.about.stat1], ["100%", t.about.stat2]] as const).map(([num, label]) => (
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
  const t = useT();
  return (
    <section id="why" className="py-24 bg-surface/40 border-y border-hairline">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow={t.why.eyebrow} title={t.why.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {t.why.items.map((r, i) => (
            <div key={i} className="bg-background p-6 rounded-[min(1vw,12px)] ring-1 ring-white/5 flex flex-col gap-3">
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
  const t = useT();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <div className="flex flex-col mt-12 ring-1 ring-white/10 rounded-[min(1vw,12px)] overflow-hidden">
          {t.faq.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-hairline last:border-b-0 bg-surface/30">
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
  const t = useT();
  const [sent, setSent] = useState(false);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const brands = Object.keys(VEHICLE_DATA);
  const models = brand ? VEHICLE_DATA[brand] : [];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const message = String(data.get("message") || "").trim();
    const carInfo = `${brand} ${model}`.trim();
    const text = `${t.contact.waHello},%0A%0A${t.contact.waName}: ${encodeURIComponent(name)}%0A${t.contact.waCar}: ${encodeURIComponent(carInfo)}%0A%0A${encodeURIComponent(message)}`;
    const link = document.createElement("a");
    link.href = `https://wa.me/4915734685334?text=${text}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setSent(true);
    setBrand("");
    setModel("");
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-surface/40 border-y border-hairline">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-8">
          <SectionHeader eyebrow={t.contact.eyebrow} title={t.contact.title} />
          <p className="text-muted-foreground text-pretty leading-relaxed max-w-[48ch]">{t.contact.desc}</p>
          <div className="flex flex-col gap-4">
            <a href="https://wa.me/4915734685334" target="_blank" rel="noreferrer"
              className="flex items-center gap-4 p-4 bg-background rounded-md ring-1 ring-white/10 hover:ring-accent-blue/40 transition">
              <MessageCircleMore className="size-5 text-accent-blue" />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{t.contact.whatsapp}</span>
                <span className="text-sm font-medium">{t.contact.whatsappSub}</span>
              </div>
            </a>
            <a href="tel:+4915734685334"
              className="flex items-center gap-4 p-4 bg-background rounded-md ring-1 ring-white/10 hover:ring-accent-blue/40 transition">
              <Phone className="size-5 text-accent-blue" />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{t.contact.phone}</span>
                <span className="text-sm font-medium">+49 1573 4685334</span>
              </div>
            </a>
            <a href="mailto:gd3.codierung@gmail.com"
              className="flex items-center gap-4 p-4 bg-background rounded-md ring-1 ring-white/10 hover:ring-accent-blue/40 transition">
              <Mail className="size-5 text-accent-blue" />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{t.contact.email}</span>
                <span className="text-sm font-medium">gd3.codierung@gmail.com</span>
              </div>
            </a>
            <div className="flex items-center gap-4 p-4 bg-background rounded-md ring-1 ring-white/10">
              <MapPin className="size-5 text-accent-blue" />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{t.contact.location}</span>
                <span className="text-sm font-medium">{t.contact.locationVal}</span>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-background p-8 rounded-[min(1vw,12px)] ring-1 ring-white/10 flex flex-col gap-5 h-fit">
          <label className="flex flex-col gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{t.contact.fName}</span>
            <input name="name" required maxLength={100}
              className="bg-surface ring-1 ring-white/10 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-accent-blue/60"
              placeholder={t.contact.pName} />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{t.contact.fBrand}</span>
            <select
              name="brand"
              required
              value={brand}
              onChange={(e) => { setBrand(e.target.value); setModel(""); }}
              className="bg-surface ring-1 ring-white/10 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-accent-blue/60 appearance-none"
            >
              <option value="" disabled>{t.contact.pBrand}</option>
              {brands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{t.contact.fModel}</span>
            <select
              name="model"
              required
              value={model}
              disabled={!brand}
              onChange={(e) => setModel(e.target.value)}
              className="bg-surface ring-1 ring-white/10 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-accent-blue/60 appearance-none disabled:opacity-40"
            >
              <option value="" disabled>{t.contact.pModel}</option>
              {models.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{t.contact.fMsg}</span>
            <textarea name="message" required maxLength={1000} rows={4}
              className="bg-surface ring-1 ring-white/10 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-accent-blue/60 resize-none"
              placeholder={t.contact.pMsg} />
          </label>
          <button type="submit" className="bg-foreground text-background px-5 py-3 rounded-sm font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
            <MessageCircleMore className="size-4" />
            {t.contact.submit}
          </button>
          {sent && (
            <p className="text-xs font-mono text-[var(--signal)] uppercase tracking-widest text-center">
              {t.contact.sent}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const t = useT();
  return (
    <footer className="py-16 bg-background border-t border-hairline">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="flex flex-col gap-4 max-w-[35ch]">
            <div className="flex items-center gap-2.5">
              <img src={logoAsset} alt="GD3 Logo" className="size-10 object-contain" />
              <span className="font-mono text-sm font-medium">
                GD3 <span className="text-accent-blue">//</span> {t.footer.brand}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{t.footer.desc}</p>
            <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground">
              <Shield className="size-3 text-accent-blue" /> {t.footer.backup}
              <span className="text-zinc-700">·</span>
              <Clock className="size-3 text-accent-blue" /> {t.footer.appt}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{t.footer.contact}</span>
            <a href="mailto:gd3.codierung@gmail.com" className="text-sm hover:text-accent-blue transition-colors">gd3.codierung@gmail.com</a>
            <a href="tel:+4915734685334" className="text-sm hover:text-accent-blue transition-colors">+49 1573 4685334</a>
            <span className="text-sm text-muted-foreground">Würzburg & Berlin, DE</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{t.footer.legal}</span>
            <Link to="/preise" className="text-xs text-muted-foreground hover:text-foreground">{t.footer.prices}</Link>
            <Link to="/impressum" className="text-xs text-muted-foreground hover:text-foreground">{t.footer.imprint}</Link>
            <Link to="/datenschutz" className="text-xs text-muted-foreground hover:text-foreground">{t.footer.privacy}</Link>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-hairline flex flex-wrap justify-between items-center gap-2">
          <span className="text-[10px] font-mono text-zinc-600">{t.footer.copyright}</span>
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
