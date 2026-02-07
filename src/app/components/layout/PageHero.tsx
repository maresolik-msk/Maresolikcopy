import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  subtitle: string;
  category: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
}

export const PageHero = ({ title, subtitle, category, description, align = 'center', theme = 'dark' }: PageHeroProps) => {
  const isLight = theme === 'light';
  
  return (
    <div className={`relative pt-32 pb-20 ${isLight ? 'bg-[#F2F5FA]' : 'bg-[#021020]'} overflow-hidden transition-colors duration-500`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div 
          className={`absolute inset-0 ${isLight ? 'opacity-[0.03]' : 'opacity-20'}`}
          style={{ 
            backgroundImage: `linear-gradient(${isLight ? '#021020' : 'rgba(255, 255, 255, 0.05)'} 1px, transparent 1px), linear-gradient(90deg, ${isLight ? '#021020' : 'rgba(255, 255, 255, 0.05)'} 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} 
        />
        
        {/* Gradients */}
        <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none ${isLight ? 'bg-indigo-500/5 mix-blend-multiply' : 'bg-indigo-500/20 mix-blend-screen'}`} />
        <div className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none ${isLight ? 'bg-emerald-500/5 mix-blend-multiply' : 'bg-emerald-500/10 mix-blend-screen'}`} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
          {/* Breadcrumb / Category */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-6 ${isLight ? 'text-indigo-800' : 'text-indigo-800'}`}
          >
            <Link to="/" className={`${isLight ? 'hover:text-[#021020]' : 'hover:text-white'} transition-colors`}>Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span>{category}</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-5xl md:text-7xl font-light mb-6 uppercase tracking-wider ${isLight ? 'text-[#021020]' : 'text-white'}`}
            style={{ fontFamily: '"Aquire", sans-serif' }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl"
          >
            <p className={`text-xl md:text-2xl font-light mb-4 ${isLight ? 'text-[#021020]/80' : 'text-white/80'}`}>
              {subtitle}
            </p>
            {description && (
              <p className={`leading-relaxed ${isLight ? 'text-[#021020]/60' : 'text-white/50'}`}>
                {description}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${isLight ? '[#021020]/10' : 'white/10'} to-transparent`} />
    </div>
  );
};
