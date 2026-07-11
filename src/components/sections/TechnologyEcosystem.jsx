import { useState } from 'react'
import { motion } from 'framer-motion'
import { Cloud, ShieldCheck, Cpu, Layers, Headphones } from 'lucide-react'

const nodes = [
  { id: 'cloud', name: 'Cloud', desc: 'Multi-cloud infrastructure solutions', icon: Cloud, x: 0, y: -180, delay: 0.1 },
  { id: 'security', name: 'Security', desc: 'Enterprise-grade protection systems', icon: ShieldCheck, x: 171, y: -55, delay: 0.2 },
  { id: 'support', name: 'Support', desc: '24/7 technical assistance', icon: Headphones, x: 106, y: 145, delay: 0.3 },
  { id: 'compute', name: 'Compute', desc: 'High-performance computing resources', icon: Cpu, x: -106, y: 145, delay: 0.4 },
  { id: 'systems', name: 'Systems', desc: 'Business-critical technology ecosystem', icon: Layers, x: -171, y: -55, delay: 0.5 }
]

export default function TechnologyEcosystem() {
  const [hoveredNode, setHoveredNode] = useState(null)

  return (
    <div className="lg:col-span-5 relative flex justify-center items-center min-h-[500px] w-full">
      
      {/* LAYER 1: Background Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-[#D4E7D4]/30 to-transparent rounded-full blur-[100px] z-0 pointer-events-none" />

      {/* LAYER 2: Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-full">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1.5 h-1.5 bg-accent/40 rounded-full blur-[1px]"
            initial={{ 
              x: Math.random() * 400 - 200, 
              y: Math.random() * 400 - 200, 
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [null, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* DESKTOP/TABLET (Radial) */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="hidden md:flex relative w-full max-w-lg h-full items-center justify-center z-20 scale-90 lg:scale-100 xl:scale-110 origin-center"
      >
        {/* LAYER 3: Connection Network */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10">
          {nodes.map((node) => {
            const isHovered = hoveredNode === node.id
            return (
              <g key={`path-${node.id}`}>
                <motion.line 
                  x1="50%" 
                  y1="50%" 
                  x2={`calc(50% + ${node.x}px)`} 
                  y2={`calc(50% + ${node.y}px)`} 
                  stroke={isHovered ? "rgba(135,169,135,0.4)" : "rgba(135,169,135,0.15)"}
                  strokeWidth={isHovered ? "3" : "2"}
                  className="transition-all duration-300"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: { pathLength: 1, opacity: 1, transition: { duration: 1, delay: 0.8 } }
                  }}
                />
                <motion.line 
                  x1="50%" 
                  y1="50%" 
                  x2={`calc(50% + ${node.x}px)`} 
                  y2={`calc(50% + ${node.y}px)`} 
                  stroke={isHovered ? "rgba(135,169,135,0.8)" : "rgba(135,169,135,0.5)"}
                  strokeWidth="2"
                  strokeDasharray={isHovered ? "8 12" : "4 16"}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 1.5 } }
                  }}
                  animate={{ strokeDashoffset: [20, 0] }}
                  transition={{ duration: isHovered ? 0.8 : 1.5, repeat: Infinity, ease: "linear" }}
                />
              </g>
            )
          })}
        </svg>

        {/* LAYER 5: Center Giriraj Hub */}
        <motion.div 
          variants={{
            hidden: { scale: 0.5, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 transition-transform duration-500 ${hoveredNode ? 'scale-105' : 'scale-100'}`}
        >
          <div className="w-32 h-32 md:w-[140px] md:h-[140px] rounded-full bg-white/95 backdrop-blur-2xl border border-[#87A987]/50 shadow-[0_0_60px_rgba(135,169,135,0.4)] flex items-center justify-center relative">
            <motion.div 
              className="absolute inset-0 rounded-full border border-[#87A987]/60"
              animate={{ scale: [1, 1.4], opacity: [0.8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.div 
              className="absolute inset-0 rounded-full border border-[#87A987]/30"
              animate={{ scale: [1, 1.7], opacity: [0.6, 0] }}
              transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: "easeOut" }}
            />
            <img src="/logo.png" alt="Giriraj Marketing" className="w-20 h-auto object-contain relative z-10" />
            
            {/* LAYER 6: Ambient Light inside Hub */}
            <div className="absolute inset-0 rounded-full bg-accent/5 blur-md z-0 pointer-events-none" />
          </div>
        </motion.div>

        {/* LAYER 4: Cards (Interactive Modules) */}
        {nodes.map((node) => {
          const NodeIcon = node.icon
          const isHovered = hoveredNode === node.id
          return (
            <div 
              key={`card-${node.id}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-50"
              style={{
                left: `calc(50% + ${node.x}px)`,
                top: `calc(50% + ${node.y}px)`
              }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0.5, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { delay: 1 + node.delay, duration: 0.6, ease: "easeOut" } }
                }}
                whileHover={{ scale: 1.05, y: -6 }}
                className={`w-48 rounded-2xl bg-white/90 backdrop-blur-xl shadow-[0_12px_40px_rgba(135,169,135,0.15)] p-5 flex flex-col items-center text-center cursor-pointer transition-all duration-300 border-t-2 relative overflow-hidden ${
                  isHovered ? 'border-[#87A987] shadow-[0_12px_40px_rgba(135,169,135,0.3)]' : 'border-[#87A987]/20 border-x border-b'
                }`}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : ''}`} />

                <motion.div 
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-colors duration-300 relative z-10 ${
                    isHovered ? 'bg-[#87A987] shadow-lg shadow-[#87A987]/30' : 'bg-[#FDFBF7] border border-[#87A987]/30'
                  }`}
                  animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <NodeIcon className={`w-6 h-6 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-[#87A987]'}`} />
                </motion.div>
                
                <h3 className="text-[15px] font-bold text-[#3D523D] mb-1.5 relative z-10 tracking-tight">{node.name}</h3>
                <p className="text-[11px] text-[#556B55] leading-relaxed relative z-10">{node.desc}</p>
              </motion.div>
            </div>
          )
        })}
      </motion.div>

      {/* MOBILE (Stacked) */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex md:hidden flex-col items-center w-full z-20 space-y-6 mt-8"
      >
        {/* Hub */}
        <motion.div 
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } }
          }}
          className="relative flex justify-center mb-4"
        >
          <div className="w-28 h-28 rounded-full bg-white/95 backdrop-blur-2xl border border-[#87A987]/50 shadow-[0_0_40px_rgba(135,169,135,0.3)] flex items-center justify-center relative z-20">
            <motion.div 
              className="absolute inset-0 rounded-full border border-[#87A987]/60"
              animate={{ scale: [1, 1.4], opacity: [0.8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            />
            <img src="/logo.png" alt="Giriraj Marketing" className="w-16 h-auto object-contain relative z-10" />
          </div>
          
          {/* Vertical Connection Line falling downwards */}
          <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-[#87A987]/40 to-transparent z-10" />
        </motion.div>

        {/* Stacked Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4 relative z-30">
          {nodes.map((node, i) => {
            const NodeIcon = node.icon
            return (
              <motion.div 
                key={`mobile-card-${node.id}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: 0.5 + (i * 0.1), duration: 0.5 } }
                }}
                className="w-full rounded-2xl bg-white/95 backdrop-blur-xl border-t-2 border-[#87A987] shadow-[0_8px_30px_rgba(135,169,135,0.12)] p-4 flex items-center gap-4"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#FDFBF7] border border-[#87A987]/30 flex items-center justify-center shadow-inner">
                  <NodeIcon className="w-5 h-5 text-[#87A987]" />
                </div>
                <div className="text-left">
                  <h3 className="text-[15px] font-bold text-[#3D523D] mb-0.5 tracking-tight">{node.name}</h3>
                  <p className="text-[11px] text-[#556B55] leading-relaxed">{node.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

    </div>
  )
}
