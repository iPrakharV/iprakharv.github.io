'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CircuitBoard, Github, Instagram, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } },
}

const roles = [
  'Full-Stack Developer',
  'AI Systems Builder',
  'Community Organizer',
  'IoT & Hardware Hacker',
  'GitHub Campus Expert',
]

const socials = [
  { href: 'https://github.com/iprakharv', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/iprakharv', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:iprakharv@gmail.com', icon: Mail, label: 'Email' },
  { href: 'https://instagram.com/iprakharv', icon: Instagram, label: 'Instagram' },
]

function CyclingRole() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <span className="inline-flex h-5 items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="block text-[#15120d] dark:text-[#f4efe4]"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18] dark:opacity-[0.26]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(20,184,166,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,.35) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-20 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full border border-teal-400/20"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 top-24 h-96 w-96 rounded-full border border-amber-400/30"
      />

      <div className="section-container relative flex w-full flex-1 flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-between pb-0 pt-28"
        >
          <span className="section-kicker inline-flex items-center gap-2">
            <Sparkles size={12} />
            Portfolio · 2026
          </span>
          <div className="hidden items-center gap-1.5 rounded-full border border-black/10 bg-white/45 px-3 py-1.5 font-mono text-[10px] text-[#655f52] backdrop-blur md:flex dark:border-white/10 dark:bg-white/[0.06] dark:text-[#aaa18f]">
            <MapPin size={10} />
            Chicago, IL
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-1 flex-col justify-center py-10"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <motion.div
                variants={item}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#655f52] backdrop-blur dark:border-white/10 dark:bg-white/[0.06] dark:text-[#aaa18f]"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgb(52_211_153)]" />
                AI · full stack · hardware
              </motion.div>

              <motion.h1
                variants={item}
                className="mesh-text mb-0 font-serif leading-[0.85] tracking-tight"
                style={{ fontSize: 'clamp(74px, 13vw, 178px)' }}
              >
                Prakhar
                <br />
                Verma
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-6 max-w-2xl font-mono text-base leading-[1.85] text-[#4f493f] dark:text-[#c8beaa]"
              >
                I turn ambitious ideas into useful products: healthcare AI, IoT security,
                developer communities, and systems that move from prototype to real-world use.
              </motion.p>
            </div>

            <motion.div variants={item} className="glass-panel relative overflow-hidden rounded-lg p-5 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-1 hotline" />
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">
                    Now Building
                  </p>
                  <h2 className="mt-2 font-serif text-3xl text-[#15120d] dark:text-[#f4efe4]">
                    Building where software meets the physical world.
                  </h2>
                </div>
                <CircuitBoard className="mt-1 text-amber-600 dark:text-amber-300" size={28} />
              </div>

              <div className="grid grid-cols-3 gap-2 border-y border-black/10 py-4 dark:border-white/10">
                {[
                  ['3.85', 'Academic GPA'],
                  ['50+', 'Projects'],
                  ['10K+', 'Reached'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded border border-black/10 bg-white/35 p-3 dark:border-white/10 dark:bg-black/20">
                    <p className="font-serif text-3xl leading-none text-[#15120d] dark:text-[#f4efe4]">
                      {value}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#655f52] dark:text-[#aaa18f]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-4 font-mono text-xs">
                <div>
                  <p className="mb-1.5 text-[10px] uppercase tracking-[0.18em] text-[#655f52] dark:text-[#aaa18f]">
                    Currently
                  </p>
                  <p className="text-[#28231b] dark:text-[#f4efe4]">GDG Campus Organizer</p>
                  <p className="text-[#28231b] dark:text-[#f4efe4]">CodeDay Core Team Lead</p>
                  <p className="text-[#28231b] dark:text-[#f4efe4]">GitHub Campus Expert Trainee</p>
                </div>
                <div>
                  <p className="mb-1.5 text-[10px] uppercase tracking-[0.18em] text-[#655f52] dark:text-[#aaa18f]">
                    I am a
                  </p>
                  <CyclingRole />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={item} className="hotline my-8 h-px w-full" />

          <motion.div
            variants={item}
            className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            <div className="flex-1 max-w-lg">
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="flex items-center gap-2 rounded bg-[#15120d] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.1em] text-[#f4efe4] transition-all hover:-translate-y-0.5 hover:bg-teal-700 dark:bg-[#f4efe4] dark:text-[#050505] dark:hover:bg-teal-200"
                >
                  Get in touch <ArrowRight size={11} />
                </a>
                <a
                  href="/resume.pdf"
                  download="Prakhar_Verma_Resume.pdf"
                  className="rounded border border-black/15 bg-white/35 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.1em] text-[#4f493f] backdrop-blur transition-all hover:-translate-y-0.5 hover:border-amber-500/70 hover:text-[#15120d] dark:border-white/15 dark:bg-white/[0.05] dark:text-[#c8beaa] dark:hover:text-[#f4efe4]"
                >
                  Resume ↓
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded border border-black/10 bg-white/35 text-[#655f52] backdrop-blur transition-all hover:-translate-y-0.5 hover:border-teal-500/70 hover:text-teal-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-[#aaa18f] dark:hover:text-teal-200"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex items-center gap-3 pb-10"
        >
          <motion.div
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#655f52] dark:text-[#aaa18f]"
          >
            <span className="hotline h-px w-8" />
            scroll
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
