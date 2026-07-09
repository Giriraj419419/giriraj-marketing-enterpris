import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FadeIn } from '../../components/AnimatedText'
import { FiSearch, FiPenTool, FiCloud, FiBookOpen, FiShield } from 'react-icons/fi'

const steps = [
  { 
    num: '01', 
    title: 'Discovery & Consultation', 
    desc: 'Understand business objectives, current infrastructure, pain points, and long-term goals.', 
    icon: <FiSearch size={24} /> 
  },
  { 
    num: '02', 
    title: 'Planning & Solution Design', 
    desc: 'Design the best enterprise solution with licensing, architecture, scalability, and implementation planning.', 
    icon: <FiPenTool size={24} /> 
  },
  { 
    num: '03', 
    title: 'Deployment & Configuration', 
    desc: 'Deploy, configure, integrate, and optimize the solution while ensuring security and performance.', 
    icon: <FiCloud size={24} /> 
  },
  { 
    num: '04', 
    title: 'Training & Knowledge Transfer', 
    desc: 'Provide documentation, onboarding, and technical training to empower your internal teams.', 
    icon: <FiBookOpen size={24} /> 
  },
  { 
    num: '05', 
    title: 'Ongoing Support & Growth', 
    desc: 'Continuous monitoring, maintenance, updates, optimization, and long-term partnership.', 
    icon: <FiShield size={24} /> 
  }
]

const Connector = ({ isHorizontal, delay }) => {
  return (
    <div className={`flex-shrink-0 flex items-center justify-center ${isHorizontal ? 'w-10 xl:w-16 h-[2px] mx-2 xl:mx-4' : 'h-12 w-[2px] my-2'}`}>
      <motion.div 
        initial={{ scaleX: 0, scaleY: 0, opacity: 0 }}
        whileInView={{ scaleX: isHorizontal ? 1 : 0, scaleY: isHorizontal ? 0 : 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay, ease: "easeInOut" }}
        className={`bg-gradient-to-${isHorizontal ? 'r' : 'b'} from-[#87A987] to-[#A8C3A8] relative origin-left ${isHorizontal ? 'w-full h-[2px]' : 'h-full w-[2px]'}`}
        style={{ transformOrigin: isHorizontal ? 'left center' : 'top center' }}
      >
        <motion.div
          animate={{ x: isHorizontal ? ['0%', '100%'] : '0%', y: isHorizontal ? '0%' : ['0%', '100%'], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay }}
          className={`absolute ${isHorizontal ? 'top-1/2 -translate-y-1/2 w-4 h-[2px]' : 'left-1/2 -translate-x-1/2 h-4 w-[2px]'} bg-[#87A987]`}
        />
      </motion.div>
    </div>
  )
}

const ImplementationProcess = () => {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="py-32 relative bg-[#FDFBF7] overflow-hidden border-t border-b border-[#E6E2DA]">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-[800px] h-[800px] bg-[#D4E7D4]/10 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto flex flex-col items-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 text-[#3D523D] tracking-tight leading-tight">
              The Framework for <span className="text-accent">Success</span>
            </h2>
            <p className="text-[17px] font-body text-[#556B55] leading-relaxed max-w-2xl mx-auto font-light">
              A proven, risk-free methodology that ensures seamless enterprise digital transformation from initial discovery to long-term growth.
            </p>
          </FadeIn>
        </div>

        {/* Timeline Layout */}
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center lg:items-stretch justify-center w-full max-w-[1400px] mx-auto gap-y-12 md:gap-y-16 lg:gap-y-0">
          {steps.map((step, i) => {
            const showHorizontalLg = i < steps.length - 1;
            const showHorizontalMd = i === 0 || i === 2;

            return (
              <div key={i} className="flex flex-col md:flex-row items-center w-full md:w-[45%] lg:w-auto lg:flex-1">
                
                {/* Card */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group w-full relative p-6 xl:p-8 bg-white/65 border border-[#87A987]/12 shadow-sm hover:border-accent hover:-translate-y-1.5 transition-all duration-300 rounded-[24px] backdrop-blur-md flex flex-col h-full min-h-[340px]"
                >
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-5xl xl:text-6xl font-heading font-extrabold text-[#87A987]/40 group-hover:text-accent transition-all duration-300">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-[#D4E7D4] border border-[#87A987]/20 flex items-center justify-center text-[#87A987] group-hover:bg-[#87A987] group-hover:text-white transition-all duration-300">
                        {step.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-[20px] font-heading font-extrabold text-[#3D523D] mb-4 tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm font-body text-[#556B55] leading-relaxed font-light mt-auto">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>

                {/* Connectors */}
                {/* Mobile (Vertical between all items except last) */}
                <div className="block md:hidden">
                  {i < steps.length - 1 && (
                    <Connector isHorizontal={false} delay={(i * 0.1) + 0.1} />
                  )}
                </div>

                {/* Tablet (Horizontal only for specific indices) */}
                <div className="hidden md:block lg:hidden w-[10%]">
                  {showHorizontalMd && (
                    <Connector isHorizontal={true} delay={(i * 0.1) + 0.1} />
                  )}
                </div>

                {/* Desktop (Horizontal between all items except last) */}
                <div className="hidden lg:block">
                  {showHorizontalLg && (
                    <Connector isHorizontal={true} delay={(i * 0.1) + 0.1} />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ImplementationProcess
