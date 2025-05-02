import { NextResponse } from 'next/server';

export function middleware(request) {
  const auth = request.cookies.get('auth');

  const protectedRoutes = ['/enter-user-id', '/chatbot'];

  const isProtected = protectedRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !auth) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/enter-user-id/:path*', '/chatbot/:path*'],
};
