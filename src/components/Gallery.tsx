import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Heart, Share2 } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  const images = [
    {
      src: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Exposition Magazine Launch',
      category: 'magazine',
      description: 'Annual magazine launch event showcasing academic excellence',
    },
    {
      src: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Expert Interviews',
      category: 'interviews',
      description: 'In-depth conversations with industry leaders and academics',
    },
    {
      src: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Student Workshops',
      category: 'workshops',
      description: 'Interactive learning sessions and skill development programs',
    },
    {
      src: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Industrial Forum',
      category: 'industrial',
      description: 'Bridging academia and industry through collaborative discussions',
    },
    {
      src: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Career Fair',
      category: 'career',
      description: 'Connecting students with leading employers and opportunities',
    },
    {
      src: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Partnership Events',
      category: 'partnerships',
      description: 'Celebrating our valued partners and collaborative achievements',
    },
    {
      src: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Research Presentations',
      category: 'research',
      description: 'Showcasing groundbreaking research and innovation',
    },
    {
      src: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Awards Ceremony',
      category: 'awards',
      description: 'Recognizing excellence in academic and research achievements',
    },
  ];

  const categories = [
    { id: 'all', name: 'All', count: images.length },
    { id: 'magazine', name: 'Magazine', count: images.filter(img => img.category === 'magazine').length },
    { id: 'interviews', name: 'Interviews', count: images.filter(img => img.category === 'interviews').length },
    { id: 'workshops', name: 'Workshops', count: images.filter(img => img.category === 'workshops').length },
    { id: 'industrial', name: 'Industrial Forum', count: images.filter(img => img.category === 'industrial').length },
    { id: 'career', name: 'Career Fair', count: images.filter(img => img.category === 'career').length },
    { id: 'partnerships', name: 'Partnerships', count: images.filter(img => img.category === 'partnerships').length },
    { id: 'research', name: 'Research', count: images.filter(img => img.category === 'research').length },
    { id: 'awards', name: 'Awards', count: images.filter(img => img.category === 'awards').length },
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(image => image.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleImages(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const imageElements = document.querySelectorAll('.gallery-item');
    imageElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredImages]);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-600/20 backdrop-blur-sm border border-amber-600/30 rounded-full text-amber-400 text-sm font-medium mb-6">
            Gallery
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-amber-200 to-amber-300 bg-clip-text text-transparent">
              Exposition Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Capturing the essence of academic achievement, innovation, and community spirit through compelling visual storytelling
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-black shadow-lg shadow-amber-600/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
              }`}
            >
              <span className="relative z-10">{category.name}</span>
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                filter === category.id ? 'bg-black/20' : 'bg-amber-600/20 text-amber-500'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={`${image.category}-${index}`}
              data-index={index}
              className={`gallery-item group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 transform ${
                visibleImages.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              } hover:scale-105`}
              onClick={() => setSelectedImage(index)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    <span className="inline-block px-3 py-1 bg-amber-600/80 backdrop-blur-sm rounded-full text-xs font-medium mb-3 capitalize">
                      {image.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      {image.description}
                    </p>
                  </div>
                </div>

                {/* Hover Icons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-amber-600/80 transition-colors duration-300">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </div>

                {/* Border Animation */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-600/50 rounded-3xl transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 animate-fade-in">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/20 rounded-full text-white hover:text-amber-500 transition-all duration-300 z-10 hover:scale-110"
          >
            <X className="h-6 w-6" />
          </button>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/20 rounded-full text-white hover:text-amber-500 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/20 rounded-full text-white hover:text-amber-500 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image Container */}
          <div className="max-w-5xl max-h-[80vh] mx-4 relative">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="w-full h-full object-contain rounded-2xl"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <p className="text-amber-500 capitalize font-medium">
                    {filteredImages[selectedImage].category}
                  </p>
                  <p className="text-gray-300 mt-2">
                    {filteredImages[selectedImage].description}
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

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm">
            {selectedImage + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;