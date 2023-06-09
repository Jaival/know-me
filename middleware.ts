/* eslint-disable quotes */
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // handle users who aren't authenticated
  // afterAuth(auth, req, evt) {
  //   if (!auth.userId && !auth.isPublicRoute) {
  //     const signInUrl = new URL('/login', req.url)
  //     signInUrl.searchParams.set('redirect_url', req.url)
  //     return NextResponse.redirect(signInUrl)
  //   }
  // },
  publicRoutes: [
    "/",
    "/login",
    "/about",
    "/services",
    "/register",
    "/myprofile",
    "/myprofile/:id",
    "/search",
  ],
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
