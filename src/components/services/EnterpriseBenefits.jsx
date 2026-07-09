import { motion } from 'framer-motion'
import { FadeIn } from '../../components/AnimatedText'
import { FiTrendingDown, FiShield, FiActivity, FiCloud, FiRefreshCw, FiUsers, FiCpu, FiTrendingUp } from 'react-icons/fi'

const benefits = [
  { icon: <FiTrendingDown size={32} />, title: 'Reduce IT Costs', desc: 'Optimize licensing and infrastructure to significantly lower total cost of ownership.' },
  { icon: <FiShield size={32} />, title: 'Improve Security', desc: 'Implement zero-trust architectures and robust data protection protocols.' },
  { icon: <FiActivity size={32} />, title: 'Increase Productivity', desc: 'Empower your workforce with seamless collaboration and high-performance tools.' },
  { icon: <FiCloud size={32} />, title: 'Cloud Scalability', desc: 'Elastic resources that instantly adapt to your enterprise demands.' },
  { icon: <FiRefreshCw size={32} />, title: 'Business Continuity', desc: 'Ensure 99.99% uptime with comprehensive disaster recovery solutions.' },
  { icon: <FiUsers size={32} />, title: 'Enterprise Collaboration', desc: 'Unify communications across global teams with Microsoft 365.' },
  { icon: <FiCpu size={32} />, title: 'Digital Transformation', desc: 'Modernize legacy systems into agile, cloud-native architectures.' },
  { icon: <FiTrendingUp size={32} />, title: 'Long-Term Growth', desc: 'Strategic technology roadmaps designed to scale alongside your business.' }
]

const EnterpriseBenefits = () => {
  return (
    <section className="py-24 relative bg-[rgba(212,231,212,0.20)] border-t border-b border-[#E6E2DA]">
      <div className="container mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-[#3D523D]">Enterprise Benefits</h2>
          <p className="text-lg text-[#556B55] max-w-2xl mx-auto font-light leading-relaxed">
            Measurable ROI and strategic advantages through intelligent technology deployment.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="group h-full p-8 bg-white/65 border border-[#87A987]/12 shadow-sm rounded-2xl hover:border-accent hover:bg-white hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="text-[#87A987] mb-6 bg-[#D4E7D4] w-16 h-16 rounded-full flex items-center justify-center border border-[#87A987]/20 group-hover:bg-[#87A987] group-hover:text-white transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-[#3D523D] mb-3 group-hover:text-accent transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-[15px] text-[#556B55] leading-relaxed font-light relative z-10">
                  {benefit.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EnterpriseBenefits
