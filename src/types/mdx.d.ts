declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
}

declare module 'mdx/types' {
  import { HTMLAttributes, ReactNode } from 'react'
  
  export interface MDXComponents {
    [key: string]: React.ComponentType<any>
    h1?: React.ComponentType<HTMLAttributes<HTMLHeadingElement> & { className?: string }>
    h2?: React.ComponentType<HTMLAttributes<HTMLHeadingElement> & { className?: string }>
    h3?: React.ComponentType<HTMLAttributes<HTMLHeadingElement> & { className?: string }>
    h4?: React.ComponentType<HTMLAttributes<HTMLHeadingElement> & { className?: string }>
    h5?: React.ComponentType<HTMLAttributes<HTMLHeadingElement> & { className?: string }>
    h6?: React.ComponentType<HTMLAttributes<HTMLHeadingElement> & { className?: string }>
    p?: React.ComponentType<HTMLAttributes<HTMLParagraphElement> & { className?: string }>
    ul?: React.ComponentType<HTMLAttributes<HTMLUListElement> & { className?: string }>
    ol?: React.ComponentType<HTMLAttributes<HTMLOListElement> & { className?: string }>
    li?: React.ComponentType<HTMLAttributes<HTMLLIElement> & { className?: string }>
    blockquote?: React.ComponentType<HTMLAttributes<HTMLQuoteElement> & { className?: string }>
    img?: React.ComponentType<HTMLAttributes<HTMLImageElement> & { className?: string; alt?: string }>
    hr?: React.ComponentType<HTMLAttributes<HTMLHRElement>>
    table?: React.ComponentType<HTMLAttributes<HTMLTableElement> & { className?: string }>
    tr?: React.ComponentType<HTMLAttributes<HTMLTableRowElement> & { className?: string }>
    th?: React.ComponentType<HTMLAttributes<HTMLTableHeaderCellElement> & { className?: string }>
    td?: React.ComponentType<HTMLAttributes<HTMLTableDataCellElement> & { className?: string }>
    pre?: React.ComponentType<HTMLAttributes<HTMLPreElement> & { className?: string }>
    code?: React.ComponentType<HTMLAttributes<HTMLElement> & { className?: string }>
    Alert?: React.ComponentType<{
      type?: 'info' | 'warning' | 'error' | 'success'
      children: ReactNode
      className?: string
    }>
    CodeBlock?: React.ComponentType<{
      language?: string
      children: ReactNode
      className?: string
    }>
  }
}

