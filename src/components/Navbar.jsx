import { useEffect, useState } from 'react'
import MagneticButton from './MagneticButton'
import { KIWIFY_LINK } from '../data/content'
import { trackInitiateCheckout } from '../lib/pixel'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed left-0 top-0 z-40 w-full transition-colors duration-300"
      style={{
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        backgroundColor: scrolled ? 'rgba(25, 22, 18, 0.7)' : 'transparent',
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-display text-lg font-bold tracking-[-0.02em] text-washi">VDMV</span>
        <MagneticButton
          href={KIWIFY_LINK}
          onClick={trackInitiateCheckout}
          className="px-4 py-2 text-xs"
        >
          Quero começar
        </MagneticButton>
      </nav>
    </header>
  )
}
