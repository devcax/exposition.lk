import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState<number[]>([]);

  const reviews = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Professor of Engineering',
      department: 'Mechanical Engineering',
      rating: 5,
      comment: 'The university magazine beautifully captures the essence of our academic community. It showcases the incredible work being done by our faculty and students with exceptional storytelling and visual design.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      featured: true,
    },
    {
      name: 'Michael Chen',
      role: 'Graduate Student',
      department: 'Computer Science',
      rating: 5,
      comment: 'Being featured in the magazine was an honor. It gave our research the recognition it deserved and helped us connect with other researchers in our field. The editorial team was professional and supportive.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      featured: false,
    },
    {
      name: 'Prof. Emily Rodriguez',
      role: 'Dean of Sciences',
      department: 'Faculty of Sciences',
      rating: 5,
      comment: 'This magazine is a testament to the excellence of our institution. It effectively communicates our achievements and vision to the broader academic community while maintaining the highest editorial standards.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      featured: true,
    },
    {
      name: 'David Thompson',
      role: 'Alumni Relations Director',
      department: 'Alumni Affairs',
      rating: 5,
      comment: 'The magazine keeps our alumni connected to the university. The quality of content and design is exceptional, making it a pleasure to read and share. It truly represents our institutional values.',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150',
      featured: false,
    },
    {
      name: 'Dr. Amanda Foster',
      role: 'Research Director',
      department: 'Innovation Lab',
      rating: 5,
      comment: 'The magazine provides an excellent platform for showcasing our research breakthroughs. The editorial team understands how to translate complex research into engaging stories for diverse audiences.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
      featured: true,
    },
    {
      name: 'James Wilson',
      role: 'Student Body President',
      department: 'Student Government',
      rating: 5,
      comment: 'As students, we appreciate how the magazine highlights our achievements and gives voice to our perspectives. It creates a sense of pride and belonging within our university community.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      featured: false,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleReviews(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const reviewElements = document.querySelectorAll('.review-card');
    reviewElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-bl from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8">
            <span className="bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
              Community Voices
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Our Success Stories
          </p>
        </div>

        {/* Featured Review Carousel */}
        <div className="relative mb-12 md:mb-16 lg:mb-20">
          <div className="max-w-full lg:max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-6 md:p-8 lg:p-12">
              <Quote className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-amber-400/50 mb-4 md:mb-6" />
              
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed mb-6 md:mb-8 font-light">
                "{reviews[currentReview].comment}"
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <img
                    src={reviews[currentReview].image}
                    alt={reviews[currentReview].name}
                    className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-amber-500/30"
                  />
                  <div>
                    <h4 className="text-base md:text-lg lg:text-xl font-bold text-white">
                      {reviews[currentReview].name}
                    </h4>
                    <p className="text-sm md:text-base text-amber-400 font-medium">
                      {reviews[currentReview].role}
                    </p>
                    <p className="text-xs md:text-sm text-gray-400">
                      {reviews[currentReview].department}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center items-center gap-2 md:gap-4 mt-6 md:mt-8">
              <button
                onClick={prevReview}
                className="p-2 md:p-3 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-700/50 rounded-full text-white hover:text-amber-400 transition-colors duration-300"
              >
                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
              </button>
              
              <div className="flex gap-1.5 md:gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${
                      index === currentReview 
                        ? 'bg-amber-400 w-6 md:w-8' 
                        : 'bg-gray-600 hover:bg-gray-500 w-2 md:w-2.5'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextReview}
                className="p-2 md:p-3 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-700/50 rounded-full text-white hover:text-amber-400 transition-colors duration-300"
              >
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              data-index={index}
              className={`review-card relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-amber-500/20 rounded-xl p-5 md:p-6 transition-all duration-500 ${
                visibleReviews.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              } hover:border-amber-500/40`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Featured Badge */}
              {review.featured && (
                <div className="absolute top-3 right-3 md:top-4 md:right-4 px-2 py-0.5 md:py-1 bg-amber-500/80 backdrop-blur-sm rounded-full text-xs font-medium text-black">
                  Featured
                </div>
              )}
              
              <div className="flex items-start gap-3 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0 border-2 border-amber-500/30"
                />
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-base md:text-lg truncate">
                    {review.name}
                  </h3>
                  <p className="text-amber-400 text-xs md:text-sm font-medium truncate">{review.role}</p>
                  <p className="text-gray-400 text-xs truncate">{review.department}</p>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="h-4 w-4 md:h-5 md:w-5 text-amber-500/30 absolute -top-1 -left-1" />
                <p className="text-gray-300 italic pl-3 leading-relaxed text-sm md:text-base line-clamp-4">
                  {review.comment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { number: '20+', label: 'Years' },
            { number: '5+', label: 'Segments' },
            { number: '100+', label: 'Partners' },
            { number: '20+', label: 'Issues' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;