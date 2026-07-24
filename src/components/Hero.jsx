import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import MagneticButton from './MagneticButton'
import BrushStroke from './BrushStroke'
import { hero, KIWIFY_LINK } from '../data/content'
import { trackInitiateCheckout } from '../lib/pixel'
import { SHURIKEN_SRC } from '../lib/shurikenStyle'
import useIsDesktop from '../hooks/useIsDesktop'

const EASE = [0.76, 0, 0.24, 1]

export default function Hero() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const isDesktop = useIsDesktop()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Mobile shuriken: scoped to the Hero only, shrinks/fades out by the end
  // of this section. Desktop's version lives in <ShurikenTrail> and tracks
  // the whole document instead — see Home.jsx.
  const mobileShurikenScale = useTransform(scrollYProgress, [0, 1], [1, 0.2])
  const mobileShurikenOpacity = useTransform(scrollYProgress, [0, 1], [0.85, 0])

  // Blade-cut transition into "Dor": the wedge starts fully clipped away
  // (transparent, showing the Hero's own dark bg, as expected mid-section)
  // and grows to a solid washi rectangle exactly as scrollYProgress hits 1,
  // i.e. exactly when the Hero exits and the (also washi) Pain section
  // begins — so the seam always resolves to a flush color match instead of
  // flashing the dark Hero background right at the boundary.
  const clipProgress = useTransform(scrollYProgress, [0.55, 1], [0, 1])
  const clipPath = useTransform(clipProgress, (v) => {
    const rightEdge = 100 - v * 100
    const leftEdge = Math.max(0, rightEdge - 12)
    return `polygon(0% 100%, 100% 100%, 100% ${rightEdge}%, 0% ${leftEdge}%)`
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const titleWords = hero.titleLine2.split(' ')

  // Per-word grouping keeps the global per-character stagger delay (i * 0.055)
  // while stopping the browser from breaking a line in the middle of a word —
  // adjacent inline-block spans with no whitespace between them are still
  // legal break points, so plain char-by-char splitting can (and did, once
  // titleLine1 got long enough to wrap) cut a word like "que" into "qu"/"e".
  let titleLine1CharIndex = 0
  const titleLine1Words = hero.titleLine1.split(' ').map((word) =>
    word.split('').map((char) => ({ char, i: titleLine1CharIndex++ })),
  )

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col overflow-hidden bg-sumi pt-16"
    >
      <motion.div
        className="washi-texture pointer-events-none absolute inset-0 opacity-30"
        style={{ y: reduceMotion ? 0 : bgY }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col items-center gap-12 px-6 pb-16 md:flex-row md:items-center md:gap-8">
        <div className="relative z-10 flex flex-1 flex-col items-start text-left">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-6 font-body text-xs font-medium uppercase tracking-[0.2em] text-kin"
          >
            {hero.eyebrow}
          </motion.span>

          <h1 className="font-display text-4xl font-bold text-washi sm:text-5xl md:text-6xl">
            <span className="block">
              {titleLine1Words.map((wordChars, wi) => (
                <span key={wi}>
                  <span className="inline-block whitespace-nowrap">
                    {wordChars.map(({ char, i }) => (
                      <motion.span
                        key={i}
                        className="inline-block"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={
                          reduceMotion
                            ? { duration: 0.3 }
                            : { duration: 0.5, delay: i * 0.055, ease: EASE }
                        }
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                  {wi < titleLine1Words.length - 1 ? ' ' : ''}
                </span>
              ))}
            </span>
            <span className="relative mt-1 inline-block text-shu">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  className="mr-3 inline-block"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={
                    reduceMotion
                      ? { duration: 0.3 }
                      : {
                          duration: 0.5,
                          delay: hero.titleLine1.length * 0.055 + i * 0.08,
                          ease: EASE,
                        }
                  }
                >
                  {word}
                </motion.span>
              ))}
              <BrushStroke className="-bottom-2 h-4" delay={1.1} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
            className="mt-6 max-w-md font-body text-base text-washi/80 md:text-lg"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05, ease: EASE }}
            className="mt-8 flex flex-col items-start gap-3"
          >
            <MagneticButton
              href={KIWIFY_LINK}
              onClick={trackInitiateCheckout}
              size="large"
            >
              {hero.ctaLabel}
            </MagneticButton>
            <span className="font-body text-xs text-nezumi">{hero.microcopy}</span>
          </motion.div>
        </div>

        <div className="relative z-10 flex flex-1 items-center justify-center">
          <motion.img
            src="/mockup-ebook.png"
            alt="Capa do e-book O Caminho Ninja"
            loading="eager"
            width={340}
            height={440}
            className="relative z-10 w-48 rounded-lg shadow-2xl shadow-black/50 sm:w-60 md:w-72"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={reduceMotion ? undefined : { rotate: -3, scale: 1.02 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          />
        </div>
      </div>

      {/* Shuriken local ao Hero — cobre os dois casos que não usam o rastro
          global fixo (ShurikenTrail, montado em Home.jsx): motion reduzida
          (estática, sempre) e mobile (anima só dentro desta seção). No
          desktop com motion habilitada, nada é renderizado aqui. */}
      {reduceMotion ? (
        // absolute (not fixed): scrolls away with the rest of the Hero and
        // never reappears — there's no scroll-driven opacity fade here to
        // hide a viewport-pinned element once Hero ends.
        <img
          src={SHURIKEN_SRC}
          alt=""
          loading="eager"
          className="pointer-events-none absolute right-[4%] top-[30%] z-[5] h-[180px] w-[180px] select-none md:right-[10%] md:h-[300px] md:w-[300px]"
          style={{ opacity: 0.85 }}
          aria-hidden="true"
        />
      ) : (
        !isDesktop && (
          // absolute, not fixed: Hero has overflow-hidden, so this can
          // never physically render past Hero's own box no matter the
          // scroll position — a hard guarantee against crossing into Pain,
          // which a viewport-pinned element can't give on a ~1-viewport-tall
          // Hero (it would still overlap Pain's text once Pain scrolls into
          // the lower part of the screen). Anchored near the bottom of Hero
          // so the shrink/fade is still visible right up to the seam.
          <motion.img
            src={SHURIKEN_SRC}
            alt=""
            loading="eager"
            className="pointer-events-none absolute right-[4%] top-[68%] z-[5] h-[180px] w-[180px] select-none"
            style={{
              scale: mobileShurikenScale,
              opacity: mobileShurikenOpacity,
            }}
            aria-hidden="true"
          />
        )
      )}

      {/* Talho de lâmina — corte diagonal na transição para a próxima seção */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-washi md:h-32"
        style={
          reduceMotion
            ? { opacity: 1 }
            : { clipPath: clipPath }
        }
        aria-hidden="true"
      />
    </section>
  )
}
