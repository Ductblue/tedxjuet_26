'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './CookieConsent.module.css'

const STORAGE_KEY = 'tedxmiami-cookies-accepted'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY)
    if (!accepted) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'true')
    setVisible(false)
  }

  function deny() {
    localStorage.setItem(STORAGE_KEY, 'denied')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.bar}
          role="dialog"
          aria-label="Cookie consent"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          <p className={styles.text}>
            By clicking <strong>"Accept All Cookies"</strong>, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. View our Privacy Policy for more information.
          </p>
          <div className={styles.actions}>
            <motion.button
              type="button"
              className={styles.deny}
              onClick={deny}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Deny
            </motion.button>
            <motion.button
              type="button"
              className={styles.accept}
              onClick={accept}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Accept All Cookies
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
