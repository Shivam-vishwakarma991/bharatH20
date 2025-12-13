'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Droplet, Coffee, Building2, Waves } from 'lucide-react';

export default function ProductRange() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      size: "200ml",
      icon: Coffee,
      name: "Café Companion",
      description: "Perfect for coffee shops and quick-service restaurants. Compact and elegant.",
      features: ["Ideal for table service", "Quick consumption", "Space-efficient"],
      color: "from-blue-400 to-cyan-400",
      popular: false
    },
    {
      size: "500ml",
      icon: Droplet,
      name: "Classic Premium",
      description: "Our most popular size. Perfect for restaurants and casual dining establishments.",
      features: ["Standard dining portion", "Versatile use", "Guest favorite"],
      color: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      size: "1 Liter",
      icon: Building2,
      name: "Executive Choice",
      description: "Ideal for hotels, banquet halls, and premium dining experiences.",
      features: ["Extended service", "Premium presentation", "Conference ready"],
      color: "from-blue-600 to-cyan-600",
      popular: false
    },
    {
      size: "20 Liter",
      icon: Waves,
      name: "Bulk Solution",
      description: "Large capacity jars for offices, event venues, and high-volume establishments.",
      features: ["Cost-effective", "Bulk capacity", "Dispenser compatible"],
      color: "from-cyan-600 to-blue-700",
      popular: false
    }
  ];

  return (
    <section id="products" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Product Range
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            The Perfect Size for
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Every Occasion
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate café settings to grand hotel banquets, we offer a comprehensive
            range of bottle sizes to match your specific needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.size}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`relative bg-gradient-to-br ${product.color} rounded-3xl p-8 h-full text-white overflow-hidden ${product.popular ? 'ring-4 ring-amber-400 ring-offset-4' : ''} transform hover:scale-105 transition-all duration-300`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')] opacity-50" />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Size */}
                  <div className="text-5xl font-bold mb-2">{product.size}</div>

                  {/* Name */}
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>

                  {/* Description */}
                  <p className="text-blue-50 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        <span className="text-sm text-blue-50">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative bottle silhouette */}
                <div className="absolute bottom-0 right-0 opacity-10 transform translate-x-8 translate-y-8">
                  <product.icon className="w-48 h-48" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-12 border border-blue-200"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Customizable Branding</div>
              <p className="text-gray-600 text-sm mt-2">Full label, tag, and strip customization</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">Premium</div>
              <div className="text-gray-700 font-medium">Quality Materials</div>
              <p className="text-gray-600 text-sm mt-2">Food-grade, BPA-free bottles</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">Flexible</div>
              <div className="text-gray-700 font-medium">Order Volumes</div>
              <p className="text-gray-600 text-sm mt-2">From small batches to bulk supply</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
