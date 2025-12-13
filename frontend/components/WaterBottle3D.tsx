'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function WaterBottle3D() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={ref} className="relative w-full h-full flex items-center justify-center">
      <motion.div
        style={{
          rotateY,
          y,
        }}
        className="relative w-64 h-96 perspective-1000"
      >
        {/* Water Bottle SVG */}
        <svg
          viewBox="0 0 200 400"
          className="w-full h-full drop-shadow-2xl"
          style={{ filter: 'drop-shadow(0 20px 40px rgba(0, 150, 255, 0.3))' }}
        >
          {/* Bottle cap */}
          <defs>
            <linearGradient id="capGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#0EA5E9', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#0284C7', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="bottleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#E0F2FE', stopOpacity: 0.9 }} />
              <stop offset="50%" style={{ stopColor: '#BAE6FD', stopOpacity: 0.95 }} />
              <stop offset="100%" style={{ stopColor: '#7DD3FC', stopOpacity: 0.9 }} />
            </linearGradient>
            <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#0EA5E9', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#0284C7', stopOpacity: 0.8 }} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Cap */}
          <rect x="70" y="10" width="60" height="30" rx="5" fill="url(#capGradient)" />
          <rect x="75" y="35" width="50" height="10" rx="3" fill="url(#capGradient)" />

          {/* Neck */}
          <path
            d="M 80 45 L 75 70 L 125 70 L 120 45 Z"
            fill="url(#bottleGradient)"
            stroke="#0284C7"
            strokeWidth="1"
          />

          {/* Main bottle body */}
          <path
            d="M 75 70 Q 60 100 65 180 Q 65 280 65 320 Q 65 360 80 380 L 120 380 Q 135 360 135 320 Q 135 280 135 180 Q 140 100 125 70 Z"
            fill="url(#bottleGradient)"
            stroke="#0284C7"
            strokeWidth="2"
            opacity="0.95"
          />

          {/* Water inside */}
          <motion.path
            d="M 75 200 Q 65 250 65 300 Q 65 340 80 360 L 120 360 Q 135 340 135 300 Q 135 250 125 200 Z"
            fill="url(#waterGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Highlights and reflections */}
          <ellipse cx="90" cy="120" rx="8" ry="25" fill="white" opacity="0.4" />
          <ellipse cx="110" cy="180" rx="6" ry="20" fill="white" opacity="0.3" />

          {/* Label area */}
          <rect
            x="70"
            y="150"
            width="60"
            height="80"
            rx="5"
            fill="white"
            opacity="0.8"
            stroke="#0284C7"
            strokeWidth="1"
          />

          {/* Brand placeholder */}
          <text x="100" y="180" textAnchor="middle" fontSize="12" fill="#0369A1" fontWeight="bold">
            Bharat
          </text>
          <text x="100" y="200" textAnchor="middle" fontSize="16" fill="#0284C7" fontWeight="bold">
            H2O
          </text>
          <text x="100" y="215" textAnchor="middle" fontSize="8" fill="#0369A1">
            Premium Water
          </text>
        </svg>

        {/* Floating animation */}
        <motion.div
          className="absolute inset-0"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Water drops animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-40"
            initial={{
              x: Math.random() * 100 + '%',
              y: -20,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: '100vh',
              opacity: [0.4, 0.2, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}
