const steps = [
  { num: '01', title: 'Contato inicial', desc: 'Você conta o objetivo e o canal em que o cliente já procura o negócio.' },
  { num: '02', title: <><em>Briefing</em></>, desc: 'Alinhamos oferta, prazo, peças e o resultado que o orçamento precisa entregar.' },
  { num: '03', title: 'Execução', desc: 'A Órbita produz, configura e publica o que foi combinado, com revisão antes de ir ao ar.' },
  { num: '04', title: 'Acompanhamento', desc: 'Você recebe o que foi feito e os próximos ajustes, sem perder o fio da operação.' },
];

export default function ApproachSection() {
  return (
    <section id="processo" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold text-orbita-gray uppercase tracking-widest mb-4">Como funciona</p>
        <h2 className="font-inter text-4xl md:text-5xl font-bold tracking-tight text-orbita-black mb-12 max-w-2xl">Do primeiro contato ao acompanhamento.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div key={step.num} className="bg-orbita-gray-light rounded-2xl p-8">
              <span className="text-xs font-semibold text-orbita-gray mb-6 block">{step.num}</span>
              <h3 className="font-inter text-lg font-semibold text-orbita-black mb-3">{step.title}</h3>
              <p className="text-sm text-orbita-gray leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
