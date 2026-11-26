import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function OrbitaNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-light border-b border-black/[0.06]' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orbita-blue to-orbita-blue-glow flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-white" />
          </div>
          <span className="font-inter font-semibold text-orbita-black tracking-tight text-lg">Órbita</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[{ label: 'Serviços', href: '/#servicos' }, { label: 'Como funciona', href: '/#processo' }].map((item) => (
            <Link key={item.label} to={item.href} className="text-sm text-orbita-gray hover:text-orbita-black transition-colors duration-200 font-medium">{item.label}</Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact" className="text-sm bg-orbita-black text-white font-medium px-4 py-2 rounded-full hover:bg-orbita-black/80 transition-all duration-200">Pedir orçamento</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-orbita-black">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass-light border-t border-black/[0.06] px-6 py-6 space-y-4">
          {[{ label: 'Serviços', href: '/#servicos' }, { label: 'Como funciona', href: '/#processo' }, { label: 'Contato', href: '/contact' }].map((item) => (
            <Link key={item.label} to={item.href} onClick={() => setOpen(false)} className="block text-sm text-orbita-black font-medium py-1">{item.label}</Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="block text-sm bg-orbita-black text-white font-medium px-4 py-2.5 rounded-full text-center">Pedir orçamento</Link>
        </div>
      )}
    </nav>
  );
}
