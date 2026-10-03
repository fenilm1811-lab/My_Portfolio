"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { AnimatedSection } from "@/components/ui/animated-section"
import { SOCIAL_LINKS, PERSONAL } from "@/lib/data"

const TYPED_TEXTS = [
  "Full-Stack Engineer",
  "React & Next.js Specialist",
  "Node.js & NestJS Builder",
]

export default function Hero() {
  const [typedIndex, setTypedIndex] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = TYPED_TEXTS[typedIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setTypedText(currentText.slice(0, typedText.length + 1))
          if (typedText.length === currentText.length) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setTypedText(currentText.slice(0, typedText.length - 1))
          if (typedText.length === 0) {
            setIsDeleting(false)
            setTypedIndex((typedIndex + 1) % TYPED_TEXTS.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, typedIndex])

  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-32"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,_rgba(94,164,255,0.22),transparent_55%)]" />
      <div className="absolute left-1/2 top-32 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <Container>
        <AnimatedSection>
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Available for product engineering and SaaS work
            </div>

            <div className="relative mx-auto mb-8 flex w-fit items-center justify-center">
              <div className="absolute inset-0 -z-10 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative h-56 w-56 overflow-hidden rounded-full border-[6px] border-white bg-white shadow-[0_0_30px_rgba(94,164,255,0.18)] sm:h-64 sm:w-64 md:h-72 md:w-72">
                <Image
                  src="/images/profile.jpeg"
                  alt={`${PERSONAL.name} avatar`}
                  width={700}
                  height={700}
                  priority
                  className="h-full w-full scale-[1.6] object-cover object-center"
                  style={{ transformOrigin: "center 55%" }}
                />
              </div>
            </div>

            <h1 className="text-4xl font-black tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {PERSONAL.name}
            </h1>

            <div className="mt-4 flex min-h-10 items-center justify-center text-lg font-semibold text-accent sm:text-xl">
              {typedText}
              <span className="ml-1 animate-pulse">|</span>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm text-muted-foreground sm:text-base">
              {PERSONAL.about}
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1.5 backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                {PERSONAL.location}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1.5 backdrop-blur-sm">
                <Mail className="h-3.5 w-3.5 text-accent" />
                {PERSONAL.email}
              </span>
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#contact">
                  <Mail className="h-4 w-4" />
                  Get in touch
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link
                  href={PERSONAL.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4" />
                  Download resume
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="#projects">
                  View projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Experience", value: "2+ Years" },
                { label: "Products built", value: "10+" },
                { label: "Focus", value: "AI + SaaS" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card/60 p-4 shadow-sm backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-center gap-3">
              {SOCIAL_LINKS.map((link, i) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent hover:shadow-md"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                )
              })}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
