import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'
import { experience, otherRoles } from '@/lib/data'
import { ExternalLink } from 'lucide-react'

function ExpRow({ exp }: { exp: typeof experience[0] }) {
  const hasUrl = exp.url !== '#'

  return (
    <div className="glass-panel group relative overflow-hidden rounded-lg p-5 transition-all hover:-translate-y-1 md:p-7">
      <div className="absolute inset-x-0 top-0 h-1 hotline opacity-80" />
      <div className="flex flex-col gap-4 md:flex-row md:gap-10">
        <div className="md:w-56 flex-shrink-0">
          <span className="block rounded-full border border-black/10 bg-white/45 px-3 py-1.5 font-mono text-[11px] text-[#655f52] dark:border-white/10 dark:bg-white/[0.06] dark:text-[#aaa18f]">
            {exp.period}
          </span>
          {hasUrl ? (
            <a
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-teal-700 transition-colors hover:text-amber-700 dark:text-teal-300 dark:hover:text-amber-200"
            >
              {exp.company}
              <ExternalLink size={9} />
            </a>
          ) : (
            <p className="mt-3 font-mono text-xs text-teal-700 dark:text-teal-300">
              {exp.company}
            </p>
          )}
          <p className="mt-1 font-mono text-[10px] text-[#7f7666] dark:text-[#8b806e]">
            {exp.location}
          </p>
        </div>

        <div className="flex-1">
          <h3 className="mb-4 font-serif text-2xl leading-snug text-[#15120d] dark:text-[#f4efe4] md:text-3xl">
            {exp.role}
          </h3>
          <ul className="space-y-3">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-[7px] h-2 w-2 flex-shrink-0 rounded-full bg-teal-500 shadow-[0_0_14px_rgb(20_184_166/0.55)]" />
                <span className="font-mono text-sm leading-[1.85] text-[#4f493f] dark:text-[#c8beaa]">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
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
            <span className="section-kicker">01</span>
            <div className="hotline h-px flex-1" />
          </div>
          <p className="section-kicker mb-2">
            Where I&apos;ve worked
          </p>
          <h2 className="mb-14 font-serif text-5xl text-[#15120d] dark:text-[#f4efe4] md:text-6xl">
            Experience
          </h2>
        </FadeIn>

        <StaggerContainer className="space-y-5" staggerDelay={0.07}>
          {experience.map((exp) => (
            <StaggerItem key={exp.id}>
              <ExpRow exp={exp} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Other roles */}
        <FadeIn delay={0.1}>
          <div className="mt-16 border-t border-black/10 pt-10 dark:border-white/10">
            <p className="section-kicker mb-8">
              Other Roles
            </p>
            <div className="space-y-5">
              {otherRoles.map((exp) => (
                <ExpRow key={exp.id} exp={exp} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
