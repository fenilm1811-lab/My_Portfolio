import { useEffect, useRef, useState } from "react"

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down")

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let lastY = window.scrollY

    const handleScroll = () => {
      const y = window.scrollY
      setScrollDirection(y > lastY ? "down" : "up")
      lastY = y
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px", ...options }
    )

    observer.observe(el)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [options])

  return { ref, inView, scrollDirection }
}
