'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FreezeScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);

    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Set initial state - stack all cards
      gsap.set(cards, {
        y: (i) => i * 0,
        scale: 1,
        opacity: 0,
        zIndex: (i) => cards.length - i,
      });

      // Show first card immediately
      gsap.set(cards[0], { opacity: 1 });

      // Create animation for each card
      cards.forEach((card, index) => {
        const isLast = index === cards.length - 1;

        // Each card appears and then gets pushed up
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: () => `top+=${index * 100}vh top`,
            end: () => `top+=${(index + 1) * 100}vh top`,
            scrub: 1,
            markers: false, // Set to true for debugging
          },
        });

        if (index > 0) {
          // Fade in the current card
          tl.fromTo(
            card,
            { opacity: 0, scale: 0.9, rotateY: 15 },
            { opacity: 1, scale: 1, rotateY: 0, duration: 0.5 }
          );
        }

        if (!isLast) {
          // Push the current card up and fade it out
          tl.to(card, {
            y: -150,
            scale: 0.95,
            opacity: 0,
            rotateX: -5,
            duration: 0.5,
          });
        }
      });

      // Pin the entire section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${cards.length * 100}vh`,
        pin: true,
        anticipatePin: 1,
      });

    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const images = [
    {
      url: '/product1.jpeg',
      title: 'Premium Water Bottles',
      desc: 'Custom-branded bottles for restaurants and cafés'
    },
    {
      url: '/product2.jpeg',
      title: 'Elegant Design',
      desc: 'Sophisticated branding that reflects your identity'
    },
    {
      url: '/product3.jpeg',
      title: 'Quality Assured',
      desc: 'Food-grade materials for safe, premium hydration'
    },
    {
      url: '/product4.jpeg',
      title: 'Your Brand, Our Bottles',
      desc: 'Complete customization from labels to packaging'
    },
    {
      url: '/product5.jpeg',
      title: 'Your Brand, Our Bottles',
      desc: 'Complete customization from labels to packaging'
    },
    {
      url: '/product6.jpeg',
      title: 'Your Brand, Our Bottles',
      desc: 'Complete customization from labels to packaging'
    },
    {
      url: '/product7.jpeg',
      title: 'Your Brand, Our Bottles',
      desc: 'Complete customization from labels to packaging'
    },
    {
      url: '/product8.jpeg',
      title: 'Your Brand, Our Bottles',
      desc: 'Complete customization from labels to packaging'
    },
    {
      url: '/product9.jpeg',
      title: 'Your Brand, Our Bottles',
      desc: 'Complete customization from labels to packaging'
    },
    {
      url: '/product10.jpeg',
      title: 'Your Brand, Our Bottles',
      desc: 'Complete customization from labels to packaging'
    },
    {
      url: '/product11.jpeg',
      title: 'Your Brand, Our Bottles',
      desc: 'Complete customization from labels to packaging'
    },
    {
      url: '/product12.jpeg',
      title: 'Your Brand, Our Bottles',
      desc: 'Complete customization from labels to packaging'
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div
          className="relative w-full max-w-5xl h-[75vh] sm:h-[80vh]"
          style={{ perspective: '2000px' }}
        >
          {images.map((image, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform, opacity',
              }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                  {image.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-blue-200 max-w-2xl">
                  {image.desc}
                </p>
              </div>

              {/* Card number indicator */}
              {/* <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/10 backdrop-blur-md rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">{i + 1}</span>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm hidden md:block">
        <div className="flex flex-col items-center gap-2">
          <span>Scroll to explore</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div> */}
    </section>
  );
}
