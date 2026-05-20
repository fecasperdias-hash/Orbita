import { useState } from 'react';
import OrbitaNavbar from '@/components/orbita/OrbitaNavbar';
import OrbitaFooter from '@/components/orbita/OrbitaFooter';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Demo() {
  const [form, setForm] = useState({ name: '', email: '', company: '', team_size: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setLoading(true); setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200); };
  return (
    <div className="min-h-screen bg-white font-inter">
      <OrbitaNavbar />
      <section className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="pt-4">
              <p className="text-xs font-semibold text-orbita-gray uppercase tracking-widest mb-8">Request Demo</p>
              <h1 className="font-inter text-4xl md:text-5xl font-bold tracking-tight text-orbita-black mb-6">See Órbita in <span className="gradient-text-blue">your context.</span></h1>
              <p className="text-orbita-gray text-lg leading-relaxed font-light mb-10">Book a personalized walkthrough tailored to your specific workforce coordination challenges.</p>
              <div className="space-y-4 mb-10">
                {['Live platform walkthrough tailored to your operation', 'Real data import and processing demonstration', 'Q&A with the Órbita founding team', 'Implementation timeline and onboarding overview'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3"><CheckCircle2 size={15} className="text-orbita-blue flex-shrink-0" /><span className="text-sm text-orbita-gray">{item}</span></div>
                ))}
              </div>
            </div>
            <div>
              {submitted ? (
                <div className="bg-orbita-gray-light rounded-3xl p-12 text-center"><CheckCircle2 size={40} className="text-orbita-blue mx-auto mb-4" /><h3 className="font-inter text-2xl font-bold text-orbita-black mb-2">Request Received</h3><p className="text-orbita-gray">We'll reach out within 24 hours.</p></div>
              ) : (
                <div className="bg-orbita-gray-light rounded-3xl p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {[{ key: 'name', label: 'Full Name', type: 'text', placeholder: 'Alex Torres' }, { key: 'email', label: 'Work Email', type: 'email', placeholder: 'alex@company.com' }, { key: 'company', label: 'Company', type: 'text', placeholder: 'Acme Corp' }, { key: 'team_size', label: 'Team Size', type: 'text', placeholder: '50–200 employees' }].map((f) => (
                      <div key={f.key}><label className="block text-xs font-semibold text-orbita-black mb-2">{f.label}</label><input type={f.type} required placeholder={f.placeholder} value={form[f.key]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} className="w-full bg-white border border-black/[0.08] rounded-xl px-4 py-3 text-sm text-orbita-black placeholder:text-orbita-gray/50 focus:outline-none focus:border-orbita-blue transition-colors" /></div>
                    ))}
                    <button type="submit" disabled={loading} className="w-full group flex items-center justify-center gap-2 bg-orbita-black text-white font-semibold py-4 rounded-full hover:bg-orbita-black/80 transition-all text-sm">{loading ? 'Processing...' : 'Schedule My Demo'}{!loading && <ArrowRight size={14} />}</button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <OrbitaFooter />
    </div>
  );
}
