'use client'

import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'
import { projects } from '@/lib/data'
import { Trophy, ArrowUpRight } from 'lucide-react'

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px hotline" />
      <div className="section-container">
        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <span className="section-kicker">02</span>
            <div className="hotline h-px flex-1" />
          </div>
          <p className="section-kicker mb-2">
            Things I&apos;ve built
          </p>
          <h2 className="mb-14 font-serif text-5xl text-[#15120d] dark:text-[#f4efe4] md:text-6xl">
            Projects
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-2" staggerDelay={0.08}>
          {projects.map((project, index) => (
            <StaggerItem key={project.id}>
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.name} on GitHub`}
                className="glass-panel group relative block h-full overflow-hidden rounded-lg p-6 transition-all hover:-translate-y-1"
                whileHover="hover"
              >
                <div className="absolute inset-x-0 top-0 h-1 hotline opacity-80" />
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-5">
                    <span className="mt-1.5 flex-shrink-0 font-mono text-xs text-teal-700 dark:text-teal-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <motion.h3
                      variants={{ hover: { x: 4 } }}
                      transition={{ duration: 0.2 }}
                      className="font-serif text-3xl leading-tight text-[#15120d] dark:text-[#f4efe4]"
                    >
                      {project.name}
                    </motion.h3>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0 mt-1">
                    <span className="font-mono text-[11px] text-[#7f7666] dark:text-[#8b806e]">
                      {project.period}
                    </span>
                    <motion.div
                      variants={{ hover: { opacity: 1, x: 0 } }}
                      initial={{ opacity: 0, x: -4 }}
                      className="text-amber-600 dark:text-amber-300"
                    >
                      <ArrowUpRight size={14} />
                    </motion.div>
                  </div>
                </div>

                <div className="pl-9">
                  {project.award && (
                    <div className="flex items-center gap-2 mb-3">
                      <Trophy size={11} className="text-amber-500 flex-shrink-0" />
                      <span className="font-mono text-[11px] text-amber-600 dark:text-amber-500">
                        {project.award}
                      </span>
                    </div>
                  )}

                  <p className="mb-5 max-w-2xl font-mono text-sm leading-[1.85] text-[#4f493f] dark:text-[#c8beaa]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-black/10 bg-white/35 px-2.5 py-1 font-mono text-[11px] text-[#655f52] dark:border-white/10 dark:bg-white/[0.06] dark:text-[#aaa18f]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.2}>
          <p className="mt-10 pl-0 font-mono text-xs text-[#655f52] dark:text-[#aaa18f] md:pl-9">
            More work on{' '}
            <a
              href="https://github.com/iprakharv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline underline-offset-2 transition-colors hover:text-amber-700 dark:text-teal-300 dark:hover:text-amber-200"
            >
              GitHub
            </a>{' '}
            ·{' '}
            <a
              href="https://linkedin.com/in/iprakharv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline underline-offset-2 transition-colors hover:text-amber-700 dark:text-teal-300 dark:hover:text-amber-200"
            >
              LinkedIn
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
