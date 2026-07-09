import { motion } from 'framer-motion'
import { FadeIn, TextReveal } from '../../components/AnimatedText'
import { MagneticButton } from '../../components/MagneticButton'
import { useMousePosition } from '../../hooks/useMousePosition'

const EnterpriseHero = () => {
  const mousePosition = useMousePosition()

  return (
    <section 
      className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-[#FDFBF7]"
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      }}
    >
      {/* Cinematic Spotlight Background System */}
      <div className="absolute inset-0 pointer-events-none z-0">
         {/* Mouse following volumetric fog */}
         <div 
           className="absolute w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(135,169,135,0.12)_0%,transparent_60%)] rounded-full blur-[100px] transition-transform duration-1000 ease-out"
           style={{
             transform: `translate(${mousePosition.x - 400}px, ${mousePosition.y - 400}px)`
           }}
         />
         {/* Static ambient shapes */}
         <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(135,169,135,0.08)_0%,transparent_70%)] blur-[120px]"></div>
         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(212,231,212,0.15)_0%,transparent_70%)] blur-[120px]"></div>
         
         <div className="absolute inset-0 bg-noise opacity-[0.02]"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl flex flex-col items-center">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-3 mb-10 px-4 py-2 rounded-full border border-[#87A987]/15 bg-white/70 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-100"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-[11px] font-body font-semibold tracking-widest uppercase text-[#3D523D]">Enterprise Ecosystem</span>
          </div>
        </FadeIn>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-8 tracking-tighter leading-[1.05] text-[#3D523D]">
          <TextReveal text="Enterprise Technology" />
          <br />
          <span className="text-accent"><TextReveal text="Solutions" delay={0.2} /></span>
        </h1>

        <FadeIn delay={0.4}>
          <p className="text-base md:text-lg text-[#556B55] max-w-2xl mx-auto mb-12 font-body font-light leading-relaxed">
            Empowering businesses with industry-leading software, cloud infrastructure, and zero-trust security. We architect scalable ecosystems that drive enterprise digital transformation.
          </p>
        </FadeIn>

        <FadeIn delay={0.6} className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <MagneticButton to="/contact-us" variant="primary" className="w-full sm:w-auto min-w-[200px]">
            Book Consultation
          </MagneticButton>
          <MagneticButton onClick={() => window.scrollTo({ top: 800, behavior: 'smooth'})} variant="secondary" className="w-full sm:w-auto min-w-[200px]">
            Explore Services
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  )
}

export default EnterpriseHero
