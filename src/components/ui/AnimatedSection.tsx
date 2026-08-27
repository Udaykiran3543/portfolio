import type { ReactNode } from 'react'
import { motion, type Variants } from 'motion/react'
import { cn } from '../../lib/utils'

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

type AnimatedSectionProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'ul'
}

export function AnimatedSection({ children, className, as = 'div' }: AnimatedSectionProps) {
  const MotionTag = as === 'ul' ? motion.ul : motion.div

  return (
    <MotionTag
      className={cn(className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  )
}

type AnimatedItemProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'li'
}

export function AnimatedItem({ children, className, as = 'div' }: AnimatedItemProps) {
  const MotionTag = as === 'li' ? motion.li : motion.div

  return (
    <MotionTag className={cn(className)} variants={fadeUpItem}>
      {children}
    </MotionTag>
  )
}
