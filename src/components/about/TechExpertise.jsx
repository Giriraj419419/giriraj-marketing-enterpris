import { motion } from 'framer-motion'
import { FadeIn } from '../AnimatedText'
import { FaMicrosoft, FaAws, FaWindows } from 'react-icons/fa'
import { SiAutodesk } from 'react-icons/si'
import { FiLayers } from 'react-icons/fi'

const techStack = [
  { name: 'Microsoft', icon: <FaMicrosoft size={32} /> },
  { name: 'Azure', icon: <FaWindows size={32} /> },
  { name: 'AWS', icon: <FaAws size={32} /> },
  { name: 'Adobe', icon: <FiLayers size={32} /> },
  { name: 'Autodesk', icon: <SiAutodesk size={32} /> },
  { name: 'GstarCAD', icon: <FiLayers size={32} /> }
]

const TechExpertise = () => {
  return (
    <section className="py-24 relative bg-bg-secondary/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight">Technology Ecosystem</h2>
        </FadeIn>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techStack.map((tech, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex flex-col items-center justify-center p-8 rounded-[20px] bg-card/40 border border-white/5 hover:border-accent/40 hover:bg-card/80 transition-all duration-300 group cursor-pointer h-full">
                <div className="text-text-secondary group-hover:text-accent transition-colors duration-300 mb-4 transform group-hover:scale-110">
                  {tech.icon}
                </div>
                <span className="text-[13px] font-heading font-bold text-white text-center">{tech.name}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechExpertise
