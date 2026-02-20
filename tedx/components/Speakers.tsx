'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Speakers.module.css'

const speakers = [
  { 
    id: 1, 
    name: 'Arpit Dwivedi', 
    description: 'Science Communicator and Rationalist',
    image: '/speakers/speaker1.jpg'
  },
  { 
    id: 2, 
    name: 'Farooq Chisty', 
    description: 'Entrepreneur',
    image: '/speakers/speaker2.jpg'
  },
  { 
    id: 3, 
    name: 'Dr. Gajendra Purohit', 
    description: 'YouTuber, Mathematics Educator, Professor',
    image: '/speakers/speaker3.jpg'
  },
  { 
    id: 4, 
    name: 'Mohit Sharma', 
    description: 'Entrepreneur, Founder & CEO at Blacklisted',
    image: '/speakers/speaker4.jpg'
  },
  { 
    id: 5, 
    name: 'Charvi Jain', 
    description: 'Psychologist, Entrepreneur',
    image: '/speakers/speaker5.jpg'
  },
  { 
    id: 6, 
    name: 'Babulal Dahiya', 
    description: 'Farmer, Poet, and Conversationist',
    image: '/speakers/speaker6.jpg'
  },
  { 
    id: 7, 
    name: 'Speaker 7', 
    description: 'Description for Speaker 7',
    image: '/speakers/speaker7.jpg'
  },
  { 
    id: 8, 
    name: 'Speaker 8', 
    description: 'Description for Speaker 8',
    image: '/speakers/speaker8.jpg'
  },
  { 
    id: 9, 
    name: 'Speaker 9', 
    description: 'Description for Speaker 9',
    image: '/speakers/speaker9.jpg'
  },
  { 
    id: 10, 
    name: 'Speaker 10', 
    description: 'Description for Speaker 10',
    image: '/speakers/speaker10.jpg'
  },
]

export default function Speakers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className={styles.section} id="speakers">
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Speakers
          </motion.h2>
          <motion.a
            href="/speakers"
            className={styles.viewDetails}
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            View Event Details
          </motion.a>
        </div>

        <div className={styles.grid}>
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.speakerName}>{speaker.name}</h3>
                <p className={styles.description}>{speaker.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
