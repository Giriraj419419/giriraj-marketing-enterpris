import { motion } from 'framer-motion'

const AmbientBlobs = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent opacity-[0.04] blur-[150px]"
      />
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -60, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-accent-alt opacity-[0.05] blur-[150px]"
      />
      <motion.div
        animate={{
          x: [0, 80, -100, 0],
          y: [0, 50, -80, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-[#3D523D] opacity-[0.03] blur-[150px]"
      />
    </div>
  )
}

export default AmbientBlobs
