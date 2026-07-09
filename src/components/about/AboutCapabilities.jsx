import { FadeIn } from '../AnimatedText'
import { FiCheck, FiLayers } from 'react-icons/fi'

const AboutCapabilities = () => {
  const capabilities = [
    "Genuine Software Licensing",
    "Certified Technology Experts",
    "Enterprise Consultation",
    "Cloud Specialists",
    "Infrastructure Experts",
    "Fast Deployment",
    "Dedicated Technical Support",
    "Customized Business Solutions"
  ]

  const technologies = [
    { name: "Microsoft", type: "Enterprise Cloud & OS" },
    { name: "Azure", type: "Cloud Computing" },
    { name: "AWS", type: "Cloud Infrastructure" },
    { name: "Adobe", type: "Creative & Document Cloud" },
    { name: "Autodesk", type: "Engineering Software" },
    { name: "ZWCAD", type: "CAD Solutions" },
    { name: "Cloud Platforms", type: "Scalable Infrastructure" },
    { name: "Digital Operations", type: "Enterprise Modernization" },
    { name: "Consulting Services", type: "Transformation Programs" }
  ]

  return (
    <section className="py-24 md:py-32 bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Why Choose Us */}
          <div>
            <FadeIn>
              <h3 className="text-sm font-heading font-bold tracking-[0.2em] uppercase text-accent mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-accent"></span>
                Why Choose Giriraj Marketing
              </h3>
              <h2 className="text-4xl font-heading font-extrabold mb-8 text-white tracking-tight">
                Enterprise-Grade Advantages
              </h2>
              <p className="text-lg text-text-secondary font-medium leading-relaxed mb-12">
                We bridge the gap between complex technology and business success, ensuring your organization has the robust IT foundation it needs to thrive in a digital-first world.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                {capabilities.map((cap, i) => (
                  <FadeIn key={i} delay={i * 0.05} className="flex items-start gap-4 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <FiCheck size={12} strokeWidth={3} />
                    </div>
                    <span className="text-white font-medium group-hover:text-accent transition-colors duration-300">{cap}</span>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Technology Expertise */}
          <div>
            <FadeIn delay={0.2}>
              <div className="p-10 bg-card/30 backdrop-blur-xl border border-white/5 rounded-[32px] h-full shadow-[0_0_40px_rgba(37,99,235,0.05)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full pointer-events-none -z-10"></div>
                
                <h3 className="text-sm font-heading font-bold tracking-[0.2em] uppercase text-text-muted mb-8 flex items-center gap-4">
                  <FiLayers className="text-accent" />
                  Technology Ecosystem
                </h3>

                <div className="space-y-4">
                  {technologies.map((tech, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-bg-secondary/50 border border-white/5 rounded-2xl hover:border-accent/30 hover:bg-bg-secondary transition-all duration-300 group cursor-default">
                      <span className="text-lg font-heading font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                        {tech.name}
                      </span>
                      <span className="text-sm font-medium text-text-secondary tracking-wide bg-bg-primary/50 px-3 py-1 rounded-full">
                        {tech.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutCapabilities
