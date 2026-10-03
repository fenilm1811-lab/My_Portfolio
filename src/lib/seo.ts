import { type Metadata } from "next"
import { META } from "@/lib/constants"

export function withTitle(title: string, description?: string): Metadata {
  return {
    ...META,
    title: {
      default: title,
      template: `%s | Fenil Modi`,
    },
    ...(description ? { description } : {}),
  }
}
