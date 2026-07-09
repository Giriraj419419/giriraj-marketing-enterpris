import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { MagneticButton } from '../MagneticButton'

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
)

const AnimatedCounter = ({ value, suffix = "", text }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [hasAnimated, setHasAnimated] = useState(false)
  const springValue = useSpring(0, { duration: 2000, bounce: 0 })
  const displayValue = useTransform(springValue, (current) => Math.floor(current))
  
  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated, springValue, value])

  return (
    <div ref={ref} className="flex flex-col border-l-2 border-border pl-6 py-2">
      <div className="flex items-baseline gap-1">
        <motion.span className="text-4xl lg:text-5xl font-heading font-extrabold text-white">
          {displayValue}
        </motion.span>
        <span className="text-4xl lg:text-5xl font-heading font-extrabold text-accent">{suffix}</span>
      </div>
      <span className="text-[12px] font-medium tracking-widest text-text-secondary uppercase mt-2">{text}</span>
    </div>
  )
}

const AboutPreview = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-border bg-card/30 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary">Who We Are</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-8 leading-[1.1] tracking-tight text-white">
                Redefining the <br/>
                standard for <span className="text-gradient-accent">digital</span><br/>
                <span className="text-gradient-accent">excellence.</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg text-text-secondary font-medium leading-relaxed mb-6 max-w-xl">
                We are an elite technology agency specializing in enterprise architecture, premium web experiences, and scalable infrastructure.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-lg text-text-muted font-medium leading-relaxed mb-12 max-w-xl">
                Our mission is to empower global enterprises with uncompromising quality, relentless innovation, and deep technical expertise. We value precision, speed, and absolute reliability.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="grid grid-cols-2 gap-8 mb-12">
               <AnimatedCounter value={15} suffix="+" text="Years Experience" />
               <AnimatedCounter value={500} suffix="+" text="Global Deployments" />
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <MagneticButton to="/about-us" variant="primary" className="py-3 px-8 text-[15px]">
                Discover Our Story
              </MagneticButton>
            </FadeIn>
          </div>

          {/* Right Column - Premium Visual */}
          <FadeIn delay={0.3} className="order-1 lg:order-2 relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-card border border-border group w-full">
            <div className="absolute inset-0 bg-noise opacity-30 mix-blend-screen pointer-events-none"></div>
            
            {/* Animated Gradient Mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-accent),_transparent_60%)] opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-1000"></div>
            
            {/* Premium Abstract Structure */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              
              <motion.div 
                className="w-64 h-64 border-[0.5px] border-white/20 rounded-full flex items-center justify-center relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute w-2 h-2 bg-accent rounded-full -top-1 shadow-[0_0_15px_rgba(124,58,237,1)]"></div>
                
                <motion.div 
                  className="w-48 h-48 border-[0.5px] border-white/10 rounded-full flex items-center justify-center relative"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                   <div className="absolute w-1.5 h-1.5 bg-white rounded-full -bottom-1 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                   
                   <div className="w-32 h-32 bg-gradient-to-tr from-accent/20 to-transparent rounded-full backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden">
                      <div className="w-full h-full bg-noise opacity-50 mix-blend-overlay"></div>
                   </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Overlay Glass Elements */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute top-10 right-10 bg-bg-secondary/60 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl"
            >
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
              <span className="block text-white font-medium text-[13px]">System Status</span>
              <span className="block text-accent font-bold text-[11px] tracking-widest uppercase mt-1">Operational</span>
            </motion.div>
            
          </FadeIn>

        </div>
      </div>
    </section>
  )
}

export default AboutPreview
