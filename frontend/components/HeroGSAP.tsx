'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Phone, MessageCircle, Droplets, ShieldCheck, Zap } from 'lucide-react';

export default function HeroGSAP() {
  const containerRef = useRef(null);

  // WhatsApp number & message
  const whatsappNumber = "917898595612";
  const whatsappMessage = encodeURIComponent("Hi Bharat H2O! I'm interested in premium custom-branded water bottles for my business. Can I get a quote?");

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-slate-950 pb-12 sm:pb-0"
    >
      {/* Background Media - Video or Cinematic Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="w-full h-full"
        >
          {/* Using a high-quality cinematic water image. If you have a video link, replace <img> with <video> */}
          <img
            src="https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80&w=2000"
            alt="Bharat H2O Backdrop"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Dynamic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/60 to-transparent z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-[1]"></div>
        
        {/* Animated Particles/Orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-cyan-500/20 rounded-full blur-[120px] z-[0]"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-32 pb-12 md:pt-20 md:pb-0">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-6 md:mb-8"
          >
            <Droplets className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" />
            <span className="text-[9px] md:text-xs font-black tracking-[0.2em] uppercase text-blue-100">
              India's Most Trusted Hospitality Partner
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6 md:mb-8 text-white tracking-tight"
          >
            Your Brand, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200">
              Our Premium Water
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-sm md:text-lg lg:text-xl text-blue-100/80 max-w-2xl mb-10 md:mb-12 leading-relaxed font-medium"
          >
            Elevate your guest experience with elite, custom-branded water bottles. Seamless production, elite design, and pan-India delivery for 100+ premium establishments.
          </motion.p>


          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-center"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="group relative bg-white text-blue-900 px-10 py-5 rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-3 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/10"
            >
              <span className="relative z-10">Get Your Custom Quote</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform relative z-10" size={18} />
              <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <a
              href="#products"
              className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md px-10 py-5 rounded-2xl text-white font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all hover:border-white/20"
            >
              Explore Collection
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10"
          >
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-cyan-400 opacity-50" />
              <div>
                <div className="text-xl font-bold text-white">100+</div>
                <div className="text-[10px] uppercase tracking-widest text-blue-200/50">Partners</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Zap className="w-8 h-8 text-cyan-400 opacity-50" />
              <div>
                <div className="text-xl font-bold text-white">24hr</div>
                <div className="text-[10px] uppercase tracking-widest text-blue-200/50">Response</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Action Icons - Fixed on the right */}
      <div className="fixed right-6 bottom-10 md:bottom-auto md:top-1/2 md:-translate-y-1/2 flex flex-col gap-4 z-[100]">
        <a 
          href="tel:+917898595612" 
          className="w-14 h-14 backdrop-blur-xl border border-white/10 text-white rounded-full flex items-center justify-center bg-blue-600 hover:scale-110 active:scale-95 transition-all shadow-2xl group"
          title="Call Us"
        >
          <Phone size={24} className="group-hover:rotate-12 transition-transform" />
        </a>
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank" 
          rel="noreferrer" 
          className="w-14 h-14 bg-emerald-500/90 backdrop-blur-xl text-white rounded-full flex items-center justify-center hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all shadow-2xl"
          title="WhatsApp Us"
        >
          <MessageCircle size={28} />
        </a>
      </div>

      {/* Background Scroll Decoration */}
      <div className="absolute bottom-8 right-12 hidden md:flex flex-col items-center gap-4 opacity-30">
        <div className="w-[1px] h-20 bg-gradient-to-t from-white to-transparent"></div>
        <span className="text-[10px] uppercase tracking-[0.4em] text-white [writing-mode:vertical-lr]">Scroll</span>
      </div>
    </section>
  );
}
