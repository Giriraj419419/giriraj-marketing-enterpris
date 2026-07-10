import { motion } from 'framer-motion'
import { FiEdit3, FiAlertCircle } from 'react-icons/fi'

const ExpandableTextarea = ({ label, id, value, onChange, icon: Icon, placeholder, maxLength = 1000 }) => {
  const charCount = value?.length || 0
  const isNearLimit = charCount > maxLength * 0.9

  return (
    <div className="relative mb-8 group">
      <div className="absolute top-4 left-0 flex items-center pl-4 pointer-events-none text-text-muted group-focus-within:text-accent transition-colors">
        {Icon && <Icon size={18} />}
      </div>
      <textarea
        id={id}
        value={value || ''}
        onChange={(e) => onChange(id, e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        rows={4}
        className="block w-full pl-12 pr-4 py-4 bg-white border border-[#87A987]/20 rounded-xl text-[#3D523D] appearance-none focus:outline-none focus:border-[#87A987] focus:shadow-[0_0_0_4px_rgba(135,169,135,0.15)] peer transition-all shadow-sm resize-y min-h-[120px]"
      />
      <div className="absolute top-0 right-0 -mt-6 flex justify-end w-full pr-2">
        <span className={`text-xs ${isNearLimit ? 'text-red-400' : 'text-text-muted'}`}>
          {charCount} / {maxLength}
        </span>
      </div>
      <label
        htmlFor={id}
        className="absolute text-text-secondary duration-300 transform -translate-y-8 scale-75 top-2 left-0 origin-[0] peer-focus:text-accent pointer-events-none text-sm font-medium"
      >
        {label}
      </label>
    </div>
  )
}

const ProjectDetails = ({ formData, updateFormData, onNext, onBack }) => {
  const handleChange = (id, value) => {
    updateFormData({ [id]: value })
  }

  const isValid = formData.projectTitle?.length > 2 && formData.projectDescription?.length > 10

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="w-full"
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-heading font-extrabold mb-3 text-[#3D523D]">Project Details</h2>
        <p className="text-text-secondary text-sm font-light">Provide context so our architects can prepare a precise solution.</p>
      </div>

      <div className="p-2 md:p-4 space-y-4">
        
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
          <div className="relative mb-8 group">
             <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-text-muted group-focus-within:text-accent transition-colors">
               <FiEdit3 size={18} />
             </div>
             <input
               type="text"
               id="projectTitle"
               required
               value={formData.projectTitle || ''}
               onChange={(e) => handleChange('projectTitle', e.target.value)}
               placeholder=" "
               className="block w-full pl-12 pr-4 py-4 bg-white border border-[#87A987]/20 rounded-xl text-[#3D523D] appearance-none focus:outline-none focus:border-[#87A987] focus:shadow-[0_0_0_4px_rgba(135,169,135,0.15)] peer transition-all shadow-sm"
             />
             <label
               htmlFor="projectTitle"
               className="absolute text-text-secondary duration-300 transform -translate-y-4 scale-75 top-2 left-12 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-accent pointer-events-none text-sm font-medium"
             >
               Project Title
             </label>
          </div>

          <div className="relative mb-8 group">
             <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-text-muted group-focus-within:text-accent transition-colors z-20">
               <span className="font-extrabold text-sm text-text-muted group-focus-within:text-accent">₹</span>
             </div>
             <input
               type="number"
               id="projectBudget"
               required
               min="1"
               step="any"
               value={formData.projectBudget || ''}
               onChange={(e) => handleChange('projectBudget', e.target.value)}
               placeholder="Enter your estimated project budget"
               className="block w-full pl-10 pr-4 py-4 bg-white border border-[#87A987]/20 rounded-xl text-[#3D523D] appearance-none focus:outline-none focus:border-[#87A987] focus:shadow-[0_0_0_4px_rgba(135,169,135,0.15)] peer transition-all shadow-sm placeholder:text-transparent focus:placeholder:text-text-muted"
             />
             <label
               htmlFor="projectBudget"
               className="absolute text-text-secondary duration-300 transform -translate-y-4 scale-75 top-2 left-10 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-accent pointer-events-none text-sm font-medium"
             >
               Project Budget (₹)
             </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
          <div className="relative mb-8 group">
             <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-text-muted group-focus-within:text-accent transition-colors z-20">
               <span className="font-extrabold text-sm text-text-muted group-focus-within:text-accent">📅</span>
             </div>
             <select
               id="timeline"
               value={formData.timeline || ''}
               onChange={(e) => handleChange('timeline', e.target.value)}
               className={`block w-full pl-12 pr-4 py-4 bg-white border border-[#87A987]/20 rounded-xl appearance-none focus:outline-none focus:border-[#87A987] focus:shadow-[0_0_0_4px_rgba(135,169,135,0.15)] peer transition-all shadow-sm cursor-pointer relative z-10 ${formData.timeline ? 'text-[#3D523D] font-bold' : 'text-transparent'}`}
             >
               <option value="" disabled className="bg-white text-text-muted">Select an option</option>
               <option value="immediate" className="bg-white text-[#3D523D]">Immediate / Urgent</option>
               <option value="1-3-months" className="bg-white text-[#3D523D]">1 - 3 Months</option>
               <option value="3-6-months" className="bg-white text-[#3D523D]">3 - 6 Months</option>
               <option value="6-months-plus" className="bg-white text-[#3D523D]">6+ Months</option>
               <option value="exploratory" className="bg-white text-[#3D523D]">Just Exploring</option>
             </select>
             <label
               htmlFor="timeline"
               className={`absolute text-text-secondary duration-300 transform z-0 top-2 left-12 origin-[0] pointer-events-none text-sm font-medium ${formData.timeline ? '-translate-y-4 scale-75' : 'translate-y-2.5 scale-100'} peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-accent peer-focus:z-20`}
             >
               Project Timeline
             </label>
             <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-text-muted z-20">
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </div>
          </div>

          <div className="relative mb-8 group">
             <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-text-muted group-focus-within:text-accent transition-colors">
               <span className="font-extrabold text-sm text-text-muted group-focus-within:text-accent">⚙️</span>
             </div>
             <input
               type="text"
               id="preferredTech"
               value={formData.preferredTech || ''}
               onChange={(e) => handleChange('preferredTech', e.target.value)}
               placeholder=" "
               className="block w-full pl-12 pr-4 py-4 bg-white border border-[#87A987]/20 rounded-xl text-[#3D523D] appearance-none focus:outline-none focus:border-[#87A987] focus:shadow-[0_0_0_4px_rgba(135,169,135,0.15)] peer transition-all shadow-sm"
             />
             <label
               htmlFor="preferredTech"
               className="absolute text-text-secondary duration-300 transform -translate-y-4 scale-75 top-2 left-12 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-accent pointer-events-none text-sm font-medium"
             >
               Preferred Technologies (Optional)
             </label>
          </div>
        </div>

        <div className="pt-4">
          <ExpandableTextarea
            id="projectDescription"
            label="Project Description"
            placeholder="Describe your infrastructure needs, licensing requirements, or cloud migration goals."
            value={formData.projectDescription}
            onChange={handleChange}
            maxLength={2000}
          />

          <ExpandableTextarea
            id="currentChallenges"
            label="Current Challenges (Optional)"
            placeholder="What business problems are you trying to solve?"
            value={formData.currentChallenges}
            onChange={handleChange}
            maxLength={1000}
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

export default ProjectDetails
