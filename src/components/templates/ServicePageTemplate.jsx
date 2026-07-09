import { FadeIn, TextReveal, StaggerContainer, StaggerItem, BlurReveal } from '../AnimatedText'
import ContactCTA from '../sections/ContactCTA'
import { FiCheck, FiArrowRight, FiChevronDown } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import AuroraSection from '../effects/AuroraSection'

const PremiumCard = ({ children, className = '' }) => {
  const [hovered, setHovered] = useState(false)
  const reduced = useReducedMotion()

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={reduced ? {} : {
        y: hovered ? -6 : 0,
        boxShadow: hovered 
          ? '0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(37,99,235,0.4)' 
          : '0 2px 20px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.04)'
      }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`relative p-8 bg-card/40 backdrop-blur-2xl rounded-[24px] overflow-hidden group ${className}`}
    >
      <motion.div 
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 pointer-events-none rounded-[24px]"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 65%)' }}
      />
      <motion.div 
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-8 right-8 h-[1px] rounded-full origin-left"
        style={{ background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.5), transparent)' }}
      />
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  )
}

/**
 * ServicePageTemplate (10-Section Enterprise Architecture)
 * Props:
 * 1. title, subtitle, heroTechIcons (array of components)
 * 2. solutionBenefits (array of {title, desc, icon})
 * 3. overview (string)
 * 4. features (array of {title, desc, icon})
 * 5. industries (array of {name, icon})
 * 6. companyServices (array of {title, desc, icon})
 * 7. process (array of {step, title, desc})
 * 8. whyChooseUs (array of {title, desc, icon})
 * 9. faqs (array of {q, a})
 */
const ServicePageTemplate = ({
  title,
  subtitle,
  heroTechIcons = [],
  solutionBenefits = [],
  overview,
  features = [],
  industries = [],
  companyServices = [],
  process = [],
  whyChooseUs = [],
  faqs = []
}) => {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <AuroraSection intensity={0.6} theme="default" className="min-h-screen bg-bg-primary text-text-primary pt-24 pb-0 overflow-hidden">
      
      {/* 1. Flagship Hero */}
      <section className="relative py-24 md:py-40 overflow-hidden border-b border-border min-h-[90vh] flex items-center">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-screen pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.12)_0%,transparent_60%)] rounded-full pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(124,58,237,0.05)_0%,transparent_60%)] rounded-full pointer-events-none z-0"></div>
        
        {/* Floating Tech Icons */}
        {heroTechIcons.length > 0 && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
            {heroTechIcons.map((Icon, idx) => {
               // Randomize positions based on index
               const positions = [
                 { top: '20%', left: '10%' },
                 { top: '40%', right: '15%' },
                 { bottom: '25%', left: '20%' },
                 { bottom: '30%', right: '25%' }
               ];
               const pos = positions[idx % positions.length];
               return (
                 <motion.div 
                   key={idx}
                   animate={{ y: [-20, 20], opacity: [0.5, 1, 0.5] }} 
                   transition={{ duration: 5 + idx, repeat: Infinity, ease: "easeInOut", delay: idx }}
                   className={`absolute w-16 h-16 bg-card border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center justify-center text-accent`}
                   style={pos}
                 >
                   <Icon size={24} />
                 </motion.div>
               )
            })}
          </div>
        )}

        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-border bg-card/30 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-text-secondary">Enterprise Service</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold uppercase tracking-tighter mb-6 text-white leading-[1.1] max-w-5xl mx-auto">{title}</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-accent font-heading font-bold tracking-widest uppercase mb-12">{subtitle}</p>
          </FadeIn>
          <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-6 justify-center">
             <button className="px-8 py-4 bg-white text-bg-primary font-heading font-bold uppercase tracking-widest text-sm rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]">
                Book Consultation
             </button>
             <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-heading font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/5 hover:border-white transition-all duration-300">
                Explore Features
             </button>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <FadeIn delay={0.8} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-text-muted">Explore</span>
          <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-accent"
              animate={{ top: ['-50%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </FadeIn>
      </section>

      {/* 2. Why Choose This Solution */}
      {solutionBenefits.length > 0 && (
        <section className="py-24 bg-bg-secondary relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_30%,transparent_100%)] pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10">
            <BlurReveal>
              <h3 className="text-sm font-heading font-bold tracking-[0.2em] uppercase text-accent mb-12 flex items-center justify-center gap-4">
                <span className="w-8 h-[1px] bg-accent"></span>
                Business Value
                <span className="w-8 h-[1px] bg-accent"></span>
              </h3>
            </BlurReveal>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutionBenefits.map((ben, i) => (
                <StaggerItem key={i} className="h-full">
                   <PremiumCard className="h-full">
                     <motion.div 
                       whileHover={{ scale: 1.1, rotate: 5, backgroundColor: 'rgba(37,99,235,0.2)' }}
                       className="w-12 h-12 rounded-2xl bg-accent/10 border border-white/5 flex items-center justify-center text-accent mb-6 transition-colors duration-400 shrink-0"
                     >
                       {ben.icon && <ben.icon size={20} />}
                     </motion.div>
                     <h4 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-accent transition-colors">{ben.title}</h4>
                     <p className="text-text-secondary font-medium leading-relaxed">{ben.desc}</p>
                   </PremiumCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* 3. Product Overview */}
      {overview && (
        <section className="py-24 relative border-y border-border">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none z-0"></div>
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <FadeIn>
              <h2 className="text-4xl font-heading font-extrabold mb-8 text-white tracking-tight">Platform Overview</h2>
              <div className="text-xl text-text-secondary leading-relaxed font-medium space-y-6">
                 {overview}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* 4. Key Features */}
      {features.length > 0 && (
        <section className="py-24 bg-bg-secondary relative">
          <div className="container mx-auto px-6 relative z-10">
            <BlurReveal>
              <h2 className="text-4xl font-heading font-extrabold mb-16 text-center text-white tracking-tight">Key Capabilities</h2>
            </BlurReveal>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {features.map((feat, i) => (
                <StaggerItem key={i} className="h-full">
                   <PremiumCard className="h-full !p-8 !flex !flex-row !gap-6">
                     <motion.div 
                       whileHover={{ scale: 1.1, rotate: 5, backgroundColor: 'rgba(37,99,235,0.2)' }}
                       className="mt-1 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:text-accent transition-colors duration-400"
                     >
                       {feat.icon && <feat.icon size={20} />}
                     </motion.div>
                     <div>
                       <h4 className="text-[22px] font-heading font-bold text-white mb-2">{feat.title}</h4>
                       <p className="text-text-secondary font-medium leading-relaxed">{feat.desc}</p>
                     </div>
                   </PremiumCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* 5. Industry Applications */}
      {industries.length > 0 && (
        <section className="py-24 relative border-y border-border">
          <div className="container mx-auto px-6 text-center relative z-10">
            <FadeIn>
              <h3 className="text-sm font-heading font-bold tracking-[0.2em] uppercase text-text-muted mb-12">Industries Empowered</h3>
            </FadeIn>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((ind, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="px-8 py-4 bg-card/60 backdrop-blur-sm border border-white/5 rounded-full text-white font-heading font-bold uppercase tracking-wider text-[13px] hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 cursor-default shadow-md hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] flex items-center gap-3">
                    {ind.icon && <ind.icon size={14} />}
                    {ind.name}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Giriraj Marketing Services (How we help) */}
      {companyServices.length > 0 && (
        <section className="py-24 bg-bg-secondary relative">
          <div className="container mx-auto px-6 relative z-10">
            <FadeIn>
               <h2 className="text-4xl font-heading font-extrabold mb-6 text-center text-white tracking-tight">Our Expertise</h2>
               <p className="text-lg text-text-secondary text-center mb-16 max-w-2xl mx-auto">We provide end-to-end support to ensure you maximize the value of this platform.</p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyServices.map((service, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="p-8 border border-white/5 rounded-[24px] bg-card/40 hover:border-accent/30 transition-all duration-500 h-full">
                    <h4 className="text-xl font-heading font-bold text-white mb-3">{service.title}</h4>
                    <p className="text-text-secondary font-medium leading-relaxed">{service.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Implementation Process */}
      {process.length > 0 && (
        <section className="py-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none z-0"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h3 className="text-sm font-heading font-bold tracking-[0.2em] uppercase text-accent mb-6 flex justify-center items-center gap-3">
                <span className="w-6 h-[1px] bg-accent"></span>
                Deployment Strategy
                <span className="w-6 h-[1px] bg-accent"></span>
              </h3>
              <h4 className="text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">Implementation Timeline</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="p-10 bg-card/40 backdrop-blur-xl border border-white/5 rounded-[32px] h-full relative group overflow-hidden hover:border-accent/40 transition-all duration-500 shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(37,99,235,0.15)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <div className="absolute top-0 right-6 -translate-y-4 text-accent/10 font-heading text-8xl font-extrabold group-hover:text-accent/20 transition-colors duration-500 pointer-events-none select-none">
                      {step.step}
                    </div>
                    <h5 className="text-2xl font-heading font-bold text-white mb-4 pt-8 group-hover:text-accent transition-colors duration-300 tracking-tight relative z-10">{step.title}</h5>
                    <p className="text-text-secondary font-medium leading-relaxed relative z-10">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Why Choose Giriraj Marketing */}
      {whyChooseUs.length > 0 && (
        <section className="py-24 bg-bg-secondary border-t border-border relative">
          <div className="container mx-auto px-6 relative z-10">
             <FadeIn>
               <h2 className="text-4xl font-heading font-extrabold mb-16 text-center text-white tracking-tight">Why Partner With Us</h2>
             </FadeIn>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyChooseUs.map((item, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                     <div className="flex flex-col items-center text-center p-6 bg-card/30 border border-white/5 rounded-[24px] hover:border-accent/40 transition-colors h-full group">
                       <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                          {item.icon && <item.icon size={20} />}
                       </div>
                       <h4 className="text-lg font-heading font-bold text-white mb-2">{item.title}</h4>
                       <p className="text-sm text-text-secondary font-medium">{item.desc}</p>
                     </div>
                  </FadeIn>
                ))}
             </div>
          </div>
        </section>
      )}

      {/* 9. FAQs */}
      {faqs.length > 0 && (
        <section className="py-32 relative">
          <div className="container mx-auto px-6 max-w-3xl relative z-10">
            <FadeIn>
              <h2 className="text-4xl font-heading font-extrabold mb-12 text-center text-white tracking-tight">Frequently Asked Questions</h2>
            </FadeIn>
            <div className="space-y-4">
               {faqs.map((faq, i) => (
                 <FadeIn key={i} delay={i * 0.1}>
                   <div className="border border-white/10 bg-card/40 backdrop-blur-md rounded-2xl overflow-hidden">
                     <button 
                       onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                       className="w-full text-left px-8 py-6 flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none"
                     >
                       <span className="font-heading font-bold text-white pr-8">{faq.q}</span>
                       <FiChevronDown className={`text-accent transform transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} size={20} />
                     </button>
                     <AnimatePresence>
                       {openFaq === i && (
                         <motion.div
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: 'auto', opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           transition={{ duration: 0.3 }}
                         >
                           <div className="px-8 pb-6 text-text-secondary font-medium">
                             {faq.a}
                           </div>
                         </motion.div>
                       )}
                     </AnimatePresence>
                   </div>
                 </FadeIn>
               ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. Final Consultation CTA */}
      <ContactCTA />

    </AuroraSection>
  )
}

export default ServicePageTemplate
