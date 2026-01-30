'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './ui/AnimatedSection'
import { StaggerContainer, staggerItem } from './ui/AnimatedSection'
import { SkyArrow } from './ui/Arrows'
import styles from './CTAs.module.css'

const CTAS = [
  { id: 'nominate', question: 'Know someone for our stage?', label: 'NOMINATE A SPEAKER', href: '#nominate' },
  { id: 'volunteer', question: 'Want to get involved with TEDxMiami?', label: 'BECOME A VOLUNTEER', href: '#volunteer' },
  { id: 'partners', question: 'Interested in being a sponsor?', label: 'PARTNER WITH US', href: '#partners' },
]

export default function CTAs() {
  return (
    <AnimatedSection className={styles.ctas}>
      <div className="container">
        <StaggerContainer className={styles.list}>
          {CTAS.map(({ id, question, label, href }) => (
            <motion.div key={id} id={id} className={styles.block} variants={staggerItem}>
              <p className={styles.question}>{question}</p>
              <motion.a
                href={href}
                className={`arrow-link ${styles.link}`}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {label}
                <SkyArrow />
              </motion.a>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}
