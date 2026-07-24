import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

// Botão com leve atração magnética ao cursor — usado em todos os CTAs.
export default function MagneticButton({
  children,
  onClick,
  href,
  className = '',
  size = 'default',
  ...rest
}) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 280, damping: 28 })
  const springY = useSpring(y, { stiffness: 280, damping: 28 })

  function handleMouseMove(e) {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX * 0.25)
    y.set(relY * 0.4)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const sizeClasses =
    size === 'large'
      ? 'px-10 py-5 text-base md:text-lg'
      : 'px-6 py-3 text-sm'

  const Component = href ? motion.a : motion.button

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center justify-center rounded-xl bg-shu font-body font-medium uppercase tracking-wide text-washi shadow-lg shadow-shu/20 transition-colors hover:bg-shu/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kin ${sizeClasses} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  )
}
