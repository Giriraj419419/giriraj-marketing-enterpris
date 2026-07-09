import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import FloatingChat from './components/FloatingChat'
import AuroraBackground from './components/effects/AuroraBackground'
import AmbientBlobs from './components/effects/AmbientBlobs'
import ScrollProgress from './components/effects/ScrollProgress'
import { AuroraProvider } from './context/AuroraContext'
import { AnimatePresence } from 'framer-motion'

// ── Lazy-loaded route components (critical perf fix) ──────────────
const Home        = lazy(() => import('./pages/Home'))
const About       = lazy(() => import('./pages/About'))
const Clients     = lazy(() => import('./pages/Clients'))
const Services    = lazy(() => import('./pages/Services'))
const Contact     = lazy(() => import('./pages/Contact'))

// Service pages (Software Licensing & Cloud)
const MicrosoftSolutions = lazy(() => import('./pages/services/MicrosoftSolutions'))
const MicrosoftAzure = lazy(() => import('./pages/services/MicrosoftAzure'))
const AWSCloud = lazy(() => import('./pages/services/AWSCloud'))
const AdobeSolutions = lazy(() => import('./pages/services/AdobeSolutions'))
const AutodeskSolutions = lazy(() => import('./pages/services/AutodeskSolutions'))
const GstarCADSolutions = lazy(() => import('./pages/services/GstarCADSolutions'))
const CorelDRAWGraphicsSuite = lazy(() => import('./pages/services/CorelDRAWGraphicsSuite'))
const ZWCADSolutions = lazy(() => import('./pages/services/ZWCADSolutions'))


// ── Route page-level fallback ─────────────────────────────────────
const PageSkeleton = () => (
  <div className="min-h-screen bg-bg-primary flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-t-2 border-accent animate-spin" />
  </div>
)

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Reduced from 4000ms to 1500ms — enterprise users don't wait
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <AuroraProvider>
      <Router>
      <ScrollToTop />
      
      {/* ── Global Aurora Background ── */}
      <AuroraBackground />

      {/* ── Skip Navigation Link (Accessibility) ── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:font-semibold focus:text-sm focus:no-underline"
      >
        Skip to main content
      </a>

      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen
            key="loading"
            onComplete={() => {}}
          />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col relative overflow-hidden">
        <ScrollProgress />
        
        {/* Premium Background System */}
        <div className="fixed inset-0 z-[-3] bg-bg-primary pointer-events-none"></div>
        <AmbientBlobs />
        
        {/* Noise overlay - explicitly 100% opacity because SVG itself is 2% */}
        <div className="fixed inset-0 z-[999] bg-noise pointer-events-none mix-blend-overlay opacity-100"></div>
        
        <Navbar />

        <main id="main-content" className="flex-grow">
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact-us" element={<Contact />} />

              {/* Services */}
              <Route path="/services/microsoft" element={<MicrosoftSolutions />} />
              <Route path="/services/microsoft-azure" element={<MicrosoftAzure />} />
              <Route path="/services/aws-cloud" element={<AWSCloud />} />
              <Route path="/services/adobe" element={<AdobeSolutions />} />
              <Route path="/services/autodesk" element={<AutodeskSolutions />} />
              <Route path="/services/gstarcad" element={<GstarCADSolutions />} />
              <Route path="/services/coreldraw" element={<CorelDRAWGraphicsSuite />} />
              <Route path="/services/zwcad" element={<ZWCADSolutions />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <FloatingChat />
      </div>
    </Router>
    </AuroraProvider>
  )
}

export default App
