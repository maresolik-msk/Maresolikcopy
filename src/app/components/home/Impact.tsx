import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, ShoppingBag, Radio, ArrowUpRight, TrendingUp, Users, Shield } from 'lucide-react';

export const Impact = ({ showHeader = true, theme = 'dark' }: { showHeader?: boolean, theme?: 'light' | 'dark' }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isLight = theme === 'light';

  const impacts = [
    {
      id: 'agri',
      title: 'Agriculture',
      icon: <Leaf className="w-6 h-6" />,
      color: 'emerald',
      stat: '+35%',
      label: 'Yield Improvement',
      desc: 'Empowering farmers with predictive soil analytics and weather intelligence.',
      metrics: [
        { label: 'Acres Monitored', value: '10k+' },
        { label: 'Water Saved', value: '40%' }
      ]
    },
    {
      id: 'retail',
      title: 'Retail',
      icon: <ShoppingBag className="w-6 h-6" />,
      color: 'indigo',
      stat: '-20%',
      label: 'Waste Reduction',
      desc: 'Streamlining inventory for modern supermarkets to prevent spoilage.',
      metrics: [
        { label: 'Stores Active', value: '500+' },
        { label: 'Stock Accuracy', value: '99%' }
      ]
    },
    {
      id: 'auto',
      title: 'Autonomy',
      icon: <Radio className="w-6 h-6" />,
      color: 'amber',
      stat: '0.01s',
      label: 'Reaction Time',
      desc: 'Mission-critical navigation for drones in GPS-denied environments.',
      metrics: [
        { label: 'Flight Hours', value: '5k+' },
        { label: 'Interventions', value: '0' }
      ]
    }
  ];

  return (
    <section id="impact" className={`py-32 ${isLight ? 'bg-[#F2F5FA] text-[#021020]' : 'bg-[#021020] text-white'} relative overflow-hidden transition-colors duration-500`}>
      {/* Interactive Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            background: `radial-gradient(circle at ${activeIndex === 0 ? '20%' : activeIndex === 1 ? '50%' : '80%'} 50%, rgba(${activeIndex === 0 ? '16, 185, 129' : activeIndex === 1 ? '99, 102, 241' : '245, 158, 11'}, ${isLight ? '0.08' : '0.15'}), transparent 50%)`
          }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        />
        <div className={`absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] ${isLight ? 'opacity-10 mix-blend-multiply' : 'opacity-20 brightness-100 contrast-150 mix-blend-overlay'}`} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {showHeader && (
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div className="max-w-xl">
              <h2 
                className="text-4xl md:text-5xl font-light tracking-widest mb-6 uppercase"
                style={{ fontFamily: '"Aquire", sans-serif' }}
              >
                Real World Impact
              </h2>
              <p className={`text-lg ${isLight ? 'text-[#021020]/60' : 'text-white/60'} leading-relaxed`}>
                Deploying advanced intelligence where it matters most. Explore our impact across three critical domains.
              </p>
           </div>
           
           <div className="hidden md:flex gap-2">
              <div className={`flex items-center gap-2 text-xs font-mono ${isLight ? 'text-[#021020]/40 bg-[#021020]/5 border-[#021020]/10' : 'text-white/40 bg-white/5 border-white/10'} px-3 py-1 rounded-full border`}>
                 <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 LIVE_METRICS
              </div>
           </div>
        </div>
        )}

        {/* Interactive Accordion */}
        <div className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[500px]">
          {impacts.map((item, index) => {
             const isActive = activeIndex === index;
             const isEmerald = item.color === 'emerald';
             const isIndigo = item.color === 'indigo';
             // Color classes mapping
             const bgActive = isEmerald ? (isLight ? 'bg-emerald-50' : 'bg-emerald-900/20') : isIndigo ? (isLight ? 'bg-indigo-50' : 'bg-indigo-900/20') : (isLight ? 'bg-amber-50' : 'bg-amber-900/20');
             const borderActive = isEmerald ? 'border-emerald-500/50' : isIndigo ? 'border-indigo-500/50' : 'border-amber-500/50';
             const textActive = isEmerald ? (isLight ? 'text-emerald-700' : 'text-emerald-400') : isIndigo ? (isLight ? 'text-indigo-700' : 'text-indigo-400') : (isLight ? 'text-amber-700' : 'text-amber-400');
             const ringColor = isEmerald ? 'ring-emerald-500/30' : isIndigo ? 'ring-indigo-500/30' : 'ring-amber-500/30';
             
             // Light/Dark specific card backgrounds
             const cardBase = isLight ? 'bg-white border-black/5 hover:border-black/10 shadow-sm hover:shadow-md' : 'bg-white/5 border-white/10 hover:bg-white/10';
             const cardActive = isLight ? `flex-[3] bg-white ${borderActive} shadow-lg` : `flex-[3] ${bgActive} ${borderActive} shadow-[0_0_30px_rgba(0,0,0,0.3)]`;

             return (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative rounded-3xl overflow-hidden border cursor-pointer transition-all duration-500 ${isActive ? cardActive : `flex-1 ${cardBase}`}`}
                  initial={false}
                  whileHover="hover"
                >
                   {/* Card Shine Effect */}
                   <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl z-0">
                      <motion.div
                         className={`absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent ${isLight ? 'via-white/40' : 'via-white/10'} to-transparent -skew-x-12`}
                         initial={{ x: '-150%' }}
                         variants={{
                           hover: { x: '350%', transition: { duration: 1.2, ease: "easeInOut" } }
                         }}
                      />
                   </div>

                   {/* Background Gradient for Active State */}
                   {isActive && (
                      <div className={`absolute inset-0 bg-gradient-to-b ${isEmerald ? 'from-emerald-500/10' : isIndigo ? 'from-indigo-500/10' : 'from-amber-500/10'} to-transparent pointer-events-none`} />
                   )}

                   <div className="absolute inset-0 p-8 flex flex-col">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-8">
                         <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isActive ? `${textActive} ${isLight ? 'bg-white shadow-sm ring-1' : 'bg-white/10 ring-1'} ${ringColor}` : `${isLight ? 'text-[#021020]/40 bg-[#021020]/5' : 'text-white/40 bg-white/5'}`}`}>
                            {item.icon}
                         </div>
                         <motion.div 
                           animate={{ rotate: isActive ? 45 : 0 }}
                           className={`p-2 rounded-full ${isActive ? (isLight ? 'bg-[#021020]/5 text-[#021020]' : 'bg-white/10 text-white') : (isLight ? 'text-[#021020]/20' : 'text-white/20')}`}
                         >
                            <ArrowUpRight className="w-5 h-5" />
                         </motion.div>
                      </div>

                      {/* Title (Rotates when inactive on desktop) */}
                      <div className="lg:hidden">
                         <h3 className={`text-2xl font-bold mb-2 ${isActive ? (isLight ? 'text-[#021020]' : 'text-white') : (isLight ? 'text-[#021020]/60' : 'text-white/60')}`}>{item.title}</h3>
                      </div>
                      <div className="hidden lg:block">
                         {isActive ? (
                            <motion.h3 layoutId={`title-${item.id}`} className={`text-3xl font-bold mb-2 ${isLight ? 'text-[#021020]' : 'text-white'}`}>{item.title}</motion.h3>
                         ) : (
                            <div className="absolute bottom-8 left-8 origin-bottom-left -rotate-90 translate-x-8">
                               <span className={`text-2xl font-bold whitespace-nowrap ${isLight ? 'text-[#021020]/40' : 'text-white/40'}`}>{item.title}</span>
                            </div>
                         )}
                      </div>

                      {/* Expanded Content */}
                      <AnimatePresence>
                         {isActive && (
                            <motion.div 
                               initial={{ opacity: 0, y: 20 }}
                               animate={{ opacity: 1, y: 0 }}
                               exit={{ opacity: 0, transition: { duration: 0.2 } }}
                               transition={{ delay: 0.2 }}
                               className="flex-1 flex flex-col justify-end"
                            >
                               {/* Main Stat */}
                               <div className="mb-8">
                                  <div className={`text-6xl md:text-7xl font-bold tracking-tight mb-2 ${textActive}`}>
                                     {item.stat}
                                  </div>
                                  <div className={`text-lg font-medium flex items-center gap-2 ${isLight ? 'text-[#021020]/60' : 'text-white/60'}`}>
                                     <TrendingUp className="w-4 h-4" />
                                     {item.label}
                                  </div>
                               </div>

                               <p className={`text-lg leading-relaxed mb-8 max-w-lg ${isLight ? 'text-[#021020]/70' : 'text-white/80'}`}>
                                  {item.desc}
                               </p>

                               {/* Sub Metrics Grid */}
                               <div className={`grid grid-cols-2 gap-4 border-t pt-6 ${isLight ? 'border-[#021020]/10' : 'border-white/10'}`}>
                                  {item.metrics.map((m, i) => (
                                     <div key={i}>
                                        <div className={`text-2xl font-bold mb-1 ${isLight ? 'text-[#021020]' : 'text-white'}`}>{m.value}</div>
                                        <div className={`text-xs uppercase tracking-wider ${isLight ? 'text-[#021020]/40' : 'text-white/40'}`}>{m.label}</div>
                                     </div>
                                  ))}
                               </div>
                            </motion.div>
                         )}
                      </AnimatePresence>
                   </div>
                </motion.div>
             )
          })}
        </div>
      </div>
    </section>
  );
};
