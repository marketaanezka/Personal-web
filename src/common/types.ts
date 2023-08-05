export interface PostFrontMatter {
    date: string;
    description: string;
    tags: string[];
    thumbnailUrl: string;
    title: string;
}

export interface Post {
    frontMatter: PostFrontMatter;
    slug: string;
}

export interface ProjectFrontMatter {
    title: string,
    description: string,
    technologies: string[],
    image: string,
    imageAlt: string,
}

export interface Project {
    frontMatter: ProjectFrontMatter,
    slug: string,
}


