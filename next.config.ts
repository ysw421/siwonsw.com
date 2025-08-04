import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeHighlight, rehypeKatex],
  },
})

export default withMDX(nextConfig)




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
