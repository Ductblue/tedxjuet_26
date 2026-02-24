'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setShowScrollToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (item: string) => {
    const isTeamPage = pathname === '/team'
    const sectionId = item.toLowerCase()

    if (isTeamPage) {
      // Navigate to home page first, then scroll to section
      router.push(`/#${sectionId}`)
      // Small delay to ensure page is loaded before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // Already on home page, just scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          background: isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
          borderBottom: isScrolled ? '1px solid rgba(235, 0, 40, 0.3)' : '1px solid transparent',
          transition: 'all 0.3s ease'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '1.2rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <motion.div 
              style={{ fontSize: '1.8rem', fontWeight: 'bold', cursor: 'pointer' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span style={{ color: '#EB0028' }}>TEDx</span>
              <span style={{ color: '#ffffff' }}>JUET</span>
            </motion.div>
          </Link>

          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {['About', 'Events', 'Talks', 'Speakers', 'Sponsors', 'Team', 'Contact'].map((item, i) => (
              <motion.button
                key={item}
                onClick={() => {
                  if (item === 'Team' || item === 'Contact') {
                    router.push(`/${item.toLowerCase()}`)
                  } else {
                    handleNavigation(item)
                  }
                }}
                style={{
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  transition: 'color 0.3s',
                  textDecoration: 'none',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  font: 'inherit'
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#EB0028'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#ffffff'}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <div 
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '6px',
              cursor: 'pointer',
              width: '30px',
              height: '24px'
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span style={{ 
              width: '100%', 
              height: '3px', 
              background: '#ffffff', 
              borderRadius: '2px',
              transition: 'all 0.3s'
            }}></span>
            <span style={{ 
              width: '100%', 
              height: '3px', 
              background: '#ffffff', 
              borderRadius: '2px',
              transition: 'all 0.3s'
            }}></span>
            <span style={{ 
              width: '100%', 
              height: '3px', 
              background: '#ffffff', 
              borderRadius: '2px',
              transition: 'all 0.3s'
            }}></span>
          </div>
        </div>
      </motion.nav>

      {mobileMenuOpen && (
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.95)',
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
            {['About', 'Events', 'Talks', 'Speakers', 'Sponsors', 'Team', 'Contact'].map((item, i) => (
              <motion.button
                key={item}
                onClick={() => {
                  setMobileMenuOpen(false)
                  if (item === 'Team' || item === 'Contact') {
                    router.push(`/${item.toLowerCase()}`)
                  } else {
                    handleNavigation(item)
                  }
                }}
                style={{
                  color: '#ffffff',
                  fontSize: '2rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  font: 'inherit'
                }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {showScrollToTop && (
        <motion.button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: '#EB0028',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 500,
            fontSize: '1.5rem',
            color: '#ffffff',
            boxShadow: '0 4px 15px rgba(235, 0, 40, 0.4)'
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, boxShadow: '0 6px 20px rgba(235, 0, 40, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          ↑
        </motion.button>
      )}
    </>
  )
}