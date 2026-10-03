export interface SiteConfig {
  name: string
  url: string
  description: string
  email: string
  locale: string
}

export interface SocialLink {
  name: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
}

export interface Skill {
  name: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  category: "frontend" | "backend" | "tooling" | "language"
  proficiency: number
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  href: string
  image?: string
  screenshots?: string[]
  stack: {
    name: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  }[]
  featured: boolean
  type: "open-source" | "personal" | "work"
}

export interface Experience {
  role: string
  company: string
  companyHref?: string
  startDate: string
  endDate?: string
  description: string
  current?: boolean
}

export interface NavItem {
  label: string
  href: string
}
