import { getAllMDXSlugs, getMDXContent } from '@/lib/mdx'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Posts - Siwon\'s Webpage',
  description: 'All blog posts and articles',
}

interface PostPreview {
  slug: string
  title: string
  description?: string
  date?: string
  tags?: string[]
}

export default async function PostsPage() {
  const slugs = getAllMDXSlugs()
  const posts: PostPreview[] = []
  
  // 모든 포스트의 메타데이터 수집
  for (const slug of slugs) {
    const mdxData = await getMDXContent(slug)
    if (mdxData) {
      posts.push({
        slug,
        title: mdxData.frontmatter.title || slug,
        description: mdxData.frontmatter.description,
        date: mdxData.frontmatter.date,
        tags: mdxData.frontmatter.tags,
      })
    }
  }
  
  // 날짜순 정렬 (최신순)
  posts.sort((a, b) => {
    if (!a.date && !b.date) return 0
    if (!a.date) return 1
    if (!b.date) return -1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
  
  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">블로그 포스트</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          개발, 수학, 그리고 생각들을 정리한 공간입니다.
        </p>
      </header>
      
      <div className="space-y-6">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">아직 포스트가 없습니다.</p>
          </div>
        ) : (
          posts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <Link href={`/posts/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400 hover:underline">
                  {post.title}
                </h2>
              </Link>
              
              {post.description && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.description}
                </p>
              )}
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                {post.date && (
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('ko-KR')}
                  </time>
                )}
                
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  )
}

