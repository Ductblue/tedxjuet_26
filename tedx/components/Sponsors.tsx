'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import styles from './Sponsors.module.css'

export default function Sponsors() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const sponsors = [
    {
      id: 1,
      image: '/sponsers/GAIL.svg.png',
      name: 'GAIL',
      text: 'Powered by GAIL',
      width: 150,
      height: 100,
    },
    {
      id: 2,
      image: '/sponsers/SBI_logo_PNG11.png',
      name: 'SBI',
      text: 'Presented by SBI',
      width: 150,
      height: 100,
    },
    {
      id: 3,
      image: '/sponsers/National_Fertilizers_Logo.svg.png',
      name: 'National Fertilizers',
      text: 'In Association With NFL',
      width: 150,
      height: 100,
      twoCol: true,
    },
    {
      id: 4,
      image: '/sponsers/Punjab_National_Bank_new_logo.svg-Photoroom.png',
      name: 'Punjab National Bank',
      text: 'Supported by PNB',
      width: 150,
      height: 100,
      twoCol: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={ref} className={styles.section} id="sponsors">
      <div className={styles.container}>
        <motion.div
          className={styles.sponsorsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* GAIL */}
          <motion.div className={styles.sponsorRow} variants={itemVariants}>
            <div className={styles.sponsorItem}>
              <div className={styles.imageWrapper}>
                <Image
                  src={sponsors[0].image}
                  alt={sponsors[0].name}
                  width={sponsors[0].width}
                  height={sponsors[0].height}
                  className={styles.sponsorImage}
                />
              </div>
              <p className={styles.sponsorText}>{sponsors[0].text}</p>
            </div>
          </motion.div>

          {/* SBI */}
          <motion.div className={styles.sponsorRow} variants={itemVariants}>
            <div className={styles.sponsorItem}>
              <div className={styles.imageWrapper}>
                <Image
                  src={sponsors[1].image}
                  alt={sponsors[1].name}
                  width={sponsors[1].width}
                  height={sponsors[1].height}
                  className={styles.sponsorImage}
                />
              </div>
              <p className={styles.sponsorText}>{sponsors[1].text}</p>
            </div>
          </motion.div>

          {/* National Fertilizers & Punjab National Bank */}
          <motion.div className={styles.sponsorRowDouble} variants={itemVariants}>
            <div className={styles.sponsorItem}>
              <div className={styles.imageWrapper}>
                <Image
                  src={sponsors[2].image}
                  alt={sponsors[2].name}
                  width={sponsors[2].width}
                  height={sponsors[2].height}
                  className={styles.sponsorImage}
                />
              </div>
              <p className={styles.sponsorText}>{sponsors[2].text}</p>
            </div>
            <div className={styles.sponsorItem}>
              <div className={styles.imageWrapper}>
                <Image
                  src={sponsors[3].image}
                  alt={sponsors[3].name}
                  width={sponsors[3].width}
                  height={sponsors[3].height}
                  className={styles.sponsorImage}
                />
              </div>
              <p className={styles.sponsorText}>{sponsors[3].text}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
