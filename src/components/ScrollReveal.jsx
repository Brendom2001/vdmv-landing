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
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Component>
  )
}
