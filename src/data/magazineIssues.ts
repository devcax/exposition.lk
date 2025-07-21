import { MagazineIssue } from '../types/magazine';

export const magazineIssues: MagazineIssue[] = [
  {
    id: "issue-2021",
    year: 2021,
    title: "Recovery & Growth",
    theme: "Resilient Growth",
    coverImage: "/images/magazine-covers/2021-cover.jpg",
    backgroundImage: "/images/magazine-covers/2021-bg.jpg",
    publicationDate: "December 2021",
    keynoteNames: "Dr. Business Leader & Innovation Expert",
    attendeesCount: "900+",
    reachScope: "From 20+ Countries",
    description: "Exploring how industries and societies adapted and thrived during challenging times, this issue focuses on resilience, innovation, and sustainable growth strategies.",
    highlights: [
      "Post-pandemic business recovery strategies",
      "Digital transformation in traditional industries",
      "Sustainable development goals implementation",
      "Youth entrepreneurship in crisis times",
      "Remote work culture evolution"
    ],
    articles: [
      {
        title: "The New Normal: Redefining Business Operations",
        author: "Dr. Sarah Mitchell",
        excerpt: "An in-depth analysis of how businesses pivoted during the pandemic and emerged stronger..."
      },
      {
        title: "Green Recovery: Environmental Sustainability in Economic Growth",
        author: "Prof. James Chen",
        excerpt: "Examining the intersection of environmental consciousness and economic recovery..."
      }
    ],
    statistics: {
      totalArticles: 24,
      contributingWriters: 18,
      universitiesRepresented: 12
    }
  },
  {
    id: "issue-2020",
    year: 2020,
    title: "Digital Transformation",
    theme: "Digital Revolution",
    coverImage: "/images/magazine-covers/2020-cover.jpg",
    backgroundImage: "/images/magazine-covers/2020-bg.jpg",
    publicationDate: "November 2020",
    keynoteNames: "Dr. Amanda Foster & Tech Innovator Panel",
    attendeesCount: "1200+",
    reachScope: "Global Virtual Event",
    description: "A comprehensive exploration of the digital revolution transforming industries, education, and daily life, featuring insights from leading tech innovators and digital strategists.",
    highlights: [
      "AI and machine learning applications",
      "Blockchain technology implementation",
      "Cybersecurity in digital age",
      "EdTech revolution in higher education",
      "Future of work and automation"
    ],
    articles: [
      {
        title: "Artificial Intelligence: Beyond the Hype",
        author: "Dr. Robert Kim",
        excerpt: "A practical look at AI implementation across various industries..."
      },
      {
        title: "Blockchain: Building Trust in Digital Transactions",
        author: "Alice Johnson",
        excerpt: "Understanding blockchain technology and its real-world applications..."
      },
      {
        title: "The Future Classroom: EdTech Innovations",
        author: "Prof. David Lee",
        excerpt: "How technology is reshaping education and learning experiences..."
      }
    ],
    statistics: {
      totalArticles: 28,
      contributingWriters: 22,
      universitiesRepresented: 15
    }
  },
  {
    id: "issue-2019",
    year: 2019,
    title: "Special Edition",
    theme: "Sustainable Future",
    coverImage: "/images/magazine-covers/2019-cover.jpg",
    backgroundImage: "/images/magazine-covers/2019-bg.jpg",
    publicationDate: "October 2019",
    keynoteNames: "Casey Lau & Amarit Charoenphan",
    attendeesCount: "1000+",
    reachScope: "From around the world",
    description: "A special edition dedicated to sustainability, environmental consciousness, and building a better future for generations to come through innovative solutions and collaborative efforts.",
    highlights: [
      "Climate change mitigation strategies",
      "Renewable energy innovations",
      "Sustainable business models",
      "Environmental policy and governance",
      "Youth activism in environmental causes"
    ],
    articles: [
      {
        title: "Climate Action: From Policy to Practice",
        author: "Dr. Emma Thompson",
        excerpt: "Bridging the gap between environmental policy and practical implementation..."
      },
      {
        title: "Renewable Energy: The Path Forward",
        author: "Michael Brown",
        excerpt: "Exploring innovative renewable energy solutions and their global impact..."
      },
      {
        title: "Sustainable Entrepreneurship: Business for Good",
        author: "Laura Wilson",
        excerpt: "How young entrepreneurs are building sustainable business models..."
      }
    ],
    statistics: {
      totalArticles: 26,
      contributingWriters: 20,
      universitiesRepresented: 14
    }
  }
];