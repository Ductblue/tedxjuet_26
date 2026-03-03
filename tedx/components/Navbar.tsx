'use client'

import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const [mouseX, setMouseX] = useState(0)
  const navRef = useRef<HTMLDivElement>(null)
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const navRect = navRef.current.getBoundingClientRect()
        setMouseX(e.clientX - navRect.left)
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const handleNavigation = (item: string) => {
    const isTeamPage = pathname === '/team'
    const isContactPage = pathname === '/contact'
    const isRegistrationPage = pathname === '/registration'
    const isAboutPage = pathname === '/about'
    const isSpeakersPage = pathname === '/speakers'
    const sectionId = item.toLowerCase()

    setMobileMenuOpen(false)

    if (isTeamPage || isContactPage || isRegistrationPage || isAboutPage || isSpeakersPage) {
      router.push(`/#${sectionId}`)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navItems = ['About', 'Events', 'Speakers', 'Team', 'Contact']

  // Magnification component for each nav item
  const MagnifyNavItem = ({ item, mouseX }: { item: string; mouseX: number }) => {
    const ref = useRef<HTMLButtonElement>(null)
    const [position, setPosition] = useState({ x: 0, width: 0 })

    useEffect(() => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const parentRect = navRef.current?.getBoundingClientRect()
        if (parentRect) {
          setPosition({
            x: rect.left - parentRect.left + rect.width / 2,
            width: rect.width
          })
        }
      }
    }, [])

    // Calculate distance from mouse to this nav item
    const distance = Math.abs(mouseX - position.x)
    const maxDistance = 120
    const scale = distance < maxDistance 
      ? 1 + (1 - distance / maxDistance) * 0.25
      : 1

    return (
      <motion.button
        ref={ref}
        onClick={() => {
          if (item === 'About' || item === 'Speakers' || item === 'Team' || item === 'Contact') {
            router.push(`/${item.toLowerCase()}`)
          } else {
            handleNavigation(item)
          }
        }}
        style={{
          color: 'rgba(255, 255, 255, 0.95)',
          fontSize: '1rem',
          fontWeight: '500',
          letterSpacing: '0.2px',
          textTransform: 'capitalize',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.4rem 0.8rem',
          position: 'relative',
          transition: 'color 0.2s ease',
          transformOrigin: 'center',
          whiteSpace: 'nowrap',
        }}
        animate={{ 
          scale: scale,
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 300, 
          damping: 30 
        }}
        whileHover={{ 
          color: '#EB0028',
        }}
      >
        {item}
      </motion.button>
    )
  }

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        padding: '1.25rem 2rem',
        pointerEvents: 'none',
      }}>
        <motion.nav
          ref={navRef}
          style={{
            background: 'rgba(0, 0, 0, 0.15)',
            backdropFilter: 'blur(25px)',
            WebkitBackdropFilter: 'blur(25px)',
            borderRadius: '50px',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            padding: '0.8rem 2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '3rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
            pointerEvents: 'auto',
            position: 'relative',
            overflow: 'hidden',
          }}
          initial={{ y: -100, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glass reflection on top */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
            pointerEvents: 'none',
          }} />
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            position: 'relative',
            zIndex: 1,
          }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', zIndex: 1001, flexShrink: 0 }}>
            <motion.div 
              style={{ 
                fontSize: '1.4rem', 
                fontWeight: '800', 
                cursor: 'pointer',
                letterSpacing: '-0.5px',
                display: 'flex',
                alignItems: 'center',
              }}
              whileHover={{ 
                scale: 1.03,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <span style={{ color: '#EB0028' }}>TEDx</span>
              <span style={{ 
                color: '#ffffff',
              }}>JUET</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            alignItems: 'center'
          }} className="desktop-nav">
            {navItems.map((item) => (
              <MagnifyNavItem key={item} item={item} mouseX={mouseX} />
            ))}
          </div>

          {/* Hamburger Button */}
          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              zIndex: 1001,
              position: 'relative',
              width: '32px',
              height: '24px',
              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))',
            }}
          >
            <span style={{
              display: 'block',
              width: '100%',
              height: '2px',
              background: '#ffffff',
              borderRadius: '2px',
              position: 'absolute',
              top: mobileMenuOpen ? '50%' : '20%',
              left: 0,
              transform: mobileMenuOpen ? 'rotate(45deg)' : 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: mobileMenuOpen ? '0 0 10px rgba(235, 0, 40, 0.6)' : 'none',
            }} />
            <span style={{
              display: 'block',
              width: '100%',
              height: '2px',
              background: '#ffffff',
              borderRadius: '2px',
              position: 'absolute',
              top: '50%',
              left: 0,
              opacity: mobileMenuOpen ? 0 : 1,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }} />
            <span style={{
              display: 'block',
              width: '100%',
              height: '2px',
              background: '#ffffff',
              borderRadius: '2px',
              position: 'absolute',
              top: mobileMenuOpen ? '50%' : '80%',
              left: 0,
              transform: mobileMenuOpen ? 'rotate(-45deg)' : 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: mobileMenuOpen ? '0 0 10px rgba(235, 0, 40, 0.6)' : 'none',
            }} />
          </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '2rem', 
              textAlign: 'center',
              width: '100%'
            }}>
              {navItems.map((item, i) => (
                <motion.button
                  key={item}
                  onClick={() => {
                    if (item === 'About' || item === 'Speakers' || item === 'Team' || item === 'Contact') {
                      router.push(`/${item.toLowerCase()}`)
                    } else {
                      handleNavigation(item)
                    }
                  }}
                  style={{
                    color: '#ffffff',
                    fontSize: '1.75rem',
                    fontWeight: '600',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.75rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.2)'
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: i * 0.05, type: 'spring', stiffness: 100 }}
                  whileHover={{ 
                    scale: 1.1, 
                    color: '#EB0028',
                    textShadow: '0 0 30px rgba(235, 0, 40, 0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'rgba(235, 0, 40, 0.2)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(235, 0, 40, 0.4)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 500,
              color: '#ffffff',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              boxShadow: '0 8px 32px rgba(235, 0, 40, 0.3)',
            }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            whileHover={{ 
              scale: 1.15,
              background: 'rgba(235, 0, 40, 0.4)',
              boxShadow: '0 8px 32px rgba(235, 0, 40, 0.6)',
            }}
            whileTap={{ scale: 0.9 }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 968px) {
          .desktop-nav {
            display: none !important;
          }
          .hamburger {
            display: block !important;
          }
        }
        
        @media (max-width: 768px) {
          nav {
            padding: 0.7rem 1.5rem !important;
            max-width: 90vw !important;
            gap: 2rem !important;
          }
        }
        
        @media (max-width: 480px) {
          nav {
            padding: 0.6rem 1.2rem !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </>
  )
}