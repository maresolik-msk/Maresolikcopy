import React from 'react';
import { Hero } from '../components/home/Hero';
import { Products } from '../components/home/Products';
import { Technology } from '../components/home/Technology';
import { Impact } from '../components/home/Impact';
import { About } from '../components/home/About';
import { motion } from 'motion/react';

export const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#F2F5FA] min-h-screen"
    >
      <Hero />
      <Products />
      <Technology />
      <Impact theme="light" />
      <About />
    </motion.div>
  );
};
