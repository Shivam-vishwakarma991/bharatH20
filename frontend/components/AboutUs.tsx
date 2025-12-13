'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Target, Sparkles } from 'lucide-react';

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "We source only the highest quality bottles and materials, ensuring your brand is represented with excellence."
    },
    {
      icon: Users,
      title: "Trusted Partner",
      description: "Serving 20+ renowned restaurants, cafés, and hotels with reliable, on-time delivery and exceptional service."
    },
    {
      icon: Target,
      title: "Custom Branding",
      description: "From elegant labels to custom tags and strips, we bring your unique brand identity to life on every bottle."
    },
    {
      icon: Sparkles,
      title: "Hassle-Free Process",
      description: "We handle everything—pitching, design, branding, and supply—so you can focus on what you do best."
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            About Bharat H2O
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Transforming Hospitality,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              One Bottle at a Time
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Bharat H2O, we believe that every touchpoint with your guests matters.
            That's why we've made it our mission to help cafés, hotels, and restaurants
            replace generic water bottles with custom-branded ones that reflect their unique identity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 h-full border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Mission
            </h3>
            <p className="text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to empower hospitality businesses with affordable,
              premium custom-branded water solutions. From our first pitch to the final
              delivery, we're with you every step of the way—making the process seamless,
              affordable, and impactful.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
