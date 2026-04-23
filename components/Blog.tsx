import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'
import { blogPosts } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="section-container">
        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[11px] text-stone-300 dark:text-[#272727]">05</span>
            <div className="flex-1 h-px bg-stone-200 dark:bg-[#181818]" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-stone-400 dark:text-[#444] mb-2">
                Thoughts & writing
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-[#EFEFEF]">
                Blog
              </h2>
            </div>
            <p className="font-mono text-[11px] text-stone-400 dark:text-[#3A3A3A] max-w-[200px] leading-relaxed text-right hidden sm:block">
              Engineering, community,
              and building things.
              <br />Coming soon.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.09}>
          {blogPosts.map((post, index) => (
            <StaggerItem key={post.id}>
              <div
                className={`group py-8 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10 ${
                  index !== blogPosts.length - 1
                    ? 'border-b border-stone-100 dark:border-[#141414]'
                    : ''
                }`}
              >
                {/* Meta */}
                <div className="sm:w-40 flex-shrink-0">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] px-2 py-1 bg-stone-100 dark:bg-[#181818] text-stone-500 dark:text-[#555] rounded-sm">
                    {post.tag}
                  </span>
                  <p className="font-mono text-[11px] text-stone-300 dark:text-[#2A2A2A] mt-2">
                    {post.date}
                  </p>
                  <p className="font-mono text-[11px] text-stone-300 dark:text-[#2A2A2A]">
                    {post.readTime}
                  </p>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl md:text-2xl text-stone-800 dark:text-[#DEDEDE] group-hover:text-stone-900 dark:group-hover:text-[#EFEFEF] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <ArrowRight
                      size={14}
                      className="flex-shrink-0 mt-1.5 text-stone-200 dark:text-[#222] group-hover:text-stone-500 dark:group-hover:text-[#555] group-hover:translate-x-0.5 transition-all"
                    />
                  </div>
                  <p className="font-mono text-sm text-stone-400 dark:text-[#555] mt-2.5 leading-[1.85]">
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
