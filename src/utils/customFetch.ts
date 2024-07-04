// lib/axios.ts
import axios from 'axios';
import { AUTH, AUTH_WITH_FORMDATA, GET, SERVER, WIHTOUT_AUTH_WITH_FORMDATA } from '../constants/global';
import { getDecryptedCookieClient } from './cookies';
import { getCookie } from '../serverActions';
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        const customError: any = new Error('An error occurred while fetching the data.');
        customError.message = error.message;
        customError.response = error.response;
        return Promise.reject(customError);
    }
);

interface CustomFetchParams {
    headers?: Record<string, string>;
    [key: string]: any;
}

const customFetch = async (
    url: string, // url endpoint
    method: string, // GET | POST | PUT | PATCH | DELETE
    data: any, // your body
    headerType: string | null, // AUTH | AUTH_WITH_FORMDATA | WITHOUT_AUTH_WITH_FORMDATA | WIHTOUT_AUTH
    fetchType = "CLIENT", // CLIENT | SERVER
    signal?: AbortSignal // abort signal
): Promise<any> => {

    // setting headers
    let headers: any = {};
    let currentUser: any = {}
    if (fetchType === SERVER) {

        currentUser = await getCookie("currentUser")
    } else {
        currentUser = getDecryptedCookieClient("currentUser")
    }
    switch (headerType) {
        case AUTH:
            headers["Authorization"] = `Bearer ${currentUser?.accessToken}`;
            break;
        case AUTH_WITH_FORMDATA:
            headers = {
                ...headers,
                "Authorization": `Bearer ${currentUser?.accessToken}`,
                'Content-Type': 'multipart/form-data',
            };
            break;
        case WIHTOUT_AUTH_WITH_FORMDATA:
            headers = {
                'Content-Type': 'multipart/form-data',
            };
            break;
        default:
            headers = {
                'Content-Type': 'application/json',
            };
    }

    const options: CustomFetchParams = {
        method: method,
        url: url,
        headers: headers,
        signal: signal,
    };

    if (method !== GET) {
        options.data = data;
    }

    try {
        const response = await axiosInstance(options);
        return response.data;
    } catch (error: any) {
        console.log(error, 'err')
        throw new Error(error.message || 'An error occurred while fetching the data.');
    }
};

export default customFetch;
