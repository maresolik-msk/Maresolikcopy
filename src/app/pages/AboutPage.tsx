import React from 'react';
import { About } from '../components/home/About';
import { motion } from 'motion/react';
import { PageHero } from '../components/layout/PageHero';

export const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F2F5FA]"
    >
      <PageHero 
        title="Our Philosophy"
        subtitle="Building Intelligence for the Stars"
        category="About"
        description="MARESOLIK combines deep tech R&D with practical application to solve the hardest problems in autonomy and resource management."
        theme="light"
      />
      <About showHeader={false} />
    </motion.div>
  );
};
