import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CorelLogo } from '../../components/LogoRegistry';
import { FiArrowRight, FiCheck, FiLayers } from 'react-icons/fi';
import { Reveal, SectionTitle, Eyebrow, StaggerContainer, StaggerItem, TextReveal } from '../../components/Section';
import EnterpriseCTA from '../../components/EnterpriseCTA';
import { AnimatedCounter, PremiumGlassCard, FloatingOrbs, OfficialLogoIcon } from '../../components/PremiumServiceComponents';

// =========================================================================
// DATA ARRAYS
// =========================================================================
const reasons = [
  { title: 'Vector Illustration', desc: 'Powerful vector design tools for creating complex graphics, logos, and illustrations.' },
  { title: 'Page Layout', desc: 'Create layouts for brochures, multi-page documents, and digital media with ease.' },
  { title: 'Photo Editing', desc: 'Professional image editing and retouching with PHOTO-PAINT, fully integrated into your workflow.' },
  { title: 'Typography Tools', desc: 'Advanced font management and typography features for perfect text layout.' },
  { title: 'Print Production', desc: 'Industry-leading color management and prepress tools for flawless print output.' },
  { title: 'High Performance', desc: 'Optimized for the latest multi-core processors and hardware acceleration.' },
];

const solutions = [
  { title: 'CorelDRAW', desc: 'Vector illustration and page layout software.' },
  { title: 'PHOTO-PAINT', desc: 'Pixel-based image editing and design.' },
  { title: 'Font Manager', desc: 'Explore, manage, and organize fonts effortlessly.' },
  { title: 'CorelDRAW.app', desc: 'Design on the go via web browser or iPad.' },
  { title: 'PowerTRACE', desc: 'AI-assisted bitmap-to-vector tracing.' },
  { title: 'AfterShot HDR', desc: 'RAW photo editor and HDR creator.' },
  { title: 'Enterprise Licensing', desc: 'Flexible volume licensing for teams.' },
  { title: 'Silent Deployment', desc: 'Network deployment with MSI support.' },
];

export default function CorelDRAWGraphicsSuite() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="relative min-h-screen bg-bg-primary overflow-hidden selection:bg-accent/30 selection:text-text-primary">

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
                <Eyebrow className="text-accent border-accent/20 bg-accent/5">Professional Graphic Design</Eyebrow>
              </Reveal>
              <Reveal direction="up" delay={0.08}>
                <div className="flex items-center gap-4 mb-6">
                  <OfficialLogoIcon Logo={CorelLogo} size={56} className="drop-shadow-sm" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight text-text-primary">
                  <TextReveal text="Design Brilliance" delay={0.08} />{' '}
                  <span className="text-gradient-accent inline-block">
                    With CorelDRAW
                  </span><br />
                </h1>
              </Reveal>
              <Reveal direction="up" delay={0.14}>
                <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                  Empower your creative teams with CorelDRAW Graphics Suite. We provide specialized volume licensing, silent deployment, and enterprise support for your design infrastructure.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/contact-us" className="group relative overflow-hidden rounded-full bg-accent px-8 py-4 text-white font-medium shadow-[0_8px_30px_rgba(135,169,135,0.3)] transition-transform hover:-translate-y-1 inline-flex items-center gap-2">
                    <span className="relative z-10 flex items-center gap-2">
                      Get a Quote
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
                  <FiLayers className="w-24 h-24 text-accent relative z-10 drop-shadow-sm" />
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
                <AnimatedCounter from={0} to={7} duration={2} />+
              </h4>
              <p className="text-sm font-medium text-text-secondary uppercase tracking-wider">Premium Apps</p>
            </div>
            <div className="px-4">
              <h4 className="text-4xl font-bold text-text-primary mb-2">
                <AnimatedCounter from={0} to={100} duration={2.5} />+
              </h4>
              <p className="text-sm font-medium text-text-secondary uppercase tracking-wider">File Formats</p>
            </div>
            <div className="px-4">
              <h4 className="text-4xl font-bold text-text-primary mb-2">
                <AnimatedCounter from={0} to={1000} duration={2} />+
              </h4>
              <p className="text-sm font-medium text-text-secondary uppercase tracking-wider">High-Res Fonts</p>
            </div>
            <div className="px-4 flex flex-col items-center justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full font-semibold border border-accent/20">
                <FiCheck className="w-4 h-4" /> Corel Authorized
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="relative z-10 py-32 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal direction="down"><Eyebrow className="mb-4">Why CorelDRAW</Eyebrow></Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">Complete Graphic Design Solution</h2>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-lg text-text-secondary">A comprehensive suite of professional graphic design applications for vector illustration, layout, photo editing, and more.</p>
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
                <Eyebrow className="mb-4">The Suite Applications</Eyebrow>
                <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">Everything You Need to Succeed</h2>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  We provide volume licensing and upgrade assurance for the entire CorelDRAW Graphics Suite, ensuring your design teams have the latest tools.
                </p>
                <Link to="/contact-us" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-text-primary transition-colors group">
                  Discuss Enterprise Licensing 
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
        title="Upgrade Your Design Team Today"
        description="Speak with our software licensing experts to find the right CorelDRAW volume licensing plan for your business."
        primaryButtonText="Request Quote"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Explore Adobe"
        secondaryButtonLink="/services/adobe"
      />
    </div>
  );
}
