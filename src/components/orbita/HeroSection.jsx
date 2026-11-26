import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-x-hidden pt-14">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orbita-gray-light/40 to-white pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 bg-orbita-blue/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-orbita-purple/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full min-w-0 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-orbita-gray-light px-3 py-1.5 rounded-full mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-orbita-blue pulse-soft" />
            <span className="text-xs font-medium text-orbita-gray tracking-wide">Presença digital, automação e clientes</span>
          </div>
          <h1 className="font-inter text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-[-0.03em] mb-6 break-words">
            <span className="text-orbita-black">Seu negócio visível.</span><br />
            <span className="gradient-text-blue">Seu atendimento no ritmo</span><br />
            <span className="text-orbita-black">da demanda.</span>
          </h1>
          <p className="text-orbita-gray text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light">
            A Órbita organiza a presença digital, automatiza o atendimento e cria campanhas para negócios locais e empresas que precisam de mais contatos e vendas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="group inline-flex items-center justify-center gap-2 bg-orbita-black text-white font-medium px-6 py-3.5 rounded-full hover:bg-orbita-black/80 transition-all duration-300 text-sm">
              Pedir orçamento <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a href="#servicos" className="inline-flex items-center justify-center gap-2 bg-orbita-gray-light text-orbita-black font-medium px-6 py-3.5 rounded-full hover:bg-orbita-gray-mid transition-all duration-300 text-sm">
              Ver serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
