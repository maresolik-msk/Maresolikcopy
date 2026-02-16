import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { MoveRight, Activity } from 'lucide-react';
import { Blackhole } from './Blackhole';
import { SciFiButton } from '../ui/SciFiButton';

const DataTicker = () => {
  const [values, setValues] = useState({ neural: 98.7, latency: 0.012, nodes: 4892 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setValues({
        neural: +(97 + Math.random() * 2.5).toFixed(1),
        latency: +(0.008 + Math.random() * 0.009).toFixed(3),
        nodes: Math.floor(4800 + Math.random() * 200),
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="absolute top-28 left-8 z-30 hidden lg:flex flex-col gap-3"
    >
      {[
        { label: 'NEURAL_EFF', value: `${values.neural}%`, color: 'text-emerald-400' },
        { label: 'LATENCY', value: `${values.latency}s`, color: 'text-cyan-400' },
        { label: 'ACTIVE_NODES', value: values.nodes.toLocaleString(), color: 'text-indigo-400' },
      ].map((item) => (
        <div key={item.label} className="flex items-center gap-3 text-white/30">
          <span className="text-[9px] font-mono tracking-wider w-24">{item.label}</span>
          <div className="w-px h-3 bg-white/10" />
          <span className={`text-[11px] font-mono ${item.color} tabular-nums`}>{item.value}</span>
        </div>
      ))}
    </motion.div>
  );
};

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen min-h-[800px] flex flex-col justify-end items-center overflow-hidden pb-32 md:pb-40"
      style={{ backgroundImage: "linear-gradient(90deg, rgb(2, 16, 32) 0%, rgb(5, 16, 27) 36.856%, rgb(9, 17, 25) 72.453%, rgb(5, 16, 29) 100%)" }}
    >
      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 z-0 opacity-100">
        <Blackhole />
      </div>
      
      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#021020_100%)] pointer-events-none z-10 opacity-60" />

      {/* Live Data Ticker — Left side HUD */}
      <DataTicker />

      {/* Floating geometric accents */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/3 right-[15%] w-32 h-32 border border-white/[0.03] rounded-full z-10 pointer-events-none hidden lg:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[40%] right-[12%] w-20 h-20 border border-indigo-500/[0.06] rounded-full z-10 pointer-events-none hidden lg:block"
      />

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-20 container mx-auto px-6 text-center"
      >
        <div className="flex flex-col md:flex-row justify-between items-stretch w-full h-[60vh]">
            {/* Left Column (Bottom Aligned) */}
            <div className="flex flex-col justify-end items-start text-left pb-0">
                {/* Eyebrow badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-center gap-2 mb-6"
                >
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm">
                    <Activity className="w-3 h-3 text-indigo-400" />
                    <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.2em]">Adaptive Neural Infrastructure</span>
                  </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-3xl lg:text-5xl font-light text-white tracking-tighter mb-4 leading-[0.85]"
                    style={{ fontFamily: '"Aquire", sans-serif' }}
                >
                    DEFINING <br/> INTELLIGENCE
                </motion.h1>

                {/* Sub-tagline */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-white/25 text-sm font-mono tracking-wider mb-8 max-w-sm"
                >
                  From Earth's soil to orbital stations
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6"
                >
                    <Link to="/products">
                        <SciFiButton 
                          variant="secondary" 
                          size="lg"
                          icon={<MoveRight className="w-5 h-5" />}
                        >
                          Explore
                        </SciFiButton>
                    </Link>
                    
                    <Link to="/about">
                        <SciFiButton 
                          variant="outline" 
                          size="lg"
                          className="text-white border-white/20 hover:bg-white/10"
                        >
                          Mission Brief
                        </SciFiButton>
                    </Link>
                </motion.div>
            </div>

            {/* Right Column (Top Aligned) */}
            <div className="flex flex-col justify-start items-end pt-4 md:pt-8 p-[0px]">
                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-white/60 md:text-xl max-w-md leading-relaxed mb-10 font-light text-right text-[15px] text-[rgba(255,255,255,0.28)]"
                >
                    MARESOLIK engineers adaptive neural infrastructure—from autonomous agriculture to orbital logistics—that evolves with its environment.
                </motion.p>
            </div>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/20 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono">Scroll to Explore</span>
        <motion.div 
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-white/0 via-white/20 to-white/0 origin-top" 
        />
      </motion.div>

      {/* System Status Indicator - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 right-8 flex items-center gap-3 z-30 hidden md:flex"
      >
        <div className="flex gap-1.5">
            <span className="w-1 h-4 bg-emerald-500 rounded-full animate-pulse" />
            <span className="w-1 h-3 bg-emerald-500/50 rounded-full" />
            <span className="w-1 h-2 bg-emerald-500/20 rounded-full" />
        </div>
        <span className="text-xs font-mono text-emerald-400 tracking-[0.2em] uppercase">System Active</span>
      </motion.div>

      {/* Corner brackets — cinematic HUD framing */}
      <div className="absolute top-24 left-6 w-12 h-12 border-t border-l border-white/[0.06] z-20 pointer-events-none hidden md:block" />
      <div className="absolute top-24 right-6 w-12 h-12 border-t border-r border-white/[0.06] z-20 pointer-events-none hidden md:block" />
      <div className="absolute bottom-24 left-6 w-12 h-12 border-b border-l border-white/[0.06] z-20 pointer-events-none hidden md:block" />
      <div className="absolute bottom-24 right-6 w-12 h-12 border-b border-r border-white/[0.06] z-20 pointer-events-none hidden md:block" />
    </section>
  );
};
