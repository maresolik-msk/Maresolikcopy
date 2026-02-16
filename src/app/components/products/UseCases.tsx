import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Users, MapPin, TrendingUp, Clock, ArrowRight } from 'lucide-react';

const useCases = [
  {
    id: 'smallholder',
    persona: 'Smallholder Farmer',
    subtitle: 'Managed by MILA',
    location: 'Madhya Pradesh, India',
    challenge: 'Limited access to soil testing facilities and unreliable weather forecasts leading to suboptimal crop choices and excessive water usage.',
    solution: 'MILA\'s hyper-local weather advisory and digital soil health cards enable precision decisions without needing expensive lab tests.',
    results: [
      { metric: '+28%', label: 'Yield per acre' },
      { metric: '-35%', label: 'Water consumption' },
      { metric: '7 days', label: 'Advance pest alerts' },
    ],
    image: 'https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB1c2luZyUyMHRhYmxldCUyMHRlY2hub2xvZ3klMjBmaWVsZCUyMGNyb3BzfGVufDF8fHx8MTc3MDkxODk5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'emerald',
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    id: 'retailer',
    persona: 'Supermarket Chain Manager',
    subtitle: 'Powered by ARALI',
    location: 'Bangalore, India',
    challenge: 'High perishable goods wastage due to poor inventory tracking and zero visibility into expiry timelines across 12 stores.',
    solution: 'ARALI\'s smart alerts and batch-level tracking reduced spoilage dramatically while automating reorder workflows.',
    results: [
      { metric: '-42%', label: 'Spoilage cost' },
      { metric: '< 30s', label: 'Checkout time' },
      { metric: '12', label: 'Stores connected' },
    ],
    image: 'https://images.unsplash.com/photo-1580931335002-1ddb3973544e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcm1hcmtldCUyMGNhc2hpZXIlMjBzY2FubmluZyUyMGJhcmNvZGUlMjByZXRhaWx8ZW58MXx8fHwxNzcwOTE4OTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'indigo',
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 'cooperative',
    persona: 'Agricultural Cooperative',
    subtitle: 'MILA Fleet Deployment',
    location: 'Punjab, India',
    challenge: 'Managing crop planning across 2,000+ member farms with varying soil types, water access, and market conditions.',
    solution: 'MILA\'s cooperative dashboard provides aggregate intelligence while letting each farm maintain its own tailored recommendations.',
    results: [
      { metric: '2,400', label: 'Farms connected' },
      { metric: '+18%', label: 'Revenue growth' },
      { metric: '85%', label: 'Adoption rate' },
    ],
    image: 'https://images.unsplash.com/photo-1749836832771-e8a43ecb9a56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZhcm1sYW5kJTIwYWVyaWFsJTIwdmlldyUyMHN1bnJpc2V8ZW58MXx8fHwxNzcwOTE4OTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'emerald',
    icon: <TrendingUp className="w-5 h-5" />,
  },
];

export const UseCases = () => {
  const [active, setActive] = useState(0);

  const current = useCases[active];
  const isEmerald = current.color === 'emerald';

  return (
    <section className="relative py-24 md:py-32 bg-[#021020] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] pointer-events-none" />
      <div className="absolute top-1/3 left-[20%] w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-[0.2em]">Real-World Deployments</span>
            </div>
            <h2
              className="text-4xl md:text-5xl text-white tracking-tight leading-[1.1]"
              style={{ fontFamily: '"Aquire", sans-serif' }}
            >
              Use Cases
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 flex-wrap">
            {useCases.map((uc, i) => (
              <button
                key={uc.id}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                  active === i
                    ? 'bg-white/10 text-white border-white/20'
                    : 'text-white/30 border-white/5 hover:text-white/60 hover:border-white/10'
                }`}
              >
                {uc.persona}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"
          >
            {/* Image side */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto border border-white/10">
              <ImageWithFallback
                src={current.image}
                alt={current.persona}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021020] via-[#021020]/40 to-transparent" />

              {/* Floating info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm ${
                    isEmerald ? 'bg-emerald-500/20 text-emerald-300' : 'bg-indigo-500/20 text-indigo-300'
                  }`}>
                    {current.icon}
                  </div>
                  <div>
                    <div className="text-white text-sm">{current.persona}</div>
                    <div className="text-white/40 text-xs font-mono">{current.location}</div>
                  </div>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-white/10" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-white/10" />
            </div>

            {/* Content side */}
            <div className="flex flex-col justify-center py-4">
              <span className={`text-xs font-mono uppercase tracking-[0.2em] mb-4 ${
                isEmerald ? 'text-emerald-400' : 'text-indigo-400'
              }`}>
                {current.subtitle}
              </span>

              <h3 className="text-2xl md:text-3xl text-white tracking-tight mb-6 leading-tight">
                {current.persona}
              </h3>

              {/* Challenge */}
              <div className="mb-6">
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-mono mb-2">Challenge</div>
                <p className="text-white/50 leading-relaxed">{current.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-mono mb-2">Solution</div>
                <p className="text-white/70 leading-relaxed">{current.solution}</p>
              </div>

              {/* Results */}
              <div className={`grid grid-cols-3 gap-4 p-5 rounded-2xl border ${
                isEmerald ? 'bg-emerald-500/5 border-emerald-500/15' : 'bg-indigo-500/5 border-indigo-500/15'
              }`}>
                {current.results.map((r) => (
                  <div key={r.label} className="text-center">
                    <div className={`text-2xl md:text-3xl tracking-tight ${isEmerald ? 'text-emerald-400' : 'text-indigo-400'}`} style={{ fontFamily: '"Tomorrow", sans-serif' }}>
                      {r.metric}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-white/30 font-mono mt-1">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
