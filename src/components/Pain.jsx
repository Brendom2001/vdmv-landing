import { motion, useReducedMotion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { pains } from '../data/content'

function BrushCheck() {
  return (
    <svg
      viewBox="0 0 32 24"
      className="h-5 w-6 shrink-0 text-shu"
      aria-hidden="true"
    >
      <path
        d="M3 12 L13 20 L29 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Pain() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-washi py-16 md:py-32">
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <span className="mb-4 block font-body text-xs font-medium uppercase tracking-[0.2em] text-kin">
            {pains.eyebrow}
          </span>
          <h2 className="font-display text-3xl font-bold text-sumi sm:text-4xl">
            {pains.title}
          </h2>
        </ScrollReveal>

        <ul className="mt-10 flex flex-col gap-5">
          {pains.items.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15, margin: '0px 0px 150px 0px' }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : 0.2 + i * 0.08,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="flex items-start gap-4 font-body text-lg text-sumi/90"
            >
              <BrushCheck />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>

        <ScrollReveal index={5} className="mt-12">
          <p className="font-display text-2xl font-semibold text-shu">
            {pains.closing}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
