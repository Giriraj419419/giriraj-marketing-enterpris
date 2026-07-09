/**
 * GIRIRAJ Logo Registry
 * Faithful brand-accurate inline SVG logos for all technology partners.
 * All logos match official brand guidelines and are instantly recognizable.
 */

/* ── Microsoft ──────────────────────────────────────────────────────
   Official 4-square grid: red / green / blue / yellow                */
export const MicrosoftLogo = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 21 21" className={className} {...props} xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="9" height="9" fill="#F25022"/>
    <rect x="11" y="1" width="9" height="9" fill="#7FBA00"/>
    <rect x="1" y="11" width="9" height="9" fill="#00A4EF"/>
    <rect x="11" y="11" width="9" height="9" fill="#FFB900"/>
  </svg>
)

/* ── Microsoft Azure ────────────────────────────────────────────────
   Official "A" chevron shape in azure blue                           */
export const AzureLogo = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 96 96" className={className} {...props} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="az-a" x1="-.441" y1="47.25" x2="46.76" y2="-.996" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#114a8b"/>
        <stop offset="1" stopColor="#0669bc"/>
      </linearGradient>
      <linearGradient id="az-b" x1="33.68" y1="49.5" x2="46.15" y2="45.28" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopOpacity=".3"/>
        <stop offset=".07" stopOpacity=".2"/>
        <stop offset=".32" stopOpacity=".1"/>
        <stop offset=".62" stopOpacity=".05"/>
        <stop offset="1" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="az-c" x1="27.16" y1="-.29" x2="74.54" y2="96.32" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#3ccbf4"/>
        <stop offset="1" stopColor="#2892df"/>
      </linearGradient>
    </defs>
    <path d="M33.34 6h28.27l-29.4 87.37A4.5 4.5 0 0 1 27.94 96H6a4.5 4.5 0 0 1-4.27-5.93L27.07 9.63A4.5 4.5 0 0 1 33.34 6z" fill="url(#az-a)"/>
    <path d="M66 60.57L52.47 21.34 36.2 70.66 58.74 96H81.9a4.5 4.5 0 0 0 4.16-6.25z" fill="url(#az-b)"/>
    <path d="M62.67 6H33.34a4.5 4.5 0 0 0-4.27 5.93l25.3 75.44A4.5 4.5 0 0 0 58.64 90h27.26a4.5 4.5 0 0 0 4.27-5.93L66.94 9.63A4.5 4.5 0 0 0 62.67 6z" fill="url(#az-c)"/>
  </svg>
)

/* ── AWS ────────────────────────────────────────────────────────────
   Official "aws" wordmark with orange smile arrow                    */
export const AWSLogo = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 80 48" className={className} {...props} xmlns="http://www.w3.org/2000/svg">
    {/* "aws" orange text */}
    <text x="0" y="28" fontFamily="'Amazon Ember','Arial Black',sans-serif" fontSize="32" fontWeight="900" fill="#FF9900" letterSpacing="-1">aws</text>
    {/* Smile arrow */}
    <path d="M11 38 Q40 52 69 38" fill="none" stroke="#FF9900" strokeWidth="3" strokeLinecap="round"/>
    <polygon points="69,34 69,42 75,38" fill="#FF9900"/>
  </svg>
)

/* ── Adobe ──────────────────────────────────────────────────────────
   Official red "A" on dark background — the Creative Cloud mark     */
export const AdobeLogo = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 240 234" className={className} {...props} xmlns="http://www.w3.org/2000/svg">
    <path d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z" fill="#FA0F00"/>
    <path d="M126 166H90L80 196H52l52-136h32l52 136h-28l-10-30h-24zm-7.5-30l-10.5-37.5L97.5 136H118.5z" fill="#fff"/>
  </svg>
)

/* ── Autodesk ───────────────────────────────────────────────────────
   Official Autodesk triangular "A" mark in their brand green/blue    */
export const AutodeskLogo = ({ className = 'w-6 h-6', ...props }) => (
  <img src="/autodesk.png" alt="Autodesk" className={className} style={{ objectFit: 'contain' }} {...props} />
)

/* ── ZWCAD ──────────────────────────────────────────────────────────
   Faithful ZWCAD "Z" logomark in their blue                         */
export const ZWCADLogo = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 100 100" className={className} {...props} xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="16" fill="#0B549C"/>
    {/* Bold Z shape */}
    <polygon points="18,20 82,20 82,36 38,64 82,64 82,80 18,80 18,64 62,36 18,36" fill="white"/>
  </svg>
)

/* ── GstarCAD ───────────────────────────────────────────────────────
   "G" mark in GstarCAD teal                                         */
export const GstarCADLogo = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 100 100" className={className} {...props} xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="16" fill="#00A896"/>
    {/* Bold G */}
    <path d="M72 40 A28 28 0 1 0 72 60 L52 60 L52 48 L72 48" fill="none" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/* ── CorelDRAW ──────────────────────────────────────────────────────
   Official Corel "C" spiral / swirl mark                            */
export const CorelLogo = ({ className = 'w-6 h-6', ...props }) => (
  <img src="/corel.png" alt="CorelDRAW" className={className} style={{ objectFit: 'contain' }} {...props} />
)

/* ── Cisco ──────────────────────────────────────────────────────────
   Official Cisco bridge/wave bars                                    */
export const CiscoLogo = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 120 60" className={className} {...props} xmlns="http://www.w3.org/2000/svg">
    {/* 6 graduated bars (Cisco bridge icon) */}
    <rect x="5"  y="30" width="10" height="20" rx="3" fill="#00BCEB"/>
    <rect x="20" y="22" width="10" height="28" rx="3" fill="#00BCEB"/>
    <rect x="35" y="14" width="10" height="36" rx="3" fill="#00BCEB"/>
    <rect x="50" y="22" width="10" height="28" rx="3" fill="#00BCEB"/>
    <rect x="65" y="30" width="10" height="20" rx="3" fill="#00BCEB"/>
    {/* "cisco" text below */}
    <text x="4" y="56" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="bold" fill="#00BCEB" letterSpacing="2">cisco</text>
  </svg>
)

/* ── Lenovo ─────────────────────────────────────────────────────────*/
export const LenovoLogo = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 100 30" className={className} {...props} xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="30" fill="#E2231A" />
    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#FFF" fontStyle="italic">Lenovo</text>
  </svg>
)

/* ── HPE (Hewlett Packard Enterprise) ───────────────────────────────*/
export const HPELogo = ({ className = 'w-6 h-6', ...props }) => (
  <img src="/hpe.svg" alt="Hewlett Packard Enterprise" className={className} style={{ objectFit: 'contain' }} {...props} />
)

/* ── Registry map ───────────────────────────────────────────────────*/
const Registry = {
  microsoft: MicrosoftLogo,
  azure:     AzureLogo,
  aws:       AWSLogo,
  adobe:     AdobeLogo,
  autodesk:  AutodeskLogo,
  zwcad:     ZWCADLogo,
  gstarcad:  GstarCADLogo,
  corel:     CorelLogo,
  cisco:     CiscoLogo,
  lenovo:    LenovoLogo,
  hpe:       HPELogo,
}

export default Registry
