'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'

// Speaker data structure
const speakers = [
  // Innovation & Technology Theme
  {
    id: 1,
    name: "Ashok Kumar Sharma",
    title: "Scientist/Engineer-SF, ISRO-ISTRAC",
    theme: "Innovation & Technology",
    bio: "A scientist and engineer at ISRO-ISTRAC, bringing firsthand experience from India's space research to share insights on science, technology, and innovation.",
    image: "/speakers/speaker1.jpg",
    topics: ["Space Technology", "Engineering", "ISRO"]
  },
  {
    id: 2,
    name: "Farooq Chisty",
    title: "Founder, Zo Labs",
    theme: "Innovation & Technology",
    bio: "Founder of Zo Labs, driving conversations around artificial intelligence, its real-world applications, and the future of technology.",
    image: "/speakers/speaker2.jpg",
    topics: ["Artificial Intelligence", "Technology", "Startups"]
  },
  {
    id: 3,
    name: "Vishal Bachchas",
    title: "Software Engineer at Google",
    theme: "Innovation & Technology",
    bio: "A software engineer at Google, bridging the gap between big tech and the next generation of developers through content and mentorship.",
    image: "/speakers/speaker3.jpg",
    topics: ["Software Engineering", "Big Tech", "Technology"]
  },
  // Social Impact Theme
  {
    id: 4,
    name: "Sarvgya Soni",
    title: "Alumni & LGBTQ Voice",
    theme: "Social Impact",
    bio: "An alumni championing LGBTQ rights and inclusive communities, pushing for a world where everyone belongs.",
    image: "/speakers/speaker4.jpg",
    topics: ["LGBTQ+", "Inclusion", "Social Change"]
  },
  {
    id: 5,
    name: "Vidhi",
    title: "Sustainable Living Influencer",
    theme: "Social Impact",
    bio: "A sustainable living influencer harnessing the power of digital content to raise awareness about environmental issues and inspire conscious lifestyles.",
    image: "/speakers/speaker5.jpg",
    topics: ["Sustainability", "Environment", "Lifestyle"]
  },
  {
    id: 6,
    name: "Alok Gaud",
    title: "Director, Jaypee Group of Companies",
    theme: "Social Impact",
    bio: "Director in the Jaypee Group of Companies, sharing perspectives on leadership, human values, and building organisations with purpose.",
    image: "/speakers/speaker6.jpg",
    topics: ["Leadership", "Human Values", "Corporate Culture"]
  },
  {
    id: 7,
    name: "Inderjeet Bhagat",
    title: "Software Engineer & Coding Educator",
    theme: "Innovation & Technology",
    bio: "A software engineer and coding educator making technology accessible, empowering the next generation of developers through education and content.",
    image: "/speakers/speaker7.jpg",
    topics: ["Software Engineering", "Coding Education", "Technology"]
  },
  // Entrepreneurship Theme
  {
    id: 8,
    name: "Harsh Vandana Sharma",
    title: "Tech Educator, Creative Developer & Entrepreneur",
    theme: "Entrepreneurship",
    bio: "A tech educator, creative developer, and entrepreneur building ventures that sit at the intersection of education, technology, and creative thinking.",
    image: "/speakers/speaker8.jpg",
    topics: ["Education", "Technology", "Entrepreneurship"]
  },
  {
    id: 9,
    name: "Barkha Agrawal",
    title: "Director, Jet Trade & Logistics",
    theme: "Entrepreneurship",
    bio: "Director of Jet Trade & Logistics, redefining supply chain solutions through entrepreneurship and strategic business innovation.",
    image: "/speakers/speaker9.jpg",
    topics: ["Logistics", "Entrepreneurship", "Business"]
  }
]

const themes = [
  "Innovation & Technology",
  "Social Impact",
  "Entrepreneurship"
]

export default function SpeakersPage() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null)
  const [hoveredSpeaker, setHoveredSpeaker] = useState<number | null>(null)

  const filteredSpeakers = selectedTheme
    ? speakers.filter(s => s.theme === selectedTheme)
    : speakers

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>Our Speakers</h1>
            <p className={styles.heroSubtitle}>
              Meet the visionaries, innovators, and changemakers who will share their ideas worth spreading at TEDxJUET 2025
            </p>
          </motion.div>
        </section>

        {/* Theme Filter */}
        <section className={styles.filterSection}>
          <motion.div
            className={styles.themeFilters}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              className={`${styles.themeButton} ${!selectedTheme ? styles.active : ''}`}
              onClick={() => setSelectedTheme(null)}
            >
              All Speakers
            </button>
            {themes.map((theme, index) => (
              <motion.button
                key={theme}
                className={`${styles.themeButton} ${selectedTheme === theme ? styles.active : ''}`}
                onClick={() => setSelectedTheme(theme)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {theme}
              </motion.button>
            ))}
          </motion.div>
        </section>

        {/* Speakers Grid */}
        <section className={styles.speakersSection}>
          <div className={styles.speakersGrid}>
            {filteredSpeakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                className={styles.speakerCard}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredSpeaker(speaker.id)}
                onMouseLeave={() => setHoveredSpeaker(null)}
              >
                <div className={styles.imageContainer}>
                  <div className={styles.imagePlaceholder}>
                    <div className={styles.placeholderIcon}>
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredSpeaker === speaker.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.overlayContent}>
                      <div className={styles.topics}>
                        {speaker.topics.map((topic, i) => (
                          <span key={i} className={styles.topic}>{topic}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className={styles.speakerInfo}>
                  <span className={styles.theme}>{speaker.theme}</span>
                  <h3 className={styles.speakerName}>{speaker.name}</h3>
                  <p className={styles.speakerTitle}>{speaker.title}</p>
                  <p className={styles.speakerBio}>{speaker.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
    </>
  )
}
