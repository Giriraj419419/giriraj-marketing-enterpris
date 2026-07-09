import { motion } from 'framer-motion'
import { FadeIn } from '../AnimatedText'
import { MagneticButton } from '../MagneticButton'
import { useMousePosition } from '../../hooks/useMousePosition'

const AboutCTA = () => {
  const mousePosition = useMousePosition()

  return (
    <section className="py-32 relative bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        <FadeIn>
          <div 
            className="group relative p-12 md:p-20 spotlight-card rounded-[32px] bg-card/60 backdrop-blur-2xl border border-white/10 text-center overflow-hidden"
            style={{
              '--mouse-x': `${mousePosition.x}px`,
              '--mouse-y': `${mousePosition.y}px`,
            }}
          >
            <div className="spotlight-border"></div>
            
            {/* Inner ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none group-hover:bg-accent/30 transition-colors duration-700"></div>

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 text-white tracking-tight leading-tight">
                Let's Build the <span className="text-gradient-accent">Future</span> Together
              </h2>
              
              <p className="text-[16px] md:text-[18px] font-body text-text-secondary leading-relaxed max-w-2xl mb-12">
                Whether you're exploring cloud solutions, enterprise licensing, infrastructure modernization, or digital transformation initiatives, Giriraj Marketing is ready to help you achieve your goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                <MagneticButton to="/contact-us" variant="primary" className="w-full sm:w-auto min-w-[200px]">
                  Book Free Consultation
                </MagneticButton>
                <MagneticButton to="/contact-us" variant="secondary" className="w-full sm:w-auto min-w-[200px]">
                  Contact Us Today
                </MagneticButton>
              </div>
            </div>
          </div>
        </FadeIn>
        
      </div>
    </section>
  )
}

export default AboutCTA
