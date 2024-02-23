import { Card, Divider, Empty, Typography } from 'antd'
import React from 'react'

import '../home.css'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

const RecentUpdates: React.FC = () => {
  const { t } = useTranslation()

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
        {t('app.teacher.home.updates')}
      </Title>
      <Divider type='horizontal' />
      <Empty
        className='s-empty-container'
        description={t('app.teacher.home.empty.updates')}
      />
    </Card>
  )
}

export default RecentUpdates
