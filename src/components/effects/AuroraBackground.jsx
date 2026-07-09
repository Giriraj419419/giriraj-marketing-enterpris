import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useEffect, useState } from 'react'
import { useAurora } from '../../context/AuroraContext'

const AuroraBackground = () => {
  const reduced = useReducedMotion()
  const { intensity, theme, mousePosition } = useAurora()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#FDFBF7] select-none">
      
      {/* ── Layer 5: Subtle Grid Pattern ── */}
      <motion.div 
        animate={{ opacity: 0.3 * intensity }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(61, 82, 61, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(61, 82, 61, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)'
        }}
      />
      {/* ── Layer 1 & 4: Aurora Waves & Gradient Glows ── */}
      <motion.div 
        animate={{ opacity: 0.6 * intensity }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 filter blur-[120px] will-change-transform"
      >
        {/* Sage Green Wave */}
        <motion.div
          animate={reduced ? {} : {
            x: mousePosition.x * -20,
            y: mousePosition.y * -20,
            transform: [
              'translate(0%, 0%) scale(1) rotate(0deg)',
              'translate(15%, -10%) scale(1.1) rotate(15deg)',
              'translate(-10%, 15%) scale(0.9) rotate(-5deg)',
              'translate(0%, 0%) scale(1) rotate(0deg)',
            ],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vh] rounded-full"
          style={{ background: 'radial-gradient(ellipse at center, rgba(135, 169, 135, 0.2) 0%, transparent 70%)' }}
        />
        
        {/* Soft Pistachio Wave */}
        <motion.div
          animate={reduced ? {} : {
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
            transform: [
              'translate(0%, 0%) scale(1) rotate(0deg)',
              'translate(-20%, 20%) scale(1.15) rotate(-20deg)',
              'translate(15%, -15%) scale(0.95) rotate(10deg)',
              'translate(0%, 0%) scale(1) rotate(0deg)',
            ],
          }}
          transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-[10%] right-[-10%] w-[60vw] h-[80vh] rounded-full"
          style={{ background: 'radial-gradient(ellipse at center, rgba(212, 231, 212, 0.25) 0%, transparent 70%)' }}
        />

        {/* Highlight Wave */}
        <motion.div
          animate={reduced ? {} : {
            x: mousePosition.x * 25,
            y: mousePosition.y * 25,
            transform: [
              'translate(0%, 0%) scale(1)',
              'translate(25%, 25%) scale(1.2)',
              'translate(-15%, -10%) scale(0.8)',
              'translate(0%, 0%) scale(1)',
            ],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          className="absolute bottom-[-10%] left-[10%] w-[50vw] h-[60vh] rounded-full"
          style={{ background: 'radial-gradient(ellipse at center, rgba(135, 169, 135, 0.15) 0%, transparent 60%)' }}
        />

        {/* Soft Shadow Wave (for depth) */}
        <motion.div
          animate={reduced ? {} : {
            x: mousePosition.x * 15,
            y: mousePosition.y * 15,
            transform: [
              'translate(0%, 0%) scale(1)',
              'translate(-15%, -25%) scale(1.1)',
              'translate(20%, 10%) scale(0.9)',
              'translate(0%, 0%) scale(1)',
            ],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
          className="absolute bottom-[10%] right-[10%] w-[55vw] h-[65vh] rounded-full mix-blend-multiply opacity-30"
          style={{ background: 'radial-gradient(ellipse at center, rgba(96, 112, 96, 0.1) 0%, transparent 70%)' }}
        />
      </motion.div>

      {/* ── Layer 3: Floating Particles ── */}
      {!reduced && (
        <motion.div 
          animate={{ opacity: 0.2 * intensity }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] bg-[#87A987] rounded-full shadow-[0_0_8px_2px_rgba(135,169,135,0.4)]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -Math.random() * 100 - 50],
                x: [0, mousePosition.x * 50],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 10,
              }}
            />
          ))}
        </motion.div>
      )}

      {/* ── Layer 2: Noise Texture ── */}
      <motion.div 
        animate={{ opacity: 0.04 * intensity }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
    </div>
  )
}

export default AuroraBackground;
