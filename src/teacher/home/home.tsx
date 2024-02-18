import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../store/hooks'
import ReactAudioPlayer from 'react-audio-player'

const Home: React.FC = () => {
  const { t } = useTranslation()
  const user = useAppSelector((state) => state.userSlice.user)

  return (
    <>
      {t('app.teacher.home.welcome', {
        name: user?.username
      })}
    </>
  )
}

export default Home
