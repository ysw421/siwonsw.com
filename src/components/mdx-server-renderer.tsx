import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serverMDXComponents } from './mdx-components-server'

interface MDXServerRendererProps {
  source: MDXRemoteSerializeResult
  className?: string
}

export function MDXServerRenderer({ source, className }: MDXServerRendererProps) {
  return (
    <div className={className}>
      <MDXRemote {...source} components={serverMDXComponents} />
    </div>
  )
}

