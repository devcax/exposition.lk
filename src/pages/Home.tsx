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
      <div className="hero-container" id="home">
        <HeroSlider />
      </div>

      <div className="gallery-container" id="structure">
        <Gallery />
      </div>

      <SpeakerHighlights />
      <InterviewHighlight />
      <Reviews />
      <PartnershipTree />
      <div className="team-container" id="contact">
        <PartnershipTeam />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
