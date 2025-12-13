'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import HowItWorks from '@/components/HowItWorks';
import ProductRange from '@/components/ProductRange';
import Testimonials from '@/components/Testimonials';
import TrustBanner from '@/components/TrustBanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LeadCaptureModal from '@/components/LeadCaptureModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative">
      <Hero onGetStarted={() => setIsModalOpen(true)} />
      <AboutUs />
      <HowItWorks />
      <ProductRange />
      <Testimonials />
      <TrustBanner />
      <Contact />
      <Footer />
      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
