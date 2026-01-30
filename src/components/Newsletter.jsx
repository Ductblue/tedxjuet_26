'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './ui/AnimatedSection'
import styles from './Newsletter.module.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('success')
    setEmail('')
  }

  return (
    <AnimatedSection id="newsletter" className={styles.newsletter}>
      <div className="container">
        <motion.p
          className={styles.text}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Drop your email and we'll keep you posted on all things TEDxMiami
        </motion.p>
        <motion.form
          className={styles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className={styles.input}
            required
            aria-label="Email address"
          />
          <motion.button
            type="submit"
            className={styles.submit}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Subscribe
          </motion.button>
        </motion.form>
        {status === 'success' && (
          <motion.p
            className={`${styles.message} ${styles.messageSuccess}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Thank you! Your submission has been received!
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            className={`${styles.message} ${styles.messageError}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Oops! Something went wrong while submitting the form.
          </motion.p>
        )}
      </div>
    </AnimatedSection>
  )
}
