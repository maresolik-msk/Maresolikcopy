import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Wifi, Database, Shield, Cpu, Cloud, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const layers = [
  {
    icon: <Brain className="w-5 h-5" />,
    label: 'Adaptive Neural Core',
    desc: 'Liquid Neural Networks that self-modify synaptic weights in real time.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    label: 'Edge Inference Engine',
    desc: 'Runs on low-power ARM chips — no cloud dependency for critical decisions.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: <Database className="w-5 h-5" />,
    label: 'Federated Data Layer',
    desc: 'Privacy-preserving data aggregation across distributed farm/store nodes.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    label: 'Cloud Sync Mesh',
    desc: 'Intelligent sync when connectivity is available — offline-first architecture.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    label: 'Security & Compliance',
    desc: 'End-to-end encryption, SOC 2 certified, GDPR compliant data handling.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    icon: <Layers className="w-5 h-5" />,
    label: 'Open API Gateway',
    desc: 'RESTful APIs for third-party integration — ERP, payment, and government data.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
];

export const TechStack = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-32 bg-[#F2F5FA] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(2,16,32,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(2,16,32,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
          {/* Left — Text */}
          <div className="flex-1 max-w-lg lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
              <span className="text-indigo-600 font-mono text-xs uppercase tracking-[0.2em]">Shared Foundation</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl text-[#021020] tracking-widest uppercase mb-6 leading-[1.1]"
              style={{ fontFamily: '"Aquire", sans-serif' }}
            >
              Unified{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Tech Stack</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#021020]/50 text-lg leading-relaxed mb-8"
            >
              Both MILA and ARALI are built on the same adaptive neural architecture — ensuring consistent reliability, security, and edge performance across every deployment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/technology" className="inline-flex items-center gap-2 text-indigo-600 text-sm font-medium hover:gap-3 transition-all">
                <span className="uppercase tracking-wider">Explore Technology</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right — Stack cards */}
          <div className="flex-1 w-full">
            <div className="space-y-3">
              {layers.map((layer, i) => (
                <motion.div
                  key={layer.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`flex items-start gap-5 p-5 rounded-2xl border transition-all duration-300 cursor-default ${
                    hoveredIndex === i
                      ? 'bg-white border-[#021020]/10 shadow-lg shadow-black/5 -translate-y-0.5'
                      : 'bg-white/50 border-transparent hover:bg-white/80'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl ${layer.bg} ${layer.border} border flex items-center justify-center ${layer.color} shrink-0 transition-transform ${hoveredIndex === i ? 'scale-110' : ''}`}>
                    {layer.icon}
                  </div>
                  <div>
                    <div className="text-[#021020] mb-1">{layer.label}</div>
                    <p className="text-sm text-[#021020]/40 leading-relaxed">{layer.desc}</p>
                  </div>
                  <div className="ml-auto self-center">
                    <span className="text-[10px] font-mono text-[#021020]/20">L{i + 1}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Connection lines */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#021020]/20 uppercase tracking-wider">
                <div className="w-3 h-px bg-[#021020]/10" />
                <Wifi className="w-3 h-3" />
                All layers are fully interconnected
                <div className="w-3 h-px bg-[#021020]/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
