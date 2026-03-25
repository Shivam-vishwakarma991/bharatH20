'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Product {
  url: string;
  title: string;
  desc: string;
  details: string;
  highlights: string[];
}

const products: Product[] = [
  {
    url: '/product1.jpeg',
    title: 'Premium Water Bottles',
    desc: 'Custom-branded bottles for restaurants and cafés',
    details: 'Our flagship 1-liter premium glass bottles with custom embossing. Perfect for fine dining and luxury hospitality.',
    highlights: ['Custom Embossing', 'Luxury Glass', 'BPA Free']
  },
  {
    url: '/product2.jpeg',
    title: 'Elegant Design',
    desc: 'Sophisticated branding that reflects your identity',
    details: 'Clean, minimalist aesthetics that blend seamlessly with any table setting while promoting your brand subtly.',
    highlights: ['Minimalist Finish', 'High Definition Print']
  },
  {
    url: '/product3.jpeg',
    title: 'Quality Assured',
    desc: 'Food-grade materials for safe, premium hydration',
    details: 'Strict quality control ensuring every bottle meets international food safety standards for long-term use.',
    highlights: ['Food Grade Materials', 'Quality Tested']
  },
  {
    url: '/product4.jpeg',
    title: 'Total Customization',
    desc: 'Complete control from labels to packaging',
    details: 'We offer full customization of yours bottles including label design, cap colors, and custom packaging solutions.',
    highlights: ['Label Design', 'Custom Caps', 'Eco Packaging']
  },
  {
    url: '/product5.jpeg',
    title: 'Sustainable Choice',
    desc: 'Eco-friendly solutions for your business',
    details: 'Reduce your carbon footprint with our reusable glass solutions and recycled material options.',
    highlights: ['Zero Waste', 'Eco-Friendly', 'Reusable']
  },
  {
    url: '/product6.jpeg',
    title: 'Hospitality Favorite',
    desc: 'Preferred by top hotels and resorts',
    details: 'Designed to withstand the rigors of high-traffic hospitality environments while maintaining a premium look.',
    highlights: ['Durable Glass', 'Stackable Design']
  },
  {
    url: '/product7.jpeg',
    title: 'Modern Hydration',
    desc: 'Sleek bottles for modern environments',
    details: 'Combining form and function, these bottles are perfect for modern office spaces and wellness centers.',
    highlights: ['Ergonomic Grip', 'Modern Aesthetic']
  },
  {
    url: '/product8.jpeg',
    title: 'Artisanal Finish',
    desc: 'Hand-crafted feel for unique branding',
    details: 'Special matte finishes and textures that provide a superior tactile experience for your customers.',
    highlights: ['Matte Finish', 'Textured Surface']
  },
  {
    url: '/product9.jpeg',
    title: 'Event Excellence',
    desc: 'The perfect companion for your corporate events',
    details: 'Stand out at your next event with custom-labeled bottles that keep your brand in every guest\'s hand.',
    highlights: ['Event Branding', 'Quick Turnaround']
  },
  {
    url: '/product10.jpeg',
    title: 'Pure Refinement',
    desc: 'Crystal clear glass for pure water',
    details: 'Ultra-clear flint glass that showcases the purity of your water source with uncompromising clarity.',
    highlights: ['Ultra-Clear Glass', 'Prestige Look']
  },
  {
    url: '/product11.jpeg',
    title: 'Vibrant Colors',
    desc: 'Stand out with bold branding colors',
    details: 'Advanced printing technology allowing for vibrant, full-color reproduction of your logo and brand assets.',
    highlights: ['Full Color Print', 'Fade Resistant']
  },
  {
    url: '/product12.jpeg',
    title: 'Iconic Packaging',
    desc: 'Unforgettable first impressions',
    details: 'Our premium packaging options ensure your brand is perceived as premium from the moment of delivery.',
    highlights: ['Premium Unboxing', 'Eco-Ink Printing']
  },
];

export default function FreezeScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!scrollTrackRef.current || !containerRef.current) return;

      const scrollTween = gsap.to(scrollTrackRef.current, {
        x: () => -(scrollTrackRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + (scrollTrackRef.current!.scrollWidth),
          invalidateOnRefresh: true,
        }
      });

      // Image Parallax tied to Horizontal Scroll
      gsap.utils.toArray<HTMLElement>('.img-parallax').forEach(img => {
        gsap.fromTo(img,
          { y: "-15%" },
          {
            y: "15%",
            ease: "none",
            scrollTrigger: {
              trigger: img.closest('.product-card'),
              containerAnimation: scrollTween,
              start: "left right",
              end: "right left",
              scrub: true
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-slate-50" id="products">
      {/* Pinned Container - now uses full screen height for better pinning feel */}
      <div 
        ref={containerRef} 
        className="relative h-screen w-full overflow-hidden flex flex-col pt-24 md:pt-32"
      >
        {/* Heading stuff now inside the pinned container so it stays visible/pinned or scrolls slightly */}
        <div className="container mx-auto px-6 md:px-12 mb-8 md:mb-12">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="md:text-left"
          >
            <span className="text-blue-600 font-semibold text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3 block">
              Product Showcase
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Premium Collection</span>
            </h2>
          </motion.div>
        </div>

        {/* Horizontal Moving Track - Centered vertically within remaining space */}
        <div className="flex-1 flex flex-col justify-center min-h-0">
          <div ref={scrollTrackRef} className="flex gap-6 md:gap-10 px-6 md:px-12 w-max pr-[25vw] md:pr-[45vw] items-center">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="product-card group w-[80vw] sm:w-[50vw] md:w-[32vw] h-[50vh] md:h-[60vh] rounded-[2rem] overflow-hidden relative shrink-0 cursor-pointer shadow-2xl transition-all duration-500 hover:shadow-blue-200/50"
                onClick={() => setActiveProduct(product)}
              >
                {/* Image Container with Parallax */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-[130%] -top-[15%] relative"
                  >
                    <img
                      src={product.url}
                      alt={product.title}
                      className="img-parallax w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                    />
                  </motion.div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 top-[40%] bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-8 md:p-10 pointer-events-none transition-all duration-500 group-hover:from-blue-950 group-hover:via-blue-900/40">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-slate-200 text-xs md:text-sm font-medium mb-4 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    {product.desc}
                  </p>
                  <div className="flex items-center gap-2 text-blue-400 font-black text-[10px] uppercase tracking-widest pt-4 border-t border-white/10">
                    View Specs <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Extra CTA section moved outside the pinned container so it appears as user finishes scroll */}
      <div className="bg-slate-50 py-8 md:py-12 text-center border-t border-slate-100">
        <a 
          href={`https://wa.me/917898595612?text=${encodeURIComponent(`Hi Bharat H2O! I'm interested in customizing water bottles for my business.\n\nPlease find my details below:\n\nName:\nBusiness Name:\nLocation:\nType of Customization:`)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300"
        >
          Customize For Your Brand
          <ExternalLink size={18} />
        </a>
      </div>

      <AnimatePresence>
        {activeProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-950/80 backdrop-blur-md" onClick={() => setActiveProduct(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="bg-white rounded-[2.5rem] w-full max-w-3xl text-slate-900 shadow-2xl relative overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveProduct(null)} 
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white md:text-slate-400 md:hover:text-slate-900 transition-colors z-[110]"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                <img src={activeProduct.url} alt={activeProduct.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                <div className="mb-4">
                  <span className="text-blue-600 text-[10px] uppercase tracking-[0.2em] font-black bg-blue-50 px-4 py-1.5 rounded-full">
                    Product Details
                  </span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 tracking-tight leading-tight">{activeProduct.title}</h3>
                <p className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 leading-relaxed font-medium">
                  {activeProduct.details}
                </p>

                <div className="space-y-3 mb-8 md:mb-10">
                  <h4 className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-3">Key Features</h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {activeProduct.highlights.map(h => (
                      <span key={h} className="bg-slate-50 text-slate-700 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl border border-slate-100 text-[11px] md:text-sm font-bold flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/917898595612?text=${encodeURIComponent(`Hi Bharat H2O! I'm interested in requesting a quote for: *${activeProduct.title}*.\n\nPlease find my details below:\n\nName:\nBusiness Name:\nEstimated Monthly Quantity:\nLocation:\nSpecific Requirements:`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-3 w-full bg-slate-900 text-white py-4 md:py-5 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/10"
                >
                  Request Quote on WhatsApp
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}


