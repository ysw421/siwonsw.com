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

function slugify(text: string): string {
  return text.toString().toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-가-힣]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '')
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
    
    // mdx-components.tsx 스타일을 적용
    contentHtml = applyMDXComponentStyles(contentHtml)
    
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

// mdx-components.tsx의 스타일을 HTML에 적용하는 함수
function applyMDXComponentStyles(html: string): string {
  let styledHtml = html

  // h1 스타일 적용
  styledHtml = styledHtml.replace(
    /<h1([^>]*)>/g,
    '<h1$1 class="scroll-m-20 font-extrabold tracking-tight lg:text-5xl mb-6">'
  )

  // h2 스타일 적용
  styledHtml = styledHtml.replace(
    /<h2([^>]*)>/g,
    '<h2$1 class="mt-6 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-4">'
  )

  // h3 스타일 적용 (앵커 링크 포함)
  styledHtml = styledHtml.replace(
    /<h3([^>]*)>(.*?)<\/h3>/g,
    (match, attributes, content) => {
      const textContent = content.replace(/<[^>]*>/g, '').trim()
      const id = slugify(textContent)
      return `<div class="group relative mb-3">
        <h3${attributes} id="${id}" class="scroll-m-20 text-2xl font-semibold tracking-tight">
          <a href="#${id}" style="color: var(--link)" aria-label="Link to ${textContent}">
            <span>§ </span>
          </a>
          ${content}
        </h3>
      </div>`
    }
  )

  // h4 스타일 적용
  styledHtml = styledHtml.replace(
    /<h4([^>]*)>/g,
    '<h4$1 class="scroll-m-20 text-xl font-semibold tracking-tight mb-2">'
  )

  // p 스타일 적용
  styledHtml = styledHtml.replace(
    /<p([^>]*)>/g,
    '<p$1 class="leading-7 [&:not(:first-child)]:mt-6">'
  )

  // ul 스타일 적용
  styledHtml = styledHtml.replace(
    /<ul([^>]*)>/g,
    '<ul$1 class="my-2 ml-6 list-disc">'
  )

  // ol 스타일 적용
  styledHtml = styledHtml.replace(
    /<ol([^>]*)>/g,
    '<ol$1 class="my-2 ml-6 list-decimal">'
  )

  // li 스타일 적용
  styledHtml = styledHtml.replace(
    /<li([^>]*)>/g,
    '<li$1 class="mt-2">'
  )

  // blockquote 스타일 적용
  styledHtml = styledHtml.replace(
    /<blockquote([^>]*)>/g,
    '<blockquote$1 class="mt-6 border-l-2 pl-6 italic border-gray-300">'
  )

  // img 스타일 적용
  styledHtml = styledHtml.replace(
    /<img([^>]*?)>/g,
    '<img$1 class="rounded-md border max-w-full h-auto">'
  )

  // hr 스타일 적용
  styledHtml = styledHtml.replace(
    /<hr([^>]*)>/g,
    '<hr$1 class="my-4 md:my-8">'
  )

  // table 래퍼 및 스타일 적용
  styledHtml = styledHtml.replace(
    /<table([^>]*)>/g,
    '<div class="my-2 w-full overflow-y-auto"><table$1 class="w-full">'
  )
  
  styledHtml = styledHtml.replace(
    /<\/table>/g,
    '</table></div>'
  )

  // tr 스타일 적용
  styledHtml = styledHtml.replace(
    /<tr([^>]*)>/g,
    '<tr$1 class="m-0 border-t p-0 even:bg-gray-50">'
  )

  // th 스타일 적용
  styledHtml = styledHtml.replace(
    /<th([^>]*)>/g,
    '<th$1 class="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">'
  )

  // td 스타일 적용
  styledHtml = styledHtml.replace(
    /<td([^>]*)>/g,
    '<td$1 class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">'
  )

  // pre 스타일 적용
  styledHtml = styledHtml.replace(
    /<pre([^>]*)>/g,
    '<pre$1 class="mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 py-4 px-6 text-sm text-zinc-50">'
  )

  // code 스타일 적용 (pre 안에 있지 않은 경우만)
  styledHtml = styledHtml.replace(
    /(?<!<pre[^>]*>.*?)<code([^>]*)>/g,
    '<code$1 class="relative rounded bg-gray-100 dark:bg-blue-900 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">'
  )

  return styledHtml
}

// 커스텀 컴포넌트 처리 함수
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

// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'
// import { remark } from 'remark'
// import remarkGfm from 'remark-gfm'
// import remarkMath from 'remark-math'
// import remarkRehype from 'remark-rehype'
// import rehypeKatex from 'rehype-katex'
// import rehypeStringify from 'rehype-stringify'
// import rehypeHighlight from 'rehype-highlight'

// export interface MDXProcessedData {
//   contentHtml: string
//   frontmatter: Record<string, any>
//   excerpt?: string
// }

// export async function processMDXContent(slug: string): Promise<MDXProcessedData | null> {
//   try {
//     const filePath = path.join(process.cwd(), 'src', 'content', `${slug}.mdx`)
//     
//     if (!fs.existsSync(filePath)) {
//       return null
//     }
//     
//     const fileContent = fs.readFileSync(filePath, 'utf8')
//     const { content, data } = matter(fileContent)
//     
//     // remark를 사용해서 마크다운을 HTML로 변환
//     const result = await remark()
//       .use(remarkGfm)
//       .use(remarkMath)
//       .use(remarkRehype, { allowDangerousHtml: true })
//       .use(rehypeKatex)
//       .use(rehypeHighlight)
//       .use(rehypeStringify, { allowDangerousHtml: true })
//       .process(content)
//     
//     let contentHtml = result.toString()
//     
//     // 커스텀 컴포넌트 처리
//     contentHtml = processCustomComponents(contentHtml)
//     
//     // 발췌문 생성 (첫 번째 문단)
//     const excerpt = content
//       .replace(/^---[\s\S]*?---/, '') // frontmatter 제거
//       .replace(/^#[^\n]*\n/, '') // 제목 제거
//       .split('\n\n')[0] // 첫 번째 문단
//       .replace(/[#*`]/g, '') // 마크다운 문법 제거
//       .trim()
//       .substring(0, 160)
//     
//     return {
//       contentHtml,
//       frontmatter: data,
//       excerpt: excerpt || undefined
//     }
//   } catch (error) {
//     console.error('MDX processing error:', error)
//     return null
//   }
// }

// export function getAllMDXSlugs(): string[] {
//   const contentDir = path.join(process.cwd(), 'src', 'content')
//   
//   if (!fs.existsSync(contentDir)) {
//     return []
//   }
//   
//   return fs
//     .readdirSync(contentDir)
//     .filter((file) => file.endsWith('.mdx'))
//     .map((file) => file.replace(/\.mdx$/, ''))
// }

// // 커스텀 컴포넌트 처리 함수 - 이 함수를 여기로 이동
// export function processCustomComponents(html: string): string {
//   // <Alert> 태그를 HTML div로 변환
//   let processedHtml = html.replace(
//     /<Alert\s+type="([^"]*)"[^>]*>([\s\S]*?)<\/Alert>/g,
//     (match, type, content) => {
//       const typeClasses = {
//         'info': 'bg-blue-50 border-blue-400 text-blue-800 dark:bg-blue-900 dark:border-blue-600 dark:text-blue-200',
//         'warning': 'bg-yellow-50 border-yellow-400 text-yellow-800 dark:bg-yellow-900 dark:border-yellow-600 dark:text-yellow-200',
//         'error': 'bg-red-50 border-red-400 text-red-800 dark:bg-red-900 dark:border-red-600 dark:text-red-200',
//         'success': 'bg-green-50 border-green-400 text-green-800 dark:bg-green-900 dark:border-green-600 dark:text-green-200',
//       }
//       
//       const classes = typeClasses[type as keyof typeof typeClasses] || typeClasses.info
//       
//       return `<div class="p-4 mb-4 rounded-lg border-l-4 ${classes}">${content}</div>`
//     }
//   )
//   
//   // <CodeBlock> 태그를 HTML pre/code로 변환
//   processedHtml = processedHtml.replace(
//     /<CodeBlock\s+language="([^"]*)"[^>]*>([\s\S]*?)<\/CodeBlock>/g,
//     (match, language, content) => {
//       const cleanContent = content
//         .replace(/^\s*{\s*`/, '') // 시작 부분 {` 제거
//         .replace(/`\s*}\s*$/, '') // 끝 부분 `} 제거
//         .trim()
//       
//       return `
//         <div class="relative">
//           <div class="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-200 text-sm rounded-t-lg">
//             <span>${language}</span>
//           </div>
//           <pre class="bg-gray-900 text-gray-100 p-4 overflow-x-auto rounded-b-lg"><code class="language-${language}">${cleanContent}</code></pre>
//         </div>
//       `
//     }
//   )
//   
//   return processedHtml
// }

