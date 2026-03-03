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
              TEDxJUET is an independently organized TEDx event hosted at JUET Guna, created with the belief that powerful ideas deserve a space close to home. It brings the spirit of TED – thinking deeply, questioning boldly, and caring about the world they shape. Over the years, TEDxJUET has grown into a shared experience for students, speakers, and the wider community. We've brought together individuals from across the country alongside local voices, not just to inspire, but to connect, reflect, and learn from one another.
            </p>
            <p className={styles.description}>
              At its heart, TEDxJUET is about nurturing curiosity and pride in ideas. It is a celebration of thoughtful conversation, collaboration, and the belief that meaningful change can begin right here, within the vibrant campus of JUET.
            </p>
            <p className={styles.description}>
              What makes TEDxJUET unique is its student driven spirit and its strong connection to the university community. Curated and organized with care, the event encourages open dialogue across disciplines and backgrounds, creating an environment where ideas are explored with curiosity and respect.
            </p>
            <p className={styles.description}>
              As TEDxJUET continues to grow, it remains committed to creating a space where ideas are shared with honesty, responsibility, and purpose. Each edition is a step toward building a more thoughtful community, one conversation at a time.
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
              In a world that constantly tells us who to be, how to feel, and how fast to move, "Untethered" is an invitation to pause and break free.
            </p>
            <p className={styles.description}>
              TEDxJUET 2026 explores what it means to live beyond invisible constraints: emotional, social, digital, and systemic. It is about loosening the ties that bind us to fear, conformity, comparison, and performative living and choosing authenticity over expectation.
            </p>
            <p className={styles.description}>
              As algorithms shape our choices and speed replaces depth, we often lose touch with what truly makes us human. Untethered brings forward ideas that challenge emotional numbness, inherited narratives, and limiting identities. It celebrates courage, the courage to feel deeply, think independently, and live intentionally.
            </p>
            <p className={styles.description}>
              Through lived experiences and honest perspectives, this edition of TEDxJUET seeks to reignite passion, reclaim emotional depth, and affirm individuality as a fundamental human right.
            </p>
            <p className={styles.description}>
              Untethered is not about escape, it is about awareness. It invites us to reconnect with ourselves, question what we've accepted without thought, and imagine more grounded, meaningful ways of living, relating, and creating.
            </p>
          </motion.section>

          {/* About JUET */}
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h1 className={styles.title}>About JUET</h1>
            <p className={styles.description}>
              Jaypee University of Engineering & Technology, Raghogarh, Guna (Madhya Pradesh) was established in 2010 under the provisions of the Madhya Pradesh Private University Act. The University is recognized by the University Grants Commission under the UGC Act, 1956, and is empowered to award degrees as per Section 22 of the Act.
            </p>
            <p className={styles.description}>
              The University has been awarded NAAC Grade "A+" in Cycle II, effective from March 2023. JUET is situated on a well developed, green campus equipped with modern academic infrastructure, including advanced laboratories and a comprehensive library, creating a conducive environment for learning and research.
            </p>
            <p className={styles.description}>
              JUET offers a wide range of academic programs in emerging areas of technology at the degree level. Research and innovation form a core focus of the University and are integrated into its academic framework to support excellence in education and scholarly pursuits.
            </p>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  )
}
