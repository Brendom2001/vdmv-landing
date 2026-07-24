import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { faq } from '../data/content'

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <li className="border-b border-sumi/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-display text-base font-semibold text-sumi md:text-lg">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 font-display text-2xl text-shu"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-8 font-body text-sm text-nezumi">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section className="bg-washi py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <ScrollReveal>
          <span className="mb-4 block font-body text-xs font-medium uppercase tracking-[0.2em] text-kin">
            {faq.eyebrow}
          </span>
          <h2 className="font-display text-3xl font-bold text-sumi sm:text-4xl">
            {faq.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal index={1}>
          <ul className="mt-10 border-t border-sumi/10">
            {faq.items.map((item, i) => (
              <FAQItem
                key={item.question}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
