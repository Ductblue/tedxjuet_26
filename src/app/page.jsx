import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Events from '@/components/Events'
import Talks from '@/components/Talks'
import CTAs from '@/components/CTAs'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Talks />
        <CTAs />
        <Newsletter />
        <Footer />
      </main>
      <CookieConsent />
    </>
  )
}
