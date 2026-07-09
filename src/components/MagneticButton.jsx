import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useReducedMotion } from '../hooks/useReducedMotion'

export const MagneticButton = ({ children, to, onClick, className = '', variant = 'primary' }) => {
  const buttonRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const reduced = useReducedMotion()

  const handleMouse = (e) => {
    if (reduced) return
    const { clientX, clientY } = e
    const { height, width, left, top } = buttonRef.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const variants = {
    primary: {
      base: 'bg-[#87A987] text-white font-bold border border-transparent shadow-[0_8px_24px_rgba(135,169,135,0.18)] hover:bg-[#6F8E6F] rounded-[14px]',
      glow: 'rgba(135,169,135,0.3)',
      ring: 'rgba(135,169,135,0.2)',
    },
    secondary: {
      base: 'bg-[#D4E7D4] text-[#3D523D] border border-transparent hover:bg-[#C7DFC7] font-semibold rounded-[14px]',
      glow: 'rgba(135,169,135,0.15)',
      ring: 'rgba(135,169,135,0.1)',
    },
    accent: {
      base: 'bg-transparent border border-[#87A987] text-[#87A987] hover:bg-[#87A987] hover:text-white font-bold rounded-[14px]',
      glow: 'rgba(135,169,135,0.25)',
      ring: 'rgba(135,169,135,0.15)',
    },
  }

  const v = variants[variant] || variants.primary

  const Content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={reset}
      animate={{
        x: position.x,
        y: position.y,
        boxShadow: isHovered && !reduced
          ? `0 0 0 2px ${v.ring}, 0 8px 32px ${v.glow}`
          : `0 0 0 0px transparent, 0 2px 8px rgba(61,82,61,0.04)`,
      }}
      whileTap={{ scale: reduced ? 1 : 0.96 }}
      transition={{ type: 'spring', stiffness: 180, damping: 16, mass: 0.1 }}
      className={`
        group relative inline-flex items-center justify-center
        px-10 py-5 rounded-[14px] font-body text-[16px] tracking-wide
        min-w-[220px] min-h-[60px]
        overflow-hidden cursor-pointer select-none
        transition-all duration-300
        ${v.base} ${className}
      `}
    >
      {/* Glass shimmer sweep */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)',
          backgroundSize: '250% 100%',
        }}
        animate={isHovered && !reduced
          ? { backgroundPosition: ['200% center', '-100% center'] }
          : { backgroundPosition: '200% center' }
        }
        transition={{ duration: 0.65, ease: 'easeInOut' }}
      />

      {/* Glow spot that follows the sweep */}
      {isHovered && !reduced && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 0.65 }}
          className="absolute inset-0 z-0 pointer-events-none rounded-[14px]"
          style={{ background: `radial-gradient(ellipse at center, ${v.glow} 0%, transparent 70%)` }}
        />
      )}

      <span className="relative z-10 pointer-events-none flex items-center gap-2">
        {children}
      </span>
    </motion.div>
  )

  if (to) {
    if (to.startsWith('http') || to.startsWith('tel:') || to.startsWith('mailto:')) {
      return (
        <a href={to} target="_blank" rel="noopener noreferrer" className="inline-block" onClick={onClick}>
          {Content}
        </a>
      )
    }
    return (
      <Link to={to} className="inline-block" onClick={onClick}>
        {Content}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className="focus:outline-none">
      {Content}
    </button>
  )
}
