import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum EProfile {
  teacher = 'teacher',
  student = 'student'
}

interface IUser {
  profile: EProfile
  username: string
  profilePictureUrl?: string
}

interface IUserState {
  user: IUser | null
}

const initialState: IUserState = {
  user: null
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserInfos(state, action: PayloadAction<IUser | null>) {
      let user = action.payload
      if (!user) {
        state.user = null
        return
      }
      user.profilePictureUrl = '/defaultProfilePicture.svg'
      state.user = action.payload
    }
  }
})

export const { setUserInfos } = userSlice.actions
export default userSlice.reducer
