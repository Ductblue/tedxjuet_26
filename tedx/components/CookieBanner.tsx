'use client'

import { motion } from 'framer-motion'

interface CookieBannerProps {
  onResponse: (accepted: boolean) => void
}

export default function CookieBanner({ onResponse }: CookieBannerProps) {
  return (
    <motion.div
      className="banner"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="content">
        <p>
          We use cookies to improve your experience on our website, analyze site usage,
          and assist in our marketing efforts. View our Privacy Policy for more information.
        </p>
        <div className="buttons">
          <motion.button
            className="deny"
            onClick={() => onResponse(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Deny
          </motion.button>
          <motion.button
            className="accept"
            onClick={() => onResponse(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Accepted
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
