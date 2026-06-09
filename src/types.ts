export interface Project {
  id: string;
  title: string;
  category: "3D Design" | "Art Direction" | "Branding" | "Editorial Layout" | "Motion Graphics";
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
