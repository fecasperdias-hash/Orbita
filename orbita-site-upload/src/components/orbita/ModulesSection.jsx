const modules = [
  { name: 'ShiftSync', tagline: 'Workforce synchronization.', desc: 'Cross-reference schedules across all teams, identify overlaps, conflicts and coordination windows in real time.', color: '#0071E3', bg: '#EFF6FF' },
  { name: 'OrbitSchedule', tagline: 'Smart scheduling engine.', desc: 'AI-assisted schedule optimization that automatically generates the most efficient team configurations.', color: '#5AC8FA', bg: '#F0FAFF' },
  { name: 'WFlow', tagline: 'Real-time workforce orchestration.', desc: 'Coordinate complex operational workflows across hundreds of employees with zero manual overhead.', color: '#AF52DE', bg: '#FAF0FF' },
  { name: 'ShiftSend', tagline: 'Operational communication automation.', desc: 'Automate shift notifications, schedule updates, and operational alerts to the right people at the right time.', color: '#34C759', bg: '#F0FFF4' },
];

export default function ModulesSection() {
  return (
    <section id="modules" className="py-32 bg-orbita-gray-light">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold text-orbita-gray uppercase tracking-widest mb-4">Modules</p>
        <h2 className="font-inter text-4xl md:text-5xl font-bold tracking-tight text-orbita-black mb-12">Every module.<br />One ecosystem.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((mod) => (
            <div key={mod.name} className="bg-white rounded-2xl p-8 border border-black/[0.04] hover:border-black/[0.08] hover:shadow-sm transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold" style={{ backgroundColor: mod.bg, color: mod.color }}>{mod.name.charAt(0)}</div>
                <div>
                  <h3 className="font-inter font-semibold text-orbita-black text-sm">{mod.name}</h3>
                  <p className="text-xs" style={{ color: mod.color }}>{mod.tagline}</p>
                </div>
              </div>
              <p className="text-sm text-orbita-gray leading-relaxed">{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
