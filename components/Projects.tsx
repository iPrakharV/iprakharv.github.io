'use client'

import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'
import { projects } from '@/lib/data'
import { Trophy, ArrowUpRight } from 'lucide-react'

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-white dark:bg-[#0D0D0D]">
      <div className="section-container">
        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[11px] text-stone-300 dark:text-[#272727]">02</span>
            <div className="flex-1 h-px bg-stone-200 dark:bg-[#181818]" />
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-stone-400 dark:text-[#444] mb-2">
            Things I&apos;ve built
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-[#EFEFEF] mb-14">
            Projects
          </h2>
        </FadeIn>

        <StaggerContainer staggerDelay={0.08}>
          {projects.map((project, index) => (
            <StaggerItem key={project.id}>
              <motion.div
                className="group py-10 border-b border-stone-100 dark:border-[#161616] cursor-default"
                whileHover="hover"
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-xs text-stone-300 dark:text-[#2A2A2A] mt-1.5 flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <motion.h3
                      variants={{ hover: { x: 4 } }}
                      transition={{ duration: 0.2 }}
                      className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-[#EFEFEF] leading-tight"
                    >
                      {project.name}
                    </motion.h3>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0 mt-1">
                    <span className="font-mono text-[11px] text-stone-400 dark:text-[#3A3A3A]">
                      {project.period}
                    </span>
                    <motion.div
                      variants={{ hover: { opacity: 1, x: 0 } }}
                      initial={{ opacity: 0, x: -4 }}
                      className="text-stone-400 dark:text-[#444]"
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

                  <p className="font-mono text-sm text-stone-500 dark:text-[#666] leading-[1.85] mb-5 max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    {project.tech.map((t, i) => (
                      <span key={t} className="font-mono text-xs text-stone-400 dark:text-[#444]">
                        {t}
                        {i < project.tech.length - 1 && (
                          <span className="text-stone-200 dark:text-[#222] ml-2">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.2}>
          <p className="font-mono text-xs text-stone-400 dark:text-[#3A3A3A] mt-10 pl-9">
            50+ more on{' '}
            <a
              href="https://github.com/iprakharv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 dark:text-[#555] hover:text-stone-900 dark:hover:text-[#EFEFEF] underline underline-offset-2 transition-colors"
            >
              GitHub
            </a>{' '}
            ·{' '}
            <a
              href="https://linkedin.com/in/iprakharv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 dark:text-[#555] hover:text-stone-900 dark:hover:text-[#EFEFEF] underline underline-offset-2 transition-colors"
            >
              LinkedIn
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
