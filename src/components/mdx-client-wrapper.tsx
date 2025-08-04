'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { useMDXComponents } from '../mdx-components'
import { useEffect } from 'react'

interface MDXClientWrapperProps {
  source: MDXRemoteSerializeResult
  className?: string
}

export function MDXClientWrapper({ source, className }: MDXClientWrapperProps) {
  const components = useMDXComponents({})
  
  useEffect(() => {
    // 클라이언트에서 KaTeX CSS 로드 확인
    if (!document.querySelector('link[href*="katex"]')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css'
      document.head.appendChild(link)
    }
  }, [])
  
  return (
    <div className={className}>
      <MDXRemote {...source} components={components} />
    </div>
  )
}

