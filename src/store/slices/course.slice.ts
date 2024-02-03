import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IQuestion {
  id: number
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
  courses: [
    {
      title: 'Shadowing: Repeat-After-Me',
      videoUrl: 'https://www.youtube.com/watch?v=N6fE7ukKyd0',
      creator: 'Dhaya',
      answers: [],
      questions: [
        { id: 1, title: "What's this shitty accent ?" },
        { id: 2, title: 'Blabla question 2 ?' },
        { id: 3, title: 'Blabla question 3 ?' }
      ]
    },
    {
      title: 'Learn English with podcast conversation',
      videoUrl: 'https://www.youtube.com/watch?v=TT-mum4QPcw',
      creator: 'Dhaya',
      answers: [],
      questions: [
        { id: 1, title: 'What is he saying ?' },
        { id: 2, title: 'Blabla question 2 ?' },
        { id: 3, title: 'Blabla question 3 ?' }
      ]
    },
    {
      title: 'Learn English with PODCASTS',
      videoUrl: 'https://www.youtube.com/watch?v=nT6Be1Bqfoc',
      creator: 'Dhaya',
      answers: [],
      questions: [
        { id: 1, title: 'I like coffee ?' },
        { id: 2, title: 'Blabla question 2 ?' },
        { id: 3, title: 'Blabla question 3 ?' }
      ]
    },
    {
      title: 'SHADOWING English Speaking Practice: talking about marriage',
      videoUrl: 'https://www.youtube.com/watch?v=kCp4RYiezZc',
      creator: 'Dhaya',
      answers: [],
      questions: [
        { id: 1, title: 'Do you feel great ?' },
        { id: 2, title: 'Blabla question 2 ?' },
        { id: 3, title: 'Blabla question 3 ?' }
      ]
    },
    {
      title: 'Shadowing English Practice with Ana de Armas',
      videoUrl: 'https://www.youtube.com/watch?v=neQHo0ckyUM',
      creator: 'Dhaya',
      answers: [],
      questions: [
        { id: 1, title: 'How you slept this night ?' },
        { id: 2, title: 'Blabla question 2 ?' },
        { id: 3, title: 'Blabla question 3 ?' }
      ]
    }
  ]
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

export const { addCourse, removeCourse } = coursesSlice.actions
export default coursesSlice.reducer
