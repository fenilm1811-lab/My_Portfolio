"use client"

import Link from "next/link"
import { NAVIGATION } from "@/lib/constants"
import { SocialLink } from "@/components/ui/social-link"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { SOCIAL_LINKS, PERSONAL } from "@/lib/data"
import { Menu, X } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleScroll = useCallback(() => {
    const y = window.scrollY
    setScrolled(y > 20)
    const max = document.documentElement.scrollHeight - window.innerHeight
    setProgress(max > 0 ? Math.min((y / max) * 100, 100) : 0)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-border transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 shadow-sm"
          : "bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-accent" />
      <div
        className="absolute inset-x-0 top-0 h-[2px] bg-accent/60"
        style={{ width: `${progress}%` }}
      />
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/#hero" className="font-semibold text-lg leading-tight">
          {PERSONAL.name}
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            {SOCIAL_LINKS.map((link) => (
              <SocialLink key={link.name} {...link} />
            ))}
          </div>
          <ThemeToggle className="md:hidden" />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          <ThemeToggle className="hidden md:inline-flex" />
        </div>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-border bg-background transition-[max-height] duration-300 ease-in-out",
          open ? "max-h-64" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-2 p-4">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2 p-4 pt-0">
          {SOCIAL_LINKS.map((link) => (
            <SocialLink key={link.name} {...link} />
          ))}
        </div>
      </div>
    </header>
  )
}
