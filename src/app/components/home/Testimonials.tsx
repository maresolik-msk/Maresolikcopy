import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const testimonials = [
  {
    quote: "MILA transformed our entire farming operation. We went from guessing about soil conditions to having real-time intelligence that adapts to every micro-climate shift across our fields.",
    name: "Priya Sharma",
    title: "Chief Agronomist, TerraGrow Solutions",
    avatar: "https://images.unsplash.com/photo-1712174766230-cb7304feaafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRlY2glMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA5MTcxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stat: "+42%",
    statLabel: "Yield Increase",
    color: "emerald",
  },
  {
    quote: "ARALI cut our inventory waste by a third in the first quarter alone. The predictive stock alerts are like having a supply chain genius working around the clock.",
    name: "Marcus Chen",
    title: "VP Operations, NovaMart Group",
    avatar: "https://images.unsplash.com/photo-1660074127797-1c429fbb8cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBlbmdpbmVlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDgyODQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stat: "-33%",
    statLabel: "Waste Reduced",
    color: "indigo",
  },
  {
    quote: "The autonomous navigation stack operates flawlessly in conditions where GPS is completely unreliable. Zero manual interventions in over 2,000 flight hours — that's unprecedented.",
    name: "Dr. Elena Vasquez",
    title: "Head of Robotics, AeroSphere Labs",
    avatar: "https://images.unsplash.com/photo-1758685848602-09e52ef9c7d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNjaWVudGlzdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDkxNzEyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stat: "0",
    statLabel: "Manual Interventions",
    color: "amber",
  },
];

export const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };
  const prev = () => { setDirection(-1); setActive((active - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setDirection(1); setActive((active + 1) % testimonials.length); };

  const t = testimonials[active];
  const colorMap: Record<string, { text: string; bg: string; border: string; ring: string }> = {
    emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', ring: 'ring-emerald-500/30' },
    indigo: { text: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', ring: 'ring-indigo-500/30' },
    amber: { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', ring: 'ring-amber-500/30' },
  };
  const accent = colorMap[t.color];

  return (
    <section className="relative py-24 md:py-32 bg-[#F2F5FA] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-emerald-100/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-mono text-[#021020]/40 uppercase tracking-wider ml-2">Trusted Partners</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl text-[#021020] tracking-widest uppercase"
              style={{ fontFamily: '"Aquire", sans-serif' }}
            >
              What They Say
            </motion.h2>
          </div>

          {/* Nav buttons */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-[#021020]/10 flex items-center justify-center text-[#021020]/40 hover:text-[#021020] hover:border-[#021020]/30 hover:bg-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-[#021020]/10 flex items-center justify-center text-[#021020]/40 hover:text-[#021020] hover:border-[#021020]/30 hover:bg-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="relative min-h-[400px] md:min-h-[340px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction * -80, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 border border-[#021020]/5 relative overflow-hidden"
            >
              {/* Quote background */}
              <Quote className="absolute top-6 right-6 w-20 h-20 text-[#021020]/[0.03]" />

              <div className="flex flex-col lg:flex-row gap-10 items-start">
                {/* Quote content */}
                <div className="flex-1">
                  <p className="text-xl md:text-2xl text-[#021020]/80 leading-relaxed mb-10 max-w-2xl">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#021020]/10 shrink-0">
                      <ImageWithFallback
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-[#021020] font-medium">{t.name}</div>
                      <div className="text-sm text-[#021020]/50">{t.title}</div>
                    </div>
                  </div>
                </div>

                {/* Stat highlight */}
                <div className={`shrink-0 p-8 rounded-2xl ${accent.bg} ${accent.border} border flex flex-col items-center justify-center min-w-[160px]`}>
                  <div className={`text-5xl md:text-6xl tracking-tight mb-2 ${accent.text}`} style={{ fontFamily: '"Tomorrow", sans-serif' }}>
                    {t.stat}
                  </div>
                  <div className="text-xs uppercase tracking-[0.15em] text-[#021020]/40 font-mono text-center">
                    {t.statLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === active ? 'w-8 bg-indigo-500' : 'w-2 bg-[#021020]/15 hover:bg-[#021020]/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
