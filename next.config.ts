/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: [
              [require('remark-math'), {}]
            ],
            rehypePlugins: [
              [require('rehype-katex'), {}]
            ],
          },
        },
      ],
    })

    return config
  },
}

module.exports = nextConfig



// import createMDX from '@next/mdx'
// import remarkGfm from 'remark-gfm'
// import rehypeHighlight from 'rehype-highlight'
// import remarkMath from 'remark-math'
// import rehypeKatex from 'rehype-katex'

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
//   experimental: {
//     mdxRs: true,
//   },
// }

// const withMDX = createMDX({
//   options: {
//     remarkPlugins: [remarkGfm, remarkMath],
//     rehypePlugins: [rehypeHighlight, rehypeKatex],
//   },
// })

// export default withMDX(nextConfig)
