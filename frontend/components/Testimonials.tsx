'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Owner, The Garden Bistro",
      location: "Mumbai",
      content: "Bharat H2O transformed our guest experience. The custom-branded bottles add a premium touch to our table settings, and our guests frequently compliment them. The team was professional, responsive, and delivered exactly what they promised.",
      rating: 5,
      image: "RS"
    },
    {
      name: "Priya Mehta",
      role: "General Manager, Grand Palace Hotel",
      location: "Delhi",
      content: "We've been serving Bharat H2O's custom bottles for six months now, and the impact has been remarkable. It's the little details like this that set luxury establishments apart. Their pricing is competitive, and the quality is unmatched.",
      rating: 5,
      image: "PM"
    },
    {
      name: "Arjun Patel",
      role: "Co-founder, Brew & Bean Café",
      location: "Bangalore",
      content: "As a growing café chain, branding consistency matters to us. Bharat H2O delivered beautiful custom bottles that perfectly match our aesthetic. The process was smooth, and they handled everything from design to delivery.",
      rating: 5,
      image: "AP"
    },
    {
      name: "Sanjana Reddy",
      role: "Director, Spice Route Restaurant",
      location: "Hyderabad",
      content: "Our restaurant prides itself on authenticity and attention to detail. Bharat H2O's custom-branded water bottles complement our brand identity perfectly. It's refreshing to work with a supplier who genuinely cares about quality.",
      rating: 5,
      image: "SR"
    }
  ];

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Client Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            What Our Partners
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what restaurant owners, hoteliers,
            and café operators have to say about their experience with Bharat H2O.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 h-full">
                {/* Quote icon */}
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote className="w-20 h-20 text-blue-600" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 relative z-10 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid md:grid-cols-4 gap-8"
        >
          {[
            { value: "20+", label: "Active Partners", sublabel: "Restaurants & Hotels" },
            { value: "98%", label: "Client Satisfaction", sublabel: "Repeat orders" },
            { value: "100K+", label: "Bottles Delivered", sublabel: "And counting" },
            { value: "2-3", label: "Weeks Delivery", sublabel: "Average turnaround" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
