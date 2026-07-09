import { motion } from 'framer-motion'
import { FadeIn } from '../AnimatedText'

const CompanyIntro = () => {
  const specialties = [
    'Cloud Solutions',
    'Enterprise Licensing',
    'Enterprise Infrastructure',
    'Digital Transformation',
    'IT Consulting',
    'Managed Services'
  ]

  return (
    <section className="py-32 relative bg-bg-secondary/30 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 tracking-tight">
                Who We <span className="text-gradient-accent">Are</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[17px] font-body text-text-secondary leading-relaxed mb-8">
                Giriraj Marketing is a modern technology consulting and solutions company focused on helping organizations unlock the full potential of technology. Our goal is to simplify complex infrastructure while delivering measurable business value and long-term scalability.
              </p>
            </FadeIn>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specialties.map((item, i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <div className="spotlight-card p-6 bg-card/40 border border-white/5 rounded-2xl flex items-center gap-4 hover:border-accent/30 transition-all duration-300">
                     <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                     <span className="text-[15px] font-heading font-bold text-white tracking-wide">{item}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CompanyIntro
