'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Sponsors.module.css'

export default function Sponsors() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className={styles.section} id="sponsors">
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Sponsors
          </motion.h2>
          <motion.a
            href="#sponsors"
            className={styles.seeAll}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            whileHover={{ x: 5 }}
          >
            SEE ALL SPONSORS <span>→</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
