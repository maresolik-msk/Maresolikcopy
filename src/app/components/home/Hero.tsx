import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
import { Blackhole } from './Blackhole';
import { SciFiButton } from '../ui/SciFiButton';

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

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-20 container mx-auto px-6 text-center"
      >
        <div className="flex flex-col md:flex-row justify-between items-stretch w-full h-[60vh]">
            {/* Left Column (Bottom Aligned) */}
            <div className="flex flex-col justify-end items-start text-left pb-0">
                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-3xl lg:text-5xl font-light text-white tracking-tighter mb-8 leading-[0.85]"
                    style={{ fontFamily: '"Aquire", sans-serif' }}
                >
                    DEFINEING <br/> INTELLIGENCE
                </motion.h1>

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
        <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
      </motion.div>
      {/* System Status Indicator - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 right-8 flex items-center gap-3 z-30 hidden md:flex"
      >
        <div className="flex gap-1.5">
            <span className="w-1 h-4 bg-orange-500 rounded-full animate-pulse" />
            <span className="w-1 h-3 bg-orange-500/50 rounded-full" />
            <span className="w-1 h-2 bg-orange-500/20 rounded-full" />
        </div>
        <span className="text-xs font-mono text-orange-500 tracking-[0.2em] uppercase">System Status: Online</span>
      </motion.div>
    </section>
  );
};
