import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { SKILLS } from "@/lib/data"

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tooling: "Tooling",
  language: "Languages",
}

function SkillBar({
  name,
  proficiency,
  delay,
}: {
  name: string
  proficiency: number
  delay: number
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-36 shrink-0 truncate text-sm font-medium text-muted-foreground">
        {name}
      </span>
      <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-accent transition-all duration-1000 ease-out"
          style={{
            width: proficiency + "%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
      <span className="w-8 text-right text-xs text-muted-foreground">
        {proficiency}%
      </span>
    </div>
  )
}

export default function Skills() {
  const categories = Object.keys(
    categoryLabels
  ) as (keyof typeof categoryLabels)[]

  return (
    <section id="skills" className="py-16 md:py-24">
      <Container>
        <div className="space-y-12">
          <AnimatedSection>
            <div>
              <Badge variant="outline" className="mb-3">
                Skills
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Things I work with
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Here are the technologies I use day-to-day to build modern web
                applications.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] gap-3 sm:gap-4">
              {SKILLS.map((skill, i) => {
                const Icon = skill.icon
                return (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-all duration-300 hover:bg-muted hover:shadow-sm"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <Icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-125 group-hover:text-accent/80" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                )
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="space-y-3 pt-8">
              {SKILLS.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  proficiency={skill.proficiency}
                  delay={i * 60}
                />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <div className="flex flex-wrap gap-x-10 gap-y-6 text-sm text-muted-foreground">
              {categories.map((cat) => {
                const count = SKILLS.filter((s) => s.category === cat).length
                if (!count) return null
                return (
                  <div key={cat} className="flex items-center gap-2">
                    <span className="font-medium text-foreground">
                      {categoryLabels[cat]}
                    </span>
                    <span className="text-xs">({count})</span>
                  </div>
                )
              })}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}
