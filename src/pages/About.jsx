import OrbitaNavbar from '@/components/orbita/OrbitaNavbar';
import OrbitaFooter from '@/components/orbita/OrbitaFooter';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <OrbitaNavbar />
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-orbita-gray uppercase tracking-widest mb-8">About</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <h1 className="font-inter text-5xl md:text-6xl font-bold tracking-tight leading-tight text-orbita-black">Built from the <span className="gradient-text-blue">inside out.</span></h1>
            <div className="pt-2">
              <p className="text-orbita-gray text-xl leading-relaxed font-light mb-6">Órbita was born from a real operational challenge: coordinating 700+ employees across 18 team managers. No existing tool solved it. So we built our own.</p>
              <p className="text-orbita-gray text-lg leading-relaxed font-light">Today, Órbita is evolving into a full enterprise workforce intelligence platform.</p>
            </div>
          </div>
          <div className="bg-orbita-gray-light rounded-3xl p-12 mb-16">
            <blockquote className="font-inter text-2xl md:text-3xl font-medium tracking-tight text-orbita-black leading-relaxed mb-6">"We spent dozens of hours every month manually synchronizing schedules. There had to be a better way."</blockquote>
            <p className="text-sm text-orbita-gray">Órbita founding team · 2025</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ title: 'Operational First', desc: 'Every decision starts with a real operational problem.' }, { title: 'Enterprise Rigor', desc: 'We build for scale, reliability, and security from day one.' }, { title: 'Radical Clarity', desc: 'Complex operations deserve simple interfaces.' }].map((v, i) => (
              <div key={i} className="bg-orbita-gray-light rounded-2xl p-8">
                <span className="text-3xl font-bold text-orbita-gray/20 block mb-4">0{i + 1}</span>
                <h3 className="font-inter text-base font-semibold text-orbita-black mb-2">{v.title}</h3>
                <p className="text-sm text-orbita-gray leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-orbita-black text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-inter text-4xl font-bold text-white mb-4 tracking-tight">Join us in building the future of <span className="gradient-text-blue">workforce intelligence.</span></h2>
          <p className="text-white/40 mb-8">Ready to see Órbita in action?</p>
          <Link to="/demo" className="inline-flex items-center gap-2 bg-white text-orbita-black font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-all text-sm">Schedule a Demo <ArrowRight size={14} /></Link>
        </div>
      </section>
      <OrbitaFooter />
    </div>
  );
}
