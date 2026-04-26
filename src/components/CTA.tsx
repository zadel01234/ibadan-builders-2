import { motion } from 'framer-motion'
import { useInView } from './useInView'

const highlights = [
  { text: '3 curated panel sessions' },
  { text: 'Keynote address by a featured speaker' },
  { text: '80 – 120 builders, creators & talent' },
  { text: 'NOTZERO Innovation Hub, Ibadan' },
  { text: 'Venue details shared upon registration' },
]

export default function CTA() {
  const [ref, inView] = useInView(0.2)

  return (
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
            <div className="cta-eyebrow">Saturday, 23rd May 2027 · 12:00 PM WAT</div>
            <h2 className="cta-title">Secure Your Spot at the Meetup</h2>
            <p className="cta-desc">
              Registration is handled through EventPulse. Venue details will be shared upon successful registration. Spots are limited — don't wait.
            </p>
            <div style={{ marginTop: '32px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="https://eventpulse.ng/checkout/ibadan-builders-talents-creators-meetup?selection=1:1" target="_blank" className="btn-primary">
                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" fill="none" strokeWidth="2.5">
                  <path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h6"/>
                  <path d="M15 3h6v6"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Get Your Ticket
              </a>
            </div>
          </div>

          <div className="cta-card">
            <div className="cta-card-title">What to Expect</div>
            <div className="cta-highlights">
              {highlights.map(h => (
                <div key={h.text} className="cta-hl">
                  <div className="cta-hl-icon">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  {h.text}
                </div>
              ))}
            </div>
            <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--blue-mid)', flexShrink: 0, animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                Ticketing: EventPulse · Partner: Skygrid
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
