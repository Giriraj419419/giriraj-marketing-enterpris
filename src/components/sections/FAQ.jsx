import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from '../AnimatedText'
import { FiPlus, FiMinus } from 'react-icons/fi'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Our project timelines vary depending on complexity and scope. A standard enterprise web application typically takes 12-16 weeks from discovery to deployment. We work in 2-week agile sprints to ensure continuous delivery and feedback."
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer: "Yes, we offer comprehensive SLA-backed support packages. This includes 24/7 infrastructure monitoring, security patching, performance optimization, and dedicated engineering hours for continuous feature development."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern, high-performance stacks. On the frontend, we utilize React, Next.js, and Vue. For backend systems, we deploy Node.js, Go, or Python. Our infrastructure is typically orchestrated via Docker and Kubernetes on AWS or Azure."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "Security is foundational. We implement zero-trust architectures, end-to-end encryption, and rigorous automated security testing. We also ensure compliance with global standards including GDPR, HIPAA, and SOC2 depending on your industry requirements."
    },
    {
      question: "Can you integrate with our existing legacy systems?",
      answer: "Absolutely. A core part of our expertise involves developing custom middleware and API gateways to securely connect modern cloud applications with legacy on-premise infrastructure without disrupting your current operations."
    }
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-32 bg-[rgba(135,169,135,0.08)] relative overflow-hidden border-t border-[#E6E2DA]">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/3">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-border bg-white/70 backdrop-blur-sm shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary">FAQ</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 tracking-tight text-text-primary leading-[1.1]">
                 Common <br/> <span className="text-accent">Inquiries.</span>
               </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
               <p className="text-lg text-text-secondary font-medium leading-relaxed max-w-sm">
                 Everything you need to know about our engineering process, capabilities, and partnership models.
               </p>
            </FadeIn>
          </div>

          <div className="lg:w-2/3">
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index
                
                return (
                  <FadeIn key={index} delay={index * 0.05}>
                    <div 
                      className={`p-6 rounded-2xl border transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#F5F8F5] border-[#87A987]/30 shadow-sm' 
                          : 'bg-white border-[#87A987]/15 hover:border-[#87A987]/40 shadow-[0_4px_12px_rgba(61,82,61,0.02)]'
                      }`}
                    >
                      <button 
                        onClick={() => toggleAccordion(index)}
                        className="w-full py-4 flex items-center justify-between text-left group"
                      >
                        <span className={`text-lg md:text-xl font-heading font-bold pr-8 transition-colors duration-300 ${isActive ? 'text-accent' : 'text-text-primary group-hover:text-accent'}`}>
                          {faq.question}
                        </span>
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isActive ? 'bg-[#87A987] border-[#87A987] text-white' : 'border-border text-text-secondary group-hover:border-[#87A987] group-hover:text-[#87A987]'}`}>
                          {isActive ? <FiMinus size={16} /> : <FiPlus size={16} />}
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="pb-4 pt-2 text-base text-text-secondary leading-relaxed max-w-3xl pr-6">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </FadeIn>
                )
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default FAQ
