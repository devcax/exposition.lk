import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import EventStructure from './components/EventStructure';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import PartnershipTree from './components/PartnershipTree';
import PartnershipPackages from './components/PartnershipPackages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSlider />
      <EventStructure />
      <Gallery />
      <Reviews />
      <PartnershipTree />
      <PartnershipPackages />
      <Footer />
    </div>
  );
}

export default App;