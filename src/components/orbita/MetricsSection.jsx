const metrics = [
  { value: '700+', label: 'employees coordinated', sub: 'Across active deployments' },
  { value: '18', label: 'operational leaders', sub: 'Managed simultaneously' },
  { value: 'Hours → Minutes', label: 'schedule generation', sub: 'Time savings per cycle' },
  { value: 'Real-Time', label: 'workforce orchestration', sub: 'Zero lag operational data' },
];

export default function MetricsSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold text-orbita-gray uppercase tracking-widest mb-4">Real Operational Impact</p>
        <h2 className="font-inter text-4xl md:text-5xl font-bold tracking-tight text-orbita-black mb-16 max-w-xl">Proven in production. Not just on paper.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div key={i} className="group">
              <p className="font-inter text-4xl md:text-5xl font-bold text-orbita-black mb-2 tracking-tight">{m.value}</p>
              <p className="text-sm font-semibold text-orbita-black mb-1">{m.label}</p>
              <p className="text-xs text-orbita-gray">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
