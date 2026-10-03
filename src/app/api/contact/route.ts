import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  message: z.string().min(20, "Message is too short").max(2000),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Validation failed", errors: parsed.error.flatten() },
        { status: 400 }
      )
    }

    // In production, integrate with an email provider (e.g. Resend,
    // Nodemailer, SendGrid). For now we simulate a successful send.
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ status: "ok", service: "contact" })
}
