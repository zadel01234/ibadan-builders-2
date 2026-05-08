// import { motion } from 'framer-motion'
// import { useInView } from './useInView'

// export default function VideoHighlight() {
//     const [ref, inView] = useInView(0.15)

//     return (
//         <section
//             className="section video-highlight"
//             id="video"
//             ref={ref as React.RefObject<HTMLElement>}
//         >
//             <div className="container">
//                 <motion.div
//                     className="video-inner"
//                     initial={{ opacity: 0, y: 28 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.65 }}
//                 >
//                     {/* Text Side */}
//                     <div className="video-text">
//                         <div className="section-eyebrow">
//                             <span className="dot" />
//                             Event Highlight
//                         </div>
//                         <h2 className="section-title">
//                             See What<br />
//                             <em>We're Building</em>
//                         </h2>
//                         <p className="section-sub">
//                             A sneak peek into the energy, community, and vision behind the
//                             Ibadan Builders, Talent &amp; Creators Meetup. Watch and see what
//                             you'll be part of on May 23rd.
//                         </p>
//                         <a
//                             href="https://eventpulse.ng/checkout/ibadan-builders-talents-creators-meetup?selection=1:1"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="btn-primary"
//                             style={{ marginTop: '28px', display: 'inline-flex' }}
//                         >
//                             Get Your Ticket
//                             <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" fill="none" strokeWidth="2.5">
//                                 <path d="M5 12h14M12 5l7 7-7 7" />
//                             </svg>
//                         </a>
//                     </div>

//                     {/* Video Side */}
//                     <motion.div
//                         className="video-frame-wrap"
//                         initial={{ opacity: 0, x: 32 }}
//                         animate={inView ? { opacity: 1, x: 0 } : {}}
//                         transition={{ duration: 0.7, delay: 0.15 }}
//                     >
//                         <div className="video-glow" />
//                         <div className="video-frame">
//                             <iframe
//                                 src="https://www.youtube.com/embed/l3PhiL3V_2k"
//                                 title="Ibadan Builders Meetup Highlight"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                                 allowFullScreen
//                             />
//                         </div>
//                     </motion.div>
//                 </motion.div>
//             </div>
//         </section>
//     )
// }



// import { motion } from 'framer-motion'
// import { useInView } from './useInView'

// export default function VideoHighlight() {
//     const [ref, inView] = useInView(0.15)

//     return (
//         <section
//             className="section video-highlight"
//             id="video"
//             ref={ref as React.RefObject<HTMLElement>}
//         >
//             <div className="container">
//                 <motion.div
//                     className="video-inner"
//                     initial={{ opacity: 0, y: 28 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.65 }}
//                 >
//                     {/* Text Side */}
//                     <div className="video-text">
//                         <div className="section-eyebrow">
//                             <span className="dot" />
//                             Event Highlight
//                         </div>
//                         <h2 className="section-title">
//                             See What<br />
//                             <em>We're Building</em>
//                         </h2>
//                         <p className="section-sub">
//                             A sneak peek into the energy, community, and vision behind the
//                             Ibadan Builders, Talent &amp; Creators Meetup. Watch and see what
//                             you'll be part of on May 23rd.
//                         </p>
//                         <a
//                             href="https://eventpulse.ng/checkout/ibadan-builders-talents-creators-meetup?selection=1:1"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="btn-primary"
//                             style={{ marginTop: '28px', display: 'inline-flex' }}
//                         >
//                             Get Your Ticket
//                             <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" fill="none" strokeWidth="2.5">
//                                 <path d="M5 12h14M12 5l7 7-7 7" />
//                             </svg>
//                         </a>
//                     </div>

//                     {/* Video Side */}
//                     <motion.div
//                         className="video-frame-wrap"
//                         initial={{ opacity: 0, x: 32 }}
//                         animate={inView ? { opacity: 1, x: 0 } : {}}
//                         transition={{ duration: 0.7, delay: 0.15 }}
//                     >
//                         <div className="video-glow" />
//                         <div className="video-frame">
//                             <iframe
//                                 key={inView ? 'playing' : 'paused'}
//                                 src={`https://www.youtube.com/embed/l3PhiL3V_2k?autoplay=${inView ? 1 : 0}&mute=1&loop=1&playlist=l3PhiL3V_2k&playsinline=1`}
//                                 title="Ibadan Builders Meetup Highlight"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                                 allowFullScreen
//                             />
//                         </div>
//                     </motion.div>
//                 </motion.div>
//             </div>
//         </section>
//     )
// }




// import { motion } from 'framer-motion'
// import { useEffect, useRef, useState } from 'react'

// export default function VideoHighlight() {
//     const sectionRef = useRef<HTMLElement>(null)
//     const iframeRef = useRef<HTMLIFrameElement>(null)
//     const [inView, setInView] = useState(false)

//     // Watch section visibility — fires on both enter AND leave
//     useEffect(() => {
//         const el = sectionRef.current
//         if (!el) return
//         const observer = new IntersectionObserver(
//             ([entry]) => setInView(entry.isIntersecting),
//             { threshold: 0.3 }
//         )
//         observer.observe(el)
//         return () => observer.disconnect()
//     }, [])

//     // Play / pause via YouTube IFrame API postMessage
//     useEffect(() => {
//         const iframe = iframeRef.current
//         if (!iframe) return
//         const command = inView ? 'playVideo' : 'pauseVideo'
//         iframe.contentWindow?.postMessage(
//             JSON.stringify({ event: 'command', func: command, args: [] }),
//             '*'
//         )
//     }, [inView])

//     return (
//         <section
//             className="section video-highlight"
//             id="video"
//             ref={sectionRef}
//         >
//             <div className="container">
//                 <motion.div
//                     className="video-inner"
//                     initial={{ opacity: 0, y: 28 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.65 }}
//                 >
//                     {/* Text Side */}
//                     <div className="video-text">
//                         <div className="section-eyebrow">
//                             <span className="dot" />
//                             Event Highlight
//                         </div>
//                         <h2 className="section-title">
//                             See What<br />
//                             <em>We're Building</em>
//                         </h2>
//                         <p className="section-sub">
//                             A sneak peek into the energy, community, and vision behind the
//                             Ibadan Builders, Talent &amp; Creators Meetup. Watch and see what
//                             you'll be part of on May 23rd.
//                         </p>
//                         <a
//                             href="https://eventpulse.ng/checkout/ibadan-builders-talents-creators-meetup?selection=1:1"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="btn-primary"
//                             style={{ marginTop: '28px', display: 'inline-flex' }}
//                         >
//                             Get Your Ticket
//                             <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" fill="none" strokeWidth="2.5">
//                                 <path d="M5 12h14M12 5l7 7-7 7" />
//                             </svg>
//                         </a>
//                     </div>

//                     {/* Video Side */}
//                     <motion.div
//                         className="video-frame-wrap"
//                         initial={{ opacity: 0, x: 32 }}
//                         animate={inView ? { opacity: 1, x: 0 } : {}}
//                         transition={{ duration: 0.7, delay: 0.15 }}
//                     >
//                         <div className="video-glow" />
//                         <div className="video-frame">
//                             {/* enablejsapi=1 is required for postMessage play/pause control */}
//                             <iframe
//                                 ref={iframeRef}
//                                 src="https://www.youtube.com/embed/l3PhiL3V_2k?enablejsapi=1&autoplay=0&mute=0&loop=1&playlist=l3PhiL3V_2k&playsinline=1"
//                                 title="Ibadan Builders Meetup Highlight"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                                 allowFullScreen
//                             />
//                         </div>
//                     </motion.div>
//                 </motion.div>
//             </div>
//         </section>
//     )
// }



import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
}

const modalVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' as any } },
    exit: { opacity: 0, y: 16, scale: 0.97, transition: { duration: 0.2 } },
}

export default function VideoHighlight() {
    const sectionRef = useRef<HTMLElement>(null)
    const iframeRef = useRef<HTMLIFrameElement>(null)
    const [inView, setInView] = useState(false)
    const [showModal, setShowModal] = useState(false)

    // Watch section visibility — fires on both enter AND leave
    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.3 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    // Play / pause via YouTube IFrame API postMessage
    useEffect(() => {
        const iframe = iframeRef.current
        if (!iframe) return
        const command = inView ? 'playVideo' : 'pauseVideo'
        iframe.contentWindow?.postMessage(
            JSON.stringify({ event: 'command', func: command, args: [] }),
            '*'
        )
    }, [inView])

    useEffect(() => {
        document.body.style.overflow = showModal ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [showModal])

    return (
        <>
            <section
                className="section video-highlight"
                id="video"
                ref={sectionRef}
            >
                <div className="container">
                    <motion.div
                        className="video-inner"
                        initial={{ opacity: 0, y: 28 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.65 }}
                    >
                        {/* Text Side */}
                        <div className="video-text">
                            <div className="section-eyebrow">
                                <span className="dot" />
                                Event Highlight
                            </div>
                            <h2 className="section-title">
                                See What<br />
                                <em>We're Building</em>
                            </h2>
                            <p className="section-sub">
                                A sneak peek into the energy, community, and vision behind the
                                Ibadan Builders, Talent &amp; Creators Meetup. Watch and see what
                                you'll be part of on May 23rd.
                            </p>
                            <button
                                onClick={() => setShowModal(true)}
                                className="btn-primary"
                                style={{ marginTop: '28px' }}
                            >
                                Get Your Ticket
                                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" fill="none" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Video Side */}
                        <motion.div
                            className="video-frame-wrap"
                            initial={{ opacity: 0, x: 32 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.15 }}
                        >
                            <div className="video-glow" />
                            <div className="video-frame">
                                {/* enablejsapi=1 is required for postMessage play/pause control */}
                                <iframe
                                    ref={iframeRef}
                                    src="https://www.youtube.com/embed/l3PhiL3V_2k?enablejsapi=1&autoplay=0&mute=0&loop=1&playlist=l3PhiL3V_2k&playsinline=1"
                                    title="Ibadan Builders Meetup Highlight"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Payment Modal */}
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
        </>
    )
}