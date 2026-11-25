import { Link } from 'react-router-dom';

export default function OrbitaFooter() {
  return (
    <footer className="bg-orbita-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orbita-blue to-orbita-blue-glow flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              <span className="font-inter font-semibold text-lg tracking-tight">Órbita</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">Intelligent operational systems that automate, coordinate and optimize complex workforce operations in real time.</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Platform</p>
            <ul className="space-y-3">
              {[{ label: 'WorkforceOS', href: '/product' }, { label: 'Modules', href: '/#modules' }, { label: 'Roadmap', href: '/product' }].map((item) => (
                <li key={item.label}><Link to={item.href} className="text-sm text-white/50 hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Company</p>
            <ul className="space-y-3">
              {[{ label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }, { label: 'Request Demo', href: '/demo' }].map((item) => (
                <li key={item.label}><Link to={item.href} className="text-sm text-white/50 hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">© 2025 Órbita. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy', 'Terms'].map((item) => (
              <Link key={item} to="/" className="text-xs text-white/30 hover:text-white/60 transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
