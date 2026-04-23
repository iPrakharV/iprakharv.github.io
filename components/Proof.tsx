import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'
import { Camera, Code2, Mic2, Trophy, Users } from 'lucide-react'

const moments = [
  {
    title: 'Speaking & Workshops',
    label: 'GDG on Campus',
    detail: 'Technical sessions, hands-on demos, and student developer programming.',
    icon: Mic2,
    accent: 'from-teal-400/40 via-transparent to-amber-300/30',
  },
  {
    title: 'Hackathon Rooms',
    label: 'CodeDay',
    detail: 'Teams building, presenting, debugging, and shipping under real event pressure.',
    icon: Code2,
    accent: 'from-amber-300/40 via-transparent to-rose-400/30',
  },
  {
    title: 'Community Moments',
    label: 'Developer events',
    detail: 'Rooms full of people learning together, asking better questions, and building confidence.',
    icon: Users,
    accent: 'from-rose-400/35 via-transparent to-teal-300/30',
  },
]

const proofStats = [
  { value: 'GDG', label: 'campus organizer' },
  { value: 'CodeDay', label: 'core team lead' },
  { value: '6+', label: 'robotics awards' },
]

export function Proof() {
  return (
    <section id="proof" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px hotline" />
      <div className="section-container">
        <FadeIn>
          <div className="mb-10 flex items-center gap-4">
            <span className="section-kicker">06</span>
            <div className="hotline h-px flex-1" />
          </div>
          <div className="mb-14 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="section-kicker mb-2">Proof, not just claims</p>
              <h2 className="font-serif text-5xl text-[#15120d] dark:text-[#f4efe4] md:text-6xl">
                In the room.
              </h2>
            </div>
            <p className="max-w-xl font-mono text-sm leading-[1.85] text-[#4f493f] dark:text-[#c8beaa] md:justify-self-end">
              A visual record of the rooms, teams, talks, and events behind the work.
              This is where the portfolio shows the human side of building.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-5 lg:grid-cols-3" staggerDelay={0.08}>
          {moments.map(({ title, label, detail, icon: Icon, accent }) => (
            <StaggerItem key={title}>
              <article className="glass-panel group relative h-full overflow-hidden rounded-lg p-4 transition-all hover:-translate-y-1">
                <div className={`relative mb-5 aspect-[4/3] overflow-hidden rounded bg-gradient-to-br ${accent}`}>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-35"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <div className="absolute inset-4 rounded border border-white/20" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                        {label}
                      </p>
                      <p className="mt-1 font-serif text-3xl leading-none text-white">
                        {title}
                      </p>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded border border-white/20 bg-black/20 text-white backdrop-blur">
                      <Icon size={20} />
                    </div>
                  </div>
                </div>

                <p className="font-mono text-sm leading-[1.8] text-[#4f493f] dark:text-[#c8beaa]">
                  {detail}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.15}>
          <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-panel rounded-lg p-5">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="section-kicker">Photo roll</p>
                  <h3 className="mt-2 font-serif text-3xl text-[#15120d] dark:text-[#f4efe4]">
                    Events, talks, hackathons, wins.
                  </h3>
                </div>
                <Camera className="flex-shrink-0 text-amber-600 dark:text-amber-300" size={24} />
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {['Workshop', 'Hackathon', 'Speaking', 'Robotics'].map((item, index) => (
                  <div
                    key={item}
                    className="relative aspect-square overflow-hidden rounded border border-black/10 bg-white/35 dark:border-white/10 dark:bg-white/[0.06]"
                  >
                    <div
                      className={`absolute inset-0 ${
                        index % 2 === 0
                          ? 'bg-gradient-to-br from-teal-500/35 to-amber-400/25'
                          : 'bg-gradient-to-br from-rose-500/30 to-teal-400/25'
                      }`}
                    />
                    <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:18px_18px]" />
                    <p className="absolute bottom-3 left-3 right-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-lg p-5">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-black/10 bg-white/35 text-teal-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-teal-300">
                  <Trophy size={18} />
                </div>
                <div>
                  <p className="section-kicker">Signals</p>
                  <h3 className="font-serif text-2xl text-[#15120d] dark:text-[#f4efe4]">
                    Credibility markers
                  </h3>
                </div>
              </div>
              <div className="grid gap-3">
                {proofStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded border border-black/10 bg-white/35 p-4 dark:border-white/10 dark:bg-black/20"
                  >
                    <p className="font-serif text-3xl leading-none text-[#15120d] dark:text-[#f4efe4]">
                      {stat.value}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#655f52] dark:text-[#aaa18f]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
