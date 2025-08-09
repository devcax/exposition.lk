export interface Slide {
  id: number;
  src: string;
  alt: string;
  logo: string;
  subtitle: string;
  description: string;
  cta: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
}

export const SLIDER_DATA: Slide[] = [
  {
    id: 1,
    src: "/assets/Main Slider/slide1.png",
    alt: "Exposition Event Highlight",
    logo: "/assets/Expo logo.svg",
    subtitle: "University Magazine Excellence",
    description:
      "Discover groundbreaking research, inspiring stories, and the future of education through our comprehensive magazine platform.",
    cta: {
      primary: {
        text: "E-Magazine",
        href: "https://emagazine.exposition.lk/",
      },
      secondary: {
        text: "Our Legacy",
        href: "/legacy",
      },
    },
  },
  {
    id: 2,
    src: "/assets/Main Slider/slide2.png",
    alt: "Exposition Event Highlight",
    logo: "/assets/Expo logo.svg",
    subtitle: "Innovation in Every Page",
    description:
      "Explore the latest breakthroughs and creative works from the brightest minds in academia.",
    cta: {
      primary: {
        text: "E-Magazine",
        href: "https://emagazine.exposition.lk/",
      },
      secondary: {
        text: "Our Legacy",
        href: "/legacy",
      },
    },
  },
  {
    id: 3,
    src: "/assets/Main Slider/slide3.png",
    alt: "Exposition Event Highlight",
    logo: "/assets/Expo logo.svg",
    subtitle: "A Legacy of Knowledge",
    description:
      "Journey through our archives and witness the evolution of ideas that have shaped our university.",
    cta: {
      primary: {
        text: "E-Magazine",
        href: "https://emagazine.exposition.lk/",
      },
      secondary: {
        text: "Our Legacy",
        href: "/legacy",
      },
    },
  },
  {
    id: 4,
    src: "/assets/Main Slider/slide4.png",
    alt: "Exposition Event Highlight",
    logo: "/assets/Expo logo.svg",
    subtitle: "Connecting Campus & Community",
    description:
      "See how our students and faculty are making an impact beyond the walls of the university.",
    cta: {
      primary: {
        text: "E-Magazine",
        href: "https://emagazine.exposition.lk/",
      },
      secondary: {
        text: "Our Legacy",
        href: "/legacy",
      },
    },
  },
  {
    id: 5,
    src: "/assets/Main Slider/slide5.png",
    alt: "Exposition Event Highlight",
    logo: "/assets/Expo logo.svg",
    subtitle: "The Future is Here",
    description:
      "Get a glimpse into the future with features on cutting-edge projects and forward-thinking initiatives.",
    cta: {
      primary: {
        text: "E-Magazine",
        href: "https://emagazine.exposition.lk/",
      },
      secondary: {
        text: "Our Legacy",
        href: "/legacy",
      },
    },
  },
  {
    id: 6,
    src: "/assets/Main Slider/slide6.png",
    alt: "Exposition Event Highlight",
    logo: "/assets/Expo logo.svg",
    subtitle: "Research Excellence",
    description:
      "Dive deep into the research initiatives that are pushing the boundaries of knowledge and innovation.",
    cta: {
      primary: {
        text: "E-Magazine",
        href: "https://emagazine.exposition.lk/",
      },
      secondary: {
        text: "Our Legacy",
        href: "/legacy",
      },
    },
  },
  {
    id: 7,
    src: "/assets/Main Slider/slide7.png",
    alt: "Exposition Event Highlight",
    logo: "/assets/Expo logo.svg",
    subtitle: "Student Achievements",
    description:
      "Celebrate the remarkable achievements and contributions of our talented student community.",
    cta: {
      primary: {
        text: "E-Magazine",
        href: "https://emagazine.exposition.lk/",
      },
      secondary: {
        text: "Our Legacy",
        href: "/legacy",
      },
    },
  },
  {
    id: 8,
    src: "/assets/Main Slider/slide8.png",
    alt: "Exposition Event Highlight",
    logo: "/assets/Expo logo.svg",
    subtitle: "Industry Partnerships",
    description:
      "Explore how our partnerships with industry leaders are creating opportunities for students and faculty.",
    cta: {
      primary: {
        text: "E-Magazine",
        href: "https://emagazine.exposition.lk/",
      },
      secondary: {
        text: "Our Legacy",
        href: "/legacy",
      },
    },
  },
  {
    id: 9,
    src: "/assets/Main Slider/slide9.png",
    alt: "Exposition Event Highlight",
    logo: "/assets/Expo logo.svg",
    subtitle: "Global Perspectives",
    description:
      "Discover how our university is contributing to global conversations and international collaborations.",
    cta: {
      primary: {
        text: "E-Magazine",
        href: "https://emagazine.exposition.lk/",
      },
      secondary: {
        text: "Our Legacy",
        href: "/legacy",
      },
    },
  },
  {
    id: 10,
    src: "/assets/Main Slider/slide10.png",
    alt: "Exposition Event Highlight",
    logo: "/assets/Expo logo.svg",
    subtitle: "Innovation Hub",
    description:
      "Step into our innovation spaces where creativity meets technology to solve real-world challenges.",
    cta: {
      primary: {
        text: "E-Magazine",
        href: "https://emagazine.exposition.lk/",
      },
      secondary: {
        text: "Our Legacy",
        href: "/legacy",
      },
    },
  },
  {
    id: 11,
    src: "/assets/Main Slider/slide11.png",
    alt: "Exposition Event Highlight",
    logo: "/assets/Expo logo.svg",
    subtitle: "Community Impact",
    description:
      "See how our university initiatives are making a positive difference in local and global communities.",
    cta: {
      primary: {
        text: "E-Magazine",
        href: "https://emagazine.exposition.lk/",
      },
      secondary: {
        text: "Our Legacy",
        href: "/legacy",
      },
    },
  },
  {
    id: 12,
    src: "/assets/Main Slider/slide12.png",
    alt: "Exposition Event Highlight",
    logo: "/assets/Expo logo.svg",
    subtitle: "Future Leaders",
    description:
      "Meet the emerging leaders who are shaping the future through their vision and dedication.",
    cta: {
      primary: {
        text: "E-Magazine",
        href: "https://emagazine.exposition.lk/",
      },
      secondary: {
        text: "Our Legacy",
        href: "/legacy",
      },
    },
  },
  {
    id: 13,
    src: "/assets/Main Slider/slide13.jpg",
    alt: "Exposition Event Highlight",
    logo: "/assets/Expo logo.svg",
    subtitle: "Endless Possibilities",
    description:
      "Join us as we continue to explore new frontiers and create opportunities for the next generation.",
    cta: {
      primary: {
        text: "E-Magazine",
        href: "https://emagazine.exposition.lk/",
      },
      secondary: {
        text: "Our Legacy",
        href: "/legacy",
      },
    },
  },
];
