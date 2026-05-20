import OrbitaNavbar from '@/components/orbita/OrbitaNavbar';
import OrbitaFooter from '@/components/orbita/OrbitaFooter';
import HeroSection from '@/components/orbita/HeroSection';
import ProblemSection from '@/components/orbita/ProblemSection';
import ApproachSection from '@/components/orbita/ApproachSection';
import WorkforceOSSection from '@/components/orbita/WorkforceOSSection';
import ModulesSection from '@/components/orbita/ModulesSection';
import MetricsSection from '@/components/orbita/MetricsSection';
import VisionSection from '@/components/orbita/VisionSection';
import CTASection from '@/components/orbita/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <OrbitaNavbar />
      <HeroSection />
      <ProblemSection />
      <ApproachSection />
      <WorkforceOSSection />
      <ModulesSection />
      <MetricsSection />
      <VisionSection />
      <CTASection />
      <OrbitaFooter />
    </div>
  );
}
