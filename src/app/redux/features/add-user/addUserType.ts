export interface AddUserInitialState {
    loading: boolean
    error: null | undefined
    addedUserStepOne: null | undefined | AddUserStepOneSuccess

}

export interface AddUserStepOneSuccess {
    id: number
    firstName: string
    lastName: string
    username: string
    password: string
    email: string
    mobileNo: string
    address: string
    remarks: string
    state: string
}

export interface AddUserStepOneFail {
    status: string
    timestamp: string
    errors: null | []
    message: null | string
    debugMessage: null | string
}