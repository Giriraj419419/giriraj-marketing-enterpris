import { FadeIn } from '../AnimatedText'

const CompanyStory = () => {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary relative border-b border-border overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <FadeIn>
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square bg-card/30 backdrop-blur-xl rounded-[32px] border border-white/5 overflow-hidden flex items-center justify-center p-8 group shadow-lg hover:shadow-[0_0_50px_rgba(37,99,235,0.1)] transition-shadow duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="text-center relative z-10 p-8 bg-bg-primary/50 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
                <h3 className="text-3xl lg:text-4xl font-heading font-extrabold mb-4 text-white tracking-tight">Built on Excellence</h3>
                <p className="text-text-secondary font-medium leading-relaxed">Solving complex business challenges through scalable technology infrastructure.</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 blur-[80px] rounded-full -z-10 group-hover:scale-150 transition-transform duration-1000"></div>
              
              <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-accent/50"></div>
              <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-accent/50"></div>
              <div className="absolute top-6 right-6 flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
              </div>
            </div>
          </FadeIn>
          
          <div className="flex flex-col justify-center">
            <FadeIn delay={0.2}>
              <h3 className="text-sm font-heading font-bold tracking-[0.2em] uppercase text-accent mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-accent"></span>
                Our Journey
              </h3>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-8 text-white tracking-tight leading-tight">
                Empowering Enterprises Through Digital Transformation
              </h2>
              
              <div className="space-y-8 text-lg text-text-secondary font-medium leading-relaxed">
                <p>
                  At Giriraj Marketing, we were founded on a singular vision: to bridge the gap between complex technological capabilities and measurable business outcomes. For years, we have served as the trusted IT backbone for global enterprises.
                </p>
                
                <div className="p-6 bg-card/50 border-l-2 border-accent rounded-r-2xl">
                  <p className="text-white italic">
                    "We don't just supply software. We architect the foundational infrastructure that allows businesses to scale, innovate, and secure their future."
                  </p>
                </div>

                <p>
                  Our customer-first philosophy ensures that we prioritize long-term technology partnerships over short-term transactions. From providing genuine software licensing to architecting robust AWS cloud environments, our solutions are always tailored, scalable, and built for performance.
                </p>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CompanyStory
