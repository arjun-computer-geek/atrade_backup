// utils/crypto.ts
import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.NEXT_PUBLIC_COOKIE_ENCRIPTION_SECRET_KEY || "Temp secret key";

export const encrypt = (text: string) => {
    return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
};

export const decrypt = (ciphertext: string) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
};
