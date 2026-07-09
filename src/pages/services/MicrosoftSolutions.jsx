import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { MicrosoftLogo } from '../../components/LogoRegistry';
import { FiArrowRight, FiCheck, FiBriefcase } from 'react-icons/fi';
import EnterpriseCTA from '../../components/EnterpriseCTA';
import { Reveal, SectionTitle, Eyebrow, StaggerContainer, StaggerItem, TextReveal } from '../../components/Section';

import { AnimatedCounter, PremiumGlassCard, FloatingOrbs, OfficialLogoIcon } from '../../components/PremiumServiceComponents';

// =========================================================================
// DATA
// =========================================================================
const features = [
  { title: 'Business Email', desc: 'Professional email with custom domains, large mailboxes, and advanced security.' },
  { title: 'Calendar & Scheduling', desc: 'Shared calendars and smart scheduling to keep teams aligned and productive.' },
  { title: 'Documents & Files', desc: 'Word, Excel, PowerPoint, and OneDrive storage accessible from anywhere.' },
  { title: 'Collaboration', desc: 'Microsoft Teams for chat, meetings, and seamless teamwork across devices.' },
  { title: 'Security & Compliance', desc: 'Enterprise-grade protection with advanced threat analytics and compliance tools.' },
  { title: 'Cloud Storage', desc: 'OneDrive for Business with scalable, secure cloud storage for your organisation.' },
];

const highlights = [
  { title: 'Meet & Collaborate', desc: 'Teams brings chat, meetings, and file collaboration together in one place.' },
  { title: 'Store & Share', desc: 'OneDrive for Business offers secure, scalable cloud storage for your team.' },
  { title: 'Communicate', desc: 'Outlook and Exchange for professional, reliable enterprise email.' },
];

export default function MicrosoftSolutions() {
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
            
            {/* Left */}
            <div className="space-y-8 relative z-10 text-left">
              <Reveal direction="down">
                <Eyebrow className="text-accent border-accent/20 bg-accent/5">Microsoft 365 Suite</Eyebrow>
              </Reveal>
              <Reveal direction="up" delay={0.08}>
                <div className="flex items-center gap-4 mb-6">
                  <OfficialLogoIcon Logo={MicrosoftLogo} size={56} className="drop-shadow-sm" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight text-text-primary">
                  <TextReveal text="Productivity &" delay={0.08} />{' '}
                  <span className="text-gradient-accent inline-block">
                    Collaboration
                  </span><br />
                  in the Cloud
                </h1>
              </Reveal>
              <Reveal direction="up" delay={0.14}>
                <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                  Empower your organisation with Microsoft 365 — the complete productivity cloud
                  for modern enterprise teams. Engineered for secure, anytime-anywhere work.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/contact-us" className="group relative overflow-hidden rounded-full bg-accent px-8 py-4 text-white font-medium shadow-[0_8px_30px_rgba(135,169,135,0.3)] transition-transform hover:-translate-y-1 inline-flex items-center gap-2">
                    <span className="relative z-10 flex items-center gap-2">
                      Deploy Microsoft 365
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {/* Magnetic/Sweep glow */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[glass-sweep_1.5s_ease-in-out_infinite]" />
                  </Link>
                  <Link to="/services" className="group px-8 py-4 rounded-full bg-white text-text-primary font-medium border border-border hover:border-accent/50 hover:bg-bg-secondary transition-all flex items-center gap-2">
                    Explore All Services
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Column — Premium Float Element */}
            <Reveal direction="left" delay={0.2} className="relative z-10 flex justify-center w-full">
              <motion.div 
                style={{ y: yParallax }}
                className="relative w-full max-w-lg aspect-square"
              >
                {/* Center Glass Panel */}
                <motion.div 
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-[2rem] bg-white/70 backdrop-blur-2xl border border-border shadow-[0_30px_80px_rgba(61,82,61,0.08)] flex items-center justify-center z-20"
                >
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/60 to-white/10 pointer-events-none" />
                  <FiBriefcase className="w-24 h-24 text-accent relative z-10 drop-shadow-sm" />
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
                <AnimatedCounter from={0} to={99} duration={2} />%
              </h4>
              <p className="text-sm font-medium text-text-secondary uppercase tracking-wider">Uptime SLA</p>
            </div>
            <div className="px-4">
              <h4 className="text-4xl font-bold text-text-primary mb-2">
                <AnimatedCounter from={0} to={24} duration={2} />/7
              </h4>
              <p className="text-sm font-medium text-text-secondary uppercase tracking-wider">Enterprise Support</p>
            </div>
            <div className="px-4">
              <h4 className="text-4xl font-bold text-text-primary mb-2">
                <AnimatedCounter from={0} to={500} duration={2.5} />+
              </h4>
              <p className="text-sm font-medium text-text-secondary uppercase tracking-wider">Deployments</p>
            </div>
            <div className="px-4 flex flex-col items-center justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full font-semibold border border-accent/20">
                <FiCheck className="w-4 h-4" /> Official Partner
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="relative z-10 py-32 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal direction="down"><Eyebrow className="mb-4">Suite Details</Eyebrow></Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">Everything Your Team Needs to Thrive</h2>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-lg text-text-secondary">A complete suite of productivity, communication, and security tools seamlessly integrated under one ecosystem.</p>
            </Reveal>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerChildren={0.1}>
            {features.map((f, i) => (
              <StaggerItem key={f.title} direction="up">
                <PremiumGlassCard className="p-10 h-full flex flex-col min-h-[280px]">
                  <h3 className="text-xl font-bold text-text-primary mb-4">{f.title}</h3>
                  <p className="text-base leading-relaxed text-text-secondary flex-1">{f.desc}</p>
                </PremiumGlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="relative z-10 py-32 border-t border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <Reveal direction="right">
                <Eyebrow className="mb-4">Core Benefits</Eyebrow>
                <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">Why Microsoft 365 for Your Enterprise</h2>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  Consolidate your tools, reduce IT overhead, and empower your workforce to collaborate securely from anywhere with the world's leading cloud productivity platform.
                </p>
                <Link to="/contact-us" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-text-primary transition-colors group">
                  Consult our Experts 
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            </div>
            
            <div className="lg:col-span-7">
              <StaggerContainer className="grid gap-6" staggerChildren={0.1}>
                {highlights.map((h, i) => (
                  <StaggerItem key={i} direction="left">
                    <PremiumGlassCard className="p-6 flex items-start gap-6 group hover:bg-bg-primary">
                      <div>
                        <h3 className="text-lg font-bold text-text-primary mb-2">{h.title}</h3>
                        <p className="text-base text-text-secondary leading-relaxed">{h.desc}</p>
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
        title="Ready to Empower Your Team with Microsoft 365?"
        description="Let our Microsoft-certified consultants help you deploy and optimise your M365 environment securely."
        primaryButtonText="Book Free Consultation"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Explore Azure"
        secondaryButtonLink="/services/microsoft-azure"
      />
    </div>
  );
}
