import { motion } from 'framer-motion'
import { FadeIn } from '../../components/AnimatedText'
import { MagneticButton } from '../../components/MagneticButton'

const ServicesCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-transparent border-t border-[#E6E2DA]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-[#87A987] to-[#A8C3A8] rounded-[32px] p-16 md:p-24 shadow-2xl relative overflow-hidden">
          
          <div className="absolute inset-0 bg-white/[0.03] pointer-events-none"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          <FadeIn>
            <div className="flex justify-center mb-6">
              <img src="/logo.png" alt="Giriraj Marketing" className="h-16 md:h-24 object-contain drop-shadow-md scale-[1.3]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold mb-8 tracking-tighter text-white leading-tight">
              Ready to <span className="text-[#D4E7D4]">Modernize</span><br className="hidden md:block" /> Your Business?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-[17px] text-white/90 mb-14 max-w-2xl mx-auto font-body font-light leading-relaxed">
              Partner with Giriraj Marketing for enterprise licensing, cloud solutions, infrastructure deployment, and long-term technology success.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-20">
            <MagneticButton to="/contact-us" variant="primary" className="bg-white text-[#3D523D] hover:bg-white/90 shadow-lg w-full sm:w-auto min-w-[200px]">
              Book Consultation
            </MagneticButton>
            <MagneticButton to="/contact-us" variant="secondary" className="bg-transparent border border-white/30 text-white hover:bg-white/10 w-full sm:w-auto min-w-[200px]">
              Contact Experts
            </MagneticButton>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default ServicesCTA
