import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const modules = [
  { name: 'ShiftSync', desc: 'Workforce synchronization', angle: 0, color: '#0071E3' },
  { name: 'OrbitSchedule', desc: 'Smart scheduling engine', angle: 90, color: '#5AC8FA' },
  { name: 'WFlow', desc: 'Real-time orchestration', angle: 180, color: '#AF52DE' },
  { name: 'ShiftSend', desc: 'Communication automation', angle: 270, color: '#34C759' },
];

export default function WorkforceOSSection() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold text-orbita-gray uppercase tracking-widest mb-8">WorkforceOS</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-inter text-4xl md:text-5xl font-bold tracking-tight leading-tight text-orbita-black mb-6">One operating system.<br /><span className="gradient-text-blue">Four powerful modules.</span></h2>
            <p className="text-orbita-gray text-lg leading-relaxed font-light mb-10">WorkforceOS is the central platform connecting all Órbita modules into a unified operational intelligence layer.</p>
            <Link to="/product" className="inline-flex items-center gap-2 text-orbita-blue font-medium text-sm hover:gap-3 transition-all duration-200">Explore the platform <ArrowRight size={14} /></Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full border border-orbita-blue/10" />
              <div className="absolute inset-[-20px] rounded-full border border-orbita-blue/[0.06]" />
              <div className="absolute inset-[-48px] rounded-full border border-orbita-blue/[0.04]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-orbita-blue to-orbita-blue-glow flex flex-col items-center justify-center text-white shadow-lg shadow-orbita-blue/20">
                  <span className="text-xs font-semibold opacity-70 mb-0.5">Workforce</span>
                  <span className="text-sm font-bold">OS</span>
                </div>
              </div>
              {modules.map((mod, i) => {
                const rad = (mod.angle * Math.PI) / 180;
                const r = i % 2 === 0 ? 130 : 152;
                return (
                  <div key={mod.name} className="absolute flex flex-col items-center" style={{ left: `calc(50% + ${Math.cos(rad) * r}px)`, top: `calc(50% + ${Math.sin(rad) * r}px)`, transform: 'translate(-50%, -50%)' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-bold mb-1 shadow-md" style={{ backgroundColor: mod.color, boxShadow: `0 4px 16px ${mod.color}30` }}>{mod.name.charAt(0)}</div>
                    <span className="text-[9px] font-semibold text-orbita-black whitespace-nowrap">{mod.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
