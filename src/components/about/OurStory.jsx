import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FadeIn } from '../AnimatedText'

const milestones = [
  {
    year: 'Establishment',
    title: 'The Foundation',
    desc: 'Founded with a clear vision: to bridge the gap between complex enterprise technologies and businesses needing scalable, reliable IT solutions.'
  },
  {
    year: 'Commitment',
    title: 'Customer Success',
    desc: 'We shifted focus entirely to creating long-term value, moving away from transactional sales to acting as a dedicated strategic technology partner.'
  },
  {
    year: 'Evolution',
    title: 'Continuous Innovation',
    desc: 'Expanding our ecosystem to include cloud architectures, zero-trust security models, and cutting-edge deployment methodologies.'
  }
]

const OurStory = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={containerRef} className="py-32 relative bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        <div className="text-center mb-24">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 tracking-tight">Our Journey</h2>
            <p className="text-[17px] font-body text-text-secondary max-w-2xl mx-auto">
              A story of passion for technology, continuous innovation, and an unwavering commitment to building long-term partnerships.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Vertical Line Background */}
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5 z-0"></div>
          
          {/* Vertical Line Progress */}
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] z-0 flex justify-center">
            <motion.div 
              className="w-full bg-gradient-to-b from-accent to-accent-alt origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-16">
            {milestones.map((item, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={i} className={`relative z-10 flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}>
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                    <FadeIn delay={0.2}>
                      <span className="text-accent font-heading font-bold tracking-widest text-[13px] uppercase mb-2 block">{item.year}</span>
                      <h3 className="text-2xl font-heading font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                      <p className="text-[15px] font-body text-text-secondary leading-relaxed p-6 rounded-2xl bg-card/40 border border-white/5 backdrop-blur-md">
                        {item.desc}
                      </p>
                    </FadeIn>
                  </div>

                  {/* Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-14 h-14 rounded-full bg-bg-primary border-4 border-card flex items-center justify-center z-20">
                     <div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(37,99,235,1)]"></div>
                  </div>
                  
                  {/* Spacer */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
