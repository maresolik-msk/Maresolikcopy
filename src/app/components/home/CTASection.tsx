import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket } from 'lucide-react';
import { SciFiButton } from '../ui/SciFiButton';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
    layoutEffect: false,
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['20px', '-20px']);

  return (
    <section ref={sectionRef} className="relative py-0 overflow-hidden" style={{ position: 'relative' }}>
      {/* Full-bleed background image with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-[-20%]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzA5MTcxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Neural network abstract"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#021020]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#021020] via-transparent to-[#021020]" />
      </div>

      {/* Grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[250px] h-[250px] bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 py-28 md:py-40">
        <motion.div
          style={{ y: textY }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-10"
          >
            <Rocket className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-mono text-white/60 uppercase tracking-[0.2em]">Ready to Launch</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] mb-8"
            style={{ fontFamily: '"Aquire", sans-serif' }}
          >
            Build the Future
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400">
              With Us
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Whether you're transforming agriculture, revolutionizing retail, or pushing the boundaries of autonomous systems — MARESOLIK's adaptive AI platform scales with your ambition.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <SciFiButton
                variant="secondary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Started
              </SciFiButton>
            </Link>
            <Link to="/technology">
              <SciFiButton
                variant="outline"
                size="lg"
                className="text-white border-white/20 hover:bg-white/10"
              >
                View Technology
              </SciFiButton>
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-white/20"
          >
            {['SOC 2 Certified', 'ISO 27001', 'GDPR Compliant', 'Enterprise Ready'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};