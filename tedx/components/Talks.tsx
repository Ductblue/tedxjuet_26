'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Talks.module.css'

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
    <section ref={ref} className={styles.section} id="talks">
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Talks
          </motion.h2>
          <motion.a
            href="#talks"
            className={styles.seeAll}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            whileHover={{ x: 5 }}
          >
            SEE ALL TALKS <span>→</span>
          </motion.a>
        </div>

        <div className={styles.grid}>
          {talks.map((talk, index) => (
            <motion.a
              key={talk.id}
              href={`https://youtu.be/${talk.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} ${talk.large ? styles.cardLarge : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={`https://img.youtube.com/vi/${talk.videoId}/maxresdefault.jpg`} 
                  alt={talk.title}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <h3 className={styles.overlayTitle}>{talk.title}</h3>
                  <p className={styles.overlaySpeaker}>{talk.speaker}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
