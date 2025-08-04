import { processMDXContent, getAllMDXSlugs } from '@/lib/mdx-processor'
import { MDXContent } from '@/components/mdx-content'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllMDXSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const mdxData = await processMDXContent(params.slug)
  
  if (!mdxData) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.',
    }
  }
  
  return {
    title: mdxData.frontmatter.title || `Post: ${params.slug}`,
    description: mdxData.frontmatter.description || mdxData.excerpt || `Content for ${params.slug}`,
    keywords: mdxData.frontmatter.keywords || [],
    openGraph: {
      title: mdxData.frontmatter.title || `Post: ${params.slug}`,
      description: mdxData.frontmatter.description || mdxData.excerpt || `Content for ${params.slug}`,
      type: 'article',
      publishedTime: mdxData.frontmatter.date,
      authors: mdxData.frontmatter.author ? [mdxData.frontmatter.author] : undefined,
      tags: mdxData.frontmatter.tags,
    }
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const mdxData = await processMDXContent(params.slug)
  
  if (!mdxData) {
    notFound()
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          홈
        </Link>
        <span>→</span>
        <Link href="/posts" className="hover:text-blue-600 transition-colors">
          포스트
        </Link>
        <span>→</span>
        <span className="text-gray-900 dark:text-gray-100">
          {mdxData.frontmatter.title || params.slug}
        </span>
      </nav>

      <article>
        {(mdxData.frontmatter.title || mdxData.frontmatter.description || mdxData.frontmatter.date) && (
          <header className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
            {mdxData.frontmatter.title && (
              <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                {mdxData.frontmatter.title}
              </h1>
            )}
            
            {mdxData.frontmatter.description && (
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                {mdxData.frontmatter.description}
              </p>
            )}
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              {mdxData.frontmatter.author && (
                <span>작성자: {mdxData.frontmatter.author}</span>
              )}
              
              {mdxData.frontmatter.date && (
                <time dateTime={mdxData.frontmatter.date}>
                  {new Date(mdxData.frontmatter.date).toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              )}
            </div>
            
            {mdxData.frontmatter.tags && mdxData.frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {mdxData.frontmatter.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>
        )}
        
        <MDXContent 
          html={mdxData.contentHtml}
          className="prose prose-lg max-w-none"
        />
      </article>
    </div>
  )
}

