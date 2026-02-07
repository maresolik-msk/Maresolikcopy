import React from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F2F5FA] pt-32 pb-20 relative overflow-hidden"
    >
      {/* Background Tech Grid */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(2,16,32,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(2,16,32,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]" />
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-20"
          >
            
            <h1 className="text-5xl md:text-7xl font-light text-[#021020] mb-6 tracking-tighter" style={{ fontFamily: '"Aquire", sans-serif' }}>
              GET IN TOUCH
            </h1>
            <p className="text-xl text-[#021020]/60 max-w-2xl mx-auto leading-relaxed">
              Ready to deploy adaptive neural infrastructure? Our team is standing by to discuss your mission requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="md:col-span-5 space-y-6"
            >
              <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#021020]/5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/20 via-indigo-500 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h3 className="text-2xl font-light text-[#021020] mb-8" style={{ fontFamily: '"Aquire", sans-serif' }}>HEADQUARTERS</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-5 group/item">
                    <div className="w-12 h-12 rounded-2xl bg-[#F2F5FA] flex items-center justify-center text-indigo-600 group-hover/item:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-[#021020] text-lg mb-1">MARESOLIK Industries</p>
                      <p className="text-[#021020]/60 leading-relaxed"> MSK <br />Anantapuramu(AP), India</p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-[#021020]/5" />

                  <div className="flex items-center gap-5 group/item">
                    <div className="w-12 h-12 rounded-2xl bg-[#F2F5FA] flex items-center justify-center text-indigo-600 group-hover/item:scale-110 transition-transform duration-300">
                        <Phone className="w-6 h-6" />
                    </div>
                    <p className="text-[#021020]/60 font-medium text-lg">+1 (555) 000-0000</p>
                  </div>

                  <div className="w-full h-px bg-[#021020]/5" />

                  <div className="flex items-center gap-5 group/item">
                    <div className="w-12 h-12 rounded-2xl bg-[#F2F5FA] flex items-center justify-center text-indigo-600 group-hover/item:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6" />
                    </div>
                    <p className="text-[#021020]/60 font-medium text-lg">hello@maresolik.com</p>
                  </div>
                </div>
              </div>

              {/* Decorative Status Card */}
              
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="md:col-span-7"
            >
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#021020]/5 relative">
                {/* Corner accents */}
                <div className="absolute top-0 right-0 p-6 opacity-20">
                    <div className="w-16 h-16 border-t-2 border-r-2 border-[#021020] rounded-tr-2xl" />
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#021020]/60 uppercase tracking-wider ml-1">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-5 py-4 rounded-xl bg-[#F2F5FA] border-2 border-transparent focus:bg-white focus:border-indigo-600 focus:ring-0 transition-all font-medium text-[#021020] placeholder:text-[#021020]/20"
                        placeholder="Anil"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#021020]/60 uppercase tracking-wider ml-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-5 py-4 rounded-xl bg-[#F2F5FA] border-2 border-transparent focus:bg-white focus:border-indigo-600 focus:ring-0 transition-all font-medium text-[#021020] placeholder:text-[#021020]/20"
                        placeholder="anil@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#021020]/60 uppercase tracking-wider ml-1">Subject</label>
                    <select className="w-full px-5 py-4 rounded-xl bg-[#F2F5FA] border-2 border-transparent focus:bg-white focus:border-indigo-600 focus:ring-0 transition-all font-medium text-[#021020]">
                        <option>General Inquiry</option>
                        <option>Product Demo</option>
                        <option>Technical Support</option>
                        <option>Partnership</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#021020]/60 uppercase tracking-wider ml-1">Message</label>
                    <textarea 
                      rows={6}
                      className="w-full px-5 py-4 rounded-xl bg-[#F2F5FA] border-2 border-transparent focus:bg-white focus:border-indigo-600 focus:ring-0 transition-all font-medium text-[#021020] placeholder:text-[#021020]/20 resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <div className="pt-4">
                      <button className="w-full group relative px-8 py-5 bg-[#021020] text-white rounded-xl font-bold tracking-widest uppercase overflow-hidden transition-all hover:shadow-xl hover:shadow-indigo-900/20 hover:-translate-y-1">
                        <span className="relative z-10 flex items-center justify-center gap-3 font-normal">
                            Transmit Message
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                      </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
