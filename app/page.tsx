"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { Hero } from "@/components/hero"
import { CategoryCard } from "@/components/category-card"

function FlaskIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3h6M10 3v7.4a2 2 0 0 1-.4 1.2L4 19.2a1.5 1.5 0 0 0 1.2 2.3h13.6a1.5 1.5 0 0 0 1.2-2.3l-5.6-7.6A2 2 0 0 1 14 10.4V3" />
      <path d="M8.5 14h7" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  )
}

function CogIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  )
}

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Categories Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 max-w-xl">
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground lg:text-3xl text-balance">
              {t("categories.title")}
            </h2>
            <p className="text-base text-muted-foreground text-pretty">
              {t("categories.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <CategoryCard
              title={t("cat.chemistry")}
              description={t("cat.chemistry.desc")}
              icon={<FlaskIcon />}
              href="/catalog?category=chemistry"
            />
            <CategoryCard
              title={t("cat.metals")}
              description={t("cat.metals.desc")}
              icon={<LayersIcon />}
              href="/catalog?category=metals"
            />
            <CategoryCard
              title={t("cat.equipment")}
              description={t("cat.equipment.desc")}
              icon={<CogIcon />}
              href="/catalog?category=equipment"
            />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="border-y border-border bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
            <div className="lg:w-1/2">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground lg:text-3xl text-balance">
                {t("about.preview.title")}
              </h2>
              <p className="mb-6 text-base leading-relaxed text-muted-foreground text-pretty">
                {t("about.preview.text")}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
              >
                {t("about.preview.link")}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:w-1/2">
              {[
                { icon: "01", title: t("about.mission.title") },
                { icon: "02", title: t("about.industries.title") },
                { icon: "03", title: t("about.capabilities.title") },
                { icon: "04", title: t("about.geography.title") },
              ].map((item) => (
                <div
                  key={item.icon}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <span className="mb-2 block text-2xl font-bold text-accent/30">{item.icon}</span>
                  <span className="text-sm font-semibold text-card-foreground">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-primary-foreground lg:text-3xl text-balance">
            {t("cta.title")}
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-base text-primary-foreground/60 text-pretty">
            {t("cta.text")}
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </main>
  )
}
