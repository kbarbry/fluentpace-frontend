import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../store/hooks'
import { Divider, Space, Typography } from 'antd'

import NotificationsCenter from './components/notifications'
import RecentUpdates from './components/updates'

const { Title } = Typography

const Home: React.FC = () => {
  const { t } = useTranslation()
  const user = useAppSelector((state) => state.userSlice.user)

  return (
    <Space
      direction='vertical'
      style={{ width: '100%', height: '100%' }}
      className='student-typewriter'
    >
      <Title
        level={2}
        style={{
          margin: '0px',
          marginBottom: '16px',
          display: 'flex',
          width: '100%',
          justifyContent: 'center'
        }}
      >
        {t('app.student.home.welcome', {
          name: user?.username
        })}
      </Title>

      <Divider style={{ height: '10px', margin: '0px', marginTop: '10px' }} />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly'
        }}
      >
        <RecentUpdates />
        <NotificationsCenter />
      </div>
    </Space>
  )
}

export default Home
