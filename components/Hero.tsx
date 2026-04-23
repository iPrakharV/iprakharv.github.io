'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Instagram, MapPin } from 'lucide-react'

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
  { href: 'mailto:connect@iprakharv.com', icon: Mail, label: 'Email' },
  { href: 'https://instagram.com/iprakharv', icon: Instagram, label: 'Instagram' },
]

function CyclingRole() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <span className="inline-flex items-center h-5 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="block text-stone-900 dark:text-[#EFEFEF]"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Dot grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.018] dark:opacity-[0.045]"
        style={{
          backgroundImage: 'radial-gradient(circle, #666 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative section-container w-full flex flex-col flex-1">
        {/* Top metadata bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="pt-28 pb-0 flex items-center justify-between"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone-400 dark:text-[#3A3A3A]">
            Portfolio · 2025
          </span>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-stone-400 dark:text-[#3A3A3A]">
            <MapPin size={9} />
            Fort Wayne, IN · GPA 4.0
          </div>
        </motion.div>

        {/* Giant name */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col justify-center py-10"
        >
          <motion.h1
            variants={item}
            className="font-serif leading-[0.87] tracking-tight text-stone-900 dark:text-[#EFEFEF] mb-0"
            style={{ fontSize: 'clamp(72px, 11.5vw, 148px)' }}
          >
            Prakhar
            <br />
            Verma
          </motion.h1>

          {/* Separator */}
          <motion.div variants={item} className="w-full h-px bg-stone-200 dark:bg-[#1C1C1C] mt-8 mb-8" />

          {/* Two-column info row */}
          <motion.div
            variants={item}
            className="flex flex-col md:flex-row gap-8 md:gap-16 md:items-end"
          >
            {/* Left: bio */}
            <div className="flex-1 max-w-lg">
              <p className="font-mono text-sm text-stone-500 dark:text-[#777] leading-[1.85] mb-8">
                I build systems that matter and communities that grow.
                CS Honors student at{' '}
                <span className="text-stone-800 dark:text-[#CCC]">Purdue University</span>
                {' '}focused on AI systems, developer tools, and applied machine learning.
                I organize developer events through{' '}
                <span className="text-stone-800 dark:text-[#CCC]">GDG on Campus</span>{' '}
                and hackathons through{' '}
                <span className="text-stone-800 dark:text-[#CCC]">CodeDay</span>.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="font-mono text-[11px] uppercase tracking-[0.1em] px-5 py-2.5 bg-stone-900 dark:bg-[#EFEFEF] text-white dark:text-[#0A0A0A] hover:bg-stone-700 dark:hover:bg-white transition-colors flex items-center gap-2 rounded-sm"
                >
                  Get in touch <ArrowRight size={11} />
                </a>
                <a
                  href="/resume.pdf"
                  download="Prakhar_Verma_Resume.pdf"
                  className="font-mono text-[11px] uppercase tracking-[0.1em] px-5 py-2.5 border border-stone-300 dark:border-[#2C2C2C] text-stone-600 dark:text-[#888] hover:border-stone-600 dark:hover:border-[#555] hover:text-stone-900 dark:hover:text-[#EFEFEF] transition-all rounded-sm"
                >
                  Resume ↓
                </a>
              </div>
            </div>

            {/* Right: status card */}
            <div className="md:w-64 font-mono text-xs">
              <div className="space-y-4 border border-stone-200 dark:border-[#1C1C1C] p-5 rounded-sm bg-white/40 dark:bg-[#0F0F0F]/60 backdrop-blur-sm">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-stone-400 dark:text-[#3A3A3A] mb-1.5">
                    Currently
                  </p>
                  <p className="text-stone-700 dark:text-[#BBB]">GDG Campus Organizer</p>
                  <p className="text-stone-700 dark:text-[#BBB]">CodeDay Core Team Lead</p>
                  <p className="text-stone-700 dark:text-[#BBB]">GitHub Campus Expert Trainee</p>
                </div>
                <div className="h-px bg-stone-100 dark:bg-[#1C1C1C]" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-stone-400 dark:text-[#3A3A3A] mb-1.5">
                    I am a
                  </p>
                  <CyclingRole />
                </div>
                <div className="h-px bg-stone-100 dark:bg-[#1C1C1C]" />
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 animate-pulse" />
                  <span className="text-stone-500 dark:text-[#666]">Available · May 2027</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-5 mt-10">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-stone-300 dark:text-[#333] hover:text-stone-900 dark:hover:text-[#EFEFEF] transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="pb-10 flex items-center gap-3"
        >
          <motion.div
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-300 dark:text-[#2A2A2A] flex items-center gap-2"
          >
            <span className="w-8 h-px bg-stone-200 dark:bg-[#2A2A2A]" />
            scroll
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
