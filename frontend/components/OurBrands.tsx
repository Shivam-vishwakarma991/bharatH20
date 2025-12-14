'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Droplets, Sparkles, Globe, Award } from 'lucide-react';
import Image from 'next/image';
import oneliter from "../app/public/h20oneliter.png"
import liter from "../app/public/250ml.png"
import jar from "../app/public/jar.png"


gsap.registerPlugin(ScrollTrigger);

export default function OurBrands() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bottlesRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Zoom in/out animation for the entire section
      gsap.fromTo(
        sectionRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Parallax effect for bottles
      gsap.to(bottlesRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Text reveal animation
      gsap.from(textRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Continuous subtle zoom pulse
      gsap.to(bottlesRef.current, {
        scale: 1.05,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Floating animation for icons
      gsap.to('.float-icon', {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 py-20 lg:py-24"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div ref={textRef} className="space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300 float-icon" />
              <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Made in India, For the World
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-white leading-tight">
              Introducing
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                Bharat H2O
              </span>
              <br />
              Our Own Brand
            </h2>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-blue-100 leading-relaxed max-w-xl">
              Building an <strong className="text-white">international brand</strong> from India.
              Premium quality water that competes with global standards.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 pt-6 lg:pt-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 float-icon">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base lg:text-lg mb-1">Premium Quality</h3>
                  <p className="text-blue-200 text-xs sm:text-sm">BIS Certified & 7-Stage Purification</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 float-icon" style={{ animationDelay: '0.3s' }}>
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base lg:text-lg mb-1">Global Vision</h3>
                  <p className="text-blue-200 text-xs sm:text-sm">Competing with International Brands</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 float-icon" style={{ animationDelay: '0.6s' }}>
                  <Droplets className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base lg:text-lg mb-1">Complete Range</h3>
                  <p className="text-blue-200 text-xs sm:text-sm">From 250ml to 20L - All Sizes Available</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 float-icon" style={{ animationDelay: '0.9s' }}>
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base lg:text-lg mb-1">Value Pricing</h3>
                  <p className="text-blue-200 text-xs sm:text-sm">Competitive with Leading Brands</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 lg:pt-8">
              <button className="group bg-white text-blue-900 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base">
                <span className="flex items-center justify-center gap-2">
                  Explore Our Range
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="group border-2 border-white text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-2xl transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base">
                Become a Partner
              </button>
            </div>
          </div>

          {/* Right: Bottle showcase with zoom effect */}
          <div ref={bottlesRef} className="relative h-[400px] sm:h-[400px] md:h-[400px] lg:h-[500px] mt-6 lg:mt-0">
            {/* Center large bottle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-400 to-blue-400 rounded-full blur-3xl opacity-30 scale-150" />

                {/* Main bottle placeholder */}
                <div className="mt-10 relative bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl">
                  <div className="aspect-[1/1.5] bg-gradient-to-b from-cyan-200/30 to-blue-300/30 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />

                    {/* Image placeholder - Replace /brands/1liter.png with actual image */}
                    <Image
                      src={oneliter}
                      alt="Bharat H2O 1 Liter Bottle"
                      className="w-full h-full object-contain z-10"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />

                    {/* Fallback content when image is not available */}
                    <div className="text-center z-10" style={{ display: 'none' }}>
                      <Droplets className="w-32 h-32 text-white mx-auto mb-4 drop-shadow-2xl" />
                      <p className="text-white font-bold text-xl">1 Liter</p>
                      {/* <p className="text-blue-200 text-sm mt-2">280 × 650px</p> */}
                      <p className="text-blue-300 text-xs mt-1">Premium Bottle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smaller bottles - floating around */}
            <div className="absolute top-10 left-0 w-32 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="aspect-[1/2.5] bg-gradient-to-b from-cyan-200/20 to-blue-300/20 rounded-xl flex items-center justify-center overflow-hidden">
                  {/* Image placeholder - Replace /brands/250ml.png with actual image */}
                  <Image
                    src={liter}
                    alt="250ml Bottle"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  {/* <div className="text-center" style={{ display: 'none' }}>
                    <Droplets className="w-12 h-12 text-white/80 mx-auto" />
                    <p className="text-white text-xs mt-2">250ml</p>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 right-0 w-40 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="aspect-[1/2] bg-gradient-to-b from-cyan-200/20 to-blue-300/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src={jar}
                    alt="20L Jar"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <div className="text-center" style={{ display: 'none' }}>
                    <Droplets className="w-16 h-16 text-white/80 mx-auto" />
                    <p className="text-white text-xs mt-2">20L Jar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20 xl:mt-32">
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white/90 font-light italic">
            "From local production to global aspiration"
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6 px-4">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-cyan-300" />
            <span className="text-cyan-300 text-xs sm:text-sm font-semibold uppercase tracking-widest text-center">Made with Pride in India</span>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-cyan-300" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  );
}
