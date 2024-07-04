import { NextRequest, NextResponse } from 'next/server';

const secretKey = process.env.JWT_SECRET_KEY; // Ensure you have this set in your environment variables

const withRole = (role: string) => {
    return async (req: NextRequest) => {
        const token = req.cookies.get('token'); // Assuming the JWT is stored in cookies
        if (!token) {
            return NextResponse.redirect(new URL('/login', req.url));
        }

        try {
            const decoded: any = false
            if (decoded.role !== role) {
                return NextResponse.redirect(new URL('/unauthorized', req.url));
            }
            return NextResponse.next();
        } catch (error) {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    };
};

export default withRole;
