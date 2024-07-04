import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { UserInitialState, UserLoginFailResponse, UserLoginSuccessResponse } from './userType';
import axios from 'axios';

// Define the initial state using that type
const initialState: UserInitialState = {
    loading: false,
    error: null,
    user: "null"
}

//custom actions
export const login: any = createAsyncThunk<UserLoginSuccessResponse, void, { rejectValue: UserLoginFailResponse }>("users/login", async (userData: any, { rejectWithValue }) => {
    const port = process.env.VITE_API_URL;
    try {
        const res: any = await axios.post(`${port}/api/v2/auth/signin`, userData, {
            headers: {
                "Content-Type": "application/json"
            },

        })


        const data = await res.json();
        if (res.status === 200) {
            return data;
        }
        return rejectWithValue(data)
    } catch (error) {
        console.log(error)
        throw error
    }

})

export const userSlice = createSlice({
    name: 'users',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        logout: (state) => {
            state.error = null
            state.loading = false
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            toast.success("Logged in successfully")
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        builder.addCase(login.rejected, (state, action) => {
            let error = action.payload.error
            if (error?.errors?.length > 0) {
                toast.error(`${error?.errors[1]?.field} or ${error?.errors[0]?.field} ${error?.errors[0]?.message}`)
            }
            else {
                toast.error(error?.message)
            }
            state.loading = false;
            state.user = null;
            state.error = error;
        })
    }
})

export const { logout } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type


export default userSlice.reducer