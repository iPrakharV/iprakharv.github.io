import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'
import { experience, otherRoles } from '@/lib/data'
import { ExternalLink } from 'lucide-react'

function ExpRow({ exp, isLast }: { exp: typeof experience[0]; isLast: boolean }) {
  return (
    <div
      className={`py-8 md:py-10 flex flex-col md:flex-row gap-4 md:gap-10 ${
        !isLast ? 'border-b border-stone-100 dark:border-[#141414]' : ''
      }`}
    >
      <div className="md:w-56 flex-shrink-0">
        <span className="font-mono text-xs text-stone-400 dark:text-[#3A3A3A] block">
          {exp.period}
        </span>
        <a
          href={exp.url}
          target={exp.url !== '#' ? '_blank' : undefined}
          rel={exp.url !== '#' ? 'noopener noreferrer' : undefined}
          className="inline-flex items-center gap-1 font-mono text-xs text-stone-500 dark:text-[#555] hover:text-stone-800 dark:hover:text-[#BBB] transition-colors mt-1"
        >
          {exp.company}
          {exp.url !== '#' && <ExternalLink size={9} />}
        </a>
        <p className="font-mono text-[10px] text-stone-300 dark:text-[#2A2A2A] mt-0.5">
          {exp.location}
        </p>
      </div>

      <div className="flex-1">
        <h3 className="font-serif text-xl md:text-2xl text-stone-900 dark:text-[#EFEFEF] mb-4 leading-snug">
          {exp.role}
        </h3>
        <ul className="space-y-3">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-stone-200 dark:text-[#222] mt-[6px] text-xs flex-shrink-0">▸</span>
              <span className="font-mono text-sm text-stone-500 dark:text-[#666] leading-[1.85]">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="section-container">
        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[11px] text-stone-300 dark:text-[#272727]">01</span>
            <div className="flex-1 h-px bg-stone-200 dark:bg-[#181818]" />
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-stone-400 dark:text-[#444] mb-2">
            Where I&apos;ve worked
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-[#EFEFEF] mb-14">
            Experience
          </h2>
        </FadeIn>

        <StaggerContainer staggerDelay={0.07}>
          {experience.map((exp, index) => (
            <StaggerItem key={exp.id}>
              <ExpRow exp={exp} isLast={index === experience.length - 1} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Other roles */}
        <FadeIn delay={0.1}>
          <div className="mt-16 pt-10 border-t border-stone-100 dark:border-[#141414]">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-300 dark:text-[#2A2A2A] mb-8">
              Other Roles
            </p>
            <div className="space-y-0">
              {otherRoles.map((exp, index) => (
                <ExpRow key={exp.id} exp={exp} isLast={index === otherRoles.length - 1} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
