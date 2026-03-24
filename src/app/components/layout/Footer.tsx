import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Twitter, Linkedin, Github, Globe, Mail } from 'lucide-react';
import { StarField } from '../ui/StarField';
import Container from '../../../imports/Container-2022-104';

export const Footer = () => {
  return (
    <footer className="relative bg-[#021020] text-white pt-20 overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
        <StarField className="opacity-60" />
      </div>

      {/* Marquee Section */}
      <div className="border-y border-white/5 py-10 overflow-hidden bg-white/[0.02]">
        <div className="flex whitespace-nowrap overflow-hidden">
            <motion.div 
                animate={{ x: "-50%" }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                className="flex gap-20 items-center px-10"
            >
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-20">
                        <Link to="/contact">
                            <span className="text-8xl md:text-9xl font-light tracking-tighter opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-pointer" style={{ fontFamily: '"Aquire", sans-serif' }}>
                                LET'S EXPLORE
                            </span>
                        </Link>
                        <div className="w-4 h-4 rounded-full bg-emerald-500" />
                    </div>
                ))}
            </motion.div>
            <motion.div 
                animate={{ x: "-50%" }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                className="flex gap-20 items-center px-10"
            >
                {[1, 2, 3, 4].map((i) => (
                    <div key={`d-${i}`} className="flex items-center gap-20">
                        <Link to="/contact">
                            <span className="text-8xl md:text-9xl font-light tracking-tighter opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-pointer" style={{ fontFamily: '"Aquire", sans-serif' }}>
                                LET'S EXPLORE
                            </span>
                        </Link>
                        <div className="w-4 h-4 rounded-full bg-emerald-500" />
                    </div>
                ))}
            </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
            {/* Brand & Address */}
            <div className="md:col-span-5 space-y-8">
                <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                        <img 
                           <img src="/21b022a1f8cde4cc1f2c70f786de3ab7f639e359.png" />
                        />
                    </div>
                    <h3 
                        className="text-3xl font-light tracking-widest uppercase"
                        style={{ fontFamily: '"Aquire", sans-serif' }}
                    >
                        MARESOLIK
                    </h3>
                </div>
                <p className="text-white/60 leading-relaxed max-w-sm">
                    We engineer the intelligence that powers the next century of autonomous infrastructure. From Earth's soil to orbital stations.
                </p>
                <div className="flex items-center gap-4 pt-4">
                    <SocialButton icon={<Twitter size={18} />} href="https://twitter.com" />
                    <SocialButton icon={<Linkedin size={18} />} href="https://linkedin.com" />
                    <SocialButton icon={<Github size={18} />} href="https://github.com" />
                    <SocialButton icon={<Mail size={18} />} href="mailto:hello@maresolik.com" />
                </div>
            </div>

            {/* Links */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                <FooterColumn 
                    title="Platform"
                    links={[
                        { label: 'MILA Intelligence', to: '/products/mila' },
                        { label: 'ARALI Retail', to: '/products/arali' },
                        { label: 'Autonomy Stack', to: '/technology' },
                        { label: 'Developer API', to: '/contact' }
                    ]}
                />
                <FooterColumn 
                    title="Company"
                    links={[
                        { label: 'About Us', to: '/about' },
                        { label: 'Careers', to: '/about' },
                        { label: 'Impact', to: '/impact' },
                        { label: 'Press Kit', to: '/contact' }
                    ]}
                />
                <FooterColumn 
                    title="Legal"
                    links={[
                        { label: 'Privacy Policy', to: '/contact' },
                        { label: 'Terms of Service', to: '/contact' },
                        { label: 'Cookie Policy', to: '/contact' },
                        { label: 'Security', to: '/contact' }
                    ]}
                />
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20">
            <Container />
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }: { title: string, links: { label: string, to: string }[] }) => (
    <div>
        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">{title}</h4>
        <ul className="space-y-4">
            {links.map(link => (
                <li key={link.label}>
                    <Link to={link.to} className="text-white/50 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-300">
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const SocialButton = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-white hover:text-[#021020] transition-all duration-300">
        {(href.includes('twitter.com') || href.includes('x.com')) ? (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M18.901 0h3.68l-8.04 9.19L24 24h-7.4l-5.8-7.58L4.6 24H.92l8.46-9.77L0 0h7.55l5.25 6.95L18.9 0h.01zm-1.29 21.74h2.04L7.02 2.55H4.98l12.63 19.19z" />
            </svg>
        ) : (
            icon
        )}
    </a>
);
