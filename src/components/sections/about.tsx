import Link from "next/link"
import { Calendar, ExternalLink } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/ui/animated-section"
import { EXPERIENCE, PERSONAL } from "@/lib/data"
import { formatDateRange } from "@/lib/utils"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <Container>
        <div className="space-y-12">
          <AnimatedSection>
            <div>
              <Badge variant="outline" className="mb-3">
                About
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Product-minded engineer building reliable software.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div className="prose prose-zinc dark:prose-invert max-w-none">
                <p className="text-balance text-muted-foreground">
                  {PERSONAL.about}
                </p>
                <p className="text-muted-foreground">
                  My work spans requirements, architecture, API design, frontend
                  delivery, deployment, and iteration — with a strong focus on
                  scalability, security, and maintainability.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link
                      href={PERSONAL.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Download my resume
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  "Full-stack product development",
                  "AI-integrated SaaS solutions",
                  "Authentication and RBAC systems",
                  "API + database architecture",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-border bg-card/70 p-4 text-sm text-muted-foreground shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div>
              <Badge variant="outline" className="mb-4">
                Experience
              </Badge>
              <ul className="space-y-6">
                {EXPERIENCE.map((exp) => (
                  <li
                    key={`${exp.company}-${exp.startDate}`}
                    className="relative border-l border-dashed border-border pl-6 pb-2"
                  >
                    <span className="absolute top-1 left-[-9px] flex h-4 w-4 items-center justify-center rounded-full border border-border bg-background" />
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <p className="font-semibold">{exp.role}</p>
                        {exp.companyHref ? (
                          <Link
                            href={exp.companyHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-accent hover:underline"
                          >
                            {exp.company}
                          </Link>
                        ) : (
                          <p className="text-sm text-muted-foreground">
                            {exp.company}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDateRange(exp.startDate, exp.endDate)}
                      </div>
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {exp.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}
