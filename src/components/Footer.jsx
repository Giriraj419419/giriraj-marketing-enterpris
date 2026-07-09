import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiArrowRight, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi'
import {
  MicrosoftLogo, AzureLogo, AWSLogo, AdobeLogo, AutodeskLogo,
  ZWCADLogo, GstarCADLogo, CorelLogo
} from './LogoRegistry'

/* ─── Data ──────────────────────────────────────────────────────── */

const NAV = [
  { label: 'Home',         to: '/' },
  { label: 'About',        to: '/about-us' },
  { label: 'Who We Serve', to: '/clients' },
  { label: 'Services',     to: '/services' },
  { label: 'Contact',      to: '/contact-us' },
]

const SOFTWARE = [
  { label: 'Microsoft 365', to: '/services/microsoft',       Logo: MicrosoftLogo },
  { label: 'Azure',         to: '/services/microsoft-azure', Logo: AzureLogo },
  { label: 'AWS Cloud',     to: '/services/aws-cloud',       Logo: AWSLogo },
  { label: 'Adobe',         to: '/services/adobe',           Logo: AdobeLogo },
  { label: 'Autodesk',      to: '/services/autodesk',        Logo: AutodeskLogo },
  { label: 'ZWCAD',         to: '/services/zwcad',           Logo: ZWCADLogo },
  { label: 'GstarCAD',      to: '/services/gstarcad',        Logo: GstarCADLogo },
  { label: 'CorelDRAW',     to: '/services/coreldraw',       Logo: CorelLogo },
]

const NEWSLETTER = [
  'Monthly cloud and software updates',
  'Licensing and compliance best practices',
  'Digital transformation insights',
]


/* ─── Tokens ─────────────────────────────────────────────────────── */
const C = {
  olive:     '#3D523D',
  sage:      '#87A987',
  sageDark:  '#6F8E6F',
  oliveLight:'#556B55',
  pistachio: '#D4E7D4',
  alabaster: '#FDFBF7',
  mutedText: 'rgba(61,82,61,0.45)',
  border:    'rgba(135,169,135,0.14)',
}

/* ─── Tiny Link ──────────────────────────────────────────────────── */
const TinyLink = ({ label, to, Logo }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        fontSize: 13, fontWeight: 500, color: hovered ? C.olive : C.oliveLight,
        textDecoration: 'none', lineHeight: 1.1,
        transform: hovered ? 'translateX(3px)' : 'translateX(0)',
        transition: 'color 0.2s, transform 0.2s',
        whiteSpace: 'nowrap',
      }}
    >
      {Logo && (
        <span style={{
          width: 26, height: 26,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, borderRadius: 7,
          background: hovered ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.7)',
          border: `1px solid ${hovered ? 'rgba(135,169,135,0.3)' : 'rgba(135,169,135,0.15)'}`,
          boxShadow: hovered ? '0 2px 8px rgba(135,169,135,0.15)' : 'none',
          transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s',
          overflow: 'hidden',
        }}>
          <Logo className="w-4 h-4" />
        </span>
      )}
      {label}
    </Link>
  )
}


/* ─── Mobile Accordion ───────────────────────────────────────────── */
const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${C.border}` }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', padding: '12px 0',
          background: 'none', border: 'none', cursor: 'pointer',
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.olive }}>
          {title}
        </span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.22 }}
          width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={C.sage} strokeWidth="2.5"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingBottom: 14 }}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Pre-Footer Newsletter Bar ──────────────────────────────────── */

/* ─── Main Footer ─────────────────────────────────────────────────── */
const Footer = () => {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <>
      <footer ref={ref} style={{ position: 'relative', overflow: 'hidden', fontFamily: 'inherit', maxHeight: '380px' }}>

        {/* Backgrounds */}
        <div style={{ position: 'absolute', inset: 0, background: C.alabaster, zIndex: 0 }} />
        <div style={{
          position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
          width: '80%', height: 280, zIndex: 1, pointerEvents: 'none',
          background: `radial-gradient(ellipse at bottom, rgba(212,231,212,0.3), transparent 70%)`,
          filter: 'blur(50px)',
        }} />
        <div className="bg-noise" style={{ position: 'absolute', inset: 0, opacity: 0.025, zIndex: 2, pointerEvents: 'none' }} />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1, zIndex: 3, pointerEvents: 'none',
          background: `linear-gradient(to right, transparent, ${C.border} 30%, ${C.border} 70%, transparent)`,
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 10 }}>

          {/* ── Desktop 4-Column Grid ─────────────────────────── */}
          <motion.div
            className="hidden lg:grid"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              gridTemplateColumns: '1.2fr 1.5fr 1fr 1.2fr',
              gap: '0 32px',
              padding: '32px 0 24px',
              borderBottom: `1px solid ${C.border}`,
              alignItems: 'start',
            }}
          >
            {/* ── LEFT: Brand + Nav ──────────────────────────── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {/* Logo */}
              <Link
                to="/"
                style={{
                  display: 'inline-block', fontWeight: 800, fontSize: 22,
                  letterSpacing: '-0.04em', color: C.olive, textDecoration: 'none',
                  lineHeight: 1, marginBottom: 6, transition: 'color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = C.sage }}
                onMouseLeave={e => { e.currentTarget.style.color = C.olive }}
              >
                <img src="/logo.png" alt="Giriraj Marketing" style={{ height: 56, objectFit: 'contain', transform: 'scale(1.5)', transformOrigin: 'left center', filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.05))' }} />
              </Link>

              <p style={{ fontSize: 12, color: C.oliveLight, margin: '0 0 20px', lineHeight: 1.6, fontWeight: 400, maxWidth: 200 }}>
                Enterprise technology infrastructure, delivered with precision.
              </p>

              {/* Nav — vertical compact list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {NAV.map(({ label, to }) => (
                  <Link
                    key={to} to={to}
                    style={{
                      fontSize: 13, fontWeight: 500, color: C.oliveLight,
                      textDecoration: 'none', transition: 'color 0.2s, transform 0.2s',
                      display: 'inline-block',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = C.olive; e.currentTarget.style.transform = 'translateX(4px)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = C.oliveLight; e.currentTarget.style.transform = 'translateX(0)' }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Services ────────────────────────────────────── */}
            <div>
              <p style={{
                fontSize: 10, fontWeight: 600, letterSpacing: '0.2em',
                textTransform: 'uppercase', color: C.mutedText,
                margin: '0 0 10px',
              }}>
                Services
              </p>
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: '7px 24px', marginBottom: 22,
              }}>
                {SOFTWARE.map(s => <TinyLink key={s.to} {...s} />)}
              </div>
            </div>

            {/* ── Connect ─────────────────────────────────────── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <p style={{
                fontSize: 10, fontWeight: 600, letterSpacing: '0.2em',
                textTransform: 'uppercase', color: C.mutedText, margin: '0 0 12px',
              }}>
                Connect
              </p>

              {/* Contact rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                {[
                  { Icon: FiMail, href: 'mailto:info@girirajmktg.com', text: 'info@girirajmktg.com' },
                  { Icon: FiPhone, href: 'tel:+919638419419', text: '+91 96384 19419' },
                  { Icon: FiMapPin, href: 'https://maps.google.com/maps?q=713,+Shilp+Arista,+Sindhu+Bhavan+Road,+Bodakdev,+Ahmedabad', text: '713, Shilp Arista, Ahmedabad' },
                ].map(({ Icon, href, text }) => (
                  <a
                    key={href} href={href}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 9,
                      fontSize: 13, fontWeight: 500, color: C.oliveLight,
                      textDecoration: 'none', transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = C.olive }}
                    onMouseLeave={e => { e.currentTarget.style.color = C.oliveLight }}
                  >
                    <span style={{
                      width: 26, height: 26, borderRadius: 7,
                      background: 'rgba(212,231,212,0.55)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, color: C.sageDark,
                    }}>
                      <Icon size={12} />
                    </span>
                    <span style={{ lineHeight: 1.3 }}>{text}</span>
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: C.border, marginBottom: 16 }} />

              {/* Book consultation CTA */}
              <Link
                to="/contact-us"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '9px 16px', borderRadius: 10, marginBottom: 16,
                  background: C.sage, color: '#fff',
                  fontSize: 12, fontWeight: 600, textDecoration: 'none',
                  transition: 'background 0.2s',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.sageDark }}
                onMouseLeave={e => { e.currentTarget.style.background = C.sage }}
              >
                Book Consultation <FiArrowRight size={12} />
              </Link>

              {/* Icon-only social */}
              <div style={{ display: 'flex', gap: 8 }}>
                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/919638419419"
                  target="_blank" rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.08 }} transition={{ duration: 0.18 }}
                  title="WhatsApp"
                  style={{
                    width: 36, height: 36, borderRadius: 9,
                    border: `1px solid ${C.border}`,
                    background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(6px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <svg viewBox="0 0 24 24" style={{ width: 15, height: 15, fill: '#25D366' }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </motion.a>
                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/company/giriraj-marketing"
                  target="_blank" rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.08 }} transition={{ duration: 0.18 }}
                  title="LinkedIn"
                  style={{
                    width: 36, height: 36, borderRadius: 9,
                    border: `1px solid ${C.border}`,
                    background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(6px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <FiLinkedin size={14} style={{ color: '#0A66C2' }} />
                </motion.a>
              </div>
            </div>

            {/* ── Newsletter ──────────────────────────────────── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <p style={{
                fontSize: 10, fontWeight: 600, letterSpacing: '0.2em',
                textTransform: 'uppercase', color: C.mutedText, margin: '0 0 12px',
              }}>
                Newsletter
              </p>
              <p style={{ fontSize: 12, color: C.oliveLight, margin: '0 0 14px', lineHeight: 1.6 }}>
                Cloud innovations &amp; digital transformation trends — delivered monthly.
              </p>
              <form 
                onSubmit={(e) => { e.preventDefault(); }} 
                style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}
              >
                <div style={{
                  display: 'flex', alignItems: 'center',
                  height: 38, borderRadius: 8,
                  border: `1px solid rgba(135,169,135,0.2)`,
                  background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)',
                  overflow: 'hidden', width: '100%',
                }}>
                  <input
                    type="email"
                    placeholder="Corporate email"
                    style={{
                      flex: 1, height: '100%', padding: '0 12px', border: 'none',
                      outline: 'none', background: 'transparent',
                      fontSize: 12, fontWeight: 500, color: C.olive, fontFamily: 'inherit',
                    }}
                  />
                </div>
                <motion.button
                  type="submit" whileTap={{ scale: 0.95 }}
                  style={{
                    height: 38, padding: '0 16px', borderRadius: 8,
                    background: C.sage, border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    fontSize: 12, fontWeight: 600, color: '#fff',
                    transition: 'background 0.2s', width: '100%'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.sageDark }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.sage }}
                >
                  <FiSend size={13} /> Subscribe
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* ── Mobile / Tablet Accordion ────────────────────── */}
          <div className="lg:hidden" style={{ padding: '20px 0 12px', borderBottom: `1px solid ${C.border}` }}>
            {/* Brand */}
            <div style={{ marginBottom: 20 }}>
              <Link to="/" style={{ display: 'inline-block' }}>
                <img src="/logo.png" alt="Giriraj Marketing" style={{ height: 48, objectFit: 'contain', transform: 'scale(1.5)', transformOrigin: 'left center', filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.05))' }} />
              </Link>
              <p style={{ fontSize: 12, color: C.oliveLight, margin: '4px 0 0', lineHeight: 1.6 }}>
                Enterprise technology infrastructure, delivered with precision.
              </p>
            </div>

            <Accordion title="Navigation">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {NAV.map(({ label, to }) => (
                  <Link key={to} to={to} style={{ fontSize: 13, fontWeight: 500, color: C.oliveLight, textDecoration: 'none' }}>
                    {label}
                  </Link>
                ))}
              </div>
            </Accordion>

            <Accordion title="Services">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px' }}>
                {SOFTWARE.map(s => <TinyLink key={s.to} {...s} />)}
              </div>
            </Accordion>

            <Accordion title="Connect">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a href="mailto:info@girirajmktg.com" style={{ fontSize: 13, color: C.oliveLight, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FiMail size={13} style={{ color: C.sage }} /> info@girirajmktg.com
                </a>
                <a href="tel:+919638419419" style={{ fontSize: 13, color: C.oliveLight, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FiPhone size={13} style={{ color: C.sage }} /> +91 96384 19419
                </a>
                <a href="https://maps.google.com/maps?q=713,+Shilp+Arista,+Sindhu+Bhavan+Road,+Bodakdev,+Ahmedabad" style={{ fontSize: 13, color: C.oliveLight, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FiMapPin size={13} style={{ color: C.sage }} /> 713, Shilp Arista, Ahmedabad
                </a>
                <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                  <a href="https://wa.me/919638419419" target="_blank" rel="noopener noreferrer"
                     style={{ width: 34, height: 34, borderRadius: 8, border: `1px solid ${C.border}`, background: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, fill: '#25D366' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/giriraj-marketing" target="_blank" rel="noopener noreferrer"
                     style={{ width: 34, height: 34, borderRadius: 8, border: `1px solid ${C.border}`, background: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FiLinkedin size={13} style={{ color: '#0A66C2' }} />
                  </a>
                </div>
              </div>
            </Accordion>

            <Accordion title="Newsletter">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {NEWSLETTER.map((item) => (
                  <span key={item} style={{ fontSize: 13, color: C.oliveLight }}>
                    {item}
                  </span>
                ))}
              </div>
            </Accordion>
          </div>

          {/* ── Bottom Bar ────────────────────────────────────── */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '16px 0', flexWrap: 'wrap', gap: 10,
          }}>
            <p style={{ fontSize: 11, fontWeight: 500, color: 'rgba(135,169,135,0.65)', margin: 0 }}>
              © {new Date().getFullYear()} GIRIRAJ. All Rights Reserved.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              {['Privacy Policy', 'Terms & Conditions'].map((item, i) => (
                <a key={i} href="#"
                   style={{ fontSize: 11, fontWeight: 500, color: 'rgba(135,169,135,0.65)', textDecoration: 'none', transition: 'color 0.2s' }}
                   onMouseEnter={e => { e.currentTarget.style.color = C.sage }}
                   onMouseLeave={e => { e.currentTarget.style.color = 'rgba(135,169,135,0.65)' }}>
                  {item}
                </a>
              ))}
            </div>
            <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(135,169,135,0.45)', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
              Built for Enterprise Growth
            </p>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer
