'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Events() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="events" style={{
      background: '#000000',
      padding: '100px 0'
    }}>
      <div className="container">
        <div className="header">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Events
          </motion.h2>
          <motion.a
            href="#events"
            className="seeAll"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            whileHover={{ x: 5 }}
          >
            SEE ALL EVENTS <span>→</span>
          </motion.a>
        </div>

        <motion.div
          className="eventCard"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="eventContent">
            <div className="eventText">
              <motion.div 
                className="date"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                MARCH 15, 2026
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Beyond Boundaries: Ideas That Inspire
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Join us for an unforgettable evening of innovation, inspiration, and ideas worth spreading. 
                Experience groundbreaking talks from visionary speakers who are shaping the future.
              </motion.p>
              <motion.div 
                className="eventMeta"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="metaItem">
                  <span className="metaIcon">📍</span>
                  <span>JUET Campus Auditorium</span>
                </div>
                <div className="metaItem">
                  <span className="metaIcon">⏰</span>
                  <span>6:00 PM - 10:00 PM</span>
                </div>
              </motion.div>
              <motion.a
                href="#tickets"
                className="btn"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Tickets →
              </motion.a>
            </div>
            <motion.div 
              className="eventImage"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="imagePlaceholder">
                <div className="circleDecor circle1"></div>
                <div className="circleDecor circle2"></div>
                <div className="circleDecor circle3"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
