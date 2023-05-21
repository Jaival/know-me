import { authMiddleware } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default authMiddleware({
  afterAuth(auth, req, evt) {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      const signInUrl = new URL('/login', req.url)
      signInUrl.searchParams.set('redirect_url', req.url)
      return NextResponse.redirect(signInUrl)
    }
  },
  publicRoutes: ['/','/login','/about','/services','/register'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)','/','/(api|trpc)(.*)'],
};