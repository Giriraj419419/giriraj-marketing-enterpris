import { motion } from 'framer-motion'
import { FiUser, FiBriefcase, FiMail, FiPhone, FiActivity, FiUsers } from 'react-icons/fi'

const FloatingInput = ({ label, id, type = 'text', icon: Icon, value, onChange, required = true }) => {
  return (
    <div className="relative mb-8 group">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-text-muted group-focus-within:text-accent transition-colors">
        {Icon && <Icon size={18} />}
      </div>
      <input
        type={type}
        id={id}
        required={required}
        value={value || ''}
        onChange={(e) => onChange(id, e.target.value)}
        placeholder=" "
        className="block w-full pl-12 pr-4 py-4 bg-white border border-[#87A987]/20 rounded-xl text-[#3D523D] appearance-none focus:outline-none focus:border-[#87A987] focus:shadow-[0_0_0_4px_rgba(135,169,135,0.15)] peer transition-all shadow-sm"
      />
      <label
        htmlFor={id}
        className="absolute text-text-secondary duration-300 transform -translate-y-4 scale-75 top-2 left-12 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-accent pointer-events-none text-sm font-medium"
      >
        {label}
      </label>
    </div>
  )
}

const FloatingSelect = ({ label, id, icon: Icon, value, onChange, options, required = true }) => {
  return (
    <div className="relative mb-8 group">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-text-muted group-focus-within:text-accent transition-colors z-20">
        {Icon && <Icon size={18} />}
      </div>
      <select
        id={id}
        required={required}
        value={value || ''}
        onChange={(e) => onChange(id, e.target.value)}
        className={`block w-full pl-12 pr-4 py-4 bg-white border border-[#87A987]/20 rounded-xl appearance-none focus:outline-none focus:border-[#87A987] focus:shadow-[0_0_0_4px_rgba(135,169,135,0.15)] peer transition-all shadow-sm cursor-pointer relative z-10 ${value ? 'text-[#3D523D] font-bold' : 'text-transparent'}`}
      >
        <option value="" disabled className="bg-white text-text-muted">Select an option</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value} className="bg-white text-[#3D523D]">
            {opt.label}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className={`absolute text-text-secondary duration-300 transform z-0 top-2 left-12 origin-[0] pointer-events-none text-sm font-medium ${value ? '-translate-y-4 scale-75' : 'translate-y-2.5 scale-100'} peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-accent peer-focus:z-20`}
      >
        {label}
      </label>
      {/* Custom Dropdown Arrow */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-text-muted z-20">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}

const BusinessInfo = ({ formData, updateFormData, onNext, onBack }) => {
  const handleChange = (id, value) => {
    updateFormData({ [id]: value })
  }

  const isValid = 
    formData.fullName?.length > 2 &&
    formData.companyName?.length > 2 &&
    formData.email?.includes('@') &&
    formData.phone?.length > 5 &&
    formData.industry &&
    formData.companySize

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="w-full"
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-heading font-extrabold mb-3 text-[#3D523D]">Business Information</h2>
        <p className="text-text-secondary text-sm font-light">Tell us about your organization so we can better assist you.</p>
      </div>

      <div className="p-2 md:p-4">
        <div className="grid md:grid-cols-2 gap-x-6">
          <FloatingInput 
            id="fullName" 
            label="Full Name" 
            icon={FiUser} 
            value={formData.fullName} 
            onChange={handleChange} 
          />
          <FloatingInput 
            id="companyName" 
            label="Company Name" 
            icon={FiBriefcase} 
            value={formData.companyName} 
            onChange={handleChange} 
          />
        </div>

        <div className="grid md:grid-cols-2 gap-x-6">
          <FloatingInput 
            id="email" 
            label="Business Email" 
            type="email" 
            icon={FiMail} 
            value={formData.email} 
            onChange={handleChange} 
          />
          <FloatingInput 
            id="phone" 
            label="Phone Number" 
            type="tel" 
            icon={FiPhone} 
            value={formData.phone} 
            onChange={handleChange} 
          />
        </div>

        <div className="grid md:grid-cols-2 gap-x-6">
          <FloatingSelect
            id="industry"
            label="Industry"
            icon={FiActivity}
            value={formData.industry}
            onChange={handleChange}
            options={[
              { value: 'technology', label: 'Technology & IT' },
              { value: 'manufacturing', label: 'Manufacturing' },
              { value: 'healthcare', label: 'Healthcare' },
              { value: 'finance', label: 'Financial Services' },
              { value: 'education', label: 'Education' },
              { value: 'retail', label: 'Retail & E-commerce' },
              { value: 'other', label: 'Other' }
            ]}
          />
          <FloatingSelect
            id="companySize"
            label="Company Size"
            icon={FiUsers}
            value={formData.companySize}
            onChange={handleChange}
            options={[
              { value: '1-50', label: '1 - 50 Employees' },
              { value: '51-200', label: '51 - 200 Employees' },
              { value: '201-500', label: '201 - 500 Employees' },
              { value: '501-1000', label: '501 - 1000 Employees' },
              { value: '1000+', label: '1000+ Employees' }
            ]}
          />
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="text-text-secondary hover:text-[#3D523D] font-bold transition-colors"
          >
            ← Back
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={!isValid}
            className={`px-8 py-3 rounded-full font-bold transition-all ${
              isValid 
                ? 'bg-[#87A987] text-white hover:bg-[#6F8E6F] shadow-sm' 
                : 'bg-[#87A987]/20 text-[#3D523D]/40 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default BusinessInfo
