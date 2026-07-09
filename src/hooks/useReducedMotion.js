import { useEffect, useState } from 'react'

/**
 * useReducedMotion — Returns true if the user prefers reduced motion.
 * Feed this into animation components to disable/simplify animations
 * for accessibility compliance (WCAG 2.3.3).
 */
export const useReducedMotion = () => {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e) => setPrefersReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return prefersReduced
}
