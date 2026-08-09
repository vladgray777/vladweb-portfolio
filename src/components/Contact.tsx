import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import SectionHeader from "./SectionHeader"

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)

  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    setSending(true)
    setError(false)

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        {
          publicKey: publicKey,
        }
      )

      setSent(true)
      form.current.reset()

      setTimeout(() => {
        setSent(false)
      }, 3000)
    } catch (error) {
      console.error("EmailJS error:", error)
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 px-6 "
      style={{ zIndex: 1 }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="03" title="Contact" />
      </div>

      <div
        style={{
          border: "1px solid #1f3a1f",
          background: "#0d1117",
          padding: "32px",
        }}
        className="terminal-glow max-w-5xl mx-auto"
      >

        <div
          style={{
            fontSize: "0.75rem",
            color: "#4a6a4a",
            marginBottom: 24,
            lineHeight: 1.8,
          }}
        >
          Establishing secure connection...

          <div style={{ color: "#00ff41" }}>
            Connected to vlad-web.com
          </div>

          <div>
            Enter your information and transmit your message.
          </div>
        </div>

        <form ref={form} onSubmit={handleSend}>
          {/* Name */}
          <div
            className="flex items-center gap-3"
            style={{
              borderTop: "1px solid #1a2e1a",
              paddingTop: 20,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                color: "#4a6a4a",
                fontSize: "0.8rem",
                whiteSpace: "nowrap",
              }}
            >
              name:
            </span>

            <input
              type="text"
              name="user_name"
              required
              placeholder="your name..."
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#00ff41",
                fontFamily: "monospace",
                fontSize: "0.82rem",
                caretColor: "#00ff41",
              }}
            />
          </div>

          {/* Email */}
          <div
            className="flex items-center gap-3"
            style={{ marginBottom: 16 }}
          >
            <span
              style={{
                color: "#4a6a4a",
                fontSize: "0.8rem",
                whiteSpace: "nowrap",
              }}
            >
              email:
            </span>

            <input
              type="email"
              name="user_email"
              required
              placeholder="your@email.com..."
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#00ff41",
                fontFamily: "monospace",
                fontSize: "0.82rem",
                caretColor: "#00ff41",
              }}
            />
          </div>

          {/* Message */}
          <div
            className="flex items-center gap-3"
            style={{ marginBottom: 16 }}
          >
            <span
              style={{
                color: "#4a6a4a",
                fontSize: "0.8rem",
                whiteSpace: "nowrap",
              }}
            >
              guest@portfolio:~$
            </span>

            <input
              type="text"
              name="message"
              required
              placeholder="send message..."
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#00ff41",
                fontFamily: "monospace",
                fontSize: "0.82rem",
                caretColor: "#00ff41",
              }}
            />

            <button
              type="submit"
              disabled={sending}
              style={{
                padding: "6px 14px",
                border: "1px solid #00ff41",
                background: "transparent",
                color: "#00ff41",
                fontFamily: "monospace",
                fontSize: "0.7rem",
                cursor: sending ? "not-allowed" : "pointer",
                letterSpacing: "0.1em",
                transition: "all 0.2s",
                opacity: sending ? 0.5 : 1,
              }}
              onMouseEnter={(e) => {
                if (sending) return

                e.currentTarget.style.background = "#00ff41"
                e.currentTarget.style.color = "#0a0e0a"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.color = "#00ff41"
              }}
            >
              {sending ? "SENDING..." : "SEND"}
            </button>
          </div>
        </form>

        {sent && (
          <div
            style={{
              marginTop: 12,
              fontSize: "0.75rem",
              color: "#00ff41",
            }}
            className="text-glow"
          >
            ✓ Message transmitted successfully. Response ETA: 24h
          </div>
        )}

        {error && (
          <div
            style={{
              marginTop: 12,
              fontSize: "0.75rem",
              color: "#ff4141",
            }}
          >
            ✗ Transmission failed. Please try again.
          </div>
        )}

        <div
          className="flex gap-6 mt-8"
          style={{
            borderTop: "1px solid #1a2e1a",
            paddingTop: 20,
          }}
        >
          {[
            {
              label: "GitHub",
              value: "github.com/vladgray777",
            },
            {
              label: "LinkedIn",
              value: "linkedin.com/in/vladweb",
            },
            {
              label: "Email",
              value: "vladweb.contact@gmail.com",
            },
          ].map((link) => (
            <div key={link.label}>
              <div
                style={{
                  fontSize: "0.6rem",
                  color: "#2a4a2a",
                  letterSpacing: "0.1em",
                  marginBottom: 2,
                }}
              >
                {link.label}
              </div>

              <div
                style={{
                  fontSize: "0.7rem",
                  color: "#00b32c",
                }}
              >
                {link.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}