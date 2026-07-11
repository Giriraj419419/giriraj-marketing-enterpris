import HeroSection from '../components/sections/HeroSection'
import TrustedCompanies from '../components/sections/TrustedCompanies'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import ServicesGrid from '../components/sections/ServicesGrid'
import DevelopmentProcess from '../components/sections/DevelopmentProcess'
import IndustrySolutions from '../components/sections/IndustrySolutions'
import Statistics from '../components/sections/Statistics'
import FAQ from '../components/sections/FAQ'
import AuroraSection from '../components/effects/AuroraSection'
import SEO from '../components/SEO'

const Home = () => {
  return (
    <div>
      <SEO url="/" />
      <AuroraSection intensity={1.0}>
        <HeroSection />
      </AuroraSection>
      <AuroraSection intensity={0.65}>
        <TrustedCompanies />
      </AuroraSection>
      <AuroraSection intensity={0.7}>
        <WhyChooseUs />
      </AuroraSection>
      <AuroraSection intensity={0.6}>
        <ServicesGrid />
      </AuroraSection>
      <AuroraSection intensity={0.6}>
        <DevelopmentProcess />
      </AuroraSection>
      <AuroraSection intensity={0.6}>
        <IndustrySolutions />
      </AuroraSection>
      <AuroraSection intensity={0.6}>
        <Statistics />
      </AuroraSection>
      <AuroraSection intensity={0.6}>
        <FAQ />
      </AuroraSection>
    </div>
  )
}

export default Home
