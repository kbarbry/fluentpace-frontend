import { configureStore } from '@reduxjs/toolkit'

import userReducer from './slices/user.slice'
import courseReducer from './slices/user.slice'

export const store = configureStore({
  reducer: {
    userSlice: userReducer,
    courseSlice: courseReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
