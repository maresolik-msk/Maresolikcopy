import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Can MILA work in areas with limited internet connectivity?',
    a: 'Yes. MILA is designed for field conditions — the mobile app works fully offline and syncs data when a connection is available. Satellite-based soil and weather data is pre-cached daily.',
  },
  {
    q: 'How quickly can ARALI be deployed in an existing retail store?',
    a: 'ARALI is operational within 48 hours. Our onboarding team handles inventory import, hardware setup (printer, scanner), and staff training. Most stores are fully autonomous within one week.',
  },
  {
    q: 'Do the platforms require specialized hardware?',
    a: 'MILA runs on any Android smartphone. Optional IoT sensors (soil, weather) can be added for deeper intelligence. ARALI works on standard Android tablets and supports Bluetooth/USB printers and barcode scanners.',
  },
  {
    q: 'Is there an API for integrating with our existing systems?',
    a: 'Both platforms offer REST APIs for third-party integration. MILA integrates with government agriculture databases and APMC market data. ARALI supports payment gateways, accounting software, and ERP systems.',
  },
  {
    q: 'What kind of support is included?',
    a: 'All plans include dedicated onboarding, in-app chat support, and access to our knowledge base. Enterprise plans include a dedicated account manager, priority support SLA, and custom feature development.',
  },
  {
    q: 'Can I use both platforms together?',
    a: 'Absolutely. For agri-retail businesses or cooperatives that both grow and sell, MILA and ARALI share a unified backend. Data flows seamlessly between crop intelligence and retail analytics.',
  },
];

const FAQItem = ({ faq, index, isOpen, toggle }: { faq: typeof faqs[0]; index: number; isOpen: boolean; toggle: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-[#021020]/[0.06] last:border-0"
    >
      <button
        onClick={toggle}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group cursor-pointer"
      >
        <span className={`text-lg transition-colors ${isOpen ? 'text-[#021020]' : 'text-[#021020]/60 group-hover:text-[#021020]/80'}`}>
          {faq.q}
        </span>
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
          isOpen
            ? 'bg-[#021020] border-[#021020] text-white'
            : 'border-[#021020]/10 text-[#021020]/30 group-hover:border-[#021020]/20'
        }`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#021020]/50 leading-relaxed max-w-2xl pr-14">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const ProductsFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32 bg-[#F2F5FA] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <div className="w-8 h-px bg-[#021020]/20" />
              <span className="text-xs font-mono text-[#021020]/40 uppercase tracking-[0.2em]">Common Questions</span>
              <div className="w-8 h-px bg-[#021020]/20" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl text-[#021020] tracking-widest uppercase"
              style={{ fontFamily: '"Aquire", sans-serif' }}
            >
              FAQ
            </motion.h2>
          </div>

          {/* FAQ list */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl shadow-black/5 border border-[#021020]/5">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
