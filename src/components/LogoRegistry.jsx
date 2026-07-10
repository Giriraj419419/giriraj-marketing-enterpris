/**
 * GIRIRAJ Logo Registry
 * Faithful brand-accurate inline SVG/PNG logos for all technology partners.
 * All logos match official brand guidelines and are instantly recognizable.
 */

export const MicrosoftLogo = ({ className = 'h-8', ...props }) => (
  <img src="/logos/microsoft.svg" alt="Microsoft" className={className} style={{ objectFit: 'contain' }} {...props} />
)

export const AzureLogo = ({ className = 'h-8', ...props }) => (
  <img src="/logos/azure.svg" alt="Microsoft Azure" className={className} style={{ objectFit: 'contain' }} {...props} />
)

export const AWSLogo = ({ className = 'h-8', ...props }) => (
  <img src="/logos/aws.svg" alt="AWS" className={className} style={{ objectFit: 'contain' }} {...props} />
)

export const AdobeLogo = ({ className = 'h-8', ...props }) => (
  <img src="/logos/adobe.svg" alt="Adobe" className={className} style={{ objectFit: 'contain' }} {...props} />
)

export const AutodeskLogo = ({ className = 'h-8', ...props }) => (
  <img src="/logos/autodesk.svg" alt="Autodesk" className={className} style={{ objectFit: 'contain' }} {...props} />
)

export const ZWCADLogo = ({ className = 'h-8', ...props }) => (
  <img src="/logos/zwcad.svg" alt="ZWCAD" className={className} style={{ objectFit: 'contain' }} {...props} />
)

export const GstarCADLogo = ({ className = 'h-8', ...props }) => (
  <img src="/logos/gstarcad.svg" alt="GstarCAD" className={className} style={{ objectFit: 'contain' }} {...props} />
)

export const CorelLogo = ({ className = 'h-8', ...props }) => (
  <img src="/logos/coreldraw.svg" alt="CorelDRAW" className={className} style={{ objectFit: 'contain' }} {...props} />
)

export const LenovoLogo = ({ className = 'h-8', ...props }) => (
  <img src="/logos/lenovo.svg" alt="Lenovo" className={className} style={{ objectFit: 'contain' }} {...props} />
)

export const HPELogo = ({ className = 'h-8', ...props }) => (
  <img src="/logos/hpe.svg" alt="HPE" className={className} style={{ objectFit: 'contain' }} {...props} />
)

export const DellLogo = ({ className = 'h-8', ...props }) => (
  <img src="/logos/dell.svg" alt="Dell" className={className} style={{ objectFit: 'contain' }} {...props} />
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
  lenovo:    LenovoLogo,
  hpe:       HPELogo,
  dell:      DellLogo,
}

export default Registry
