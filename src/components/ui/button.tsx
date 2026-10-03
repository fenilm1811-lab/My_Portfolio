import {
  type ButtonHTMLAttributes,
  cloneElement,
  forwardRef,
  type ReactElement,
} from "react"
import { cn } from "@/lib/utils"

const buttonVariants = {
  base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  shimmer:
    "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-full",
} as const

export type ButtonVariant = "default" | "outline" | "ghost" | "secondary"
export type ButtonSize = "sm" | "md" | "lg"

const variants: Record<ButtonVariant, string> = {
  default:
    "bg-accent text-accent-foreground hover:bg-accent/90 shadow-xs relative overflow-hidden",
  outline:
    "border border-border bg-card hover:bg-muted text-foreground relative overflow-hidden",
  ghost:
    "hover:bg-muted text-muted-foreground hover:text-foreground relative overflow-hidden",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/80 relative overflow-hidden",
}

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 py-2",
  lg: "h-12 px-6 text-base",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "md", asChild = false, ...props },
    ref
  ) => {
    const classes = cn(
      buttonVariants.base,
      buttonVariants.shimmer,
      variants[variant],
      sizes[size],
      className
    )

    if (asChild) {
      const child = props.children as ReactElement
      return cloneElement(child, {
        ref,
        className: cn(
          classes,
          (child.props as { className?: string }).className
        ),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any)
    }

    return <button className={classes} ref={ref} {...props} />
  }
)
Button.displayName = "Button"
