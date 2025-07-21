import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Users, Calendar, MapPin, Award, Star, Filter, Grid, Baseline as Timeline, Quote, Play, Pause } from 'lucide-react';
import {issues} from '../data/issues';
import {famousInterviewees} from '../data/famousInterviewees';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  linkedin?: string;
  bio?: string;
}

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  year: number;
}

interface FamousInterviewee {
  name: string;
  quote: string;
  position: string;
  image: string;
  year: number;
}

interface Issue {
  year: number;
  issue: string;
  keynote: string;
  keynoteSpeakers: string[];
  attendees: string;
  internationalReach: string;
  interviewees: string[];
  editorsInChief: TeamMember[];
  gallery: string[];
  teamMembers: TeamMember[];
  background: string;
  theme: string;
  testimonials: Testimonial[];
}
const academicStaff: TeamMember[] = [
  {
    name: "Dr. Patricia Williams",
    position: "Faculty Advisor & Distinguished Professor",
    image: "https://images.pexels.com/photos/1181414/pexels-photo-1181414.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com/in/patriciawilliams",
    bio: "Distinguished professor with 25 years of experience in academic publishing and media studies."
  },
  {
    name: "Prof. Michael Chen",
    position: "Department Head & Research Director",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com/in/michaelchen",
    bio: "Research director specializing in innovation studies and technology policy."
  },
  {
    name: "Dr. Sarah Johnson",
    position: "Research Coordinator & Senior Lecturer",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    bio: "Senior lecturer and research coordinator with expertise in digital media and communication."
  },
  {
    name: "Prof. David Miller",
    position: "Publications Director & Academic Advisor",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com/in/davidmiller",
    bio: "Publications director with extensive experience in academic journal management and editorial oversight."
  }
];

const testimonials: Testimonial[] = [
  {
    quote: "This magazine has been instrumental in shaping academic discourse in our field. The quality of research and insights is unparalleled.",
    author: "Dr. Elizabeth Harper",
    position: "Professor of Media Studies, Harvard University",
    year: 2023
  },
  {
    quote: "As a long-time subscriber, I've witnessed the magazine's evolution and consistent excellence. It remains my go-to source for industry insights.",
    author: "Robert Chen",
    position: "Senior Research Analyst, McKinsey & Company",
    year: 2023
  },
  {
    quote: "The magazine's commitment to featuring diverse voices and perspectives has enriched our understanding of complex global issues.",
    author: "Dr. Amara Okafor",
    position: "Director of International Studies, Oxford University",
    year: 2023
  }
];

function Legacy() {
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'attendees'>('newest');
  const [currentIntervieweeIndex, setCurrentIntervieweeIndex] = useState(0);
  const [isIntervieweePlaying, setIsIntervieweePlaying] = useState(true);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isTestimonialPlaying, setIsTestimonialPlaying] = useState(true);

  // Auto-advance slideshow
  useEffect(() => {
    if (isIntervieweePlaying) {
      const interval = setInterval(() => {
        setCurrentIntervieweeIndex((prev) => (prev + 1) % famousInterviewees.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isIntervieweePlaying]);

  useEffect(() => {
    if (isTestimonialPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isTestimonialPlaying]);

  const sortedIssues = [...issues].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.year - a.year;
      case 'oldest':
        return a.year - b.year;
      case 'attendees':
        return parseInt(b.attendees.replace(/\D/g, '')) - parseInt(a.attendees.replace(/\D/g, ''));
      default:
        return b.year - a.year;
    }
  });

  const openModal = (issue: Issue) => {
    setSelectedIssue(issue);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedIssue(null);
  };

  const nextImage = () => {
    if (selectedIssue) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedIssue.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedIssue) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedIssue.gallery.length) % selectedIssue.gallery.length);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-serif">
      {/* Elegant Header */}
      <header className="relative py-32 px-8 text-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-yellow-800/20 to-amber-900/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <Award className="mx-6 w-8 h-8 text-amber-400" />
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
              Our Legacy
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
            Two Decades of Excellence in Academic Publishing
          </p>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-amber-400">
            <div className="text-center">
              <div className="text-3xl font-bold">20</div>
              <div className="text-sm uppercase tracking-wider">Years</div>
            </div>
            <div className="w-px h-12 bg-amber-400/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm uppercase tracking-wider">Issues</div>
            </div>
            <div className="w-px h-12 bg-amber-400/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm uppercase tracking-wider">Readers</div>
            </div>
          </div>
        </div>
      </header>

      {/* Famous Interviewees Slideshow */}
      <section className="py-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-amber-900/10"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                Voices of Innovation
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Insights from the visionaries who have shaped our industry
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-12 border border-amber-900/30 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Quote Side */}
                <div className="space-y-8">
                  <Quote className="w-16 h-16 text-amber-400 opacity-50" />
                  <blockquote className="text-3xl font-light leading-relaxed text-gray-100">
                    "{famousInterviewees[currentIntervieweeIndex].quote}"
                  </blockquote>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-amber-400">
                      {famousInterviewees[currentIntervieweeIndex].name}
                    </div>
                    <div className="text-lg text-gray-400">
                      {famousInterviewees[currentIntervieweeIndex].position}
                    </div>
                    <div className="text-sm text-amber-500">
                      Featured in {famousInterviewees[currentIntervieweeIndex].year}
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="relative">
                  <div className="relative w-80 h-80 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-3xl blur-2xl opacity-30"></div>
                    <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-amber-400/30">
                      <img 
                        src={famousInterviewees[currentIntervieweeIndex].image}
                        alt={famousInterviewees[currentIntervieweeIndex].name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-center items-center space-x-6 mt-12">
                <button
                  onClick={() => setCurrentIntervieweeIndex((prev) => (prev - 1 + famousInterviewees.length) % famousInterviewees.length)}
                  className="p-3 rounded-full bg-amber-400/20 hover:bg-amber-400/30 transition-colors border border-amber-400/30"
                >
                  <ChevronLeft className="w-6 h-6 text-amber-400" />
                </button>

                <button
                  onClick={() => setIsIntervieweePlaying(!isIntervieweePlaying)}
                  className="p-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 transition-all text-black"
                >
                  {isIntervieweePlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>

                <button
                  onClick={() => setCurrentIntervieweeIndex((prev) => (prev + 1) % famousInterviewees.length)}
                  className="p-3 rounded-full bg-amber-400/20 hover:bg-amber-400/30 transition-colors border border-amber-400/30"
                >
                  <ChevronRight className="w-6 h-6 text-amber-400" />
                </button>
              </div>

              {/* Indicators */}
              <div className="flex justify-center space-x-3 mt-8">
                {famousInterviewees.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIntervieweeIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIntervieweeIndex 
                        ? 'bg-amber-400 scale-125' 
                        : 'bg-gray-600 hover:bg-amber-400/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* View Toggle */}
            <div className="flex items-center space-x-4">
              <span className="text-amber-400 font-medium">View:</span>
              <div className="flex bg-gray-800 rounded-xl p-1 border border-amber-900/30">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black' 
                      : 'text-gray-400 hover:text-amber-400'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                  <span>Grid</span>
                </button>
                <button
                  onClick={() => setViewMode('timeline')}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
                    viewMode === 'timeline' 
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black' 
                      : 'text-gray-400 hover:text-amber-400'
                  }`}
                >
                  <Timeline className="w-5 h-5" />
                  <span>Timeline</span>
                </button>
              </div>
            </div>

            {/* Sort Controls */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'attendees')}
                className="bg-gray-800 border border-amber-900/30 rounded-lg px-4 py-2 text-white focus:border-amber-400 focus:outline-none"
              >
                <option value="newest">Year (Newest to Oldest)</option>
                <option value="oldest">Year (Oldest to Newest)</option>
                <option value="attendees">Number of Attendees</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <div className="issue-container">
        <section className="py-24 px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/5 to-transparent"></div>
        
        <div className="max-w-8xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                Distinguished Issues
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore our carefully curated collection of publications that have shaped academic discourse over two decades
            </p>
          </div>
          
          <div className="h-[800px] overflow-y-auto scrollbar-hide hover:scrollbar-hide" style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedIssues.map((issue, index) => (
                  <div
                    key={issue.year}
                    className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
                    onClick={() => openModal(issue)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-amber-900/20 hover:border-amber-400/40 transition-all duration-700 hover:-translate-y-2">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${issue.background})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-transparent to-black/60"></div>
                      </div>
                      
                      {/* Premium Year Badge */}
                      <div className="absolute top-6 left-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl blur-sm opacity-75"></div>
                          <div className="relative bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-6 py-3 rounded-2xl font-bold text-2xl shadow-2xl">
                            {issue.year}
                          </div>
                        </div>
                      </div>
                      
                      {/* Theme Badge */}
                      <div className="absolute top-6 right-6">
                        <div className="bg-black/60 backdrop-blur-sm border border-amber-400/30 px-4 py-2 rounded-full">
                          <span className="text-amber-400 text-sm font-medium">{issue.theme}</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-amber-300 transition-colors">
                          {issue.issue}
                        </h3>
                        
                        <p className="text-gray-300 text-base mb-4 leading-relaxed">
                          <span className="text-amber-400 font-medium">Keynote:</span> {issue.keynoteSpeakers.join(' & ')}
                        </p>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                              <Users className="w-5 h-5 text-amber-400" />
                              <span className="text-amber-300 font-bold text-lg">{issue.attendees}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400 text-sm">{issue.internationalReach}</span>
                          </div>
                        </div>
                        
                        {/* Hover Indicator */}
                        <div className="absolute -bottom-2 left-8 right-8 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Timeline View */
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 via-yellow-500 to-amber-400"></div>
                
                <div className="space-y-16">
                  {sortedIssues.map((issue, index) => (
                    <div key={issue.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                        <div 
                          className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
                          onClick={() => openModal(issue)}
                        >
                          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-amber-900/20 hover:border-amber-400/40 transition-all duration-500">
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-4 py-2 rounded-full font-bold text-lg">
                                {issue.year}
                              </div>
                              <div className="bg-amber-400/20 border border-amber-400/30 px-3 py-1 rounded-full">
                                <span className="text-amber-400 text-sm">{issue.theme}</span>
                              </div>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                              {issue.issue}
                            </h3>
                            
                            <p className="text-gray-300 mb-4">
                              <span className="text-amber-400 font-medium">Keynote:</span> {issue.keynoteSpeakers.join(' & ')}
                            </p>
                            
                            <div className="flex items-center space-x-6">
                              <div className="flex items-center space-x-2">
                                <Users className="w-4 h-4 text-amber-400" />
                                <span className="text-amber-300 font-bold">{issue.attendees}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-400 text-sm">{issue.internationalReach}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Timeline Node */}
                      <div className="relative z-10">
                        <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full border-4 border-black shadow-lg"></div>
                      </div>
                      
                      <div className="w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      </div>

      {/* Distinguished Academic Staff Section */}
      <section className="py-24 px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/5 via-transparent to-amber-900/5"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              <Star className="mx-4 w-6 h-6 text-amber-400" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            </div>
            
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                Distinguished Faculty
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Meet the esteemed academic leaders who have guided our publication to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {academicStaff.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-8 mx-auto">
                  <div className="w-48 h-48 mx-auto relative">
                    {/* Elegant border effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 p-1 group-hover:from-amber-300 group-hover:to-yellow-400 transition-all duration-500">
                      <div className="w-full h-full rounded-full bg-black p-2">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-amber-400 mb-4 text-lg font-medium leading-relaxed">
                    {member.position}
                  </p>
                  
                  {member.bio && (
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                      {member.bio}
                    </p>
                  )}
                  
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-gray-400 hover:text-amber-400 transition-colors group/link"
                    >
                      <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                      <span className="font-medium">Professional Profile</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-amber-900/10"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                What Our Community Says
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Testimonials from our valued readers and contributors
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-12 border border-amber-900/30 shadow-2xl text-center">
              <Quote className="w-12 h-12 text-amber-400 opacity-50 mx-auto mb-8" />
              
              <blockquote className="text-2xl font-light leading-relaxed text-gray-100 mb-8 max-w-4xl mx-auto">
                "{testimonials[currentTestimonialIndex].quote}"
              </blockquote>
              
              <div className="space-y-2">
                <div className="text-xl font-bold text-amber-400">
                  {testimonials[currentTestimonialIndex].author}
                </div>
                <div className="text-lg text-gray-400">
                  {testimonials[currentTestimonialIndex].position}
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-center items-center space-x-6 mt-12">
                <button
                  onClick={() => setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="p-3 rounded-full bg-amber-400/20 hover:bg-amber-400/30 transition-colors border border-amber-400/30"
                >
                  <ChevronLeft className="w-6 h-6 text-amber-400" />
                </button>

                <button
                  onClick={() => setIsTestimonialPlaying(!isTestimonialPlaying)}
                  className="p-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 transition-all text-black"
                >
                  {isTestimonialPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>

                <button
                  onClick={() => setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
                  className="p-3 rounded-full bg-amber-400/20 hover:bg-amber-400/30 transition-colors border border-amber-400/30"
                >
                  <ChevronRight className="w-6 h-6 text-amber-400" />
                </button>
              </div>

              {/* Indicators */}
              <div className="flex justify-center space-x-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonialIndex 
                        ? 'bg-amber-400 scale-125' 
                        : 'bg-gray-600 hover:bg-amber-400/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Premium Modal */}
      {selectedIssue && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-6 animate-fadeIn">
          <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-amber-900/30 shadow-2xl shadow-amber-500/10 animate-slideUp">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-8 border-b border-amber-900/30 bg-gradient-to-r from-amber-900/10 to-transparent">
              <div>
                <h2 className="text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                    {selectedIssue.year}
                  </span>
                </h2>
                <p className="text-2xl text-white font-light">{selectedIssue.issue}</p>
                <p className="text-amber-400 mt-2">{selectedIssue.theme}</p>
              </div>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)] custom-scrollbar">
              <div className="p-8 space-y-12">
                {/* Keynote Section */}
                <div className="bg-gradient-to-r from-amber-900/20 to-transparent rounded-2xl p-8 border border-amber-900/20">
                  <h3 className="text-3xl font-bold text-amber-400 mb-6 flex items-center">
                    <Award className="w-8 h-8 mr-3" />
                    Keynote Address
                  </h3>
                  <p className="text-xl text-white mb-4 leading-relaxed">{selectedIssue.keynote}</p>
                  <div className="flex flex-wrap gap-3">
                    {selectedIssue.keynoteSpeakers.map((speaker, index) => (
                      <span 
                        key={index} 
                        className="bg-gradient-to-r from-amber-400/20 to-yellow-500/20 border border-amber-400/30 text-amber-300 px-6 py-3 rounded-full text-lg font-medium"
                      >
                        {speaker}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 border border-amber-900/20">
                    <div className="flex items-center space-x-4 mb-4">
                      <Users className="w-8 h-8 text-amber-400" />
                      <span className="text-amber-400 font-bold text-xl">Attendees</span>
                    </div>
                    <p className="text-4xl font-bold text-white">{selectedIssue.attendees}</p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 border border-amber-900/20">
                    <div className="flex items-center space-x-4 mb-4">
                      <MapPin className="w-8 h-8 text-amber-400" />
                      <span className="text-amber-400 font-bold text-xl">International Reach</span>
                    </div>
                    <p className="text-xl text-white">{selectedIssue.internationalReach}</p>
                  </div>
                </div>

                {/* Attendee Testimonials */}
                {selectedIssue.testimonials && selectedIssue.testimonials.length > 0 && (
                  <div>
                    <h3 className="text-3xl font-bold text-amber-400 mb-8">Attendee Testimonials</h3>
                    <div className="space-y-6">
                      {selectedIssue.testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gradient-to-r from-amber-900/10 to-transparent rounded-2xl p-6 border border-amber-900/20">
                          <Quote className="w-8 h-8 text-amber-400 opacity-50 mb-4" />
                          <blockquote className="text-lg text-gray-100 mb-4 leading-relaxed italic">
                            "{testimonial.quote}"
                          </blockquote>
                          <div className="flex items-center space-x-4">
                            <div>
                              <div className="font-bold text-amber-400">{testimonial.author}</div>
                              <div className="text-gray-400">{testimonial.position}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Featured Interviews */}
                <div>
                  <h3 className="text-3xl font-bold text-amber-400 mb-8">Featured Interviews</h3>
                  <div className="flex flex-wrap gap-4">
                    {selectedIssue.interviewees.map((interviewee, index) => (
                      <span 
                        key={index} 
                        className="bg-gradient-to-r from-amber-400/10 to-yellow-500/10 border border-amber-400/20 text-amber-300 px-6 py-3 rounded-2xl text-lg font-medium hover:border-amber-400/40 transition-colors"
                      >
                        {interviewee}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Editorial Leadership */}
                <div>
                  <h3 className="text-3xl font-bold text-amber-400 mb-8">Editorial Leadership</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {selectedIssue.editorsInChief.map((editor, index) => (
                      <div key={index} className="flex items-center space-x-6 bg-gradient-to-r from-gray-800/50 to-transparent rounded-2xl p-6 border border-amber-900/20">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 p-0.5">
                            <img 
                              src={editor.image} 
                              alt={editor.name}
                              className="w-full h-full rounded-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white text-xl mb-1">{editor.name}</h4>
                          <p className="text-amber-400 text-lg mb-2">{editor.position}</p>
                          {editor.bio && (
                            <p className="text-gray-400 text-sm mb-3 leading-relaxed">{editor.bio}</p>
                          )}
                          {editor.linkedin && (
                            <a 
                              href={editor.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 text-gray-400 hover:text-amber-400 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Professional Profile</span>
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h3 className="text-3xl font-bold text-amber-400 mb-8">Event Gallery</h3>
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-2xl border border-amber-900/30">
                      <img 
                        src={selectedIssue.gallery[currentImageIndex]} 
                        alt={`Gallery image ${currentImageIndex + 1}`}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    
                    {/* Navigation */}
                    <div className="absolute top-1/2 left-6 transform -translate-y-1/2">
                      <button 
                        onClick={prevImage}
                        className="bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-colors backdrop-blur-sm border border-amber-400/20 hover:border-amber-400/40"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                    </div>
                    <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
                      <button 
                        onClick={nextImage}
                        className="bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-colors backdrop-blur-sm border border-amber-400/20 hover:border-amber-400/40"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>
                    
                    {/* Indicators */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                      {selectedIssue.gallery.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentImageIndex 
                              ? 'bg-amber-400 scale-125' 
                              : 'bg-gray-400 hover:bg-amber-400/60'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Team Members */}
                <div>
                  <h3 className="text-3xl font-bold text-amber-400 mb-8">Editorial Team</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedIssue.teamMembers.map((member, index) => (
                      <div key={index} className="flex items-center space-x-4 bg-gradient-to-r from-gray-800/30 to-transparent rounded-xl p-6 border border-amber-900/10">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 p-0.5">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-lg">{member.name}</h4>
                          <p className="text-amber-400">{member.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #d4af37, #b8941f);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #f4d03f, #d4af37);
        }
      `}</style>
    </div>
  );
}

export default Legacy;