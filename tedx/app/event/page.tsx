'use client'

import Navbar from '@/components/Navbar'
import Events from '@/components/Events'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function EventPage() {
  return (
    <main className={styles.eventPage}>
      <Navbar />
      <div className={styles.content}>
        <Events />
      </div>
      <Footer />
    </main>
  )
}
