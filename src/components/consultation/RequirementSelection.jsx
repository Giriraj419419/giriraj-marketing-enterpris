import { motion } from 'framer-motion'
import { FiCloud, FiShield, FiCpu, FiMonitor, FiPenTool, FiBriefcase, FiLayers, FiCheckCircle } from 'react-icons/fi'

const servicesList = [
  { id: 'm365', title: 'Microsoft 365', icon: FiCloud },
  { id: 'azure', title: 'Microsoft Azure', icon: FiCloud },
  { id: 'aws', title: 'AWS Cloud', icon: FiCloud },
  { id: 'adobe', title: 'Adobe Enterprise', icon: FiPenTool },
  { id: 'autodesk', title: 'Autodesk', icon: FiLayers },
  { id: 'zwcad', title: 'ZWCAD', icon: FiMonitor },
  { id: 'managed-it', title: 'Managed IT', icon: FiShield },
  { id: 'consulting', title: 'IT Consulting', icon: FiBriefcase }
]

const RequirementSelection = ({ formData, updateFormData, onNext }) => {
  const toggleSelection = (category, id) => {
    const currentList = formData[category] || []
    const updatedList = currentList.includes(id) 
      ? currentList.filter(item => item !== id)
      : [...currentList, id]
    updateFormData({ [category]: updatedList })
  }

  const hasSelection = (formData.services?.length > 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="w-full"
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-heading font-extrabold mb-3 text-[#3D523D]">What do you need help with?</h2>
        <p className="text-text-secondary text-sm font-light">Select all the enterprise solutions relevant to your project.</p>
      </div>

      <div className="space-y-12">
        <div>
          <h3 className="text-xl font-heading font-extrabold mb-6 flex items-center gap-2 text-[#3D523D]">
            <FiBriefcase className="text-accent" /> Software & IT Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {servicesList.map(service => {
              const isSelected = formData.services?.includes(service.id)
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => toggleSelection('services', service.id)}
                  className={`relative p-5 rounded-2xl border text-left transition-all duration-300 overflow-hidden group ${
                    isSelected 
                      ? 'bg-[#D4E7D4] border-[#87A987] shadow-sm' 
                      : 'bg-white/60 border-[#87A987]/15 hover:bg-white hover:border-[#87A987]/40'
                  }`}
                >
                  <service.icon className={`text-2xl mb-3 ${isSelected ? 'text-[#3D523D]' : 'text-text-secondary group-hover:text-accent'}`} />
                  <span className={`block font-bold text-sm ${isSelected ? 'text-[#3D523D]' : 'text-text-secondary group-hover:text-[#3D523D]'}`}>
                    {service.title}
                  </span>
                  
                  {isSelected && (
                    <motion.div 
                      layoutId="check-service"
                      className="absolute top-4 right-4 text-[#3D523D]"
                    >
                      <FiCheckCircle />
                    </motion.div>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-end">
        <button
          type="button"
          onClick={onNext}
          disabled={!hasSelection}
          className={`px-8 py-3 rounded-full font-bold transition-all ${
            hasSelection 
              ? 'bg-[#87A987] text-white hover:bg-[#6F8E6F] shadow-sm' 
              : 'bg-[#87A987]/20 text-[#3D523D]/40 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </div>
    </motion.div>
  )
}

export default RequirementSelection
