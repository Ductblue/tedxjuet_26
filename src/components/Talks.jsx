'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedSection from './ui/AnimatedSection'
import { StaggerContainer, staggerItem } from './ui/AnimatedSection'
import { SkyArrow } from './ui/Arrows'
import styles from './Talks.module.css'

const TALKS = [
  {
    title: 'How Anyone Can Discover Their Hidden Innovator',
    speaker: 'Leigh-Ann Buchanan',
    image: 'https://cdn.prod.website-files.com/63eba1cc31cd09609b06c625/64c8fbf28efe9e6833a89ae4_Leigh-Ann%20Buchanan-TEDxMiami.png',
  },
  {
    title: 'The Bridge to Happiness',
    speaker: 'Karen Guggenheim',
    image: 'https://cdn.prod.website-files.com/63eba1cc31cd09609b06c625/64c8fbce30473a8ff101db53_Karen%20Guggenheim-TEDxMiami.png',
  },
  {
    title: 'Designing for an Unknown Future',
    speaker: 'Charles Renfro',
    image: 'https://cdn.prod.website-files.com/63eba1cc31cd09609b06c625/64c8fbba6aab98bd34738b62_Charles%20Renfro-TEDxMiami.png',
  },
  {
    title: 'The Future of Work',
    speaker: 'Jen Fisher',
    image: 'https://cdn.prod.website-files.com/63eba1cc31cd09609b06c625/64c8fba00e5cc7345b4379df_Jen%20Fisher-TEDxMiami.png',
  },
  {
    title: 'Build The Wall',
    speaker: 'Dr. Landolf Rhode-Barbarigos',
    image: 'https://cdn.prod.website-files.com/63eba1cc31cd09609b06c625/64c8fb810e5cc7345b433d70_Dr.%20Landolf%20Rhode-Barbarigos-TEDxMiami.png',
  },
]

export default function Talks() {
  return (
    <AnimatedSection id="talks" className={styles.talks}>
      <div className="container">
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Talks
        </motion.h2>
        <motion.a
          href="#talks"
          className={`arrow-link ${styles.headerLink}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ x: 4 }}
        >
          SEE ALL TALKS
          <SkyArrow />
        </motion.a>
        <StaggerContainer className={styles.grid}>
          {TALKS.map(({ title, speaker, image }) => (
            <motion.article
              key={title}
              className={styles.card}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <motion.a href="#talks" className={styles.cardLink}>
                <div className={styles.cardImage}>
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.cardImg}
                    unoptimized
                  />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <p className={styles.cardSpeaker}>{speaker}</p>
                </div>
              </motion.a>
            </motion.article>
          ))}
        </StaggerContainer>
        <motion.a
          href="#talks"
          className={`arrow-link ${styles.footerLink}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ x: 4 }}
        >
          SEE ALL TALKS
          <SkyArrow />
        </motion.a>
      </div>
    </AnimatedSection>
  )
}
