"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./CardSlider.module.css";

const cards = [
  { id: 1, title: "Dr. Sarah Chen", topic: "AI & Humanity" },
  { id: 2, title: "Marcus Johnson", topic: "Innovation" },
  { id: 3, title: "Elena Rodriguez", topic: "Sustainability" },
  { id: 4, title: "James Wilson", topic: "Digital Future" },
  { id: 5, title: "Priya Patel", topic: "Social Impact" },
];

export default function InfiniteCardSlider() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const velocityRef = useRef(1); // pixels per frame
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Create infinite loop by repeating cards many times
  const infiniteCards = Array.from(
    { length: 30 },
    (_, i) => cards[i % cards.length],
  );

  // Auto-scroll animation
  useEffect(() => {
    if (isHovering) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const animate = () => {
      setScrollPosition((prev) => {
        let newPos = prev + velocityRef.current;
        const cardWidth = 470; // 450px card + 20px gap
        const totalWidth = cardWidth * cards.length;

        // Infinite loop - reset when reaching the end of one cycle
        if (newPos >= totalWidth) {
          newPos = 0;
        }

        return newPos;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <section ref={ref} className={styles.section} id="speakers">
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Speakers
          </motion.h2>
          <motion.a
            href="#speakers"
            className={styles.seeAll}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            whileHover={{ x: 5 }}
          >
            SEE ALL SPEAKERS <span>→</span>
          </motion.a>
        </div>
      </div>
      <div className={styles.sliderWrapper}>
        <div
          className={styles.scrollContainer}
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onWheel={handleWheel}
          style={{
            transform: `translateX(-${scrollPosition}px)`,
          }}
        >
          {infiniteCards.map((card, i) => {
            return (
              <div
                key={i}
                className={`${styles.card} ${hoveredCardIndex !== null && hoveredCardIndex !== i ? styles.blurred : ""}`}
                onMouseEnter={() => setHoveredCardIndex(i)}
                onMouseLeave={() => setHoveredCardIndex(null)}
              >
                <div className={styles.cardInner}>
                  <div className={styles.avatar}>{card.title.charAt(0)}</div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardTopic}>{card.topic}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center indicator */}
        <div className={styles.centerIndicator} />

        {/* Gradient overlays */}
        <div className={styles.gradientLeft} />
        <div className={styles.gradientRight} />
      </div>
    </section>
  );
}
