import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Registry from '../LogoRegistry'

const companies = [
  { name: 'Microsoft', logoKey: 'microsoft', desc: 'Global Productivity & Cloud Partner' },
  { name: 'Microsoft Azure', logoKey: 'azure', desc: 'Enterprise Cloud Infrastructure Partner' },
  { name: 'Amazon Web Services', logoKey: 'aws', desc: 'Enterprise Cloud Infrastructure Partner' },
  { name: 'Adobe', logoKey: 'adobe', desc: 'Creative & Document Solutions Partner' },
  { name: 'Autodesk', logoKey: 'autodesk', desc: 'Engineering & Design Technology Partner' },
  { name: 'CorelDRAW', logoKey: 'corel', desc: 'Professional Design & Illustration Partner' },
  { name: 'GstarCAD', logoKey: 'gstarcad', desc: 'Professional CAD Software Partner' },
  { name: 'ZWCAD', logoKey: 'zwcad', desc: 'Reliable CAD Software Partner' },
  { name: 'Lenovo', logoKey: 'lenovo', desc: 'Enterprise Hardware & Infrastructure Partner' },
  { name: 'HPE', logoKey: 'hpe', desc: 'Enterprise Server & Storage Partner' },
  { name: 'Dell', logoKey: 'dell', desc: 'Enterprise IT Solutions Partner' },
]

// Duplicate for seamless infinite scroll (-50% translation)
const marqueeItems = [...companies, ...companies]

export default function TrustedCompanies() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <section className="relative overflow-hidden py-32 bg-[#F8FAF8]">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-10" />
      
      {/* Soft mesh gradient / radial blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(212,231,212,0.3)_0%,transparent_60%)] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(135,169,135,0.15)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(135,169,135,0.1)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="container mx-auto px-6 mb-16 relative z-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary"
          >
            Trusted Global Technology Partners
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto"
          >
            We collaborate with world-leading technology providers to deliver enterprise-grade solutions, cloud innovation, and digital transformation.
          </motion.p>
        </div>
      </div>
      
      {/* Marquee Section */}
      <div className="relative w-full z-20 overflow-hidden py-10">
        
        {/* Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#F8FAF8] to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#F8FAF8] to-transparent z-30 pointer-events-none" />

        {/* CSS Marquee container WITHOUT pause-on-hover */}
        <div className="flex w-fit">
          <div className="flex shrink-0 animate-marquee items-center">
            {marqueeItems.map((company, i) => {
              const LogoComp = Registry[company.logoKey]
              const isHovered = hoveredIndex === i;

              return (
                <div 
                  key={i}
                  className="px-4"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative cursor-pointer transition-all duration-400 ease-out flex items-center gap-5 px-6 md:px-8 w-[280px] md:w-[320px] lg:w-[340px] h-[90px] rounded-[20px] bg-[rgba(255,255,255,0.65)] backdrop-blur-[16px] border border-[rgba(135,169,135,0.12)] hover:border-[rgba(135,169,135,0.3)] hover:-translate-y-[6px] hover:shadow-[0_20px_50px_rgba(61,82,61,0.08)] group/card">
                    
                    {/* Hover Soft Green Glow */}
                    <div className="absolute inset-0 rounded-[20px] bg-[radial-gradient(ellipse_at_center,rgba(135,169,135,0.15)_0%,transparent_70%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-400 pointer-events-none" />

                    {LogoComp && (
                      <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shrink-0 group-hover/card:scale-105 transition-all duration-400">
                        <LogoComp className="w-full h-full object-contain" />
                      </div>
                    )}
                    
                    <span className="relative z-10 font-heading font-extrabold text-lg md:text-xl text-[#3D523D] tracking-tight whitespace-nowrap truncate">
                      {company.name}
                    </span>
                    
                    {/* Tooltip */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute -bottom-[80px] left-1/2 -translate-x-1/2 w-max max-w-[280px] px-4 py-3 rounded-xl bg-white/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-white/50 z-50 text-center pointer-events-none"
                        >
                          <div className="text-sm font-bold text-text-primary mb-1">{company.name}</div>
                          <div className="text-xs text-text-secondary leading-tight">{company.desc}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
