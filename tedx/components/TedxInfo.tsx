'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function TedxInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section" id="about">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          What is TEDx?
        </motion.h2>

        <motion.a
          href="https://www.ted.com/about/programs-initiatives/tedx-program"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ x: 5 }}
        >
          TEDx PROGRAM <span className="arrow">→</span>
        </motion.a>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          In the spirit of ideas worth spreading, TED has created a program called TEDx.
          TEDx is a program of local, self-organized events that bring people together to
          share a TED-like experience. Our event is called <strong>TEDxMiami</strong>, where x =
          independently organized TED event. At our TEDxMiami event, TED Talks video and live
          speakers will combine to spark deep discussion and connection in a small group. The TED
          Conference provides general guidance for the TEDx program, but individual TEDx
          events, including ours, are self-organized.
        </motion.p>
      </div>
    </section>
  )
}
