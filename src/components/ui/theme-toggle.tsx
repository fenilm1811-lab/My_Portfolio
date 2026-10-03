"use client"

import { useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { type ThemeProviderProps } from "next-themes"
import { MoonStar, SunMedium } from "lucide-react"
import { cn } from "@/lib/utils"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const isDark = resolvedTheme === "dark"

  const toggle = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className={cn(
        "relative isolate inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground shadow-sm transition-all duration-300 hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className
      )}
    >
      <SunMedium
        className={cn(
          "absolute h-4 w-4 transition-all duration-300",
          mounted && isDark
            ? "scale-75 rotate-90 opacity-0"
            : "scale-100 rotate-0 opacity-100"
        )}
      />
      <MoonStar
        className={cn(
          "absolute h-4 w-4 transition-all duration-300",
          mounted && !isDark
            ? "scale-75 -rotate-12 opacity-0"
            : "scale-100 rotate-0 opacity-100"
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
