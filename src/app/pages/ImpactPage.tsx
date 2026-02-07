import React from 'react';
import { Impact } from '../components/home/Impact';
import { motion } from 'motion/react';
import { PageHero } from '../components/layout/PageHero';

export const ImpactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F2F5FA]"
    >
      <PageHero 
        title="Global Impact"
        subtitle="Deploying Advanced Intelligence"
        category="Impact"
        description="Explore our impact across three critical domains where our systems are making a measurable difference."
        theme="light"
      />
      <Impact showHeader={false} theme="light" />
    </motion.div>
  );
};
