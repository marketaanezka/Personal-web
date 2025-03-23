export interface PostFrontMatter {
  date: number;
  description: string;
  readingtime: string;
  tags: string[];
  thumbnailUrl: string;
  title: string;
}

export interface Post {
  frontMatter: PostFrontMatter;
  slug: string;
}

export interface ProjectFrontMatter {
  title: string;
  year: number;
  company?: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
}

export interface Project {
  frontMatter: ProjectFrontMatter;
  slug: string;
}

export interface MediaPost {
  externalLink: string;
  avatar: string;
  alt: string;
  heading: string;
  description: string;
}

export interface CourseCard {
  link: string;
  image: string;
  date?: string;
  time: string;
  price: string;
  alt: string;
  heading: string;
  description: string;
  tags: string[];
}

export enum TagColor {
  Purple = "purple",
  Blue = "blue",
  Teal = "teal",
  Cyan = "cyan",
  Pink = "pink",
  Yellow = "yellow",
}

export interface SkillsCard {
  heading: string;
  skillsList: string[];
  color: TagColor;
}
