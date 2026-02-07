import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Shield, Heart, Zap, ArrowRight, MousePointer2 } from 'lucide-react';

export const About = ({ showHeader = true }: { showHeader?: boolean }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const principles = [
    {
      title: 'Precision',
      icon: <Target className="w-6 h-6" />,
      desc: 'Zero-tolerance for error in mission-critical predictions and analysis.',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      gradient: 'from-emerald-500/10'
    },
    {
      title: 'Reliability',
      icon: <Shield className="w-6 h-6" />,
      desc: 'Systems engineered to maintain integrity in the harshest environments.',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      gradient: 'from-indigo-500/10'
    },
    {
      title: 'Human-Centric',
      icon: <Heart className="w-6 h-6" />,
      desc: 'Technology designed to augment human capability, not replace it.',
      color: 'text-rose-600',
      bg: 'bg-rose-50',
      gradient: 'from-rose-500/10'
    },
    {
      title: 'Resilience',
      icon: <Zap className="w-6 h-6" />,
      desc: 'Adaptive architectures that self-heal and evolve continuously.',
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      gradient: 'from-amber-500/10'
    }
  ];

  return (
    <section id="about" className="py-32 bg-[#F2F5FA] relative overflow-hidden">
       {/* Decorative Background Grid */}
       <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#021020]/20 to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#021020]/20 to-transparent" />
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#021020]/20 to-transparent" />
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#021020]/20 to-transparent" />
       </div>

      <div className="container mx-auto px-6 relative z-10">
        {showHeader && (
        <div className="max-w-4xl mx-auto text-center mb-24">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#021020]/10 bg-white mb-8 shadow-sm"
           >
              <MousePointer2 className="w-3 h-3 text-[#021020]/40" />
              <span className="text-xs font-mono text-[#021020]/60 uppercase tracking-widest">Our Philosophy</span>
           </motion.div>
           
           <h2 
            className="text-3xl md:text-5xl font-light text-[#021020] leading-tight mb-8 uppercase tracking-wide"
            style={{ fontFamily: '"Aquire", sans-serif' }}
           >
            Building intelligence that starts on <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Earth</span> and scales toward the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Stars</span>.
          </h2>
          <p className="text-xl text-[#021020]/60 max-w-2xl mx-auto leading-relaxed">
            MARESOLIK combines deep tech R&D with practical application to solve the hardest problems in autonomy and resource management.
          </p>
        </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden border border-[#021020]/5 h-[320px] flex flex-col"
            >
               {/* Hover Gradient Background */}
               <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b ${p.gradient} to-transparent`} />
               
               {/* Scanning Line Effect */}
               <motion.div 
                 className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#021020]/10 to-transparent opacity-0 group-hover:opacity-100"
                 animate={hoveredIndex === i ? { top: ['0%', '100%'] } : {}}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
               />

               <div className="p-8 relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl ${p.bg} ${p.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                     {p.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#021020] mb-4">{p.title}</h3>
                  
                  <div className="relative flex-1">
                     {/* Default State Indicator */}
                     <motion.div 
                        animate={{ opacity: hoveredIndex === i ? 0 : 1, y: hoveredIndex === i ? 10 : 0 }}
                        className="absolute inset-0"
                     >
                        <div className="w-12 h-1 bg-[#021020]/10 rounded-full mb-3" />
                        <div className="w-8 h-1 bg-[#021020]/10 rounded-full" />
                     </motion.div>
                     
                     {/* Hover State Description */}
                     <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: hoveredIndex === i ? 1 : 0, y: hoveredIndex === i ? 0 : 20 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#021020]/70 leading-relaxed text-sm font-medium"
                     >
                        {p.desc}
                     </motion.p>
                  </div>

                  {/* Corner Decoration */}
                  <div className="flex justify-between items-end mt-auto pt-6 border-t border-[#021020]/5 opacity-50 group-hover:opacity-100 transition-opacity">
                     <span className="text-[10px] font-mono text-[#021020]/40">PRINCIPLE_0{i+1}</span>
                     <motion.div
                        animate={{ x: hoveredIndex === i ? 0 : -4, opacity: hoveredIndex === i ? 1 : 0 }}
                     >
                        <ArrowRight className={`w-4 h-4 ${p.color}`} />
                     </motion.div>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
