
import Header from '../../components/Header';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import LocationMap from './LocationMap';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Header />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <LocationMap />
    </div>
  );
}
