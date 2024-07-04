// Define a type for the slice state
export interface UserInitialState {
    loading: boolean,
    error: null | UserLoginFailResponse | undefined,
    user: object | null | any

}

export interface UserLoginSuccessResponse {
    id: string,
    accessToken: string,
    refreshToken: string
}

export interface UserLoginFailResponse {
    error: {
        debugMessage: string | null,
        errors: [],
        message: string | null,
        status: string,
        timestamp: string
    }
}