'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, ArrowRight, CheckCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    estimatedVolume: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('businessName', formData.businessName);
    formDataToSend.append('estimatedVolume', formData.estimatedVolume);

    try {
      const response = await fetch('https://getform.io/f/c69d69ae-3a62-436c-b763-27a51f60b9db', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setStep(3);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const resetAndClose = () => {
    setTimeout(() => {
      setStep(1);
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        estimatedVolume: ''
      });
    }, 300);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={resetAndClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        <div className="relative">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')] opacity-50" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Droplets className="w-7 h-7 text-white" />
                </div>
                <div>
                  <DialogTitle className="text-2xl font-bold text-white">
                    {step === 3 ? "You're All Set!" : "Get Your Free Quote"}
                  </DialogTitle>
                  <DialogDescription className="text-blue-100">
                    {step === 3
                      ? "We'll be in touch within 24 hours"
                      : "Start your custom branding journey today"
                    }
                  </DialogDescription>
                </div>
              </div>

              {/* Progress indicator */}
              {step < 3 && (
                <div className="flex gap-2 mt-6">
                  <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-white' : 'bg-white/30'}`} />
                  <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-white' : 'bg-white/30'}`} />
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-8 bg-white">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Tell us about yourself
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="modal-name">Full Name *</Label>
                      <Input
                        id="modal-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="modal-email">Email Address *</Label>
                      <Input
                        id="modal-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="modal-phone">Phone Number *</Label>
                      <Input
                        id="modal-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <Button
                    onClick={() => setStep(2)}
                    disabled={!formData.name || !formData.email || !formData.phone}
                    className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
                    size="lg"
                  >
                    Continue
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    About your business
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="modal-business">Business Name *</Label>
                      <Input
                        id="modal-business"
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="Your restaurant, café, or hotel name"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="modal-volume">Estimated Monthly Volume</Label>
                      <select
                        id="modal-volume"
                        value={formData.estimatedVolume}
                        onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                        className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select volume range</option>
                        <option value="100-500">100-500 bottles</option>
                        <option value="500-1000">500-1,000 bottles</option>
                        <option value="1000-5000">1,000-5,000 bottles</option>
                        <option value="5000+">5,000+ bottles</option>
                      </select>
                    </div>

                    {/* Benefits showcase */}
                    <div className="bg-blue-50 rounded-lg p-4 mt-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What you'll get:</h4>
                      <ul className="space-y-2">
                        {[
                          'Free custom design mockup',
                          'Competitive pricing quote',
                          'Sample bottle (for bulk orders)',
                          'Dedicated account manager'
                        ].map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <Button
                        type="button"
                        onClick={() => setStep(1)}
                        variant="outline"
                        className="flex-1"
                        size="lg"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        disabled={!formData.businessName}
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                        size="lg"
                      >
                        Get Free Quote
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Thank You, {formData.name.split(' ')[0]}!
                  </h3>

                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    We've received your request for <strong>{formData.businessName}</strong>.
                    Our team will review your requirements and send you a custom quote within 24 hours.
                  </p>

                  <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What happens next?</h4>
                    <div className="space-y-3 text-left">
                      <div className="flex gap-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                        <p className="text-sm text-gray-700">Our team reviews your requirements</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                        <p className="text-sm text-gray-700">You receive a custom quote and design mockup</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                        <p className="text-sm text-gray-700">We schedule a consultation call</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={resetAndClose}
                    className="bg-blue-600 hover:bg-blue-700"
                    size="lg"
                  >
                    Done
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
