'use client'

import { motion } from 'framer-motion'

const defaultVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] },
  }),
}

const MotionSection = motion.section

export default function AnimatedSection({
  children,
  className = '',
  id,
  delay = 0,
  variants = defaultVariants,
  ...props
}) {
  return (
    <MotionSection
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      custom={delay}
      {...props}
    >
      {children}
    </MotionSection>
  )
}

export function StaggerContainer({ children, className = '', ...props }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.08, delayChildren: 0.1 },
        },
        hidden: {},
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] },
  },
}
