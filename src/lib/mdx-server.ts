import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import matter from 'gray-matter'

export interface MDXData {
  source: MDXRemoteSerializeResult
  frontmatter: Record<string, any>
  contentHtml?: string
}

export async function getMDXContent(slug: string): Promise<MDXData | null> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'content', `${slug}.mdx`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { content, data } = matter(fileContent)
    
    const source = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [rehypeHighlight, rehypeKatex],
      },
    })
    
    return {
      source,
      frontmatter: data,
    }
  } catch (error) {
    console.error('MDX processing error:', error)
    return null
  }
}

export function getAllMDXSlugs(): string[] {
  const contentDir = path.join(process.cwd(), 'src', 'content')
  
  if (!fs.existsSync(contentDir)) {
    return []
  }
  
  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}
