"use client"

import { useTranslation } from "@/lib/i18n"

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

export default function ContactsPage() {
  const { t } = useTranslation()

  const contactItems = [
    {
      icon: <PhoneIcon />,
      label: t("contacts.phone"),
      value: "+7 (700) 000-00-00",
      href: "tel:+77000000000",
    },
    {
      icon: <MailIcon />,
      label: t("contacts.email"),
      value: "info@hec.kz",
      href: "mailto:info@hec.kz",
    },
    {
      icon: <MapPinIcon />,
      label: t("contacts.address"),
      value: "Kazakhstan",
      href: undefined,
    },
    {
      icon: <ClockIcon />,
      label: t("contacts.hours"),
      value: t("contacts.hours.value"),
      href: undefined,
    },
  ]

  return (
    <main className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Page header */}
        <div className="mb-12 max-w-xl">
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            {t("contacts.title")}
          </h1>
          <p className="text-base text-muted-foreground text-pretty">
            {t("contacts.subtitle")}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {contactItems.map((item) => {
              const content = (
                <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                    {item.icon}
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-base font-semibold text-card-foreground">{item.value}</p>
                  </div>
                </div>
              )

              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="transition-shadow hover:shadow-md rounded-lg"
                  >
                    {content}
                  </a>
                )
              }
              return <div key={item.label}>{content}</div>
            })}
          </div>

          {/* Note card */}
          <div className="flex flex-col justify-between rounded-lg bg-primary p-8 lg:p-10">
            <div>
              <h2 className="mb-4 text-xl font-bold text-primary-foreground lg:text-2xl text-balance">
                Heat Energy Capital
              </h2>
              <p className="text-sm leading-relaxed text-primary-foreground/70 text-pretty">
                {t("contacts.note")}
              </p>
            </div>
            <div className="mt-8 border-t border-primary-foreground/10 pt-6">
              <p className="text-xs text-primary-foreground/40 uppercase tracking-wider">B2B Industrial Supply</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
