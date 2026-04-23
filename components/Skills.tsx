import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'
import { skills } from '@/lib/data'

const categories = [
  { key: 'languages' as const, label: 'Languages' },
  { key: 'frameworks' as const, label: 'Frameworks & Tools' },
  { key: 'hardware' as const, label: 'Hardware & IoT' },
  { key: 'domains' as const, label: 'Domains' },
]

const awards = [
  { title: '1st Prize — Robotex India 2018', detail: 'Automated Sumo · India Winner (3kg)' },
  { title: '1st Prize — Techfest Zonals 2019', detail: 'Maze Solver · IIT Bombay' },
  { title: '1st Prize — RoboRace 2019', detail: 'Entente 2019' },
  { title: '1st Place — Razzmataz 2020', detail: 'RoboRace' },
  { title: '6th Position — IIT Bombay 2020', detail: 'Maze Solver · Top 6 of 35K+ from Asia' },
  { title: "People's Choice Winner", detail: 'Regeneron Health Tech Hackathon' },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="section-container">
        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[11px] text-stone-300 dark:text-[#272727]">03</span>
            <div className="flex-1 h-px bg-stone-200 dark:bg-[#181818]" />
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-stone-400 dark:text-[#444] mb-2">
            What I work with
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-[#EFEFEF] mb-14">
            Skills
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16" staggerDelay={0.1}>
          {categories.map((cat) => (
            <StaggerItem key={cat.key}>
              <div className="border-t border-stone-100 dark:border-[#161616] pt-5">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-[#3A3A3A] mb-4">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills[cat.key].map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-sm text-stone-600 dark:text-[#777] border border-stone-150 dark:border-[#1A1A1A] px-3 py-1.5 rounded-sm hover:border-stone-300 dark:hover:border-[#333] hover:text-stone-900 dark:hover:text-[#CCC] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Awards */}
        <FadeIn delay={0.15}>
          <div className="border-t border-stone-100 dark:border-[#161616] pt-10">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-[#3A3A3A] mb-8">
              Honors & Awards
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8">
              {awards.map((award) => (
                <div key={award.title}>
                  <p className="font-serif text-base text-stone-800 dark:text-[#CCC] mb-0.5">
                    {award.title}
                  </p>
                  <p className="font-mono text-[11px] text-stone-400 dark:text-[#3A3A3A] leading-snug">
                    {award.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
