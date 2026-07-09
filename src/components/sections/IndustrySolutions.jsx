import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiTrendingUp, FiActivity, FiBriefcase, FiGlobe, FiShoppingCart, FiCpu } from 'react-icons/fi'
import { FadeIn } from '../AnimatedText'

const IndustryCard = ({ ind, i }) => {
  const cardRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <FadeIn delay={0.1 * i}>
      <motion.div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
        className="group flex flex-col p-8 rounded-3xl border transition-all duration-400 h-full relative overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.65)',
          backdropFilter: 'blur(16px)',
          borderColor: isHovered ? 'rgba(135,169,135,0.4)' : 'rgba(135,169,135,0.12)',
          boxShadow: isHovered ? '0 20px 40px rgba(61,82,61,0.08)' : '0 4px 20px rgba(61,82,61,0.02)'
        }}
      >
        {/* Subtle Spotlight follows cursor */}
        <motion.div 
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300"
          animate={{ opacity: isHovered ? 1 : 0 }}
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(135,169,135,0.08), transparent 40%)`
          }}
        />

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-white border border-[#E6E2DA] flex items-center justify-center text-text-muted group-hover:text-accent group-hover:border-accent/40 group-hover:bg-accent/5 transition-colors duration-400 mb-6 shadow-sm">
            {ind.icon}
          </div>
          
          <h3 className="text-xl font-heading font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
            {ind.title}
          </h3>
          <p className="text-text-secondary text-[15px] leading-relaxed">
            {ind.desc}
          </p>
        </div>
      </motion.div>
    </FadeIn>
  )
}

const IndustrySolutions = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  const industries = [
    {
      title: 'Finance & Fintech',
      desc: 'High-frequency trading platforms, secure banking portals, and blockchain infrastructure.',
      icon: <FiTrendingUp size={24} />
    },
    {
      title: 'Healthcare & Life Sciences',
      desc: 'HIPAA-compliant data pipelines, telemedicine platforms, and advanced AI diagnostics.',
      icon: <FiActivity size={24} />
    },
    {
      title: 'Enterprise B2B',
      desc: 'Scalable CRM integrations, internal tooling, and automated supply chain logistics.',
      icon: <FiBriefcase size={24} />
    },
    {
      title: 'Global E-Commerce',
      desc: 'High-conversion storefronts, headless commerce architectures, and secure payment gateways.',
      icon: <FiShoppingCart size={24} />
    },
    {
      title: 'Telecommunications',
      desc: 'Network monitoring dashboards, real-time communication tools, and 5G infrastructure management.',
      icon: <FiGlobe size={24} />
    },
    {
      title: 'Manufacturing & IoT',
      desc: 'IoT data ingestion, predictive maintenance algorithms, and digital twin environments.',
      icon: <FiCpu size={24} />
    }
  ]

  return (
    <section ref={containerRef} className="py-32 bg-[#F7F4EE] border-t border-border relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,rgba(135,169,135,0.12)_0%,transparent_60%)] rounded-full pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          <div className="lg:w-5/12">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-border bg-card/30 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-text-secondary">Industries Served</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-[40px] md:text-[56px] lg:text-[72px] font-heading font-extrabold text-text-primary leading-[1.05] tracking-tight relative z-10">
                Empowering <br />
                <span className="relative inline-block mt-2">
                  <span className="absolute -inset-2 bg-accent/20 blur-2xl rounded-full z-0 opacity-50"></span>
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-accent to-text-secondary">
                    Global Sectors.
                  </span>
                </span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-8 pl-5 border-l-2 border-accent/40 relative">
                <div className="absolute top-0 left-[-2px] w-0.5 h-1/3 bg-accent animate-pulse"></div>
                <p className="text-[17px] md:text-[19px] text-text-secondary font-medium leading-[1.7] max-w-md">
                  We engineer specialized, industry-compliant digital solutions that drive transformation across major global sectors.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="lg:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industries.map((ind, i) => (
                <IndustryCard key={i} ind={ind} i={i} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default IndustrySolutions
