import OrbitaNavbar from '@/components/orbita/OrbitaNavbar';
import OrbitaFooter from '@/components/orbita/OrbitaFooter';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const modules = [
  { name: 'ShiftSync', tagline: 'Workforce synchronization', desc: 'Cross-reference schedules across all teams, identify overlaps, conflicts and coordination windows in real time.', tags: ['Schedule import', 'Overlap detection', 'Live sync status'], color: '#0071E3' },
  { name: 'OrbitSchedule', tagline: 'Smart scheduling engine', desc: 'AI-assisted schedule optimization that automatically generates the most efficient team configurations.', tags: ['AI optimization', 'Constraint modeling', 'Template generation'], color: '#5AC8FA' },
  { name: 'WFlow', tagline: 'Real-time workforce orchestration', desc: 'Coordinate complex operational workflows across hundreds of employees with zero manual overhead.', tags: ['Workflow automation', 'Role-based routing', 'Audit trail'], color: '#AF52DE' },
  { name: 'ShiftSend', tagline: 'Operational communication automation', desc: 'Automate shift notifications, schedule updates, and operational alerts to the right people at the right time.', tags: ['Multi-channel', 'Smart targeting', 'Delivery confirmation'], color: '#34C759' },
];

export default function Product() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <OrbitaNavbar />
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-orbita-gray uppercase tracking-widest mb-8">Platform</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <h1 className="font-inter text-5xl md:text-6xl font-bold tracking-tight leading-tight text-orbita-black">One platform.<br /><span className="gradient-text-blue">Total workforce clarity.</span></h1>
            <div>
              <p className="text-orbita-gray text-xl leading-relaxed font-light mb-8">WorkforceOS is the operational backbone for companies running complex, high-rotation workforce environments.</p>
              <Link to="/demo" className="inline-flex items-center gap-2 bg-orbita-black text-white font-medium px-6 py-3.5 rounded-full hover:bg-orbita-black/80 transition-all text-sm">Request Demo <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-orbita-gray-light">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-orbita-gray uppercase tracking-widest mb-12">Modules</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modules.map((mod) => (
              <div key={mod.name} className="bg-white rounded-2xl p-8 border border-black/[0.04] hover:shadow-sm transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: mod.color }}>{mod.name.charAt(0)}</div>
                  <div><h3 className="font-inter font-semibold text-orbita-black">{mod.name}</h3><p className="text-xs font-medium" style={{ color: mod.color }}>{mod.tagline}</p></div>
                </div>
                <p className="text-sm text-orbita-gray leading-relaxed mb-5">{mod.desc}</p>
                <div className="flex flex-wrap gap-2">{mod.tags.map((tag) => (<span key={tag} className="text-xs bg-orbita-gray-light text-orbita-gray px-3 py-1 rounded-full">{tag}</span>))}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <OrbitaFooter />
    </div>
  );
}
