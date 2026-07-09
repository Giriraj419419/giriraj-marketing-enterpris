import { motion } from 'framer-motion'
import { FadeIn } from '../AnimatedText'
import { FiMonitor, FiTool, FiBriefcase, FiHeart, FiBook, FiDollarSign, FiShoppingCart, FiShield, FiCpu } from 'react-icons/fi'

const industries = [
  { name: 'Manufacturing', icon: <FiTool size={24} />, desc: 'Optimizing production with robust IT.' },
  { name: 'Construction', icon: <FiBriefcase size={24} />, desc: 'Scalable solutions for complex sites.' },
  { name: 'Architecture', icon: <FiMonitor size={24} />, desc: 'High-performance design environments.' },
  { name: 'Healthcare', icon: <FiHeart size={24} />, desc: 'Secure and compliant patient data.' },
  { name: 'Education', icon: <FiBook size={24} />, desc: 'Modernizing campus technology.' },
  { name: 'Financial Services', icon: <FiDollarSign size={24} />, desc: 'Zero-trust security and low latency.' },
  { name: 'Retail', icon: <FiShoppingCart size={24} />, desc: 'Omnichannel infrastructure scaling.' },
  { name: 'Government', icon: <FiShield size={24} />, desc: 'Strict compliance and secure deployment.' },
  { name: 'Information Technology', icon: <FiCpu size={24} />, desc: 'Advanced virtualization and cloud.' }
]

const IndustriesServedAbout = () => {
  return (
    <section className="py-32 relative bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 tracking-tight">Industries We Serve</h2>
            <p className="text-[17px] font-body text-text-secondary">Delivering customized enterprise technology solutions tailored to the unique operational and compliance needs of each sector.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-[20px] bg-card/40 border border-white/5 hover:border-accent/40 transition-colors duration-300 group flex items-start gap-4">
                <div className="text-text-secondary group-hover:text-accent transition-colors mt-1">
                  {ind.icon}
                </div>
                <div>
                  <h3 className="text-[18px] font-heading font-bold text-white mb-2">{ind.name}</h3>
                  <p className="text-[14px] font-body text-text-secondary leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustriesServedAbout
