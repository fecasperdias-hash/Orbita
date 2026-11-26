import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-32 bg-orbita-black overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orbita-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-8">Orçamento</p>
        <h2 className="font-inter text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-white mb-6">Diga o que o negócio precisa agora.</h2>
        <p className="text-white/40 text-lg font-light mb-12 max-w-lg mx-auto">Um contato direto, sem apresentação genérica. A Órbita responde com escopo e prazo.</p>
        <Link to="/contact" className="group inline-flex items-center gap-2 bg-white text-orbita-black font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-200 text-sm">
          Falar com a Órbita <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
