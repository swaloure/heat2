"use client"

import Link from "next/link"
import { useState } from "react"
import { useTranslation } from "@/lib/i18n"
import { LanguageSwitcher } from "@/components/language-switcher"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", key: "nav.home" },
  { href: "/catalog", key: "nav.catalog" },
  { href: "/about", key: "nav.about" },
  { href: "/contacts", key: "nav.contacts" },
]

export function Header() {
  const { t } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
            <span className="text-sm font-bold text-primary-foreground tracking-tight">HE</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-base font-semibold tracking-tight text-foreground">
              Heat Energy Capital
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        {/* Language + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden sm:flex" />

          {/* Mobile hamburger */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="text-foreground"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path d="M4.5 4.5L13.5 13.5M4.5 13.5L13.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M2.25 4.5H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M2.25 9H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M2.25 13.5H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-80 border-t border-border" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {t(link.key)}
            </Link>
          ))}
          <div className="mt-2 border-t border-border pt-3 pb-1">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  )
}
