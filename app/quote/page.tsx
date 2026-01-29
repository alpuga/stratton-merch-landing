'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      timestamp: new Date().toLocaleString(),
      company: formData.get('company'),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      quantity: formData.get('quantity'),
      products: formData.get('products'),
      timeline: formData.get('timeline'),
      details: formData.get('details'),
    };

    try {
      // Google Apps Script web app URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwa-WBVi2zcG9tJMG8PpETsNwxO2q1Zlw1yQgjU0Gz9eI6pbvl4q1I8-3gj0c4WV2YWpg/exec';

      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // With no-cors, we can't read the response, so we assume success
      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#1a1f3a]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#1a1f3a]/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/stratton_word_logo.png"
                alt="Stratton Merch"
                width={150}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* Quote Form Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Request a <span className="text-[#4a9fd8]">Quote</span>
            </h1>
            <p className="text-lg text-white/70">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <div className="space-y-6">
              {/* Company Name */}
              <div>
                <label htmlFor="company" className="block text-white text-sm font-medium mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#4a9fd8] focus:ring-1 focus:ring-[#4a9fd8] transition-colors"
                  placeholder="Your company name"
                />
              </div>

              {/* Contact Info - Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#4a9fd8] focus:ring-1 focus:ring-[#4a9fd8] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#4a9fd8] focus:ring-1 focus:ring-[#4a9fd8] transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#4a9fd8] focus:ring-1 focus:ring-[#4a9fd8] transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Quantity */}
              <div>
                <label htmlFor="quantity" className="block text-white text-sm font-medium mb-2">
                  Estimated Quantity *
                </label>
                <select
                  id="quantity"
                  name="quantity"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#4a9fd8] focus:ring-1 focus:ring-[#4a9fd8] transition-colors"
                >
                  <option value="" className="bg-[#1a1f3a]">Select quantity range</option>
                  <option value="25-50" className="bg-[#1a1f3a]">25-50 items</option>
                  <option value="50-100" className="bg-[#1a1f3a]">50-100 items</option>
                  <option value="100-250" className="bg-[#1a1f3a]">100-250 items</option>
                  <option value="250-500" className="bg-[#1a1f3a]">250-500 items</option>
                  <option value="500+" className="bg-[#1a1f3a]">500+ items</option>
                </select>
              </div>

              {/* Product Type */}
              <div>
                <label htmlFor="products" className="block text-white text-sm font-medium mb-2">
                  What type of products are you interested in?
                </label>
                <input
                  type="text"
                  id="products"
                  name="products"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#4a9fd8] focus:ring-1 focus:ring-[#4a9fd8] transition-colors"
                  placeholder="e.g., T-shirts, hoodies, stickers, mugs"
                />
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className="block text-white text-sm font-medium mb-2">
                  When do you need this?
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#4a9fd8] focus:ring-1 focus:ring-[#4a9fd8] transition-colors"
                >
                  <option value="" className="bg-[#1a1f3a]">Select timeline</option>
                  <option value="asap" className="bg-[#1a1f3a]">ASAP</option>
                  <option value="1-2weeks" className="bg-[#1a1f3a]">1-2 weeks</option>
                  <option value="2-4weeks" className="bg-[#1a1f3a]">2-4 weeks</option>
                  <option value="1-2months" className="bg-[#1a1f3a]">1-2 months</option>
                  <option value="flexible" className="bg-[#1a1f3a]">Flexible</option>
                </select>
              </div>

              {/* Project Details */}
              <div>
                <label htmlFor="details" className="block text-white text-sm font-medium mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#4a9fd8] focus:ring-1 focus:ring-[#4a9fd8] transition-colors resize-none"
                  placeholder="Share any details about your project, design requirements, or questions you have..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#4a9fd8] hover:bg-[#3d8ac2] text-white px-6 py-3 rounded-lg text-base font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-500/50 text-green-200 px-4 py-3 rounded-lg text-center">
                  Thanks! We'll get back to you within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-center">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              {submitStatus === 'idle' && (
                <p className="text-white/50 text-sm text-center">
                  We'll review your request and get back to you within 24 hours.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/50 text-sm">&copy; 2026 Stratton Merch. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
