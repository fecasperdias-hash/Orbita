import OrbitaNavbar from '@/components/orbita/OrbitaNavbar';
import OrbitaFooter from '@/components/orbita/OrbitaFooter';
import HeroSection from '@/components/orbita/HeroSection';
import ModulesSection from '@/components/orbita/ModulesSection';
import ApproachSection from '@/components/orbita/ApproachSection';
import CTASection from '@/components/orbita/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <OrbitaNavbar />
      <HeroSection />
      <ModulesSection />
      <ApproachSection />
      <CTASection />
      <OrbitaFooter />
    </div>
  );
}
