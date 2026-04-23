import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'
import { ExternalLink } from 'lucide-react'

const communityData = [
  {
    org: 'Google Developer Groups',
    role: 'Campus Organizer',
    location: 'Purdue University, Fort Wayne',
    url: 'https://gdg.community.dev/',
    description:
      'Building the developer community on campus through Google-focused events, hands-on workshops, and a mentorship program connecting students with industry professionals.',
    stats: [
      { value: '25+', label: 'workshops / year' },
      { value: '10K+', label: 'students reached' },
    ],
    tags: ['Android', 'AI/ML', 'Cloud', 'Web APIs'],
  },
  {
    org: 'CodeDay',
    role: 'Regional Manager',
    location: 'India & Global',
    url: 'https://www.codeday.org',
    description:
      'Organizing hackathons and workshops for high school students across India — making programming education accessible, fun, and impactful at scale.',
    stats: [
      { value: '5,000+', label: 'students reached' },
      { value: '1,000+', label: 'directly mentored' },
    ],
    tags: ['Python', 'Git', 'AI/ML', 'Web Dev'],
  },
]

export function Community() {
  return (
    <section id="community" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px hotline" />
      <div className="section-container">
        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <span className="section-kicker">04</span>
            <div className="hotline h-px flex-1" />
          </div>
          <p className="section-kicker mb-2">
            Beyond the code
          </p>
          <h2 className="mb-14 font-serif text-5xl text-[#15120d] dark:text-[#f4efe4] md:text-6xl">
            Community
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8" staggerDelay={0.1}>
          {communityData.map((item) => (
            <StaggerItem key={item.org}>
              <div className="glass-panel group h-full rounded-lg p-8 transition-all hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                      {item.role} · {item.location}
                    </p>
                    <h3 className="font-serif text-3xl text-[#15120d] dark:text-[#f4efe4]">
                      {item.org}
                    </h3>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-amber-600 transition-colors group-hover:text-teal-700 dark:text-amber-300 dark:group-hover:text-teal-200"
                  >
                    <ExternalLink size={13} />
                  </a>
                </div>

                <p className="mb-8 font-mono text-sm leading-[1.85] text-[#4f493f] dark:text-[#c8beaa]">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="mb-6 flex gap-8 border-y border-black/10 py-5 dark:border-white/10">
                  {item.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-serif text-4xl text-[#15120d] dark:text-[#f4efe4]">
                        {stat.value}
                      </p>
                      <p className="mt-0.5 font-mono text-[10px] text-[#655f52] dark:text-[#aaa18f]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 bg-white/35 px-2.5 py-1 font-mono text-[10px] text-[#655f52] dark:border-white/10 dark:bg-white/[0.06] dark:text-[#aaa18f]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.15}>
          <div className="glass-panel flex flex-col gap-2 rounded-lg px-6 py-4 sm:flex-row sm:items-center">
            <span className="section-kicker flex-shrink-0 sm:w-32">
              Also
            </span>
            <p className="font-mono text-sm text-[#4f493f] dark:text-[#c8beaa]">
              Vice President, Purdue FW Robotics Club · Member, National Society of Leadership & Success (NSLS)
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
