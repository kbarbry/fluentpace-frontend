import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum EProfile {
  teacher = 'teacher',
  student = 'student'
}

interface IUser {
  profile: EProfile
  username: string
  courseMade: string[]
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
      state.user = action.payload
        ? { ...action.payload, profilePictureUrl: '/defaultProfilePicture.svg' }
        : null
    },
    addCourseCompleted(state, action: PayloadAction<string>) {
      if (state.user) {
        state.user.courseMade.push(action.payload)
      }
    },
    removeCourseCompleted(state, action: PayloadAction<string>) {
      if (state.user) {
        state.user.courseMade = state.user.courseMade.filter(
          (courseId) => courseId !== action.payload
        )
      }
    }
  }
})

export const { setUserInfos, addCourseCompleted, removeCourseCompleted } =
  userSlice.actions
export default userSlice.reducer
