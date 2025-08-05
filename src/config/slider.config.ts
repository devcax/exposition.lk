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
    src: "/assets/Main Slider/slide1.jpg",
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
    src: "/assets/Main Slider/slide2.jpg",
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
    src: "/assets/Main Slider/slide3.jpg",
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
    src: "/assets/Main Slider/slide4.jpg",
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
    src: "/assets/Main Slider/slide5.jpg",
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
];
