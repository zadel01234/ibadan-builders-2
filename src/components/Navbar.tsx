import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Sponsors', href: '#sponsors' },
  ]

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div className="container">
          <a href="#home" className="nav-logo">
            <div className="nav-logo-mark">
              <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div>
              <div className="nav-logo-name">Ibadan Builders</div>
              <div className="nav-logo-sub">Meetup 2026</div>
            </div>
          </a>

          <div className="nav-links-desktop">
            {links.map(link => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
            <a href="https://eventpulse.ng/checkout/ibadan-builders-talents-creators-meetup?selection=1:1" target="_blank" className="nav-cta">Get Tickets →</a>
          </div>

          <button
            className="hamburger"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            style={{ visibility: mobileOpen ? 'hidden' : 'visible' }}
          >
            <span /><span /><span />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button className="mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
            {links.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</a>
            ))}
            <a href="#register" className="btn-primary" onClick={() => setMobileOpen(false)}>Register Now</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
