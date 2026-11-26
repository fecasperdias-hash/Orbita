import { Link } from 'react-router-dom';

const services = [
  {
    name: 'Google Meu Negócio',
    benefit: 'Perfil local otimizado e acompanhado para aparecer nas buscas, receber mais ligações e transformar pesquisa em visita.',
  },
  {
    name: <>Placas <em>NFC</em></>,
    benefit: <>Aproximação do celular e o cliente abre o destino: <em>links</em>, avaliações, <em>Instagram</em>, PIX ou <em>Wi-Fi</em>.</>,
  },
  {
    name: <>Criação de <em>chatbots</em></>,
    benefit: 'Atendimento automático fora do horário comercial, com perguntas certas para qualificar quem realmente quer comprar.',
  },
  {
    name: 'Automações com IA',
    benefit: 'Fluxos que respondem, organizam pedidos e encaminham o que precisa de uma pessoa, com menos espera e menos retrabalho.',
  },
  {
    name: <><em>Design</em> gráfico</>,
    benefit: 'Peças visuais consistentes para a marca, o perfil e as campanhas, prontas para publicar e anunciar.',
  },
  {
    name: 'Edição de vídeo',
    benefit: <>Vídeos editados para segurar a atenção e gerar <em>views</em>, com roteiro curto e chamada clara para o próximo passo.</>,
  },
  {
    name: <><em>Marketing</em> digital</>,
    benefit: 'Presença digital planejada e gerida: o que publicar, onde aparecer e como transformar audiência em contato.',
  },
  {
    name: 'Tráfego pago',
    benefit: 'Campanhas patrocinadas para gerar demanda e vendas. O valor cobrado pela Órbita reúne o serviço e o investimento em mídia, pago em conjunto.',
  },
];

export default function ModulesSection() {
  return (
    <section id="servicos" className="py-32 bg-orbita-gray-light">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold text-orbita-gray uppercase tracking-widest mb-4">Serviços</p>
        <h2 className="font-inter text-4xl md:text-5xl font-bold tracking-tight text-orbita-black mb-4">O que a Órbita faz pelo negócio.</h2>
        <p className="text-orbita-gray text-lg font-light max-w-2xl mb-12">Oito frentes para ser encontrado, atender melhor e vender com mais constância.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((mod, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-black/[0.04] hover:border-black/[0.08] hover:shadow-sm transition-all duration-300 flex flex-col">
              <h3 className="font-inter font-semibold text-orbita-black text-lg mb-3">{mod.name}</h3>
              <p className="text-sm text-orbita-gray leading-relaxed mb-6">{mod.benefit}</p>
              <Link to="/contact" className="mt-auto text-sm font-medium text-orbita-blue hover:text-orbita-black transition-colors">Pedir orçamento</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
