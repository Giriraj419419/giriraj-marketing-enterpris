import { Link } from 'react-router-dom';
import {
  Users, Target, Award, Shield,
  ArrowRight, CheckCircle2, Globe, Heart, Check, Building, Milestone, Eye
} from 'lucide-react';
import { Reveal, SectionTitle, Eyebrow, StaggerContainer, StaggerItem, TextReveal } from '../components/Section';
import { CosmosField, GlowingOrbs, TiltCard, SectionGlow } from '../components/Atmosphere';
import EnterpriseCTA from '../components/EnterpriseCTA';

const stats = [
  { val: '10+', label: 'Years Experience', icon: Award },
  { val: '500+', label: 'Projects Delivered', icon: CheckCircle2 },
  { val: '50+', label: 'Enterprise Clients', icon: Building },
  { val: '24/7', label: 'Support Available', icon: Shield },
];

const values = [
  { icon: Target, title: 'Excellence', desc: 'We deliver nothing but the best, ensuring every project exceeds expectations.' },
  { icon: Heart, title: 'Client-Centric', desc: 'Your success is our priority. We build solutions tailored to your unique needs.' },
  { icon: Shield, title: 'Integrity', desc: 'Transparency, honesty, and ethical practices form the foundation of our work.' },
  { icon: Globe, title: 'Innovation', desc: 'We constantly explore new technologies to keep you ahead of the curve.' },
];

const timeline = [
  { year: '2015', title: 'The Foundation', desc: 'KK Tech was founded with a vision to deliver premium enterprise infrastructure and licensing solutions.' },
  { year: '2018', title: 'Strategic Growth', desc: 'Acquired key partnerships with Microsoft, AWS, and Adobe, expanding our certified consultant base.' },
  { year: '2021', title: 'Global Operations', desc: 'Expanded infrastructure deployments to international workspaces, delivering low-latency cloud architectures.' },
  { year: '2026', title: 'Next-Gen Platforms', desc: 'Unifying cloud migration services with AI-driven operations for ₹100Cr+ enterprises.' }
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-[#FDFBF7]">
      <CosmosField />
      <GlowingOrbs />

      {/* ===== HERO ===== */}
      <section className="relative z-10 pt-40 pb-28 overflow-hidden min-h-[85vh] flex items-center bg-[#FDFBF7]">
        <SectionGlow color="blue" position="bottom-right" opacity={0.12} size={500} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center w-full">
          <Reveal direction="down">
            <Eyebrow accent="green">ABOUT GIRIRAJ MARKETING</Eyebrow>
          </Reveal>
          <Reveal direction="up" delay={0.08}>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[4.5rem] font-heading font-extrabold leading-[1.08] tracking-tight text-[#3D523D]">
              <TextReveal text="Engineering Digital" delay={0.08} />{' '}
              <span className="text-accent">
                Infrastructure.
              </span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.14}>
            <p className="mt-6 text-[18px] md:text-[21px] text-text-secondary leading-relaxed max-w-2xl mx-auto font-light">
              We align complex enterprise requirements with seamless, scalable, and secure technologies. We are the trusted integration partner for industry giants.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.2} className="mt-10 flex flex-wrap justify-center gap-4">
             <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[14px] bg-[#87A987] text-white font-bold text-[15px] hover:bg-[#6F8E6F] transition-all duration-300 shadow-[0_8px_24px_rgba(135,169,135,0.18)]">
                Work With Us
                <ArrowRight className="w-4 h-4" />
             </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== FOUNDER STORY / MISSION (Section B: Alternating Background) ===== */}
      <section className="relative z-10 py-32 bg-[rgba(212,231,212,0.20)] border-t border-b border-[#E6E2DA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Reveal direction="right" className="order-2 lg:order-1">
                 <div className="p-8 md:p-12 rounded-[24px] bg-white/75 border border-[#87A987]/15 shadow-sm backdrop-blur-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4E7D4]/30 rounded-full blur-2xl pointer-events-none" />
                    <div className="relative z-10">
                       <div className="flex items-center gap-3 mb-6">
                         <div className="w-10 h-10 rounded-lg bg-[#D4E7D4] flex items-center justify-center text-[#87A987]">
                           <Target size={20} />
                         </div>
                         <h3 className="text-xl font-heading font-extrabold text-[#3D523D]">Our Mission</h3>
                       </div>
                       <p className="text-text-secondary leading-relaxed mb-6 font-light">
                         At KK Tech / Giriraj Marketing, we believe that technology should be a catalyst for business growth, not an operational bottleneck. 
                         Our mission is to bridge the gap between complex enterprise IT requirements and seamless, scalable licensing and architecture.
                       </p>
                       <div className="flex items-center gap-3 border-t border-[#87A987]/10 pt-6">
                         <div className="w-12 h-12 rounded-full bg-[#D4E7D4] border border-[#87A987]/20 flex items-center justify-center shrink-0">
                            <Users className="w-5 h-5 text-[#87A987]" />
                         </div>
                         <div>
                            <div className="text-sm font-bold text-[#3D523D]">Dedicated Architects</div>
                            <div className="text-xs text-text-secondary">Certified engineering teams available for support</div>
                         </div>
                       </div>
                    </div>
                 </div>
              </Reveal>
              <Reveal direction="left" delay={0.1} className="order-1 lg:order-2">
                 <SectionTitle
                    eyebrow="Our Story"
                    title="Built on Trust and Technical Excellence"
                    sub="Since our inception, we have been driven by a singular focus: delivering measurable value through software, cloud migrations, and compute infrastructure."
                    accent="green"
                 />
                 <StaggerContainer className="mt-8 space-y-4" staggerChildren={0.1}>
                    {[
                      'Strategic IT consulting and roadmapping',
                      'Enterprise-grade cloud architectures',
                      'Proactive 24/7 managed support',
                      'Commitment to continuous innovation'
                    ].map((pt, i) => (
                      <StaggerItem key={i} direction="left">
                        <div className="flex items-center gap-3 text-[#3D523D]">
                           <div className="w-6 h-6 rounded-full bg-[#D4E7D4] flex items-center justify-center border border-[#87A987]/20 shrink-0">
                             <Check className="w-3.5 h-3.5 text-[#87A987]" />
                           </div>
                           <span className="text-sm font-medium text-text-secondary">{pt}</span>
                        </div>
                      </StaggerItem>
                    ))}
                 </StaggerContainer>
              </Reveal>
           </div>
        </div>
      </section>

      {/* ===== JOURNEY TIMELINE (Section C: Warm Alabaster) ===== */}
      <section className="relative z-10 py-32 bg-[#FDFBF7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            center
            eyebrow="Company Journey"
            title="Milestones of Growth"
            sub="A track record of technological transitions, scale achievements, and enterprise deployments."
            accent="green"
          />

          <div className="relative max-w-4xl mx-auto mt-20">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-[27px] md:left-1/2 md:-translate-x-1/2 w-[1px] bg-[#87A987]/25 z-0" />

            <div className="space-y-16">
              {timeline.map((item, i) => {
                const isEven = i % 2 === 0
                return (
                  <div key={i} className={`relative z-10 flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}>
                    
                    {/* Content */}
                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                      <Reveal direction="up" delay={i * 0.05}>
                        <div className="p-6 rounded-2xl bg-white border border-[#87A987]/15 hover:border-[#87A987]/40 transition-all duration-300 shadow-sm">
                          <span className="text-xs font-bold text-accent tracking-widest uppercase mb-1 block">{item.year}</span>
                          <h4 className="text-lg font-heading font-extrabold text-[#3D523D] mb-2">{item.title}</h4>
                          <p className="text-sm text-text-secondary leading-relaxed font-light">{item.desc}</p>
                        </div>
                      </Reveal>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-4 md:top-auto w-12 h-12 bg-white border-2 border-[#87A987] rounded-full flex items-center justify-center shadow-sm z-20">
                      <Milestone size={18} className="text-[#87A987]" />
                    </div>

                    <div className="hidden md:block w-1/2" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES CARDS (Section D: Soft Pistachio 0.06) ===== */}
      <section className="relative z-10 py-32 bg-[rgba(135,169,135,0.06)] border-t border-b border-[#E6E2DA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            center
            eyebrow="Core Values"
            title="What Drives Us Forward"
            sub="The core principles guiding our licensing practices, cloud architecture, and infrastructure support plans."
            accent="green"
          />
          <StaggerContainer className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerChildren={0.08}>
            {values.map((v, i) => (
              <StaggerItem key={i} direction="up">
                <TiltCard className="p-8 text-center h-full flex flex-col items-center group relative overflow-hidden bg-white/75 border border-[#87A987]/12 shadow-sm rounded-3xl backdrop-blur-md hover:-translate-y-1.5 transition-transform duration-300">
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-[#D4E7D4] border border-[#87A987]/25 text-[#87A987] group-hover:scale-105 transition-transform">
                      <v.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-heading font-extrabold text-[#3D523D] mb-3">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-text-secondary font-light">{v.desc}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== STATISTICS SECTION (Warm Alabaster) ===== */}
      <section className="relative z-10 py-24 bg-[#FDFBF7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 animate-fade-in" staggerChildren={0.08}>
            {stats.map((s, i) => (
              <StaggerItem key={i} direction="scale" className="text-center">
                <div className="p-6 rounded-3xl border border-[#87A987]/15 bg-white shadow-sm hover:border-[#87A987]/30 transition-colors">
                  <div className="flex justify-center mb-4 text-[#87A987]">
                     <s.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-heading font-extrabold text-[#3D523D] mb-2 tracking-tight">
                    {s.val}
                  </div>
                  <div className="text-sm font-bold text-text-secondary uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== FLAGSHIP ENTERPRISE CTA ===== */}
      <EnterpriseCTA 
        title="Ready to Transform Your Business?"
        description="Let's build something exceptional together. Reach out to our team of experts today."
        primaryButtonText="Get in Touch"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
      />
    </div>
  );
}
