import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// =========================================================================
// ANIMATED COUNTER
// =========================================================================
export function AnimatedCounter({ from, to, duration = 2, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      const easePercentage = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setValue(Math.floor(from + (to - from) * easePercentage));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, delay * 1000);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, from, to, duration, delay]);

  return <span ref={ref}>{value}</span>;
}

// =========================================================================
// PREMIUM GLASS CARD (Interactive 3D Hover & Spotlight)
// =========================================================================
export function PremiumGlassCard({ children, className = "" }) {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
      className={`relative overflow-hidden rounded-3xl bg-white border border-border shadow-sm transition-shadow duration-500 hover:shadow-lg ${className}`}
    >
      {/* Dynamic Hover Gradient */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(135,169,135,0.08), transparent 40%)`
        }}
      />
      
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}

// =========================================================================
// OFFICIAL LOGO ICON CONTAINER
// =========================================================================
export function OfficialLogoIcon({ Logo, size = 72, className = "" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(135,169,135,0.15)', borderColor: 'rgba(135,169,135,0.3)' }}
      style={{
        width: size,
        height: size,
        borderRadius: 20,
        background: 'rgba(255,255,255,1)',
        border: '1px solid rgba(135,169,135,0.15)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        overflow: 'hidden',
        transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
      }}
      className={className}
    >
      <Logo style={{ width: '42px', height: '42px', objectFit: 'contain' }} />
    </motion.div>
  );
}

// =========================================================================
// FLOATING ORBS (Subtle Giriraj luxury background)
// =========================================================================
export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div 
        animate={{ 
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-3xl"
      />
      <motion.div 
        animate={{ 
          y: [0, 50, 0],
          x: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] rounded-full bg-accent-alt/10 blur-3xl"
      />
    </div>
  );
}
