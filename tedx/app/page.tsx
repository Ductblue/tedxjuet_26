'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TedxInfo from '@/components/TedxInfo'
import Events from '@/components/Events'
import Talks from '@/components/Talks'
import Speakers from '@/components/Speakers'
import CardSlider from '@/components/CardSlider'
import Sponsors from '@/components/Sponsors'
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
    <main style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden', position: 'relative' }}>
      <Navbar />
      <Hero />
      <TedxInfo />
      <Events />
      <Talks />
      <Speakers />
      <CardSlider />
      <Sponsors />
      <CallToAction />
      <Footer />
      {showCookie && <CookieBanner onResponse={handleCookieResponse} />}
    </main>
  )
}
