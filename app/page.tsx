
'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedServices from '../components/FeaturedServices';
import OurServices from '../components/OurServices';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedServices />
      <OurServices />
      <CallToAction />
      <Footer />
    </div>
  );
}
