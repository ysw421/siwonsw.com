import { ReactNode, HTMLAttributes } from 'react'

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

function slugify(text: string): string {
  return text.toString().toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-가-힣]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '')
}

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string
}

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  className?: string
}

interface ListProps extends HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  className?: string
}

interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  className?: string
}

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  className?: string
}

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  className?: string
}

interface TableCellProps extends HTMLAttributes<HTMLTableHeaderCellElement | HTMLTableDataCellElement> {
  className?: string
}

interface PreProps extends HTMLAttributes<HTMLPreElement> {
  className?: string
}

interface CodeProps extends HTMLAttributes<HTMLElement> {
  className?: string
}

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  className?: string
  alt?: string
}

interface BlockquoteProps extends HTMLAttributes<HTMLQuoteElement> {
  className?: string
}

export const serverMDXComponents = {
  h1: ({ className, ...props }: HeadingProps) => (
    <h1
      className={cn(
        "scroll-m-20 font-extrabold tracking-tight lg:text-5xl mb-6",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: HeadingProps) => (
    <div>
      <h2
        className={cn(
          "mt-6 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-4",
          className
        )}
        {...props}
      />
    </div>
  ),
  h3: ({ className, children, ...props }: HeadingProps) => {
    const textContent = typeof children === 'string' ? children : 'heading'
    const id = slugify(textContent)
    
    return (
      <div className="group relative mb-3">
        <h3
          id={id}
          className={cn(
            "scroll-m-20 text-2xl font-semibold tracking-tight",
            className
          )}
          {...props}
        >
          <a 
            href={`#${id}`}
            style={{ color: 'var(--link)' }}
            aria-label={`Link to ${textContent}`}
          >
            <span>§ </span>
          </a>
          {children}
        </h3>
      </div>
    )
  },
  h4: ({ className, ...props }: HeadingProps) => (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight mb-2",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: ParagraphProps) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: ListProps) => (
    <ul className={cn("my-2 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: ListProps) => (
    <ol className={cn("my-2 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: ListItemProps) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: BlockquoteProps) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic border-gray-300",
        className
      )}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: ImageProps) => (
    <img
      className={cn("rounded-md border max-w-full h-auto", className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }: HTMLAttributes<HTMLHRElement>) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: TableProps) => (
    <div className="my-2 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: TableRowProps) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-gray-50", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: TableCellProps) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: TableCellProps) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: PreProps) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 py-4 px-6 text-sm text-zinc-50",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: CodeProps) => (
    <code
      className={cn(
        "relative rounded bg-gray-100 dark:bg-blue-900 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
      {...props}
    />
  ),
  Alert: ({ type = 'info', children, ...props }: {
    type?: 'info' | 'warning' | 'error' | 'success'
    children: ReactNode
  }) => {
    const typeClasses = {
      'info': 'bg-blue-50 border-blue-400 text-blue-800',
      'warning': 'bg-yellow-50 border-yellow-400 text-yellow-800',
      'error': 'bg-red-50 border-red-400 text-red-800',
      'success': 'bg-green-50 border-green-400 text-green-800',
    }
    
    return (
      <div
        className={cn(
          "p-4 mb-4 rounded-lg border-l-4",
          typeClasses[type]
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
  CodeBlock: ({ language, children, ...props }: {
    language?: string
    children: ReactNode
  }) => (
    <div className="relative">
      {language && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-200 text-sm rounded-t-lg">
          <span>{language}</span>
        </div>
      )}
      <pre className={cn(
        "bg-gray-900 text-gray-100 p-4 overflow-x-auto",
        language ? "rounded-b-lg" : "rounded-lg"
      )}>
        <code {...props}>{children}</code>
      </pre>
    </div>
  ),
}

