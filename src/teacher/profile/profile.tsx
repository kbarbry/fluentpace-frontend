import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { Button } from 'antd'
import { setUserInfos } from '../../store/slices/user.slice'
import { useLocation } from 'wouter'

const Profile: React.FC = () => {
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
      <Button onClick={handleLogout}>Logout</Button>
    </>
  )
}

export default Profile
