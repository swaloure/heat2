"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { useTranslation, type Locale } from "@/lib/i18n"
import { products, type Category } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { cn } from "@/lib/utils"

const categories: { key: string; value: Category | "all" }[] = [
  { key: "catalog.all", value: "all" },
  { key: "catalog.chemistry", value: "chemistry" },
  { key: "catalog.metals", value: "metals" },
  { key: "catalog.equipment", value: "equipment" },
]

export default function CatalogPage() {
  return (
    <Suspense fallback={<CatalogSkeleton />}>
      <CatalogContent />
    </Suspense>
  )
}

function CatalogSkeleton() {
  return (
    <main className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 max-w-xl">
          <div className="mb-3 h-9 w-48 animate-pulse rounded bg-muted" />
          <div className="h-5 w-72 animate-pulse rounded bg-muted" />
        </div>
        <div className="mb-8 flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-9 w-24 animate-pulse rounded-md bg-muted" />
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-52 animate-pulse rounded-lg bg-muted" />
          ))}
        </div>
      </div>
    </main>
  )
}

function CatalogContent() {
  const { t, locale } = useTranslation()
  const searchParams = useSearchParams()
  const initialCategory = (searchParams.get("category") as Category | null) ?? "all"

  const [activeCategory, setActiveCategory] = useState<Category | "all">(
    initialCategory === "chemistry" || initialCategory === "metals" || initialCategory === "equipment"
      ? initialCategory
      : "all"
  )
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    const lang = locale as Locale
    return products.filter((p) => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory
      if (!matchesCategory) return false
      if (!search.trim()) return true
      const q = search.toLowerCase()
      return (
        p.name[lang].toLowerCase().includes(q) ||
        p.description[lang].toLowerCase().includes(q)
      )
    })
  }, [activeCategory, search, locale])

  return (
    <main className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Page header */}
        <div className="mb-10 max-w-xl">
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            {t("catalog.title")}
          </h1>
          <p className="text-base text-muted-foreground text-pretty">
            {t("catalog.subtitle")}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory === cat.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {t(cat.key)}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("catalog.search")}
              className="w-full rounded-md border border-input bg-card py-2.5 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
        </div>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card py-20 text-center">
            <svg
              className="mb-4 text-muted-foreground/40"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <p className="text-sm text-muted-foreground">{t("catalog.empty")}</p>
          </div>
        )}
      </div>
    </main>
  )
}
