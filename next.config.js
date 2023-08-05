// https://dev.to/msoup/fixing-require-statement-not-part-of-import-statementeslinttypescript-eslintno-var-requires-25n3
/* eslint-disable */
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        // If you use remark-gfm, you'll need to use next.config.mjs
        // as the package is ESM only
        // https://github.com/remarkjs/remark-gfm#install
        remarkPlugins: [],
        rehypePlugins: [],
        // If you use `MDXProvider`, uncomment the following line.
        // providerImportSource: "@mdx-js/react",
    },
})

module.exports = withMDX({
    // Append the default value with md extensions
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    images: {
        domains: ['images.unsplash.com', 'github.com', 'raw.githubusercontent.com'],
    },
})