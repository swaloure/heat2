"use client"

import { useTranslation } from "@/lib/i18n"
import type { Product } from "@/lib/products"
import type { Locale } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const categoryColors: Record<string, string> = {
  chemistry: "bg-amber-100 text-amber-800",
  metals: "bg-slate-200 text-slate-700",
  equipment: "bg-orange-100 text-orange-800",
}

const categoryLabels: Record<string, Record<string, string>> = {
  chemistry: { ru: "Химия", kz: "Химия", en: "Chemistry" },
  metals: { ru: "Металлы", kz: "Металдар", en: "Metals" },
  equipment: { ru: "Оборудование", kz: "Жабдықтар", en: "Equipment" },
}

export function ProductCard({ product }: { product: Product }) {
  const { locale, t } = useTranslation()
  const lang = locale as Locale

  return (
    <div className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-md">
      <div className="mb-3 flex items-start justify-between gap-2">
        <span
          className={cn(
            "inline-block rounded-full px-2.5 py-0.5 text-xs font-medium",
            categoryColors[product.category]
          )}
        >
          {categoryLabels[product.category]?.[lang] ?? product.category}
        </span>
      </div>
      <h3 className="mb-2 text-base font-semibold text-card-foreground leading-snug">
        {product.name[lang]}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {product.description[lang]}
      </p>
      <div className="mt-auto">
        <a
          href="/contacts"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent/80"
        >
          {t("catalog.inquire")}
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  )
}
