import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa'

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hello! I am the Giriraj Marketing Assistant. How can I help you with our enterprise services like AWS, Azure, Microsoft 365, Adobe, Autodesk, or IT consulting?' }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const newMessages = [...messages, { id: Date.now(), type: 'user', text: input }]
    setMessages(newMessages)
    setInput('')

    // Simulate bot response focused on services
    setTimeout(() => {
      const lowerInput = input.toLowerCase()
      let reply = "I can assist you with enterprise technology services. Please ask about AWS, Azure, Microsoft 365, Adobe, Autodesk, or IT consulting."

      if (lowerInput.includes('aws') || lowerInput.includes('cloud')) {
        reply = "We offer end-to-end AWS architecture, migration, and managed services for enterprise scalability and security."
      } else if (lowerInput.includes('infrastructure') || lowerInput.includes('architecture') || lowerInput.includes('deployment')) {
        reply = "We provide enterprise infrastructure consulting, deployment planning, and managed optimization for secure and scalable operations."
      } else if (lowerInput.includes('microsoft') || lowerInput.includes('azure') || lowerInput.includes('365')) {
        reply = "We provide comprehensive Microsoft solutions, including Microsoft 365 enterprise licensing and Azure cloud infrastructure deployments."
      } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('quote')) {
        reply = "For specific pricing, please book a free consultation from the top right button, and our architects will provide a tailored quote."
      } else if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('hello') || lowerInput.includes('hi')) {
        reply = "Hello! You can reach us at +91 96384 19419 or via info@girirajmktg.com for any enterprise technology inquiries."
      }

      setMessages(prev => [...prev, { id: Date.now(), type: 'bot', text: reply }])
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[350px] h-[500px] max-h-[70vh] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-2"
          >
            {/* Header */}
            <div className="bg-accent p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <FaRobot size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm">Giriraj Assistant</h3>
                  <p className="text-xs text-white/80 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="text-white/80 hover:text-white transition-colors">
                <FaTimes size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-bg-primary">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl p-3 text-sm shadow-sm ${
                    msg.type === 'user' 
                      ? 'bg-[#87A987] text-white rounded-tr-none' 
                      : 'bg-bg-secondary text-text-primary rounded-tl-none border border-border'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 bg-bg-secondary border-t border-border flex gap-2">
              <label htmlFor="chat-input" className="sr-only">Message to Giriraj Assistant</label>
              <input
                id="chat-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-white border border-border rounded-full px-4 py-2 text-sm text-text-primary focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:bg-[#769976] transition-colors shrink-0"
              >
                <FaPaperPlane size={14} className="-ml-1" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FABs */}
      <div className="flex flex-col gap-4">
        <motion.a
          href="https://wa.me/919638419419"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Giriraj Marketing on WhatsApp"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
        >
          <FaWhatsapp size={28} />
        </motion.a>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close Giriraj Assistant chat' : 'Open Giriraj Assistant chat'}
          aria-expanded={isOpen}
          aria-controls="chat-panel"
          className="relative w-14 h-14 bg-[#87A987] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 border-2 border-bg-primary rounded-full" aria-hidden="true"></span>
          <FaRobot size={24} />
        </motion.button>
      </div>

    </div>
  )
}

export default FloatingChat
