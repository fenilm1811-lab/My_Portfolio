import { type Metadata } from "next"

export const NAVIGATION: { label: string; href: string }[] = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export const META: Metadata = {
  title: {
    default: "Fenil Modi — Full-Stack Software Engineer",
    template: `%s | Fenil Modi`,
  },
  description:
    "Full-Stack Software Engineer with 2+ years of experience building scalable web and mobile applications using Node.js, Next.js, NestJS, React, and Flutter.",
  keywords: [
    "fenil modi",
    "full-stack software engineer",
    "software engineer",
    "next.js developer",
    "node.js developer",
    "react developer",
    "nestjs developer",
    "flutter developer",
    "surat india",
  ],
  authors: [{ name: "Fenil Modi" }],
  creator: "Fenil Modi",
  openGraph: {
    type: "website",
    locale: "en-US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Fenil Modi",
    title: "Fenil Modi — Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer with 2+ years of experience building scalable web and mobile applications using Node.js, Next.js, NestJS, React, and Flutter.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Fenil Modi — Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@fenilmodi",
    title: "Fenil Modi — Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer with 2+ years of experience building scalable web and mobile applications using Node.js, Next.js, NestJS, React, and Flutter.",
    images: ["/og.png"],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://fenilmodi.dev"
  ),
}
