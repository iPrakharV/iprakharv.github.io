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
            ? 'bg-stone-50/92 dark:bg-[#0A0A0A]/92 backdrop-blur-md border-b border-stone-200 dark:border-[#1A1A1A]'
            : 'bg-transparent'
        )}
      >
        <div className="section-container h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-serif text-xl tracking-tight text-stone-900 dark:text-[#EFEFEF] hover:opacity-60 transition-opacity"
          >
            PV
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.12em] text-stone-500 dark:text-[#777] hover:text-stone-900 dark:hover:text-[#EFEFEF] transition-colors"
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
                className="w-9 h-9 flex items-center justify-center rounded text-stone-500 dark:text-[#777] hover:text-stone-900 dark:hover:text-[#EFEFEF] hover:bg-stone-100 dark:hover:bg-[#1A1A1A] transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            )}
            <a
              href="/resume.pdf"
              download="Prakhar_Verma_Resume.pdf"
              className="hidden md:flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] px-3 py-2 border border-stone-300 dark:border-[#2A2A2A] text-stone-700 dark:text-[#EFEFEF] hover:border-stone-900 dark:hover:border-[#888] hover:bg-stone-900 hover:text-white dark:hover:bg-[#EFEFEF] dark:hover:text-[#0A0A0A] transition-all rounded"
            >
              <Download size={11} />
              Resume
            </a>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded text-stone-500 dark:text-[#777] hover:text-stone-900 dark:hover:text-[#EFEFEF] hover:bg-stone-100 dark:hover:bg-[#1A1A1A] transition-all"
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
              className="md:hidden overflow-hidden border-t border-stone-200 dark:border-[#1A1A1A]"
            >
              <div className="section-container py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-mono text-sm text-stone-600 dark:text-[#888] hover:text-stone-900 dark:hover:text-[#EFEFEF] transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  download="Prakhar_Verma_Resume.pdf"
                  className="flex items-center gap-2 font-mono text-sm text-stone-600 dark:text-[#888] hover:text-stone-900 dark:hover:text-[#EFEFEF] transition-colors py-1"
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
