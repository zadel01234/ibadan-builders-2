import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function Keynote() {
  const [ref, inView] = useInView(0.2)

  return (
    <section className="keynote-strip" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <motion.div
          className="keynote-grid"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <div className="keynote-label-vert">Keynote Address</div>

          <div className="keynote-center">
            <div className="keynote-kicker">Opening Keynote Speaker</div>
            <div className="keynote-speaker-name">Coming Soon</div>
            <div className="keynote-speaker-role">Announcement from May 2nd</div>
          </div>

          <div className="keynote-topic-box">
            <div className="keynote-topic-tag">
              <svg viewBox="0 0 24 24" width="11" height="11" stroke="currentColor" fill="none" strokeWidth="2.5" style={{ display: 'inline', verticalAlign: 'middle' }}>
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
              Keynote Topic
            </div>
            <div className="keynote-topic-text">
              "The Tech Ecosystem: The Act of Building for Growth and Impact"
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
