import { motion } from 'framer-motion'
import { FadeIn } from '../AnimatedText'
import { FaMicrosoft, FaAws } from 'react-icons/fa'
import { FiLayers, FiBox, FiCloud, FiBriefcase } from 'react-icons/fi'

const services = [
  { icon: <FaMicrosoft size={28} />, title: 'Cloud Solutions', desc: 'Microsoft Azure and AWS services architecture and deployment.' },
  { icon: <FaMicrosoft size={28} />, title: 'Productivity Solutions', desc: 'Microsoft 365 and collaboration platform integration.' },
  { icon: <FiLayers size={28} />, title: 'Creative Solutions', desc: 'Adobe licensing and enterprise implementation.' },
  { icon: <FiBox size={28} />, title: 'Design & Engineering', desc: 'Autodesk and ZWCAD software solutions.' },
  { icon: <FiCloud size={28} />, title: 'Enterprise Infrastructure', desc: 'Cloud-ready enterprise infrastructure planning and deployment.' },
  { icon: <FiBriefcase size={28} />, title: 'IT Consulting', desc: 'Technology strategy and digital transformation planning.' }
]

const WhatWeDo = () => {
  return (
    <section className="py-24 relative bg-bg-secondary/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">What We Do</h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-[20px] bg-card/60 backdrop-blur-xl border border-white/5 hover:-translate-y-2 hover:border-accent/30 transition-all duration-500 group shadow-xl h-full flex flex-col">
                <div className="mb-8 text-text-secondary group-hover:text-accent transition-colors duration-300 transform group-hover:scale-110 origin-left">
                  {service.icon}
                </div>
                <h3 className="text-[22px] font-heading font-bold text-white mb-3 tracking-tight">{service.title}</h3>
                <p className="text-[15px] font-body text-text-secondary leading-relaxed">{service.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
