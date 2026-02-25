'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const words = ["Culture", "Mission", "Identity", "Vibe"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500); // Change word every 2.5 seconds

    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <div className="min-h-screen bg-gray-50 scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Image
                src="/stratton_word_logo.png"
                alt="Stratton Merch"
                width={150}
                height={40}
                className="object-contain"
              />
            </div>
            <a
              href="https://meetings-na2.hubspot.com/alex-puga"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4a9fd8] hover:bg-[#3d8ac2] text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="p-25 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mt-25 mb-20">
            <Image
              src="/StrattonMerchGorilla.png"
              alt="Stratton Merch Logo"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Merch is
            <span className="inline-block ml-3 md:ml-4 text-[#4a9fd8] overflow-visible">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[currentWordIndex]}
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  exit={{ clipPath: "inset(0 0 0 100%)" }}
                  transition={{ duration: 0.5 }}
                  className="inline-block pb-2"
                >
                  {words[currentWordIndex]}.
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            We create custom merchandise that turns your team and customers into brand ambassadors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-[#4a9fd8] hover:bg-[#3d8ac2] text-white px-6 py-3 rounded-lg text-base font-medium transition-colors">
              Request a Quote
            </Link>
            <a
              href="https://meetings-na2.hubspot.com/alex-puga"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 hover:border-gray-900 text-gray-900 px-6 py-3 rounded-lg text-base font-medium transition-colors"
            >
              Book a Call
            </a>
          </div>

          {/* Logo Reel */}
          <div className="mt-20 py-16 px-4">
            <p className="text-gray-600 text-sm uppercase tracking-wider mb-8">
              Shop Featured Brands
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
              <div className="hover:scale-105 transition-transform">
                <Image
                  src="/NIKE.svg"
                  alt="Nike"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="hover:scale-105 transition-transform">
                <Image
                  src="/ADIDAS.svg"
                  alt="Adidas"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="hover:scale-105 transition-transform">
                <Image
                  src="/PATAGONIA.svg"
                  alt="Patagonia"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="hover:scale-105 transition-transform">
                <Image
                  src="/THENORTHFACE.svg"
                  alt="The North Face"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="hover:scale-105 transition-transform">
                <Image
                  src="/YETI.svg"
                  alt="Yeti"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="hover:scale-105 transition-transform">
                <Image
                  src="/CARHARTT.svg"
                  alt="Carhartt"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="hover:scale-105 transition-transform">
                <Image
                  src="/COLUMBIA.svg"
                  alt="Columbia"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="hover:scale-105 transition-transform">
                <Image
                  src="/CHAMPION.svg"
                  alt="Champion"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="hover:scale-105 transition-transform">
                <Image
                  src="/STANLEY.svg"
                  alt="Stanley"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="hover:scale-105 transition-transform">
                <Image
                  src="/CALLAWAY.svg"
                  alt="Callaway"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="hover:scale-105 transition-transform">
                <Image
                  src="/TITLEIST.svg"
                  alt="Titleist"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="hover:scale-105 transition-transform">
                <Image
                  src="/RUSSELL.svg"
                  alt="Russell"
                  width={90}
                  height={30}
                  className="object-contain"
                />
              </div>
              <div className="hover:scale-105 transition-transform">
                <Image
                  src="/TOMMYBAHAMA.svg"
                  alt="Tommy Bahama"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="hover:scale-105 transition-transform">
                <Image
                  src="/BROOKSBROTHERS.svg"
                  alt="Brooks Brothers"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="hover:scale-105 transition-transform">
                <Image
                  src="/EDDIEBAUER.svg"
                  alt="Eddie Bauer"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="hover:scale-105 transition-transform">
                <Image
                  src="/AMERICANAPPAREL.svg"
                  alt="American Apparel"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">&copy; 2026 Stratton Merch. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
