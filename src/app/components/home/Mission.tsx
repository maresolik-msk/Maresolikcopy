import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';

const words = [
  'We', 'engineer', 'adaptive', 'neural', 'infrastructure', '—',
  'systems', 'that', 'learn,', 'evolve,', 'and', 'self-correct', '—',
  'deployed', 'from', "Earth's", 'soil', 'to', 'orbital', 'stations.'
];

export const Mission = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.3'],
    layoutEffect: false,
  });

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-44 bg-[#F2F5FA] overflow-hidden"
      style={{ position: 'relative' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#021020]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#021020]/10 to-transparent" />
        
        {/* Large faded text in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-light text-[#021020]/[0.02] tracking-tighter whitespace-nowrap select-none" style={{ fontFamily: '"Aquire", sans-serif' }}>
          MARESOLIK
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-12 h-px bg-[#021020]/20" />
          <span className="text-xs font-mono text-[#021020]/40 uppercase tracking-[0.25em]">Our Mission</span>
        </motion.div>

        {/* Animated text reveal */}
        <div className="max-w-5xl">
          <p className="text-3xl md:text-5xl lg:text-6xl leading-[1.2] md:leading-[1.15] tracking-tight text-[#021020]/10">
            {words.map((word, i) => (
              <Word key={i} index={i} total={words.length} progress={scrollYProgress}>
                {word}
              </Word>
            ))}
          </p>
        </div>

        {/* Bottom metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '01', label: 'Autonomous Intelligence', desc: 'Self-evolving neural networks that operate without cloud dependency.' },
            { number: '02', label: 'Multi-Domain Deployment', desc: 'From agricultural fields to retail floors to stratospheric drones.' },
            { number: '03', label: 'Responsible Scale', desc: 'Technology built with precision, ethics, and human-centric design.' },
          ].map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i + 0.4 }}
              className="group"
            >
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono text-indigo-500/50 mt-1">{item.number}</span>
                <div>
                  <h4 className="text-[#021020] mb-2">{item.label}</h4>
                  <p className="text-sm text-[#021020]/40 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Word = ({ children, index, total, progress }: {
  children: string;
  index: number;
  total: number;
  progress: any;
}) => {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.1, 1]);
  const color = useTransform(progress, [start, end], ['rgba(2,16,32,0.1)', 'rgba(2,16,32,0.9)']);

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-[0.3em] transition-none"
    >
      {children}
    </motion.span>
  );
};