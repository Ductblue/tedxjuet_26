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
          TEDxJUET: Untethered
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#e62b1e' }}>
            TEDJUET 2026: "Untethered"
          </h3>
          
          <p style={{ marginBottom: '1.5rem' }}>
            TEDJUET 2026, themed <strong>"Untethered,"</strong> explores what it means to move beyond emotional, social, and systemic constraints in a rapidly changing world. The event will spotlight ideas centered on reclaiming emotional depth in an age of performative connection, affirming identity as a fundamental human right, and reigniting passion and sincerity in a culture driven by speed, algorithms, and convenience.
          </p>
          
          <p style={{ marginBottom: '1.5rem' }}>
            Through lived experiences and thoughtful perspectives, the talks aim to challenge emotional numbness, question inherited narratives, and encourage courage, authenticity, and accountability.
          </p>
          
          <p>
            <strong>"Untethered"</strong> invites audiences to reflect deeply, reconnect with what makes us human, and imagine more grounded, intentional ways of living, relating, and creating.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
