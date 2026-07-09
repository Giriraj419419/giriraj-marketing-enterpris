import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

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

const PortfolioShowcase = () => {
  const projects = [
    { 
      title: 'Nexus Enterprise Cloud', 
      category: 'Infrastructure Architecture', 
      desc: 'A robust, highly available cloud infrastructure deployed across 4 global regions, handling millions of requests per minute.',
      bg: 'bg-gradient-to-br from-[#87A987]/30 via-[#D4E7D4]/40 to-[#FDFBF7]',
      pattern: 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#87A987]/20 via-transparent to-transparent'
    },
    { 
      title: 'Aura Fintech Platform', 
      category: 'Custom Software', 
      desc: 'An award-winning financial dashboard featuring real-time data processing and a zero-latency trading engine.',
      bg: 'bg-gradient-to-tr from-[#D4E7D4]/40 via-[#87A987]/20 to-[#F7F4EE]',
      pattern: 'bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent'
    }
  ]

  return (
    <section className="py-32 bg-[rgba(135,169,135,0.08)] relative overflow-hidden border-y border-[#E6E2DA]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <FadeIn>
               <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-border bg-white/70 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary">Selected Work</span>
                </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold tracking-tight text-text-primary leading-[1.1]">
                Engineering <span className="text-accent">Case Studies.</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.3}>
            <button className="inline-flex items-center gap-3 text-text-primary hover:text-accent font-medium tracking-wide text-[14px] transition-colors group pb-2 border-b border-[#E6E2DA] hover:border-accent">
              Explore All Projects
              <FiArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </FadeIn>
        </div>

        <div className="flex flex-col gap-12 lg:gap-20">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={0.1}>
              <div className="group relative block cursor-pointer rounded-[32px] overflow-hidden border border-border bg-white p-2 md:p-4 hover:border-accent/40 transition-all duration-700 shadow-sm">
                
                {/* Glow Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className={`relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[24px] overflow-hidden ${project.bg}`}>
                   
                   {/* Abstract Pattern / Image Placeholder */}
                   <div className={`absolute inset-0 ${project.pattern} mix-blend-multiply opacity-75 group-hover:scale-105 group-hover:opacity-95 transition-all duration-1000`}></div>
                   <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
                   
                   {/* Animated Subtle Overlay */}
                   <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-700"></div>

                   {/* Floating View Project Button */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/80 backdrop-blur-md border border-[#87A987]/30 rounded-full flex items-center justify-center text-text-primary opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-20 shadow-xl">
                     <FiArrowUpRight size={28} />
                   </div>

                   {/* Title Reveal Content */}
                   <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-white via-white/95 to-transparent translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                      <p className="text-accent text-[12px] font-medium tracking-[0.2em] uppercase mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">{project.category}</p>
                      <h3 className="text-2xl md:text-4xl font-heading font-bold text-text-primary mb-3 tracking-tight">{project.title}</h3>
                      <p className="text-text-secondary font-medium max-w-2xl text-base opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                        {project.desc}
                      </p>
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

export default PortfolioShowcase
