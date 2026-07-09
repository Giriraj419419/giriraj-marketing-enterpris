import { motion } from 'framer-motion'
import { FadeIn } from '../AnimatedText'

const VisionMission = () => {
  return (
    <section className="py-24 relative bg-bg-secondary/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <FadeIn delay={0.1} className="h-full">
            <div className="p-10 md:p-14 rounded-3xl bg-card/40 backdrop-blur-xl border border-white/5 relative overflow-hidden h-full flex flex-col justify-center group hover:border-accent/30 transition-colors duration-500">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 group-hover:bg-accent/20 transition-colors duration-700"></div>
               <h3 className="text-3xl font-heading font-extrabold text-white mb-6 tracking-tight relative z-10">Our Mission</h3>
               <p className="text-[16px] md:text-[17px] font-body text-text-secondary leading-relaxed relative z-10">
                 To empower businesses through innovative, secure, and scalable technology solutions that drive growth and operational excellence.
               </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="h-full">
            <div className="p-10 md:p-14 rounded-3xl bg-card/40 backdrop-blur-xl border border-white/5 relative overflow-hidden h-full flex flex-col justify-center group hover:border-accent-alt/30 transition-colors duration-500">
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-alt/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 group-hover:bg-accent-alt/20 transition-colors duration-700"></div>
               <h3 className="text-3xl font-heading font-extrabold text-white mb-6 tracking-tight relative z-10">Our Vision</h3>
               <p className="text-[16px] md:text-[17px] font-body text-text-secondary leading-relaxed relative z-10">
                 To become a trusted technology partner for organizations worldwide by delivering exceptional value, innovation, and customer success.
               </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}

export default VisionMission
