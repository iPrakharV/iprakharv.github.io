import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'
import { Mail, Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react'

const links = [
  {
    label: 'Email',
    value: 'connect@iprakharv.com',
    href: 'mailto:connect@iprakharv.com',
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

        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          {/* Left: CTA */}
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
            <p className="max-w-xs font-mono text-sm leading-[1.85] text-[#4f493f] dark:text-[#c8beaa]">
              Open to internships, projects, and interesting conversations.
              I respond to everything.
            </p>
          </FadeIn>

          {/* Right: links */}
          <div className="md:w-72">
            <StaggerContainer className="space-y-2" staggerDelay={0.07}>
              {links.map(({ label, value, href, icon: Icon }) => (
                <StaggerItem key={href}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="glass-panel group flex items-center gap-4 rounded-lg p-4 transition-all hover:-translate-y-1"
                  >
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded border border-black/10 bg-white/35 text-teal-700 transition-colors group-hover:text-amber-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-teal-300 dark:group-hover:text-amber-200">
                      <Icon size={14} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="mb-0.5 font-mono text-[10px] text-[#7f7666] dark:text-[#8b806e]">
                        {label}
                      </p>
                      <p className="truncate font-mono text-sm text-[#28231b] transition-colors group-hover:text-teal-700 dark:text-[#f4efe4] dark:group-hover:text-teal-200">
                        {value}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={12}
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
