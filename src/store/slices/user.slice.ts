import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum EProfile {
  teacher = 'teacher',
  student = 'student'
}

interface User {
  profile: EProfile
  username: string
}

interface UserState {
  user: User | null
}

const initialState: UserState = {
  user: null
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserInfos(state, action: PayloadAction<User>) {
      state.user = action.payload
    }
  }
})

export const { setUserInfos } = userSlice.actions
export default userSlice.reducer
