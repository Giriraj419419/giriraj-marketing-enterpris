import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GstarCADLogo } from '../../components/LogoRegistry';
import { FiArrowRight, FiCheck, FiCompass } from 'react-icons/fi';
import { Reveal, SectionTitle, Eyebrow, StaggerContainer, StaggerItem, TextReveal } from '../../components/Section';
import EnterpriseCTA from '../../components/EnterpriseCTA';
import { AnimatedCounter, PremiumGlassCard, FloatingOrbs, OfficialLogoIcon } from '../../components/PremiumServiceComponents';
import SEO from '../../components/SEO';

// =========================================================================
// DATA ARRAYS
// =========================================================================
const reasons = [
  { title: 'Seamless Compatibility', desc: 'Native DWG support ensures flawless integration with your existing CAD files and workflows.' },
  { title: 'Cost-Effective Licensing', desc: 'Perpetual and flexible network licensing models dramatically reduce your software overhead.' },
  { title: 'High Performance', desc: 'Advanced multi-core processing architecture allows rapid loading of massive complex drawings.' },
  { title: 'Familiar Interface', desc: 'Zero learning curve for users switching from AutoCAD, preserving productivity from day one.' },
  { title: 'Custom API Support', desc: 'Extensive support for LISP, VBA, GRX, and .NET to run your custom plugins effortlessly.' },
  { title: 'Enterprise Reliability', desc: 'Trusted by millions of users globally for mission-critical design and drafting.' },
];

const solutions = [
  { title: 'GstarCAD Standard', desc: 'Essential 2D drafting and detailing for professionals.' },
  { title: 'GstarCAD Professional', desc: 'Advanced 2D/3D CAD with powerful solid modeling tools.' },
  { title: 'GstarCAD Mechanical', desc: 'Specialized tools for manufacturing and mechanical engineering.' },
  { title: 'GstarCAD Architecture', desc: 'Customized features for architectural design and drafting.' },
  { title: 'Network Licensing', desc: 'Floating licenses to maximize ROI for enterprise teams.' },
  { title: 'Migration Services', desc: 'Smooth transition from legacy CAD systems to GstarCAD.' },
  { title: 'Performance Optimization', desc: 'Tuning systems for maximum rendering and drafting speed.' },
  { title: 'Enterprise Support', desc: 'Dedicated technical assistance and training programs.' },
];

export default function GstarCADSolutions() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="relative min-h-screen bg-bg-primary overflow-hidden selection:bg-[#F26422]/30 selection:text-text-primary">
      <SEO title="GstarCAD Solutions" description="Cost-effective, high-performance CAD solutions with GstarCAD enterprise licenses." url="/services/gstarcad" />

      {/* Background */}
      <FloatingOrbs />
      <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none z-0" />

      {/* ===== HERO ===== */}
      <section className="relative z-10 pt-36 pb-24 min-h-[90vh] flex flex-col justify-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Column */}
            <div className="space-y-8 relative z-10 text-left">
              <Reveal direction="down">
                <Eyebrow className="text-accent border-accent/20 bg-accent/5">Professional CAD Solutions</Eyebrow>
              </Reveal>
              <Reveal direction="up" delay={0.08}>
                <div className="flex items-center gap-4 mb-6">
                  <OfficialLogoIcon Logo={GstarCADLogo} size={56} className="drop-shadow-sm" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight text-text-primary">
                  <TextReveal text="High-Performance" delay={0.08} />{' '}
                  <span className="text-gradient-accent inline-block">
                    GstarCAD
                  </span><br />
                </h1>
              </Reveal>
              <Reveal direction="up" delay={0.14}>
                <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                  Maximize your design efficiency while minimizing costs. GstarCAD delivers an incredibly fast, highly compatible, and cost-effective alternative for enterprise CAD workflows.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/contact-us" className="group relative overflow-hidden rounded-full bg-accent px-8 py-4 text-white font-medium shadow-[0_8px_30px_rgba(135,169,135,0.3)] transition-transform hover:-translate-y-1 inline-flex items-center gap-2">
                    <span className="relative z-10 flex items-center gap-2">
                      Get a Free Trial
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[glass-sweep_1.5s_ease-in-out_infinite]" />
                  </Link>
                  <Link to="/services" className="group px-8 py-4 rounded-full bg-white text-text-primary font-medium border border-border hover:border-accent/50 hover:bg-bg-secondary transition-all flex items-center gap-2">
                    All Services
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Column — Premium Float Element */}
            <Reveal direction="left" delay={0.2} className="relative z-10 flex justify-center w-full">
              <motion.div style={{ y: yParallax }} className="relative w-full max-w-lg aspect-square">
                {/* Center Glass Panel */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-[2rem] bg-white/70 backdrop-blur-2xl border border-border shadow-[0_30px_80px_rgba(61,82,61,0.08)] flex items-center justify-center z-20"
                >
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/60 to-white/10 pointer-events-none" />
                  <FiCompass className="w-24 h-24 text-accent relative z-10 drop-shadow-sm" />
                </motion.div>

                {/* Orbiting Elements Removed as per Strict Logo Policy */}
              </motion.div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ===== TRUST / STATS SECTION ===== */}
      <section className="relative z-10 py-16 border-y border-border bg-white/50 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/50 text-center">
            <div className="px-4">
              <h4 className="text-4xl font-bold text-text-primary mb-2">
                <AnimatedCounter from={0} to={100} duration={2} />%
              </h4>
              <p className="text-sm font-medium text-text-secondary uppercase tracking-wider">DWG Compatibility</p>
            </div>
            <div className="px-4">
              <h4 className="text-4xl font-bold text-text-primary mb-2">
                <AnimatedCounter from={0} to={80} duration={2.5} />%
              </h4>
              <p className="text-sm font-medium text-text-secondary uppercase tracking-wider">Cost Reduction</p>
            </div>
            <div className="px-4">
              <h4 className="text-4xl font-bold text-text-primary mb-2">
                <AnimatedCounter from={0} to={14} duration={2} />
              </h4>
              <p className="text-sm font-medium text-text-secondary uppercase tracking-wider">Languages Supported</p>
            </div>
            <div className="px-4 flex flex-col items-center justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full font-semibold border border-accent/20">
                <FiCheck className="w-4 h-4" /> Premier Partner
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="relative z-10 py-32 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal direction="down"><Eyebrow className="mb-4">Why GstarCAD</Eyebrow></Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">Uncompromising Performance, Unbeatable Value</h2>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-lg text-text-secondary">Stop overpaying for your CAD software. GstarCAD provides perpetual licenses and blazing-fast performance without sacrificing capability.</p>
            </Reveal>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerChildren={0.1}>
            {reasons.map((r, i) => (
              <StaggerItem key={r.title} direction="up">
                <PremiumGlassCard className="p-10 h-full flex flex-col min-h-[280px]">
                  <h3 className="text-xl font-bold text-text-primary mb-4">{r.title}</h3>
                  <p className="text-base leading-relaxed text-text-secondary flex-1">{r.desc}</p>
                </PremiumGlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== SOLUTIONS ===== */}
      <section className="relative z-10 py-32 border-t border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <Reveal direction="right">
                <Eyebrow className="mb-4">GstarCAD Portfolio</Eyebrow>
                <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">Tailored to Your Discipline</h2>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  Whether you are detailing mechanical components, drafting architectural floor plans, or managing enterprise-wide floating licenses, we have the right edition for you.
                </p>
                <Link to="/contact-us" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-text-primary transition-colors group">
                  Discuss Your Requirements 
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            </div>
            
            <div className="lg:col-span-7">
              <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerChildren={0.1}>
                {solutions.map((s, i) => (
                  <StaggerItem key={i} direction="left">
                    <PremiumGlassCard className="p-6 flex flex-col gap-4 group hover:bg-bg-primary h-full">
                      <div>
                        <h3 className="text-lg font-bold text-text-primary mb-1">{s.title}</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                      </div>
                    </PremiumGlassCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FLAGSHIP ENTERPRISE CTA ===== */}
      <EnterpriseCTA
        title="Ready to Switch and Save?"
        description="Contact our CAD experts to arrange a free trial of GstarCAD and see how easy the transition is."
        primaryButtonText="Request Trial"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Explore ZWCAD"
        secondaryButtonLink="/services/zwcad"
      />
    </div>
  );
}
