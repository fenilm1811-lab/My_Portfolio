"use client"

import { FormEvent, useState, type ChangeEvent } from "react"
import { Send } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { PERSONAL } from "@/lib/data"

interface FormState {
  name: string
  email: string
  message: string
}

interface Errors {
  name?: string
  email?: string
  message?: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<Errors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const validate = (): boolean => {
    const newErrors: Errors = {}
    if (!form.name.trim()) newErrors.name = "Name is required"
    if (!form.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email"
    if (!form.message.trim()) newErrors.message = "Message is required"
    else if (form.message.trim().length < 20)
      newErrors.message = "Message should be at least 20 characters"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    setStatus("idle")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error("Something went wrong")
      setForm({ name: "", email: "", message: "" })
      setStatus("success")
    } catch {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <Container>
        <div className="space-y-12">
          <AnimatedSection>
            <div>
              <Badge variant="outline" className="mb-3">
                Contact
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Let&apos;s work together
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                I&apos;m open to new opportunities and collaborations. Have a
                project in mind or want to say hi? Send me a message.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <Card className="border border-border bg-card">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-300"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-300"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="What can I help you with?"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-300"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {status === "success" && (
                    <p className="text-sm text-green-600">
                      Thanks! Your message has been sent. I&apos;ll get back to
                      you soon.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-sm text-red-500">
                      Something went wrong. Please try again or email me at{" "}
                      <a
                        href={`mailto:${PERSONAL.email}`}
                        className="underline"
                      >
                        {PERSONAL.email}
                      </a>
                      .
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Or email me at{" "}
                      <a
                        href={`mailto:${PERSONAL.email}`}
                        className="font-medium text-foreground underline decoration-accent underline-offset-2 hover:text-accent"
                      >
                        {PERSONAL.email}
                      </a>
                    </p>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}
