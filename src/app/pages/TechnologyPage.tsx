import React from 'react';
import { Technology } from '../components/home/Technology';
import { motion } from 'motion/react';
import { PageHero } from '../components/layout/PageHero';

export const TechnologyPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F2F5FA]"
    >
      <PageHero 
        title="Adaptive Neural Core"
        subtitle="System Architecture // v4.0"
        category="Technology"
        description="Our proprietary Liquid Neural Networks evolve in real-time, rewriting their own synaptic weights to adapt to unforeseen variables in the field—without cloud connectivity."
        theme="light"
      />
      <Technology showHeader={false} />
    </motion.div>
  );
};
