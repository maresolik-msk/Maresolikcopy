import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sprout, ShoppingBag, ArrowRight, CloudRain, FlaskConical, Calendar, ScanBarcode, Package, Bell, BarChart3, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { SciFiButton } from '../ui/SciFiButton';

const products = [
  {
    id: 'mila',
    name: 'MILA',
    subtitle: 'Indian Crop Intelligence Engine',
    description: 'AI-powered platform helping farmers and agri-teams make smarter crop decisions — from sowing to harvest.',
    icon: <Sprout className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1749836832771-e8a43ecb9a56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZhcm1sYW5kJTIwYWVyaWFsJTIwdmlldyUyMHN1bnJpc2V8ZW58MXx8fHwxNzcwOTE4OTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'emerald',
    features: [
      { icon: <Sprout className="w-4 h-4" />, label: 'Farm Management' },
      { icon: <FlaskConical className="w-4 h-4" />, label: 'Soil Intelligence' },
      { icon: <CloudRain className="w-4 h-4" />, label: 'Weather Advisory' },
      { icon: <Calendar className="w-4 h-4" />, label: 'Crop Planning' },
    ],
    stats: [
      { value: '+35%', label: 'Yield Increase' },
      { value: '10K+', label: 'Acres Monitored' },
      { value: '40%', label: 'Water Saved' },
    ],
  },
  {
    id: 'arali',
    name: 'ARALI',
    subtitle: 'Modern Retail Management App',
    description: 'POS, inventory, and analytics — in one fast, easy workflow built for small to mid-sized retailers.',
    icon: <ShoppingBag className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1760463921652-78b38572da45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncm9jZXJ5JTIwc3RvcmUlMjBzaGVsdmVzJTIwb3JnYW5pemVkfGVufDF8fHx8MTc3MDkxODk5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'indigo',
    features: [
      { icon: <ScanBarcode className="w-4 h-4" />, label: 'Smart POS' },
      { icon: <Package className="w-4 h-4" />, label: 'Inventory Tracking' },
      { icon: <Bell className="w-4 h-4" />, label: 'Smart Alerts' },
      { icon: <BarChart3 className="w-4 h-4" />, label: 'Analytics Dashboard' },
    ],
    stats: [
      { value: '-20%', label: 'Waste Reduction' },
      { value: '500+', label: 'Stores Active' },
      { value: '99%', label: 'Stock Accuracy' },
    ],
  },
];

export const ProductOverview = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#F2F5FA] overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-8 h-px bg-[#021020]/20" />
            <span className="text-xs font-mono text-[#021020]/40 uppercase tracking-[0.2em]">Platform Overview</span>
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
            Choose Your Platform
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#021020]/50 text-lg"
          >
            Each platform is purpose-built for its domain — but shares the same adaptive AI core.
          </motion.p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, idx) => {
            const isEmerald = product.color === 'emerald';
            return (
              <motion.div
                key={product.id}
                id={`${product.id}-section`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/5 border border-[#021020]/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-5 left-5">
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-md ${
                      isEmerald
                        ? 'bg-emerald-900/60 border-emerald-500/30 text-emerald-200'
                        : 'bg-indigo-900/60 border-indigo-500/30 text-indigo-200'
                    }`}>
                      {product.icon}
                      <span className="text-xs font-mono uppercase tracking-wider">{product.name}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <div className="mb-6">
                    <span className={`text-xs font-mono uppercase tracking-[0.15em] ${isEmerald ? 'text-emerald-600' : 'text-indigo-600'}`}>
                      {product.subtitle}
                    </span>
                    <h3 className="text-2xl md:text-3xl text-[#021020] tracking-tight mt-2 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-[#021020]/50 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.features.map((f) => (
                      <div
                        key={f.label}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border ${
                          isEmerald
                            ? 'bg-emerald-50 border-emerald-100 text-emerald-700'
                            : 'bg-indigo-50 border-indigo-100 text-indigo-700'
                        }`}
                      >
                        {f.icon}
                        {f.label}
                      </div>
                    ))}
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4 mb-8 p-4 rounded-2xl bg-[#F2F5FA]/80 border border-[#021020]/5">
                    {product.stats.map((s) => (
                      <div key={s.label} className="text-center">
                        <div className={`text-2xl tracking-tight ${isEmerald ? 'text-emerald-600' : 'text-indigo-600'}`} style={{ fontFamily: '"Tomorrow", sans-serif' }}>
                          {s.value}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-[#021020]/30 font-mono mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link to={`/products/${product.id}`}>
                    <SciFiButton
                      variant="primary"
                      size="md"
                      icon={<ArrowRight className="w-4 h-4" />}
                      className={isEmerald ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-indigo-600 hover:bg-indigo-700'}
                    >
                      Explore {product.name}
                    </SciFiButton>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
