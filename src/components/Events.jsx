'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './ui/AnimatedSection'
import { StaggerContainer, staggerItem } from './ui/AnimatedSection'
import { SkyArrow } from './ui/Arrows'
import styles from './Events.module.css'

const EVENT = {
  title: 'Beyond Boundaries: Ideas That Inspire',
  cta: 'Get Tickets',
}

export default function Events() {
  return (
    <AnimatedSection id="events" className={styles.events}>
      <div className="container">
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Events
        </motion.h2>
        <motion.a
          href="#events"
          className={`arrow-link ${styles.headerLink}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ x: 4 }}
        >
          SEE ALL EVENTS
          <SkyArrow />
        </motion.a>
        <StaggerContainer className={styles.cardWrap}>
          <motion.article className={styles.card} variants={staggerItem}>
            <motion.div
              className={styles.cardImage}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.cardPlaceholder} />
            </motion.div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{EVENT.title}</h3>
              <motion.a
                href="#newsletter"
                className={styles.cta}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {EVENT.cta}
              </motion.a>
            </div>
          </motion.article>
        </StaggerContainer>
        <motion.a
          href="#events"
          className={`arrow-link ${styles.footerLink}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ x: 4 }}
        >
          SEE ALL EVENTS
          <SkyArrow />
        </motion.a>
      </div>
    </AnimatedSection>
  )
}
