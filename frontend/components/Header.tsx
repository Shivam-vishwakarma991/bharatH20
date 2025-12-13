'use client';

import { useState, useEffect } from 'react';
import { Droplets, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import logo from "../app/public/Logo.png"
interface HeaderProps {
  onGetStarted: () => void;
}

export default function Header({ onGetStarted }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Products', href: '#products' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
  <motion.a
  href="#"
  className="flex items-center gap-3 group"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={(e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }}
>
  {/* Icon background (optional – keep or remove) */}
  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
    <Droplets className="w-6 h-6 text-white" />
  </div>

  {/* Logo */}
  <div className="relative h-10 w-[140px]">
    <Image
      src={logo}
      alt="Bharat H2O"
      fill
      className={`object-contain transition-all ${
        isScrolled ? "brightness-100" : "brightness-125"
      }`}
      priority
    />
  </div>
</motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isScrolled
                      ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden lg:block"
            >
              <Button
                onClick={onGetStarted}
                className={`${
                  isScrolled
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                } shadow-lg`}
              >
                Get Started
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                      <Droplets className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Bharat H2O</div>
                      <div className="text-xs text-blue-600">Premium Water</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 text-gray-900"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.href);
                        }}
                        className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors"
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t">
                  <Button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onGetStarted();
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    size="lg"
                  >
                    Get Started
                  </Button>
                  <div className="mt-4 text-center">
                    <a href="tel:+919876543210" className="text-sm text-gray-600 hover:text-blue-600">
                      📞 +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
