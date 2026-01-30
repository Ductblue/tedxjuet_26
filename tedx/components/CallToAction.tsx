'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const actions = [
  { title: 'Know someone for our stage?', link: 'NOMINATE A SPEAKER', href: '#speakers' },
  { title: 'Want to get involved with TEDxJUET?', link: 'BECOME A VOLUNTEER', href: '#volunteer' },
  { title: 'Interested in being a sponsor?', link: 'PARTNER WITH US', href: '#sponsors' },
]

export default function CallToAction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section">
      <div className="curve"></div>
      <div className="container">
        <div className="grid">
          {actions.map((action, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <h3>{action.title}</h3>
              <motion.a
                href={action.href}
                whileHover={{ x: 5 }}
              >
                {action.link} <span>→</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
