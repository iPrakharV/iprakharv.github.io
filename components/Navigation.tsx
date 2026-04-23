'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Download, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#community', label: 'Community' },
  { href: '#blog', label: 'Blog' },
  { href: '#proof', label: 'Proof' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled || mobileOpen
            ? 'bg-[#f5f1e8]/82 dark:bg-[#050505]/82 backdrop-blur-xl border-b border-black/10 dark:border-white/10 shadow-[0_10px_40px_rgb(0_0_0/0.08)]'
            : 'bg-transparent'
        )}
      >
        <div className="section-container h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex h-10 w-10 items-center justify-center rounded border border-black/10 bg-white/45 font-serif text-xl tracking-tight text-[#15120d] shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-500/60 dark:border-white/10 dark:bg-white/[0.06] dark:text-[#f4efe4]"
          >
            PV
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#655f52] transition-colors hover:text-teal-700 dark:text-[#aaa18f] dark:hover:text-teal-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="flex h-9 w-9 items-center justify-center rounded border border-black/10 bg-white/35 text-[#655f52] transition-all hover:-translate-y-0.5 hover:border-amber-500/60 hover:text-[#15120d] dark:border-white/10 dark:bg-white/[0.05] dark:text-[#aaa18f] dark:hover:text-[#f4efe4]"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            )}
            <a
              href="/resume.pdf"
              download="Prakhar_Verma_Resume.pdf"
              className="hidden items-center gap-1.5 rounded border border-black/10 bg-[#15120d] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#f4efe4] transition-all hover:-translate-y-0.5 hover:bg-teal-700 dark:border-white/10 dark:bg-[#f4efe4] dark:text-[#050505] dark:hover:bg-teal-200 md:flex"
            >
              <Download size={11} />
              Resume
            </a>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded border border-black/10 bg-white/35 text-[#655f52] transition-all hover:text-[#15120d] dark:border-white/10 dark:bg-white/[0.05] dark:text-[#aaa18f] dark:hover:text-[#f4efe4] md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-black/10 dark:border-white/10 md:hidden"
            >
              <div className="section-container py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-1 font-mono text-sm text-[#655f52] transition-colors hover:text-teal-700 dark:text-[#aaa18f] dark:hover:text-teal-200"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  download="Prakhar_Verma_Resume.pdf"
                  className="flex items-center gap-2 py-1 font-mono text-sm text-[#655f52] transition-colors hover:text-teal-700 dark:text-[#aaa18f] dark:hover:text-teal-200"
                >
                  <Download size={13} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
