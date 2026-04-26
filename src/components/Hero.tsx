import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.65, ease: "easeOut" as any } }),
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-blob" />
      <div className="hero-dots" />
      <div className="hero-dots-2" />
      <div className="container">
        {/* LEFT */}
        <div>
          <motion.div className="hero-badge" custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <span className="pulse" />
            <span>Oyo Talent Tribe × Talenxify Presents</span>
          </motion.div>

          <motion.p className="hero-eyebrow" custom={1} variants={fadeUp} initial="hidden" animate="visible">
            Ibadan · Saturday, 23rd May 2027
          </motion.p>

          <motion.h1 custom={2} variants={fadeUp} initial="hidden" animate="visible">
            Builders, Talent<br />
            <em>& Creators</em> Meetup
          </motion.h1>

          <motion.p className="hero-sub" custom={3} variants={fadeUp} initial="hidden" animate="visible">
            Bridging the gap between Technical Talent and Storytelling. Empowering builders to document their journeys, position themselves for global opportunities, and build meaningful connections.
          </motion.p>

          <motion.div className="hero-actions" custom={4} variants={fadeUp} initial="hidden" animate="visible">
            <a href="https://eventpulse.ng/checkout/ibadan-builders-talents-creators-meetup?selection=1:1" target="_blank" className="btn-primary">
              Get Your Ticket
              <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" fill="none" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#about" className="btn-outline">Learn More</a>
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
              <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></svg>
              Event Details
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></svg>
              </div>
              <div>
                <div className="detail-key">Date</div>
                <div className="detail-val">Saturday, 23rd May 2027</div>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <div className="detail-key">Time</div>
                <div className="detail-val">12:00 PM – 5:00 PM WAT</div>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="detail-key">Venue</div>
                <div className="detail-val">NOTZERO Innovation Hub, Ibadan</div>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <div>
                <div className="detail-key">Expected Attendance</div>
                <div className="detail-val">80 – 120 Participants</div>
              </div>
            </div>

            <div className="hero-card-stats">
              <div className="hero-stat"><div className="n">3</div><div className="l">Panels</div></div>
              <div className="hero-stat"><div className="n">10+</div><div className="l">Speakers</div></div>
              <div className="hero-stat"><div className="n">5hrs</div><div className="l">Programme</div></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
