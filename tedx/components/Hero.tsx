'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const tedxRef = useRef(null)
  const isInView = useInView(tedxRef, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <>
      <section ref={ref} style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#000000'
      }}>
        <motion.div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          y
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(235, 0, 40, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
            zIndex: 1
          }}></div>
          <motion.div 
            style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: '400px',
                  height: '400px',
                  borderRadius: '50%',
                  border: '2px solid rgba(235, 0, 40, 0.3)',
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 20}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          opacity
        }}>
          <motion.h1
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 'bold',
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '3rem'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              We share{' '}
            </motion.span>
            <motion.span
              style={{ color: '#EB0028' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              ideas
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {' '}worth spreading
            </motion.span>
          </motion.h1>

          <motion.div
            style={{
              position: 'absolute',
              bottom: '3rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              style={{
                width: '30px',
                height: '50px',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                padding: '8px 0'
              }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.div style={{
                width: '4px',
                height: '8px',
                background: '#EB0028',
                borderRadius: '2px'
              }} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Gradient Transition */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '300px',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.7) 60%, #000000 100%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}></div>
      </section>

      {/* TedxInfo Section */}
      <section ref={tedxRef} id="about" style={{
        position: 'relative',
        padding: '120px 0 100px',
        background: '#000000'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <motion.h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              marginBottom: '2rem',
              color: '#ffffff'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            What is TEDx?
          </motion.h2>

          <motion.a
            href="https://www.ted.com/about/programs-initiatives/tedx-program"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              fontSize: '0.9rem',
              fontWeight: 700,
              color: '#EB0028',
              letterSpacing: '1.5px',
              marginBottom: '2.5rem',
              transition: 'all 0.3s'
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ x: 5 }}
          >
            TEDx PROGRAM <span style={{ display: 'inline-block', marginLeft: '8px', transition: 'transform 0.3s' }}>→</span>
          </motion.a>

          <motion.p
            style={{
              fontSize: '1.2rem',
              lineHeight: 1.9,
              color: 'rgba(255, 255, 255, 0.85)',
              fontWeight: 400
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            In the spirit of ideas worth spreading, TED has created a program called TEDx.
            TEDx is a program of local, self-organized events that bring people together to
            share a TED-like experience. Our event is called <strong style={{ fontWeight: 700, color: '#EB0028' }}>TEDxJUET</strong>, where x =
            independently organized TED event. At our TEDxJUET event, TED Talks video and live
            speakers will combine to spark deep discussion and connection in a small group. The TED
            Conference provides general guidance for the TEDx program, but individual TEDx
            events, including ours, are self-organized.
          </motion.p>
        </div>

        {/* Gradient Transition to Events */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.7) 70%, #000000 100%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}></div>
      </section>
    </>
  )
}
