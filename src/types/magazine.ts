export interface MagazineIssue {
  id: string;
  year: number;
  title: string;
  theme: string;
  coverImage: string;
  backgroundImage: string;
  publicationDate: string;
  keynoteNames: string;
  attendeesCount: string;
  reachScope: string;
  description: string;
  highlights: string[];
  articles: {
    title: string;
    author: string;
    excerpt: string;
  }[];
  statistics: {
    totalArticles: number;
    contributingWriters: number;
    universitiesRepresented: number;
  };
}
