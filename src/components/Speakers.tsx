import { motion } from 'framer-motion'
import { useInView } from './useInView'

const speakerCategories = [
  { label: 'Industry Leaders & Builders', count: 4 },
  { label: 'Creators & Storytellers', count: 3 },
  { label: 'Ecosystem Talents', count: 4 },
]

export default function Speakers() {
  const [ref, inView] = useInView(0.15)

  return (
    <section className="section speakers-section" id="speakers" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow"><span className="dot" />Speakers & Panelists</div>
          <h2 className="section-title">Voices Shaping the Ecosystem</h2>
          <p className="section-sub">
            Meet the builders, creators, and ecosystem leaders who will be sharing their journeys and insights across all three sessions.
          </p>
        </motion.div>

        <motion.div
          className="speakers-coming-soon"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          <div className="cs-inner">
            <div className="cs-icon">
              <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div className="cs-label">Speaker Profiles</div>
            <h3 className="cs-title">Coming Soon</h3>
            <p className="cs-desc">
              Speaker profiles and full bios are being finalised. Official announcements will go live from May 2nd as part of the publicity launch.
            </p>

            <div className="cs-tags">
              {speakerCategories.map(cat => (
                <div key={cat.label} className="cs-tag-item">
                  <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                  {cat.label}
                  <span style={{ background: 'var(--blue)', color: '#fff', fontSize: '0.68rem', fontWeight: 800, padding: '2px 9px', borderRadius: '100px', marginLeft: '4px' }}>{cat.count}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
