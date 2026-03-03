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
    name: "Dr. Rajesh Kumar",
    title: "AI Research Scientist",
    theme: "Innovation & Technology",
    bio: "Leading breakthrough research in artificial intelligence and machine learning applications",
    image: "/speakers/speaker1.jpg",
    topics: ["AI", "Machine Learning", "Future Tech"]
  },
  {
    id: 2,
    name: "Priya Sharma",
    title: "Tech Entrepreneur",
    theme: "Innovation & Technology",
    bio: "Founder of multiple successful tech startups revolutionizing digital solutions",
    image: "/speakers/speaker2.jpg",
    topics: ["Startups", "Innovation", "Digital Transformation"]
  },
  // Social Impact Theme
  {
    id: 3,
    name: "Arun Mehta",
    title: "Social Activist",
    theme: "Social Impact",
    bio: "Championing grassroots initiatives for sustainable community development",
    image: "/speakers/speaker3.jpg",
    topics: ["Community", "Sustainability", "Social Change"]
  },
  {
    id: 4,
    name: "Neha Kapoor",
    title: "NGO Director",
    theme: "Social Impact",
    bio: "Leading transformative programs for education and women empowerment",
    image: "/speakers/speaker4.jpg",
    topics: ["Education", "Empowerment", "Leadership"]
  },
  // Arts & Creativity Theme
  {
    id: 5,
    name: "Vikram Singh",
    title: "Film Director",
    theme: "Arts & Creativity",
    bio: "Award-winning filmmaker exploring human stories through cinematic excellence",
    image: "/speakers/speaker5.jpg",
    topics: ["Cinema", "Storytelling", "Visual Arts"]
  },
  {
    id: 6,
    name: "Ananya Desai",
    title: "Contemporary Artist",
    theme: "Arts & Creativity",
    bio: "Breaking boundaries in contemporary art with innovative installations",
    image: "/speakers/speaker6.jpg",
    topics: ["Art", "Innovation", "Expression"]
  },
  // Health & Wellness Theme
  {
    id: 7,
    name: "Dr. Arjun Patel",
    title: "Neuroscientist",
    theme: "Health & Wellness",
    bio: "Pioneering research on mind-body connection and mental health",
    image: "/speakers/speaker7.jpg",
    topics: ["Mental Health", "Neuroscience", "Wellness"]
  },
  {
    id: 8,
    name: "Kavya Reddy",
    title: "Wellness Coach",
    theme: "Health & Wellness",
    bio: "Empowering individuals to achieve holistic health and balance",
    image: "/speakers/speaker8.jpg",
    topics: ["Fitness", "Mindfulness", "Lifestyle"]
  },
  // Entrepreneurship Theme
  {
    id: 9,
    name: "Rohan Verma",
    title: "Serial Entrepreneur",
    theme: "Entrepreneurship",
    bio: "Building impactful ventures that solve real-world problems",
    image: "/speakers/speaker9.jpg",
    topics: ["Business", "Innovation", "Growth"]
  },
  {
    id: 10,
    name: "Ishita Joshi",
    title: "Startup Mentor",
    theme: "Entrepreneurship",
    bio: "Guiding the next generation of entrepreneurs to success",
    image: "/speakers/speaker10.jpg",
    topics: ["Mentorship", "Strategy", "Scaling"]
  }
]

const themes = [
  "Innovation & Technology",
  "Social Impact",
  "Arts & Creativity",
  "Health & Wellness",
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
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
