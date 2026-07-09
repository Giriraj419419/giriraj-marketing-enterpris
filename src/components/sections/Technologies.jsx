import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FadeIn, TextReveal } from '../AnimatedText'

const Technologies = () => {
  const containerRef = useRef(null)
  
  const techStack = [
    { category: 'Frontend', items: ['React', 'Vue', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'WebGL'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Vercel'] },
    { category: 'Enterprise Tools', items: ['Microsoft 365', 'Salesforce', 'SAP', 'Autodesk', 'Adobe', 'Figma'] }
  ]

  return (
    <section ref={containerRef} className="py-32 bg-bg-secondary border-y border-border relative overflow-hidden">
      
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-screen pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto flex flex-col items-center">
          <FadeIn>
             <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-border bg-card/30 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary">Our Stack</span>
              </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold mb-6 tracking-tight text-white leading-[1.1]">
              Powered by <br/> <span className="text-gradient-accent">Modern Technology.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-text-secondary font-medium leading-relaxed max-w-2xl mt-4">
              We leverage the most advanced, stable, and scalable technologies to ensure your systems are lightning-fast, secure, and future-proof.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {techStack.map((group, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="h-full">
              <div className="relative p-10 lg:p-12 bg-card border border-border rounded-3xl h-full hover:border-accent/30 transition-all duration-500 overflow-hidden group">
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                  <h3 className="text-xl font-heading font-bold uppercase tracking-widest text-white mb-10 flex items-center gap-4">
                     <span className="w-8 h-px bg-accent"></span>
                     {group.category}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4">
                    {group.items.map((tech, i) => (
                      <motion.div 
                        key={i} 
                        className="px-5 py-3 bg-bg-secondary border border-border rounded-xl text-[15px] font-medium text-text-secondary hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]"
                        whileHover={{ y: -5, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
