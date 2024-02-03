import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { Button } from 'antd'
import { setUserInfos } from '../../store/slices/user.slice'
import { useLocation } from 'wouter'
import { useTranslation } from 'react-i18next'

const Profile: React.FC = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.userSlice.user)
  const [, setLocation] = useLocation()

  const handleLogout = () => {
    dispatch(setUserInfos(null))
    setLocation('/', { replace: true })
    console.log(user)
  }

  return (
    <>
      <Button onClick={handleLogout}>{t('app.teacher.profile.logout')}</Button>
    </>
  )
}

export default Profile
