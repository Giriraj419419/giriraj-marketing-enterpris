import { motion } from 'framer-motion'
import { FadeIn } from '../AnimatedText'
import { useMousePosition } from '../../hooks/useMousePosition'

const points = [
  { title: 'Trusted Partner', desc: 'Long-term commitment to your ongoing customer success.' },
  { title: 'Proven Expertise', desc: 'Years of deep technical experience across diverse industries.' },
  { title: 'Scalable Solutions', desc: 'Enterprise technology frameworks designed for future growth.' },
  { title: 'Dedicated Support', desc: 'Responsive, SLA-backed, and reliable technical assistance.' },
  { title: 'Business Transformation', desc: 'Helping organizations achieve measurable operational outcomes.' },
  { title: 'Innovation Focus', desc: 'Leveraging modern technologies to continuously create value.' }
]

const WhyGiriraj = () => {
  const mousePosition = useMousePosition()

  return (
    <section className="py-32 relative bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 tracking-tight">Why Giriraj Marketing</h2>
            <p className="text-[17px] font-body text-text-secondary leading-relaxed">
              We go beyond standard implementations by aligning cutting-edge technology directly with your long-term business objectives.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div 
                className="group relative p-8 spotlight-card rounded-[20px] bg-card/40 backdrop-blur-xl border border-white/5 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 h-full"
                style={{
                  '--mouse-x': `${mousePosition.x}px`,
                  '--mouse-y': `${mousePosition.y}px`,
                }}
              >
                <div className="spotlight-border"></div>
                <div className="relative z-10">
                  <h3 className="text-[20px] font-heading font-bold text-white mb-3">{point.title}</h3>
                  <p className="text-[15px] font-body text-text-secondary leading-relaxed">{point.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyGiriraj
