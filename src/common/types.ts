export interface FrontMatter {
    date: string;
    description: string;
    tags: string[];
    thumbnailUrl: string;
    title: string;
}

export interface Post {
    frontMatter: FrontMatter;
    slug: string;
}
