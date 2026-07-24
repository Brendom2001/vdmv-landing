import ScrollReveal from './ScrollReveal'
import BrushStroke from './BrushStroke'
import MagneticButton from './MagneticButton'
import Hanko from './Hanko'
import { offer, KIWIFY_LINK } from '../data/content'
import { trackInitiateCheckout } from '../lib/pixel'

export default function Offer() {
  return (
    <section className="bg-sumi py-16 md:py-32">
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <ScrollReveal>
          <h2 className="relative inline-block font-display text-3xl font-bold text-washi sm:text-4xl">
            {offer.title}
            <BrushStroke className="-bottom-2 h-3" color="#C7392B" />
          </h2>
        </ScrollReveal>

        <ScrollReveal index={1} className="mt-12 rounded-xl border border-washi/10 bg-washi/5 p-8 backdrop-blur-sm md:p-10">
          <ul className="flex flex-col gap-3 text-left">
            {offer.items.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-sm text-washi/90">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-kin" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center gap-1">
            <span className="font-body text-sm text-washi/50 line-through">
              de {offer.priceAnchor}
            </span>
            <span className="font-display text-5xl font-bold text-shu">
              por {offer.price}
            </span>
            <span className="font-body text-xs text-washi/50">{offer.installments}</span>
          </div>

          <p className="mx-auto mt-6 max-w-sm font-body text-sm text-washi/70">{offer.valueLine}</p>

          <MagneticButton
            href={KIWIFY_LINK}
            onClick={trackInitiateCheckout}
            size="large"
            className="mt-8 w-full"
          >
            {offer.ctaLabel}
          </MagneticButton>
        </ScrollReveal>

        <ScrollReveal index={2} className="mt-10 flex items-center justify-center gap-4">
          <Hanko size={48} tone="kin" />
          <div className="text-left">
            <p className="font-display text-sm font-semibold text-washi">
              {offer.guarantee.title}
            </p>
            <p className="font-body text-xs text-washi/60">{offer.guarantee.description}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
