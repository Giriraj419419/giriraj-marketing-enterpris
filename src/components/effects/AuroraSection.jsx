import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { useAurora } from '../../context/AuroraContext'

const AuroraSection = ({ children, intensity = 0.5, theme = 'default', className = '' }) => {
  const ref = useRef(null)
  const { setIntensity, setTheme } = useAurora()
  const isInView = useInView(ref, { margin: "-50% 0px" })

  useEffect(() => {
    if (isInView) {
      setIntensity(intensity)
      setTheme(theme)
    }
  }, [isInView, intensity, theme, setIntensity, setTheme])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default AuroraSection
