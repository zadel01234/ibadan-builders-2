// import { motion } from 'framer-motion'

// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.65, ease: "easeOut" as any } }),
// }

// export default function Hero() {
//   return (
//     <section className="hero" id="home">
//       <div className="hero-bg-blob" />
//       <div className="hero-dots" />
//       <div className="hero-dots-2" />
//       <div className="container">
//         {/* LEFT */}
//         <div>

//           <motion.p className="hero-eyebrow" custom={1} variants={fadeUp} initial="hidden" animate="visible">
//             Ibadan · Saturday, 23rd May 2026
//           </motion.p>

//           <motion.h1 custom={2} variants={fadeUp} initial="hidden" animate="visible">
//             Builders, Talent<br />
//             <em>& Creators</em> Meetup
//           </motion.h1>

//           <motion.p className="hero-sub" custom={3} variants={fadeUp} initial="hidden" animate="visible">
//             Empowering builders to document their journeys, position themselves for global opportunities, and build meaningful connections.
//           </motion.p>

//           <motion.div className="hero-actions" custom={4} variants={fadeUp} initial="hidden" animate="visible">
//             <a href="https://eventpulse.ng/checkout/ibadan-builders-talents-creators-meetup?selection=1:1" target="_blank" className="btn-primary">
//               Get Your Ticket
//               <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" fill="none" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
//             </a>
//             <a href="https://talenttribe.atcafrica.com/" target="_blank" className="btn-outline">Join Our Community</a>
//           </motion.div>
//         </div>

//         {/* RIGHT — Event Card */}
//         <motion.div
//           className="hero-card"
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" as any }}
//         >
//           <div className="hero-card-top" />
//           <div className="hero-card-body">
//             <div className="hero-card-label">
//               <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></svg>
//               Event Details
//             </div>

//             <div className="detail-item">
//               <div className="detail-icon">
//                 <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></svg>
//               </div>
//               <div>
//                 <div className="detail-key">Date</div>
//                 <div className="detail-val">Saturday, 23rd May 2026</div>
//               </div>
//             </div>

//             <div className="detail-item">
//               <div className="detail-icon">
//                 <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
//               </div>
//               <div>
//                 <div className="detail-key">Time</div>
//                 <div className="detail-val">11:00 AM WAT</div>
//               </div>
//             </div>

//             <div className="detail-item">
//               <div className="detail-icon">
//                 <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
//               </div>
//               <div>
//                 <div className="detail-key">Venue</div>
//                 <div className="detail-val">NOTZERO Innovation Hub, Akobo Ibadan</div>
//               </div>
//             </div>

//             <div className="hero-card-stats">
//               <div className="hero-stat"><div className="n">3</div><div className="l">Panels</div></div>
//               <div className="hero-stat"><div className="n">10+</div><div className="l">Speakers</div></div>
//               <div className="hero-stat"><div className="n">1</div><div className="l">Event</div></div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }



import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.65, ease: "easeOut" as any } }),
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const modalVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" as any } },
  exit: { opacity: 0, y: 16, scale: 0.97, transition: { duration: 0.2 } },
}

export default function Hero() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="hero" id="home">
      <div className="hero-bg-blob" />
      <div className="hero-dots" />
      <div className="hero-dots-2" />
      <div className="container">
        {/* LEFT */}
        <div>
          <motion.p className="hero-eyebrow" custom={1} variants={fadeUp} initial="hidden" animate="visible">
            Ibadan · Saturday, 23rd May 2026
          </motion.p>

          <motion.h1 custom={2} variants={fadeUp} initial="hidden" animate="visible">
            Builders, Talent<br />
            <em>& Creators</em> Meetup
          </motion.h1>

          <motion.p className="hero-sub" custom={3} variants={fadeUp} initial="hidden" animate="visible">
            Empowering builders to document their journeys, position themselves for global opportunities, and build meaningful connections.
          </motion.p>

          <motion.div className="hero-actions" custom={4} variants={fadeUp} initial="hidden" animate="visible">
            <button onClick={() => setShowModal(true)} className="btn-primary">
              Get Your Ticket
              <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" fill="none" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <a href="https://talenttribe.atcafrica.com/" target="_blank" className="btn-outline">Join Our Community</a>
          </motion.div>
        </div>

        {/* RIGHT — Event Card */}
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" as any }}
        >
          <div className="hero-card-top" />
          <div className="hero-card-body">
            <div className="hero-card-label">
              <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="16" y1="2" x2="16" y2="6" /></svg>
              Event Details
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="16" y1="2" x2="16" y2="6" /></svg>
              </div>
              <div>
                <div className="detail-key">Date</div>
                <div className="detail-val">Saturday, 23rd May 2026</div>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <div>
                <div className="detail-key">Time</div>
                <div className="detail-val">11:00 AM WAT</div>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div>
                <div className="detail-key">Venue</div>
                <div className="detail-val">NOTZERO Innovation Hub, Akobo Ibadan</div>
              </div>
            </div>

            <div className="hero-card-stats">
              <div className="hero-stat"><div className="n">3</div><div className="l">Panels</div></div>
              <div className="hero-stat"><div className="n">10+</div><div className="l">Speakers</div></div>
              <div className="hero-stat"><div className="n">1</div><div className="l">Event</div></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Payment Modal ── */}
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
    </section>
  )
}