import { getMDXContent, getAllMDXSlugs } from '@/lib/mdx-server'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'


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
  const mdxData = await getMDXContent(params.slug)
  
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
  const mdxData = await getMDXContent(params.slug)
  
  if (!mdxData) {
    notFound()
  }
  
  return (
    <article className="max-w-4xl mx-auto">
      {mdxData.frontmatter.title && (
        <header className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {mdxData.frontmatter.title}
          </h1>
          {mdxData.frontmatter.description && (
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              {mdxData.frontmatter.description}
            </p>
          )}
          {mdxData.frontmatter.date && (
            <time className="text-sm text-gray-500" dateTime={mdxData.frontmatter.date}>
              {new Date(mdxData.frontmatter.date).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          )}
        </header>
      )}
      
      <MDXHydrationBoundary 
        source={mdxData.source}
        className="prose prose-lg max-w-none"
      />
    </article>
  )
}

