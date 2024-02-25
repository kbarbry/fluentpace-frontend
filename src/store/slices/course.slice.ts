import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum EQuestionType {
  Vocal,
  Text
}

interface IQuestion {
  id: number
  title: string
  type: EQuestionType
  imageUrl?: string
}

interface IAnswer {
  id: number
  vocalUrl?: string
  text?: string
  feedback?: string
}

interface IUserAnswer {
  id: string
  username: string
  answers: IAnswer[]
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
      title: 'Learn English - Conversation S1E1',
      videoId: 'TT-mum4QPcw',
      profilePictureUrl:
        'https://i3.ytimg.com/vi/TT-mum4QPcw/maxresdefault.jpg',
      creator: 'Joselin',
      time: 30,
      answers: [
        {
          id: '340dB2aq5V4xBujOHOeu1',
          username: 'Joselin',
          answers: [
            { id: 1, vocalUrl: '/TT-mum4QPcw_Joan_1.wav' },
            { id: 2, vocalUrl: '/TT-mum4QPcw_Joan_2.wav' },
            { id: 3, text: 'The destination they talked about is New-York' },
            { id: 4, text: 'A mile long line' }
          ]
        },
        {
          id: '1qQZHsXNSvl262mMlw95Q',
          username: 'Melina',
          answers: [
            { id: 1, vocalUrl: '/TT-mum4QPcw_Joan_1.wav' },
            { id: 2, vocalUrl: '/TT-mum4QPcw_Joan_2.wav' },
            { id: 3, text: "It's Hawai" },
            { id: 4, text: 'A long line' }
          ]
        },
        {
          id: 'cSDlXUKPSWpZRZPBTWUHm',
          username: 'Dhaya',
          answers: [
            { id: 1, vocalUrl: '/TT-mum4QPcw_Joan_1.wav' },
            { id: 2, vocalUrl: '/TT-mum4QPcw_Joan_2.wav' },
            { id: 3, text: 'They are going in a golf course in Hawaï' },
            { id: 4, text: 'Mile long' }
          ]
        }
      ],
      questions: [
        {
          id: 1,
          type: EQuestionType.Vocal,
          title: 'What is the first word of the vocabulary presented ?'
        },
        {
          id: 2,
          type: EQuestionType.Vocal,
          title:
            'Can you describe a situation where you can use the phrase there is no way ?'
        },
        {
          id: 3,
          type: EQuestionType.Text,
          title:
            'What is the destination they talked about at the beginning of the dialog ?'
        },
        {
          id: 4,
          type: EQuestionType.Text,
          title: 'What is another way they described a really long line ?'
        }
      ]
    },
    {
      id: 'k4EaAuU6Hvp4B5oxBqfxZ28MjqnaFV1',
      title: 'Learn English - When I was younger',
      videoId: 'nT6Be1Bqfoc',
      profilePictureUrl:
        'https://i3.ytimg.com/vi/nT6Be1Bqfoc/maxresdefault.jpg',
      creator: 'Joselin',
      time: 30,
      answers: [],
      questions: [
        {
          id: 1,
          type: EQuestionType.Vocal,
          title: 'What could the first speaker buy with $0.10 cents ?'
        },
        {
          id: 2,
          type: EQuestionType.Vocal,
          title: 'What is an "Ice-lolly" called in the UK ?'
        },
        {
          id: 3,
          type: EQuestionType.Text,
          title:
            'What did the third speaker translate the term "vendedor ambulante" to in English ?'
        },
        {
          id: 4,
          type: EQuestionType.Text,
          title: 'What do they describe to be the meaning of "laced with" ?'
        }
      ]
    },
    {
      id: 'neAmiXLERqRyL0vvbSFFw0_1CsOHHrC',
      title: 'Learn English - Going to the Eye Doctor',
      videoId: 'XL89DkNEqEs',
      profilePictureUrl: '/courseEyeDoctor.jpg',
      creator: 'Joselin',
      time: 30,
      answers: [
        {
          id: 'cSDlXUKPSWpZRZPBTWUHm',
          username: 'Joselin',
          answers: [
            { id: 1, vocalUrl: '/XL89DkNEqEs_Joan_1.wav' },
            { id: 2, vocalUrl: '/XL89DkNEqEs_Joan_2.wav' },
            {
              id: 3,
              text: "Struggle means that it's difficult and it's hard to achieve something"
            },
            {
              id: 4,
              text: 'It means that you can see things that are far'
            }
          ]
        }
      ],
      questions: [
        {
          id: 1,
          type: EQuestionType.Vocal,
          title: 'What are the words from the vocabulary section ?'
        },
        {
          id: 2,
          type: EQuestionType.Vocal,
          title:
            'When you go to the doctor and he sends you some medicine he writes out a ......... ?'
        },
        {
          id: 3,
          type: EQuestionType.Text,
          title: 'What does "struggle" mean?'
        },
        {
          id: 4,
          type: EQuestionType.Text,
          title:
            'If you are far sighted you can see things that are close or far ?'
        }
      ]
    },
    {
      id: 'KMNZ6djm9vY2ItNNdtQJXFBtTHQmBbD',
      title: 'Shadowing - Practice with Ana de Armas',
      videoId: 'neQHo0ckyUM',
      profilePictureUrl:
        'https://i3.ytimg.com/vi/neQHo0ckyUM/maxresdefault.jpg',
      creator: 'Joselin',
      time: 30,
      answers: [
        {
          id: '1qQZHsXNSvl262mMlw95Q',
          username: 'Joselin',
          answers: [
            { id: 1, vocalUrl: '/neQHo0ckyUM_Joan_1.wav' },
            { id: 2, vocalUrl: '/neQHo0ckyUM_Joan_2.wav' },
            { id: 3, vocalUrl: '/neQHo0ckyUM_Joan_3.wav' },
            { id: 3, vocalUrl: '/neQHo0ckyUM_Joan_4.wav' }
          ]
        },
        {
          id: 'cEAxgR6x5b0P8MdkvnHtU',
          username: 'Melina',
          answers: [
            { id: 1, vocalUrl: '/neQHo0ckyUM_Joan_1.wav' },
            { id: 2, vocalUrl: '/neQHo0ckyUM_Joan_2.wav' },
            { id: 3, vocalUrl: '/neQHo0ckyUM_Joan_3.wav' },
            { id: 3, vocalUrl: '/neQHo0ckyUM_Joan_4.wav' }
          ]
        }
      ],
      questions: [
        {
          id: 1,
          type: EQuestionType.Vocal,
          title: 'Can you say "but I didn\'t" again ?'
        },
        {
          id: 2,
          type: EQuestionType.Vocal,
          title: 'How did Ana de Armas learn English ?'
        },
        {
          id: 3,
          type: EQuestionType.Vocal,
          title: 'Can you say "How to audition" again ?'
        },
        {
          id: 3,
          type: EQuestionType.Vocal,
          title: 'Can you say "literally" again ?'
        }
      ]
    },
    {
      id: 'aOarHasWqpjQ_BpCA_GbybllvT3Q75L',
      title: 'Shadowing - Repeat-After-Me',
      videoId: 'N6fE7ukKyd0',
      profilePictureUrl:
        'https://i3.ytimg.com/vi/N6fE7ukKyd0/maxresdefault.jpg',
      creator: 'Joselin',
      time: 30,
      answers: [],
      questions: [
        {
          id: 1,
          type: EQuestionType.Vocal,
          title:
            'Can you repeat the first group of text shadowed in the video ?'
        },
        {
          id: 2,
          type: EQuestionType.Vocal,
          title:
            'Can you repeat the second group of text shadowed in the video ?'
        },
        {
          id: 3,
          type: EQuestionType.Vocal,
          title:
            'Can you repeat the third group of text shadowed in the video ?'
        },
        {
          id: 4,
          type: EQuestionType.Vocal,
          title:
            'Can you repeat the fourth group of text shadowed in the video ?'
        }
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
