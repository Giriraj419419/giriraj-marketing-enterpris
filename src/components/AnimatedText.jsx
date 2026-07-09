import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

// ─── Easing Curves ────────────────────────────────────────────────
const EASE_PREMIUM   = [0.16, 1, 0.3, 1]
const EASE_OUT_EXPO  = [0.19, 1, 0.22, 1]

// ─── 1. FadeIn — upgraded with optional blur ──────────────────────
export const FadeIn = ({ children, delay = 0, className = "", blur = false }) => {
  const reduced = useReducedMotion()
  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 24, filter: blur && !reduced ? 'blur(8px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: reduced ? 0 : 0.85, delay: reduced ? 0 : delay, ease: EASE_PREMIUM }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── 2. BlurReveal — Vercel-style blur-to-sharp text ─────────────
export const BlurReveal = ({ children, delay = 0, className = "" }) => {
  const reduced = useReducedMotion()
  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 20, filter: reduced ? 'blur(0px)' : 'blur(12px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: reduced ? 0 : 1, delay: reduced ? 0 : delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── 3. ClipReveal — Linear/Stripe-style clip-path reveal ────────
export const ClipReveal = ({ children, delay = 0, className = "" }) => {
  const reduced = useReducedMotion()
  return (
    <motion.div
      initial={{ opacity: 0, clipPath: reduced ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)' }}
      whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: reduced ? 0 : 0.9, delay: reduced ? 0 : delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── 4. TextReveal — Word-by-word stagger (whileInView) ──────────
export const TextReveal = ({ text, className = '', delay = 0 }) => {
  const reduced = useReducedMotion()
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: reduced ? 0 : 0.06, delayChildren: reduced ? 0 : delay * 0.1 }
    }
  }

  const child = {
    hidden:  { opacity: 0, y: reduced ? 0 : 22, filter: reduced ? 'blur(0px)' : 'blur(6px)' },
    visible: {
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { duration: reduced ? 0 : 0.75, ease: EASE_OUT_EXPO }
    }
  }

  return (
    <motion.div
      style={{ display: 'flex', flexWrap: 'wrap' }}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {words.map((word, i) => (
        <motion.span variants={child} style={{ marginRight: '0.3em', display: 'inline-block' }} key={i}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

// ─── 5. CharReveal — Character-by-character for display headings ─
export const CharReveal = ({ text, className = '', delay = 0 }) => {
  const reduced = useReducedMotion()
  const chars = text.split('')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: reduced ? 0 : 0.03, delayChildren: reduced ? 0 : delay }
    }
  }

  const child = {
    hidden:  { opacity: 0, y: reduced ? 0 : 30, rotateX: reduced ? 0 : -20 },
    visible: {
      opacity: 1, y: 0, rotateX: 0,
      transition: { duration: reduced ? 0 : 0.6, ease: EASE_PREMIUM }
    }
  }

  return (
    <motion.span
      style={{ display: 'inline-flex', flexWrap: 'wrap', perspective: '600px' }}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={child}
          style={{ display: 'inline-block', transformOrigin: 'bottom center', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

// ─── 6. StaggerContainer — wraps children with stagger ───────────
export const StaggerContainer = ({ children, className = '', stagger = 0.1, delay = 0 }) => {
  const reduced = useReducedMotion()
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show:   { opacity: 1, transition: { staggerChildren: reduced ? 0 : stagger, delayChildren: reduced ? 0 : delay } }
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── 7. StaggerItem — child of StaggerContainer ──────────────────
export const StaggerItem = ({ children, className = '' }) => {
  const reduced = useReducedMotion()
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : 32, filter: reduced ? 'blur(0px)' : 'blur(6px)' },
        show:   { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: reduced ? 0 : 0.8, ease: EASE_PREMIUM } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── 8. ParallaxSection — scroll-linked parallax wrapper ─────────
export const ParallaxSection = ({ children, speed = 0.3, className = '' }) => {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : [`${-speed * 100}%`, `${speed * 100}%`])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
