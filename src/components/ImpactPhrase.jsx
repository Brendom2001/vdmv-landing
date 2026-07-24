import ScrollReveal from './ScrollReveal'
import BrushStroke from './BrushStroke'

// Faixa de destaque entre seções — usa uma frase de src/data/content.js
// (impactPhrases). Reaproveita o mesmo padrão de pincelada do Method/Offer.
export default function ImpactPhrase({ children }) {
  return (
    <div className="border-y border-kin/20 bg-washi py-8 md:py-20">
      <ScrollReveal className="mx-auto max-w-2xl px-6 text-center">
        <p className="relative inline-block font-display text-2xl font-bold text-sumi sm:text-3xl">
          {children}
          <BrushStroke className="-bottom-3 h-3" />
        </p>
      </ScrollReveal>
    </div>
  )
}
