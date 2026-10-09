import { createFileRoute, Link } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { LangToggle } from "@/components/lang-toggle";

export const Route = createFileRoute("/impressum")({
  head: () => {
    const t = (typeof window !== "undefined" ? (window as any).__GD3_T__ : undefined) as ReturnType<typeof useT> | undefined;
    return {
      meta: [
        { title: t?.impressum.metaTitle ?? "Impressum — GD3 Codierung Würzburg" },
        { name: "description", content: t?.impressum.metaDesc ?? "Impressum und Anbieterkennzeichnung von GD3 Codierung, Glison Doci, Würzburg." },
        { name: "robots", content: "index,follow" },
      ],
      links: [{ rel: "canonical", href: "/impressum" }],
    };
  },
  component: Impressum,
});

function Impressum() {
  const t = useT();
  return (
    <div className="bg-background text-foreground font-sans min-h-screen">
      <header className="border-b border-hairline">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="font-mono text-sm font-medium">
            GD3 <span className="text-accent-blue">//</span> DIAGNOSE
          </Link>
          <div className="flex items-center gap-3">
            <LangToggle />
            <Link to="/" className="text-xs uppercase font-mono tracking-widest text-muted-foreground hover:text-foreground">
              {t.legalPages.back}
            </Link>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs text-accent-blue uppercase tracking-widest">{t.legalPages.legalLabel}</span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight">{t.impressum.title}</h1>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">{t.impressum.sectionProvider}</h2>
          <p className="text-base leading-relaxed">
            Glison Doci<br />
            GD3 Codierung<br />
            97074 Würzburg<br />
            Deutschland
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">{t.impressum.sectionArea}</h2>
          <p className="text-base leading-relaxed">{t.impressum.areaText}</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">{t.impressum.sectionContact}</h2>
          <p className="text-base leading-relaxed">
            Telefon: <a href="tel:+4915734685334" className="text-accent-blue hover:underline">+49 1573 4685334</a><br />
            E-Mail: <a href="mailto:gd3.codierung@gmail.com" className="text-accent-blue hover:underline">gd3.codierung@gmail.com</a>
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">{t.impressum.sectionVat}</h2>
          <p className="text-base leading-relaxed text-muted-foreground">{t.impressum.vatText}</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">{t.impressum.sectionContent}</h2>
          <p className="text-base leading-relaxed">
            Glison Doci<br />
            97074 Würzburg
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">{t.impressum.sectionOdr}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t.impressum.odrText}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer" className="text-accent-blue hover:underline">
              https://ec.europa.eu/consumers/odr/
            </a>
            {t.impressum.odrSuffix}
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">{t.impressum.sectionLiability}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{t.impressum.liabilityText}</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">{t.impressum.sectionCopyright}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{t.impressum.copyrightText}</p>
        </section>
      </main>
      <footer className="border-t border-hairline py-8">
        <div className="max-w-4xl mx-auto px-6 flex justify-between text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          <span>© 2026 GD3 Codierung</span>
          <Link to="/datenschutz" className="hover:text-foreground">{t.footer.privacy}</Link>
        </div>
      </footer>
    </div>
  );
}
