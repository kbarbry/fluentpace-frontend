import { ConfigProvider, theme } from 'antd'
import { useAppSelector } from './store/hooks'
import { EProfile } from './store/slices/user.slice'
import AppPublic from './AppPublic'
import AppPrivateStudent from './AppPrivateStudent'
import AppPrivateTeacher from './AppPrivateTeacher'

const App: React.FC = () => {
  const user = useAppSelector((state) => state.userSlice.user)

  return (
    <>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        {user ? (
          user.profile === EProfile.student ? (
            <AppPrivateStudent />
          ) : (
            <AppPrivateTeacher />
          )
        ) : (
          <AppPublic />
        )}
      </ConfigProvider>
    </>
  )
}

export default App
