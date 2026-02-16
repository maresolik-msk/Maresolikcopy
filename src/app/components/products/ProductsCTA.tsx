import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sprout, ShoppingBag, Zap } from 'lucide-react';
import { SciFiButton } from '../ui/SciFiButton';

export const ProductsCTA = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#021020] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-10"
          >
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono text-white/60 uppercase tracking-[0.2em]">Deploy in 48 Hours</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl text-white tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: '"Aquire", sans-serif' }}
          >
            Ready to Deploy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">Intelligence</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Start with a free pilot — no commitment needed. Our team handles onboarding, data migration, and training.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link to="/contact">
              <SciFiButton
                variant="secondary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Free Pilot
              </SciFiButton>
            </Link>
            <Link to="/contact">
              <SciFiButton
                variant="outline"
                size="lg"
                className="text-white border-white/20 hover:bg-white/10"
              >
                Talk to Sales
              </SciFiButton>
            </Link>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {[
              {
                icon: <Sprout className="w-5 h-5 text-emerald-400" />,
                label: 'Deploy MILA',
                desc: 'For agriculture teams',
                link: '/products/mila',
                color: 'hover:border-emerald-500/30 hover:bg-emerald-500/5',
              },
              {
                icon: <ShoppingBag className="w-5 h-5 text-indigo-400" />,
                label: 'Deploy ARALI',
                desc: 'For retail operations',
                link: '/products/arali',
                color: 'hover:border-indigo-500/30 hover:bg-indigo-500/5',
              },
              {
                icon: <Zap className="w-5 h-5 text-amber-400" />,
                label: 'Custom Solution',
                desc: 'Enterprise & cooperatives',
                link: '/contact',
                color: 'hover:border-amber-500/30 hover:bg-amber-500/5',
              },
            ].map((item) => (
              <Link key={item.label} to={item.link}>
                <div className={`flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02] transition-all ${item.color} group`}>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-white text-sm">{item.label}</div>
                    <div className="text-white/30 text-xs">{item.desc}</div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
