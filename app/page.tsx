import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1f3a] scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#1a1f3a]/95 backdrop-blur-sm z-50 border-b border-white/10">
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
              href="https://cal.com/stratton-merch-4t6mx8/15min"
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
          <div className="flex justify-center mt-10 mb-8">
            <Image
              src="/lion_logo_transparent.png"
              alt="Stratton Merch Logo"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Startup Merch, <span className="text-[#4a9fd8]">Done Right.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            We create custom merchandise that turns your team and customers into brand ambassadors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-[#4a9fd8] hover:bg-[#3d8ac2] text-white px-6 py-3 rounded-lg text-base font-medium transition-colors">
              Request a Quote
            </Link>
            <a
              href="https://cal.com/stratton-merch-4t6mx8/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 hover:border-white text-white px-6 py-3 rounded-lg text-base font-medium transition-colors"
            >
              Book a Call
            </a>
          </div>

          {/* Logo Reel */}
          <div className="mt-20">
            <p className="text-white/60 text-sm uppercase tracking-wider mb-8">
              Trusted by startups backed by
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
              <div className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Image
                  src="/sequoia.png"
                  alt="Sequoia Capital"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Image
                  src="/bcv.webp"
                  alt="Bain Capital Ventures"
                  width={100}
                  height={35}
                  className="object-contain"
                />
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Image
                  src="/greycroft.svg"
                  alt="Greycroft"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Image
                  src="/yc.webp"
                  alt="Y Combinator"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Image
                  src="/a16z.png"
                  alt="Andreessen Horowitz"
                  width={100}
                  height={35}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
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
