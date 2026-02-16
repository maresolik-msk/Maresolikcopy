import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

const stats = [
  { value: 10000, suffix: '+', label: 'Acres Monitored', prefix: '' },
  { value: 500, suffix: '+', label: 'Retail Partners', prefix: '' },
  { value: 99.9, suffix: '%', label: 'System Uptime', prefix: '' },
  { value: 5000, suffix: '+', label: 'Autonomous Hours', prefix: '' },
  { value: 40, suffix: '%', label: 'Water Saved', prefix: '' },
  { value: 0.01, suffix: 's', label: 'Reaction Time', prefix: '' },
];

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  const isDecimal = end < 1;
  
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    let raf: number;
    
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(isDecimal ? parseFloat((eased * end).toFixed(2)) : Math.floor(eased * end));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start, isDecimal]);
  
  return count;
}

const StatItem = ({ value, suffix, label, prefix, delay }: { value: number; suffix: string; label: string; prefix: string; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useCountUp(value, 2000 + delay * 200, isInView);
  
  const displayValue = value < 1 ? count.toFixed(2) : count.toLocaleString();
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      className="flex flex-col items-center text-center px-6 py-4"
    >
      <div className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-white mb-2" style={{ fontFamily: '"Tomorrow", sans-serif' }}>
        {prefix}{displayValue}{suffix}
      </div>
      <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-mono">
        {label}
      </div>
    </motion.div>
  );
};

export const StatsBar = () => {
  return (
    <section className="relative bg-[#021020] border-y border-white/5 overflow-hidden">
      {/* Subtle background glow */}
      
      
      {/* Horizontal scan line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} delay={i} />
          ))}
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />
    </section>
  );
};
