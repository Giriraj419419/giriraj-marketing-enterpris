import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, ShieldCheck, Award, Compass, Play,
  Cloud, Cpu, Layers, Headphones
} from 'lucide-react'
import { FadeIn, TextReveal } from '../components/AnimatedText'
import Registry from '../components/LogoRegistry'
import SEO from '../components/SEO'
import TechnologyEcosystem from '../components/sections/TechnologyEcosystem'

// Official inline SVGs for fallback automation
const Logopaths = {
  microsoft: (
    <svg viewBox="0 0 23 23" className="w-5 h-5"><path fill="#f35325" d="M0 0h10v10H0z"/><path fill="#81bc06" d="M11 0h10v10H11z"/><path fill="#05a6f0" d="M0 11h10v10H0z"/><path fill="#ffba08" d="M11 11h10v10H11z"/></svg>
  ),
  aws: (
    <svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="#FF9900" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.8c-.8 0-1.5-.2-2.1-.5l.4-1.2c.4.3.9.4 1.4.4.7 0 1.1-.3 1.1-.9v-.3c-.3.4-.9.6-1.5.6-1.3 0-2.2-.9-2.2-2.3s.9-2.3 2.2-2.3c.6 0 1.2.2 1.5.6v-.4h1.3v5.1c0 1.7-1.1 2.2-2.6 2.2zm1.6-4.6c0-.7-.4-1.2-1.1-1.2s-1.1.5-1.1 1.2.4 1.2 1.1 1.2 1.1-.5 1.1-1.2zm6.2 4.4h-1.4v-4.5c0-1.1-.5-1.6-1.3-1.6-.7 0-1.3.4-1.5 1v5.1h-1.4v-7.1h1.3v.8c.4-.6 1-.9 1.8-.9 1.5 0 2.5 1 2.5 2.6v4.6z"/></svg>
  ),
  adobe: (
    <svg viewBox="0 0 24 24" className="w-5 h-5"><rect width="24" height="24" rx="4" fill="#FF0000"/><path fill="#FFFFFF" d="M12 4.5l6.5 15H15l-3-7.5-3 7.5H5.5z"/></svg>
  ),
  autodesk: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#3D523D" strokeWidth="2.5"><path d="M12 2L2 22h4l3-7h6l3 7h4L12 2zm-1.5 10l1.5-3.5 1.5 3.5h-3z"/></svg>
  ),
  enterprise: (
    <svg viewBox="0 0 24 24" className="w-6 h-5"><rect x="2" y="5" width="20" height="10" rx="1" fill="none" stroke="#01a982" strokeWidth="3"/></svg>
  ),
  azure: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0078d4"><path d="M5.4 19h13.2l2.4-5.5H8.3L5.4 19zm6.3-13.8L2 14.5h14.8l2.9-5.5L11.7 5.2z"/></svg>
  ),
  cisco: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#00bcf2"><path d="M8.5 7h1v10h-1zm3-3h1v16h-1zm3 2h1v12h-1zm3 3h1v8h-1zm-12 2h1v4h-1zm15 0h1v4h-1z"/></svg>
  )
}

const stats = [
  { val: '500+', label: 'Projects Delivered' },
  { val: '100+', label: 'Enterprise Clients' },
  { val: '15+', label: 'Years Experience' },
  { val: '24×7', label: 'Support Available' }
]

const industriesData = [
  {
    id: 'it',
    name: 'Information Technology',
    visual: (
      <svg className="w-16 h-16 text-[#87A987]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
        <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
        <line x1="10" y1="6" x2="18" y2="6" />
        <line x1="10" y1="18" x2="18" y2="18" />
      </svg>
    ),
    challenge: 'Managing infrastructure fragmentation, database read/write bottlenecks, and credential leaks.',
    solution: 'High-density data platforms, active directory sync, and automated cloud snapshots.',
    techs: ['microsoft', 'azure', 'aws', 'enterprise'],
    size: 'lg'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    visual: (
      <svg className="w-16 h-16 text-[#87A987]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 18H2v-4l4-5 4 5 4-5 4 5 4-5v4z" />
        <circle cx="6" cy="15" r="2" />
        <circle cx="18" cy="15" r="2" />
      </svg>
    ),
    challenge: 'Latency in remote CAD syncing, model rendering lags, and license compliance verification.',
    solution: 'Autodesk floating network licensing, enterprise storage clusters, and remote virtual workstations.',
    techs: ['autodesk', 'enterprise', 'microsoft'],
    size: 'md'
  },
  {
    id: 'education',
    name: 'Education',
    visual: (
      <svg className="w-16 h-16 text-[#87A987]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
    challenge: 'Distributing remote Adobe/Microsoft suites across thousands of students securely.',
    solution: 'Centralized Adobe ETLA agreements, Azure cloud labs, and Teams smart classrooms.',
    techs: ['microsoft', 'adobe', 'azure'],
    size: 'sm'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    visual: (
      <svg className="w-16 h-16 text-[#87A987]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <line x1="12" y1="9" x2="12" y2="15" />
        <line x1="9" y1="12" x2="15" y2="12" />
      </svg>
    ),
    challenge: 'Tight patient compliance regulations, data access logs, and core system uptime.',
    solution: 'Zero-trust network frameworks, encrypted infrastructure operations, and secure Azure document systems.',
    techs: ['microsoft', 'azure', 'adobe'],
    size: 'sm'
  },
  {
    id: 'banking',
    name: 'Banking & Finance',
    visual: (
      <svg className="w-16 h-16 text-[#87A987]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
      </svg>
    ),
    challenge: 'Security vulnerabilities, latency in database transactions, and strict compliance audits.',
    solution: 'High-availability cloud arrays, dedicated hardware vaults, and 24x7 security monitoring.',
    techs: ['microsoft', 'aws', 'cisco'],
    size: 'md'
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    visual: (
      <svg className="w-16 h-16 text-[#87A987]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    challenge: 'Scaling checkout nodes during peak sales, inventory sync delay, and platform security.',
    solution: 'AWS auto-scaling compute groups, cloud databases, and integrated Adobe Commerce licensing.',
    techs: ['adobe', 'aws', 'microsoft'],
    size: 'sm'
  },
  {
    id: 'government',
    name: 'Government Sector',
    visual: (
      <svg className="w-16 h-16 text-[#87A987]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 22h16M10 14h4M4 18h16M12 2l8 6v10H4V8z" />
      </svg>
    ),
    challenge: 'Rigid procurement systems, legacy database silos, and strict local compliance checks.',
    solution: 'On-premise hardware hosting, certified enterprise infrastructure builds, and direct SLA backing.',
    techs: ['microsoft', 'enterprise', 'azure'],
    size: 'lg'
  },
  {
    id: 'logistics',
    name: 'Logistics',
    visual: (
      <svg className="w-16 h-16 text-[#87A987]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    challenge: 'Real-time routing calculations, database replication gaps, and field communications.',
    solution: 'AWS cloud instances, Azure pipelines, and high-availability database scaling.',
    techs: ['microsoft', 'aws', 'azure'],
    size: 'sm'
  },
  {
    id: 'telecom',
    name: 'Telecommunications',
    visual: (
      <svg className="w-16 h-16 text-[#87A987]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 1.96-.75 3.74-1.96 5.09z" />
      </svg>
    ),
    challenge: 'Handling massive data throughput, low-latency switching, and complex software billing structures.',
    solution: 'High-performance compute clusters, hardware firewalls, and custom database tuning.',
    techs: ['aws', 'cisco', 'azure'],
    size: 'md'
  },
  {
    id: 'startups',
    name: 'Startups & Scaleups',
    visual: (
      <svg className="w-16 h-16 text-[#87A987]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    challenge: 'Rapid growth scalability, constrained capital reserves, and fast tech onboarding requirements.',
    solution: 'Pay-as-you-go AWS architectures, M365 startup packages, and managed IT configurations.',
    techs: ['aws', 'microsoft', 'azure'],
    size: 'sm'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Organizations',
    visual: (
      <svg className="w-16 h-16 text-[#87A987]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    challenge: 'Multi-office licensing drift, platform support updates, and complex security policies.',
    solution: 'Annual Maintenance Contracts (AMC), corporate licensing portals, and hybrid cloud integration.',
    techs: ['microsoft', 'aws', 'azure', 'autodesk'],
    size: 'lg'
  }
]

const partnersList = [
  { name: 'Microsoft', logo: 'microsoft', services: 'M365 Licensing, Cloud Productivity, Teams, AD integration', certs: 'Gold Partner' },
  { name: 'AWS', logo: 'aws', services: 'EC2 instances, S3 storage, custom IAM VPC setups', certs: 'Certified Architect Team' },
  { name: 'Adobe', logo: 'adobe', services: 'ETLA Agreements, Creative Cloud Admin Consoles', certs: 'Authorized Partner' },
  { name: 'Enterprise Cloud', logo: 'enterprise', services: 'Hybrid cloud platforms and business continuity services', certs: 'Certified Engineering Team' },
  { name: 'Autodesk', logo: 'autodesk', services: 'AutoCAD, Revit, BIM collaboration and floating licensing', certs: 'Authorized Partner' }
]

const successStories = [
  {
    client: 'GovTech Solutions',
    type: 'Security & Infrastructure Modernization',
    before: 'Legacy on-premise compute nodes experiencing frequent failover delays and high hardware maintenance overhead.',
    after: 'Deployed hybrid cloud clusters integrated with Azure backup structures.',
    metrics: [
      { label: 'Uptime Achieved', val: '99.99%' },
      { label: 'Compute Speedup', val: '2.8x' },
      { label: 'ROI Timeline', val: '14 Months' }
    ],
    impact: 'Resolved recurring failover lags, allowing the department to host citizen portals with zero downtime dispatches.'
  },
  {
    client: 'Apex Logistics Corp',
    type: 'Cloud Migration & Software Licensing consolidation',
    before: 'Fragmented Adobe and Microsoft suites across 5 remote operations offices, creating compliance audit liabilities.',
    after: 'Consolidated licensing under a singular Microsoft 365 Enterprise tenant and unified Adobe ETLA Console management.',
    metrics: [
      { label: 'Software Spend Saved', val: '32%' },
      { label: 'Console Setup Time', val: '1 Day' },
      { label: 'Retention Rate', val: '100%' }
    ],
    impact: 'Eliminated licensing compliance errors, reduced IT admin onboarding times, and streamlined communication flows.'
  }
]

const chooseReasons = [
  { title: 'Certified Experts', desc: 'Our certified engineers ensure that license deployments and cloud configurations exceed standards.', icon: Award },
  { title: 'Strategic Consulting', desc: 'We examine your business challenges first, drafting compute blueprints before hardware is shipped.', icon: Compass },
  { title: '24x7 Dedicated Support', desc: 'Direct access to level-2 support engineers without nested call queues.', icon: ShieldCheck },
  { title: 'Security First', desc: 'Hardware security integrations including Silicon Root of Trust and encrypted storage volumes.', icon: ShieldCheck }
]

const journeySteps = [
  { step: '01', title: 'Consultation', desc: 'Discover business bottlenecks, license allocations, and infrastructure parameters.' },
  { step: '02', title: 'Assessment', desc: 'Audit platform performance logs, compliance profiles, and workflow lags.' },
  { step: '03', title: 'Planning', desc: 'Deliver custom architectural blueprints, component specifications, and AMC SLAs.' },
  { step: '04', title: 'Implementation', desc: 'Zero-downtime execution, database replica staging, and software onboarding.' },
  { step: '05', title: 'Optimization', desc: 'Fine-tune network policies, security logs, and user credentials.' },
  { step: '06', title: 'Continuous Support', desc: 'Active monitoring, quarterly checks, and 24x7 hardware replacement.' }
]

const socialProof = [
  { val: '98%', label: 'Client Satisfaction Score' },
  { val: '100%', label: 'Project Success Rate' },
  { val: '96%', label: 'Annual Client Retention' },
  { val: '99%', label: 'Support Resolution Rate' }
]

const IndustryCard = ({ ind, hoveredCard, setHoveredCard }) => {
  const isHovered = hoveredCard === ind.id
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const gridSpan = ind.size === 'lg' ? 'md:col-span-3' : ind.size === 'md' ? 'md:col-span-2' : 'md:col-span-2'

  return (
    <motion.div
      layout
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHoveredCard(ind.id)}
      onMouseLeave={() => setHoveredCard(null)}
      className={`${gridSpan} relative overflow-hidden rounded-[32px] border border-[#87A987]/15 bg-white/65 backdrop-blur-md shadow-sm transition-all duration-300 p-8 min-h-[300px] flex flex-col justify-between cursor-pointer`}
      style={{
        boxShadow: isHovered ? '0 20px 45px rgba(61,82,61,0.08)' : '0 4px 20px rgba(61,82,61,0.02)',
        borderColor: isHovered ? '#87A987' : 'rgba(135,169,135,0.15)',
        transform: isHovered ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)'
      }}
    >
      {/* Background tracking glow */}
      {isHovered && (
        <div 
          className="absolute w-[200px] h-[200px] rounded-full pointer-events-none blur-[40px] opacity-20 bg-[#87A987] transition-all duration-150"
          style={{
            left: `${coords.x - 100}px`,
            top: `${coords.y - 100}px`
          }}
        />
      )}

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-[#87A987] group-hover:scale-105 transition-transform duration-300">
              {ind.visual}
            </div>
            {/* Expanded status indicators */}
            <div className="flex gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
          </div>

          <h3 className="text-xl font-heading font-extrabold text-[#3D523D] mb-4">{ind.name}</h3>
        </div>

        {/* Dynamic expanded content block */}
        <div className="mt-4">
          <AnimatePresence initial={false}>
            {isHovered ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden space-y-4"
              >
                <div className="border-t border-[#87A987]/15 pt-4 text-xs">
                  <span className="font-bold text-[#3D523D] block mb-1">Industry Challenge</span>
                  <p className="text-text-secondary font-light leading-relaxed">{ind.challenge}</p>
                </div>
                <div className="text-xs">
                  <span className="font-bold text-[#3D523D] block mb-1">GIRIRAJ Solution</span>
                  <p className="text-text-secondary font-light leading-relaxed">{ind.solution}</p>
                </div>

                {/* Tech logo stack reveal */}
                <div className="pt-2">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block mb-2">Technologies Used</span>
                  <div className="flex flex-wrap gap-2">
                    {ind.techs.map(techKey => (
                      <div 
                        key={techKey} 
                        className="px-2.5 py-1.5 rounded-lg bg-[#D4E7D4] border border-[#87A987]/20 flex items-center justify-center shadow-sm"
                        title={techKey.toUpperCase()}
                      >
                        {Logopaths[techKey]}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center text-accent text-xs font-bold uppercase tracking-widest pt-2">
                  Learn More <ArrowRight className="ml-2 w-3.5 h-3.5" />
                </div>
              </motion.div>
            ) : (
              <p className="text-xs text-text-secondary leading-relaxed font-light line-clamp-2">
                {ind.challenge}
              </p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default function Clients() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [activePartner, setActivePartner] = useState(null)

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] overflow-hidden">
      <SEO title="Clients & Partners" description="See the enterprise clients and integration partners who trust Giriraj Marketing." url="/clients" />
      
      {/* Mesh Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-[#87A987]/6 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[10%] w-[800px] h-[800px] bg-[#D4E7D4]/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay" />
      </div>

      {/* ==========================================
          1. HERO SECTION
          ========================================== */}
      <section className="relative z-10 pt-40 pb-28 min-h-[90vh] flex items-center bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#87A987]/15 backdrop-blur-md shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-bold tracking-wider text-[#3D523D] uppercase">TRUSTED INTEGRATOR</span>
                </div>
              </FadeIn>

              <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-heading font-extrabold leading-[1.08] tracking-tight text-[#3D523D]">
                <TextReveal text="Trusted By Businesses That" />
                <br />
                <span className="text-accent">Refuse To Compromise.</span>
              </h1>

              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-[#556B55] max-w-xl font-light leading-relaxed">
                  From startups to global enterprises, we help organizations construct secure, scalable, and future-ready technology environments.
                </p>
              </FadeIn>

              <FadeIn delay={0.3} className="flex flex-wrap gap-6 pt-2 items-center">
                <div className="flex gap-1 text-[#87A987]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <div className="text-sm font-bold text-[#3D523D] border-l border-[#87A987]/20 pl-6">
                  Rated 4.9/5 by 100+ Corporate Clients
                </div>
              </FadeIn>
            </div>

            {/* Right Hero Visual: Ecosystem Node Flow */}
            <TechnologyEcosystem />

          </div>
        </div>
      </section>

      {/* ==========================================
          2. TRUST INDICATORS (Luxury Stats - borderless, spacing-only)
          ========================================== */}
      <section className="relative z-10 py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center max-w-5xl mx-auto">
            {stats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.05} className="space-y-2">
                <div className="text-5xl md:text-7xl font-heading font-extrabold text-[#3D523D] tracking-tight">
                  {s.val}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#556B55]">
                  {s.label}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          3. CLIENT ECOSYSTEM WALL (Marquee Showcase)
          ========================================== */}
      <section className="relative z-10 py-16 bg-[#FDFBF7] border-y border-[#E6E2DA] overflow-hidden">
        <div className="container mx-auto px-6 mb-10 text-center">
          <p className="text-xs font-bold text-text-secondary uppercase tracking-widest">Authorized Integration Partners</p>
        </div>
        
        {/* Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#FDFBF7] to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#FDFBF7] to-transparent z-30 pointer-events-none" />

        <div className="relative w-full py-4 bg-[rgba(212,231,212,0.15)] flex w-fit">
          <div className="flex shrink-0 animate-marquee items-center">
            {[
              { key: 'microsoft', name: 'Microsoft' }, { key: 'azure', name: 'Microsoft Azure' }, { key: 'aws', name: 'Amazon Web Services' }, { key: 'adobe', name: 'Adobe' }, 
              { key: 'autodesk', name: 'Autodesk' }, { key: 'corel', name: 'CorelDRAW' }, { key: 'gstarcad', name: 'GstarCAD' }, { key: 'zwcad', name: 'ZWCAD' }, 
              { key: 'lenovo', name: 'Lenovo' }, { key: 'hpe', name: 'HPE' }, { key: 'dell', name: 'Dell' },
              { key: 'microsoft', name: 'Microsoft' }, { key: 'azure', name: 'Microsoft Azure' }, { key: 'aws', name: 'Amazon Web Services' }, { key: 'adobe', name: 'Adobe' }, 
              { key: 'autodesk', name: 'Autodesk' }, { key: 'corel', name: 'CorelDRAW' }, { key: 'gstarcad', name: 'GstarCAD' }, { key: 'zwcad', name: 'ZWCAD' }, 
              { key: 'lenovo', name: 'Lenovo' }, { key: 'hpe', name: 'HPE' }, { key: 'dell', name: 'Dell' }
            ].map((company, i) => {
              const LogoComp = Registry[company.key]
              return (
                <div key={i} className="px-8 md:px-12 flex items-center justify-center">
                  <div className="flex items-center gap-4 group/card cursor-pointer">
                    {LogoComp && (
                      <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-transform duration-300 hover:scale-105 shrink-0">
                        <LogoComp className="w-full h-full object-contain" />
                      </div>
                    )}
                    <span className="font-heading font-extrabold text-lg md:text-xl text-[#3D523D] tracking-tight whitespace-nowrap">
                      {company.name}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          4. WHO WE SERVE / INDUSTRIES WE SERVE (Redesigned Interactive Grid)
          ========================================== */}
      <section className="relative z-10 py-32 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="badge-blue mb-4">Who We Serve</span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-4 text-[#3D523D]">Technology Solutions For Every Industry</h2>
            <p className="text-[#556B55] max-w-xl mx-auto font-light leading-relaxed text-sm md:text-base">
              Empowering organizations with secure infrastructure, cloud solutions, software licensing, managed IT services and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {industriesData.map((ind) => (
              <IndustryCard 
                key={ind.id} 
                ind={ind} 
                hoveredCard={hoveredCard} 
                setHoveredCard={setHoveredCard} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          5. FEATURED CLIENT SUCCESS STORIES (Magazine Editorial Layout)
          ========================================== */}
      <section className="relative z-10 py-32 bg-[rgba(135,169,135,0.06)] border-t border-b border-[#E6E2DA]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <span className="text-accent font-bold text-xs uppercase tracking-widest block mb-3">Case Studies</span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#3D523D]">Featured Client Deployments</h2>
            <p className="text-text-secondary text-sm md:text-base font-light mt-3 leading-relaxed">
              Read how we align enterprise platforms to solve compute overhead and streamline operations.
            </p>
          </div>

          <div className="space-y-24 max-w-6xl mx-auto">
            {successStories.map((story, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={i} className={`grid lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Left Column: Wording Editorial */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? '' : 'lg:order-2'}`}>
                    <span className="px-3 py-1 bg-[#D4E7D4] border border-[#87A987]/20 text-[#3D523D] rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {story.client}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#3D523D]">
                      {story.type}
                    </h3>
                    
                    <div className="grid sm:grid-cols-2 gap-6 pt-4">
                      <div className="p-5 rounded-2xl bg-white border border-[#E6E2DA] shadow-sm">
                        <span className="text-xs font-bold text-red-500 block mb-1">Challenge</span>
                        <p className="text-xs text-text-secondary leading-relaxed font-light">{story.before}</p>
                      </div>
                      <div className="p-5 rounded-2xl bg-white border border-[#87A987]/20 shadow-sm">
                        <span className="text-xs font-bold text-accent block mb-1">Implementation</span>
                        <p className="text-xs text-text-secondary leading-relaxed font-light">{story.after}</p>
                      </div>
                    </div>

                    <p className="text-sm text-text-secondary leading-relaxed font-light pt-2">
                      <span className="font-bold text-[#3D523D]">Business Impact:</span> {story.impact}
                    </p>
                  </div>

                  {/* Right Column: Statistics Grid inside frosted card */}
                  <div className={`lg:col-span-5 ${isEven ? '' : 'lg:order-1'}`}>
                    <div className="bg-white/70 backdrop-blur-md border border-[#87A987]/15 rounded-3xl p-8 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-28 h-28 bg-[#87A987]/5 rounded-full blur-2xl pointer-events-none" />
                      <h4 className="text-xs font-bold text-text-secondary uppercase tracking-widest border-b border-[#E6E2DA] pb-4 mb-6">Metrics & Outcomes</h4>
                      <div className="space-y-6">
                        {story.metrics.map((m, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="text-sm text-text-secondary font-light">{m.label}</span>
                            <span className="text-xl font-heading font-extrabold text-[#3D523D]">{m.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          6. WHY ENTERPRISES CHOOSE GIRIRAJ (Alternating timeline)
          ========================================== */}
      <section className="relative z-10 py-32 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <span className="badge-blue mb-4">Value Proposition</span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-4 text-[#3D523D]">Why Enterprises Choose Us</h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-[#87A987]/20" />

            <div className="space-y-16">
              {chooseReasons.map((item, i) => {
                const isEven = i % 2 === 0
                const ReasonIcon = item.icon
                return (
                  <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-8`}>
                    
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pl-10' : 'md:pr-10'}`}>
                      <div className="p-6 rounded-2xl bg-white border border-[#87A987]/12 shadow-sm hover:border-[#87A987]/40 transition-colors duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-[#D4E7D4] flex items-center justify-center text-[#87A987]">
                            <ReasonIcon size={16} />
                          </div>
                          <h4 className="text-lg font-heading font-bold text-[#3D523D]">{item.title}</h4>
                        </div>
                        <p className="text-xs text-text-secondary leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>

                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-white border-2 border-[#87A987] rounded-full flex items-center justify-center z-10 shadow-sm">
                      <span className="text-xs font-bold text-[#87A987]">✓</span>
                    </div>

                    <div className="hidden md:block w-1/2" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          7. TECHNOLOGY PARTNERS (Visual Network Grid & Details)
          ========================================== */}
      <section className="relative z-10 py-32 bg-[rgba(212,231,212,0.20)] border-t border-b border-[#E6E2DA]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="badge-green mb-4">Partner Ecosystem</span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-4 text-[#3D523D]">Technology Partners Network</h2>
            <p className="text-text-secondary max-w-xl mx-auto font-light leading-relaxed text-sm">
              Hover over a technology leader to reveal our integrated services, system blueprints, and compliance certifications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {partnersList.map((partner, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActivePartner(idx)}
                onMouseLeave={() => setActivePartner(null)}
                className="group relative p-6 bg-white border border-[#87A987]/15 rounded-3xl hover:border-accent hover:shadow-md transition-all duration-300 cursor-pointer min-h-[160px]"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xl font-heading font-extrabold text-[#3D523D]">{partner.name}</span>
                  <span className="text-[10px] font-bold text-[#87A987] bg-[#D4E7D4] px-2 py-0.5 rounded-full uppercase tracking-wider">{partner.certs}</span>
                </div>
                
                <p className="text-xs text-text-secondary font-light leading-relaxed">
                  {partner.services}
                </p>

                <AnimatePresence>
                  {activePartner === idx && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute inset-0 bg-[#FDFBF7] border border-accent rounded-3xl p-6 z-20 flex flex-col justify-between shadow-lg"
                    >
                      <div>
                        <h4 className="text-sm font-extrabold text-[#3D523D] mb-1">{partner.name} Solutions</h4>
                        <p className="text-[11px] text-text-secondary leading-relaxed font-light">{partner.services}</p>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-bold text-accent pt-4 border-t border-[#E6E2DA]">
                        <span>{partner.certs}</span>
                        <FiLinkIcon className="text-accent" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          8. SOCIAL PROOF (Satisfactions counters & stats)
          ========================================== */}
      <section className="relative z-10 py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center max-w-5xl mx-auto">
            {socialProof.map((proof, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-5xl font-heading font-extrabold text-[#3D523D]">
                  {proof.val}
                </div>
                <div className="text-xs font-bold text-[#556B55] uppercase tracking-wider">
                  {proof.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          9. CLIENT JOURNEY SECTION (Horizontal Journey)
          ========================================== */}
      <section className="relative z-10 py-32 bg-[#FDFBF7] border-t border-[#E6E2DA]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="badge-blue mb-4">Our Process</span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-4 text-[#3D523D]">The Client Journey</h2>
            <p className="text-text-secondary text-sm font-light">From first discovery call to hardware support updates, here is how we align.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {journeySteps.map((step, idx) => (
              <div 
                key={idx}
                className="p-6 bg-white/70 border border-[#87A987]/15 rounded-2xl flex flex-col justify-between shadow-sm hover:border-[#87A987]/40 transition-colors duration-300"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-heading font-extrabold text-[#87A987]/40">{step.step}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#3D523D] mb-1">{step.title}</h4>
                  <p className="text-[11px] text-text-secondary leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          10. FINAL CTA (Large luxury layout)
          ========================================== */}
      <section className="relative z-10 py-32 bg-transparent">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="bg-gradient-to-br from-[#87A987] to-[#A8C3A8] rounded-[32px] p-16 md:p-24 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/[0.03] pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 tracking-tighter text-white leading-tight">
              Let's Build Something<br className="hidden md:block"/> Exceptional Together.
            </h2>
            
            <p className="text-white/95 text-base max-w-xl mx-auto mb-12 font-light leading-relaxed">
              Connect with our solution architects to structure a custom infrastructure rollout plan, consolidated software licensing, or SLA monitoring contracts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-20">
              <Link 
                to="/contact-us"
                className="px-8 py-4 rounded-full bg-white text-[#3D523D] hover:bg-white/90 transition-all font-bold shadow-md w-full sm:w-auto text-center"
              >
                Book Free Consultation
              </Link>
              <Link 
                to="/contact-us"
                className="px-8 py-4 rounded-full bg-transparent border border-white/30 text-white hover:bg-white/10 transition-all font-bold w-full sm:w-auto text-center"
              >
                Discuss Your Project
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-16 pt-8 border-t border-white/10 text-white/80">
              <span className="flex items-center gap-2 text-xs font-semibold">
                <CheckCircle2 size={14} className="text-[#D4E7D4]" /> Certified Partner
              </span>
              <span className="flex items-center gap-2 text-xs font-semibold">
                <CheckCircle2 size={14} className="text-[#D4E7D4]" /> 15+ Years Experience
              </span>
              <span className="flex items-center gap-2 text-xs font-semibold">
                <CheckCircle2 size={14} className="text-[#D4E7D4]" /> 500+ Projects Delivered
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

function CheckCircle2(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="14" 
      height="14" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function FiLinkIcon(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="14" 
      height="14" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  )
}
