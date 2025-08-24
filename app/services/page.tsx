
import Header from '../../components/Header';
import ServicesHero from './ServicesHero';
import CoreServices from './CoreServices';
import SpecializedServices from './SpecializedServices';
import AdditionalServices from './AdditionalServices';
import ServicesCTA from './ServicesCTA';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Header />
      <ServicesHero />
      <CoreServices />
      <SpecializedServices />
      <AdditionalServices />
      <ServicesCTA />
    </div>
  );
}