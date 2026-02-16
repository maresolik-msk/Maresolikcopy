import React from 'react';
import { motion } from 'motion/react';
import { ProductsHero } from '../components/products/ProductsHero';
import { ProductOverview } from '../components/products/ProductOverview';
import { Products } from '../components/home/Products';
import { UseCases } from '../components/products/UseCases';
import { TechStack } from '../components/products/TechStack';
import { ComparisonGrid } from '../components/products/ComparisonGrid';
import { ProductsFAQ } from '../components/products/ProductsFAQ';
import { ProductsCTA } from '../components/products/ProductsCTA';

export const ProductsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F2F5FA] relative"
    >
      {/* 1. Cinematic dark hero with floating product orbs & jump links */}
      <ProductsHero />

      {/* 2. Product overview cards with images, stats & feature pills */}
      <ProductOverview />

      {/* 3. Interactive product deep-dive from homepage (no header) */}
      <Products showHeader={false} />

      {/* 4. Real-world use cases with tabbed content & images */}
      <UseCases />

      {/* 5. Shared tech stack with layered architecture view */}
      <TechStack />

      {/* 6. Side-by-side feature comparison table */}
      <ComparisonGrid />

      {/* 7. FAQ accordion */}
      <ProductsFAQ />

      {/* 8. Bold deployment CTA with quick-access links */}
      <ProductsCTA />
    </motion.div>
  );
};
