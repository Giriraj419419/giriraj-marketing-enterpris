import { FadeIn, TextReveal } from '../AnimatedText'
import { MagneticButton } from '../MagneticButton'

const AboutHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-24 overflow-hidden">
      
      {/* Background System */}
      <div className="absolute inset-0 pointer-events-none z-0">
         {/* Perspective Grid */}
         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2Mmg0djRoMnYtNGg0VjRoLTR6bS0zMCAwVjBoLTJ2NGgtNHYyaDR2NGgydi00aDRWNGgtNHptMCAzMHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyIvPjwvZz48L3N2Zz4=')] opacity-30 mix-blend-overlay"></div>
         
         <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.12)_0%,transparent_60%)] blur-[100px] -translate-y-1/2"></div>
         <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.1)_0%,transparent_60%)] blur-[120px]"></div>
         <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl flex flex-col items-center">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-3 mb-10 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-100"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-alt"></span>
            </span>
            <span className="text-[11px] font-body font-semibold tracking-widest uppercase text-text-secondary">Authorized Technology Partner</span>
          </div>
        </FadeIn>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-8 tracking-tighter leading-[1.05]">
          <TextReveal text="Building Smarter" className="justify-center" />
          <br />
          <span className="text-gradient-accent"><TextReveal text="Businesses Through Technology" delay={0.2} className="justify-center" /></span>
        </h1>

        <FadeIn delay={0.4}>
          <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto mb-12 font-body font-normal leading-relaxed">
            Giriraj Marketing helps organizations transform, modernize, and grow through enterprise cloud solutions, software licensing, infrastructure services, and digital transformation consulting.
          </p>
        </FadeIn>

        <FadeIn delay={0.6} className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto mb-16">
          <MagneticButton to="/contact-us" variant="primary" className="w-full sm:w-auto min-w-[200px]">
            Book Free Consultation
          </MagneticButton>
          <MagneticButton to="/contact-us" variant="secondary" className="w-full sm:w-auto min-w-[200px]">
            Contact Our Team
          </MagneticButton>
        </FadeIn>

        {/* Trust Indicators */}
        <FadeIn delay={0.8} className="w-full max-w-4xl border-t border-white/5 pt-8 mt-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                'Authorized Partner',
                'Genuine Licensing',
                'Enterprise Support',
                'Certified Experts'
              ].map((label, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center gap-2">
                  <div className="text-accent">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <span className="text-[13px] font-body text-text-secondary font-medium tracking-wide">{label}</span>
                </div>
              ))}
           </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default AboutHero
