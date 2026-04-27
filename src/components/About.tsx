import { motion } from 'framer-motion'
import { useInView } from './useInView'

const features = [
  {
    title: 'Storytelling',
    desc: 'Turn your technical journey into a clear, compelling professional narrative.',
    icon: (<svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>),
  },
  {
    title: 'Global Reach',
    desc: 'Position Ibadan-built excellence for bigger international opportunities.',
    icon: (<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>),
  },
  {
    title: 'Networking',
    desc: 'Connect with serious builders, creators, and ecosystem operators.',
    icon: (<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>),
  },
  {
    title: 'Ecosystem Growth',
    desc: 'Build a sustainable pipeline for talent and product development in Ibadan.',
    icon: (<svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>),
  },
]

export default function About() {
  const [ref, inView] = useInView(0.15)

  return (
    <section className="section about" id="about" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '56px' }}
        >
          <div className="section-eyebrow"><span className="dot" />About the Event</div>
          <h2 className="section-title">Empowering Builders to<br />Become Impactful Storytellers</h2>
          <p className="section-sub">
            We help builders and technical talents transform their work into compelling stories that open doors, from global opportunities to meaningful connections and high-level networks.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="about-text">
              <p>
                By documenting their work and track record, participants position themselves for global visibility. This meetup goes beyond code — it focuses on building credibility and communicating in a way that attracts real opportunities.              </p>
              <p>
                With support from Talenxify, the event amplifies community-led products, ensures ecosystem sustainability, and builds a robust pipeline for future talent-hiring solutions across Ibadan and beyond.
              </p>
            </div>
          </motion.div>

          <div className="about-features">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="about-feature"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.09, duration: 0.5 }}
              >
                <div className="feat-icon">{f.icon}</div>
                <div className="feat-title">{f.title}</div>
                <div className="feat-desc">{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
