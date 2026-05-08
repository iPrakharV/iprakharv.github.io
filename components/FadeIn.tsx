'use client'

import { motion, type Variants } from 'framer-motion'
import { type ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

const getVariants = (direction: FadeInProps['direction'] = 'up'): Variants => {
  void direction

  return {
    hidden: { opacity: 1, y: 0, x: 0 },
    visible: { opacity: 1, y: 0, x: 0 },
  }
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className,
  direction = 'up',
}: FadeInProps) {
  return (
    <motion.div
      variants={getVariants(direction)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-64px' }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-64px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 1, y: 0 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
