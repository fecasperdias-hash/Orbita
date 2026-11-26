import { Link } from 'react-router-dom';

const shortcuts = [
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Como funciona', href: '/#processo' },
  { label: 'Orçamento', href: '/contact' },
];

export default function OrbitaFooter() {
  return (
    <footer className="bg-orbita-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orbita-blue to-orbita-blue-glow flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              <span className="font-inter font-semibold text-lg tracking-tight">Órbita</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">Presença digital, atendimento automatizado e campanhas para negócios locais e empresas.</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Atalhos</p>
            <ul className="space-y-3">
              {shortcuts.map((item) => (
                <li key={item.label}><Link to={item.href} className="text-sm text-white/50 hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Contato</p>
            <a href="mailto:hello@orbita.io" className="text-sm text-white/50 hover:text-white transition-colors">hello@orbita.io</a>
            <p className="text-sm text-white/40 mt-3">Resposta em até 24 horas úteis.</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-white/30">© 2026 Órbita. Todos os direitos reservados.</p>
          <p className="text-xs text-white/30">Foro Regional da Zona Sul de São Paulo/SP</p>
        </div>
      </div>
    </footer>
  );
}
