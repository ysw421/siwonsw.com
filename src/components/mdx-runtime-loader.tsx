'use client'

import { useState, useEffect } from 'react'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { useMDXComponents } from '../mdx-components'

interface MDXRuntimeLoaderProps {
  source: string
  className?: string
}

export function MDXRuntimeLoader({ source, className }: MDXRuntimeLoaderProps) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const components = useMDXComponents({})

  useEffect(() => {
    const processMDX = async () => {
      try {
        setLoading(true)
        setError(null)
        
        if (!document.querySelector('link[href*="katex"]')) {
          const link = document.createElement('link')
          link.rel = 'stylesheet'
          link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css'
          document.head.appendChild(link)
        }
        
        const serialized = await serialize(source, {
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkMath],
            rehypePlugins: [rehypeHighlight, rehypeKatex],
          },
        })
        
        setMdxSource(serialized)
      } catch (err) {
        console.error('MDX processing error:', err)
        setError('MDX processing error')
      } finally {
        setLoading(false)
      }
    }

    if (source) {
      processMDX()
    }
  }, [source])

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2">MDX loaading...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-4 border border-red-300 rounded-lg bg-red-50 text-red-800">
        {error}
      </div>
    )
  }

  if (!mdxSource) {
    return null
  }

  return (
    <div className={className}>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  )
}

export function useMDXFileLoader() {
  const [cache, setCache] = useState<Record<string, string>>({})

  const loadMDXFile = async (path: string): Promise<string | null> => {
    if (cache[path]) {
      return cache[path]
    }

    try {
      const response = await fetch(`/api/mdx/${path}`)
      if (!response.ok) {
        throw new Error('file loading error')
      }
      
      const content = await response.text()
      setCache(prev => ({ ...prev, [path]: content }))
      return content
    } catch (error) {
      console.error(`MDX file loading fail: ${path}`, error)
      return null
    }
  }

  return { loadMDXFile, cache }
}
