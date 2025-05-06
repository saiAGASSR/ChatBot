import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/enter-user-id/:path*', '/chatbot/:path*'],
};


export function middleware(request) {
  
  const auth = request.cookies.get('auth')?.value;
  

  if (!auth) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}
