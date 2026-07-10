import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiPhone, FiChevronDown, FiArrowRight, FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { MagneticButton } from './MagneticButton'
import { 
  MicrosoftLogo, 
  AzureLogo, 
  AWSLogo, 
  AdobeLogo, 
  AutodeskLogo, 
  GstarCADLogo, 
  CorelLogo, 
  ZWCADLogo 
} from './LogoRegistry'
import { OfficialLogoIcon } from './PremiumServiceComponents'

const MegaMenuCard = ({ item, variants }) => {
  return (
    <motion.div variants={variants}>
      <Link
        to={item.path}
        className="group relative flex items-start gap-5 p-4 rounded-2xl border border-transparent hover:border-[#87A987]/15 hover:bg-[#D4E7D4]/30 transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] transform hover:-translate-y-[6px]"
      >
        <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-white rounded-xl border border-border group-hover:border-accent/30 transition-colors overflow-hidden shadow-sm">
          {item.logoComponent ? (
            <div className="group-hover:scale-105 transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-center w-full h-full">
              {item.logoComponent}
            </div>
          ) : (
            <div className="w-6 h-6 bg-accent/20 rounded-md" />
          )}
        </div>
        <div className="flex-1">
          <h4 className="text-text-primary font-bold text-[17px] mb-1.5 group-hover:text-text-primary transition-colors flex items-center gap-2">
            {item.name}
            <FiArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] text-accent" size={16} />
          </h4>
          <p className="text-text-secondary text-[14px] leading-relaxed line-clamp-2">
            {item.desc}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

const DesktopMegaMenu = ({ items, isActive }) => {
  if (!isActive || !items || items.length === 0) return null

  const isLarge = items.length > 4
  const gridClass = isLarge ? "grid-cols-2 w-[850px]" : "grid-cols-1 w-[450px]"

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.96, filter: 'blur(10px)' },
    show: {
      opacity: 1, scale: 1, filter: 'blur(0px)',
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.05, delayChildren: 0.05 }
    },
    exit: { opacity: 0, scale: 0.96, filter: 'blur(10px)', transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className={`absolute top-[calc(100%+24px)] left-1/2 -translate-x-1/2 bg-[rgba(253,251,247,0.95)] border border-[#87A987]/12 rounded-[28px] shadow-[0_20px_60px_rgba(61,82,61,0.08)] p-6 z-50 backdrop-blur-[24px] before:content-[''] before:absolute before:-top-8 before:left-0 before:w-full before:h-8`}
    >
      <div className={`grid ${gridClass} gap-2`}>
        {items.map((item, idx) => (
          <MegaMenuCard key={idx} item={item} variants={itemVariants} />
        ))}
      </div>
    </motion.div>
  )
}

const MobileDrawerMenu = ({ item, isActivePath, onClose }) => {
  const hasDropdown = item.dropdown && item.dropdown.length > 0

  return (
    <div className="flex flex-col border-b border-border/50 pb-2 mb-2">
      <Link
        to={item.path}
        onClick={(e) => {
          if (isActivePath && item.path === window.location.pathname) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          onClose();
        }}
        className={`text-[28px] font-heading font-bold py-3 transition-colors flex justify-between items-center ${isActivePath ? 'text-accent' : 'text-text-primary hover:text-accent'}`}
      >
        {item.name}
        {!hasDropdown && <FiArrowRight className="text-accent opacity-50" size={24} />}
      </Link>

      {hasDropdown && (
        <div className="flex flex-col gap-2 pt-2">
          {item.dropdown.map(d => (
            <Link 
              key={d.name} 
              to={d.path} 
              onClick={onClose}
              className="flex items-center justify-between group py-3 px-4 rounded-xl hover:bg-bg-secondary transition-colors min-h-[64px]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 shadow-sm">
                  {d.logoComponent && (
                    <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform">
                      {d.logoComponent}
                    </div>
                  )}
                </div>
                <div className="text-text-primary font-bold text-[16px] group-hover:text-accent transition-colors">
                  {d.name}
                </div>
              </div>
              <FiArrowRight className="text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" size={20} />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const hoverTimeoutRef = useRef(null)
  const location = useLocation()

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  const handleNavClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  }

  // Handle scroll for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (name) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    setActiveDropdown(name)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 250) // 250ms close delay for premium UX
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-us' },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Microsoft Solutions', desc: 'Cloud productivity & business applications', path: '/services/microsoft', logoComponent: <OfficialLogoIcon Logo={MicrosoftLogo} size={28} /> },
        { name: 'Microsoft Azure', desc: 'Secure, scalable & intelligent cloud infrastructure', path: '/services/microsoft-azure', logoComponent: <OfficialLogoIcon Logo={AzureLogo} size={28} /> },
        { name: 'AWS Cloud', desc: 'Enterprise cloud infrastructure built for performance', path: '/services/aws-cloud', logoComponent: <OfficialLogoIcon Logo={AWSLogo} size={28} /> },
        { name: 'Adobe Solutions', desc: 'Creative, marketing & document productivity platforms', path: '/services/adobe', logoComponent: <OfficialLogoIcon Logo={AdobeLogo} size={28} /> },
        { name: 'Autodesk Solutions', desc: 'Design, engineering & innovation software management', path: '/services/autodesk', logoComponent: <OfficialLogoIcon Logo={AutodeskLogo} size={28} /> },
        { name: 'GstarCAD Solutions', desc: 'Professional CAD software for modern design teams', path: '/services/gstarcad', logoComponent: <OfficialLogoIcon Logo={GstarCADLogo} size={32} /> },
        { name: 'CorelDRAW Suite', desc: 'Professional design & illustration software solutions', path: '/services/coreldraw', logoComponent: <OfficialLogoIcon Logo={CorelLogo} size={32} /> },
        { name: 'ZWCAD Solutions', desc: 'Reliable CAD software for engineering & design professionals', path: '/services/zwcad', logoComponent: <OfficialLogoIcon Logo={ZWCADLogo} size={32} /> }
      ]
    },
    { name: 'Who We Serve', path: '/clients' },
    { name: 'Contact', path: '/contact-us' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? 'py-4 bg-[rgba(253,251,247,0.92)] backdrop-blur-[20px] border-[#E6E2DA] shadow-sm' : 'py-6 bg-transparent border-transparent'
          }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <Link to="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center relative z-50 group py-2">
            <img src="/logo.png" alt="Giriraj Marketing" className="h-16 md:h-20 object-contain group-hover:opacity-90 transition-opacity duration-300 drop-shadow-sm scale-[1.5] origin-left" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            <div className="flex gap-8">
              {navItems.map((item) => {
                const isNavActive = location.pathname === item.path || (item.dropdown && item.dropdown.some(d => location.pathname.startsWith(d.path)))
                const isDropdownOpen = activeDropdown === item.name

                return (
                  <div
                    key={item.name}
                    className="relative py-2 group"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={item.path}
                      onClick={(e) => handleNavClick(e, item.path)}
                      className={`text-[15px] font-medium tracking-wide transition-all duration-250 flex items-center gap-1.5 hover:scale-102 ${isNavActive || isDropdownOpen ? 'text-text-primary' : 'text-text-secondary hover:text-[#3D523D]'
                        }`}
                    >
                      {item.name}
                      {item.dropdown && (
                        <FiChevronDown className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-text-primary' : 'text-text-muted group-hover:text-text-primary'}`} size={14} />
                      )}

                      {/* Animated underline */}
                      <span className={`absolute -bottom-2 left-0 w-full h-[2px] bg-[#3D523D] origin-left transition-transform duration-250 ${isNavActive || isDropdownOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {item.dropdown && <DesktopMegaMenu items={item.dropdown} isActive={isDropdownOpen} />}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>

            <div className="flex items-center gap-6">
              <a href="tel:+919638419419" className="hidden xl:flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors text-[14px] font-medium tracking-wide group">
                <FiPhone className="text-accent group-hover:scale-110 transition-transform" />
                +91 96384 19419
              </a>
              <MagneticButton to="/contact-us" variant="primary" className="py-2.5 px-6 text-[14px] bg-[#87A987] text-white hover:bg-[#769976] border-none rounded-[14px] transition-all">
                Book Free Consultation
              </MagneticButton>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden text-text-primary focus:outline-none relative z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
              {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[rgba(253,251,247,0.98)] pt-32 px-6 lg:hidden flex flex-col overflow-y-auto pb-10"
          >
            <div className="flex flex-col gap-6 font-heading">
              {navItems.map((item, i) => {
                const isActivePath = location.pathname === item.path || (item.dropdown && item.dropdown.some(d => location.pathname.startsWith(d.path)))

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <MobileDrawerMenu item={item} isActivePath={isActivePath} onClose={() => setMobileMenuOpen(false)} />
                  </motion.div>
                )
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-6"
              >
                <Link to="/contact-us" className="flex items-center justify-center gap-3 bg-[#87A987] text-white rounded-[14px] px-8 py-5 text-center font-bold text-lg shadow-[0_4px_12px_rgba(135,169,135,0.15)] w-full">
                  Start a Project
                  <FiArrowRight />
                </Link>
                <a href="tel:+919638419419" className="flex items-center justify-center gap-2 mt-6 text-text-secondary font-medium hover:text-text-primary transition-colors">
                  <FiPhone /> Call Us: +91 96384 19419
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
