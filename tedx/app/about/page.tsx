'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        {/* Background Pattern */}
        <div className={styles.backgroundPattern}></div>

        <div className={styles.content}>
          {/* About TEDx Section */}
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.title}>About TEDx</h1>
            <p className={styles.description}>
              TEDx is a program of local, self-organized events licensed by TED, designed to bring people together to share a TED-like experience and bring its spirit of "Ideas Worth Spreading" to local communities. TEDx events blend live speakers, performers, and thought-provoking videos that spark deep discussions and connections. The "x" stands for "independently organized TED event."
            </p>
          </motion.section>

          {/* About TEDxJUET Section */}
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className={styles.title}>About TEDxJUET</h1>
            <p className={styles.description}>
              TEDxJUET is an independently organized TEDx event hosted by Jaypee University of Engineering & Technology (JUET), Guna, under the global TED initiative of "Ideas Worth Spreading." It serves as a platform for bold thinkers, innovators, artists, and changemakers from diverse fields to share their stories, spark conversations, and inspire action within and beyond our campus community.
            </p>
            <p className={styles.description}>
              Launched in 2025, TEDxJUET was founded by a visionary team of students who laid the groundwork for what would become one of the most impactful platforms on campus. Our inaugural event centers around the theme "UNTETHERED" - exploring what it means to break free from emotional, social, and systemic constraints in a rapidly changing world.
            </p>
            <p className={styles.description}>
              Through lived experiences and thoughtful perspectives, we spotlight ideas centered on reclaiming emotional depth, affirming identity as a fundamental human right, and reigniting passion and sincerity in a culture driven by speed, algorithms, and convenience. At TEDxJUET, we don't just host talks – we build legacies, one idea at a time.
            </p>
          </motion.section>

          {/* About UNTETHERED Theme */}
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className={styles.title}>About UNTETHERED</h1>
            <p className={styles.description}>
              UNTETHERED represents the courage to move beyond limitations - whether they are emotional burdens we carry, societal expectations we conform to, or systemic barriers that hold us back. In a world of constant connectivity yet profound disconnection, this theme invites speakers and attendees to explore genuine freedom.
            </p>
            <p className={styles.description}>
              It's about reclaiming authenticity in an age of performance, finding stillness amid chaos, and rediscovering what it means to be truly present. UNTETHERED challenges us to question the invisible chains we've accepted and imagine what becomes possible when we dare to let go.
            </p>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  )
}
