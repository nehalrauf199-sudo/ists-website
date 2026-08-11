// middleware.js
// Redirects ALL pages to maintenance

import { NextResponse } from 'next/server';

export function middleware(request) {
    // Check if the request is for the maintenance page itself
    if (request.nextUrl.pathname === '/maintenance') {
        return NextResponse.next();
    }

    // Check if it's for static files (images, etc.)
    if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|css|js|ico)$/)) {
        return NextResponse.next();
    }

    // Redirect ALL other pages to maintenance
    const maintenanceUrl = new URL('/maintenance', request.url);
    return NextResponse.redirect(maintenanceUrl);
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon)
         */
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};