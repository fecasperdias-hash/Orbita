export default function ApproachSection() {
  return (
    <section className="py-32 bg-orbita-gray-light">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold text-orbita-gray uppercase tracking-widest mb-8">The Órbita Approach</p>
        <div className="max-w-4xl mb-20">
          <h2 className="font-inter text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-orbita-black">
            We don't simply automate tasks.<br />
            <span className="gradient-text-purple">We design intelligent operational ecosystems.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { num: '01', title: 'Systemic thinking', desc: 'Every solution is designed as a connected system, not a collection of isolated features.', color: 'from-orbita-blue/10 to-transparent' },
            { num: '02', title: 'Real-time intelligence', desc: 'Decisions are informed by live operational data. No delays, no guesswork, no outdated reports.', color: 'from-orbita-blue-glow/10 to-transparent' },
            { num: '03', title: 'Built for scale', desc: 'From 50 to 5,000 employees — Órbita systems perform with the same precision and reliability.', color: 'from-orbita-purple/10 to-transparent' },
          ].map((p, i) => (
            <div key={i} className={`bg-gradient-to-b ${p.color} bg-white rounded-2xl p-8 border border-black/[0.05]`}>
              <span className="text-xs font-semibold text-orbita-gray mb-6 block">{p.num}</span>
              <h3 className="font-inter text-lg font-semibold text-orbita-black mb-3">{p.title}</h3>
              <p className="text-sm text-orbita-gray leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
