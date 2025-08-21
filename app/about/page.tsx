import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutHero from './AboutHero';
import OurStory from './OurStory';
import OurApproach from './OurApproach';
import OurExpertise from './OurExpertise';
import BrandValues from './BrandValues';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <OurStory />
      <OurApproach />
      <OurExpertise />
      <BrandValues />
      <Footer />
    </div>
  );
}