import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Zap, Navigation, ShieldCheck, Activity, Terminal, Cpu, Radio } from 'lucide-react';

export const Technology = ({ showHeader = true }: { showHeader?: boolean }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      icon: <Brain className="w-6 h-6" />,
      title: "Liquid Networks",
      desc: "Continuous time-series modeling for adaptable decision making.",
      code: "LNN_MODEL_V4"
    },
    {
      id: 1,
      icon: <Navigation className="w-6 h-6" />,
      title: "Visual Navigation",
      desc: "GPS-denied environment operation using pure visual odometry.",
      code: "VIS_NAV_02"
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Resilience",
      desc: "Robust performance in high-noise and unpredictable scenarios.",
      code: "RSL_PROTO_X"
    },
    {
      id: 3,
      icon: <Zap className="w-6 h-6" />,
      title: "Edge Efficiency",
      desc: "High-performance inference on low-power embedded hardware.",
      code: "EDGE_OPT_8"
    }
  ];

  return (
    <section id="technology" className="py-32 bg-[#F2F5FA] relative overflow-hidden">
      {/* Background Grid - Dark lines for light theme */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(2,16,32,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(2,16,32,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none" />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
            {/* Left Column: Content & Tabs */}
            <div className="flex-1 max-w-xl">
                {showHeader && (
                <>
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
                    <span className="text-indigo-600 font-mono text-xs uppercase tracking-widest">
                        How it works
                    </span>
                </div>
                
                <h2 
                    className="text-4xl md:text-5xl font-light text-[#021020] tracking-widest mb-8 uppercase leading-[1.1]"
                    style={{ fontFamily: '"Aquire", sans-serif' }}
                >
                    Adaptive <br /> Neural <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Core</span>
                </h2>
                <p className="text-[#021020]/70 text-lg mb-12 leading-relaxed">
                   Our proprietary Liquid Neural Networks evolve in real-time, rewriting their own synaptic weights to adapt to unforeseen variables in the field—without cloud connectivity.
                </p>
                </>
                )}

                <div className="space-y-4">
                    {features.map((f, idx) => (
                        <motion.div 
                            key={idx}
                            whileHover="hover"
                            onClick={() => setActiveFeature(idx)}
                            className={`group p-6 rounded-xl border transition-all duration-300 cursor-pointer flex items-center gap-6 relative overflow-hidden ${
                                activeFeature === idx 
                                ? 'bg-white border-indigo-500 shadow-xl shadow-indigo-500/10 scale-[1.02]' 
                                : 'bg-transparent border-transparent hover:bg-white hover:border-gray-200 hover:shadow-lg hover:scale-[1.01]'
                            }`}
                        >
                            {/* Card Shine Effect */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl z-0">
                                <motion.div
                                    className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent -skew-x-12"
                                    initial={{ x: '-150%' }}
                                    variants={{
                                        hover: { x: '350%', transition: { duration: 1.2, ease: "easeInOut" } }
                                    }}
                                />
                            </div>

                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors relative z-10 ${
                                activeFeature === idx ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                            }`}>
                                {f.icon}
                            </div>
                            <div className="relative z-10">
                                <h3 className={`text-lg font-bold mb-1 transition-colors ${activeFeature === idx ? 'text-[#021020]' : 'text-[#021020]/40 group-hover:text-[#021020]'}`}>
                                    {f.title}
                                </h3>
                                <div className={`text-xs font-mono transition-colors ${activeFeature === idx ? 'text-indigo-600' : 'text-[#021020]/20 group-hover:text-indigo-600/70'}`}>
                                    {f.code}
                                </div>
                            </div>
                            <div className={`ml-auto opacity-0 transform translate-x-4 transition-all duration-300 relative z-10 ${activeFeature === idx ? 'opacity-100 translate-x-0' : 'group-hover:opacity-100 group-hover:translate-x-2'}`}>
                                <div className={`w-1.5 h-1.5 rounded-full ${activeFeature === idx ? 'bg-indigo-600' : 'bg-gray-300'} shadow-[0_0_10px_currentColor]`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Right Column: Visualization */}
            <div className="flex-1 w-full lg:sticky lg:top-32">
                <div className="relative aspect-square md:aspect-video lg:aspect-square bg-[#020810] rounded-3xl border border-[#021020]/10 overflow-hidden shadow-2xl shadow-indigo-500/20">
                     {/* HUD Header */}
                     <div className="absolute top-0 left-0 right-0 h-14 bg-white/5 backdrop-blur-sm border-b border-white/10 flex items-center justify-between px-6 z-20">
                        <div className="flex items-center gap-3">
                            <Activity className="w-4 h-4 text-indigo-400" />
                            <span className="text-xs font-mono text-white/60 tracking-wider">LIVE_SIMULATION_FEED</span>
                        </div>
                        <div className="font-mono text-xs text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">
                             {features[activeFeature].code}
                        </div>
                     </div>
                     
                     {/* Viz Container */}
                     <div className="w-full h-full pt-14 relative z-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFeature}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                className="w-full h-full"
                            >
                                {activeFeature === 0 && <LiquidNetworkViz />}
                                {activeFeature === 1 && <VisualNavViz />}
                                {activeFeature === 2 && <ResilienceViz />}
                                {activeFeature === 3 && <EdgeViz />}
                            </motion.div>
                        </AnimatePresence>
                     </div>

                     {/* Scanlines/Overlay */}
                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
                     <div className="absolute inset-0 pointer-events-none border-[0.5px] border-white/10 rounded-3xl z-30" />
                     
                     {/* Corner Accents */}
                     <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-indigo-500/30 z-20" />
                     <div className="absolute top-20 right-6 w-8 h-8 border-t border-r border-indigo-500/30 z-20" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const TechCard = ({ icon, title, desc, code, isActive, onClick }: any) => (
  <div 
    onClick={onClick}
    className={`group border-r border-b border-gray-200 p-8 transition-all cursor-pointer relative overflow-hidden ${isActive ? 'bg-[#021020] text-white ring-2 ring-indigo-500 ring-inset' : 'hover:bg-[#F2F5FA]'}`}
  >
    <div className={`absolute top-4 right-4 text-[10px] font-mono transition-colors ${isActive ? 'text-white/30' : 'text-[#021020]/20 group-hover:text-indigo-400'}`}>
      {code}
    </div>
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 ${isActive ? 'bg-indigo-500 text-white' : 'bg-[#F2F5FA] text-[#021020] group-hover:scale-110'}`}>
      {icon}
    </div>
    <h3 className={`text-lg font-bold mb-3 ${isActive ? 'text-white' : 'text-[#021020]'}`}>{title}</h3>
    <p className={`text-sm leading-relaxed ${isActive ? 'text-white/70' : 'text-[#021020]/60'}`}>{desc}</p>
    
    {isActive && (
       <motion.div 
         layoutId="active-marker"
         className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500" 
       />
    )}
  </div>
);

// --- VISUALIZATIONS ---

const LiquidNetworkViz = () => {
   // Simulating fluid nodes
   return (
      <div className="w-full h-full relative flex items-center justify-center">
         <div className="absolute top-8 left-8 text-xs font-mono text-indigo-300">
            <div>STATE: FLUID</div>
            <div>ADAPTATION_RATE: 0.98</div>
         </div>
         <svg className="w-full h-full max-w-lg max-h-lg opacity-80" viewBox="0 0 400 400">
            {/* Connections */}
            <motion.path 
               d="M100 100 Q 200 50 300 100 T 300 300 T 100 300 Z" 
               stroke="#6366f1" strokeWidth="2" fill="none"
               animate={{ d: [
                  "M100 100 Q 200 50 300 100 T 300 300 T 100 300 Z",
                  "M120 120 Q 220 80 280 120 T 280 280 T 120 280 Z",
                  "M100 100 Q 200 50 300 100 T 300 300 T 100 300 Z"
               ] }}
               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
             <motion.path 
               d="M150 150 Q 200 100 250 150 T 250 250 T 150 250 Z" 
               stroke="#4f46e5" strokeWidth="1" fill="rgba(99, 102, 241, 0.1)"
               animate={{ d: [
                  "M150 150 Q 200 100 250 150 T 250 250 T 150 250 Z",
                  "M140 160 Q 180 140 260 160 T 260 240 T 140 240 Z",
                  "M150 150 Q 200 100 250 150 T 250 250 T 150 250 Z"
               ] }}
               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Nodes */}
            {[
               { x: 100, y: 100 }, { x: 300, y: 100 }, 
               { x: 300, y: 300 }, { x: 100, y: 300 },
               { x: 200, y: 200 }
            ].map((node, i) => (
               <motion.circle 
                  key={i} 
                  cx={node.x} cy={node.y} r="6" fill="#818cf8"
                  animate={{ 
                     cx: [node.x, node.x + (Math.random() * 40 - 20), node.x],
                     cy: [node.y, node.y + (Math.random() * 40 - 20), node.y],
                  }}
                  transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: "easeInOut" }}
               />
            ))}
         </svg>
      </div>
   )
}

const VisualNavViz = () => {
   return (
      <div className="w-full h-full relative perspective-500 overflow-hidden bg-[#020810]">
         <div className="absolute top-8 left-8 text-xs font-mono text-indigo-300 z-10">
            <div>MODE: ODOMETRY</div>
            <div>GPS_SIGNAL: LOST</div>
         </div>
         
         {/* Moving Floor Grid */}
         <motion.div 
            className="absolute inset-0 origin-bottom"
            style={{ transform: "rotateX(60deg)" }}
         >
            <div className="w-[200%] h-[200%] -ml-[50%] -mt-[50%] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] animate-[grid_5s_linear_infinite]" 
               style={{ animationName: 'moveGrid', animationDuration: '2s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}
            />
             <style>{`
               @keyframes moveGrid {
                 0% { transform: translateY(0); }
                 100% { transform: translateY(40px); }
               }
             `}</style>
         </motion.div>

         {/* Drone/Camera Viewfinder */}
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-48 border border-indigo-500/50 rounded-lg relative">
               <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-indigo-500" />
               <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-indigo-500" />
               <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-indigo-500" />
               <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-indigo-500" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            </div>
         </div>

         {/* Scanning Line */}
         <motion.div 
            className="absolute top-0 left-0 w-full h-1 bg-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.5)]"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
         />
      </div>
   )
}

const ResilienceViz = () => {
   return (
      <div className="w-full h-full flex flex-col items-center justify-center p-12">
         <div className="absolute top-8 left-8 text-xs font-mono text-indigo-300">
             <div>NOISE_FILTER: ACTIVE</div>
             <div>SIGNAL_INTEGRITY: 99.9%</div>
         </div>

         {/* Noisy Signal (Input) */}
         <div className="w-full h-24 mb-8 relative flex items-center">
            <div className="absolute left-0 -top-4 text-[10px] text-red-400 font-mono">INPUT_SIGNAL (NOISY)</div>
            <svg className="w-full h-full" preserveAspectRatio="none">
               <motion.path 
                 d="M0 50 L10 40 L20 60 L30 30 L40 70 L50 20 L60 80 L70 40 L80 60 L90 30 L100 50"
                 stroke="#ef4444" strokeWidth="1" fill="none"
                 vectorEffect="non-scaling-stroke"
                 animate={{ d: [
                    "M0 50 L10 45 L20 55 L30 40 L40 60 L50 45 L60 55 L70 45 L80 55 L90 45 L100 50",
                    "M0 50 L10 20 L20 80 L30 10 L40 90 L50 30 L60 70 L70 20 L80 80 L90 10 L100 50",
                    "M0 50 L10 45 L20 55 L30 40 L40 60 L50 45 L60 55 L70 45 L80 55 L90 45 L100 50"
                 ] }}
                 transition={{ duration: 0.2, repeat: Infinity }}
               />
            </svg>
         </div>

         {/* Clean Signal (Output) */}
         <div className="w-full h-24 relative flex items-center border-t border-white/10 pt-4">
            <div className="absolute left-0 top-0 text-[10px] text-emerald-400 font-mono">OUTPUT_SIGNAL (CLEAN)</div>
            <svg className="w-full h-full" preserveAspectRatio="none">
               <motion.path 
                 d="M0 50 Q 25 20 50 50 T 100 50"
                 stroke="#10b981" strokeWidth="2" fill="none"
                 vectorEffect="non-scaling-stroke"
                 animate={{ d: [
                    "M0 50 Q 25 20 50 50 T 100 50",
                    "M0 50 Q 25 80 50 50 T 100 50",
                    "M0 50 Q 25 20 50 50 T 100 50"
                 ] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               />
            </svg>
         </div>
      </div>
   )
}

const EdgeViz = () => {
   return (
      <div className="w-full h-full flex items-center justify-center relative">
         <div className="absolute top-8 left-8 text-xs font-mono text-indigo-300">
             <div>DEVICE: ARM_CORTEX_M4</div>
             <div>POWER: 0.45W (OPTIMAL)</div>
         </div>

         {/* Chip Visualization */}
         <div className="relative w-32 h-32 bg-[#1e293b] rounded-lg border border-indigo-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)]">
            <Cpu className="w-16 h-16 text-indigo-500" />
            
            {/* Data Packets In */}
            {[0, 1, 2, 3].map(i => (
               <motion.div 
                  key={`in-${i}`}
                  className="absolute w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]"
                  initial={{ left: -100, top: '50%', opacity: 0 }}
                  animate={{ left: '50%', opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.25, ease: "linear" }}
               />
            ))}

             {/* Processing Pulse */}
            <motion.div 
               className="absolute inset-0 border-2 border-indigo-500 rounded-lg"
               animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
               transition={{ duration: 0.5, repeat: Infinity }}
            />
         </div>

         {/* Efficiency Gauge */}
         <div className="absolute bottom-8 right-8 flex gap-4">
             <div className="text-center">
                <div className="h-24 w-4 bg-[#1e293b] rounded-full overflow-hidden relative border border-white/10">
                   <motion.div 
                      className="absolute bottom-0 left-0 w-full bg-emerald-500"
                      animate={{ height: ["40%", "95%", "85%"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                   />
                </div>
                <div className="text-[10px] text-white/50 mt-2 font-mono">Perf</div>
             </div>
             <div className="text-center">
                <div className="h-24 w-4 bg-[#1e293b] rounded-full overflow-hidden relative border border-white/10">
                   <motion.div 
                      className="absolute bottom-0 left-0 w-full bg-blue-500"
                      animate={{ height: ["80%", "20%", "30%"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                   />
                </div>
                <div className="text-[10px] text-white/50 mt-2 font-mono">Temp</div>
             </div>
         </div>
      </div>
   )
}
