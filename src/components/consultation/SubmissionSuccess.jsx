import { motion } from 'framer-motion'
import { FiCheckCircle, FiHome, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const SubmissionSuccess = ({ formData }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-2xl mx-auto text-center"
    >
      <div className="bg-white/80 backdrop-blur-xl border border-[#87A987]/20 rounded-[32px] p-10 md:p-16 shadow-[0_20px_60px_rgba(61,82,61,0.08)] relative overflow-hidden flex flex-col items-center">
        
        {/* Success Animation Container */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          className="w-24 h-24 bg-[#D4E7D4] rounded-full flex items-center justify-center mb-8 relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="absolute inset-0 bg-[#87A987]/20 rounded-full animate-ping"
          />
          <FiCheckCircle className="text-[#3D523D] w-12 h-12 relative z-10" />
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#3D523D] mb-4">
          Thank You!
        </h2>
        
        <p className="text-xl text-text-secondary mb-2 font-medium">
          Your request has been submitted successfully.
        </p>
        
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          Our team has received your information and will contact you shortly.<br/><br/>
          Thank you for choosing Giriraj Marketing.
        </p>

        {/* Lead ID Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#FDFBF7] border border-[#87A987]/20 rounded-2xl p-6 w-full max-w-sm mb-10"
        >
          <p className="text-xs text-text-secondary uppercase font-bold tracking-widest mb-2">Your Lead Reference</p>
          <p className="text-3xl font-heading font-extrabold text-[#3D523D] tracking-wider">
            {formData.leadId || 'GM-0001'}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Link 
            to="/"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white border border-[#E6E2DA] hover:border-[#87A987] rounded-xl font-bold text-text-primary hover:text-[#3D523D] transition-all shadow-sm hover:shadow-md"
          >
            <FiHome /> Return Home
          </Link>
          <Link 
            to="/services"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#3D523D] hover:bg-[#2A3A2A] text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg"
          >
            Continue Browsing <FiArrowRight />
          </Link>
        </div>

      </div>
    </motion.div>
  )
}

export default SubmissionSuccess
