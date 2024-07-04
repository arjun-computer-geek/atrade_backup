
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getDecryptedCookieServer } from './utils/cookies';
import { publicRoutes } from './utils/knownRoutes/publicRoutest';
import { protectedRoutes } from './utils/knownRoutes/protectedRoutes';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const url = request.nextUrl.pathname;
    const currentUser: any = getDecryptedCookieServer(request, "currentUser")

    //checking public routes
    const isPublicRoute = publicRoutes.some(route => url.startsWith(route))
    if (isPublicRoute && currentUser?.accessToken) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    //checking protectedRoutes
    const isProtectedRoute = protectedRoutes.some(route => url.startsWith(route))
    if (isProtectedRoute && !currentUser?.accessToken) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();

}
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}