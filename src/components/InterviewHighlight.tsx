import React from "react";

// 1. Speaker data array
const speakers = [
  {
    name: "Dulith Herath",
    designation: "Founder & CEO, Kapruka",
    exposition: "Pioneering e-commerce and logistics in Sri Lanka.",
    photo: "/interviewee/dulith.webp",
  },
  {
    name: "Santhush Weeraman",
    designation: "Artist & Entrepreneur",
    exposition: "A leading figure in the music and entertainment industry.",
    photo: "/interviewee/santhush.webp",
  },
  {
    name: "Dilshan Abeygunawardana",
    designation: "Founder, Saraii Village",
    exposition: "Innovator in sustainable and eco-friendly tourism.",
    photo: "/interviewee/dilshan.webp",
  },
  {
    name: "Kasun Kalhara",
    designation: "Musician & Composer",
    exposition: "Renowned for his unique blend of musical styles.",
    photo: "/interviewee/kansukalhara.jpg",
  },
];

// 2. The main component
const AutoScrollingSpeakers = () => {
  // We duplicate the speakers array to create a seamless loop
  const duplicatedSpeakers = [...speakers, ...speakers];

  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Interviewee Highlights
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Insights from industry pioneers and thought leaders.
          </p>
        </div>

        {/* Scroller Container */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-scroll">
            {duplicatedSpeakers.map((speaker, index) => (
              <li key={index} className="flex-shrink-0 w-80">
                <div className="group bg-gray-800 border border-gray-700 rounded-lg p-6 transition-all duration-300 hover:border-amber-500 hover:!scale-105">
                  <div className="flex items-center space-x-5">
                    <img
                      className="h-20 w-20 object-cover rounded-full ring-2 ring-gray-600 group-hover:ring-amber-400 transition-all duration-300"
                      src={speaker.photo}
                      alt={speaker.name}
                    />
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {speaker.name}
                      </h3>
                      <p className="text-amber-400 text-sm">
                        {speaker.designation}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-4 text-sm leading-relaxed border-l-2 border-amber-500/50 pl-4">
                    "{speaker.exposition}"
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AutoScrollingSpeakers;
