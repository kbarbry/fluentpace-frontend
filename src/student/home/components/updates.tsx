import { Card, Divider, Timeline, Typography } from 'antd'
import React from 'react'

import '../home.css'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

const RecentUpdates: React.FC = () => {
  const { t } = useTranslation()
  const items = [
    {
      label: '2023-10-16',
      children: 'Beginning of Fluentpace',
      color: 'green'
    },
    {
      label: '2023-11-25',
      children: 'Fluentpace online!',
      color: 'green'
    },
    {
      label: '2023-12-22',
      children: 'Course mode for students',
      color: 'green'
    },
    {
      label: '2024-01-13',
      children: 'Correction mode for teachers',
      color: 'green'
    },
    {
      label: '2024-02-14',
      children: 'Mobile version',
      color: 'green'
    },
    {
      label: 'Coming soon...',
      children: 'Profile page',
      color: 'grey'
    }
  ]

  return (
    <Card
      style={{
        border: 'solid black 2px',
        minWidth: '300px',
        overflow: 'hidden',
        margin: '16px'
      }}
      className='s-home-card'
    >
      <Title level={4} className='box-title-container'>
        {t('app.student.home.updates')}
      </Title>
      <Divider type='horizontal' />
      <Timeline
        style={{ transform: 'translateX(-10%)', marginTop: '48px' }}
        mode='left'
        items={items}
        reverse
      />
    </Card>
  )
}

export default RecentUpdates
