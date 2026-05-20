import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import OrbitalGlobe from './OrbitalGlobe';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-14">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orbita-gray-light/40 to-white pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 bg-orbita-blue/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-orbita-purple/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orbita-gray-light px-3 py-1.5 rounded-full mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-orbita-blue pulse-soft" />
              <span className="text-xs font-medium text-orbita-gray tracking-wide">Operational Intelligence Platform</span>
            </div>
            <h1 className="font-inter text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-[-0.03em] mb-6">
              <span className="text-orbita-black">Operational</span><br />
              <span className="gradient-text-blue">Intelligence</span><br />
              <span className="text-orbita-black">in Motion.</span>
            </h1>
            <p className="text-orbita-gray text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-light">Órbita develops intelligent operational systems that automate, coordinate and optimize complex workforce operations in real time.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/demo" className="group inline-flex items-center justify-center gap-2 bg-orbita-black text-white font-medium px-6 py-3.5 rounded-full hover:bg-orbita-black/80 transition-all duration-300 text-sm">
                Request Demo <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/product" className="inline-flex items-center justify-center gap-2 bg-orbita-gray-light text-orbita-black font-medium px-6 py-3.5 rounded-full hover:bg-orbita-gray-mid transition-all duration-300 text-sm">Explore WorkforceOS</Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <div className="w-[520px] h-[520px] float-animation glow-animation rounded-full">
              <OrbitalGlobe />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
