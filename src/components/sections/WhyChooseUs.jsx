import { motion } from 'framer-motion'
import { FiCheckCircle, FiStar, FiGitMerge, FiTarget, FiTrendingUp, FiZap } from 'react-icons/fi'
import { useMousePosition } from '../../hooks/useMousePosition'

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

const features = [
  { icon: <FiCheckCircle size={24} />, title: 'Genuine Licensing', desc: 'Authorized software procurement and compliance.' },
  { icon: <FiStar size={24} />, title: 'Enterprise Expertise', desc: 'Experienced professionals delivering business-focused technology solutions.' },
  { icon: <FiGitMerge size={24} />, title: 'End-to-End Services', desc: 'Consultation, deployment, migration, training, and support.' },
  { icon: <FiTarget size={24} />, title: 'Trusted Technology Partners', desc: 'Solutions backed by industry-leading global technology providers.' },
  { icon: <FiTrendingUp size={24} />, title: 'Scalable Infrastructure', desc: 'Technology designed to grow alongside your business.' },
  { icon: <FiZap size={24} />, title: 'Dedicated Support', desc: 'Reliable assistance throughout your technology journey.' }
]

const WhyChooseUs = () => {
  const mousePosition = useMousePosition()

  return (
    <section className="py-32 relative bg-[rgba(212,231,212,0.25)] overflow-hidden border-y border-[#E6E2DA]">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 tracking-tight text-text-primary">
              Why Choose <span className="text-accent">Giriraj Marketing</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div 
                className="group relative p-8 spotlight-card rounded-[24px] bg-white/75 backdrop-blur-md border border-[#87A987]/15 hover:border-accent transition-all duration-500 h-full shadow-[0_10px_30px_rgba(61,82,61,0.04)] hover:-translate-y-1.5"
                style={{
                  '--mouse-x': `${mousePosition.x}px`,
                  '--mouse-y': `${mousePosition.y}px`,
                }}
              >
                <div className="spotlight-border"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#D4E7D4] border border-[#87A987]/20 flex items-center justify-center text-[#87A987] group-hover:bg-[#87A987] group-hover:text-white transition-all duration-300 mb-6 shadow-inner">
                    {feature.icon}
                  </div>
                  <h3 className="text-[20px] font-heading font-bold text-text-primary mb-3">{feature.title}</h3>
                  <p className="text-[15px] font-body text-text-secondary leading-relaxed">{feature.desc}</p>
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
