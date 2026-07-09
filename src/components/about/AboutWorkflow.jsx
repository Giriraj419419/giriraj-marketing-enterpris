import { FadeIn } from '../AnimatedText'

const AboutWorkflow = () => {
  const steps = [
    { step: "01", title: "Consultation", desc: "Understanding your business goals, current infrastructure, and future scaling requirements." },
    { step: "02", title: "Planning", desc: "Developing a comprehensive strategic roadmap tailored to your specific enterprise constraints." },
    { step: "03", title: "Solution Design", desc: "Architecting secure, highly available solutions using best-in-class technology stacks." },
    { step: "04", title: "Deployment", desc: "Executing seamless migrations and provisioning infrastructure with zero downtime." },
    { step: "05", title: "Training", desc: "Empowering your internal teams with the knowledge to manage the new environments." },
    { step: "06", title: "Ongoing Support", desc: "Providing 24/7 SLA-backed monitoring, maintenance, and continuous optimization." }
  ]

  return (
    <section className="py-24 md:py-32 bg-bg-secondary border-t border-border relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-20">
          <FadeIn>
            <h3 className="text-sm font-heading font-bold tracking-[0.2em] uppercase text-accent mb-6 flex justify-center items-center gap-3">
              <span className="w-6 h-[1px] bg-accent"></span>
              Our Working Process
              <span className="w-6 h-[1px] bg-accent"></span>
            </h3>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 text-white tracking-tight">
              Enterprise Deployment Strategy
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-10 bg-card/40 backdrop-blur-xl border border-white/5 rounded-[32px] h-full relative group overflow-hidden hover:border-accent/40 transition-all duration-500 shadow-lg hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(37,99,235,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="absolute top-0 right-6 -translate-y-4 text-accent/10 font-heading text-8xl font-extrabold group-hover:text-accent/20 transition-colors duration-500 pointer-events-none select-none">
                  {step.step}
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-white mb-4 pt-8 group-hover:text-accent transition-colors duration-300 tracking-tight relative z-10">
                  {step.title}
                </h3>
                
                <p className="text-text-secondary font-medium leading-relaxed relative z-10">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AboutWorkflow
