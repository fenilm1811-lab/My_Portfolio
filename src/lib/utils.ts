import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateRange(
  start: string | Date,
  end?: string | Date
): string {
  const fmt = (d: string | Date) =>
    new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    })
  const s = fmt(start)
  const e = end ? fmt(end) : "Present"
  return `${s} — ${e}`
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}
