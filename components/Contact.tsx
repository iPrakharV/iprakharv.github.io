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
    <section id="contact" className="py-24 md:py-32 bg-white dark:bg-[#0D0D0D]">
      <div className="section-container">
        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[11px] text-stone-300 dark:text-[#272727]">06</span>
            <div className="flex-1 h-px bg-stone-200 dark:bg-[#181818]" />
          </div>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          {/* Left: CTA */}
          <FadeIn className="flex-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-stone-400 dark:text-[#444] mb-4">
              Let&apos;s connect
            </p>
            <h2
              className="font-serif text-stone-900 dark:text-[#EFEFEF] mb-6 leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Let&apos;s build
              <br />
              something.
            </h2>
            <p className="font-mono text-sm text-stone-500 dark:text-[#666] max-w-xs leading-[1.85]">
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
                    className="group flex items-center gap-4 p-4 border border-stone-100 dark:border-[#181818] bg-stone-50/60 dark:bg-[#111] hover:border-stone-300 dark:hover:border-[#2A2A2A] hover:bg-white dark:hover:bg-[#141414] transition-all rounded-sm"
                  >
                    <div className="w-8 h-8 flex items-center justify-center bg-stone-100 dark:bg-[#1A1A1A] text-stone-400 dark:text-[#555] group-hover:text-stone-700 dark:group-hover:text-[#BBB] transition-colors rounded-sm flex-shrink-0">
                      <Icon size={14} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-[10px] text-stone-400 dark:text-[#3A3A3A] mb-0.5">
                        {label}
                      </p>
                      <p className="font-mono text-sm text-stone-700 dark:text-[#999] group-hover:text-stone-900 dark:group-hover:text-[#EFEFEF] transition-colors truncate">
                        {value}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={12}
                      className="text-stone-300 dark:text-[#222] group-hover:text-stone-500 dark:group-hover:text-[#555] transition-colors flex-shrink-0"
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
