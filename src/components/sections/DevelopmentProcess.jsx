import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FadeIn } from '../AnimatedText'

const DevelopmentProcess = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // Spring animation for smoother line growth
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const steps = [
    { num: '01', title: 'Strategic Discovery', desc: 'We align on business objectives, audit existing infrastructure, and define the technical scope and ROI.' },
    { num: '02', title: 'Architecture Design', desc: 'Crafting the blueprint, from cloud topology to zero-trust security and data pipelines.' },
    { num: '03', title: 'Enterprise Engineering', desc: 'Developing robust, scalable, and secure systems using cutting-edge technologies.' },
    { num: '04', title: 'Quality Assurance', desc: 'Rigorous automated testing, security penetration, and load testing to ensure absolute reliability.' },
    { num: '05', title: 'Deployment & Scaling', desc: 'Seamless CI/CD deployment with 24/7 continuous monitoring and proactive scaling.' }
  ]

  return (
    <section ref={containerRef} className="py-32 relative bg-[rgba(212,231,212,0.25)] overflow-hidden border-y border-[#E6E2DA]">
      
      {/* Background Glows */}
      <div className="absolute left-0 top-1/3 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(135,169,135,0.1)_0%,transparent_60%)] rounded-full pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-32 max-w-3xl mx-auto flex flex-col items-center">
           <FadeIn>
             <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-border bg-white/70 backdrop-blur-md shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-text-secondary">Implementation Workflow</span>
              </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 tracking-tight text-text-primary leading-[1.1]">
              The <span className="text-accent">Framework</span><br/>for success.
            </h2>
          </FadeIn>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Timeline Line (Background) */}
          <div className="absolute top-0 bottom-0 left-[27px] md:left-1/2 md:-translate-x-1/2 w-[1px] bg-border z-0"></div>
          
          {/* Animated Timeline Line (Foreground) */}
          <div className="absolute top-0 bottom-0 left-[27px] md:left-1/2 md:-translate-x-1/2 w-[2px] bg-gradient-to-b from-[#87A987] to-[#A8C3A8] z-0 origin-top" style={{ transform: 'scaleY(0)' }}>
            <motion.div 
              className="w-full h-full bg-gradient-to-b from-[#87A987] to-[#A8C3A8] origin-top"
              style={{ scaleY }}
            />
          </div>

          <div className="space-y-24">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={i} className={`relative z-10 flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-10 md:gap-20`}>
                  
                  {/* Step Content */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                    <FadeIn delay={0.2} className="relative group">
                      <div className="p-8 md:p-10 bg-white/75 backdrop-blur-md border border-[#87A987]/15 rounded-[32px] hover:border-accent hover:bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(61,82,61,0.08)] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                           <div className={`hidden md:flex text-6xl font-heading font-extrabold text-text-primary/10 ${!isEven ? 'md:order-2' : ''} group-hover:text-accent/20 transition-colors duration-500`}>
                             {step.num}
                           </div>
                           <div className={!isEven ? 'md:order-1 w-full' : 'w-full'}>
                              <h4 className="text-xl md:text-2xl font-heading font-extrabold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300 tracking-tight">{step.title}</h4>
                              <p className="text-text-secondary font-medium leading-relaxed text-left">{step.desc}</p>
                           </div>
                        </div>
                      </div>
                    </FadeIn>
                  </div>

                  {/* Step Number Dot / Orb */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 w-14 h-14 bg-white border-2 border-[#87A987] rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(61,82,61,0.08)] z-20">
                     <motion.div 
                        className="w-3 h-3 bg-[#87A987] rounded-full shadow-inner"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                     />
                  </div>
                  
                  {/* Empty Spacer */}
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

export default DevelopmentProcess
