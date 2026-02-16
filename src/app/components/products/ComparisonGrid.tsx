import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Minus } from 'lucide-react';

const categories = [
  {
    name: 'Core Capabilities',
    features: [
      { label: 'AI-Powered Analytics', mila: true, arali: true },
      { label: 'Real-time Dashboard', mila: true, arali: true },
      { label: 'Offline Functionality', mila: true, arali: true },
      { label: 'Mobile App (iOS/Android)', mila: true, arali: true },
      { label: 'Multi-language Support', mila: true, arali: true },
    ],
  },
  {
    name: 'Domain-Specific',
    features: [
      { label: 'Soil Health Analysis', mila: true, arali: false },
      { label: 'Weather Advisory & Pest Alerts', mila: true, arali: false },
      { label: 'Crop Planning & Yield Simulation', mila: true, arali: false },
      { label: 'POS / Barcode Billing', mila: false, arali: true },
      { label: 'Inventory & Batch Tracking', mila: false, arali: true },
      { label: 'Expiry / Low Stock Alerts', mila: false, arali: true },
    ],
  },
  {
    name: 'Integration & Scale',
    features: [
      { label: 'API Access', mila: true, arali: true },
      { label: 'Satellite Imagery Integration', mila: true, arali: false },
      { label: 'IoT Sensor Support', mila: true, arali: false },
      { label: 'Payment Gateway Integration', mila: false, arali: true },
      { label: 'Multi-store Management', mila: false, arali: true },
      { label: 'Dedicated Onboarding Support', mila: true, arali: true },
    ],
  },
];

export const ComparisonGrid = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#F2F5FA] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#021020]/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#021020]/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-8 h-px bg-[#021020]/20" />
            <span className="text-xs font-mono text-[#021020]/40 uppercase tracking-[0.2em]">Feature Comparison</span>
            <div className="w-8 h-px bg-[#021020]/20" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl text-[#021020] tracking-widest uppercase mb-4"
            style={{ fontFamily: '"Aquire", sans-serif' }}
          >
            Side by Side
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#021020]/50 text-lg"
          >
            Both platforms share the same adaptive AI core but are purpose-built for their domain.
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-black/5 border border-[#021020]/5 overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] items-center px-6 md:px-8 py-5 bg-[#021020] text-white">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">Feature</div>
            <div className="text-center">
              <div className="text-sm font-medium">MILA</div>
              <div className="text-[10px] text-emerald-400 font-mono">Agri</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium">ARALI</div>
              <div className="text-[10px] text-indigo-400 font-mono">Retail</div>
            </div>
          </div>

          {/* Categories */}
          {categories.map((cat, ci) => (
            <div key={cat.name}>
              {/* Category header */}
              <div className="px-6 md:px-8 py-3 bg-[#F8FAFC] border-y border-[#021020]/5">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#021020]/40">{cat.name}</span>
              </div>

              {/* Feature rows */}
              {cat.features.map((f, fi) => (
                <div
                  key={f.label}
                  className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] items-center px-6 md:px-8 py-4 border-b border-[#021020]/[0.04] last:border-0 hover:bg-[#F8FAFC]/50 transition-colors"
                >
                  <span className="text-sm text-[#021020]/70">{f.label}</span>
                  <div className="flex justify-center">
                    {f.mila ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <Minus className="w-4 h-4 text-[#021020]/15" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {f.arali ? (
                      <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                    ) : (
                      <Minus className="w-4 h-4 text-[#021020]/15" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
