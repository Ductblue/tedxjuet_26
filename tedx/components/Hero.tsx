'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  
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
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          >
            <source src="/webm/try.webm" type="video/webm" />
          </video>
          
          {/* Dark Overlay for Text Readability */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.7) 100%)',
            zIndex: 1
          }}></div>

          {/* Red Accent Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(235, 0, 40, 0.15) 0%, transparent 50%)',
            zIndex: 1
          }}></div>
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
    </>
  )
}
