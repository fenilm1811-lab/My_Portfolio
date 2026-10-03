import Link from "next/link"
import { cn } from "@/lib/utils"
import { type AnchorHTMLAttributes } from "react"

export function SocialLink({
  href,
  icon: Icon,
  label,
  className,
}: {
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "text-muted-foreground hover:text-foreground hover:bg-muted inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className
      )}
    >
      <Icon className="h-4 w-4" />
      <span className="sr-only">{label}</span>
    </Link>
  )
}
