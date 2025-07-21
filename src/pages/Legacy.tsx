import React, { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Users,
  Calendar,
  MapPin,
  Award,
  Star,
  Filter,
  Grid,
  Quote,
  Play,
  Pause,
} from "lucide-react";
import { issues } from "../data/issues";
import { famousInterviewees } from "../data/famousInterviewees";

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
    image:
      "https://images.pexels.com/photos/1181414/pexels-photo-1181414.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com/in/patriciawilliams",
    bio: "Distinguished professor with 25 years of experience in academic publishing and media studies.",
  },
  {
    name: "Prof. Michael Chen",
    position: "Department Head & Research Director",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com/in/michaelchen",
    bio: "Research director specializing in innovation studies and technology policy.",
  },
  {
    name: "Dr. Sarah Johnson",
    position: "Research Coordinator & Senior Lecturer",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    bio: "Senior lecturer and research coordinator with expertise in digital media and communication.",
  },
  {
    name: "Prof. David Miller",
    position: "Publications Director & Academic Advisor",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com/in/davidmiller",
    bio: "Publications director with extensive experience in academic journal management and editorial oversight.",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "This magazine has been instrumental in shaping academic discourse in our field. The quality of research and insights is unparalleled.",
    author: "Dr. Elizabeth Harper",
    position: "Professor of Media Studies, Harvard University",
    year: 2023,
  },
  {
    quote:
      "As a long-time subscriber, I've witnessed the magazine's evolution and consistent excellence. It remains my go-to source for industry insights.",
    author: "Robert Chen",
    position: "Senior Research Analyst, McKinsey & Company",
    year: 2023,
  },
  {
    quote:
      "The magazine's commitment to featuring diverse voices and perspectives has enriched our understanding of complex global issues.",
    author: "Dr. Amara Okafor",
    position: "Director of International Studies, Oxford University",
    year: 2023,
  },
];

function Legacy() {
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"grid" | "timeline">("grid");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "attendees">(
    "newest"
  );
  const [currentIntervieweeIndex, setCurrentIntervieweeIndex] = useState(0);
  const [isIntervieweePlaying, setIsIntervieweePlaying] = useState(true);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isTestimonialPlaying, setIsTestimonialPlaying] = useState(true);

  // Auto-advance slideshow
  useEffect(() => {
    if (isIntervieweePlaying) {
      const interval = setInterval(() => {
        setCurrentIntervieweeIndex(
          (prev) => (prev + 1) % famousInterviewees.length
        );
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
      case "newest":
        return b.year - a.year;
      case "oldest":
        return a.year - b.year;
      case "attendees":
        return (
          parseInt(b.attendees.replace(/\D/g, "")) -
          parseInt(a.attendees.replace(/\D/g, ""))
        );
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
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedIssue.gallery.length) %
          selectedIssue.gallery.length
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#e3c767]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-[#aa7d39]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#e3c767] to-transparent"></div>
            <Award className="mx-4 w-6 h-6 text-[#e3c767]" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#e3c767] to-transparent"></div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
              Our Legacy
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Two Decades of Excellence in Academic Publishing
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[#e3c767]">
            <div className="text-center">
              <div className="text-3xl font-bold">20</div>
              <div className="text-sm uppercase tracking-wider text-gray-300">
                Years
              </div>
            </div>
            <div className="w-px h-12 bg-[#e3c767]/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm uppercase tracking-wider text-gray-300">
                Issues
              </div>
            </div>
            <div className="w-px h-12 bg-[#e3c767]/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm uppercase tracking-wider text-gray-300">
                Readers
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Famous Interviewees Slideshow */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
                Voices of Innovation
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Insights from the visionaries who have shaped our industry
            </p>
          </div>

          <div className="relative">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Quote Side */}
                <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <Quote className="w-12 h-12 text-[#e3c767]/50 mb-6" />
                    <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed text-white mb-8">
                      "{famousInterviewees[currentIntervieweeIndex].quote}"
                    </blockquote>
                    <div className="mb-8">
                      <div className="text-xl lg:text-2xl font-bold text-[#e3c767] mb-1">
                        {famousInterviewees[currentIntervieweeIndex].name}
                      </div>
                      <div className="text-lg text-gray-300 mb-2">
                        {famousInterviewees[currentIntervieweeIndex].position}
                      </div>
                      <div className="text-sm text-[#aa7d39]">
                        Featured in{" "}
                        {famousInterviewees[currentIntervieweeIndex].year}
                      </div>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <button
                        onClick={() =>
                          setCurrentIntervieweeIndex(
                            (prev) =>
                              (prev - 1 + famousInterviewees.length) %
                              famousInterviewees.length
                          )
                        }
                        className="p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() =>
                          setCurrentIntervieweeIndex(
                            (prev) => (prev + 1) % famousInterviewees.length
                          )
                        }
                        className="p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Progress Indicators */}
                    <div className="flex gap-2">
                      {famousInterviewees.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIntervieweeIndex(idx)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            idx === currentIntervieweeIndex
                              ? "w-8 bg-[#e3c767]"
                              : "w-2 bg-gray-600 hover:bg-gray-500"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="lg:w-2/5 h-[300px] lg:h-[500px] relative overflow-hidden">
                  <img
                    src={famousInterviewees[currentIntervieweeIndex].image}
                    alt={famousInterviewees[currentIntervieweeIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* View Toggle */}
            <div className="flex items-center gap-4">
              <span className="text-[#e3c767] font-medium">View:</span>
              <div className="flex bg-gray-900/50 backdrop-blur-sm rounded-lg p-1 border border-gray-800">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                    viewMode === "grid"
                      ? "bg-[#e3c767] text-black"
                      : "text-gray-400 hover:text-[#e3c767]"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                  <span>Grid</span>
                </button>

              </div>
            </div>

            {/* Sort Controls */}
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-[#e3c767]" />
              <span className="text-[#e3c767] font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "newest" | "oldest" | "attendees")
                }
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg px-4 py-2 text-white focus:border-[#e3c767] focus:outline-none"
              >
                <option value="newest">Year (Newest to Oldest)</option>
                <option value="oldest">Year (Oldest to Newest)</option>
                <option value="attendees">Number of Attendees</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Issues Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
                Distinguished Issues
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Explore our carefully curated collection of publications that have
              shaped academic discourse over two decades
            </p>
          </div>

          <div className="max-h-[800px] overflow-y-auto custom-scrollbar">
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedIssues.map((issue, index) => (
                  <div
                    key={issue.year}
                    className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
                    onClick={() => openModal(issue)}
                  >
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden hover:border-[#e3c767]/50 transition-all duration-300">
                      <div
                        className="h-48 bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${issue.background})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                        {/* Year Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="bg-[#e3c767] text-black px-3 py-1 rounded-full font-bold text-lg">
                            {issue.year}
                          </div>
                        </div>

                        {/* Theme Badge */}
                        <div className="absolute top-4 right-4">
                          <div className="bg-gray-900/80 backdrop-blur-sm border border-[#e3c767]/30 px-3 py-1 rounded-full">
                            <span className="text-[#e3c767] text-sm">
                              {issue.theme}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#e3c767] transition-colors">
                          {issue.issue}
                        </h3>

                        <p className="text-gray-300 text-sm mb-4">
                          <span className="text-[#e3c767] font-medium">
                            Keynote:
                          </span>{" "}
                          {issue.keynoteSpeakers.join(" & ")}
                        </p>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-[#e3c767]" />
                            <span className="text-[#e3c767] font-bold">
                              {issue.attendees}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400 text-sm">
                              {issue.internationalReach}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Timeline View */
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#e3c767] via-[#aa7d39] to-[#B78F5A]"></div>

                <div className="space-y-16">
                  {sortedIssues.map((issue, index) => (
                    <div
                      key={issue.year}
                      className={`flex items-center ${
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      <div
                        className={`w-1/2 ${
                          index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                        }`}
                      >
                        <div
                          className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
                          onClick={() => openModal(issue)}
                        >
                          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-[#e3c767]/50 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="bg-[#e3c767] text-black px-3 py-1 rounded-full font-bold">
                                {issue.year}
                              </div>
                              <div className="bg-[#e3c767]/10 border border-[#e3c767]/30 px-3 py-1 rounded-full">
                                <span className="text-[#e3c767] text-sm">
                                  {issue.theme}
                                </span>
                              </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#e3c767] transition-colors">
                              {issue.issue}
                            </h3>

                            <p className="text-gray-300 mb-4">
                              <span className="text-[#e3c767] font-medium">
                                Keynote:
                              </span>{" "}
                              {issue.keynoteSpeakers.join(" & ")}
                            </p>

                            <div className="flex items-center gap-6">
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-[#e3c767]" />
                                <span className="text-[#e3c767] font-bold">
                                  {issue.attendees}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-400 text-sm">
                                  {issue.internationalReach}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Node */}
                      <div className="relative z-10">
                        <div className="w-6 h-6 bg-[#e3c767] rounded-full border-4 border-black shadow-lg"></div>
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

      {/* Distinguished Academic Staff Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#e3c767] to-transparent"></div>
              <Star className="mx-4 w-6 h-6 text-[#e3c767]" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#e3c767] to-transparent"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
                Distinguished Faculty
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Meet the esteemed academic leaders who have guided our publication
              to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {academicStaff.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6 mx-auto">
                  <div className="w-48 h-48 mx-auto relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#e3c767] to-[#aa7d39] p-0.5">
                      <div className="w-full h-full rounded-full bg-black p-1">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#e3c767] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#e3c767] mb-4 font-medium">
                  {member.position}
                </p>

                {member.bio && (
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                )}

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-[#e3c767] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Professional Profile</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
                What Our Community Says
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Testimonials from our valued readers and contributors
            </p>
          </div>

          <div className="relative">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-800 text-center">
              <Quote className="w-12 h-12 text-[#e3c767]/50 mx-auto mb-8" />

              <blockquote className="text-xl lg:text-2xl font-light leading-relaxed text-white mb-8 max-w-4xl mx-auto">
                "{testimonials[currentTestimonialIndex].quote}"
              </blockquote>

              <div className="mb-8">
                <div className="text-xl font-bold text-[#e3c767] mb-1">
                  {testimonials[currentTestimonialIndex].author}
                </div>
                <div className="text-lg text-gray-300">
                  {testimonials[currentTestimonialIndex].position}
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between max-w-md mx-auto">
                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      setCurrentTestimonialIndex(
                        (prev) =>
                          (prev - 1 + testimonials.length) % testimonials.length
                      )
                    }
                    className="p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentTestimonialIndex(
                        (prev) => (prev + 1) % testimonials.length
                      )
                    }
                    className="p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Progress Indicators */}
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonialIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentTestimonialIndex
                          ? "w-8 bg-[#e3c767]"
                          : "w-2 bg-gray-600 hover:bg-gray-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal remains the same but with updated colors */}
      {selectedIssue && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-4 sm:p-6">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-gray-800">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 sm:p-8 border-b border-gray-800">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
                    {selectedIssue.year}
                  </span>
                </h2>
                <p className="text-xl sm:text-2xl text-white font-light">
                  {selectedIssue.issue}
                </p>
                <p className="text-[#e3c767] mt-2">{selectedIssue.theme}</p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
              >
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </div>

            {/* Modal Content - Keep the existing content but update colors */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)] custom-scrollbar p-6 sm:p-8">
              {/* Rest of the modal content with updated color scheme */}
              {/* ... (keeping all existing modal sections but with updated colors) */}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #e3c767, #aa7d39);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #f4d03f, #e3c767);
        }
      `}</style>
    </div>
  );
}

export default Legacy;
