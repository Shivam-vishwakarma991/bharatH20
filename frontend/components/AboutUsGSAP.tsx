'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, Target, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsGSAP() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.from(titleRef.current.children, {
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
          opacity: 0,
          y: 50,
          stagger: 0.1,
        });
      }

      // Cards stagger animation with 3D effect
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 60%',
              scrub: 1,
            },
            opacity: 0,
            y: 100,
            rotateX: -15,
            z: -100,
            scale: 0.9,
          });

          // Hover animation
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -10,
              scale: 1.05,
              duration: 0.3,
              ease: 'power2.out',
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    <section id="about" ref={sectionRef} className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            About Bharat H2O
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4 sm:mb-6 px-4">
            Transforming Hospitality,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              One Bottle at a Time
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            At Bharat H2O, we believe that every touchpoint with your guests matters.
            That's why we've made it our mission to help cafés, hotels, and restaurants
            replace generic water bottles with custom-branded ones that reflect their unique identity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 px-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="relative group cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 h-full border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden mx-4">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Our Mission
            </h3>
            <p className="text-lg sm:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to empower hospitality businesses with affordable,
              premium custom-branded water solutions. From our first pitch to the final
              delivery, we're with you every step of the way—making the process seamless,
              affordable, and impactful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
