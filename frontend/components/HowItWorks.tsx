'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Palette, Tag, Truck } from 'lucide-react';

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: MessageCircle,
      title: "1. Initial Pitch & Consultation",
      description: "We reach out to understand your brand, requirements, and vision. Share your ideas, and we'll guide you through the possibilities.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Palette,
      title: "2. Custom Design Creation",
      description: "Our design team creates mockups tailored to your brand identity. Review, refine, and approve designs that perfectly represent your establishment.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Tag,
      title: "3. Branding & Production",
      description: "We handle the complete branding process—labels, tags, strips, and printing—ensuring premium quality at every stage.",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Truck,
      title: "4. Delivery & Supply",
      description: "Receive your custom-branded bottles on time, ready to impress your guests. We ensure consistent, reliable supply as you grow.",
      color: "from-cyan-600 to-blue-700"
    }
  ];

  return (
    <section id="how-it-works" ref={ref} className="py-2 sm:py-5 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4 sm:mb-6">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From the first conversation to the final delivery, we've streamlined every step
            to make your experience effortless and enjoyable.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10 px-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-blue-100 h-full">
                  {/* Icon with gradient background */}
                  <div className="mb-6 relative">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    {/* Step number badge */}
                    {/* <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div> */}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-blue-400"
                    >
                      <path
                        d="M12 8L20 16L12 24"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-blue-100 rounded-2xl px-8 py-6">
            <p className="text-blue-900 text-lg">
              <span className="font-bold">Average timeline:</span> From consultation to delivery in 2-3 weeks
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
