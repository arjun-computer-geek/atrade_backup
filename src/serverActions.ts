'use server';

import { cookies } from 'next/headers';
import { decrypt } from './utils/crypto';

export const getCookie = async (name: string) => {
    const cookieStore = cookies();
    const cookieValue = cookieStore.get(name);
    if (cookieValue) {
        try {
            const value = await JSON.parse(decrypt(cookieValue.value));
            return value;
        } catch (err) {
            console.error('Failed to decrypt cookie:', err);
        }
    }
    return null;
};
