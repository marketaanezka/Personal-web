export type BlogFrontMatter = {
    frontMatter: {
        date: string,
        description: string,
        tags: string[],
        thumbnailUrl: string,
        title: string,
    },
    slug: string
}