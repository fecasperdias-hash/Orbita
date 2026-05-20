import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-40 bg-orbita-black overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orbita-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-8">Get Started</p>
        <h2 className="font-inter text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-white mb-6">Build smarter operations.</h2>
        <p className="text-white/40 text-lg font-light mb-12 max-w-lg mx-auto">Join the teams already using Órbita to eliminate operational overhead and gain total workforce intelligence.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/demo" className="group inline-flex items-center gap-2 bg-white text-orbita-black font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-200 text-sm">
            Request Demo <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 border border-white/10 text-white/60 hover:text-white hover:border-white/20 font-medium px-8 py-4 rounded-full transition-all duration-200 text-sm">Contact Sales</Link>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          {['700+ employees managed', 'Production-proven', 'Enterprise-grade'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-orbita-blue-glow" />
              <span className="text-xs text-white/30">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
