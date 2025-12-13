'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroGSAP from '@/components/HeroGSAP';
import AboutUsGSAP from '@/components/AboutUsGSAP';
import FreezeScroll from '@/components/FreezeScroll';
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
      <Header onGetStarted={() => setIsModalOpen(true)} />
      <HeroGSAP onGetStarted={() => setIsModalOpen(true)} />
      <FreezeScroll />
      <AboutUsGSAP />
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
