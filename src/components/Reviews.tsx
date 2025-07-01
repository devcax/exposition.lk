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
      { threshold: 0.3 }
    );

    const reviewElements = document.querySelectorAll('.review-card');
    reviewElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-amber-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full text-amber-300 text-sm font-medium mb-6">
            Testimonials
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent">
              Community Voices
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear from our distinguished faculty, accomplished students, and dedicated staff about their experience with our magazine
          </p>
        </div>

        {/* Featured Review Carousel */}
        <div className="relative mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-amber-500/20 p-8 md:p-12">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <Quote className="h-12 w-12 text-amber-400/50 mb-6" />
                
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-light">
                  "{reviews[currentReview].comment}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={reviews[currentReview].image}
                      alt={reviews[currentReview].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-amber-500/30"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {reviews[currentReview].name}
                      </h4>
                      <p className="text-amber-400 font-medium">
                        {reviews[currentReview].role}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {reviews[currentReview].department}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-1">
                    {renderStars(reviews[currentReview].rating)}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevReview}
                className="p-3 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-700/50 rounded-full text-white hover:text-amber-400 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentReview 
                        ? 'bg-amber-400 w-8' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextReview}
                className="p-3 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-700/50 rounded-full text-white hover:text-amber-400 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              data-index={index}
              className={`review-card group relative overflow-hidden bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-6 transition-all duration-700 transform ${
                visibleReviews.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              } hover:scale-105 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Featured Badge */}
              {review.featured && (
                <div className="absolute top-4 right-4 px-2 py-1 bg-amber-500/80 backdrop-blur-sm rounded-full text-xs font-medium text-black">
                  Featured
                </div>
              )}
              
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-amber-500/30 group-hover:border-amber-500/50 transition-colors duration-300"
                />
                <div>
                  <h3 className="text-white font-bold text-lg group-hover:text-amber-300 transition-colors duration-300">
                    {review.name}
                  </h3>
                  <p className="text-amber-400 text-sm font-medium">{review.role}</p>
                  <p className="text-gray-400 text-xs">{review.department}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {renderStars(review.rating)}
              </div>
              
              <div className="relative">
                <Quote className="h-6 w-6 text-amber-500/30 absolute -top-2 -left-2" />
                <p className="text-gray-300 italic pl-4 leading-relaxed text-sm">
                  {review.comment}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '50K+', label: 'Monthly Readers' },
            { number: '200+', label: 'Featured Stories' },
            { number: '15+', label: 'Awards Won' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;