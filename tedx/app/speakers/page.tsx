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
    title: "AI Generalist, Growth at Brevo PushOwl",
    theme: "Innovation & Technology",
    bio: "An AI Generalist leading growth at Brevo PushOwl, focused on practical AI adoption, product-led growth, and building scalable impact through technology.",
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
    title: "Entrepreneur",
    theme: "Entrepreneurship",
    bio: "An entrepreneur sharing perspectives on leadership, human values, and building organisations with purpose.",
    image: "/speakers/speaker6.jpeg",
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
  {
    id: 8,
    name: "Faraz Ahmad Qureshi",
    title: "Indian Revenue Service (IRS), Additional Commissioner, Indirect Taxes & Customs",
    theme: "Social Impact",
    bio: "An Indian Revenue Service officer serving as Additional Commissioner in Indirect Taxes & Customs, bringing public service and governance experience to the stage.",
    image: "/speakers/far2.jpeg",
    topics: ["Public Service", "Governance", "Taxation"]
  },
  // Entrepreneurship Theme
  {
    id: 9,
    name: "Barkha Agrawal",
    title: "Director, Jet Trade & Logistics",
    theme: "Entrepreneurship",
    bio: "Director of Jet Trade & Logistics, redefining supply chain solutions through entrepreneurship and strategic business innovation.",
    image: "/speakers/speaker9.jpg",
    topics: ["Logistics", "Entrepreneurship", "Business"]
  },
  {
    id: 10,
    name: "Vedika Dave",
    title: "Lawyer & Legal Educator",
    theme: "Social Impact",
    bio: "A lawyer specializing in marriage and divorce cases, educating the masses on legal rights and family law through her influential Instagram platform.",
    image: "/speakers/speaker10.jpeg",
    topics: ["Family Law", "Legal Education", "Women Empowerment"]
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
              Meet the visionaries, innovators, and changemakers who will share their ideas worth spreading at TEDxJUET 2026
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
                  {speaker.image ? (
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className={styles.speakerImage}
                      priority={index < 3}
                      data-speaker-id={speaker.id}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <div className={styles.placeholderContent}>
                        <span className={styles.placeholderText}>TEDxJUET</span>
                      </div>
                    </div>
                  )}
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
