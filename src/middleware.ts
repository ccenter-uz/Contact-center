import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('access_token')

  if (!token) {
    const url = new URL('/login', req.url)
    url.searchParams.set('from', req.nextUrl.pathname)

    return NextResponse.redirect(url)
  }

  // Allow access to the page
  return NextResponse.next()
}

export const config = {
  matcher: '/dashboard'
}
