import Link from "next/link"
import { NAVIGATION } from "@/lib/constants"
import { SOCIAL_LINKS, PERSONAL } from "@/lib/data"
import { ArrowUpRight } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="container mx-auto py-8 md:py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {year} {PERSONAL.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground hover:text-foreground hover:bg-muted inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/50 transition-colors"
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{link.label}</span>
              </Link>
            )
          })}
        </div>

        <div className="mt-8 border-t border-border pt-4 text-center">
          <Link
            href={PERSONAL.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline decoration-2 underline-offset-2 hover:text-accent"
          >
            View Full Resume
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
