import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Leaf, ShoppingBag, Satellite } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const showcaseItems = [
  {
    title: 'Precision Agriculture',
    subtitle: 'MILA Intelligence Engine',
    description: 'AI-driven crop monitoring and predictive analytics transforming how food is grown across 10,000+ acres.',
    image: 'https://images.unsplash.com/photo-1677126577258-1a82fdf1a976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwYWdyaWN1bHR1cmUlMjBkcm9uZSUyMGZpZWxkJTIwYWVyaWFsfGVufDF8fHx8MTc3MDkxNzEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: <Leaf className="w-5 h-5" />,
    accent: 'emerald',
    link: '/products/mila',
    tag: 'MILA_V4.2',
  },
  {
    title: 'Smart Retail',
    subtitle: 'ARALI Management Suite',
    description: 'Next-generation POS, inventory, and analytics — powering 500+ modern retail operations in real-time.',
    image: 'https://images.unsplash.com/photo-1764795850248-97a5e986b242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXRhaWwlMjBzdG9yZSUyMHRlY2hub2xvZ3klMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzA5MTcxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: <ShoppingBag className="w-5 h-5" />,
    accent: 'indigo',
    link: '/products/arali',
    tag: 'ARALI_V3.0',
  },
  {
    title: 'Orbital Systems',
    subtitle: 'Autonomous Navigation',
    description: 'GPS-denied visual odometry and edge AI enabling autonomous operations from stratosphere to deep space.',
    image: 'https://images.unsplash.com/photo-1770370419338-f9a813302baa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBlYXJ0aCUyMG9yYml0JTIwc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDkxNzEyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: <Satellite className="w-5 h-5" />,
    accent: 'amber',
    link: '/technology',
    tag: 'NAV_PROTO_X',
  },
];

const ShowcaseCard = ({ item, index }: { item: typeof showcaseItems[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
    layoutEffect: false,
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const isReversed = index % 2 !== 0;

  const accentClasses: Record<string, { text: string; bg: string; border: string; glow: string }> = {
    emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', glow: 'rgba(16,185,129,0.15)' },
    indigo: { text: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', glow: 'rgba(99,102,241,0.15)' },
    amber: { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', glow: 'rgba(245,158,11,0.15)' },
  };
  const accent = accentClasses[item.accent];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: 0.1 }}
      style={{ position: 'relative' }}
      className={`relative flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
    >
      {/* Image */}
      <div className="flex-1 w-full relative group">
        <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl aspect-[16/10] border border-white/10 group-hover:border-white/20 transition-colors duration-500">
          <motion.div style={{ y: imgY }} className="absolute inset-[-20%]">
            <ImageWithFallback
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#021020] via-[#021020]/30 to-transparent" />
          
          {/* Corner HUD */}
          <div className="absolute top-4 left-4 z-10">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${accent.bg} ${accent.border} border backdrop-blur-md`}>
              <span className={accent.text}>{item.icon}</span>
              <span className={`text-[10px] font-mono ${accent.text} uppercase tracking-wider`}>{item.tag}</span>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/20 z-10" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/10 z-10" />
          
          {/* Hover glow */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{ background: `radial-gradient(circle at 50% 80%, ${accent.glow}, transparent 60%)` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 w-full lg:py-8">
        <motion.div
          initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className={`text-xs font-mono ${accent.text} uppercase tracking-[0.2em] mb-4 block`}>
            {item.subtitle}
          </span>
          <h3
            className="text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mb-6 leading-[1.1]"
            style={{ fontFamily: '"Aquire", sans-serif' }}
          >
            {item.title}
          </h3>
          <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-lg">
            {item.description}
          </p>
          <Link to={item.link}>
            <motion.div
              whileHover={{ x: 4 }}
              className={`inline-flex items-center gap-3 ${accent.text} text-sm font-medium cursor-pointer group/link`}
            >
              <span className="uppercase tracking-wider">Explore Platform</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </motion.div>
          </Link>
          
          {/* Decorative line */}
          <div className="mt-8 w-24 h-px bg-gradient-to-r from-white/20 to-transparent" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Showcase = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#021020] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] pointer-events-none" />
      
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            <span className="text-indigo-400 font-mono text-xs uppercase tracking-[0.2em]">
              Domains of Impact
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: '"Aquire", sans-serif' }}
          >
            Where Intelligence
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
              Meets Reality
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg leading-relaxed max-w-xl"
          >
            From precision agriculture to orbital logistics, our adaptive neural infrastructure is deployed where it matters most.
          </motion.p>
        </div>

        {/* Showcase Cards */}
        <div className="space-y-20 md:space-y-32">
          {showcaseItems.map((item, i) => (
            <ShowcaseCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};