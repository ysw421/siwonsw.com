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

// mdx-components.tsx의 스타일을 HTML에 적용하는 함수 (테마 대응 개선)
function applyMDXComponentStyles(html: string): string {
  let styledHtml = html

  // h1 스타일 적용
  styledHtml = styledHtml.replace(
    /<h1([^>]*)>/g,
    '<h1$1 class="scroll-m-20 font-extrabold tracking-tight lg:text-5xl mb-6">'
  )

  // h2 스타일 적용 (테마 대응 테두리)
  styledHtml = styledHtml.replace(
    /<h2([^>]*)>/g,
    '<h2$1 class="mt-6 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-4" style="border-color: var(--code-border)">'
  )

  // h3 스타일 적용 (앵커 링크 포함, 테마 대응)
  styledHtml = styledHtml.replace(
    /<h3([^>]*)>(.*?)<\/h3>/g,
    (match, attributes, content) => {
      const textContent = content.replace(/<[^>]*>/g, '').trim()
      const id = slugify(textContent)
      return `<div class="group relative mb-3">
        <h3${attributes} id="${id}" class="scroll-m-20 text-2xl font-semibold tracking-tight">
          <a href="#${id}" style="color: var(--link)" class="hover:opacity-70 transition-opacity" aria-label="Link to ${textContent}">
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

  // blockquote 스타일 적용 (테마 대응)
  styledHtml = styledHtml.replace(
    /<blockquote([^>]*)>/g,
    '<blockquote$1 class="mt-6 border-l-2 pl-6 italic" style="border-color: var(--code-border)">'
  )

  // img 스타일 적용 (테마 대응 테두리)
  styledHtml = styledHtml.replace(
    /<img([^>]*?)>/g,
    '<img$1 class="rounded-md border max-w-full h-auto" style="border-color: var(--code-border)">'
  )

  // hr 스타일 적용 (테마 대응)
  styledHtml = styledHtml.replace(
    /<hr([^>]*)>/g,
    '<hr$1 class="my-4 md:my-8 border-0 h-px" style="background-color: var(--code-border)">'
  )

  // table 래퍼 및 스타일 적용 (테마 대응)
  styledHtml = styledHtml.replace(
    /<table([^>]*)>/g,
    '<div class="my-2 w-full overflow-y-auto"><table$1 class="w-full border-collapse" style="border-color: var(--code-border)">'
  )
  
  styledHtml = styledHtml.replace(
    /<\/table>/g,
    '</table></div>'
  )

  // tr 스타일 적용 (테마 대응)
  styledHtml = styledHtml.replace(
    /<tr([^>]*)>/g,
    '<tr$1 class="m-0 border-t p-0" style="border-color: var(--code-border)">'
  )

  // th 스타일 적용 (테마 대응 배경과 테두리)
  styledHtml = styledHtml.replace(
    /<th([^>]*)>/g,
    '<th$1 class="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right" style="border-color: var(--code-border); background-color: var(--code-bg)">'
  )

  // td 스타일 적용 (테마 대응 테두리)
  styledHtml = styledHtml.replace(
    /<td([^>]*)>/g,
    '<td$1 class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right" style="border-color: var(--code-border)">'
  )

  // pre 스타일 적용
  styledHtml = styledHtml.replace(
    /<pre([^>]*)>/g,
    '<pre$1 class="mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 py-4 px-6 text-sm text-zinc-50">'
  )

  // 인라인 코드 스타일 적용 (CSS 클래스 사용 - CSS에서 CSS 변수로 스타일링)
  styledHtml = styledHtml.replace(
    /(?<!<pre[^>]*>[\s\S]*?)<code([^>]*?)(?![^<]*<\/pre>)>/g,
    '<code$1 class="inline-code">'
  )

  return styledHtml
}

// LaTeX 박스 타입에 따른 색상 변수 반환 함수
function getBorderColorVar(boxType: string): string {
  const colorMappings = {
    'Theorem': 'var(--latex-darkcyan)',
    'Definition': 'var(--latex-darkblue)', 
    'Example': 'var(--latex-darkgreen)',
    'Exercise': 'var(--latex-darkred)',
    'Remark': 'var(--latex-darkpurple)',
    'Note': 'var(--latex-darkorange)',
    'Lemma': 'var(--latex-darkpink)',
    'Corollary': 'var(--latex-darkyellow)',
    'Proof': 'var(--latex-teal)',
    'Proposition': 'var(--latex-darkbrown)',
    'Conjecture': 'var(--latex-darkviolet)'
  }
  
  return colorMappings[boxType as keyof typeof colorMappings] || 'var(--latex-darkblue)'
}

// 커스텀 컴포넌트 처리 함수
export function processCustomComponents(html: string): string {
  // <Alert> 태그를 LaTeX 스타일 박스로 변환
  let processedHtml = html.replace(
    /<Alert\s+type="([^"]*)"[^>]*>([\s\S]*?)<\/Alert>/g,
    (match, type, content) => {
      const typeClasses = {
        'info': 'alert-info dark:alert-info',
        'warning': 'alert-warning dark:alert-warning',
        'error': 'alert-error dark:alert-error',
        'success': 'alert-success dark:alert-success',
      }
      
      const className = typeClasses[type as keyof typeof typeClasses] || typeClasses.info
      
      return `
        <div class="${className}">
          <div style="font-weight: 600; color: var(--link); margin-bottom: 0.5rem; font-size: 1rem; text-transform: uppercase; letter-spacing: 0.5px;">
            ${type.toUpperCase()}
          </div>
          <div>${content}</div>
        </div>
      `
    }
  )
  
  // LaTeX 스타일 박스들 처리 (LaTeX 파일의 정확한 색상 매핑)
  const latexBoxes = {
    'Theorem': 'theorem-box',        // darkcyan/lightcyan
    'Definition': 'definition-box',   // darkblue/lightblue
    'Example': 'example-box',        // darkgreen/lightgreen
    'Exercise': 'exercise-box',      // darkred/lightred
    'Remark': 'remark-box',         // darkpurple/lightpurple
    'Note': 'note-box',             // darkorange/lightorange
    'Lemma': 'lemma-box',           // darkpink/lightpink
    'Corollary': 'corollary-box',   // darkyellow/lightyellow
    'Proof': 'proof-box',           // teal/lightteal
    'Proposition': 'proposition-box', // darkbrown/lightbrown
    'Conjecture': 'conjecture-box'   // darkviolet/lightviolet
  }
  
  Object.entries(latexBoxes).forEach(([boxType, className]) => {
    // <Theorem>, <Definition> 등의 태그 처리
    const regex = new RegExp(`<${boxType}([^>]*)>([\s\S]*?)<\/${boxType}>`, 'g')
    processedHtml = processedHtml.replace(regex, (match, attributes, content) => {
      // title 속성 추출
      const titleMatch = attributes.match(/title="([^"]*)"/)
      const title = titleMatch ? titleMatch[1] : boxType
      
      // 각 박스 타입에 따른 CSS 변수 사용
      const borderColorVar = getBorderColorVar(boxType)
      
      return `
        <div class="${className}">
          <div class="latex-box-title" style="color: ${borderColorVar};">
            ${title}
          </div>
          <div>${content}</div>
        </div>
      `
    })
  })
  
  // Alert 박스들도 LaTeX 색상으로 매핑
  processedHtml = processedHtml.replace(
    /<Alert\s+type="([^"]*)"[^>]*>([\s\S]*?)<\/Alert>/g,
    (match, type, content) => {
      const alertMappings = {
        'info': { className: 'definition-box', colorVar: 'var(--latex-darkblue)' },
        'warning': { className: 'note-box', colorVar: 'var(--latex-darkorange)' },
        'error': { className: 'exercise-box', colorVar: 'var(--latex-darkred)' },
        'success': { className: 'example-box', colorVar: 'var(--latex-darkgreen)' }
      }
      
      const mapping = alertMappings[type as keyof typeof alertMappings] || alertMappings.info
      
      return `
        <div class="${mapping.className}">
          <div class="latex-box-title" style="color: ${mapping.colorVar};">
            ${type.charAt(0).toUpperCase() + type.slice(1)}
          </div>
          <div>${content}</div>
        </div>
      `
    }
  )
  
  // <CodeBlock> 태그를 개선된 LaTeX 스타일로 변환
  processedHtml = processedHtml.replace(
    /<CodeBlock\s+language="([^"]*)"[^>]*>([\s\S]*?)<\/CodeBlock>/g,
    (match, language, content) => {
      const cleanContent = content
        .replace(/^\s*{\s*`/, '') // 시작 부분 {` 제거
        .replace(/`\s*}\s*$/, '') // 끝 부분 `} 제거
        .trim()
      
      return `
        <div class="code-block-wrapper">
          <div class="code-block-header">
            <span class="code-block-language">${language}</span>
            <span class="code-block-copy">Copy</span>
          </div>
          <pre class="code-block-pre"><code class="language-${language}">${cleanContent}</code></pre>
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

// function slugify(text: string): string {
//   return text.toString().toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-가-힣]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '')
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
//     // mdx-components.tsx 스타일을 적용
//     contentHtml = applyMDXComponentStyles(contentHtml)
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

// // mdx-components.tsx의 스타일을 HTML에 적용하는 함수 (테마 대응 개선)
// function applyMDXComponentStyles(html: string): string {
//   let styledHtml = html

//   // h1 스타일 적용
//   styledHtml = styledHtml.replace(
//     /<h1([^>]*)>/g,
//     '<h1$1 class="scroll-m-20 font-extrabold tracking-tight lg:text-5xl mb-6">'
//   )

//   // h2 스타일 적용 (테마 대응 테두리)
//   styledHtml = styledHtml.replace(
//     /<h2([^>]*)>/g,
//     '<h2$1 class="mt-6 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-4" style="border-color: var(--code-border)">'
//   )

//   // h3 스타일 적용 (앵커 링크 포함, 테마 대응)
//   styledHtml = styledHtml.replace(
//     /<h3([^>]*)>(.*?)<\/h3>/g,
//     (match, attributes, content) => {
//       const textContent = content.replace(/<[^>]*>/g, '').trim()
//       const id = slugify(textContent)
//       return `<div class="group relative mb-3">
//         <h3${attributes} id="${id}" class="scroll-m-20 text-2xl font-semibold tracking-tight">
//           <a href="#${id}" style="color: var(--link)" class="hover:opacity-70 transition-opacity" aria-label="Link to ${textContent}">
//             <span>§ </span>
//           </a>
//           ${content}
//         </h3>
//       </div>`
//     }
//   )

//   // h4 스타일 적용
//   styledHtml = styledHtml.replace(
//     /<h4([^>]*)>/g,
//     '<h4$1 class="scroll-m-20 text-xl font-semibold tracking-tight mb-2">'
//   )

//   // p 스타일 적용
//   styledHtml = styledHtml.replace(
//     /<p([^>]*)>/g,
//     '<p$1 class="leading-7 [&:not(:first-child)]:mt-6">'
//   )

//   // ul 스타일 적용
//   styledHtml = styledHtml.replace(
//     /<ul([^>]*)>/g,
//     '<ul$1 class="my-2 ml-6 list-disc">'
//   )

//   // ol 스타일 적용
//   styledHtml = styledHtml.replace(
//     /<ol([^>]*)>/g,
//     '<ol$1 class="my-2 ml-6 list-decimal">'
//   )

//   // li 스타일 적용
//   styledHtml = styledHtml.replace(
//     /<li([^>]*)>/g,
//     '<li$1 class="mt-2">'
//   )

//   // blockquote 스타일 적용 (테마 대응)
//   styledHtml = styledHtml.replace(
//     /<blockquote([^>]*)>/g,
//     '<blockquote$1 class="mt-6 border-l-2 pl-6 italic" style="border-color: var(--code-border)">'
//   )

//   // img 스타일 적용 (테마 대응 테두리)
//   styledHtml = styledHtml.replace(
//     /<img([^>]*?)>/g,
//     '<img$1 class="rounded-md border max-w-full h-auto" style="border-color: var(--code-border)">'
//   )

//   // hr 스타일 적용 (테마 대응)
//   styledHtml = styledHtml.replace(
//     /<hr([^>]*)>/g,
//     '<hr$1 class="my-4 md:my-8 border-0 h-px" style="background-color: var(--code-border)">'
//   )

//   // table 래퍼 및 스타일 적용 (테마 대응)
//   styledHtml = styledHtml.replace(
//     /<table([^>]*)>/g,
//     '<div class="my-2 w-full overflow-y-auto"><table$1 class="w-full border-collapse" style="border-color: var(--code-border)">'
//   )
//   
//   styledHtml = styledHtml.replace(
//     /<\/table>/g,
//     '</table></div>'
//   )

//   // tr 스타일 적용 (테마 대응)
//   styledHtml = styledHtml.replace(
//     /<tr([^>]*)>/g,
//     '<tr$1 class="m-0 border-t p-0" style="border-color: var(--code-border)">'
//   )

//   // th 스타일 적용 (테마 대응 배경과 테두리)
//   styledHtml = styledHtml.replace(
//     /<th([^>]*)>/g,
//     '<th$1 class="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right" style="border-color: var(--code-border); background-color: var(--code-bg)">'
//   )

//   // td 스타일 적용 (테마 대응 테두리)
//   styledHtml = styledHtml.replace(
//     /<td([^>]*)>/g,
//     '<td$1 class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right" style="border-color: var(--code-border)">'
//   )

//   // pre 스타일 적용
//   styledHtml = styledHtml.replace(
//     /<pre([^>]*)>/g,
//     '<pre$1 class="mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 py-4 px-6 text-sm text-zinc-50">'
//   )

//   // 인라인 코드 스타일 적용 (CSS 클래스 사용 - CSS에서 CSS 변수로 스타일링)
//   styledHtml = styledHtml.replace(
//     /(?<!<pre[^>]*>[\s\S]*?)<code([^>]*?)(?![^<]*<\/pre>)>/g,
//     '<code$1 class="inline-code">'
//   )

//   return styledHtml
// }

// // LaTeX 박스 타입에 따른 색상 변수 반환 함수
// function getBorderColorVar(boxType: string): string {
//   const colorMappings = {
//     'Theorem': 'var(--latex-darkcyan)',
//     'Definition': 'var(--latex-darkblue)', 
//     'Example': 'var(--latex-darkgreen)',
//     'Exercise': 'var(--latex-darkred)',
//     'Remark': 'var(--latex-darkpurple)',
//     'Note': 'var(--latex-darkorange)',
//     'Lemma': 'var(--latex-darkpink)',
//     'Corollary': 'var(--latex-darkyellow)',
//     'Proof': 'var(--latex-teal)',
//     'Proposition': 'var(--latex-darkbrown)',
//     'Conjecture': 'var(--latex-darkviolet)'
//   }
//   
//   return colorMappings[boxType as keyof typeof colorMappings] || 'var(--latex-darkblue)'
// }

// // 커스텀 컴포넌트 처리 함수
// export function processCustomComponents(html: string): string {
//   // <Alert> 태그를 LaTeX 스타일 박스로 변환
//   let processedHtml = html.replace(
//     /<Alert\s+type="([^"]*)"[^>]*>([\s\S]*?)<\/Alert>/g,
//     (match, type, content) => {
//       const typeClasses = {
//         'info': 'alert-info dark:alert-info',
//         'warning': 'alert-warning dark:alert-warning',
//         'error': 'alert-error dark:alert-error',
//         'success': 'alert-success dark:alert-success',
//       }
//       
//       const className = typeClasses[type as keyof typeof typeClasses] || typeClasses.info
//       
//       return `
//         <div class="${className}">
//           <div style="font-weight: 600; color: var(--link); margin-bottom: 0.5rem; font-size: 1rem; text-transform: uppercase; letter-spacing: 0.5px;">
//             ${type.toUpperCase()}
//           </div>
//           <div>${content}</div>
//         </div>
//       `
//     }
//   )
//   
//   // LaTeX 스타일 박스들 처리 (LaTeX 파일의 정확한 색상 매핑)
//   const latexBoxes = {
//     'Theorem': 'theorem-box',        // darkcyan/lightcyan
//     'Definition': 'definition-box',   // darkblue/lightblue
//     'Example': 'example-box',        // darkgreen/lightgreen
//     'Exercise': 'exercise-box',      // darkred/lightred
//     'Remark': 'remark-box',         // darkpurple/lightpurple
//     'Note': 'note-box',             // darkorange/lightorange
//     'Lemma': 'lemma-box',           // darkpink/lightpink
//     'Corollary': 'corollary-box',   // darkyellow/lightyellow
//     'Proof': 'proof-box',           // teal/lightteal
//     'Proposition': 'proposition-box', // darkbrown/lightbrown
//     'Conjecture': 'conjecture-box'   // darkviolet/lightviolet
//   }
//   
//   Object.entries(latexBoxes).forEach(([boxType, className]) => {
//     // <Theorem>, <Definition> 등의 태그 처리
//     const regex = new RegExp(`<${boxType}([^>]*)>([\s\S]*?)<\/${boxType}>`, 'g')
//     processedHtml = processedHtml.replace(regex, (match, attributes, content) => {
//       // title 속성 추출
//       const titleMatch = attributes.match(/title="([^"]*)"/)
//       const title = titleMatch ? titleMatch[1] : boxType
//       
//       // 각 박스 타입에 따른 CSS 변수 사용
//       const borderColorVar = getBorderColorVar(boxType)
//       
//       return `
//         <div class="${className}">
//           <div class="latex-box-title" style="color: ${borderColorVar};">
//             ${title}
//           </div>
//           <div>${content}</div>
//         </div>
//       `
//     })
//   })
//   
//   // Alert 박스들도 LaTeX 색상으로 매핑
//   processedHtml = processedHtml.replace(
//     /<Alert\s+type="([^"]*)"[^>]*>([\s\S]*?)<\/Alert>/g,
//     (match, type, content) => {
//       const alertMappings = {
//         'info': { className: 'definition-box', colorVar: 'var(--latex-darkblue)' },
//         'warning': { className: 'note-box', colorVar: 'var(--latex-darkorange)' },
//         'error': { className: 'exercise-box', colorVar: 'var(--latex-darkred)' },
//         'success': { className: 'example-box', colorVar: 'var(--latex-darkgreen)' }
//       }
//       
//       const mapping = alertMappings[type as keyof typeof alertMappings] || alertMappings.info
//       
//       return `
//         <div class="${mapping.className}">
//           <div class="latex-box-title" style="color: ${mapping.colorVar};">
//             ${type.charAt(0).toUpperCase() + type.slice(1)}
//           </div>
//           <div>${content}</div>
//         </div>
//       `
//     }
//   )
//   
//   // <CodeBlock> 태그를 개선된 LaTeX 스타일로 변환
//   processedHtml = processedHtml.replace(
//     /<CodeBlock\s+language="([^"]*)"[^>]*>([\s\S]*?)<\/CodeBlock>/g,
//     (match, language, content) => {
//       const cleanContent = content
//         .replace(/^\s*{\s*`/, '') // 시작 부분 {` 제거
//         .replace(/`\s*}\s*$/, '') // 끝 부분 `} 제거
//         .trim()
//       
//       return `
//         <div class="code-block-wrapper">
//           <div class="code-block-header">
//             <span class="code-block-language">${language}</span>
//             <span class="code-block-copy">Copy</span>
//           </div>
//           <pre class="code-block-pre"><code class="language-${language}">${cleanContent}</code></pre>
//         </div>
//       `
//     }
//   )
//   
//   return processedHtml
// }

