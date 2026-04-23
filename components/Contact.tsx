'use client'

import { FormEvent, useState } from 'react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'
import { Mail, Github, Linkedin, Instagram, ArrowUpRight, Send } from 'lucide-react'

const email = 'iprakharv@gmail.com'
const formspreeEndpoint = 'https://formspree.io/f/mkokpkqo'

const links = [
  {
    label: 'Email',
    value: email,
    href: `mailto:${email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: '/in/iprakharv',
    href: 'https://linkedin.com/in/iprakharv',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/iprakharv',
    href: 'https://github.com/iprakharv',
    icon: Github,
  },
  {
    label: 'Instagram',
    value: '@iprakharv',
    href: 'https://instagram.com/iprakharv',
    icon: Instagram,
  },
]

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const formData = new FormData(event.currentTarget)
    formData.append('_subject', `Portfolio message from ${form.name || 'Website visitor'}`)

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setForm({ name: '', email: '', message: '' })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px hotline" />
      <div className="section-container">
        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <span className="section-kicker">06</span>
            <div className="hotline h-px flex-1" />
          </div>
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeIn className="flex-1">
            <p className="section-kicker mb-4">
              Let&apos;s connect
            </p>
            <h2
              className="mesh-text mb-6 font-serif leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Let&apos;s build
              <br />
              something.
            </h2>
            <p className="max-w-sm font-mono text-sm leading-[1.85] text-[#4f493f] dark:text-[#c8beaa]">
              Open to internships, projects, and interesting conversations.
              I respond to everything.
            </p>
          </FadeIn>

          <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
            <FadeIn>
              <form
                onSubmit={sendMessage}
                action={formspreeEndpoint}
                method="POST"
                className="glass-panel rounded-lg p-5"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="section-kicker">Message me</p>
                    <h3 className="mt-2 font-serif text-3xl text-[#15120d] dark:text-[#f4efe4]">
                      Send a note
                    </h3>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded border border-black/10 bg-white/35 text-teal-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-teal-300">
                    <Mail size={18} />
                  </div>
                </div>

                <div className="grid gap-3">
                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-[#7f7666] dark:text-[#8b806e]">
                      Name
                    </span>
                    <input
                      name="name"
                      value={form.name}
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      className="w-full rounded border border-black/10 bg-white/50 px-3 py-3 font-mono text-sm text-[#15120d] transition-colors placeholder:text-[#9c927f] focus:border-teal-500 dark:border-white/10 dark:bg-black/20 dark:text-[#f4efe4] dark:placeholder:text-[#6f6658]"
                      placeholder="Your name"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-[#7f7666] dark:text-[#8b806e]">
                      Your email
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      className="w-full rounded border border-black/10 bg-white/50 px-3 py-3 font-mono text-sm text-[#15120d] transition-colors placeholder:text-[#9c927f] focus:border-teal-500 dark:border-white/10 dark:bg-black/20 dark:text-[#f4efe4] dark:placeholder:text-[#6f6658]"
                      placeholder="you@example.com"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-[#7f7666] dark:text-[#8b806e]">
                      Message
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(event) => setForm({ ...form, message: event.target.value })}
                      className="w-full resize-none rounded border border-black/10 bg-white/50 px-3 py-3 font-mono text-sm text-[#15120d] transition-colors placeholder:text-[#9c927f] focus:border-teal-500 dark:border-white/10 dark:bg-black/20 dark:text-[#f4efe4] dark:placeholder:text-[#6f6658]"
                      placeholder="Tell me what you want to build."
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded bg-[#15120d] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#f4efe4] transition-all hover:-translate-y-0.5 hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-[#f4efe4] dark:text-[#050505] dark:hover:bg-teal-200"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send message'} <Send size={13} />
                </button>

                {status === 'success' && (
                  <p className="mt-3 font-mono text-xs text-teal-700 dark:text-teal-300">
                    Message sent.
                  </p>
                )}
                {status === 'error' && (
                  <p className="mt-3 font-mono text-xs text-rose-700 dark:text-rose-300">
                    Something went wrong. You can still email me directly at {email}.
                  </p>
                )}
              </form>
            </FadeIn>

            <StaggerContainer className="grid content-start gap-3" staggerDelay={0.07}>
              {links.map(({ label, value, href, icon: Icon }) => (
                <StaggerItem key={href}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="glass-panel group flex items-center gap-4 rounded-lg p-4 transition-all hover:-translate-y-1"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded border border-black/10 bg-white/35 text-teal-700 transition-colors group-hover:text-amber-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-teal-300 dark:group-hover:text-amber-200">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#7f7666] dark:text-[#8b806e]">
                        {label}
                      </p>
                      <p className="break-words font-mono text-base leading-snug text-[#28231b] transition-colors group-hover:text-teal-700 dark:text-[#f4efe4] dark:group-hover:text-teal-200">
                        {value}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="flex-shrink-0 text-amber-600 transition-colors group-hover:text-teal-700 dark:text-amber-300 dark:group-hover:text-teal-200"
                    />
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
