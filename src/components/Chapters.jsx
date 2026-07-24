import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import Hanko from './Hanko'
import { chapters } from '../data/content'

function useCountUp(target, active) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let raf
    const duration = 1200
    const start = performance.now()

    function tick(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target])

  return value
}

function ChapterItem({ item, index, isOpen, onToggle }) {
  return (
    <li className="border-b border-sumi/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-4 py-6 text-left"
      >
        <Hanko size={40} />
        <span className="flex-1 font-display text-lg font-semibold text-sumi">
          {item.title}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="font-display text-2xl text-shu"
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
            <p className="pb-6 pl-[56px] pr-4 font-body text-sm text-nezumi">
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export default function Chapters() {
  const [openIndex, setOpenIndex] = useState(0)
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.6 })

  const chapterCount = useCountUp(chapters.stats.chapters, statsInView)
  const missionCount = useCountUp(chapters.stats.missions, statsInView)
  const decisionCount = useCountUp(chapters.stats.decision, statsInView)

  return (
    <section className="bg-washi py-16 md:py-32">
      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <ScrollReveal>
          <span className="mb-4 block font-body text-xs font-medium uppercase tracking-[0.2em] text-kin">
            {chapters.eyebrow}
          </span>
          <h2 className="font-display text-3xl font-bold text-sumi sm:text-4xl">
            {chapters.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal index={1}>
          <ul className="mt-12 border-t border-sumi/10">
            {chapters.list.map((item, i) => (
              <ChapterItem
                key={item.title}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </ul>
        </ScrollReveal>

        <div
          ref={statsRef}
          className="mt-14 flex flex-wrap justify-center gap-x-3 gap-y-2 text-center font-display text-lg font-semibold text-shu sm:text-xl"
        >
          <span>{chapterCount} capítulos</span>
          <span className="text-nezumi">·</span>
          <span>{missionCount} missões práticas</span>
          <span className="text-nezumi">·</span>
          <span>{decisionCount} decisão</span>
        </div>
      </div>
    </section>
  )
}
