'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './ui/AnimatedSection'
import { RedArrow } from './ui/Arrows'
import styles from './About.module.css'

export default function About() {
  return (
    <AnimatedSection id="about" className={styles.about}>
      <div className="container">
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          What is TEDx?
        </motion.h2>
        <div className={styles.content}>
          <motion.a
            href="https://www.ted.com/about/programs-initiatives/tedx-program"
            target="_blank"
            rel="noopener noreferrer"
            className={`arrow-link ${styles.programLink}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ x: 4 }}
          >
            TEDx PROGRAM
            <RedArrow className={styles.arrowSvg} />
          </motion.a>
          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxMiami, where x = independently organized TED event. At our TEDxMiami event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
          </motion.p>
        </div>
      </div>
    </AnimatedSection>
  )
}
