import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Community } from '@/components/Community'
import { Blog } from '@/components/Blog'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Community />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
