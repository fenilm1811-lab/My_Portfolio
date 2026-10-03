"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Loader({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const duration = 800

    const tick = () => {
      const elapsed = Date.now() - startTime
      const p = Math.min(elapsed / duration, 1)
      setProgress(p)
      if (p < 1) {
        requestAnimationFrame(tick)
      } else {
        const timer = setTimeout(() => setShow(false), 200)
        return () => clearTimeout(timer)
      }
    }

    const id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <>
      {show && (
        <div
          className={cn(
            "fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500",
            !show && "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 rounded-full border-2 border-accent/10" />
              <div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent animate-spin"
                style={{ animationDuration: "1s" }}
              />
              <div
                className="absolute inset-2 rounded-full border border-accent/30 border-b-transparent animate-spin"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "1.5s",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="h-2 w-2 rounded-full bg-accent"
                  style={{
                    opacity: 0.3 + progress * 0.7,
                    transform: `scale(${0.5 + progress * 0.5})`,
                  }}
                />
              </div>
            </div>
            <div className="w-32 space-y-2">
              <div className="h-1 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-accent transition-all duration-300 ease-out"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
              <p className="text-center text-xs font-medium text-muted-foreground tracking-wider uppercase">
                Loading
              </p>
            </div>
          </div>
        </div>
      )}
      {children}
    </>
  )
}
