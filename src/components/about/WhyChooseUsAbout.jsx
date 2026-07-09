import { motion } from 'framer-motion'
import { FadeIn } from '../AnimatedText'
import { FiCheckCircle, FiStar, FiGitMerge, FiTarget, FiSettings, FiZap } from 'react-icons/fi'

const features = [
  { icon: <FiCheckCircle size={24} />, title: 'Genuine Licensing', desc: 'Official software licensing and compliance guarantees.' },
  { icon: <FiStar size={24} />, title: 'Enterprise Expertise', desc: 'Experienced professionals and certified consultants.' },
  { icon: <FiGitMerge size={24} />, title: 'End-to-End Services', desc: 'From initial consultation to deployment and ongoing support.' },
  { icon: <FiTarget size={24} />, title: 'Business-Focused Approach', desc: 'Technology strategies aligned directly with your business goals.' },
  { icon: <FiSettings size={24} />, title: 'Flexible Solutions', desc: 'Tailored recommendations designed for every unique client.' },
  { icon: <FiZap size={24} />, title: 'Fast Support', desc: 'Reliable, SLA-backed technical assistance when needed most.' }
]

const WhyChooseUsAbout = () => {
  return (
    <section className="py-32 relative bg-bg-primary overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 tracking-tight">Why Businesses Choose Us</h2>
            <p className="text-[17px] font-body text-text-secondary">We deliver more than technology; we deliver reliability, scalable growth, and unwavering support.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-[20px] bg-bg-secondary/50 border border-white/5 hover:border-accent/40 transition-colors duration-300 group h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-card border border-white/10 flex items-center justify-center text-text-secondary group-hover:text-accent transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-[18px] font-heading font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-[14px] font-body text-text-secondary leading-relaxed pl-14">
                  {feature.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsAbout
