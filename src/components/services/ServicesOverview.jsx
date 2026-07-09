import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FadeIn } from '../../components/AnimatedText'
import { FiArrowRight } from 'react-icons/fi'
import { useMousePosition } from '../../hooks/useMousePosition'
import {
  MicrosoftLogo, AzureLogo, AWSLogo, AdobeLogo, AutodeskLogo,
  ZWCADLogo, GstarCADLogo, CorelLogo
} from '../LogoRegistry'

const servicesData = [
  {
    logo: MicrosoftLogo,
    title: 'Microsoft Solutions',
    description: "Cloud Productivity & Business Applications. Microsoft's industry-leading productivity, collaboration, security, and cloud technologies.",
    tags: ['M365', 'Teams', 'Azure'],
    path: '/services/microsoft'
  },
  {
    logo: AzureLogo,
    title: 'Microsoft Azure',
    description: 'Transform your business with Microsoft Azure, a powerful cloud platform designed to deliver scalability, security, performance, and innovation.',
    tags: ['Migration', 'VMs', 'Backup & Recovery'],
    path: '/services/microsoft-azure'
  },
  {
    logo: AWSLogo,
    title: 'AWS Cloud',
    description: 'Enterprise Cloud Infrastructure Built for Performance. High-performance databases and container systems.',
    tags: ['EC2', 'S3', 'IAM Config'],
    path: '/services/aws-cloud'
  },
  {
    logo: AdobeLogo,
    title: 'Adobe Solutions',
    description: 'Creative, Marketing & Document Productivity VIP/ETLA agreement deployment and console setup.',
    tags: ['Creative Cloud', 'Acrobat Pro', 'Admin Console'],
    path: '/services/adobe'
  },
  {
    logo: AutodeskLogo,
    title: 'Autodesk Solutions',
    description: "Empower architects, engineers, designers, and manufacturers with Autodesk's industry-leading software solutions.",
    tags: ['AutoCAD', 'Revit', 'BIM'],
    path: '/services/autodesk'
  },
  {
    logo: GstarCADLogo,
    title: 'GstarCAD Solutions',
    description: "Enhance productivity and reduce software costs with GstarCAD, a powerful and reliable CAD platform.",
    tags: ['Drafting', 'DWG Compatibility', 'Affordable CAD'],
    path: '/services/gstarcad'
  },
  {
    logo: CorelLogo,
    title: 'CorelDRAW Suite',
    description: 'Professional design & illustration software solutions vector drawing and photo editing workflows.',
    tags: ['Transactional', 'Creative Tech', 'Maintenance'],
    path: '/services/coreldraw'
  },
  {
    logo: ZWCADLogo,
    title: 'ZWCAD Solutions',
    description: 'Reliable CAD software for engineering and design with concurrent floating license setups.',
    tags: ['Smart Voice', 'Multi-Core Speed', 'DWG Support'],
    path: '/services/zwcad'
  }
]

const ServicesOverview = () => {
  const containerRef = useRef(null)
  const mousePosition = useMousePosition()

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-[rgba(212,231,212,0.20)] border-y border-[#E6E2DA]">
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out z-0"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(135,169,135,0.06), transparent 40%)`
        }}
      />
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn delay={0.1} className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 tracking-tight text-[#3D523D]">Enterprise Capabilities</h2>
          <p className="text-[17px] text-[#556B55] max-w-2xl mx-auto font-body font-light leading-relaxed">
            Scalable technology ecosystems designed for high performance. We deploy, manage, and optimize the tools your enterprise relies on.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <Link 
                to={service.path} 
                className="group block p-7 bg-white/65 border border-[#87A987]/12 shadow-sm hover:border-accent hover:-translate-y-1.5 transition-all duration-300 rounded-[24px] backdrop-blur-md h-full min-h-[320px] flex flex-col justify-between relative overflow-hidden"
              >
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-[72px] h-[72px] rounded-[20px] bg-white border border-[#E6E2DA] flex items-center justify-center shadow-sm group-hover:border-[#87A987]/30 group-hover:shadow-[0_8px_20px_rgba(135,169,135,0.15)] transition-all duration-300 mb-6 flex-shrink-0">
                      {service.logo && <service.logo style={{ width: '42px', height: '42px', objectFit: 'contain' }} />}
                    </div>
                    <h3 className="text-lg font-heading font-bold mb-3 text-[#3D523D] tracking-tight">{service.title}</h3>
                    <p className="text-sm text-[#556B55] leading-relaxed mb-6 font-body font-light">
                      {service.description}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-body font-semibold tracking-wider px-2 py-0.5 rounded-md bg-[#D4E7D4]/50 text-[#3D523D] uppercase border border-[#87A987]/10 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-accent text-xs font-bold uppercase tracking-widest group-hover:translate-x-1.5 transition-transform duration-300">
                      Explore <FiArrowRight className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
