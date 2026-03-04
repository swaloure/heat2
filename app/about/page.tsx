"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

const sections = [
  { titleKey: "about.mission.title", textKey: "about.mission.text", num: "01" },
  { titleKey: "about.industries.title", textKey: "about.industries.text", num: "02" },
  { titleKey: "about.capabilities.title", textKey: "about.capabilities.text", num: "03" },
  { titleKey: "about.geography.title", textKey: "about.geography.text", num: "04" },
]

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <main className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Page header */}
        <div className="mb-16 max-w-2xl">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            {t("about.title")}
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            {t("about.mission.text")}
          </p>
        </div>

        {/* Content sections */}
        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((section) => (
            <div
              key={section.num}
              className="rounded-lg border border-border bg-card p-6 lg:p-8"
            >
              <span className="mb-4 block text-3xl font-bold text-accent/20">{section.num}</span>
              <h2 className="mb-3 text-lg font-semibold text-card-foreground">
                {t(section.titleKey)}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t(section.textKey)}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-lg bg-primary p-8 text-center lg:p-12">
          <h2 className="mb-3 text-xl font-bold text-primary-foreground lg:text-2xl text-balance">
            {t("cta.title")}
          </h2>
          <p className="mx-auto mb-6 max-w-lg text-sm text-primary-foreground/60 text-pretty">
            {t("cta.text")}
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            {t("cta.button")}
          </Link>
        </div>
      </div>
    </main>
  )
}
