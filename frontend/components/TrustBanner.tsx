'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Shield, Clock, ThumbsUp } from 'lucide-react';

export default function TrustBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    "The Garden Bistro", "Grand Palace Hotel", "Brew & Bean Café",
    "Spice Route Restaurant", "Ocean View Resort", "Café Milano",
    "Heritage Grand", "The Rooftop Lounge", "Fusion Kitchen",
    "Lakeside Restaurant", "Urban Brew", "Classic Dine",
    "Skyline Hotel", "Artisan Café", "Royal Banquet Hall",
    "Coastal Kitchen", "Metropolitan Bistro", "Garden Terrace",
    "Plaza Restaurant", "Summit Hotel"
  ];

  const trustFactors = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Food-grade certified bottles"
    },
    {
      icon: Shield,
      title: "Trusted by 20+",
      description: "Leading establishments"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Reliable supply chain"
    },
    {
      icon: ThumbsUp,
      title: "100% Satisfaction",
      description: "Guaranteed results"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Trusted Partners
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Serving India's
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Premier Establishments
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From boutique cafés to luxury hotels, we're proud to partner with
            businesses that value quality and brand excellence.
          </p>
        </motion.div>

        {/* Trust factors */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={factor.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <factor.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{factor.title}</h3>
              <p className="text-sm text-gray-600">{factor.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Partner logos section - scrolling marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-200">
            <h3 className="text-center text-gray-900 font-bold text-lg mb-8">
              Proud to Serve 20+ Premium Brands
            </h3>

            {/* Scrolling text animation */}
            <div className="relative overflow-hidden">
              <div className="flex gap-8 animate-scroll">
                {[...partners, ...partners].map((partner, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200 min-w-[200px] text-center"
                  >
                    <span className="text-gray-700 font-medium whitespace-nowrap">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call-to-action banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Join Our Growing Family?
            </h3>
            <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
              Join 20+ successful establishments that trust Bharat H2O for their
              custom-branded water solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                Get Your Free Quote
              </button>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
