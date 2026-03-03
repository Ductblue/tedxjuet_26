'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TedxInfo from '@/components/TedxInfo'
import Talks from '@/components/Talks'
// import Sponsors from '@/components/Sponsors'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Talks />
      {/* <Sponsors /> */}
      <Footer />
    </main>
  )
}
