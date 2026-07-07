export interface Project {
  id: string;
  title: string;
  category: "Content" | "Video" | "Social Media" | "Campaign";
  image: string;
  description: string;
  longDescription?: string;
  tags: string[];
  year: string;
  client?: string;
  role?: string;
  // Live demo interactive properties for a 3D designer portfolio
  interactive3D?: {
    modelType: "sphere" | "torus" | "cube_grid" | "ribbon";
    defaultColor: string;
  };
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  features: string[];
}

export interface ClientStory {
  company: string;
  quote: string;
  author: string;
  role: string;
}

/**
 * Text-first client entry used in the "Work that stands out" section.
 * Matches the screenshot design: bold company name, italic category,
 * followed by a short paragraph.
 */
export interface ClientWork {
  id: string;
  company: string;
  category: string;
  description: string;
  url?: string;
}

/** Normalized Instagram stats returned by /api/instagram. */
export interface InstagramStats {
  success: boolean;
  source: string;
  username: string;
  followers: number;
  following: number;
  posts: number;
  reel: {
    shortcode: string;
    url: string;
    views: number;
    likes: number;
    comments: number;
    caption: string;
    thumbnail: string;
  };
  updatedAt: string;
  error?: string;
}
