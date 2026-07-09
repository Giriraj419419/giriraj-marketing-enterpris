import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FadeIn } from '../AnimatedText'

const Counter = ({ from = 0, to, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      let startTime = null
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        
        // Easing function: easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeProgress * (to - from) + from))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, from, to, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

const stats = [
  { label: 'Clients Served', value: 100, suffix: '+' },
  { label: 'Projects Delivered', value: 250, suffix: '+' },
  { label: 'Tech Solutions', value: 500, suffix: '+' },
  { label: 'Satisfaction', value: 98, suffix: '%' },
  { label: 'Support', value: 24, suffix: '/7' },
  { label: 'Partners', value: 10, suffix: '+' }
]

const AboutStats = () => {
  return (
    <section className="py-24 relative bg-accent/5 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex flex-col items-center justify-center p-4">
                <div className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-3">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[13px] font-body text-accent font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutStats
