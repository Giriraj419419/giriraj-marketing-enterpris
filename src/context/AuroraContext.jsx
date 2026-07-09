import { createContext, useContext, useState, useEffect } from 'react'

const AuroraContext = createContext()

export const useAurora = () => useContext(AuroraContext)

export const AuroraProvider = ({ children }) => {
  const [intensity, setIntensity] = useState(1.0)
  const [theme, setTheme] = useState('default') // 'default' or 'infrastructure'
  
  // Mouse parallax tracking
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    let frameId
    const handleMouseMove = (e) => {
      // Normalize to -1 to 1 based on screen center
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      
      frameId = requestAnimationFrame(() => {
        setMousePosition({ x, y })
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <AuroraContext.Provider value={{ intensity, setIntensity, theme, setTheme, mousePosition }}>
      {children}
    </AuroraContext.Provider>
  )
}
