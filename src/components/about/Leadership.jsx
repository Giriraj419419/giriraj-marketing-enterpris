import { FadeIn } from '../AnimatedText'
import { FiLinkedin, FiTwitter } from 'react-icons/fi'

const Leadership = () => {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary relative border-y border-border overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.08)_0%,transparent_60%)] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="max-w-6xl mx-auto bg-card/30 backdrop-blur-xl border border-white/5 rounded-[40px] p-10 md:p-16 lg:p-24 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            
            {/* Image Placeholder */}
            <FadeIn className="lg:col-span-5">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-bg-primary border border-white/10 relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                
                {/* Placeholder content since we don't have a real image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-24 h-24 rounded-full border border-accent/30 bg-accent/10 flex items-center justify-center text-4xl text-accent font-heading font-extrabold mb-6">
                    VP
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-white mb-2 tracking-tight">Vijay Patel</h4>
                  <p className="text-sm font-heading tracking-[0.2em] uppercase text-text-muted">Founder & CEO</p>
                </div>
              </div>
            </FadeIn>

            {/* Message */}
            <FadeIn delay={0.2} className="lg:col-span-7">
              <h3 className="text-sm font-heading font-bold tracking-[0.2em] uppercase text-accent mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-accent"></span>
                Leadership Message
              </h3>
              
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-8 tracking-tight leading-tight">
                "Technology is only as powerful as the infrastructure supporting it."
              </h2>
              
              <div className="space-y-6 text-lg text-text-secondary font-medium leading-relaxed mb-10">
                <p>
                  When we founded Giriraj Marketing, we saw a critical gap in the market. Businesses were adopting advanced software but lacking the scalable, secure infrastructure required to run it efficiently. 
                </p>
                <p>
                  Today, we bridge that gap. We believe in providing holistic, end-to-end enterprise solutions—from cloud architecture to genuine software licensing. Our commitment is not just to technological innovation, but to forging long-lasting partnerships that empower our clients to dominate their respective industries.
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-8">
                <div>
                  <h4 className="text-xl font-heading font-bold text-white tracking-tight">Vijay Patel</h4>
                  <p className="text-sm font-heading tracking-[0.1em] uppercase text-text-muted mt-1">Founder & CEO</p>
                </div>
                
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
                    <FiLinkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
                    <FiTwitter size={18} />
                  </a>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Leadership
