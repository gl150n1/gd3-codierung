import { createFileRoute, Link } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { LangToggle } from "@/components/lang-toggle";

export const Route = createFileRoute("/datenschutz")({
  head: () => {
    const t = (typeof window !== "undefined" ? (window as any).__GD3_T__ : undefined) as ReturnType<typeof useT> | undefined;
    return {
      meta: [
        { title: t?.datenschutz.metaTitle ?? "Datenschutzerklärung — GD3 Codierung Würzburg" },
        { name: "description", content: t?.datenschutz.metaDesc ?? "Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten bei GD3 Codierung in Würzburg." },
        { name: "robots", content: "index,follow" },
      ],
      links: [{ rel: "canonical", href: "/datenschutz" }],
    };
  },
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
  const t = useT();
  const d = t.datenschutz;
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
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight">{d.title}</h1>
        </div>

        <Section title={d.sec1Title}>
          <p className="whitespace-pre-line">{d.sec1Text}</p>
        </Section>

        <Section title={d.sec2Title}>
          <p>{d.sec2Text}</p>
        </Section>

        <Section title={d.sec3Title}>
          <p>{d.sec3Text}</p>
        </Section>

        <Section title={d.sec4Title}>
          <p>{d.sec4Text}</p>
        </Section>

        <Section title={d.sec5Title}>
          <p>{d.sec5Text}</p>
        </Section>

        <Section title={d.sec6Title}>
          <p>{d.sec6Text}</p>
        </Section>

        <Section title={d.sec7Title}>
          <p>{d.sec7Text}</p>
        </Section>

        <Section title={d.sec8Title}>
          <p>{d.sec8Text}</p>
        </Section>
      </main>
      <footer className="border-t border-hairline py-8">
        <div className="max-w-4xl mx-auto px-6 flex justify-between text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          <span>© 2026 GD3 Codierung</span>
          <Link to="/impressum" className="hover:text-foreground">{t.footer.imprint}</Link>
        </div>
      </footer>
    </div>
  );
}
