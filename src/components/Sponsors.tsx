// import { motion } from 'framer-motion'
// import { useInView } from './useInView'

// const tiers = [
//   {
//     tierLabel: 'Title Sponsor',
//     sponsors: [
//       {
//         name: 'Talenxify',
//         desc: 'Amplifying community-led products, ensuring ecosystem sustainability while building a robust pipeline for future talent-hiring solutions.',
//         badge: 'Title Sponsor',
//         primary: true,
//         icon: (
//           <svg viewBox="0 0 24 24">
//             <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
//           </svg>
//         ),
//       },
//     ],
//   },
//   {
//     tierLabel: 'Ticketing Partner',
//     sponsors: [
//       {
//         name: 'EventPulse',
//         desc: 'Official event ticketing and registration platform. Venue details shared upon registration.',
//         badge: 'Ticketing Partner',
//         primary: false,
//         icon: (
//           <svg viewBox="0 0 24 24">
//             <path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h6"/>
//             <path d="M15 3h6v6"/><line x1="10" y1="14" x2="21" y2="3"/>
//           </svg>
//         ),
//       },
//     ],
//   },
//   {
//     tierLabel: 'Event Partner',
//     sponsors: [
//       {
//         name: 'Skygrid',
//         desc: 'Supporting the vision of a connected Ibadan tech ecosystem.',
//         badge: 'Partner',
//         primary: false,
//         icon: (
//           <svg viewBox="0 0 24 24">
//             <rect x="2" y="3" width="20" height="14" rx="2"/>
//             <line x1="8" y1="21" x2="16" y2="21"/>
//             <line x1="12" y1="17" x2="12" y2="21"/>
//           </svg>
//         ),
//       },
//     ],
//   },
// ]

// export default function Sponsors() {
//   const [ref, inView] = useInView(0.15)

//   return (
//     <section className="section sponsors-section" id="sponsors" ref={ref as React.RefObject<HTMLElement>}>
//       <div className="container">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="section-eyebrow"><span className="line" />Partners &amp; Sponsors</div>
//           <h2 className="section-title">Backed by the Best</h2>
//           <p className="section-sub">
//             These organisations believe in the Ibadan ecosystem and are investing in its people, stories, and future.
//           </p>
//         </motion.div>

//         <div className="sponsors-tiers">
//           {tiers.map((tier, ti) => (
//             <motion.div
//               key={tier.tierLabel}
//               initial={{ opacity: 0, y: 24 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: ti * 0.15, duration: 0.55 }}
//             >
//               <div className="tier-heading">{tier.tierLabel}</div>
//               <div className="sponsor-cards-row">
//                 {tier.sponsors.map((s, si) => (
//                   <motion.div
//                     key={s.name}
//                     className={`sponsor-card ${s.primary ? 'primary' : ''}`}
//                     initial={{ opacity: 0, scale: 0.97 }}
//                     animate={inView ? { opacity: 1, scale: 1 } : {}}
//                     transition={{ delay: ti * 0.15 + si * 0.08, duration: 0.45 }}
//                   >
//                     <div className="sponsor-icon-box">{s.icon}</div>
//                     <div>
//                       <div className="sponsor-name">{s.name}</div>
//                       <div className="sponsor-desc">{s.desc}</div>
//                       <div className="sponsor-badge">{s.badge}</div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Become a sponsor CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.55, duration: 0.5 }}
//           style={{
//             marginTop: '52px',
//             padding: '32px',
//             border: '1.5px dashed var(--border-mid)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             flexWrap: 'wrap',
//             gap: '20px',
//             background: 'var(--cream)',
//           }}
//         >
//           <div>
//             <div style={{ fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--red)', marginBottom: '6px' }}>
//               Sponsorship Opportunities
//             </div>
//             <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--black)', marginBottom: '4px' }}>
//               Interested in Sponsoring?
//             </div>
//             <div style={{ fontSize: '0.82rem', color: 'var(--gray)', maxWidth: '440px', lineHeight: 1.65 }}>
//               Partner with the Ibadan Builders Meetup to connect with 80–120 of Ibadan's most active technical minds and creators.
//             </div>
//           </div>
//           <a href="mailto:info@oyotalenttribe.com" className="btn-red" style={{ whiteSpace: 'nowrap' }}>
//             <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" fill="none" strokeWidth="2">
//               <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
//               <polyline points="22,6 12,13 2,6"/>
//             </svg>
//             Get in Touch
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }



// import { motion } from 'framer-motion'
// import { useInView } from './useInView'
// import { useRef } from 'react'

// const logos = [
//   { name: 'Talenxify', src: '/public/talenxify-logo.png' },
//   { name: 'EventPulse', src: '/public/Oyo Talent Tribe logo.png' },
//   { name: 'Skygrid', src: '/logos/skygrid.png' },
//   // add more logos here
// ]

// const tiers = [
//   {
//     tierLabel: 'Title Sponsor',
//     sponsors: [
//       {
//         name: 'Talenxify',
//         desc: 'Amplifying community-led products, ensuring ecosystem sustainability while building a robust pipeline for future talent-hiring solutions.',
//         badge: 'Title Sponsor',
//         primary: true,
//         icon: (
//           <svg viewBox="0 0 24 24">
//             <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//           </svg>
//         ),
//       },
//     ],
//   },
//   {
//     tierLabel: 'Ticketing Partner',
//     sponsors: [
//       {
//         name: 'EventPulse',
//         desc: 'Official event ticketing and registration platform. Venue details shared upon registration.',
//         badge: 'Ticketing Partner',
//         primary: false,
//         icon: (
//           <svg viewBox="0 0 24 24">
//             <path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h6" />
//             <path d="M15 3h6v6" /><line x1="10" y1="14" x2="21" y2="3" />
//           </svg>
//         ),
//       },
//     ],
//   },
//   {
//     tierLabel: 'Event Partner',
//     sponsors: [
//       {
//         name: 'Skygrid',
//         desc: 'Supporting the vision of a connected Ibadan tech ecosystem.',
//         badge: 'Partner',
//         primary: false,
//         icon: (
//           <svg viewBox="0 0 24 24">
//             <rect x="2" y="3" width="20" height="14" rx="2" />
//             <line x1="8" y1="21" x2="16" y2="21" />
//             <line x1="12" y1="17" x2="12" y2="21" />
//           </svg>
//         ),
//       },
//     ],
//   },
// ]

// export default function Sponsors() {
//   const [ref, inView] = useInView(0.15)

//   return (
//     <section className="section sponsors-section" id="sponsors" ref={ref as React.RefObject<HTMLElement>}>
//       <div className="container">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="section-eyebrow"><span className="line" />Partners &amp; Sponsors</div>
//           <h2 className="section-title">Backed by the Best</h2>
//           <p className="section-sub">
//             These organisations believe in the Ibadan ecosystem and are investing in its people, stories, and future.
//           </p>
//         </motion.div>

//         <div className="sponsors-tiers">
//           {tiers.map((tier, ti) => (
//             <motion.div
//               key={tier.tierLabel}
//               initial={{ opacity: 0, y: 24 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: ti * 0.15, duration: 0.55 }}
//             >
//               <div className="tier-heading">{tier.tierLabel}</div>
//               <div className="sponsor-cards-row">
//                 {tier.sponsors.map((s, si) => (
//                   <motion.div
//                     key={s.name}
//                     className={`sponsor-card ${s.primary ? 'primary' : ''}`}
//                     initial={{ opacity: 0, scale: 0.97 }}
//                     animate={inView ? { opacity: 1, scale: 1 } : {}}
//                     transition={{ delay: ti * 0.15 + si * 0.08, duration: 0.45 }}
//                   >
//                     <div className="sponsor-icon-box">{s.icon}</div>
//                     <div>
//                       <div className="sponsor-name">{s.name}</div>
//                       <div className="sponsor-desc">{s.desc}</div>
//                       <div className="sponsor-badge">{s.badge}</div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Become a sponsor CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.55, duration: 0.5 }}
//           style={{
//             marginTop: '52px',
//             padding: '32px',
//             border: '1.5px dashed var(--border-mid)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             flexWrap: 'wrap',
//             gap: '20px',
//             background: 'var(--cream)',
//           }}
//         >
//           <div>
//             <div style={{ fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--red)', marginBottom: '6px' }}>
//               Sponsorship Opportunities
//             </div>
//             <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--black)', marginBottom: '4px' }}>
//               Interested in Sponsoring?
//             </div>
//             <div style={{ fontSize: '0.82rem', color: 'var(--gray)', maxWidth: '440px', lineHeight: 1.65 }}>
//               Would you like to a Partner/Sponsor for the Ibadan Builders Meetup
//             </div>
//           </div>

//           {/* <a href="https://wa.me/2349079021044?text=Hi%2C%20I%27m%20interested%20in%20partnering%2Fsponsoring%20the%20Ibadan%20Builders%20Tech%20Meetup!"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn-red"
//             style={{ whiteSpace: 'nowrap' }}
//           >
//             <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
//               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
//               <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.985l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.002-1.366l-.359-.214-3.722.976.994-3.624-.234-.373A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
//             </svg>
//             WhatsApp Us
//           </a> */}
//           <a href="https://wa.me/2349079021044?text=Hi%2C%20I%27m%20interested%20in%20partnering%2Fsponsoring%20the%20Ibadan%20Builders%20Tech%20Meetup!"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="nav-cta"
//           style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
// >
//           <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
//             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
//             <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.985l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.002-1.366l-.359-.214-3.722.976.994-3.624-.234-.373A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
//           </svg>
//           WhatsApp Us →
//           </a>
//         </motion.div>
        
//     </div>
//     </section >
//   )
// }



import { motion } from 'framer-motion'
import { useInView } from './useInView'

const logos = [
  { name: 'Talenxify', src: '/talenxify-logo.png' },
  { name: 'EventPulse', src: '/Oyo Talent Tribe logo.png' },
  { name: 'Oyo', src: '/oyo logo.png' },
  { name: 'Creative', src: '/CREATIVITE.png' },
  { name: 'Eventpulse', src: '/eventpulse.png' },
  { name: 'Techeconomy', src: '/techeconomy.png' },
]

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
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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
            <path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h6" />
            <path d="M15 3h6v6" /><line x1="10" y1="14" x2="21" y2="3" />
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

          {/* Event Partners — marquee */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.55 }}
          >
            <div className="tier-heading">Event Partners</div>
            <div className="marquee-wrapper">
              <div className="marquee-track" style={{
                // marginTop: '20px',
                padding: '52px',
                // borderTop: '1.5px solid var(--border-mid)',
                borderBottom: '1.5px solid var(--border-mid)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '20px',
                background: 'var(--cream)',
              }}>
                {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
                  <div className="marquee-item" key={i}>
                    <img src={logo.src} alt={logo.name} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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
              Would you like to Partner/Sponsor the Ibadan Builders Meetup?
            </div>
          </div>


          <a href="https://wa.me/2349079021044?text=Hi%2C%20I%27m%20interested%20in%20partnering%2Fsponsoring%20the%20Ibadan%20Builders%20Tech%20Meetup!"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
          style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
          >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.985l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.002-1.366l-.359-.214-3.722.976.994-3.624-.234-.373A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
          </svg>
          WhatsApp Us →
        </a>
      </motion.div>
    </div>
    </section >
  )
}