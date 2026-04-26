import { motion } from 'framer-motion'
import { useInView } from './useInView'

const panels = [
  {
    tag: 'Panel 01',
    tagIcon: (
      <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
    ),
    title: 'Beyond the Code: Building Products That People Actually Use',
    theme: 'Industry Leaders & Builders',
    focus: 'Why tech alone is not enough and how collaboration drives growth in Ibadan.',
    speakers: [
      { name: 'Olugbenga Ogunbowale', role: 'CEO, Grant Master' },
      { name: 'Opeyemi', role: 'Founder, 1App' },
      { name: 'Sam Aiyesoro', role: 'WiSeki App' },
      { name: 'Equilibrium Zone', role: '' },
    ],
  },
  {
    tag: 'Panel 02',
    tagIcon: (
      <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
    ),
    title: 'The Content & Distribution Panel — The Art of Telling the Ecosystem and Talent Story',
    theme: 'Creators & Storytellers (The Voice)',
    focus: 'Helping the ecosystem get noticed and helping talent monetize their influence and growth.',
    speakers: [
      { name: 'Ollyumeh', role: 'Creator & Storyteller' },
      { name: 'Adebayo Ibrahim', role: 'Password TV' },
      { name: 'Julia Anthony', role: 'Creator & Storyteller' },
    ],
  },
  {
    tag: 'Panel 03',
    tagIcon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
    ),
    title: 'The Global Ibadan: Scaling Local Talent to International Markets',
    theme: 'Ecosystem Talents',
    focus: 'Helping talent and builders navigate the global market while living in Ibadan.',
    speakers: [
      { name: 'Miracle Olubode', role: 'Ecosystem Talent' },
      { name: 'Emmanuel Aiyenigba', role: '3MTT Ibadan' },
      { name: 'Tope James Moses', role: 'Ecosystem Talent' },
      { name: 'Ibiniyi Obikoya', role: 'Ecosystem Talent' },
    ],
  },
]

export default function Sessions() {
  const [ref, inView] = useInView(0.1)

  return (
    <section className="section sessions" id="sessions" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow"><span className="line" />Programme Sessions</div>
          <h2 className="section-title">Three Conversations That Matter</h2>
          <p className="section-sub">
            Each panel is designed around a specific challenge facing builders, creators, and talent in the Ibadan ecosystem — and how to overcome it.
          </p>
        </motion.div>

        <div className="panels-stack">
          {panels.map((panel, i) => (
            <motion.div
              key={panel.tag}
              className="panel-block"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.55 }}
            >
              <div className="panel-top-bar" />
              <div className="panel-inner">
                {/* Top meta row */}
                <div className="panel-meta">
                  <span className="panel-tag-pill">
                    {panel.tagIcon}
                    {panel.tag}
                  </span>
                  <div className="panel-title-wrap">
                    <div style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gray-light)', marginBottom: '6px' }}>
                      {panel.theme}
                    </div>
                    <div className="panel-title">{panel.title}</div>
                  </div>
                </div>

                {/* Theme / focus strip */}
                <div className="panel-divider" />
                <div className="panel-theme-strip">
                  <svg viewBox="0 0 24 24" width="13" height="13" stroke="var(--red)" fill="none" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <span className="panel-theme-label">Focus</span>
                  <span className="panel-theme-text">{panel.focus}</span>
                </div>

                {/* Speakers */}
                <div style={{ marginTop: '14px' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gray-light)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" fill="none" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
                    </svg>
                    Panelists
                  </div>
                  <div className="panel-speakers-row">
                    {panel.speakers.map(s => (
                      <div key={s.name} className="panel-speaker-chip">
                        <span className="chip-dot" />
                        <span>{s.name}</span>
                        {s.role && <span className="chip-role">{s.role}</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
