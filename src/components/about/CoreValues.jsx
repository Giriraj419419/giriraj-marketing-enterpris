import { motion } from 'framer-motion'
import { FadeIn } from '../AnimatedText'
import { FiHeart, FiShield, FiCpu, FiAnchor, FiAward, FiUsers } from 'react-icons/fi'
import { useMousePosition } from '../../hooks/useMousePosition'

const values = [
  { title: 'Customer First', desc: 'Every decision starts with customer success.', icon: <FiHeart size={24} /> },
  { title: 'Integrity', desc: 'Honest recommendations and transparent partnerships.', icon: <FiShield size={24} /> },
  { title: 'Innovation', desc: 'Continuous improvement through technology.', icon: <FiCpu size={24} /> },
  { title: 'Reliability', desc: 'Consistent delivery and dependable support.', icon: <FiAnchor size={24} /> },
  { title: 'Excellence', desc: 'Commitment to quality and professional standards.', icon: <FiAward size={24} /> },
  { title: 'Long-Term Partnership', desc: 'Building relationships that grow with our clients.', icon: <FiUsers size={24} /> }
]

const CoreValues = () => {
  const mousePosition = useMousePosition()

  return (
    <section className="py-32 relative bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 tracking-tight text-white">Core Values</h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <FadeIn key={i} delay={i * 0.1} className="h-full">
              <div 
                className="group relative p-8 spotlight-card rounded-[20px] bg-card/40 backdrop-blur-xl border border-white/5 hover:border-accent/40 transition-all duration-500 h-full flex flex-col"
                style={{
                  '--mouse-x': `${mousePosition.x}px`,
                  '--mouse-y': `${mousePosition.y}px`,
                }}
              >
                <div className="spotlight-border"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary mb-6 group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300">
                    {value.icon}
                  </div>
                  
                  <h3 className="text-[20px] font-heading font-bold text-white mb-3 tracking-tight">
                    {value.title}
                  </h3>
                  
                  <p className="text-[15px] font-body text-text-secondary leading-relaxed font-normal">
                    {value.desc}
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

export default CoreValues
