import React from 'react';
import { Hero } from '../components/home/Hero';
import { StatsBar } from '../components/home/StatsBar';
import { PartnersBar } from '../components/home/PartnersBar';
import { Mission } from '../components/home/Mission';
import { Showcase } from '../components/home/Showcase';
import { Products } from '../components/home/Products';
import { Technology } from '../components/home/Technology';
import { Impact } from '../components/home/Impact';
import { Testimonials } from '../components/home/Testimonials';
import { CTASection } from '../components/home/CTASection';
import { BlogSection } from '../components/home/BlogSection';
import { About } from '../components/home/About';
import { motion } from 'motion/react';

export const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#F2F5FA] min-h-screen relative"
    >
      {/* 1. Hero — Black hole + tagline (dark) */}
      <Hero />
      
      {/* 2. Animated stats counter bar (dark) — immediate social proof */}
      <StatsBar />
      
      {/* 3. Partners marquee (light) — trust signals */}
      <PartnersBar />
      
      {/* 4. Mission statement with scroll-reveal text (light) — brand story hook */}
      <Mission />
      
      {/* 5. Cinematic visual showcase (dark) — parallax domain images */}
      <Showcase />
      
      {/* 6. Interactive product cards (light) — MILA & ARALI deep dive */}
      <Products />
      
      {/* 7. Technology section (light) — Adaptive Neural Core */}
      <Technology />
      
      {/* 8. Impact accordion (light) — metrics & results */}
      <Impact theme="light" />
      
      {/* 9. Testimonials carousel (light) — social proof */}
      <Testimonials />
      
      {/* 10. Bold CTA (dark) — conversion section */}
      <CTASection />
      
      {/* 11. Blog / Latest Transmissions (dark) */}
      <BlogSection />
      
      {/* 12. Philosophy principles (light) */}
      <About />
    </motion.div>
  );
};