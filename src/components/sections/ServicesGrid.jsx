import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { useMousePosition } from '../../hooks/useMousePosition'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { BlurReveal, StaggerContainer, StaggerItem } from '../AnimatedText'
import {
  MicrosoftLogo, AzureLogo, AWSLogo, AdobeLogo,
  AutodeskLogo, GstarCADLogo, CorelLogo, ZWCADLogo
} from '../LogoRegistry'

/* ─── Service Data ────────────────────────────────────────────────── */
const services = [
  {
    title:    'Microsoft Solutions',
    subtitle: 'Cloud Productivity & Business Applications',
    desc:     "Empower your organization with Microsoft's industry-leading productivity, collaboration, security, and cloud technologies. Giriraj provides licensing, deployment, migration, and ongoing support for Microsoft business solutions.",
    Logo:     MicrosoftLogo,
    badge:    'Productivity',
    offerings: ['Microsoft 365', 'Exchange Online', 'Microsoft Teams', 'SharePoint', 'OneDrive for Business', 'Azure Cloud Services', 'Microsoft Security', 'Endpoint Management'],
    link:     '/services/microsoft',
    glow:     'rgba(0,120,212,0.06)',
  },
  {
    title:    'Microsoft Azure',
    subtitle: 'Secure, Scalable & Intelligent Cloud Infrastructure',
    desc:     'Transform your business with Microsoft Azure — a powerful cloud platform delivering scalability, security, and performance. We help organizations migrate, deploy, manage, and optimize Azure environments.',
    Logo:     AzureLogo,
    badge:    'Cloud',
    offerings: ['Azure Migration', 'Virtual Machines', 'Azure Networking', 'Backup & Recovery', 'Hybrid Cloud', 'Azure Security', 'Storage Solutions', 'Managed Azure'],
    link:     '/services/microsoft-azure',
    glow:     'rgba(0,120,212,0.06)',
  },
  {
    title:    'AWS Cloud',
    subtitle: 'Enterprise Cloud Infrastructure Built for Performance',
    desc:     'Build highly resilient database systems, load-balanced container clusters, and secure cloud environments on Amazon Web Services.',
    Logo:     AWSLogo,
    badge:    'Cloud',
    offerings: ['AWS Lift-and-Shift', 'EC2 Provisioning', 'VPC Landing Zones', 'S3 & Database Setup', 'IAM Security Audits', 'Savings Plan Tuning'],
    link:     '/services/aws-cloud',
    glow:     'rgba(255,153,0,0.06)',
  },
  {
    title:    'Adobe Solutions',
    subtitle: 'Creative, Marketing & Document Productivity Platforms',
    desc:     'Consolidate visual design, vector illustration, video workflows, and secure PDF tools under consolidated enterprise license plans.',
    Logo:     AdobeLogo,
    badge:    'Creative',
    offerings: ['Creative Cloud', 'Acrobat Pro Licensing', 'VIP/ETLA Scoping', 'Admin Console', 'SSO Setup', 'License Reallocation'],
    link:     '/services/adobe',
    glow:     'rgba(255,0,0,0.05)',
  },
  {
    title:    'Autodesk Solutions',
    subtitle: 'Design, Engineering & Innovation Software Management',
    desc:     "Empower architects, engineers, designers, and manufacturers with Autodesk's industry-leading software. We implement, manage, and optimize Autodesk technologies across every stage of the design lifecycle.",
    Logo:     AutodeskLogo,
    badge:    'Engineering',
    offerings: ['AutoCAD Solutions', 'Autodesk Revit', 'BIM Implementation', 'Autodesk Inventor', 'Civil 3D', 'Autodesk Licensing', 'Deployment & Config', 'Training & Support'],
    link:     '/services/autodesk',
    glow:     'rgba(0,70,127,0.06)',
  },
  {
    title:    'GstarCAD Solutions',
    subtitle: 'Professional CAD Software for Modern Design Teams',
    desc:     'Enhance productivity and reduce software costs with GstarCAD — a powerful, reliable CAD platform for architects, engineers, designers, and construction professionals.',
    Logo:     GstarCADLogo,
    badge:    'CAD',
    offerings: ['GstarCAD Licensing', 'CAD Migration', 'DWG Compatibility', 'Enterprise Deployment', 'User Training', 'Technical Support', 'Workflow Optimization', 'License Management'],
    link:     '/services/gstarcad',
    glow:     'rgba(0,168,150,0.06)',
  },
  {
    title:    'CorelDRAW Suite',
    subtitle: 'Professional Design & Illustration Software Solutions',
    desc:     'Draft vector graphics, create corporate print designs, and edit assets using CorelDRAW Graphic Suite volume programs for design teams.',
    Logo:     CorelLogo,
    badge:    'Design',
    offerings: ['Vector Design Suites', 'PHOTO-PAINT Setup', 'Font Manager Config', 'Transactional Licensing', 'Upgrade Assurance', 'Silent MSI Packing'],
    link:     '/services/coreldraw',
    glow:     'rgba(135,169,135,0.08)',
  },
  {
    title:    'ZWCAD Solutions',
    subtitle: 'Reliable CAD Software for Engineering & Design Professionals',
    desc:     'Load massive 100MB+ drawing files instantly using a high-performance, multi-core CAD processing engine with perpetual licenses.',
    Logo:     ZWCADLogo,
    badge:    'CAD',
    offerings: ['Floating License Keys', 'DWG Compatibility', 'Smart Select & Voice', 'Mobile CAD Sync', 'VBA & .NET APIs', 'Plotting Support'],
    link:     '/services/zwcad',
    glow:     'rgba(11,84,156,0.06)',
  },
]

/* ─── Enterprise Badge ────────────────────────────────────────────── */
const EnterpriseBadge = ({ label }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center',
    padding: '3px 10px', borderRadius: 999,
    background: 'rgba(212,231,212,0.75)',
    border: '1px solid rgba(135,169,135,0.2)',
    fontSize: 11, fontWeight: 600,
    color: '#3D523D', letterSpacing: '0.06em',
    lineHeight: 1.6,
    backdropFilter: 'blur(6px)',
  }}>
    {label}
  </span>
)

/* ─── Service Card ────────────────────────────────────────────────── */
const ServiceCard = ({ srv, reduced }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <StaggerItem className="h-full">
      <Link
        to={srv.link}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ textDecoration: 'none', display: 'block', height: '100%' }}
      >
        <motion.div
          animate={reduced ? {} : {
            y:         hovered ? -8 : 0,
            boxShadow: hovered
              ? '0 25px 60px rgba(61,82,61,0.09), 0 4px 16px rgba(61,82,61,0.04)'
              : '0 2px 14px rgba(61,82,61,0.03)',
          }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative', height: '100%',
            padding: '28px', borderRadius: 24,
            background: 'rgba(255,255,255,0.6)',
            backdropFilter: 'blur(12px)',
            border: hovered ? '1px solid rgba(135,169,135,0.28)' : '1px solid rgba(135,169,135,0.12)',
            display: 'flex', flexDirection: 'column',
            overflow: 'hidden',
            transition: 'border-color 0.3s',
          }}
        >
          {/* Inner ambient glow */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'absolute', inset: 0, borderRadius: 24, pointerEvents: 'none',
              background: `radial-gradient(ellipse at 50% 0%, ${srv.glow} 0%, transparent 60%)`,
            }}
          />

          {/* Top row: logo + badge */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20, position: 'relative', zIndex: 1 }}>
            {/* Logo container */}
            <motion.div
              animate={reduced ? {} : {
                rotate: hovered ? 2 : 0,
                scale:  hovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: 72, height: 72, borderRadius: 20,
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(135,169,135,0.15)',
                backdropFilter: 'blur(12px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, overflow: 'hidden',
                boxShadow: hovered ? '0 8px 24px rgba(135,169,135,0.15)' : 'none',
                transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s, transform 0.3s',
              }}
            >
              <srv.Logo style={{ width: '42px', height: '42px', objectFit: 'contain' }} />
            </motion.div>

            <EnterpriseBadge label={srv.badge} />
          </div>

          {/* Title & subtitle */}
          <div style={{ marginBottom: 14, position: 'relative', zIndex: 1 }}>
            <motion.h3
              animate={reduced ? {} : { x: hovered ? 3 : 0 }}
              transition={{ duration: 0.3 }}
              style={{
                fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em',
                color: '#3D523D', margin: '0 0 5px', lineHeight: 1.2,
                transition: 'color 0.25s',
              }}
            >
              {srv.title}
            </motion.h3>
            <p style={{
              fontSize: 12, fontWeight: 600, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#87A987',
              margin: 0, lineHeight: 1.4, opacity: 0.9,
            }}>
              {srv.subtitle}
            </p>
          </div>

          {/* Description */}
          <p style={{
            fontSize: 14, color: 'rgba(61,82,61,0.72)', lineHeight: 1.65,
            margin: '0 0 20px', fontWeight: 400,
            opacity: hovered ? 1 : 0.88, transition: 'opacity 0.3s',
            position: 'relative', zIndex: 1,
          }}>
            {srv.desc}
          </p>

          {/* Offerings */}
          <div style={{ marginBottom: 22, position: 'relative', zIndex: 1 }}>
            <span style={{
              fontSize: 10, color: 'rgba(61,82,61,0.45)',
              textTransform: 'uppercase', letterSpacing: '0.2em',
              fontWeight: 700, display: 'block', marginBottom: 10,
            }}>
              Key Offerings
            </span>
            <ul style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '7px 16px', listStyle: 'none', margin: 0, padding: 0,
            }}>
              {srv.offerings.map((offer, idx) => (
                <li key={idx} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 6,
                  fontSize: 12, color: 'rgba(61,82,61,0.7)', lineHeight: 1.3, fontWeight: 500,
                }}>
                  <FiCheck
                    size={11}
                    style={{ color: '#87A987', flexShrink: 0, marginTop: 2 }}
                  />
                  {offer}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div style={{ marginTop: 'auto', position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: hovered ? '#87A987' : 'rgba(61,82,61,0.45)',
              transition: 'color 0.25s',
            }}>
              <span>Explore Solutions</span>
              <motion.span
                animate={reduced ? {} : { x: hovered ? 5 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <FiArrowRight size={13} />
              </motion.span>
            </div>
          </div>
        </motion.div>
      </Link>
    </StaggerItem>
  )
}

/* ─── Main Component ──────────────────────────────────────────────── */
const ServicesGrid = () => {
  const containerRef  = useRef(null)
  const mousePosition = useMousePosition()
  const reduced       = useReducedMotion()

  return (
    <section
      ref={containerRef}
      className="py-28 bg-[#FDFBF7] relative overflow-hidden border-y border-[#87A987]/10"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {!reduced && (
          <motion.div
            animate={{ scale: [1, 1.1, 0.97, 1.06, 1], x: [0, 25, -15, 12, 0], y: [0, -15, 12, -8, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#87A987]/[0.04] rounded-full"
            style={{ filter: 'blur(100px)' }}
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(135,169,135,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(135,169,135,0.025)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_30%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="text-center mb-18 max-w-4xl mx-auto" style={{ marginBottom: 72 }}>
          <BlurReveal delay={0} className="inline-block mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#87A987]/20 bg-white/70 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#87A987] animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#556B55]">Official Technology Partners</span>
            </div>
          </BlurReveal>

          <BlurReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#3D523D] leading-tight tracking-tight mb-6">
              Empowering Businesses Through{' '}
              <span className="text-[#87A987]">Enterprise Technology</span>
            </h2>
          </BlurReveal>

          <BlurReveal delay={0.2}>
            <p className="text-[15px] text-[rgba(61,82,61,0.72)] font-body leading-relaxed max-w-2xl mx-auto">
              Cloud solutions, enterprise software licensing, infrastructure consulting, and digital transformation services designed to help organizations scale securely and efficiently.
            </p>
          </BlurReveal>
        </div>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6" stagger={0.07} delay={0.1}>
          {services.map((srv, i) => (
            <ServiceCard key={i} srv={srv} mousePosition={mousePosition} reduced={reduced} />
          ))}
        </StaggerContainer>

      </div>
    </section>
  )
}

export default ServicesGrid
