'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const links = [
    { title: 'About', href: '#about' },
    { title: 'Events', href: '#events' },
    { title: 'Talks', href: '#talks' },
    { title: 'Volunteer', href: '#volunteer' },
    { title: 'Nominate Speaker', href: '#speakers' },
    { title: 'Partners', href: '#sponsors' },
  ]

  const socials = [
    { name: 'Twitter', href: 'https://twitter.com/tedxmiami', icon: '𝕏' },
    { name: 'Instagram', href: 'https://www.instagram.com/tedx.miami/', icon: 'IG' },
    { name: 'YouTube', href: 'https://www.youtube.com/playlist?list=PLi_KH7hrCHi3Xr3oK_ijk5AybMGaoIrUL', icon: 'YT' },
    { name: 'Flickr', href: 'https://flic.kr/s/aHBqjBi5HN', icon: 'FL' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div className="brand">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="tedx">TEDx</span>
              <span className="miami">JUET</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              This independent TEDx event is operated under license from TED
            </motion.p>
          </div>

          <div className="links">
            {links.map((link, i) => (
              <motion.a
                key={link.title}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ x: 5 }}
              >
                {link.title}
              </motion.a>
            ))}
          </div>

          <div className="socials">
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="credit">
          <p>Designed by Mars, Implemented by Virgo</p>
        </div>
      </div>
    </footer>
  )
}
