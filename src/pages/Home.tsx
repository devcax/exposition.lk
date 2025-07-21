import React from "react";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import PartnershipTree from "../components/PartnershipTree";
import Footer from "../components/Footer";
import PartnershipTeam from "../components/PartnershipTeam";
import SpeakerHighlights from "../components/SpeakerHighlights";
import InterviewHighlight from "../components/InterviewHighlight";

function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSlider />
      {/* <EventStructure /> removed */}
      <Gallery />
      <SpeakerHighlights />
      <InterviewHighlight />
      <Reviews />
      <PartnershipTree />

      {/* <PartnershipPackages /> removed*/}
      <PartnershipTeam />
      <Footer />
    </div>
  );
}

export default Home;
