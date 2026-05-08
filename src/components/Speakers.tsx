// import { motion } from 'framer-motion'
// import { useInView } from './useInView'

// const speakerCategories = [
//   { label: 'Industry Leaders & Builders', count: 4 },
//   { label: 'Creators & Storytellers', count: 3 },
//   { label: 'Ecosystem Talents', count: 4 },
// ]

// export default function Speakers() {
//   const [ref, inView] = useInView(0.15)

//   return (
//     <section className="section speakers-section" id="speakers" ref={ref as React.RefObject<HTMLElement>}>
//       <div className="container">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="section-eyebrow"><span className="dot" />Speakers & Panelists</div>
//           <h2 className="section-title">Voices Shaping the Ecosystem</h2>
//           <p className="section-sub">
//             Meet the builders, creators, and ecosystem leaders who will be sharing their journeys and insights across all three sessions.
//           </p>
//         </motion.div>

//         <motion.div
//           className="speakers-coming-soon"
//           initial={{ opacity: 0, y: 32 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.65, delay: 0.2 }}
//         >
//           <div className="cs-inner">
//             <div className="cs-icon">
//               <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
//             </div>
//             <div className="cs-label">Speaker Profiles</div>
//             <h3 className="cs-title">Coming Soon</h3>
//             <p className="cs-desc">
//               Speaker profiles and full bios are being finalised. Official announcements will go live from May 2nd.
//             </p>

//             <div className="cs-tags">
//               {speakerCategories.map(cat => (
//                 <div key={cat.label} className="cs-tag-item">
//                   <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
//                   {cat.label}
//                   <span style={{ background: 'var(--blue)', color: '#fff', fontSize: '0.68rem', fontWeight: 800, padding: '2px 9px', borderRadius: '100px', marginLeft: '4px' }}>{cat.count}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


import { motion } from 'framer-motion'
import { useInView } from './useInView'

const speakers = [
  {
    name: 'Olugbenga Ogunbowale',
    role: 'CEO, Grant Master',
    image: '/speaker1.jpg',
    tag: 'Industry Leader',
  },
  {
    name: 'Dr. Adeyemi C. Aderinto',
    role: 'Founder, SQI',
    image: '/speaker2.jpg',
    tag: 'Industry Leader',
  },
  {
    name: 'Tope James Moses',
    role: 'Co-Founder, ATC Africa',
    image: '/speaker3.jpg',
    tag: 'Ecosystem Builder',
  },
  {
    name: 'Olivia Umeh',
    role: 'Content Creator',
    image: '/speaker4.jpg',
    tag: 'Creator',
  },
  {
    name: 'Emmanuel Aiyenigba',
    role: 'Programs Manager, 3MTT Nigeria',
    image: '/speaker5.png',
    tag: 'Ecosystem Leader',
  },
  {
    name: 'Adebayo Ibrahim',
    role: 'Content Creator',
    image: '/speaker6.jpg',
    tag: 'Creator',
  },
  {
    name: 'Miracle Olubode',
    role: 'GDG Lead, Ogbomosho',
    image: '/speaker7.jpg',
    tag: 'Community Lead',
  },
  {
    name: 'Anna Erim',
    role: 'Product Designer, InterSwitch',
    image: '/speaker8.png',
    tag: 'Ecosystem Talent',
  },
  {
    name: 'Julia Anthony',
    role: 'Content Creator',
    image: '/speaker9.jpg',
    tag: 'Creator',
  },
  {
    name: 'Abidemi Tiamiyu',
    role: 'GDG Lead, Ibadan',
    image: '/speaker10.jpg',
    tag: 'Community Lead',
  },
  {
    name: 'Opeyemi Paul',
    role: 'Founder & CEO, 1App',
    image: '/speaker11.jpg',
    tag: 'Industry Leader',
  },
  {
    name: 'Ayo Adams',
    role: 'Content Creator',
    image: '/speaker12.jpeg',
    tag: 'Creator',
  },
]

const tagColors: Record<string, { bg: string; color: string }> = {
  'Industry Leader': { bg: '#EEF4FF', color: '#2563EB' },
  'Ecosystem Builder': { bg: '#F0FDF4', color: '#16A34A' },
  'Ecosystem Leader': { bg: '#FFF7ED', color: '#C2410C' },
  'Ecosystem Talent': { bg: '#FAF5FF', color: '#7C3AED' },
  'Community Lead': { bg: '#ECFEFF', color: '#0E7490' },
  'Creator': { bg: '#FFF1F2', color: '#BE123C' },
}

function SpeakerCard({ speaker, index }: { speaker: typeof speakers[0]; index: number }) {
  const [cardRef, cardInView] = useInView(0.1)
  const tag = tagColors[speaker.tag] || tagColors['Industry Leader']

  return (
    <motion.div
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className="speaker-card"
      initial={{ opacity: 0, y: 24 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
    >
      <div className="speaker-img-wrap">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="speaker-img"
          onError={(e) => {
            const target = e.currentTarget
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent) {
              const fallback = parent.querySelector('.speaker-img-fallback') as HTMLElement
              if (fallback) fallback.style.display = 'flex'
            }
          }}
        />
        <div className="speaker-img-fallback" style={{ display: 'none' }}>
          <svg viewBox="0 0 24 24" width="40" height="40" stroke="#93B9F9" fill="none" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>
      <div className="speaker-info">
        <span
          className="speaker-tag"
          style={{ background: tag.bg, color: tag.color }}
        >
          {speaker.tag}
        </span>
        <h3 className="speaker-name">{speaker.name}</h3>
        <p className="speaker-role">{speaker.role}</p>
      </div>
    </motion.div>
  )
}

export default function Speakers() {
  const [ref, inView] = useInView(0.1)

  return (
    <section className="section speakers-section" id="speakers" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '56px' }}
        >
          <div className="section-eyebrow"><span className="dot" />Speakers & Panelists</div>
          <h2 className="section-title">Voices Shaping the Ecosystem</h2>
          <p className="section-sub">
            Meet the builders, creators, and ecosystem leaders sharing their journeys and insights across all three sessions.
          </p>
        </motion.div>

        <div className="speakers-grid">
          {speakers.map((speaker, i) => (
            <SpeakerCard key={speaker.name} speaker={speaker} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
