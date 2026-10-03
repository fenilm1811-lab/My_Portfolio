import { type HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export type BadgeVariant = "default" | "secondary" | "outline" | "accent"

const badgeVariants: Record<BadgeVariant, string> = {
  default:
    "border-transparent bg-foreground text-background hover:bg-foreground/80",
  secondary:
    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
  accent:
    "border-transparent bg-accent text-accent-foreground hover:bg-accent/80",
  outline: "text-foreground",
}

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  )
)
Badge.displayName = "Badge"
