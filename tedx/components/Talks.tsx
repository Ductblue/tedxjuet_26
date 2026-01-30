'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const talks = [
  { id: 1, title: 'Save Me', speaker: 'KĒVENS', videoId: 'J00PFV5CaIU', large: true },
  { id: 2, title: "The cost of ignoring women's health", speaker: 'SHEENA FRANKLIN', videoId: '1VFgWh0vukY' },
  { id: 3, title: 'AI, the Brain, and Our Future', speaker: 'DR. BEREN MILLIDGE', videoId: 'uCcoz3Os6to' },
  { id: 4, title: 'How functional precision medicine could be the future of cancer care', speaker: 'DR. DIANA AZZAM', videoId: 'CqLCgNxUhVc' },
  { id: 5, title: 'Breaking Down Barriers for Children with ADHD', speaker: 'DR. KATIE HART', videoId: 'G5zQULkVuiQ' },
]

export default function Talks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section" id="talks">
      <div className="container">
        <div className="header">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Talks
          </motion.h2>
          <motion.a
            href="#talks"
            className="seeAll"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            whileHover={{ x: 5 }}
          >
            SEE ALL TALKS <span>→</span>
          </motion.a>
        </div>

        <div className="grid">
          {talks.map((talk, index) => (
            <motion.div
              key={talk.id}
              className={talk.large ? "card cardLarge" : "card"}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="imageContainer">
                <img 
                  src={`https://img.youtube.com/vi/${talk.videoId}/maxresdefault.jpg`} 
                  alt={talk.title}
                  className="image"
                />
                <div className="stripes"></div>
                <div className="overlay">
                  <h3>{talk.title}</h3>
                  <p>{talk.speaker}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
