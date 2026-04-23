import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'
import { skills } from '@/lib/data'

const categories = [
  { key: 'languages' as const, label: 'Languages' },
  { key: 'frameworks' as const, label: 'Frameworks & Tools' },
  { key: 'hardware' as const, label: 'Hardware & IoT' },
  { key: 'domains' as const, label: 'Domains' },
]

const awards = [
  { title: '1st Prize, Robotex India 2018', detail: 'Automated Sumo · India Winner (3kg)' },
  { title: '1st Prize, Techfest Zonals 2019', detail: 'Maze Solver · IIT Bombay' },
  { title: '1st Prize, RoboRace 2019', detail: 'Entente 2019' },
  { title: '1st Place, Razzmataz 2020', detail: 'RoboRace' },
  { title: '6th Position, IIT Bombay 2020', detail: 'Maze Solver · Top 6 of 35K+ from Asia' },
  { title: "People's Choice Winner", detail: 'Regeneron Health Tech Hackathon' },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="section-container">
        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <span className="section-kicker">03</span>
            <div className="hotline h-px flex-1" />
          </div>
          <p className="section-kicker mb-2">
            What I work with
          </p>
          <h2 className="mb-14 font-serif text-5xl text-[#15120d] dark:text-[#f4efe4] md:text-6xl">
            Skills
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16" staggerDelay={0.1}>
          {categories.map((cat) => (
            <StaggerItem key={cat.key}>
              <div className="glass-panel h-full rounded-lg p-5">
                <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills[cat.key].map((skill) => (
                    <span
                      key={skill}
                      className="cursor-default rounded-full border border-black/10 bg-white/35 px-3 py-1.5 font-mono text-sm text-[#4f493f] transition-all hover:-translate-y-0.5 hover:border-amber-500/70 hover:text-[#15120d] dark:border-white/10 dark:bg-white/[0.06] dark:text-[#c8beaa] dark:hover:text-[#f4efe4]"
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
          <div className="border-t border-black/10 pt-10 dark:border-white/10">
            <h3 className="section-kicker mb-8">
              Honors & Awards
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8">
              {awards.map((award) => (
                <div key={award.title} className="glass-panel rounded-lg p-4">
                  <p className="mb-0.5 font-serif text-lg text-[#15120d] dark:text-[#f4efe4]">
                    {award.title}
                  </p>
                  <p className="font-mono text-[11px] leading-snug text-[#655f52] dark:text-[#aaa18f]">
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
