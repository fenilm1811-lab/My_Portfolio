"use client"

import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

export function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const { ref, inView, scrollDirection } = useInView()

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        inView
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : scrollDirection === "up"
            ? "-translate-x-12 translate-y-0 scale-[0.97] opacity-0"
            : "translate-x-12 translate-y-0 scale-[0.97] opacity-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
