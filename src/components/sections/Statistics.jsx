import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
)

const AnimatedCounter = ({ value, suffix = "", prefix = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [hasAnimated, setHasAnimated] = useState(false)
  
  const springValue = useSpring(0, { duration: 2500, bounce: 0 })
  const displayValue = useTransform(springValue, (current) => {
    if (value % 1 !== 0) return current.toFixed(2)
    return Math.floor(current)
  })
  
  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated, springValue, value])

  return (
    <div ref={ref} className="flex items-baseline justify-center">
      <span className="text-4xl md:text-5xl font-heading font-extrabold text-text-primary">{prefix}</span>
      <motion.span className="text-5xl md:text-6xl font-heading font-extrabold text-text-primary tracking-tighter leading-none">
        {displayValue}
      </motion.span>
      <span className="text-4xl md:text-5xl font-heading font-extrabold text-accent">{suffix}</span>
    </div>
  )
}

const Statistics = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#FDFBF7] border-t border-[#E6E2DA]">
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full bg-[radial-gradient(ellipse_at_center,rgba(135,169,135,0.08)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-white/70 backdrop-blur-md mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-text-secondary">By The Numbers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-primary tracking-tight">
            Trusted. Certified. <span className="text-accent">Delivered.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-y md:divide-y-0 divide-[#87A987]/10 border border-[#87A987]/15 rounded-3xl overflow-hidden shadow-sm">
          <FadeIn delay={0.1} className="flex flex-col items-center justify-center py-16 px-8 bg-white/85 hover:bg-white transition-colors duration-500 text-center">
             <AnimatedCounter value={99.99} suffix="%" />
             <p className="mt-5 text-text-secondary uppercase tracking-[0.2em] font-bold text-[12px]">Uptime SLA Commitment</p>
             <p className="mt-2 text-[#748474] text-[13px] font-medium">Backed by enterprise-grade infrastructure</p>
          </FadeIn>
          <FadeIn delay={0.2} className="flex flex-col items-center justify-center py-16 px-8 bg-white/85 hover:bg-white transition-colors duration-500 text-center border-[#87A987]/10">
             <AnimatedCounter value={8} suffix="+" />
             <p className="mt-5 text-text-secondary uppercase tracking-[0.2em] font-bold text-[12px]">Authorized Technology Partnerships</p>
             <p className="mt-2 text-[#748474] text-[13px] font-medium">Microsoft, AWS, Adobe, Autodesk & more</p>
          </FadeIn>
          <FadeIn delay={0.3} className="flex flex-col items-center justify-center py-16 px-8 bg-white/85 hover:bg-white transition-colors duration-500 text-center">
             <AnimatedCounter value={24} suffix="/7" />
             <p className="mt-5 text-text-secondary uppercase tracking-[0.2em] font-bold text-[12px]">Expert Support Availability</p>
             <p className="mt-2 text-[#748474] text-[13px] font-medium">Dedicated engineers, always on call</p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default Statistics
