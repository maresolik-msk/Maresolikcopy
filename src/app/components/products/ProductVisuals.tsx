import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sprout, CloudRain, FlaskConical, Calendar, ScanBarcode, Package, Bell, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';

// --- MILA VISUALS ---
export const MilaVisuals = ({ featureIndex }: { featureIndex: number }) => {
   switch (featureIndex) {
      case 0: // Farm Management
         return (
            <div className="h-full flex flex-col gap-4">
               <div className="bg-white p-4 rounded-xl shadow-sm border border-emerald-100/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <Sprout size={20} />
                     </div>
                     <div>
                        <div className="text-sm font-bold text-[#021020]">Wheat Field A</div>
                        <div className="text-xs text-gray-400">Sowing Stage • Day 12</div>
                     </div>
                  </div>
                  <div className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full">Healthy</div>
               </div>
               <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
                  <div className="text-xs font-semibold text-gray-400 uppercase mb-4">Growth Timeline</div>
                  <div className="flex justify-between items-end h-32 px-4 relative">
                     {/* Connecting Line */}
                     <div className="absolute bottom-4 left-4 right-4 h-0.5 bg-gray-100" />
                     {[1, 2, 3, 4].map((step, i) => (
                        <div key={i} className="relative flex flex-col items-center gap-2 z-10">
                           <motion.div 
                              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 }}
                              className={`w-3 h-3 rounded-full border-2 bg-white ${i < 2 ? 'border-emerald-500' : 'border-gray-200'}`} 
                           />
                           <div className="h-16 w-1 bg-emerald-100 rounded-t-full origin-bottom transform scale-y-0 animate-[grow_1s_ease-out_forwards]" style={{ animationDelay: `${i*0.2}s` }} />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         );
      case 1: // Soil
         return (
            <div className="h-full bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center text-center">
               <div className="relative w-32 h-32 mb-6">
                  <svg className="w-full h-full -rotate-90">
                     <circle cx="64" cy="64" r="60" stroke="#f1f5f9" strokeWidth="12" fill="none" />
                     <motion.circle 
                        cx="64" cy="64" r="60" stroke="#10b981" strokeWidth="12" fill="none" 
                        strokeDasharray="377" 
                        initial={{ strokeDashoffset: 377 }}
                        animate={{ strokeDashoffset: 377 - (377 * 0.78) }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                     />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <span className="text-3xl font-bold text-[#021020]">7.8</span>
                     <span className="text-xs text-gray-400">pH Level</span>
                  </div>
               </div>
               <div className="grid grid-cols-3 gap-4 w-full">
                  {['N', 'P', 'K'].map((el, i) => (
                     <div key={el} className="p-3 bg-emerald-50/50 rounded-lg">
                        <div className="text-xs font-bold text-emerald-800 mb-1">{el}</div>
                        <div className="h-1.5 w-full bg-emerald-200 rounded-full overflow-hidden">
                           <motion.div 
                              initial={{ width: 0 }} 
                              animate={{ width: `${60 + (i * 15)}%` }} 
                              transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                              className="h-full bg-emerald-600" 
                           />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         );
      case 2: // Weather
         return (
             <div className="h-full flex flex-col gap-4">
                 <div className="flex-1 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
                     <motion.div 
                        animate={{ x: [0, 20, 0], opacity: [0.5, 1, 0.5] }} 
                        transition={{ duration: 5, repeat: Infinity }}
                        className="absolute top-0 right-0 p-8"
                     >
                        <CloudRain size={64} className="text-blue-200/30" />
                     </motion.div>
                     <div className="relative z-10">
                        <div className="text-blue-100 text-sm font-medium mb-1">Today's Forecast</div>
                        <div className="text-5xl font-bold mb-4">24°C</div>
                        <div className="flex gap-4 text-sm bg-white/10 p-3 rounded-lg backdrop-blur-sm inline-flex">
                           <span>💧 68% Humidity</span>
                           <span>💨 12 km/h</span>
                        </div>
                     </div>
                 </div>
                 <div className="h-20 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-between px-6">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                           <Bell size={16} />
                        </div>
                        <div className="text-sm font-medium text-gray-600">Pest Alert: Aphids</div>
                     </div>
                     <button className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">View Action</button>
                 </div>
             </div>
         );
      default: // Planning
         return (
            <div className="h-full bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
               <div className="text-sm font-bold text-[#021020] mb-6">Yield Projection</div>
               <div className="flex-1 flex items-end gap-2">
                  {[30, 45, 35, 60, 50, 75, 65].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.1 }}
                        className="flex-1 bg-emerald-100 rounded-t-md relative group hover:bg-emerald-200 transition-colors"
                      >
                         {i === 5 && (
                           <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1 }}
                              className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#021020] text-white text-[10px] py-1 px-2 rounded"
                           >
                              +12%
                           </motion.div>
                         )}
                      </motion.div>
                  ))}
               </div>
               <div className="mt-4 flex justify-between text-xs text-gray-400 font-mono">
                  <span>Q1</span>
                  <span>Q2</span>
                  <span>Q3</span>
                  <span>Q4</span>
               </div>
            </div>
         );
   }
}

// --- ARALI VISUALS ---
export const AraliVisuals = ({ featureIndex }: { featureIndex: number }) => {
   switch (featureIndex) {
      case 0: // POS
         return (
            <div className="h-full flex flex-col gap-4">
               <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm p-2 flex flex-col relative overflow-hidden">
                  <motion.div 
                     initial={{ top: "0%" }}
                     animate={{ top: "100%" }}
                     transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                     className="absolute left-0 right-0 h-0.5 bg-red-500 z-10 opacity-50"
                  />
                  {[1, 2, 3].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 p-3 border-b border-dashed border-gray-100 last:border-0">
                        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex-shrink-0" />
                        <div className="flex-1">
                           <div className="h-2 w-20 bg-gray-200 rounded mb-2" />
                           <div className="h-2 w-10 bg-gray-100 rounded" />
                        </div>
                        <div className="text-sm font-bold text-indigo-600">$24.00</div>
                     </div>
                  ))}
                  <div className="mt-auto p-3 bg-gray-50 rounded-lg flex justify-between items-center">
                     <span className="text-xs font-bold text-gray-500">TOTAL</span>
                     <span className="text-lg font-bold text-[#021020]">$142.50</span>
                  </div>
               </div>
            </div>
         );
      case 1: // Inventory
         return (
            <div className="h-full bg-white rounded-xl border border-gray-100 shadow-sm p-6 grid grid-cols-2 gap-4">
               {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-3 relative group">
                     <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500" />
                     <Package className="text-gray-300 mb-2" size={20} />
                     <div className="h-2 w-16 bg-gray-200 rounded mb-1" />
                     <div className="h-2 w-8 bg-gray-200 rounded" />
                     <motion.div 
                        className="absolute inset-0 border-2 border-indigo-500 rounded-lg opacity-0 group-hover:opacity-100"
                        layoutId="selection"
                     />
                  </div>
               ))}
            </div>
         );
      case 2: // Alerts
         return (
            <div className="h-full flex items-center justify-center">
               <div className="w-full max-w-[240px] bg-white rounded-xl shadow-lg border border-red-100 p-4">
                  <div className="flex items-start gap-3">
                     <div className="p-2 bg-red-50 text-red-500 rounded-lg">
                        <Bell size={20} />
                     </div>
                     <div>
                        <h4 className="text-sm font-bold text-[#021020]">Low Stock Alert</h4>
                        <p className="text-xs text-gray-500 mt-1">Premium Rice (5kg) is below threshold (12 units).</p>
                     </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                     <button className="flex-1 py-1.5 bg-red-500 text-white text-xs font-bold rounded-lg">Reorder</button>
                     <button className="flex-1 py-1.5 bg-gray-50 text-gray-600 text-xs font-bold rounded-lg">Dismiss</button>
                  </div>
               </div>
            </div>
         );
      default: // Analytics
         return (
            <div className="h-full bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
               <div className="flex justify-between items-center mb-6">
                  <h4 className="text-sm font-bold text-[#021020]">Sales Performance</h4>
                  <select className="text-xs bg-gray-50 border-none rounded p-1 text-gray-500"><option>This Week</option></select>
               </div>
               <div className="flex-1 flex items-end justify-between gap-2">
                  {[20, 40, 30, 70, 50, 90, 60].map((h, i) => (
                     <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <motion.div 
                           initial={{ height: 0 }}
                           animate={{ height: `${h}%` }}
                           transition={{ duration: 0.8, delay: i * 0.1 }}
                           className={`w-full rounded-t-sm ${i === 5 ? 'bg-indigo-500' : 'bg-indigo-100'}`}
                        />
                        <span className="text-[10px] text-gray-300 font-mono">{['M','T','W','T','F','S','S'][i]}</span>
                     </div>
                  ))}
               </div>
            </div>
         );
   }
}