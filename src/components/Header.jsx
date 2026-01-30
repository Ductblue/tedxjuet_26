'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import styles from './Header.module.css'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Talks', href: '#talks' },
  { label: 'Volunteer', href: '#volunteer' },
  { label: 'Nominate Speaker', href: '#nominate' },
  { label: 'Partners', href: '#partners' },
]

const LOGO_SRC = 'https://cdn.prod.website-files.com/63e118320fe0876684cc169c/63e6616b9ecb86c296858c06_logo-white.webp'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div className={`${styles.inner} container`}>
        <a href="#" className={styles.logo}>
          <Image
            src={LOGO_SRC}
            alt="TEDxMiami"
            width={140}
            height={36}
            className={styles.logoImg}
            unoptimized
          />
        </a>
        <button
          className={styles.menuToggle}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.li
                key={label}
                initial={menuOpen ? { opacity: 0, x: -16 } : false}
                animate={menuOpen ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.05 * i, duration: 0.25 }}
              >
                <a href={href} onClick={() => setMenuOpen(false)}>{label}</a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}
