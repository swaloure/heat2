"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-center px-4 py-24 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary-foreground/70">
              B2B Industrial Supply
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary-foreground text-balance lg:text-5xl xl:text-6xl">
            {t("hero.title")}
          </h1>

          <p className="mb-2 text-lg font-medium text-primary-foreground/90 text-pretty lg:text-xl">
            {t("hero.subtitle")}
          </p>

          <p className="mb-8 text-base text-primary-foreground/60 text-pretty lg:text-lg">
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              {t("hero.cta")}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/25 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              {t("hero.contact")}
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid w-full grid-cols-2 gap-6 border-t border-primary-foreground/10 pt-8 lg:grid-cols-4">
          {[
            { value: "150+", label: t("stats.products") },
            { value: "5+", label: t("stats.industries") },
            { value: "50+", label: t("stats.partners") },
            { value: "10+", label: t("stats.experience") },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-accent lg:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-primary-foreground/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
