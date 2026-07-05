import { useLang, setLang, type Lang } from "@/lib/i18n";

export function LangToggle() {
  const lang = useLang();
  const btn = (code: Lang, flag: string, label: string) => (
    <button
      key={code}
      onClick={() => setLang(code)}
      aria-label={label}
      aria-pressed={lang === code}
      className={`h-7 px-2 inline-flex items-center gap-1 rounded-sm text-xs font-mono uppercase tracking-widest ring-1 transition-colors ${
        lang === code
          ? "bg-surface-elevated ring-accent-blue/50 text-foreground"
          : "bg-surface ring-[var(--hairline-strong)] text-muted-foreground hover:text-foreground"
      }`}
    >
      <span aria-hidden className="text-sm leading-none">{flag}</span>
      {code}
    </button>
  );
  return (
    <div className="flex items-center gap-1">
      {btn("de", "🇩🇪", "Deutsch")}
      {btn("en", "🇬🇧", "English")}
    </div>
  );
}
