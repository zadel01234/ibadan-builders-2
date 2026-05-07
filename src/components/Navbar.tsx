// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50)
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   const links = [
//     { label: 'Home', href: '#home' },
//     { label: 'About', href: '#about' },
//     { label: 'Speakers', href: '#speakers' },
//     { label: 'Sponsors', href: '#sponsors' },
//   ]

//   return (
//     <>
//       <motion.nav
//         className={`navbar ${scrolled ? 'scrolled' : ''}`}
//         initial={{ y: -80 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.55, ease: 'easeOut' }}
//       >
//         <div className="container">
//           <a href="#home" className="nav-logo">
//             <img
//               src="/Oyo Talent Tribe logo.png"
//               alt="Ibadan Tech Meetup Logo"
//               className="nav-logo-img"
//             />
//           </a>

//           <div className="nav-links-desktop">
//             {links.map(link => (
//               <a key={link.href} href={link.href}>{link.label}</a>
//             ))}
//             <a href="https://eventpulse.ng/checkout/ibadan-builders-talents-creators-meetup?selection=1:1" target="_blank" className="nav-cta">Get Tickets </a>
//           </div>

//           <button
//             className="hamburger"
//             onClick={() => setMobileOpen(prev => !prev)}
//             aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
//             style={{ visibility: mobileOpen ? 'hidden' : 'visible' }}
//           >
//             <span /><span /><span />
//           </button>
//         </div>
//       </motion.nav>

//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             className="mobile-menu open"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//           >
//             <button className="mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
//             {links.map(link => (
//               <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</a>
//             ))}
//             <a href="https://eventpulse.ng/checkout/ibadan-builders-talents-creators-meetup?selection=1:1" target="_blank" className="btn-primary" onClick={() => setMobileOpen(false)}>Get Tickets</a>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }



import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const modalVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' as any } },
  exit: { opacity: 0, y: 16, scale: 0.97, transition: { duration: 0.2 } },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [showModal])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Sponsors', href: '#sponsors' },
  ]

  const openModal = () => {
    setMobileOpen(false)
    setShowModal(true)
  }

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
            <img
              src="/Oyo Talent Tribe logo.png"
              alt="Ibadan Tech Meetup Logo"
              className="nav-logo-img"
            />
          </a>

          <div className="nav-links-desktop">
            {links.map(link => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
            <button onClick={openModal} className="nav-cta">Get Tickets</button>
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

      {/* Mobile Menu */}
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
            <button className="btn-primary" onClick={openModal}>Get Tickets</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Payment Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="ticket-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="ticket-modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="ticket-modal-close" onClick={() => setShowModal(false)} aria-label="Close">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <p className="ticket-modal-eyebrow">Secure Checkout</p>
              <h2 className="ticket-modal-title">Choose Your<br />Payment Option</h2>
              <p className="ticket-modal-sub">
                Builders, Talent &amp; Creators Meetup &middot; Sat, 23rd May 2026 &middot; Ibadan
              </p>

              <div className="ticket-modal-divider">
                <span>Pay via</span>
              </div>

              <a
                href="https://flutterwave.com/pay/fyaffqxbffxc"
                target="_blank"
                rel="noopener noreferrer"
                className="pay-option"
              >

                <div className="pay-info">
                  <div className="pay-name">Flutterwave</div>
                  <div className="pay-desc">Card, bank transfer, USSD &amp; more</div>
                </div>
                <svg className="pay-arrow" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="https://eventpulse.ng/checkout/ibadan-builders-talents-creators-meetup?selection=1:1"
                target="_blank"
                rel="noopener noreferrer"
                className="pay-option"
              >

                <div className="pay-info">
                  <div className="pay-name">EventPulse</div>
                  <div className="pay-desc">Official event ticketing platform</div>
                </div>
                <svg className="pay-arrow" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <p className="ticket-modal-note">
                Both options are secure &amp; encrypted.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}