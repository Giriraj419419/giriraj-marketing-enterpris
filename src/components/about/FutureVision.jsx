import { motion } from 'framer-motion'
import { FadeIn } from '../AnimatedText'

const FutureVision = () => {
  return (
    <section className="py-32 relative bg-bg-primary overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
             <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
             <span className="text-[12px] font-body font-bold text-accent uppercase tracking-widest">Looking Ahead</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-8 tracking-tight text-white leading-tight">
            Driving the Future of <br className="hidden md:block"/> Business Technology
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-[18px] md:text-[20px] font-body text-text-secondary leading-relaxed max-w-4xl mx-auto mb-16">
            We are constantly exploring the horizons of digital transformation. From AI readiness and autonomous cloud adoption to zero-trust enterprise modernization, Giriraj Marketing ensures your infrastructure is optimized for long-term innovation.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          {['Digital Transformation', 'AI Readiness', 'Cloud Adoption', 'Infrastructure Optimization'].map((item, i) => (
             <FadeIn key={i} delay={(i * 0.1) + 0.4} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
               <span className="text-[14px] font-heading font-bold text-white text-center">{item}</span>
             </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FutureVision
