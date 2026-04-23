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
    <section id="community" className="py-24 md:py-32 bg-white dark:bg-[#0D0D0D]">
      <div className="section-container">
        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[11px] text-stone-300 dark:text-[#272727]">04</span>
            <div className="flex-1 h-px bg-stone-200 dark:bg-[#181818]" />
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-stone-400 dark:text-[#444] mb-2">
            Beyond the code
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-[#EFEFEF] mb-14">
            Community
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8" staggerDelay={0.1}>
          {communityData.map((item) => (
            <StaggerItem key={item.org}>
              <div className="h-full border border-stone-150 dark:border-[#181818] bg-stone-50/50 dark:bg-[#101010] p-8 rounded-sm group hover:border-stone-300 dark:hover:border-[#282828] transition-colors">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-400 dark:text-[#3A3A3A] mb-2">
                      {item.role} · {item.location}
                    </p>
                    <h3 className="font-serif text-2xl text-stone-900 dark:text-[#EFEFEF]">
                      {item.org}
                    </h3>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-300 dark:text-[#2A2A2A] group-hover:text-stone-600 dark:group-hover:text-[#666] transition-colors mt-1"
                  >
                    <ExternalLink size={13} />
                  </a>
                </div>

                <p className="font-mono text-sm text-stone-500 dark:text-[#666] leading-[1.85] mb-8">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="flex gap-8 py-5 border-y border-stone-100 dark:border-[#161616] mb-6">
                  {item.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-serif text-3xl text-stone-900 dark:text-[#EFEFEF]">
                        {stat.value}
                      </p>
                      <p className="font-mono text-[10px] text-stone-400 dark:text-[#3A3A3A] mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-1 bg-stone-100 dark:bg-[#181818] text-stone-500 dark:text-[#555] rounded-sm"
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
          <div className="border border-stone-100 dark:border-[#181818] px-6 py-4 rounded-sm flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400 dark:text-[#3A3A3A] sm:w-32 flex-shrink-0">
              Also
            </span>
            <p className="font-mono text-sm text-stone-500 dark:text-[#666]">
              Vice President, Purdue FW Robotics Club · Member, National Society of Leadership & Success (NSLS)
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
