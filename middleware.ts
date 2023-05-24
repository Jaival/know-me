import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  // handle users who aren't authenticated
  // afterAuth(auth, req, evt) {
  //   if (!auth.userId && !auth.isPublicRoute) {
  //     const signInUrl = new URL('/login', req.url)
  //     signInUrl.searchParams.set('redirect_url', req.url)
  //     return NextResponse.redirect(signInUrl)
  //   }
  // },
  publicRoutes: ['/','/login','/about','/services','/register','/user','/user/:id'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)','/','/(api|trpc)(.*)'],
};