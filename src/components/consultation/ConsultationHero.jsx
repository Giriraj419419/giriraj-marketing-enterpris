import { motion } from 'framer-motion'
import { TextReveal, FadeIn } from '../AnimatedText'
import { FiCloud, FiCpu, FiShield } from 'react-icons/fi'

const ConsultationHero = () => {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center pt-40 pb-16 overflow-hidden bg-[#FDFBF7]">
      {/* Cinematic Enterprise Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#FDFBF7]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(135,169,135,0.12)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,231,212,0.15)_0%,transparent_70%)]" />
        
        {/* Animated Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M 0 200 Q 400 300, 800 100 T 1600 400"
            fill="transparent"
            stroke="url(#blue-gradient-hero)"
            strokeWidth="1.5"
            animate={{ strokeDashoffset: [1000, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            strokeDasharray="1000 1000"
          />
          <motion.path
            d="M 0 500 Q 600 200, 1000 600 T 1600 200"
            fill="transparent"
            stroke="url(#purple-gradient-hero)"
            strokeWidth="1.5"
            animate={{ strokeDashoffset: [0, 1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            strokeDasharray="1000 1000"
          />
          <defs>
            <linearGradient id="blue-gradient-hero" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#87A987" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="purple-gradient-hero" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#A8C3A8" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Technology Shapes */}
        <motion.div 
          animate={{ y: [-15, 15], opacity: [0.3, 0.6, 0.3] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] text-[#87A987]"
        >
          <FiCloud size={32} />
        </motion.div>
        <motion.div 
          animate={{ y: [15, -15], opacity: [0.4, 0.8, 0.4] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[30%] right-[15%] text-[#87A987]"
        >
          <FiCpu size={40} />
        </motion.div>
        <motion.div 
          animate={{ x: [-10, 10], opacity: [0.3, 0.7, 0.3] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] left-[20%] text-[#87A987]"
        >
          <FiShield size={28} />
        </motion.div>
        <motion.div 
          animate={{ x: [10, -10], opacity: [0.3, 0.6, 0.3] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[25%] right-[25%] text-[#87A987]"
        >
          <FiCpu size={36} />
        </motion.div>
      </div>

      <div className="container relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-[#87A987]/15 backdrop-blur-md mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-extrabold tracking-wider text-[#3D523D] uppercase">Enterprise Portal</span>
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-heading font-extrabold mb-6 max-w-4xl mx-auto leading-tight text-[#3D523D]">
          <TextReveal text="Let's Build Your Next" />
          <br />
          <span className="text-accent">Technology Success Story</span>
        </h1>
        
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-[#556B55] max-w-2xl mx-auto font-light leading-relaxed">
            A personalized consultation with our infrastructure specialists to understand your business goals, technical challenges, and growth plans.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

export default ConsultationHero
