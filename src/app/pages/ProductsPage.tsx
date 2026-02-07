import React from 'react';
import { Products } from '../components/home/Products';
import { motion } from 'motion/react';
import { PageHero } from '../components/layout/PageHero';

export const ProductsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F2F5FA]"
    >
      <PageHero 
        title="Our Ecosystem"
        subtitle="Intelligence for Earth & Commerce"
        category="Products"
        description="Interact with our flagship platforms below to see how they solve critical challenges in agriculture and retail."
        theme="light"
      />
      <Products showHeader={false} />
    </motion.div>
  );
};
