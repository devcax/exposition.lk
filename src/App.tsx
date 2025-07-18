import React from "react";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import PartnershipTree from "./components/PartnershipTree";
import Footer from "./components/Footer";
import PartnershipTeam from "./components/PartnershipTeam";
import SpeakerHighlights from "./components/SpeakerHighlights";
import InterviewHighlight from "./components/InterviewHighlight";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSlider />
      {/* <EventStructure /> */}
      <Gallery />
      <SpeakerHighlights />
      <InterviewHighlight />
      <Reviews />
      <PartnershipTree />

      {/* <PartnershipPackages /> */}
      <PartnershipTeam />
      <Footer />
    </div>
  );
}

export default App;
