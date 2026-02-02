'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Team.module.css'

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className={styles.section} id="team">
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Team
          </motion.h2>
          <motion.a
            href="#team"
            className={styles.seeAll}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            whileHover={{ x: 5 }}
          >
            SEE ALL TEAM <span>→</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
