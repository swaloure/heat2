"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface CategoryCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  className?: string
}

export function CategoryCard({ title, description, icon, href, className }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg lg:p-8",
        className
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-auto pt-4">
        <span className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-transform group-hover:translate-x-1">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
