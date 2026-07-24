import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import BrushStroke from './BrushStroke'
import { method } from '../data/content'

export default function Method() {
  return (
    <section className="bg-[#EFE9DB] py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <img
          src="/shuriken.webp"
          alt=""
          loading="lazy"
          width={64}
          height={64}
          className="mx-auto mb-10 h-16 w-16 select-none"
          aria-hidden="true"
        />

        <ScrollReveal className="max-w-xl">
          <span className="mb-4 block font-body text-xs font-medium uppercase tracking-[0.2em] text-kin">
            {method.eyebrow}
          </span>
          <h2 className="relative inline-block font-display text-3xl font-bold text-sumi sm:text-4xl">
            {method.title}
            <BrushStroke className="-bottom-2 h-3" />
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {method.pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} index={i}>
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 20px 40px -20px rgba(199, 57, 43, 0.25)',
                }}
                transition={{ duration: 0.3 }}
                className="flex h-full flex-col gap-4 rounded-xl border border-sumi/10 bg-washi p-8"
              >
                <span className="font-display text-2xl font-bold text-shu">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold text-sumi">
                  {pillar.title}
                </h3>
                <p className="font-body text-sm text-nezumi">{pillar.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
