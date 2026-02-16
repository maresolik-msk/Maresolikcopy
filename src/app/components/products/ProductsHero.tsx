import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sprout, ShoppingBag, ArrowDown } from 'lucide-react';

export const ProductsHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden"
      style={{ backgroundImage: "linear-gradient(135deg, rgb(2, 16, 32) 0%, rgb(8, 12, 30) 50%, rgb(15, 10, 35) 100%)" }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-[10%] w-[400px] h-[400px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Floating product orbs */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[25%] left-[15%] w-20 h-20 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm flex items-center justify-center pointer-events-none hidden lg:flex"
      >
        <Sprout className="w-8 h-8 text-emerald-400/40" />
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[30%] right-[15%] w-20 h-20 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-sm flex items-center justify-center pointer-events-none hidden lg:flex"
      >
        <ShoppingBag className="w-8 h-8 text-indigo-400/40" />
      </motion.div>

      {/* Decorative orbits */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/[0.02] rounded-full pointer-events-none hidden lg:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/[0.015] rounded-full pointer-events-none hidden lg:block"
      />

      <div className="container mx-auto px-6 relative z-10 pb-20 pt-40">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/30 mb-8"
        >
          <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-indigo-400/80">Products</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-between gap-12 items-end">
          {/* Left content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] mb-8"
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.2em]">Two Platforms, One Mission</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: '"Aquire", sans-serif' }}
            >
              Intelligence for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Earth</span>
              {' '}&{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Commerce</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/40 text-lg md:text-xl leading-relaxed max-w-xl"
            >
              Explore our two flagship platforms — purpose-built to solve critical challenges in agriculture and modern retail with adaptive AI.
            </motion.p>
          </div>

          {/* Right — Quick jump cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-row lg:flex-col gap-4"
          >
            <a href="#mila-section" className="group block">
              <div className="flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-all backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Sprout className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white text-sm">MILA</div>
                  <div className="text-white/30 text-xs">Agri Intelligence</div>
                </div>
                <ArrowDown className="w-4 h-4 text-white/20 ml-2 group-hover:translate-y-1 transition-transform" />
              </div>
            </a>
            <a href="#arali-section" className="group block">
              <div className="flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-indigo-500/10 hover:border-indigo-500/20 transition-all backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white text-sm">ARALI</div>
                  <div className="text-white/30 text-xs">Retail Suite</div>
                </div>
                <ArrowDown className="w-4 h-4 text-white/20 ml-2 group-hover:translate-y-1 transition-transform" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F2F5FA] to-transparent z-20 pointer-events-none" />
    </section>
  );
};
