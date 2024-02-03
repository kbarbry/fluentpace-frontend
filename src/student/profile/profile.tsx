import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useLocation } from 'wouter'
import { setUserInfos } from '../../store/slices/user.slice'
import { Button } from 'antd'
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
      <Button onClick={handleLogout}>{t('app.student.profile.logout')}</Button>
    </>
  )
}

export default Profile
