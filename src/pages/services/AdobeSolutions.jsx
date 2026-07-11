import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AdobeLogo } from '../../components/LogoRegistry';
import { FiArrowRight, FiCheck, FiPenTool } from 'react-icons/fi';
import { Reveal, SectionTitle, Eyebrow, StaggerContainer, StaggerItem, TextReveal } from '../../components/Section';
import EnterpriseCTA from '../../components/EnterpriseCTA';
import { AnimatedCounter, PremiumGlassCard, FloatingOrbs, OfficialLogoIcon } from '../../components/PremiumServiceComponents';
import SEO from '../../components/SEO';

// =========================================================================
// DATA ARRAYS
// =========================================================================
const reasons = [
  { title: 'Creative Cloud', desc: 'Industry-standard design tools including Photoshop, Illustrator, and InDesign for professionals.' },
  { title: 'Document Cloud', desc: 'Secure, paperless workflows with Acrobat Pro and Adobe Sign for enterprise productivity.' },
  { title: 'Video Production', desc: 'Professional video editing and motion graphics with Premiere Pro and After Effects.' },
  { title: 'UI/UX Design', desc: 'Design, prototype, and share user experiences with Adobe XD and integration tools.' },
  { title: 'Enterprise Licensing', desc: 'Simplified license management via the VIP and ETLA programs for large organizations.' },
  { title: 'Secure Assets', desc: 'Centralized asset protection, single sign-on (SSO), and robust admin controls.' },
];

const solutions = [
  { title: 'Creative Cloud for Teams', desc: 'Collaborative apps and services for creative teams.' },
  { title: 'Acrobat Sign', desc: 'Legally binding e-signatures and document workflows.' },
  { title: 'VIP Licensing', desc: 'Flexible subscription licensing for growing businesses.' },
  { title: 'Admin Console', desc: 'Centralized license and user management.' },
  { title: 'SSO Integration', desc: 'Enterprise identity management and SSO.' },
  { title: 'Adobe Stock', desc: 'High-quality, royalty-free assets for your projects.' },
  { title: 'Creative Cloud Storage', desc: 'Secure cloud storage and sharing for creative assets.' },
  { title: 'Substance 3D', desc: 'State-of-the-art 3D design and texturing.' },
];

export default function AdobeSolutions() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="relative min-h-screen bg-bg-primary overflow-hidden selection:bg-[#FF0000]/30 selection:text-text-primary">
      <SEO title="Adobe Solutions" description="Empower your creative teams with Adobe Creative Cloud enterprise licensing and management." url="/services/adobe" />

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
                <Eyebrow className="text-accent border-accent/20 bg-accent/5">Creative & Document Solutions</Eyebrow>
              </Reveal>
              <Reveal direction="up" delay={0.08}>
                <div className="flex items-center gap-4 mb-6">
                  <OfficialLogoIcon Logo={AdobeLogo} size={56} className="drop-shadow-sm" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight text-text-primary">
                  <TextReveal text="Unleash Creativity" delay={0.08} />{' '}
                  <span className="text-gradient-accent inline-block">
                    With Adobe
                  </span><br />
                </h1>
              </Reveal>
              <Reveal direction="up" delay={0.14}>
                <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                  Empower your teams with the world's best creative and document applications. Giriraj offers tailored Adobe licensing, deployment, and management to streamline your workflows.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/contact-us" className="group relative overflow-hidden rounded-full bg-accent px-8 py-4 text-white font-medium shadow-[0_8px_30px_rgba(135,169,135,0.3)] transition-transform hover:-translate-y-1 inline-flex items-center gap-2">
                    <span className="relative z-10 flex items-center gap-2">
                      Get Adobe Solutions
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
                  <FiPenTool className="w-24 h-24 text-accent relative z-10 drop-shadow-sm" />
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
                <AnimatedCounter from={0} to={20} duration={2} />+
              </h4>
              <p className="text-sm font-medium text-text-secondary uppercase tracking-wider">Creative Apps</p>
            </div>
            <div className="px-4">
              <h4 className="text-4xl font-bold text-text-primary mb-2">
                <AnimatedCounter from={0} to={100} duration={2.5} />GB
              </h4>
              <p className="text-sm font-medium text-text-secondary uppercase tracking-wider">Cloud Storage</p>
            </div>
            <div className="px-4">
              <h4 className="text-4xl font-bold text-text-primary mb-2">
                <AnimatedCounter from={0} to={24} duration={2} />/7
              </h4>
              <p className="text-sm font-medium text-text-secondary uppercase tracking-wider">Support</p>
            </div>
            <div className="px-4 flex flex-col items-center justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full font-semibold border border-accent/20">
                <FiCheck className="w-4 h-4" /> Certified Reseller
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="relative z-10 py-32 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal direction="down"><Eyebrow className="mb-4">The Suite</Eyebrow></Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">Create, Collaborate, Inspire</h2>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-lg text-text-secondary">Provide your workforce with the tools they need to bring their ideas to life, securely and efficiently.</p>
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
                <Eyebrow className="mb-4">Licensing Made Easy</Eyebrow>
                <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">Enterprise Licensing Simplified</h2>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  Managing software licenses shouldn't be a hurdle. We handle VIP and ETLA agreements, ensuring you get the best value, compliance, and easy re-assignment for your growing team.
                </p>
                <Link to="/contact-us" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-text-primary transition-colors group">
                  Get a Licensing Quote 
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
        title="Elevate Your Creative Workflows"
        description="Speak with our software licensing experts to find the right Adobe plan for your enterprise."
        primaryButtonText="Request Quote"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Explore Autodesk"
        secondaryButtonLink="/services/autodesk"
      />
    </div>
  );
}
