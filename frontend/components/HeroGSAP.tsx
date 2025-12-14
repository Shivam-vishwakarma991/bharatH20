"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import bottles from "../app/public/bottles.png"

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onGetStarted: () => void;
}

export default function HeroGSAP({ onGetStarted }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bottlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with split text effect
      if (titleRef.current) {
        const titleChars = titleRef.current.textContent?.split("") || [];
        titleRef.current.innerHTML = titleChars
          .map(
            (char) =>
              `<span class="inline-block">${
                char === " " ? "&nbsp;" : char
              }</span>`
          )
          .join("");

        gsap.from(titleRef.current.children, {
          opacity: 0,
          y: 50,
          rotateX: -90,
          stagger: 0.02,
          duration: 1,
          ease: "back.out(1.7)",
        });
      }

      // Subtitle fade in
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      // Image parallax and 3D effect
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        // Mouse move 3D effect
        const handleMouseMove = (e: MouseEvent) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
          const x = (clientX / innerWidth - 0.5) * 30;
          const y = (clientY / innerHeight - 0.5) * 30;

          gsap.to(imageRef.current, {
            rotateY: x,
            rotateX: -y,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }

      // Floating bottles animation
      if (bottlesRef.current) {
        const bottles = bottlesRef.current.children;
        Array.from(bottles).forEach((bottle, i) => {
          gsap.to(imageRef.current, {
            yPercent: -30,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "+=350%",
              scrub: 3, 
            },
          });

          // Parallax on scroll
          gsap.to(bottle, {
            y: (i + 1) * 50,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "+=200%",
              scrub: 3,
            },
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 pt-20"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
      </div>

      {/* Floating bottles in background */}
      <div
        ref={bottlesRef}
        className="absolute inset-0 pointer-events-none hidden md:block"
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          >
            <svg width="60" height="120" viewBox="0 0 60 120" fill="white">
              <path d="M 20 10 L 18 30 Q 15 40 15 60 Q 15 90 20 100 L 40 100 Q 45 90 45 60 Q 45 40 42 30 L 40 10 Z" />
            </svg>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <Droplets className="w-4 h-4" />
              <span>Trusted by 100+ Premium Establishments</span>
            </div>

            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight perspective-1000"
            >
              Your Brand, Our Water Bottles
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl text-blue-50 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Elevate your restaurant, café, or hotel with custom-branded water
              bottles. We handle everything from design to delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={onGetStarted}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg group shadow-xl hover:shadow-2xl transition-all"
              >
                Get a Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm"
              >
                Learn More
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-white">
                  20+
                </div>
                <div className="text-xs sm:text-sm text-blue-100">Partners</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-white">
                  200ml-1L
                </div>
                <div className="text-xs sm:text-sm text-blue-100">Range</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-white">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-blue-100">Custom</div>
              </div>
            </div>
          </div>

          {/* Right content - 3D Image */}
          <div className="relative order-1 lg:order-2">
            <div
              ref={imageRef}
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Main bottle image with glass effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-blue-400/40 blur-3xl rounded-full scale-90" />

                  {/* Bottle Image */}
                  <div className="relative z-10">
                    <img
                      src="/hero2.png"
                      alt="Bharat H2O Water Bottle"
                      className="w-full h-auto drop-shadow-2xl"
                      style={{
                        filter:
                          "drop-shadow(0 25px 50px rgba(14, 165, 233, 0.4))",
                      }}
                    />
                  </div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-70"
                        style={{
                          left: `${15 + i * 7}%`,
                          top: `${10 + (i % 5) * 18}%`,
                          animation: `float ${
                            2.5 + i * 0.4
                          }s ease-in-out infinite`,
                          animationDelay: `${i * 0.15}s`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Animated rings around bottle */}
                  <div className="absolute inset-0 -z-10">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute inset-0 border-2 border-white/20 rounded-full"
                        style={{
                          animation: `ping ${
                            3 + i
                          }s cubic-bezier(0, 0, 0.2, 1) infinite`,
                          animationDelay: `${i * 1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div
            className="w-1.5 h-1.5 bg-white rounded-full"
            style={{
              animation: "scroll 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(16px);
            opacity: 0;
          }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
