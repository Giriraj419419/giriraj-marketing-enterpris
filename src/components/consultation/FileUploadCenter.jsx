import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiUploadCloud, FiFile, FiX, FiCheckCircle } from 'react-icons/fi'

const FileUploadCenter = ({ formData, updateFormData, onNext, onBack }) => {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const simulateFileUpload = (file) => {
    const newFile = {
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2), // MB
      id: Math.random().toString(36).substring(7),
      progress: 0,
      status: 'uploading',
      rawFile: file
    }

    const currentFiles = formData.files || []
    updateFormData({ files: [...currentFiles, newFile] })

    // Simulate progress
    let progress = 0
    const interval = setInterval(() => {
      progress += 25
      if (progress >= 100) {
        clearInterval(interval)
        updateFormData({
          files: [...currentFiles, { ...newFile, progress: 100, status: 'complete' }]
        })
      } else {
        updateFormData({
          files: [...currentFiles, { ...newFile, progress, status: 'uploading' }]
        })
      }
    }, 300)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const files = Array.from(e.dataTransfer.files)
    files.forEach(simulateFileUpload)
  }

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files)
    files.forEach(simulateFileUpload)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const removeFile = (id) => {
    const updatedFiles = (formData.files || []).filter(f => f.id !== id)
    updateFormData({ files: updatedFiles })
  }

  const files = formData.files || []

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="w-full"
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-heading font-extrabold mb-3 text-[#3D523D]">Project Documents</h2>
        <p className="text-text-secondary text-sm font-light">Upload RFPs, architecture diagrams, or CAD files (Optional).</p>
      </div>

      <div className="p-2 md:p-4">
        
        {/* Drag and Drop Zone */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 overflow-hidden ${
            isDragging 
              ? 'border-[#87A987] bg-[#D4E7D4]/30' 
              : 'border-[#87A987]/30 hover:border-[#87A987] hover:bg-[#D4E7D4]/10'
          }`}
        >
          {isDragging && (
            <div className="absolute inset-0 bg-[#D4E7D4]/10 backdrop-blur-sm z-0" />
          )}
          
          <div className="relative z-10 flex flex-col items-center">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${
              isDragging ? 'bg-[#87A987] text-white' : 'bg-[#D4E7D4] text-[#87A987]'
            }`}>
              <FiUploadCloud size={32} />
            </div>
            <h3 className="text-lg font-heading font-bold text-[#3D523D] mb-2">
              Drag & Drop files here
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              or click to browse from your computer
            </p>
            <p className="text-xs text-text-secondary/70">
              Supports PDF, DOCX, XLSX, PPTX, Images, ZIP, and CAD Files (Max 50MB)
            </p>
          </div>
          
          <input 
            type="file" 
            className="hidden" 
            ref={fileInputRef}
            onChange={handleFileSelect}
            multiple
          />
        </div>

        {/* Uploaded Files List */}
        <AnimatePresence>
          {files.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-8 space-y-3"
            >
              {files.map((file) => (
                <motion.div 
                  key={file.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white border border-[#87A987]/15 rounded-xl p-4 flex items-center gap-4 relative overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#D4E7D4] flex items-center justify-center text-[#87A987] z-10 shrink-0">
                    <FiFile size={20} />
                  </div>
                  
                  <div className="flex-1 min-w-0 z-10">
                    <p className="text-sm font-bold text-[#3D523D] truncate">{file.name}</p>
                    <p className="text-xs text-text-secondary">{file.size} MB</p>
                  </div>
                  
                  <div className="z-10 flex items-center gap-3">
                    {file.status === 'uploading' ? (
                      <span className="text-xs text-[#87A987] font-bold">{file.progress}%</span>
                    ) : (
                      <FiCheckCircle className="text-green-600" />
                    )}
                    
                    <button 
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(file.id);
                      }}
                      className="p-1 hover:bg-[#87A987]/20 rounded-full text-text-muted hover:text-red-500 transition-colors"
                    >
                      <FiX size={16} />
                    </button>
                  </div>

                  {/* Progress Bar Background */}
                  {file.status === 'uploading' && (
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${file.progress}%` }}
                      className="absolute inset-y-0 left-0 bg-[#87A987]/10 z-0"
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

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
            className="px-8 py-3 rounded-full font-bold transition-all bg-[#87A987] text-white hover:bg-[#6F8E6F] shadow-sm"
          >
            {files.length > 0 ? 'Continue' : 'Skip & Continue'}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default FileUploadCenter
