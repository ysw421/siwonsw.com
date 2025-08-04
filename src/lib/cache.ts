const isDevelopment = process.env.NODE_ENV === 'development'

const fileCache = new Map<string, { content: any; mtime: number }>()

export function getCachedContent<T>(
  filePath: string,
  loader: () => Promise<T>
): Promise<T> {
  if (!isDevelopment) {
    return loader()
  }
  
  const fs = require('fs')
  const stats = fs.statSync(filePath)
  const mtime = stats.mtime.getTime()
  
  const cached = fileCache.get(filePath)
  if (cached && cached.mtime === mtime) {
    return Promise.resolve(cached.content)
  }
  
  return loader().then((content) => {
    fileCache.set(filePath, { content, mtime })
    return content
  })
}

