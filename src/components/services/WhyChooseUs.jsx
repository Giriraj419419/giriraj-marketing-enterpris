import { motion } from 'framer-motion'
import { FiShield, FiZap, FiTarget, FiHeadphones, FiCheckCircle, FiUsers, FiCloud } from 'react-icons/fi'

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

const WhyChooseUs = () => {
  const features = [
    { title: 'Certified Experts', desc: 'Industry-certified engineers and architects ensuring best-in-class solutions.', icon: <FiCheckCircle size={24} /> },
    { title: 'Genuine Licensing', desc: 'Authorized partner for Microsoft, Adobe, and Autodesk enterprise licensing.', icon: <FiShield size={24} /> },
    { title: 'Enterprise Deployment', desc: 'Flawless rollouts of complex software and cloud infrastructures.', icon: <FiZap size={24} /> },
    { title: 'Dedicated Support', desc: '24/7 technical support from our global operations center.', icon: <FiHeadphones size={24} /> },
    { title: 'Long-Term Partnership', desc: 'We align with your business goals to foster long-term mutual growth.', icon: <FiUsers size={24} /> },
    { title: 'Scalable Infrastructure', desc: 'Cloud and enterprise solutions that grow seamlessly with your organization.', icon: <FiCloud size={24} /> },
    { title: 'Fast Response', desc: 'Industry-leading SLA response times for mission-critical issues.', icon: <FiZap size={24} /> },
    { title: 'Strategic Consulting', desc: 'IT roadmaps and digital transformation strategies tailored to your industry.', icon: <FiTarget size={24} /> }
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-[#FDFBF7] border-t border-b border-[#E6E2DA]">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 tracking-tight text-[#3D523D]">
              Why Businesses Choose <br/><span className="text-accent">Giriraj Marketing</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[17px] text-[#556B55] font-body leading-relaxed font-light">
              We deliver more than technology; we deliver reliability, scalable growth, and unwavering support.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <FadeIn key={i} delay={0.05 * i} className="h-full">
              <div 
                className="group relative p-7 bg-white/65 border border-[#87A987]/12 shadow-sm hover:border-accent hover:-translate-y-1.5 transition-all duration-300 rounded-[24px] backdrop-blur-md h-full min-h-[280px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#D4E7D4] border border-[#87A987]/20 flex items-center justify-center text-[#87A987] group-hover:bg-[#87A987] group-hover:text-white transition-all duration-300 mb-6">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-[19px] font-heading font-bold text-[#3D523D] mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-[#556B55] leading-relaxed font-body font-light">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
