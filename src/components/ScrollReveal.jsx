import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1]

// Fade + translateY padrão, disparado uma vez ao entrar na viewport.
export default function ScrollReveal({
  children,
  as: Component = motion.div,
  index = 0,
  className = '',
  y = 24,
  duration = 0.6,
  ...rest
}) {
  const reduceMotion = useReducedMotion()
  const delay = reduceMotion ? 0 : 0.2 + index * 0.08

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      // amount lowered + bottom margin expanded so the reveal starts before
      // the element is actually on screen — on a long page scrolled with a
      // quick mobile flick, content finishes fading in by the time it's
      // visible instead of visibly "catching up" to the scroll.
      viewport={{ once: true, amount: 0.15, margin: '0px 0px 150px 0px' }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Component>
  )
}
