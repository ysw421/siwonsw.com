import Link from 'next/link'

interface BlogHeaderProps {
  title: string
  description?: string
  date?: string
  author?: string
  tags?: string[]
}

export function BlogHeader({ title, description, date, author, tags }: BlogHeaderProps) {
  return (
    <header className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          홈
        </Link>
        <span>→</span>
        <span>블로그</span>
      </div>
      
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      
      {description && (
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
      )}
      
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
        {author && <span>작성자: {author}</span>}
        {date && (
          <time dateTime={date}>
            {new Date(date).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        )}
      </div>
      
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
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
  )
}

