import { useReducedMotion } from 'framer-motion'
import ScrollProgress from '../components/ScrollProgress'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Pain from '../components/Pain'
import ImpactPhrase from '../components/ImpactPhrase'
import Method from '../components/Method'
import ProductIntro from '../components/ProductIntro'
import Chapters from '../components/Chapters'
import Missions from '../components/Missions'
import About from '../components/About'
import WhoFor from '../components/WhoFor'
import Testimonials from '../components/Testimonials'
import Offer from '../components/Offer'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import MobileCTA from '../components/MobileCTA'
import ShurikenTrail from '../components/ShurikenTrail'
import useIsDesktop from '../hooks/useIsDesktop'
import { testimonials, impactPhrases } from '../data/content'

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
        <ImpactPhrase>{impactPhrases[0]}</ImpactPhrase>
        <Method />
        <ProductIntro />
        <Chapters />
        <ImpactPhrase>{impactPhrases[1]}</ImpactPhrase>
        <Missions />
        <About />
        <WhoFor />
        {/* Omitida até existirem depoimentos reais de leitores beta — ver src/data/content.js */}
        <Testimonials testimonials={testimonials} />
        <ImpactPhrase>{impactPhrases[2]}</ImpactPhrase>
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
