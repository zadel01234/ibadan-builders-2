import { motion } from 'framer-motion'
import { useInView } from './useInView'

const tiers = [
  {
    tierLabel: 'Title Sponsor',
    sponsors: [
      {
        name: 'Talenxify',
        desc: 'Amplifying community-led products, ensuring ecosystem sustainability while building a robust pipeline for future talent-hiring solutions.',
        badge: 'Title Sponsor',
        primary: true,
        icon: (
          <svg viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        ),
      },
    ],
  },
  {
    tierLabel: 'Ticketing Partner',
    sponsors: [
      {
        name: 'EventPulse',
        desc: 'Official event ticketing and registration platform. Venue details shared upon registration.',
        badge: 'Ticketing Partner',
        primary: false,
        icon: (
          <svg viewBox="0 0 24 24">
            <path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h6"/>
            <path d="M15 3h6v6"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        ),
      },
    ],
  },
  {
    tierLabel: 'Event Partner',
    sponsors: [
      {
        name: 'Skygrid',
        desc: 'Supporting the vision of a connected Ibadan tech ecosystem.',
        badge: 'Partner',
        primary: false,
        icon: (
          <svg viewBox="0 0 24 24">
            <rect x="2" y="3" width="20" height="14" rx="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        ),
      },
    ],
  },
]

export default function Sponsors() {
  const [ref, inView] = useInView(0.15)

  return (
    <section className="section sponsors-section" id="sponsors" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow"><span className="line" />Partners &amp; Sponsors</div>
          <h2 className="section-title">Backed by the Best</h2>
          <p className="section-sub">
            These organisations believe in the Ibadan ecosystem and are investing in its people, stories, and future.
          </p>
        </motion.div>

        <div className="sponsors-tiers">
          {tiers.map((tier, ti) => (
            <motion.div
              key={tier.tierLabel}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ti * 0.15, duration: 0.55 }}
            >
              <div className="tier-heading">{tier.tierLabel}</div>
              <div className="sponsor-cards-row">
                {tier.sponsors.map((s, si) => (
                  <motion.div
                    key={s.name}
                    className={`sponsor-card ${s.primary ? 'primary' : ''}`}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: ti * 0.15 + si * 0.08, duration: 0.45 }}
                  >
                    <div className="sponsor-icon-box">{s.icon}</div>
                    <div>
                      <div className="sponsor-name">{s.name}</div>
                      <div className="sponsor-desc">{s.desc}</div>
                      <div className="sponsor-badge">{s.badge}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Become a sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.5 }}
          style={{
            marginTop: '52px',
            padding: '32px',
            border: '1.5px dashed var(--border-mid)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            background: 'var(--cream)',
          }}
        >
          <div>
            <div style={{ fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--red)', marginBottom: '6px' }}>
              Sponsorship Opportunities
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--black)', marginBottom: '4px' }}>
              Interested in Sponsoring?
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--gray)', maxWidth: '440px', lineHeight: 1.65 }}>
              Partner with the Ibadan Builders Meetup to connect with 80–120 of Ibadan's most active technical minds and creators.
            </div>
          </div>
          <a href="mailto:info@oyotalenttribe.com" className="btn-red" style={{ whiteSpace: 'nowrap' }}>
            <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
