import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from '../../components/AnimatedText'
import { FiPlus, FiMinus } from 'react-icons/fi'

const ServicesFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "How long does a typical enterprise deployment take?",
      answer: "Deployment timelines vary based on scope. A standard Microsoft 365 or Azure migration typically takes 4-8 weeks, while full infrastructure deployments may take 12-16 weeks. We provide detailed roadmaps during the Planning phase."
    },
    {
      question: "Do you offer post-implementation support?",
      answer: "Yes, we provide 24/7 SLA-backed managed IT services. This includes proactive monitoring, security patching, helpdesk support, and continuous optimization of your new systems."
    },
    {
      question: "Are your licensing solutions genuine?",
      answer: "Absolutely. Giriraj Marketing is an authorized enterprise partner for Microsoft, AWS, Adobe, Autodesk, and ZWCAD. All licenses are 100% genuine and fully compliant with vendor requirements."
    },
    {
      question: "Can you integrate new solutions with our legacy systems?",
      answer: "Yes. Our engineering team specializes in creating hybrid environments. We securely connect modern cloud applications with legacy on-premise infrastructure without disrupting operations."
    },
    {
      question: "How do you ensure data security during migration?",
      answer: "We employ zero-trust security models and end-to-end encryption. All migrations follow stringent protocols to ensure zero data loss, zero downtime where possible, and strict compliance with industry regulations."
    },
    {
      question: "Do you provide training for our employees?",
      answer: "Yes, user adoption is critical. We provide comprehensive training sessions, documentation, and ongoing support to ensure your team can effectively utilize the new technology investments."
    }
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-[rgba(135,169,135,0.08)] relative overflow-hidden border-t border-[#E6E2DA]">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/3">
            <FadeIn>
               <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 tracking-tight text-[#3D523D]">
                 Frequently Asked <br/> <span className="text-accent">Questions.</span>
               </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[17px] font-body text-[#556B55] font-light leading-relaxed max-w-sm">
                Everything you need to know about our enterprise services, deployment methodologies, and long-term support.
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
                        <span className={`text-lg md:text-xl font-heading font-bold pr-8 transition-colors duration-300 ${isActive ? 'text-accent' : 'text-[#3D523D] group-hover:text-accent'}`}>
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
                            <p className="pb-4 pt-2 text-base text-text-secondary leading-relaxed max-w-3xl pr-6 font-light">
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

export default ServicesFAQ
