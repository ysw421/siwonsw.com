import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/compile'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { serverMDXComponents } from '@/components/mdx-components-server'

export async function getStaticMDXContent(slug: string) {
  const filePath = path.join(process.cwd(), 'src', 'content', `${slug}.mdx`)
  
  if (!fs.existsSync(filePath)) {
    return null
  }
  
  const source = fs.readFileSync(filePath, 'utf8')
  
  try {
    const { content, frontmatter } = await compileMDX({
      source,
      components: serverMDXComponents,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath],
          rehypePlugins: [rehypeHighlight, rehypeKatex],
        },
      },
    })

    return {
      content,
      frontmatter,
    }
  } catch (error) {
    console.error('Static MDX compilation error:', error)
    return null
  }
}

