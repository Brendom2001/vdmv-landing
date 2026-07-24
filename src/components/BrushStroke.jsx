import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

// Pincelada sumi-ê animada — traço horizontal sob palavras-chave.
export default function BrushStroke({ className = '', color = '#C7392B', delay = 0.3 }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const inView = useInView(ref, { once: true, amount: 0.6 })

  return (
    <svg
      ref={ref}
      className={`pointer-events-none absolute left-0 w-full ${className}`}
      viewBox="0 0 300 24"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M4 14 C 40 6, 80 20, 120 12 S 200 4, 296 14"
        fill="none"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={
          reduceMotion
            ? { duration: 0.01 }
            : { duration: 1.1, delay, ease: [0.76, 0, 0.24, 1] }
        }
      />
    </svg>
  )
}
