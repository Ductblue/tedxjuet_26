'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TedxInfo from '@/components/TedxInfo'
import Events from '@/components/Events'
import Talks from '@/components/Talks'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import { useEffect, useState } from 'react'

export default function Home() {
  const [showCookie, setShowCookie] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowCookie(true)
    }
  }, [])

  const handleCookieResponse = (accepted: boolean) => {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'denied')
    setShowCookie(false)
  }

  return (
    <main>
      <Navbar />
      <Hero />
      <Events />
      <Talks />
      <CallToAction />
      <Footer />
      {showCookie && <CookieBanner onResponse={handleCookieResponse} />}
    </main>
  )
}
