import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Techstack from '../components/Techstack'
import Extracurriculars from '../components/Extracurriculars'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <Techstack />
      <Extracurriculars />
      <Contact />
    </div>
  )
}