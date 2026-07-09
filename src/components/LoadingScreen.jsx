import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = ({ onComplete }) => {
  const [loadingText, setLoadingText] = useState('Initializing Giriraj Marketing...')
  
  useEffect(() => {
    const texts = [
      'Initializing Giriraj Marketing...',
      'Loading Digital Infrastructure...',
      'Connecting Enterprise Services...',
      'Almost Ready...'
    ]
    let currentIndex = 0
    
    const interval = setInterval(() => {
      currentIndex++
      if (currentIndex < texts.length) {
        setLoadingText(texts[currentIndex])
      }
    }, 800) // Change text every 800ms
    
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[9999] bg-bg-primary flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Soft Sage Green Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 0.4, 0.6, 0.4], scale: [0.8, 1.1, 1.3, 1.1] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        className="absolute w-[40vw] h-[40vw] bg-[#87A987]/15 rounded-full blur-[100px] pointer-events-none"
      />
      
      {/* Subtle Ambient Lighting */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 0.2, 0.4, 0.2], scale: [0.5, 1, 1.2, 1] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
        className="absolute w-[50vw] h-[50vw] bg-[#D4E7D4]/10 rounded-full blur-[120px] pointer-events-none translate-y-[20%]"
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Float & Fade In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [-5, 5, -5] }}
          transition={{ 
            opacity: { duration: 1, ease: 'easeOut' },
            y: { duration: 4, ease: 'easeInOut', repeat: Infinity }
          }}
          className="mb-14 relative"
        >
          {/* Subtle pulse behind logo */}
          <motion.div 
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[#87A987]/10 blur-xl rounded-full z-[-1]"
          />
          <img src="/logo.png" alt="Giriraj Marketing" className="h-32 md:h-48 lg:h-56 object-contain drop-shadow-sm" />
        </motion.div>

        {/* Premium Loading Ring */}
        <div className="relative w-12 h-12 mb-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-transparent border-t-[#87A987]/80 border-r-[#87A987]/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border border-transparent border-b-[#87A987]/60 border-l-[#87A987]/20"
          />
          <motion.div
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#87A987] rounded-full"
          />
        </div>

        {/* Animated Text */}
        <div className="h-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={loadingText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-text-secondary font-medium tracking-wide text-sm uppercase"
            >
              {loadingText}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
