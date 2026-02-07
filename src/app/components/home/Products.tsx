import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sprout, CloudRain, FlaskConical, Calendar, ScanBarcode, Package, Bell, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MilaVisuals, AraliVisuals } from '../products/ProductVisuals';
import { SciFiButton } from '../ui/SciFiButton';

export const Products = ({ showHeader = true }: { showHeader?: boolean }) => {
  return (
    <section id="products" className={`relative overflow-hidden ${showHeader ? 'py-32' : 'pb-32 pt-12'} bg-[#F2F5FA]`}>
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {showHeader && (
        <div className="max-w-2xl mx-auto text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#021020]/60 font-semibold tracking-wider text-sm uppercase mb-4 block"
          >
            Our Ecosystem
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-light text-[#021020] tracking-widest mb-6 uppercase"
            style={{ fontFamily: '"Aquire", sans-serif' }}
          >
            Intelligence for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Earth</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Commerce</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#021020]/70 leading-relaxed"
          >
            Interact with our flagship platforms below to see how they solve critical challenges in agriculture and retail.
          </motion.p>
        </div>
        )}

        <div className="space-y-32">
          {/* MILA Product Card */}
          <ProductCard 
            title="MILA"
            subtitle="Indian Crop Intelligence Engine"
            description="MILA helps farmers and agri-teams make smarter crop decisions with a single AI-powered platform."
            accentColor="emerald"
            features={[
              { icon: <Sprout className="w-5 h-5" />, title: "Farm Management", desc: "Lifecycle tracking from sowing to harvest." },
              { icon: <FlaskConical className="w-5 h-5" />, title: "Soil Intelligence", desc: "Digital Health Cards & testing guides." },
              { icon: <CloudRain className="w-5 h-5" />, title: "Weather Advisory", desc: "Hyper-local forecasts & pest alerts." },
              { icon: <Calendar className="w-5 h-5" />, title: "Crop Planning", desc: "Yield simulation & timeline optimization." },
            ]}
            align="left"
            visualType="mila"
          />

          {/* ARALI Product Card */}
          <ProductCard 
            title="ARALI"
            subtitle="Modern Retail Management App"
            description="POS, inventory, and analytics — in one fast, easy workflow."
            accentColor="violet"
            features={[
              { icon: <ScanBarcode className="w-5 h-5" />, title: "Smart POS", desc: "Instant billing with barcode scanning." },
              { icon: <Package className="w-5 h-5" />, title: "Inventory", desc: "Real-time stock & batch tracking." },
              { icon: <Bell className="w-5 h-5" />, title: "Smart Alerts", desc: "Expiry warnings & low stock notifications." },
              { icon: <BarChart3 className="w-5 h-5" />, title: "Analytics", desc: "Revenue metrics & sales trend charts." },
            ]}
            align="right"
            visualType="arali"
          />
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ title, subtitle, description, accentColor, features, align, visualType }: any) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const isRight = align === 'right';
  const isEmerald = accentColor === 'emerald';
  
  const colorText = isEmerald ? 'text-emerald-600' : 'text-indigo-600';
  const colorBg = isEmerald ? 'bg-emerald-50' : 'bg-indigo-50';
  const colorBorder = isEmerald ? 'border-emerald-100' : 'border-indigo-100';
  const colorRing = isEmerald ? 'ring-emerald-500' : 'ring-indigo-500';
  const buttonBg = isEmerald ? 'hover:bg-emerald-600' : 'hover:bg-indigo-600';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col lg:flex-row ${isRight ? 'lg:flex-row-reverse' : ''} gap-12 lg:gap-20 items-stretch`}
    >
      {/* Content Side */}
      <div className="flex-1 flex flex-col justify-center space-y-8">
        <div className="space-y-4">
          <div className="flex items-baseline gap-4">
            <h3 className="text-4xl text-[#021020] tracking-tight font-bold font-normal">{title}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${colorText} ${colorBg} ${colorBorder} border`}>
              {subtitle}
            </span>
          </div>
          <p className="text-xl text-[#021020]/70 leading-relaxed max-w-lg">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {features.map((feature: any, idx: number) => (
            <motion.div 
              key={idx}
              whileHover="hover"
              onMouseEnter={() => setActiveFeature(idx)}
              className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                activeFeature === idx 
                  ? `bg-white border-${isEmerald ? 'emerald' : 'indigo'}-200 shadow-md scale-[1.02]` 
                  : 'bg-white/40 border-transparent hover:bg-white/60'
              }`}
            >
              {/* Card Shine Effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl z-0">
                <motion.div
                   className={`absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent ${isEmerald ? 'via-emerald-400/10' : 'via-indigo-400/10'} to-transparent -skew-x-12`}
                   initial={{ x: '-150%' }}
                   variants={{
                     hover: { x: '350%', transition: { duration: 1.2, ease: "easeInOut" } }
                   }}
                />
              </div>

              {activeFeature === idx && (
                 <motion.div 
                    layoutId={`active-glow-${title}`}
                    className={`absolute left-0 top-0 bottom-0 w-1 ${isEmerald ? 'bg-emerald-500' : 'bg-indigo-500'}`} 
                 />
              )}
              <div className="flex items-start gap-4 pl-2">
                <div className={`mt-1 ${activeFeature === idx ? colorText : 'text-gray-400'}`}>
                  {feature.icon}
                </div>
                <div>
                  <h4 className={`font-semibold transition-colors ${activeFeature === idx ? 'text-[#021020]' : 'text-[#021020]/60'}`}>
                    {feature.title}
                  </h4>
                  <p className="text-sm text-[#021020]/50 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pt-4">
            <Link to={`/products/${title.toLowerCase()}`}>
              <SciFiButton 
                variant="primary" 
                size="md"
                className={buttonBg}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore {title}
              </SciFiButton>
            </Link>
        </div>
      </div>

      {/* Visual Side */}
      <div className="flex-1 w-full min-h-[500px] relative">
        <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/50 flex flex-col">
          {/* Header Bar */}
          <div className="h-14 bg-gray-50/50 border-b border-gray-100 flex items-center px-6 justify-between">
             <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/20" />
                <div className="w-3 h-3 rounded-full bg-amber-400/20" />
                <div className="w-3 h-3 rounded-full bg-green-400/20" />
             </div>
             <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                {features[activeFeature].title} Module
             </div>
          </div>
          
          {/* Dynamic Content Area */}
          <div className="flex-1 relative p-8 bg-[#F8FAFC]">
            <AnimatePresence mode="wait">
               <motion.div
                 key={activeFeature}
                 initial={{ opacity: 0, scale: 0.95, y: 10 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                 transition={{ duration: 0.4 }}
                 className="h-full w-full"
               >
                 {visualType === 'mila' ? (
                    <MilaVisuals featureIndex={activeFeature} />
                 ) : (
                    <AraliVisuals featureIndex={activeFeature} />
                 )}
               </motion.div>
            </AnimatePresence>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none mix-blend-overlay" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
