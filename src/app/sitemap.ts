import { getAllMDXSlugs } from '@/lib/mdx'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllMDXSlugs()
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  
  const posts = slugs.map((slug) => ({
    url: `${baseUrl}/posts/${slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }))
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      priority: 0.8,
    },
    ...posts,
  ]
}

