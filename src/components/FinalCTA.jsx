import ScrollReveal from './ScrollReveal'
import MagneticButton from './MagneticButton'
import { finalCta, KIWIFY_LINK } from '../data/content'
import { trackInitiateCheckout } from '../lib/pixel'

export default function FinalCTA() {
  return (
    <section className="bg-washi py-24 md:py-32">
      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-8 px-6 text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold text-sumi sm:text-4xl">
            {finalCta.title}
          </h2>
          <p className="mt-4 font-body text-base text-sumi/70">{finalCta.subtitle}</p>
        </ScrollReveal>
        <ScrollReveal index={1}>
          <MagneticButton
            href={KIWIFY_LINK}
            onClick={trackInitiateCheckout}
            size="large"
          >
            {finalCta.ctaLabel}
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  )
}
