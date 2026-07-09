import { motion } from 'framer-motion'
import { FadeIn } from '../AnimatedText'

const PartnerEcosystem = () => {
  // We'll duplicate the array to create a seamless infinite scroll
  const partners = [
    'Microsoft', 'AWS', 'Adobe', 'Autodesk', 'ZWCAD', 'GstarCAD', 'CorelDRAW', 'Azure',
    'Microsoft', 'AWS', 'Adobe', 'Autodesk', 'ZWCAD', 'GstarCAD', 'CorelDRAW', 'Azure'
  ]

  return (
    <section className="py-24 relative bg-bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl mb-16 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight">Strategic Partners</h2>
        </FadeIn>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Fading Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex gap-16 whitespace-nowrap px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {partners.map((partner, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 text-3xl md:text-5xl font-heading font-bold text-text-muted hover:text-white transition-colors duration-300 cursor-pointer"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PartnerEcosystem
