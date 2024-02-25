import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'

import userReducer from './slices/user.slice'
import courseReducer from './slices/course.slice'

const rootReducer = combineReducers({
  userSlice: userReducer,
  courseSlice: courseReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: false
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
