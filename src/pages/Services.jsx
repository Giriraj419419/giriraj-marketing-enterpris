import EnterpriseHero from '../components/services/EnterpriseHero'
import ServicesOverview from '../components/services/ServicesOverview'
import WhyChooseUs from '../components/services/WhyChooseUs'
import IndustriesServed from '../components/services/IndustriesServed'
import ImplementationProcess from '../components/services/ImplementationProcess'
import EnterpriseBenefits from '../components/services/EnterpriseBenefits'
import ServicesFAQ from '../components/services/ServicesFAQ'
import ServicesCTA from '../components/services/ServicesCTA'
import AuroraSection from '../components/effects/AuroraSection'

const Services = () => {
  return (
    <AuroraSection intensity={0.6} className="w-full">
      <EnterpriseHero />
      <ServicesOverview />
      <WhyChooseUs />
      <IndustriesServed />
      <ImplementationProcess />
      <EnterpriseBenefits />
      <ServicesFAQ />
      <ServicesCTA />
    </AuroraSection>
  )
}

export default Services
