import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sprout, CloudRain, FlaskConical, Calendar, ScanBarcode, Package, Bell, BarChart3, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { MilaVisuals, AraliVisuals } from '../components/products/ProductVisuals';
import { SciFiButton } from '../components/ui/SciFiButton';

// Product Data Configuration
const PRODUCTS_DATA: Record<string, any> = {
  mila: {
    title: "MILA Intelligence",
    subtitle: "Indian Crop Intelligence Engine",
    category: "Agri-Tech",
    description: "MILA helps farmers and agri-teams make smarter crop decisions with a single AI-powered platform. Integrating satellite imagery, soil sensors, and hyper-local weather data to maximize yield and sustainability.",
    accentColor: "emerald",
    features: [
      { 
        icon: <Sprout className="w-6 h-6" />, 
        title: "Farm Management", 
        desc: "Lifecycle tracking from sowing to harvest.",
        details: "Complete digital twin of your farm. Track every input, activity, and growth stage with precision. Our AI suggests optimal intervention times based on crop phenology models tailored for Indian soil conditions.",
        benefits: ["Reduce input costs by 15%", "Increase per-acre yield", "Automated record keeping"],
        specs: ["Satellite Integration: Sentinel-2", "Update Frequency: Daily", "Offline Support: Yes"]
      },
      { 
        icon: <FlaskConical className="w-6 h-6" />, 
        title: "Soil Intelligence", 
        desc: "Digital Health Cards & testing guides.",
        details: "Instant analysis of NPK levels, pH, and organic carbon. Get prescription-grade fertilizer recommendations to restore soil health while reducing chemical costs by up to 30%.",
        benefits: ["Restore soil microbiome", "Precise fertilizer dosage", "Long-term land value"],
        specs: ["Sensors: NPK, pH, EC", "Calibration: Auto", "Report Format: PDF/CSV"]
      },
      { 
        icon: <CloudRain className="w-6 h-6" />, 
        title: "Weather Advisory", 
        desc: "Hyper-local forecasts & pest alerts.",
        details: "Not just forecasts, but impact analysis. Know exactly when to spray or irrigate. Our pest prediction models alert you 7 days in advance of potential outbreaks based on micro-climatic conditions.",
        benefits: ["Prevent crop loss", "Optimize irrigation schedule", "Reduce pesticide usage"],
        specs: ["Resolution: 500m", "Forecast Range: 14 Days", "Alert Channels: SMS/App"]
      },
      { 
        icon: <Calendar className="w-6 h-6" />, 
        title: "Crop Planning", 
        desc: "Yield simulation & timeline optimization.",
        details: "Simulate different crop scenarios before you sow. Optimize for market demand, water availability, and soil suitability to ensure maximum profitability every season.",
        benefits: ["Maximize market value", "Water budgeting", "Risk mitigation"],
        specs: ["Models: 50+ Crops", "Market Data: Real-time APMC", "Planning Horizon: 12 Months"]
      },
    ],
    externalLink: "https://arch-quote-48556605.figma.site"
  },
  arali: {
    title: "ARALI Retail",
    subtitle: "Modern Retail Management App",
    category: "Retail-Tech",
    description: "POS, inventory, and analytics — in one fast, easy workflow. Empowering small to mid-sized retailers with enterprise-grade tools to compete in the modern commerce landscape.",
    accentColor: "indigo",
    features: [
      { 
        icon: <ScanBarcode className="w-6 h-6" />, 
        title: "Smart POS", 
        desc: "Instant billing with barcode scanning.",
        details: "Lightning-fast checkout experience. Works offline and syncs when online. Supports split payments, digital receipts, and customer loyalty program integration right at the counter.",
        benefits: ["Checkout in < 30s", "Reduce billing errors", "Customer retention tools"],
        specs: ["Scanner: Camera/Hardware", "Printer Support: Bluetooth/USB", "Offline Mode: Full"]
      },
      { 
        icon: <Package className="w-6 h-6" />, 
        title: "Inventory", 
        desc: "Real-time stock & batch tracking.",
        details: "Never run out of best-sellers. Real-time batch tracking for expiration management. Automated stock reconciliation and supplier purchase order generation based on sales velocity.",
        benefits: ["Minimize stockouts", "Reduce spoilage/expiry", "Automated reordering"],
        specs: ["Tracking: Batch/Expiry", "Stock Audits: Mobile App", "Low Stock Alerts: Customizable"]
      },
      { 
        icon: <Bell className="w-6 h-6" />, 
        title: "Smart Alerts", 
        desc: "Expiry warnings & low stock notifications.",
        details: "Proactive notifications that save money. Get alerted before items expire or stock runs low. Smart suggestions for discount clearing of near-expiry goods to minimize wastage.",
        benefits: ["Zero wastage goal", "Proactive management", "Profit protection"],
        specs: ["Notification Types: Push/Email", "Thresholds: User-defined", "Actionable Insights: Yes"]
      },
      { 
        icon: <BarChart3 className="w-6 h-6" />, 
        title: "Analytics", 
        desc: "Revenue metrics & sales trend charts.",
        details: "Know your business inside out. Visual dashboards for daily sales, profit margins, and top-performing products. AI-driven insights to identify growth opportunities and cut underperforming stock.",
        benefits: ["Data-driven decisions", "Identify top movers", "Track profit margins"],
        specs: ["Reports: Daily/Monthly", "Export: Excel/PDF", "Metrics: 20+ KPIs"]
      },
    ],
    externalLink: "https://www.aralimsk.com/"
  }
};

export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [activeFeature, setActiveFeature] = useState(0);

  if (!id || !PRODUCTS_DATA[id]) {
    return <Navigate to="/products" replace />;
  }

  const product = PRODUCTS_DATA[id];
  const isEmerald = product.accentColor === 'emerald';
  const colorText = isEmerald ? 'text-emerald-600' : 'text-indigo-600';
  const colorBg = isEmerald ? 'bg-emerald-50' : 'bg-indigo-50';
  const colorBorder = isEmerald ? 'border-emerald-200' : 'border-indigo-200';
  const buttonBg = isEmerald ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-indigo-600 hover:bg-indigo-700';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F2F5FA]"
    >
      <PageHero 
        title={product.title}
        subtitle={product.subtitle}
        category={product.category}
        description={product.description}
        theme="light"
      />

      <section className="py-20 container mx-auto px-6">
        {/* Top Navigation - Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-8 mb-16 border-b border-gray-200">
          {product.features.map((feature: any, idx: number) => (
             <button
                key={idx}
                onClick={() => setActiveFeature(idx)}
                className={`pb-4 px-2 text-sm font-bold uppercase tracking-widest transition-all relative group outline-none ${
                   activeFeature === idx 
                   ? `text-[#021020] opacity-100` 
                   : 'text-[#021020] opacity-40 hover:opacity-70'
                }`}
             >
                <span className="flex items-center gap-3">
                  <span className={`transition-transform duration-300 ${activeFeature === idx ? 'scale-110' : 'scale-100'}`}>
                    {feature.icon}
                  </span>
                  {feature.title}
                </span>
                {activeFeature === idx && (
                   <motion.div 
                     layoutId="active-tab-indicator"
                     className={`absolute bottom-0 left-0 right-0 h-1 rounded-t-full ${isEmerald ? 'bg-emerald-600' : 'bg-indigo-600'}`}
                   />
                )}
             </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
           {/* Left Column: Detailed Info */}
           <div className="space-y-10">
              <div>
                 <motion.div 
                   key={`title-${activeFeature}`}
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.3 }}
                 >
                    <div className={`inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full text-xs font-bold uppercase tracking-wider ${colorBg} ${colorText} border ${colorBorder}`}>
                       <span className={`w-2 h-2 rounded-full animate-pulse ${isEmerald ? 'bg-emerald-500' : 'bg-indigo-500'}`} />
                       System Module {activeFeature + 1}.0
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-light text-[#021020] mb-6 leading-tight" style={{ fontFamily: '"Aquire", sans-serif' }}>
                       {product.features[activeFeature].title}
                    </h3>
                    <p className="text-lg text-[#021020]/70 leading-relaxed">
                       {product.features[activeFeature].details}
                    </p>
                 </motion.div>
              </div>
              
              {/* Specs & Benefits separated */}
              <div className="space-y-8">
                 {/* Benefits Cards */}
                 <div>
                     <h4 className="text-xs font-bold text-[#021020]/40 uppercase tracking-widest mb-4 flex items-center gap-2">
                       <CheckCircle2 size={14} /> Operational Benefits
                     </h4>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {product.features[activeFeature].benefits?.map((benefit: string, i: number) => (
                           <motion.div 
                             key={i}
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             transition={{ delay: i * 0.1 }}
                             className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3 hover:shadow-md transition-shadow"
                           >
                              <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${isEmerald ? 'bg-emerald-500' : 'bg-indigo-500'}`} />
                              <span className="text-sm font-medium text-[#021020]/80">{benefit}</span>
                           </motion.div>
                        ))}
                     </div>
                 </div>

                 {/* Technical Specs Table */}
                 <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100">
                     <h4 className="text-xs font-bold text-[#021020]/40 uppercase tracking-widest mb-4 flex items-center gap-2">
                       <ScanBarcode size={14} /> Technical Specifications
                     </h4>
                     <div className="space-y-3">
                        {product.features[activeFeature].specs?.map((spec: string, i: number) => {
                           const [label, value] = spec.split(':');
                           return (
                             <div key={i} className="flex justify-between items-center text-sm border-b border-gray-200/50 pb-2 last:border-0 last:pb-0">
                                <span className="text-[#021020]/50 font-medium">{label}</span>
                                <span className="font-mono text-[#021020] font-semibold">{value}</span>
                             </div>
                           );
                        })}
                     </div>
                 </div>
              </div>
           </div>

           {/* Right Column: Visualization Monitor */}
           <div className="relative lg:sticky lg:top-32">
              <div className="bg-white rounded-[2rem] p-3 shadow-2xl shadow-gray-200/50 border border-white">
                 <div className="bg-[#F8FAFC] rounded-[1.5rem] border border-gray-100 overflow-hidden aspect-square relative">
                     {/* Visual Header HUD */}
                     <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10 pointer-events-none">
                        <div className="text-[10px] font-mono text-[#021020]/30 uppercase tracking-widest">
                           Sim_Mode: Active // {product.features[activeFeature].title}
                        </div>
                        <div className="flex gap-1.5">
                           {[1,2,3].map(d => <div key={d} className={`w-1.5 h-1.5 rounded-full ${isEmerald ? 'bg-emerald-500/30' : 'bg-indigo-500/30'}`} />)}
                        </div>
                     </div>

                     <AnimatePresence mode="wait">
                       <motion.div
                         key={`${id}-${activeFeature}`}
                         initial={{ opacity: 0, scale: 0.95 }}
                         animate={{ opacity: 1, scale: 1 }}
                         exit={{ opacity: 0, scale: 1.05 }}
                         transition={{ duration: 0.4 }}
                         className="w-full h-full p-8 md:p-12"
                       >
                          {id === 'mila' ? (
                             <MilaVisuals featureIndex={activeFeature} />
                          ) : (
                             <AraliVisuals featureIndex={activeFeature} />
                          )}
                       </motion.div>
                     </AnimatePresence>
                     
                     {/* Overlay Gradient */}
                     <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent pointer-events-none" />
                 </div>
              </div>
              {/* Decorative elements behind */}
              <div className={`absolute -inset-4 rounded-[3rem] z-[-1] opacity-40 blur-3xl transition-colors duration-500 ${isEmerald ? 'bg-emerald-200' : 'bg-indigo-200'}`} />
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#021020] text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
         <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-light mb-8" style={{ fontFamily: '"Aquire", sans-serif' }}>
               Ready to deploy {product.title}?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10 text-lg">
               Join the network of forward-thinking enterprises transforming their operations today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               {product.externalLink ? (
                 <a href={product.externalLink} target="_blank" rel="noopener noreferrer">
                   <SciFiButton 
                      size="lg" 
                      className={`${buttonBg} font-bold`}
                   >
                      Launch Platform
                   </SciFiButton>
                 </a>
               ) : (
                 <Link to="/contact">
                    <SciFiButton 
                       size="lg" 
                       className={`${buttonBg} font-bold`}
                    >
                       Get Started Now
                    </SciFiButton>
                 </Link>
               )}
               <Link to="/products" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors font-medium tracking-wide uppercase text-sm">
                  View other products <ChevronRight size={16} />
               </Link>
            </div>
         </div>
      </section>
    </motion.div>
  );
};
