import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IQuestion {
  title: string
  imageUrl?: string
}

interface IAnswer {
  vocalUrl?: string
  text?: string
}

interface IUserAnswer {
  username: string
  answers: IAnswer[]
  feedbacks: string[]
}

interface ICourse {
  title: string
  videoUrl: string
  creator: string
  questions: IQuestion[]
  answers: IUserAnswer[]
}

interface ICourseState {
  courses: ICourse[]
}

const initialState: ICourseState = {
  courses: []
}

export const coursesSlice = createSlice({
  name: 'coursesSlice',
  initialState,
  reducers: {
    addCourse(state, action: PayloadAction<ICourse>) {
      state.courses = [...state.courses, action.payload]
    },
    removeCourse(state, action: PayloadAction<string>) {
      state.courses = state.courses.filter(
        (course) => course.title !== action.payload
      )
    }
  }
})
