'use client'

import { MDXProvider } from '@mdx-js/react'
import { useMDXComponents } from '../mdx-components'
import { useEffect } from 'react'

interface MDXProviderWrapperProps {
  children: React.ReactNode
}

export function MDXProviderWrapper({ children }: MDXProviderWrapperProps) {
  const components = useMDXComponents({})
  
  useEffect(() => {
    if (!document.querySelector('link[href*="katex"]')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css'
      document.head.appendChild(link)
    }
  }, [])
  
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  )
}

