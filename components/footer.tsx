"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent">
                <span className="text-xs font-bold text-accent-foreground tracking-tight">HE</span>
              </div>
              <span className="text-base font-semibold tracking-tight">Heat Energy Capital</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
              {t("footer.description")}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2" aria-label="Footer navigation">
            <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
              {t("nav.home")}
            </span>
            <Link href="/catalog" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
              {t("nav.catalog")}
            </Link>
            <Link href="/about" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
              {t("nav.about")}
            </Link>
            <Link href="/contacts" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
              {t("nav.contacts")}
            </Link>
          </nav>

          {/* Contacts */}
          <div className="flex flex-col gap-2">
            <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
              {t("contacts.title")}
            </span>
            <a href="tel:+77000000000" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
              +7 (700) 000-00-00
            </a>
            <a href="mailto:info@hec.kz" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
              info@hec.kz
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6">
          <p className="text-xs text-primary-foreground/40">
            {year} Heat Energy Capital. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
