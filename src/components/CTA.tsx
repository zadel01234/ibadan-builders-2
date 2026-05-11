// import { motion } from 'framer-motion'
// import { useInView } from './useInView'

// const highlights = [
//   { text: '3 curated panel sessions featuring industry insights.' },
//   { text: 'A keynote address from a featured speaker.' },
//   { text: 'High-value networking with builders, creatives, and industry professionals.' },
//   { text: 'Exclusive event merch.' },
//   { text: 'Venue details shared upon registration.' },
// ]

// export default function CTA() {
//   const [ref, inView] = useInView(0.2)

//   return (
//     <section className="cta-section" id="register" ref={ref as React.RefObject<HTMLElement>}>
//       <div className="cta-blob-2" />
//       <div className="container">
//         <motion.div
//           className="cta-grid"
//           initial={{ opacity: 0, y: 28 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.65 }}
//         >
//           <div>
//             <div className="cta-eyebrow">Saturday, 23rd May 2026 · 11:00 AM WAT</div>
//             <h2 className="cta-title">Secure Your Spot at the Meetup</h2>
//             <p className="cta-desc">
//               Registration is handled through EventPulse. Spots are limited — don't wait. NOTZERO Innovation Hub, Akobo Ibadan.
//             </p>
//             <div style={{ marginTop: '32px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
//               <a href="https://eventpulse.ng/checkout/ibadan-builders-talents-creators-meetup?selection=1:1" target="_blank" className="btn-primary">
//                 <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" fill="none" strokeWidth="2.5">
//                   <path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h6"/>
//                   <path d="M15 3h6v6"/><line x1="10" y1="14" x2="21" y2="3"/>
//                 </svg>
//                 Get Your Ticket
//               </a>
//             </div>
//           </div>

//           <div className="cta-card">
//             <div className="cta-card-title">What to Expect</div>
//             <div className="cta-highlights">
//               {highlights.map(h => (
//                 <div key={h.text} className="cta-hl">
//                   <div className="cta-hl-icon">
//                     <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
//                   </div>
//                   {h.text}
//                 </div>
//               ))}
//             </div>
//             <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '10px' }}>
//               <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--blue-mid)', flexShrink: 0, animation: 'pulse 2s infinite' }} />
//               <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
//                 Ticketing: EventPulse · Partner: Skygrid, Talenxify
//               </span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }



import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from './useInView'

const highlights = [
  { text: '3 curated panel sessions featuring industry insights.' },
  { text: 'A keynote address from a featured speaker.' },
  { text: 'High-value networking with builders, creatives, and industry professionals.' },
  { text: 'Exclusive event merch.' },
]

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

export default function CTA() {
  const [ref, inView] = useInView(0.2)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [showModal])

  return (
    <>
      <section className="cta-section" id="register" ref={ref as React.RefObject<HTMLElement>}>
        <div className="cta-blob-2" />
        <div className="container">
          <motion.div
            className="cta-grid"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <div>
              <div className="cta-eyebrow">Saturday, 23rd May 2026 · 11:00 AM WAT</div>
              <h2 className="cta-title">Secure Your Spot at the Meetup</h2>
              <p className="cta-desc">
                Registration is handled through EventPulse. Spots are limited — don't wait. Sebs Hub, 32 Awolowo Ave- Bodija Ibadan.
              </p>
              <div style={{ marginTop: '32px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button onClick={() => setShowModal(true)} className="btn-primary">
                  <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" fill="none" strokeWidth="2.5">
                    <path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h6" />
                    <path d="M15 3h6v6" /><line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Get Your Ticket
                </button>
              </div>
            </div>

            <div className="cta-card">
              <div className="cta-card-title">What to Expect</div>
              <div className="cta-highlights">
                {highlights.map(h => (
                  <div key={h.text} className="cta-hl">
                    <div className="cta-hl-icon">
                      <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    {h.text}
                  </div>
                ))}
              </div>
              <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--blue-mid)', flexShrink: 0, animation: 'pulse 2s infinite' }} />
                <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                  Ticketing: EventPulse · Partner: Skygrid, Talenxify
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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