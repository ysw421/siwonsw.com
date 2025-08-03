import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const filePath = params.path.join('/')
    const fullPath = path.join(process.cwd(), 'src', 'content', `${filePath}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json(
        { error: 'MDX file not found' },
        { status: 404 }
      )
    }
    
    const contentDir = path.join(process.cwd(), 'src', 'content')
    const resolvedPath = path.resolve(fullPath)
    if (!resolvedPath.startsWith(contentDir)) {
      return NextResponse.json(
        { error: 'Access denied' },
        { status: 403 }
      )
    }
    
    const content = fs.readFileSync(fullPath, 'utf8')
    
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  } catch (error) {
    console.error('MDX API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
