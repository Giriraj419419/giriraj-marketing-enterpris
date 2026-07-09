import { motion } from 'framer-motion'
import { FadeIn } from '../../components/AnimatedText'
import { FiHome, FiTool, FiHardDrive, FiHeart, FiBook, FiSettings, FiPieChart, FiShoppingBag, FiGlobe, FiMonitor } from 'react-icons/fi'

const industries = [
  { name: 'Architecture', icon: <FiHome size={24} /> },
  { name: 'Engineering', icon: <FiTool size={24} /> },
  { name: 'Construction', icon: <FiHardDrive size={24} /> },
  { name: 'Healthcare', icon: <FiHeart size={24} /> },
  { name: 'Education', icon: <FiBook size={24} /> },
  { name: 'Manufacturing', icon: <FiSettings size={24} /> },
  { name: 'Finance', icon: <FiPieChart size={24} /> },
  { name: 'Retail', icon: <FiShoppingBag size={24} /> },
  { name: 'Government', icon: <FiGlobe size={24} /> },
  { name: 'Enterprise IT', icon: <FiMonitor size={24} /> }
]

const IndustriesServed = () => {
  return (
    <section className="py-24 relative bg-[rgba(135,169,135,0.06)] border-t border-b border-[#E6E2DA]">
      <div className="container mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-[#3D523D]">Industries We Serve</h2>
          <p className="text-lg text-[#556B55] max-w-2xl mx-auto font-light leading-relaxed">
            Tailored enterprise technology solutions engineered for the unique challenges of your sector.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, i) => (
            <FadeIn key={i} delay={i * 0.03}>
              <div className="group flex flex-col items-center justify-center gap-4 p-6 bg-white/65 border border-[#87A987]/12 shadow-sm rounded-2xl hover:border-accent hover:bg-white hover:-translate-y-0.5 transition-all duration-300 text-center h-full">
                <div className="text-[#87A987] group-hover:scale-105 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-sm md:text-base font-bold text-[#3D523D]">
                  {industry.name}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustriesServed
