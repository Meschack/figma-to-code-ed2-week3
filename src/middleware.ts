import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userCookie = request.cookies.get('user')

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/auth')) {
    if (userCookie) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  } else {
    if (!userCookie) {
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }
  }
}

export const config = {
  matcher: ['/auth/:path*', '/((?!api|_next/static|_next/image|favicon.ico).*)']
}
