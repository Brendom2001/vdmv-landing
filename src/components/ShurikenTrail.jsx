import {
  motion,
  useScroll,
  useTransform,
  useVelocity,
  useSpring,
} from 'framer-motion'
import { SHURIKEN_SRC } from '../lib/shurikenStyle'

const BASE_OPACITY = 0.85

// Desktop-only, motion-enabled trail: follows the whole document scroll,
// fixed to the viewport. Mobile and prefers-reduced-motion get a separate,
// Hero-scoped shuriken (see Hero.jsx) instead of this one.
//
// z-[5]: a plain (non-positioned) section background always paints below
// any positioned element regardless of z-index value, so this only needs a
// value *below* each section's own content wrapper (z-10, see Pain/Method/
// etc.) — never below zero, or it would fall behind the sumi/washi bg too.
export default function ShurikenTrail() {
  const { scrollYProgress } = useScroll()

  const baseRotate = useTransform(scrollYProgress, [0, 1], [0, 2160])
  const scrollVelocity = useVelocity(scrollYProgress)
  const velocityRotate = useTransform(scrollVelocity, [-2, 2], [-180, 180], {
    clamp: true,
  })
  const combinedRotate = useTransform(
    [baseRotate, velocityRotate],
    ([base, vel]) => base + vel,
  )
  const rotate = useSpring(combinedRotate, { stiffness: 120, damping: 22 })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.12])
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.85, 1],
    [BASE_OPACITY, BASE_OPACITY, 0],
  )
  const top = useTransform(scrollYProgress, [0, 1], ['30vh', '65vh'])

  return (
    <motion.img
      src={SHURIKEN_SRC}
      alt=""
      loading="eager"
      className="pointer-events-none fixed right-[6vw] z-[5] h-[220px] w-[220px] select-none md:h-[300px] md:w-[300px]"
      style={{
        top,
        scale,
        opacity,
        rotate,
      }}
      aria-hidden="true"
    />
  )
}
