import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { SciFiButton } from '../ui/SciFiButton';

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Dyson Swarm Initiative: Harvesting Star Power",
    excerpt: "As humanity's energy needs grow exponentially, the theoretical framework for partial stellar containment is moving from science fiction to engineering reality.",
    date: "Feb 08, 2054",
    category: "Energy",
    image: "https://images.unsplash.com/photo-1651671795838-210ffc22a2a4?auto=format&fit=crop&q=80&w=800",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Quantum Entanglement in Deep Space Comms",
    excerpt: "Breaking the light-speed barrier for communication. How QEC arrays are enabling real-time control of mining drones in the Kuiper Belt.",
    date: "Jan 24, 2054",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1634744888346-88825a64548b?auto=format&fit=crop&q=80&w=800",
    readTime: "12 min read"
  },
  {
    id: 3,
    title: "Exobiology: The Phosphorescent Flora of Proxima B",
    excerpt: "New surveys reveal that the bioluminescent ecosystem of Proxima B may hold the key to advanced genetic engineering and sustainable lighting.",
    date: "Jan 12, 2054",
    category: "Discovery",
    image: "https://images.unsplash.com/photo-1688407832489-cc9db90773f5?auto=format&fit=crop&q=80&w=800",
    readTime: "5 min read"
  }
];

export const BlogSection = () => {
  return (
    <section className="py-24 bg-[#030213] text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0f172a_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#1e1b4b_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Transmissions</span>
            </h2>
            <p className="text-gray-400 max-w-lg text-lg">
              Insights into the next generation of interstellar technology, AI development, and cosmic exploration.
            </p>
          </div>
          <Link to="/blog">
            <SciFiButton variant="outline" className="hidden md:flex">
              View Archive
            </SciFiButton>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg aspect-[16/10] mb-6 border border-white/10 group-hover:border-blue-500/30 transition-colors duration-500">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030213] via-transparent to-transparent opacity-60" />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-blue-200 bg-blue-900/40 backdrop-blur-md border border-blue-500/20 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-blue-500/50" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                  Read Transmission 
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:hidden flex justify-center">
           <Link to="/blog">
            <SciFiButton variant="outline">
              View Archive
            </SciFiButton>
          </Link>
        </div>
      </div>
    </section>
  );
};
