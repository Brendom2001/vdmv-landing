import ScrollReveal from './ScrollReveal'
import { productIntro } from '../data/content'

export default function ProductIntro() {
  return (
    <section className="bg-sumi py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <ScrollReveal>
          <span className="mb-4 block font-body text-xs font-medium uppercase tracking-[0.2em] text-kin">
            {productIntro.eyebrow}
          </span>
          <h2 className="font-display text-3xl font-bold text-washi sm:text-4xl">
            {productIntro.title}
          </h2>
          <p className="mt-6 font-body text-base text-washi/80 md:text-lg">
            {productIntro.description}
          </p>
        </ScrollReveal>

        <ScrollReveal index={1}>
          <p className="mt-10 font-display text-2xl font-bold text-shu sm:text-3xl">
            {productIntro.highlight}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
