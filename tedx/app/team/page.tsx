'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function TeamPage() {
  const teamMembers = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Team Member ${i + 1}`,
    role: 'TEDxJUET Team',
    linkedin: 'https://linkedin.com/in/example' // Replace with actual LinkedIn URLs
  }))

  return (
    <main>
      <Navbar />
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.h1
            className={styles.heading}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Team
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meet the passionate individuals behind TEDxJUET
          </motion.p>

          <div className={styles.cardsGrid}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(235, 0, 40, 0.3)' }}
              >
                <div className={styles.cardImage}></div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardName}>{member.name}</h3>
                  <div className={styles.roleWithLink}>
                    <p className={styles.cardRole}>{member.role}</p>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.linkedinLink}
                      title="LinkedIn Profile"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c.429-.646 1.196-1.587 2.905-1.587 2.121 0 3.71 1.328 3.71 4.182v5.703zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.921-1.715 1.157 0 1.92.759 1.92 1.715 0 .953-.763 1.715-1.926 1.715zm1.581 11.597H3.715V9.505h3.203v10.947zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
