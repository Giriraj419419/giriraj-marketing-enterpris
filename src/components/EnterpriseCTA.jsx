import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Cloud, Users, Activity, Cpu } from 'lucide-react';

const trustBadges = [
  { icon: ShieldCheck, text: "Microsoft Solutions Partner" },
  { icon: Cloud, text: "AWS Expertise" },
  { icon: Users, text: "Certified Engineers" },
  { icon: Cpu, text: "Enterprise Support" },
  { icon: Activity, text: "99.9% SLA" }
];

const keywords = [
  'Cloud', 'Infrastructure', 'Enterprise', 'Solutions', 'Digital', 'Transformation', 
  'Business', 'Success', 'Future', 'Workflows', 'CAD', 'Licensing', 'Deployment',
  'AWS', 'Azure', 'Microsoft', 'Adobe', 'CorelDRAW', 'GstarCAD', 'ZWCAD', '365'
];

export default function EnterpriseCTA({
  title,
  description,
  primaryButtonText = "Start a Project",
  primaryButtonLink = "/contact-us",
  secondaryButtonText,
  secondaryButtonLink
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Intelligent Keyword Highlighter
  const highlightKeywords = (text) => {
    if (!text) return "";
    const parts = text.split(/(\s+)/);
    return parts.map((part, i) => {
      const cleanWord = part.replace(/[^\w]/g, '');
      if (keywords.some(k => k.toLowerCase() === cleanWord.toLowerCase()) && cleanWord.length > 2) {
        return (
          <span 
            key={i} 
            className="text-[#D4E7D4] font-extrabold"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section ref={ref} className="relative z-10 py-24 lg:py-32 bg-transparent overflow-hidden border-t border-b border-[#E6E2DA]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative group"
        >
          {/* Signature Premium CTA Box */}
          <div className="rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden bg-gradient-to-br from-[#87A987] to-[#A8C3A8]">
            <div className="absolute inset-0 bg-white/[0.03] pointer-events-none" />
            
            <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-16 relative z-10">
              
              {/* Left Content */}
              <div className="flex-1 text-center xl:text-left max-w-3xl">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]"
                >
                  {highlightKeywords(title)}
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-6 text-base sm:text-lg text-white/90 leading-relaxed font-light mx-auto xl:mx-0 max-w-2xl"
                >
                  {description}
                </motion.p>

                {/* Trust Badges */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-10 flex flex-wrap items-center justify-center xl:justify-start gap-4 sm:gap-6"
                >
                  {trustBadges.map((badge, idx) => {
                    const Icon = badge.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/80 transition-colors duration-300">
                        <Icon className="w-4 h-4 text-white" />
                        <span className="font-medium tracking-wide">{badge.text}</span>
                      </div>
                    )
                  })}
                </motion.div>
              </div>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="shrink-0 flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  to={primaryButtonLink} 
                  className="relative group/btn inline-flex items-center justify-center overflow-hidden rounded-[14px] bg-white px-8 py-4 sm:px-10 sm:py-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="relative z-10 text-[#3D523D] font-bold text-base sm:text-lg tracking-wide flex items-center gap-2">
                    {primaryButtonText}
                    <ArrowRight className="w-5 h-5 text-[#3D523D] group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Link>

                {secondaryButtonText && secondaryButtonLink && (
                  <Link 
                    to={secondaryButtonLink}
                    className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 rounded-[14px] text-white font-bold text-base sm:text-lg tracking-wide border border-white/20 hover:bg-white/10 transition-all duration-300"
                  >
                    {secondaryButtonText}
                  </Link>
                )}
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
