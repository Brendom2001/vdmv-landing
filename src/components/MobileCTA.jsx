import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { offer, KIWIFY_LINK } from '../data/content'
import { trackInitiateCheckout } from '../lib/pixel'

export default function MobileCTA() {
  const [visible, setVisible] = useState(false)
  const lastScrollY = useRef(0)

  // The page is long (11+ sections). A bar that stays pinned for the whole
  // rest of the scroll eats real estate on a small screen for most of the
  // visit, so it hides on scroll-down and only reappears on scroll-up —
  // same pattern as most native mobile browser chrome.
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      const pastThreshold = y > window.innerHeight * 0.8
      const scrolledUp = y < lastScrollY.current - 4
      const scrolledDown = y > lastScrollY.current + 4

      setVisible((prev) => {
        if (!pastThreshold) return false
        if (scrolledDown) return false
        if (scrolledUp) return true
        return prev
      })

      lastScrollY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-4 border-t border-washi/10 bg-sumi/95 px-5 py-3 backdrop-blur-sm md:hidden"
        >
          <span className="font-display text-lg font-bold text-washi">{offer.price}</span>
          <a
            href={KIWIFY_LINK}
            onClick={trackInitiateCheckout}
            className="flex-1 rounded-xl bg-shu py-3 text-center font-body text-sm font-medium uppercase tracking-wide text-washi"
          >
            Começar agora
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
