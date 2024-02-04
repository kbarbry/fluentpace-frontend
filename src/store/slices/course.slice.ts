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
  id: string
  title: string
  profilePictureUrl: string
  videoId: string
  creator: string
  time: number
  questions: IQuestion[]
  answers: IUserAnswer[]
}

interface ICourseState {
  courses: ICourse[]
}

const initialState: ICourseState = {
  courses: [
    {
      id: 'd8iI7KCnnfWDyPrndXqzadTkXeIX3jA',
      title: 'Learn English with podcast conversation',
      videoId: 'TT-mum4QPcw',
      profilePictureUrl:
        'https://i3.ytimg.com/vi/TT-mum4QPcw/maxresdefault.jpg',
      creator: 'Dhaya',
      time: 60,
      answers: [],
      questions: [
        { id: 1, title: 'What is he saying ?' },
        { id: 2, title: 'Blabla question 2 ?' },
        { id: 3, title: 'Blabla question 3 ?' }
      ]
    },
    {
      id: 'k4EaAuU6Hvp4B5oxBqfxZ28MjqnaFV1',
      title: 'Learn English with PODCASTS',
      videoId: 'nT6Be1Bqfoc',
      profilePictureUrl:
        'https://i3.ytimg.com/vi/nT6Be1Bqfoc/maxresdefault.jpg',
      creator: 'Dhaya',
      time: 60,
      answers: [],
      questions: [
        { id: 1, title: 'I like coffee ?' },
        { id: 2, title: 'Blabla question 2 ?' },
        { id: 3, title: 'Blabla question 3 ?' }
      ]
    },
    {
      id: 'neAmiXLERqRyL0vvbSFFw0_1CsOHHrC',
      title: 'SHADOWING English Speaking Practice: talking about marriage',
      videoId: 'kCp4RYiezZc',
      profilePictureUrl:
        'https://i3.ytimg.com/vi/kCp4RYiezZc/maxresdefault.jpg',
      creator: 'Dhaya',
      time: 60,
      answers: [],
      questions: [
        { id: 1, title: 'Do you feel great ?' },
        { id: 2, title: 'Blabla question 2 ?' },
        { id: 3, title: 'Blabla question 3 ?' }
      ]
    },
    {
      id: 'KMNZ6djm9vY2ItNNdtQJXFBtTHQmBbD',
      title: 'Shadowing English Practice with Ana de Armas',
      videoId: 'neQHo0ckyUM',
      profilePictureUrl:
        'https://i3.ytimg.com/vi/neQHo0ckyUM/maxresdefault.jpg',
      creator: 'Dhaya',
      time: 60,
      answers: [],
      questions: [
        { id: 1, title: 'How you slept this night ?' },
        { id: 2, title: 'Blabla question 2 ?' },
        { id: 3, title: 'Blabla question 3 ?' }
      ]
    },
    {
      id: 'aOarHasWqpjQ_BpCA_GbybllvT3Q75L',
      title: 'Shadowing: Repeat-After-Me',
      videoId: 'N6fE7ukKyd0',
      profilePictureUrl:
        'https://i3.ytimg.com/vi/N6fE7ukKyd0/maxresdefault.jpg',
      creator: 'Dhaya',
      time: 60,
      answers: [],
      questions: [
        { id: 1, title: "What's this shitty accent ?" },
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
