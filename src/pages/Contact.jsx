import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheck, FiMapPin, FiClock, FiPhone, FiMail, FiSettings, FiCloud, FiArrowRight, FiShield } from 'react-icons/fi'
import AuroraSection from '../components/effects/AuroraSection'

// Consultation Components
import ConsultationHero from '../components/consultation/ConsultationHero'
import RequirementSelection from '../components/consultation/RequirementSelection'
import BusinessInfo from '../components/consultation/BusinessInfo'
import ProjectDetails from '../components/consultation/ProjectDetails'
import FileUploadCenter from '../components/consultation/FileUploadCenter'
import ConsultationScheduler from '../components/consultation/ConsultationScheduler'
import SubmissionSuccess from '../components/consultation/SubmissionSuccess'

const trustStripItems = [
  { val: '✓ 500+ Projects Delivered' },
  { val: '✓ Enterprise Infrastructure Experts' },
  { val: '✓ PAN India Support' },
  { val: '✓ Microsoft • AWS • Adobe • Autodesk Solutions' }
]

const consultationBenefits = [
  { title: 'Infrastructure Planning', desc: 'Custom topology design for cloud, networking, and virtualization systems.', icon: FiSettings },
  { title: 'Solution Mapping', desc: 'Technology stack mapping aligned with business and compliance requirements.', icon: FiShield },
  { title: 'Cloud Strategy', desc: 'Risk-free planning for cloud migration, hybrid sync, and active backups.', icon: FiCloud },
  { title: 'AMC Consultation', desc: 'Proactive Annual Maintenance Contracts aligned with corporate SLAs.', icon: FiShield }
]

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }))
  }

  const handleNext = () => setCurrentStep(prev => prev + 1)
  const handleBack = () => setCurrentStep(prev => prev - 1)

  const handleSubmit = async (e) => {
    console.log("FORM SUBMITTED");
    if (e && e.preventDefault) e.preventDefault();
    console.log("Form Submit Started");
    console.log("Form Data:", formData);
    setIsSubmitting(true)
    
    try {
      const data = new FormData();
      data.append('fullName', formData.fullName || '');
      data.append('companyName', formData.companyName || '');
      data.append('email', formData.email || '');
      data.append('phone', formData.phone || '');
      data.append('serviceCategory', formData.services ? formData.services.join(', ') : '');
      data.append('projectBudget', formData.projectBudget || '');
      data.append('timeline', formData.timeline || '');
      
      const details = [];
      if (formData.projectTitle) details.push(`Title: ${formData.projectTitle}`);
      if (formData.projectDescription) details.push(`Description: ${formData.projectDescription}`);
      if (formData.industry) details.push(`Industry: ${formData.industry}`);
      data.append('projectDetails', details.join(' | '));
      
      // Append files
      if (formData.files && formData.files.length > 0) {
        formData.files.forEach(f => {
          if (f.rawFile) {
            data.append('documents', f.rawFile);
          }
        });
      }

      console.log("Sending API Request to /api/leads");
      
      const response = await fetch(`/api/leads`, {
        method: 'POST',
        body: data,
      });

      console.log(response);
      console.log('API request finished. Status:', response.status);
      const result = await response.json();
      console.log('API response received:', result);

      if (response.ok) {
        // Save the received leadId to formData so it can be shown on the success page
        updateFormData({ leadId: result.leadId });
        setCurrentStep(6); // Success Step
      } else {
        alert(`Submission failed: ${result.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.log(error);
      console.error('Submit Error:', error);
      alert('A network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const steps = [
    { id: 1, title: 'Requirements' },
    { id: 2, title: 'Business Info' },
    { id: 3, title: 'Project Details' },
    { id: 4, title: 'Documents' },
    { id: 5, title: 'Schedule' }
  ]

  return (
    <AuroraSection intensity={0.9} className="bg-[#FDFBF7] min-h-screen">
      <ConsultationHero />

      {/* Trust Strip */}
      <section className="py-8 bg-transparent relative z-10 -mt-10 mb-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {trustStripItems.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/70 backdrop-blur-md border border-[#87A987]/15 rounded-2xl p-4 text-center text-sm font-bold text-[#3D523D] shadow-sm flex items-center justify-center gap-2"
              >
                {item.val}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form Portal & Side Info */}
      <section className="pb-32 relative z-10" id="consultation-portal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Multi-Step Consultation Portal */}
            <div className="lg:col-span-7">
              {currentStep < 6 && (
                <div className="max-w-4xl mx-auto mb-10 px-4">
                  <div className="flex items-center justify-between relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[#87A987]/15 rounded-full z-0" />
                    <div 
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#87A987] rounded-full z-0 transition-all duration-500 ease-out" 
                      style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                    />
                    
                    {steps.map(step => (
                      <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                          currentStep > step.id 
                            ? 'bg-[#87A987] text-white shadow-sm' 
                            : currentStep === step.id 
                              ? 'bg-white border-2 border-[#87A987] text-[#87A987] shadow-md'
                              : 'bg-white border border-[#87A987]/20 text-text-secondary'
                        }`}>
                          {currentStep > step.id ? <FiCheck /> : step.id}
                        </div>
                        <span className={`text-[10px] absolute -bottom-5 w-24 text-center font-bold uppercase tracking-wider ${currentStep === step.id ? 'text-[#3D523D]' : 'text-text-secondary/70'}`}>
                          {step.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Premium Glass Form Container */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
                className="bg-white/65 backdrop-blur-[20px] border border-[#87A987]/15 rounded-[32px] p-8 md:p-12 shadow-[0_20px_60px_rgba(61,82,61,0.08)] relative overflow-hidden mt-6 min-h-[500px]"
              >
                <AnimatePresence mode="wait">
                  {currentStep === 1 && <RequirementSelection key="step1" formData={formData} updateFormData={updateFormData} onNext={handleNext} />}
                  {currentStep === 2 && <BusinessInfo key="step2" formData={formData} updateFormData={updateFormData} onNext={handleNext} onBack={handleBack} />}
                  {currentStep === 3 && <ProjectDetails key="step3" formData={formData} updateFormData={updateFormData} onNext={handleNext} onBack={handleBack} />}
                  {currentStep === 4 && <FileUploadCenter key="step4" formData={formData} updateFormData={updateFormData} onNext={handleNext} onBack={handleBack} />}
                  {currentStep === 5 && <ConsultationScheduler key="step5" formData={formData} updateFormData={updateFormData} onBack={handleBack} isSubmitting={isSubmitting} />}
                  {currentStep === 6 && <SubmissionSuccess key="step6" formData={formData} />}
                </AnimatePresence>
              </form>
            </div>

            {/* Right: Why Book a Consultation & Testimonials */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Feature Box */}
              <div className="bg-white/65 backdrop-blur-md border border-[#87A987]/15 rounded-[24px] p-8 shadow-sm">
                <h3 className="text-xl font-heading font-extrabold text-[#3D523D] mb-6 border-b border-[#87A987]/10 pb-4">
                  Why Book a Consultation?
                </h3>
                <div className="space-y-6">
                  {consultationBenefits.map((b, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-[#D4E7D4] flex items-center justify-center text-[#87A987] shrink-0">
                        <b.icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-[#3D523D] mb-1">{b.title}</h4>
                        <p className="text-xs text-text-secondary leading-relaxed font-light">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Proof */}
              <div className="bg-white/65 backdrop-blur-md border border-[#87A987]/15 rounded-[24px] p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4E7D4]/30 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-6">What to expect</h3>
                <p className="text-sm text-[#3D523D] italic leading-relaxed font-light mb-6">
                  "The technology roadmap session was highly detailed, and the consultation resolved our licensing overlaps in just 2 hours."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4E7D4] flex items-center justify-center font-bold text-[#3D523D] text-sm shadow-inner">
                    R
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#3D523D]">Rajesh Mehta</div>
                    <div className="text-[10px] text-text-secondary font-light">Director of Infrastructure, GovTech Solutions</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Our Office */}
      <section className="py-24 bg-[rgba(212,231,212,0.20)] relative border-t border-b border-[#E6E2DA]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-extrabold mb-4 text-[#3D523D]">Our Office</h2>
            <p className="text-text-secondary text-lg font-light">Visit our innovation center or reach out directly.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Contact Details */}
            <div className="space-y-12">
              <div className="bg-white/65 border border-[#87A987]/12 rounded-3xl p-8 backdrop-blur-md hover:border-accent transition-all duration-300 shadow-sm">
                <h3 className="text-2xl font-heading font-extrabold mb-3 flex items-center gap-3 text-[#3D523D]">
                  <FiMapPin className="text-[#87A987]" /> Headquarters (Ahmedabad)
                </h3>
                <p className="text-text-secondary text-[15px] font-medium ml-8 group-hover:text-text-primary transition-colors">
                  713, Shilp Arista, Sindhu Bhavan Road,<br />Bodakdev, Ahmedabad, Gujarat 380054
                </p>
                <div className="space-y-3 mt-6 ml-8">
                  <a href="tel:+919638419419" className="flex items-center gap-3 text-text-primary hover:text-accent transition-colors">
                    <FiPhone className="text-[#87A987]" /> +91 96384 19419
                  </a>
                  <a href="mailto:info@girirajmktg.com" className="flex items-center gap-3 text-text-primary hover:text-accent transition-colors">
                    <FiMail className="text-[#87A987]" /> info@girirajmktg.com
                  </a>
                  <p className="flex items-center gap-3 text-text-secondary">
                    <FiClock className="text-text-secondary/70" /> Mon-Fri: 9:00 AM - 6:00 PM (IST)
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Interactive Map */}
            <div className="relative h-[600px] rounded-[32px] overflow-hidden border border-[#E6E2DA] group shadow-sm bg-white">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] pointer-events-none z-10 transition-opacity duration-300 group-hover:opacity-0" />
              
              <div className="absolute top-6 left-6 z-20 flex gap-2">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-md border border-[#87A987]/15 rounded-full text-sm font-medium shadow-lg flex items-center gap-2 text-[#3D523D]">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Offices Open
                </span>
              </div>
              
              <iframe 
                src="https://maps.google.com/maps?q=713+Shilp+Arista+Sindhu+Bhavan+Road+Bodakdev+Ahmedabad+Gujarat+380054&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(30%) contrast(90%)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Giriraj Marketing Locations"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="py-28 relative overflow-hidden bg-transparent">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="bg-gradient-to-br from-[#87A987] to-[#A8C3A8] rounded-[32px] p-16 md:p-20 shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 tracking-tight text-white leading-tight">
              Ready to Modernize Your Infrastructure?
            </h2>
            <p className="text-white/90 text-base max-w-xl mx-auto mb-10 font-light leading-relaxed">
              Connect with our solution architects to design a tailored licensing package and accelerate your digital roadmap.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="#consultation-portal"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#3D523D] hover:bg-white/90 transition-all font-bold shadow-md"
              >
                Book Free Consultation
                <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </AuroraSection>
  )
}

export default Contact
