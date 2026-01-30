'use client'

import { motion } from 'framer-motion'
import styles from './Footer.module.css'

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Talks', href: '#talks' },
  { label: 'Volunteer', href: '#volunteer' },
  { label: 'Nominate Speaker', href: '#nominate' },
  { label: 'Partners', href: '#partners' },
]

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <p className={styles.license}>
          This independent TEDx event is operated under license from TED
        </p>
        <div className={styles.social}>
          <motion.a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkedinIcon />
          </motion.a>
        </div>
        <div className={styles.links}>
          <a href="#" className={styles.logo}>TED<em>x</em>Miami</a>
          <nav className={styles.nav}>
            {FOOTER_LINKS.map(({ label, href }) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </nav>
        </div>
        <p className={styles.credit}>
          Designed by Marv, implemented by Virago
        </p>
      </div>
    </motion.footer>
  )
}
