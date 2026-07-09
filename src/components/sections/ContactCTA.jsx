import { motion } from 'framer-motion'
import { MagneticButton } from '../MagneticButton'

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

const ContactCTA = () => {
  return (
    <section className="py-32 relative bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        <FadeIn>
          <div 
            className="group relative p-12 md:p-20 rounded-[32px] bg-gradient-to-br from-[#87A987] to-[#A8C3A8] text-center overflow-hidden shadow-2xl"
          >
            {/* Inner ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center">
              <img src="/logo.png" alt="Giriraj Marketing" className="h-16 md:h-24 mb-6 object-contain drop-shadow-md scale-[1.3]" />
              <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 text-white tracking-tighter leading-[1.0]">
                Ready to Transform Your <br className="hidden md:block"/><span className="text-[#D4E7D4]">Business?</span>
              </h2>
              
              <p className="text-[17px] md:text-[19px] font-body text-white/90 leading-relaxed max-w-2xl mb-12 font-light">
                Connect with Giriraj Marketing to discover technology solutions tailored to your organization's goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                <MagneticButton to="/contact-us" variant="primary" className="bg-white text-[#3D523D] hover:bg-white/90 shadow-lg w-full sm:w-auto min-w-[200px]">
                  Book Free Consultation
                </MagneticButton>
                <MagneticButton to="/services" variant="secondary" className="bg-transparent border border-white/30 text-white hover:bg-white/10 w-full sm:w-auto min-w-[200px]">
                  Explore Services
                </MagneticButton>
              </div>
            </div>
          </div>
        </FadeIn>
        
      </div>
    </section>
  )
}

export default ContactCTA
