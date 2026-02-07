import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const LoginPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F2F5FA] flex items-center justify-center pt-20 pb-10 px-6"
    >
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-[#021020]/5">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light text-[#021020] mb-2" style={{ fontFamily: '"Aquire", sans-serif' }}>WELCOME BACK</h1>
          <p className="text-[#021020]/60">Access your neural infrastructure dashboard</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-[#021020]/60 mb-2">Email Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-lg bg-[#F2F5FA] border-transparent focus:bg-white focus:border-indigo-600 focus:ring-0 transition-colors"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#021020]/60 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-lg bg-[#F2F5FA] border-transparent focus:bg-white focus:border-indigo-600 focus:ring-0 transition-colors"
              placeholder="••••••••"
            />
          </div>
          
          <button className="w-full py-4 bg-[#021020] text-white rounded-lg font-bold tracking-wide hover:bg-indigo-900 transition-colors flex items-center justify-center gap-2">
            SIGN IN
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-[#021020]/40">
          Don't have an account? <Link to="/contact" className="text-indigo-600 hover:text-indigo-800 font-medium">Contact Sales</Link>
        </div>
      </div>
    </motion.div>
  );
};
