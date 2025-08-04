'use client'

import { useEffect, useRef } from 'react'

interface MDXContentProps {
  html: string
  className?: string
}

export function MDXContent({ html, className }: MDXContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (contentRef.current) {
      const codeBlocks = contentRef.current.querySelectorAll('pre code')
      codeBlocks.forEach((block) => {
        if (!block.classList.contains('hljs')) {
          block.classList.add('hljs')
        }
      })
      
      const tables = contentRef.current.querySelectorAll('table')
      tables.forEach((table) => {
        if (!table.parentElement?.classList.contains('table-wrapper')) {
          const wrapper = document.createElement('div')
          wrapper.classList.add('table-wrapper', 'overflow-x-auto', 'my-4')
          table.parentNode?.insertBefore(wrapper, table)
          wrapper.appendChild(table)
        }
      })
      
      // const headings = contentRef.current.querySelectorAll('h2, h3, h4, h5, h6')
      // headings.forEach((heading) => {
      //   if (!heading.id) {
      //     const text = heading.textContent || ''
      //     const id = text.toLowerCase().replace(/[^\w\s가-힣]/g, '').replace(/\s+/g, '-')
      //     heading.id = id
      //   }
      //   
      //   if (!heading.querySelector('.header-anchor')) {
      //     const anchor = document.createElement('a')
      //     anchor.href = `#${heading.id}`
      //     anchor.className = 'header-anchor'
      //     anchor.innerHTML = '§'
      //     anchor.style.color = 'var(--link)'
      //     anchor.style.textDecoration = 'none'
      //     anchor.style.marginRight = '0.2rem'
      //     heading.insertBefore(anchor, heading.firstChild)
      //   }
      // })
    }
  }, [html])
  
  return (
    <div 
      ref={contentRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

