import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiVideo, FiPhoneCall, FiMapPin, FiGlobe } from 'react-icons/fi'

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:30 PM', '05:00 PM'
]

const meetingTypes = [
  { id: 'online', label: 'Online Meeting', icon: FiVideo, desc: 'Microsoft Teams / Zoom' },
  { id: 'phone', label: 'Phone Call', icon: FiPhoneCall, desc: 'We will call you' },
  { id: 'office', label: 'Office Visit', icon: FiMapPin, desc: '713, Shilp Arista, Ahmedabad' }
]

const ConsultationScheduler = ({ formData, updateFormData, onBack, isSubmitting }) => {
  const handleDateSelect = (day) => {
    updateFormData({ meetingDate: day })
  }
  
  const handleTimeSelect = (time) => {
    updateFormData({ meetingTime: time })
  }

  const handleTypeSelect = (type) => {
    updateFormData({ meetingType: type })
  }

  const isValid = formData.meetingDate && formData.meetingTime && formData.meetingType

  const today = new Date()
  const availableDays = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() + i + 1)
    if (d.getDay() === 0) d.setDate(d.getDate() + 1)
    if (d.getDay() === 6) d.setDate(d.getDate() + 2)
      
    return {
      dayStr: d.toLocaleDateString('en-US', { weekday: 'short' }),
      dateStr: d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
      fullValue: d.toISOString()
    }
  })

  const validDays = availableDays.slice(0, 5)

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="w-full pb-10"
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-heading font-extrabold mb-3 text-[#3D523D]">Schedule Consultation</h2>
        <p className="text-text-secondary text-sm font-light">Select a convenient time for our architects to connect with you.</p>
      </div>

      <div className="p-2 md:p-4">
        
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column: Date & Time */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-heading font-extrabold flex items-center gap-2 text-[#3D523D]">
                  <FiCalendar className="text-accent" /> Select Date
                </h3>
                <span className="text-xs text-[#3D523D] flex items-center gap-1 bg-[#D4E7D4] px-2.5 py-1 rounded-full font-bold">
                  <FiGlobe /> {Intl.DateTimeFormat().resolvedOptions().timeZone}
                </span>
              </div>
              
              <div className="grid grid-cols-5 gap-2">
                {validDays.map((d, idx) => {
                  const isSelected = formData.meetingDate === d.fullValue
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleDateSelect(d.fullValue)}
                      className={`py-3 flex flex-col items-center justify-center rounded-xl border transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#87A987] text-white border-[#87A987] shadow-sm'
                          : 'bg-white/60 border-[#87A987]/15 text-[#556B55] hover:border-[#87A987] hover:bg-white hover:text-[#3D523D]'
                      }`}
                    >
                      <span className="text-[10px] uppercase tracking-wider mb-1 font-bold">{d.dayStr}</span>
                      <span className="font-extrabold text-sm">{d.dateStr.split(' ')[1]}</span>
                      <span className="text-[10px]">{d.dateStr.split(' ')[0]}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-heading font-extrabold mb-4 flex items-center gap-2 text-[#3D523D]">
                <FiClock className="text-accent" /> Available Times
              </h3>
              
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((time, idx) => {
                  const isSelected = formData.meetingTime === time
                  const disabled = !formData.meetingDate
                  
                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={disabled}
                      onClick={() => handleTimeSelect(time)}
                      className={`py-2 px-3 rounded-lg border text-sm font-bold transition-all duration-300 ${
                        disabled 
                          ? 'opacity-50 cursor-not-allowed bg-white/5 border-transparent text-text-muted'
                          : isSelected
                            ? 'bg-[#D4E7D4] border-[#87A987] text-[#3d523d]'
                            : 'bg-white/60 border-[#87A987]/15 text-[#556B55] hover:border-[#87A987]/40 hover:bg-white hover:text-[#3D523D]'
                      }`}
                    >
                      {time}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Meeting Type */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-extrabold mb-4 text-[#3D523D]">Meeting Preference</h3>
            
            <div className="flex flex-col gap-3">
              {meetingTypes.map(type => {
                const isSelected = formData.meetingType === type.id
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => handleTypeSelect(type.id)}
                    className={`p-4 rounded-xl border text-left flex items-start gap-4 transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#D4E7D4] border-[#87A987] shadow-sm'
                        : 'bg-white/60 border-[#87A987]/15 hover:border-[#87A987] hover:bg-white'
                    }`}
                  >
                    <div className={`mt-1 ${isSelected ? 'text-[#3D523D]' : 'text-text-muted'}`}>
                      <type.icon size={24} />
                    </div>
                    <div>
                      <h4 className={`font-bold text-[#3D523D]`}>
                        {type.label}
                      </h4>
                      <p className="text-xs text-text-secondary mt-1 font-light">{type.desc}</p>
                    </div>
                    
                    <div className="ml-auto mt-2">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isSelected ? 'border-[#87A987]' : 'border-text-secondary/30'
                      }`}>
                        {isSelected && <div className="w-2.5 h-2.5 bg-[#87A987] rounded-full" />}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-[#E6E2DA]">
          <p className="text-center text-xs text-[#3D523D] font-bold mb-6 tracking-widest uppercase">Trusted By Enterprises Worldwide</p>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            <span className="px-4 py-2 bg-white rounded-full border border-[#87A987]/15 text-xs text-[#3D523D] flex items-center gap-2 shadow-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Secure Consultation
            </span>
            <span className="px-4 py-2 bg-white rounded-full border border-[#87A987]/15 text-xs text-[#3D523D] flex items-center gap-2 shadow-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> NDA Available
            </span>
            <span className="px-4 py-2 bg-white rounded-full border border-[#87A987]/15 text-xs text-[#3D523D] flex items-center gap-2 shadow-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#87A987]"></span> Certified Architects
            </span>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="text-text-secondary hover:text-[#3D523D] font-bold transition-colors"
          >
            ← Back
          </button>
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={`px-8 py-4 rounded-full font-bold tracking-wide transition-all ${
              isValid && !isSubmitting
                ? 'bg-[#87A987] text-white hover:bg-[#6F8E6F] shadow-sm'
                : 'bg-[#87A987]/20 text-[#3D523D]/40 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Processing...
              </span>
            ) : (
              'Submit Consultation Request'
            )}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ConsultationScheduler
