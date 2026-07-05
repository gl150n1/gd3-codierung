import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircleMore, Check } from "lucide-react";
import { useT } from "@/lib/i18n";
import { LangToggle } from "@/components/lang-toggle";

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

const productCodes = ["P01", "P02", "P03", "P04", "P05", "P06", "P07", "P08"];

function Preise() {
  const t = useT();
  return (
    <div className="bg-background text-foreground font-sans min-h-screen">
      <header className="border-b border-hairline sticky top-0 bg-background/80 backdrop-blur-md z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-mono text-sm font-medium">
            GD3 <span className="text-accent-blue">//</span> DIAGNOSE
          </Link>
          <div className="flex items-center gap-3">
            <LangToggle />
            <Link to="/" className="text-xs uppercase font-mono tracking-widest text-muted-foreground hover:text-foreground">
              {t.nav.backHome}
            </Link>
          </div>
        </div>
      </header>

      <section className="border-b border-hairline py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-5">
          <span className="font-mono text-xs text-accent-blue uppercase tracking-widest">{t.preise.eyebrow}</span>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight max-w-[22ch]">
            {t.preise.title1} <span className="text-muted-foreground">{t.preise.title2}</span>
          </h1>
          <p className="text-muted-foreground max-w-[60ch] text-pretty leading-relaxed">{t.preise.desc}</p>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.preise.vat}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--hairline-strong)] ring-1 ring-hairline">
            {t.preise.products.map((p, i) => (
              <article key={i} className="bg-background p-8 flex flex-col gap-5 hover:bg-surface transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">/ {productCodes[i]}</span>
                  <span className="text-accent-blue font-mono text-sm">{p.price}</span>
                </div>
                <h3 className="text-xl font-medium leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty leading-relaxed flex-1">{p.body}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.tags?.map((tg) => (
                    <span key={tg} className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 bg-surface ring-1 ring-[var(--hairline-strong)] rounded-sm text-muted-foreground">
                      {tg}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://wa.me/4915734685334?text=${encodeURIComponent(`${t.preise.waPrefix} ${p.title} (${p.price})`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium mt-2 text-foreground hover:text-accent-blue transition-colors"
                >
                  <MessageCircleMore className="size-4" /> {t.preise.inquire}
                </a>
              </article>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {t.preise.badges.map((b) => (
              <div key={b} className="flex items-center gap-3 p-5 bg-surface/40 ring-1 ring-hairline rounded-sm">
                <Check className="size-4 text-accent-blue" />
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-hairline py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between gap-4 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          <span>{t.preise.footerCopy}</span>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-foreground">{t.footer.imprint}</Link>
            <Link to="/datenschutz" className="hover:text-foreground">{t.footer.privacy}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
