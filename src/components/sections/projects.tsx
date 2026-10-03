"use client"

import Link from "next/link"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FolderCode,
  Images,
  X,
} from "lucide-react"
import { GithubIcon } from "@/components/ui/icons"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { PROJECTS } from "@/lib/data"

const typeVariant = {
  "open-source": "outline",
  personal: "secondary",
  work: "accent",
} as const

function Lightbox({
  images,
  index,
  onIndexChange,
  onClose,
}: {
  images: string[]
  index: number
  onIndexChange: (index: number) => void
  onClose: () => void
}) {
  const prev = useCallback(
    () => onIndexChange((index - 1 + images.length) % images.length),
    [index, images.length, onIndexChange]
  )
  const next = useCallback(
    () => onIndexChange((index + 1) % images.length),
    [index, images.length, onIndexChange]
  )

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [onClose, prev, next])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        aria-label="Close gallery"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation()
          prev()
        }}
        className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div
        className="relative h-[75vh] w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index]}
          alt={`Project screenshot ${index + 1} of ${images.length}`}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>

      <button
        type="button"
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation()
          next()
        }}
        className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs text-white">
        {index + 1} / {images.length}
      </div>
    </div>
  )
}

export default function Projects() {
  const [gallery, setGallery] = useState<{
    images: string[]
    index: number
  } | null>(null)

  return (
    <section id="projects" className="py-16 md:py-24">
      <Container>
        <div className="space-y-12">
          <AnimatedSection>
            <div>
              <Badge variant="outline" className="mb-3">
                Projects
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                A few things I&apos;ve built
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                A collection of projects I&apos;m proud of — mostly open-source
                experiments and a few commercial products.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {PROJECTS.map((project, i) => {
              const typeColor = typeVariant[project.type] ?? "outline"
              return (
                <AnimatedSection key={project.id} delay={i * 120}>
                  <Card className="group flex flex-col border border-border bg-card transition-all duration-300 hover:bg-muted/50 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader className="p-0">
                      {project.image ? (
                        <div className="relative aspect-video overflow-hidden rounded-t-xl bg-muted">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      ) : (
                        <div className="relative flex aspect-video flex-col items-center justify-center gap-3 overflow-hidden rounded-t-xl bg-gradient-to-br from-muted via-card to-muted">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
                            <FolderCode className="h-7 w-7 text-accent" />
                          </div>
                          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                            Preview coming soon
                          </span>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col p-6">
                      <div className="mb-2 flex items-center justify-between">
                        <CardTitle className="text-xl">
                          {project.title}
                        </CardTitle>
                        <Badge variant={typeColor} className="text-xs">
                          {project.type}
                        </Badge>
                      </div>
                      <p className="mt-1 flex-1 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <Badge
                            key={tech.name}
                            variant="secondary"
                            className="text-xs transition-transform duration-200 hover:scale-105"
                          >
                            {tech.name}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {project.href.startsWith("http") ? (
                          <Button size="sm" asChild>
                            <Link
                              href={project.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                              Demo
                            </Link>
                          </Button>
                        ) : (
                          <Button size="sm" asChild>
                            <Link href={project.href}>
                              <GithubIcon className="h-3.5 w-3.5" />
                              Source
                            </Link>
                          </Button>
                        )}
                        {project.screenshots && project.screenshots.length > 0 && (
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() =>
                              setGallery({
                                images: project.screenshots!,
                                index: 0,
                              })
                            }
                          >
                            <Images className="h-3.5 w-3.5" />
                            See more images
                          </Button>
                        )}
                        {project.featured && (
                          <Badge variant="accent" className="text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>

          {gallery && (
            <Lightbox
              images={gallery.images}
              index={gallery.index}
              onIndexChange={(index) =>
                setGallery((g) => (g ? { ...g, index } : g))
              }
              onClose={() => setGallery(null)}
            />
          )}
        </div>
      </Container>
    </section>
  )
}
