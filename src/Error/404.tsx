import React from 'react'
import { Result, Button } from 'antd'
import { useLocation } from 'wouter'

export const NotFound: React.FC = () => {
  const [, setLocation] = useLocation()

  const handleGoHome = () => {
    setLocation('/')
  }

  return (
    <div style={{ height: '100%' }}>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist, or you reloaded your page and lost your session.'
        extra={
          <Button onClick={() => handleGoHome()} type='primary'>
            Back Home
          </Button>
        }
      />
    </div>
  )
}

export default NotFound
