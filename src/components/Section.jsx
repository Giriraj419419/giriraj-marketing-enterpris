import { motion, useReducedMotion } from 'framer-motion';

// ============================================================
// REVEAL — Directional Scroll-triggered animation
// ============================================================
export function Reveal({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}) {
  const shouldReduceMotion = useReducedMotion();

  const getVariants = () => {
    if (shouldReduceMotion || direction === 'fade') return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    switch (direction) {
      case 'up': return { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
      case 'down': return { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } };
      case 'left': return { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } };
      case 'right': return { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } };
      case 'scale': return { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } };
      default: return { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================================
// STAGGER CONTAINER & ITEM — For lists and grids
// ============================================================
export function StaggerContainer({ children, className = '', delayChildren = 0, staggerChildren = 0.1 }) {
  const shouldReduceMotion = useReducedMotion();
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerChildren,
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
      }
    }
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '', direction = 'up' }) {
  const shouldReduceMotion = useReducedMotion();
  const getVariants = () => {
    if (shouldReduceMotion || direction === 'fade') return { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } } };
    switch (direction) {
      case 'up': return { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } };
      case 'left': return { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } } };
      case 'right': return { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } } };
      case 'scale': return { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } } };
      default: return { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } };
    }
  };
  
  return (
    <motion.div variants={getVariants()} className={className}>
      {children}
    </motion.div>
  );
}

// ============================================================
// TEXT REVEAL — Word-by-word fade up for headings
// ============================================================
export function TextReveal({ text, className = '', delay = 0 }) {
  const words = text.split(' ');
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.04, delayChildren: delay }
    }
  };

    const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  };

  if (shouldReduceMotion) {
    return (
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay, duration: 0.5 }} className={className}>
        {text}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`inline-flex flex-wrap justify-center ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px' }}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={child} className="mr-2 inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

// ============================================================
// EYEBROW — Pill badge label above section headings
// ============================================================
export function Eyebrow({ children, accent = 'blue' }) {
  const badgeClass = `badge-${accent}`;
  
  const dotColor = {
    blue: 'bg-[#87A987]',
    orange: 'bg-[#87A987]',
    teal: 'bg-[#87A987]',
    purple: 'bg-[#87A987]',
    green: 'bg-[#87A987]',
  }[accent] || 'bg-[#87A987]';

  const dotShadow = {
    blue: 'rgba(135,169,135,0.5)',
    orange: 'rgba(135,169,135,0.5)',
    teal: 'rgba(135,169,135,0.5)',
    purple: 'rgba(135,169,135,0.5)',
    green: 'rgba(135,169,135,0.5)',
  }[accent] || 'rgba(135,169,135,0.5)';

  return (
    <span className={badgeClass}>
      <span
        className={`w-1.5 h-1.5 rounded-full ${dotColor} inline-block`}
        style={{ boxShadow: `0 0 5px ${dotShadow}` }}
      />
      {children}
    </span>
  );
}

// ============================================================
// SECTION TITLE — Standard section heading block
// ============================================================
export function SectionTitle({
  eyebrow,
  title,
  sub,
  center = false,
  delay = 0,
  accent = 'blue',
}) {
  return (
    <div className={`mb-12 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <Reveal direction={center ? 'up' : 'left'} delay={delay}>
          <div className="mb-4">
            <Eyebrow accent={accent}>{eyebrow}</Eyebrow>
          </div>
        </Reveal>
      )}
      <Reveal direction={center ? 'up' : 'left'} delay={delay + 0.05}>
        <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold leading-[1.18] tracking-tight text-text-primary">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal direction={center ? 'up' : 'left'} delay={delay + 0.12}>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
