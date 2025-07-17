import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X, Heart, Share2 } from "lucide-react";
import SpeakerHighlights from "./SpeakerHighlights";

// Gallery component
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Exposition Magazine Launch",
      category: "magazine",
      description:
        "A vibrant launch event spotlighting outstanding academic voices and student innovation.",
    },
    {
      src: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Expert Interviews",
      category: "interviews",
      description:
        "Insightful dialogues uncovering trends, experiences, and wisdom from top experts.",
    },
    {
      src: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Student Workshops",
      category: "workshops",
      description:
        "Dynamic workshops blending fun, learning, and personal growth for students.",
    },
    {
      src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Industrial Forum",
      category: "industrial",
      description:
        "Connecting scholars and professionals to exchange ideas, insights, and opportunities.",
    },
    {
      src: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Career Fair",
      category: "career",
      description:
        "Bringing together diverse industries to offer students a world of career possibilities.",
    },
    {
      src: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Partnership Events",
      category: "partnerships",
      description:
        "Celebrating meaningful collaborations that advance academic and industry progress.",
    },
    {
      src: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Research Presentations",
      category: "research",
      description:
        "A platform for sharing cutting-edge research and intellectual exploration.",
    },
    {
      src: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Awards Ceremony",
      category: "awards",
      description:
        "Celebrating excellence in research, learning, and scholarly impact.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <section
        id="gallery"
        className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
                Event Structure
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Integrating academic pursuits with real-world insights,
              connections, and career-focused experiences.{" "}
            </p>
          </div>

          {/* Slider */}
          <div className="relative w-full overflow-hidden rounded-3xl">
            <img
              src={images[currentSlide].src}
              alt={images[currentSlide].title}
              className="w-full h-[500px] object-cover rounded-3xl transition-all duration-500"
              onClick={() => setSelectedImage(currentSlide)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl" />
            <div className="absolute bottom-0 left-0 p-6 text-white max-w-2xl">
              <h3 className="text-2xl font-bold">
                {images[currentSlide].title}
              </h3>
              <p className="text-sm text-amber-400 capitalize">
                {images[currentSlide].category}
              </p>
              <p className="text-gray-300 mt-1">
                {images[currentSlide].description}
              </p>
            </div>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/60 hover:bg-black/80 rounded-full text-white z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/60 hover:bg-black/80 rounded-full text-white z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Lightbox (commented out) */}
        {/* {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/20 rounded-full text-white hover:text-amber-500 transition-all duration-300 z-10 hover:scale-110"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="max-w-5xl max-h-[80vh] mx-4 relative">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].title}
                className="w-full h-full object-contain rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {images[selectedImage].title}
                    </h3>
                    <p className="text-amber-500 capitalize font-medium">
                      {images[selectedImage].category}
                    </p>
                    <p className="text-gray-300 mt-2">
                      {images[selectedImage].description}
                    </p>
                  </div>

                  <div className="flex space-x-3">
                    <button className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white hover:text-amber-500 transition-all duration-300">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white hover:text-amber-500 transition-all duration-300">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        )} */}
      </section>
      {/* Speaker Highlights Section */}
    </>
  );
};

export default Gallery;
