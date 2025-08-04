'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { useMDXComponents } from '../mdx-components'
import { useEffect, useState } from 'react'

interface MDXHydrationBoundaryProps {
  source: MDXRemoteSerializeResult
  className?: string
}

export function MDXHydrationBoundary({ source, className }: MDXHydrationBoundaryProps) {
  const [mounted, setMounted] = useState(false)
  const components = useMDXComponents({})
  
  useEffect(() => {
    setMounted(true)
    
    if (!document.querySelector('link[href*="katex"]')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css'
      document.head.appendChild(link)
    }
  }, [])

  if (!mounted) {
    return (
      <div className={className}>
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    )
  }
  
  return (
    <div className={className}>
      <MDXRemote {...source} components={components} />
    </div>
  )
}

