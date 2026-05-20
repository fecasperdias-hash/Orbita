import { useState } from 'react';
import OrbitaNavbar from '@/components/orbita/OrbitaNavbar';
import OrbitaFooter from '@/components/orbita/OrbitaFooter';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setLoading(true); setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000); };
  return (
    <div className="min-h-screen bg-white font-inter">
      <OrbitaNavbar />
      <section className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-orbita-gray uppercase tracking-widest mb-8">Contact</p>
          <h1 className="font-inter text-5xl md:text-6xl font-bold tracking-tight text-orbita-black mb-4">Let's talk <span className="gradient-text-blue">operations.</span></h1>
          <p className="text-orbita-gray text-xl font-light mb-16 max-w-xl">Whether you want a demo, a partnership, or just to understand what Órbita can do — we're here.</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-16">
            {[{ label: 'Sales', value: 'sales@orbita.io', sub: 'Enterprise and B2B discussions' }, { label: 'General', value: 'hello@orbita.io', sub: 'Questions, partnerships, press' }, { label: 'Response Time', value: '< 24 hours', sub: 'On all business inquiries' }].map((c, i) => (
              <div key={i} className="bg-orbita-gray-light rounded-2xl p-6"><p className="text-xs font-semibold text-orbita-gray uppercase tracking-widest mb-2">{c.label}</p><p className="font-inter font-semibold text-orbita-black mb-1">{c.value}</p><p className="text-xs text-orbita-gray">{c.sub}</p></div>
            ))}
          </div>
          <div className="max-w-2xl">
            {submitted ? (
              <div className="bg-orbita-gray-light rounded-3xl p-12 text-center"><CheckCircle2 size={36} className="text-orbita-blue mx-auto mb-4" /><h3 className="font-inter text-2xl font-bold text-orbita-black mb-2">Message Sent</h3><p className="text-orbita-gray">We'll get back to you within 24 hours.</p></div>
            ) : (
              <div className="bg-orbita-gray-light rounded-3xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[{ key: 'name', label: 'Name', placeholder: 'Your name' }, { key: 'email', label: 'Email', placeholder: 'your@email.com' }].map((f) => (
                      <div key={f.key}><label className="block text-xs font-semibold text-orbita-black mb-2">{f.label}</label><input required type={f.key === 'email' ? 'email' : 'text'} placeholder={f.placeholder} value={form[f.key]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} className="w-full bg-white border border-black/[0.08] rounded-xl px-4 py-3 text-sm text-orbita-black placeholder:text-orbita-gray/50 focus:outline-none focus:border-orbita-blue transition-colors" /></div>
                    ))}
                  </div>
                  <div><label className="block text-xs font-semibold text-orbita-black mb-2">Subject</label><input required placeholder="How can we help?" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full bg-white border border-black/[0.08] rounded-xl px-4 py-3 text-sm text-orbita-black placeholder:text-orbita-gray/50 focus:outline-none focus:border-orbita-blue transition-colors" /></div>
                  <div><label className="block text-xs font-semibold text-orbita-black mb-2">Message</label><textarea required rows={4} placeholder="Tell us about your operation..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-white border border-black/[0.08] rounded-xl px-4 py-3 text-sm text-orbita-black placeholder:text-orbita-gray/50 focus:outline-none focus:border-orbita-blue transition-colors resize-none" /></div>
                  <button type="submit" disabled={loading} className="w-full group flex items-center justify-center gap-2 bg-orbita-black text-white font-semibold py-4 rounded-full hover:bg-orbita-black/80 transition-all text-sm">{loading ? 'Sending...' : 'Send Message'}{!loading && <ArrowRight size={14} />}</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
      <OrbitaFooter />
    </div>
  );
}
