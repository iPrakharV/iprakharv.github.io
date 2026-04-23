import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'
import { blogPosts } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="section-container">
        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <span className="section-kicker">05</span>
            <div className="hotline h-px flex-1" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="section-kicker mb-2">
                Thoughts & writing
              </p>
              <h2 className="font-serif text-5xl text-[#15120d] dark:text-[#f4efe4] md:text-6xl">
                Blog
              </h2>
            </div>
            <p className="hidden max-w-[200px] text-right font-mono text-[11px] leading-relaxed text-[#655f52] dark:text-[#aaa18f] sm:block">
              Engineering, community,
              and building things.
              <br />Coming soon.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.09}>
          {blogPosts.map((post) => (
            <StaggerItem key={post.id}>
              <div className="glass-panel group mb-4 flex flex-col gap-4 rounded-lg p-5 transition-all hover:-translate-y-1 sm:flex-row sm:items-start sm:gap-10">
                <div className="sm:w-40 flex-shrink-0">
                  <span className="rounded-full border border-black/10 bg-white/35 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-teal-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-teal-300">
                    {post.tag}
                  </span>
                  <p className="mt-2 font-mono text-[11px] text-[#7f7666] dark:text-[#8b806e]">
                    {post.date}
                  </p>
                  <p className="font-mono text-[11px] text-[#7f7666] dark:text-[#8b806e]">
                    {post.readTime}
                  </p>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-2xl leading-snug text-[#15120d] transition-colors dark:text-[#f4efe4] md:text-3xl">
                      {post.title}
                    </h3>
                    <ArrowRight
                      size={14}
                      className="mt-1.5 flex-shrink-0 text-amber-600 transition-all group-hover:translate-x-0.5 group-hover:text-teal-700 dark:text-amber-300 dark:group-hover:text-teal-200"
                    />
                  </div>
                  <p className="mt-2.5 font-mono text-sm leading-[1.85] text-[#4f493f] dark:text-[#c8beaa]">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
