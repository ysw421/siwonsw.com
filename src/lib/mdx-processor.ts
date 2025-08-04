import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'

export interface MDXProcessedData {
  contentHtml: string
  frontmatter: Record<string, any>
  excerpt?: string
}

export async function processMDXContent(slug: string): Promise<MDXProcessedData | null> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'content', `${slug}.mdx`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { content, data } = matter(fileContent)
    
    // remark를 사용해서 마크다운을 HTML로 변환
    const result = await remark()
      .use(remarkGfm)
      .use(remarkMath)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeKatex)
      .use(rehypeHighlight)
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(content)
    
    let contentHtml = result.toString()
    
    // 커스텀 컴포넌트 처리
    contentHtml = processCustomComponents(contentHtml)
    
    // 발췌문 생성 (첫 번째 문단)
    const excerpt = content
      .replace(/^---[\s\S]*?---/, '') // frontmatter 제거
      .replace(/^#[^\n]*\n/, '') // 제목 제거
      .split('\n\n')[0] // 첫 번째 문단
      .replace(/[#*`]/g, '') // 마크다운 문법 제거
      .trim()
      .substring(0, 160)
    
    return {
      contentHtml,
      frontmatter: data,
      excerpt: excerpt || undefined
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

// 커스텀 컴포넌트 처리 함수 - 이 함수를 여기로 이동
export function processCustomComponents(html: string): string {
  // <Alert> 태그를 HTML div로 변환
  let processedHtml = html.replace(
    /<Alert\s+type="([^"]*)"[^>]*>([\s\S]*?)<\/Alert>/g,
    (match, type, content) => {
      const typeClasses = {
        'info': 'bg-blue-50 border-blue-400 text-blue-800 dark:bg-blue-900 dark:border-blue-600 dark:text-blue-200',
        'warning': 'bg-yellow-50 border-yellow-400 text-yellow-800 dark:bg-yellow-900 dark:border-yellow-600 dark:text-yellow-200',
        'error': 'bg-red-50 border-red-400 text-red-800 dark:bg-red-900 dark:border-red-600 dark:text-red-200',
        'success': 'bg-green-50 border-green-400 text-green-800 dark:bg-green-900 dark:border-green-600 dark:text-green-200',
      }
      
      const classes = typeClasses[type as keyof typeof typeClasses] || typeClasses.info
      
      return `<div class="p-4 mb-4 rounded-lg border-l-4 ${classes}">${content}</div>`
    }
  )
  
  // <CodeBlock> 태그를 HTML pre/code로 변환
  processedHtml = processedHtml.replace(
    /<CodeBlock\s+language="([^"]*)"[^>]*>([\s\S]*?)<\/CodeBlock>/g,
    (match, language, content) => {
      const cleanContent = content
        .replace(/^\s*{\s*`/, '') // 시작 부분 {` 제거
        .replace(/`\s*}\s*$/, '') // 끝 부분 `} 제거
        .trim()
      
      return `
        <div class="relative">
          <div class="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-200 text-sm rounded-t-lg">
            <span>${language}</span>
          </div>
          <pre class="bg-gray-900 text-gray-100 p-4 overflow-x-auto rounded-b-lg"><code class="language-${language}">${cleanContent}</code></pre>
        </div>
      `
    }
  )
  
  return processedHtml
}

