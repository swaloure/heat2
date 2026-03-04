"use client"

import { useTranslation, type Locale } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const locales: { code: Locale; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "kz", label: "KZ" },
  { code: "en", label: "EN" },
]

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useTranslation()

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {locales.map((l, i) => (
        <span key={l.code} className="flex items-center">
          <button
            onClick={() => setLocale(l.code)}
            className={cn(
              "px-1.5 py-0.5 text-sm font-medium transition-colors rounded",
              locale === l.code
                ? "text-accent"
                : "text-muted-foreground hover:text-foreground"
            )}
            aria-label={`Switch language to ${l.label}`}
          >
            {l.label}
          </button>
          {i < locales.length - 1 && (
            <span className="text-border select-none" aria-hidden="true">|</span>
          )}
        </span>
      ))}
    </div>
  )
}
