// utils/cookies.ts
import { NextApiResponse } from 'next';
import type { NextRequest } from 'next/server'
import { serialize } from 'cookie';
import { encrypt, decrypt } from './crypto';
import Cookies from 'js-cookie';

interface CookieOptions {
    maxAge?: number;
    httpOnly?: boolean;
    secure?: boolean;
    path?: string;
    sameSite?: boolean | 'lax' | 'strict' | 'none';
}


// server cookies
export const setEncryptedCookieServer = (
    res: NextApiResponse,
    name: string,
    value: string,
    options: CookieOptions = {}
): void => {
    const encryptedValue = encrypt(value);
    const cookie = serialize(name, encryptedValue, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        ...options,
    });
    res.setHeader('Set-Cookie', cookie);
};

export const getDecryptedCookieServer = (req: NextRequest, name: string): string | null => {
    const cookie = req.cookies.get(name);
    if (cookie) {
        try {
            return JSON.parse(decrypt(cookie.value));
        } catch (err) {
            console.error('Failed to decrypt cookie:', err);
        }
    }
    return null;
};



// client cookies
export const setEncryptedCookieClient = (name: string, value: string, options?: Cookies.CookieAttributes): void => {
    value = JSON.stringify(value)
    const encryptedValue = encrypt(value);
    Cookies.set(name, encryptedValue, options);
};

export const getDecryptedCookieClient = (name: string): string | null => {
    const encryptedValue = Cookies.get(name);
    if (encryptedValue) {
        try {
            return JSON.parse(decrypt(encryptedValue));
        } catch (err) {
            console.error('Failed to decrypt cookie:', err);
        }
    }
    return null;
};