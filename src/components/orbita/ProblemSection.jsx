const pains = [
  { title: 'Manual processes', desc: 'Teams still rely on spreadsheets and email chains to coordinate critical operations.' },
  { title: 'No real-time visibility', desc: 'Leaders make decisions based on outdated data with no live view of workforce status.' },
  { title: 'Fragmented workflows', desc: 'Disconnected tools create gaps, duplicated work, and coordination failures at scale.' },
  { title: 'Human bottlenecks', desc: 'Every scheduling or planning task depends on a person, creating constant operational friction.' },
];

export default function ProblemSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold text-orbita-gray uppercase tracking-widest mb-8">The Problem</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <h2 className="font-inter text-4xl md:text-5xl font-bold tracking-tight leading-tight text-orbita-black">Critical operations still run on spreadsheets.</h2>
          <p className="text-orbita-gray text-lg leading-relaxed font-light pt-2">As organizations scale, the complexity of coordinating hundreds of employees across rotating shifts, multiple teams, and real-time demands becomes unmanageable with traditional tools.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pains.map((pain, i) => (
            <div key={i} className="bg-orbita-gray-light rounded-2xl p-6 hover:bg-orbita-gray-mid transition-colors duration-300">
              <div className="w-8 h-0.5 bg-orbita-blue mb-4" />
              <h3 className="font-inter text-sm font-semibold text-orbita-black mb-2">{pain.title}</h3>
              <p className="text-xs text-orbita-gray leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
