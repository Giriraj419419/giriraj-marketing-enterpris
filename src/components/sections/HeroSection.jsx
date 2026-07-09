import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MagneticButton } from '../MagneticButton'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { BlurReveal } from '../AnimatedText'
import { FiArrowRight } from 'react-icons/fi'

const HeroSection = () => {
  const containerRef = useRef(null)
  const reduced = useReducedMotion()
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  
  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100vh] flex flex-col justify-center pt-36 pb-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FDFBF7 0%, #F5F8F5 50%, #D4E7D4 100%)'
      }}
    >
      {/* Soft gradient spotlight behind headline */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] h-[35vw] bg-[radial-gradient(circle,rgba(135,169,135,0.18)_0%,transparent_60%)] blur-[80px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none z-0" />

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Eyebrow badge */}
        <BlurReveal delay={0.1} className="mb-6">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#87A987]/25 bg-white/70 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#87A987] animate-pulse" />
            <span className="text-[12px] md:text-[13px] font-heading font-bold tracking-[0.25em] uppercase text-[#3D523D]">
              Enterprise IT Infrastructure & Software Licensing
            </span>
          </div>
        </BlurReveal>

        {/* Massive Typography */}
        <motion.div 
          style={reduced ? {} : { y: yText, opacity: opacityText }}
          className="max-w-[1200px] w-full flex flex-col items-center"
        >
          <h1 className="text-[52px] sm:text-[68px] md:text-[90px] lg:text-[115px] font-heading font-extrabold leading-[0.95] tracking-tighter text-[#3D523D] mb-6">
            <BlurReveal delay={0.2}>ENGINEERING</BlurReveal>
            <BlurReveal delay={0.3} className="text-[#87A987]">
              TRUSTED INFRASTRUCTURE.
            </BlurReveal>
          </h1>
          
          <BlurReveal delay={0.5} className="mt-4 mb-10 max-w-2xl">
            <p className="text-[18px] md:text-[21px] font-body text-[#556B55] leading-relaxed font-light">
              We deliver elite, high-performance technology services and software licensing solutions designed to scale modern enterprise operations and workspaces.
            </p>
          </BlurReveal>

          {/* CTA Buttons */}
          <BlurReveal delay={0.6} className="flex flex-col sm:flex-row items-center gap-5 mt-2 mb-16">
            <MagneticButton variant="primary" to="/contact-us">
              Book Consultation
            </MagneticButton>
            <MagneticButton variant="secondary" to="/services">
              Explore Services
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </BlurReveal>
        </motion.div>
      </div>

      {/* Floating Glass Card Visual Showcase */}
      <div className="container mx-auto px-6 relative z-10 flex justify-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          className="w-full relative rounded-3xl p-8 bg-white/65 backdrop-blur-[16px] border border-[#87A987]/15 shadow-[0_20px_50px_rgba(61,82,61,0.08)] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Decorative mesh blobs inside the card */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#D4E7D4]/40 rounded-full blur-2xl pointer-events-none z-0" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#87A987]/10 rounded-full blur-2xl pointer-events-none z-0" />

          <div className="flex-1 z-10 text-left">
            <div className="inline-block px-3 py-1 rounded-md bg-[#D4E7D4]/60 text-[#3D523D] font-heading font-bold text-xs uppercase tracking-wider mb-4">
              Infrastructure Platform
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#3D523D] tracking-tight">
              Enterprise Grade Cloud & Networking
            </h3>
            <p className="mt-3 text-sm text-[#556B55] leading-relaxed max-w-md">
              Secure your corporate workflow with certified cloud, software, and network modernization programs.
            </p>
          </div>

          <div className="shrink-0 z-10 flex gap-6 sm:gap-10 border-t md:border-t-0 md:border-l border-[#87A987]/15 pt-6 md:pt-0 md:pl-10 w-full md:w-auto">
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-heading font-extrabold text-[#3D523D]">
                99.9%
              </span>
              <span className="text-xs text-[#556B55] uppercase tracking-wider font-bold mt-1">
                SLA Guarantee
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-heading font-extrabold text-[#3D523D]">
                24/7
              </span>
              <span className="text-xs text-[#556B55] uppercase tracking-wider font-bold mt-1">
                Active Monitoring
              </span>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  )
}

export default HeroSection
