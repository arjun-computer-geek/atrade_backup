import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './features/authentication/userSlice'
import userListReducer from './features/add-user/addUserSlice'
export const store = configureStore({
    reducer: {
        users: usersReducer,
        usersList: userListReducer
    },
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({
        serializableCheck: false
    })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch