// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { toast } from 'react-toastify';
// import { AddUserInitialState, AddUserStepOneFail, AddUserStepOneSuccess } from './addUserType';
// // Define the initial state using that type
// const initialState: AddUserInitialState = {
//     loading: false,
//     error: null,
//     addedUserStepOne: null
// }

// //custom actions
// export const addUserStepOne: any = createAsyncThunk<AddUserStepOneSuccess, void, { rejectValue: AddUserStepOneFail }>("addUser/stepOne", async (userData: any, { rejectWithValue }) => {
//     const port = process.env.VITE_API_URL;
//     const { accessToken } = JSON.parse(localStorage.getItem("currentUser") || "null")
//     try {
//         const res: any = await fetch(`${port}/api/v1/users`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${accessToken}`
//             },
//             body: JSON.stringify(userData)
//         })

//         const data = await res.json();
//         if (res.status === 200) {
//             return data.data;
//         }
//         return rejectWithValue(data)
//     } catch (error) {
//         throw error
//     }

// })

// export const addUserStepTwo = createAsyncThunk("addUser/stepTwo", async (userData: any, { rejectWithValue }) => {
//     const port = process.env.VITE_API_URL;
//     const { accessToken } = JSON.parse(localStorage.getItem("currentUser") || "null")
//     try {
//         const res: any = await fetch(`${port}/api/v1/users/account`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${accessToken}`
//             },
//             body: JSON.stringify(userData)
//         })
//         if (res.status === 200) {
//             return true;
//         } else {
//             return rejectWithValue("something went wrong.")
//         }
//     } catch (error) {
//         throw error
//     }

// })

// export const addUserStepThree: any = createAsyncThunk("addUser/stepThree", async (userData: any, { rejectWithValue }) => {
//     const port = process.env.VITE_API_URL;
//     const { accessToken } = JSON.parse(localStorage.getItem("currentUser") || "null")
//     try {
//         const res: any = await fetch(`${port}/api/brokerages`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${accessToken}`
//             },
//             body: JSON.stringify(userData)
//         })
//         if (res.status === 200) {
//             return true;
//         } else {
//             return rejectWithValue("something went wrong.")
//         }
//     } catch (error) {
//         throw error
//     }

// })


// export const addUserSlice = createSlice({
//     name: 'addUser',
//     // `createSlice` will infer the state type from the `initialState` argument
//     initialState,
//     reducers: {
//         // logout: (state) => {
//         //     state.error = null
//         //     state.loading = false
//         //     state.user = null
//         // }
//     },
//     extraReducers: (builder) => {
//         builder.addCase(addUserStepOne.pending, (state) => {
//             state.loading = true;
//             state.addedUserStepOne = null;
//             state.error = null;
//         })
//         builder.addCase(addUserStepOne.fulfilled, (state, action) => {
//             localStorage.setItem('registeredUser', JSON.stringify(action.payload))
//             toast.success("Step one completed")
//             state.loading = false;
//             state.addedUserStepOne = action.payload;
//             state.error = null;
//         })
//         builder.addCase(addUserStepOne.rejected, (state, action) => {
//             toast.error(action.payload?.error?.message);
//             state.loading = false;
//             state.addedUserStepOne = action.payload;
//             state.error = null;
//         })
//         builder.addCase(addUserStepTwo.pending, (state) => {
//             state.loading = true;
//             // state.addedUserStepOne = null;
//             state.error = null;
//         })
//         builder.addCase(addUserStepTwo.fulfilled, (state, action) => {
//             toast.success("Step Two completed")
//             state.loading = false;
//             // state.addedUserStepOne = action.payload;
//             state.error = null;
//         })
//         builder.addCase(addUserStepTwo.rejected, (state, action) => {
//             // toast.error(action.payload);
//             state.loading = false;
//             // state.addedUserStepOne = action.payload;
//             state.error = null;
//         })
//         builder.addCase(addUserStepThree.pending, (state) => {
//             state.loading = true;
//             // state.addedUserStepOne = null;
//             state.error = null;
//         })
//         builder.addCase(addUserStepThree.fulfilled, (state, action) => {
//             toast.success("Step Three completed")
//             state.loading = false;
//             // state.addedUserStepOne = action.payload;
//             state.error = null;
//         })
//         builder.addCase(addUserStepThree.rejected, (state, action) => {
//             toast.error(action!.payload);
//             state.loading = false;
//             // state.addedUserStepOne = action.payload;
//             state.error = null;
//         })

//     }
// })

// // export const { logout } = addUserSlice.actions

// export default addUserSlice.reducer