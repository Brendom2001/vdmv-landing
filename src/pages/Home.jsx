import { useReducedMotion } from 'framer-motion'
import ScrollProgress from '../components/ScrollProgress'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Pain from '../components/Pain'
import Method from '../components/Method'
import Chapters from '../components/Chapters'
import Bonus from '../components/Bonus'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Offer from '../components/Offer'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import MobileCTA from '../components/MobileCTA'
import ShurikenTrail from '../components/ShurikenTrail'
import useIsDesktop from '../hooks/useIsDesktop'
import { testimonials } from '../data/content'

export default function Home() {
  const reduceMotion = useReducedMotion()
  const isDesktop = useIsDesktop()

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Pain />
        <Method />
        <Chapters />
        <Bonus />
        <About />
        {/* Omitida até existirem depoimentos reais de leitoras beta — ver src/data/content.js */}
        <Testimonials testimonials={testimonials} />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
      {isDesktop && !reduceMotion && <ShurikenTrail />}
    </>
  )
}
