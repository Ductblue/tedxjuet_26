'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './Hero.module.css'

const CIRCLES_SRC = '/circles.svg'

const words = ['We', 'share', 'ideas', 'worth', 'spreading']

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.circlesWrap}
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <motion.div
          className={styles.circles}
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        >
          <Image
            src={CIRCLES_SRC}
            alt=""
            width={600}
            height={600}
            className={styles.circlesImg}
            unoptimized
          />
        </motion.div>
      </motion.div>
      <div className={`${styles.inner} container`}>
        <h1 className={styles.title}>
          {words.map((word, i) => (
            <motion.span
              key={word}
              className={styles.word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4 + i * 0.12,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>
      </div>
    </section>
  )
}
