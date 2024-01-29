import { Card, Tabs, TabsProps } from 'antd'
import React from 'react'
import StudentForm from './components/StudentForm'
import TeacherForm from './components/TeacherForm'
import './Auth.css'

const Auth: React.FC = () => {
  const items: TabsProps['items'] = [
    { key: '1', label: 'Student', children: <StudentForm /> },
    { key: '2', label: 'Teacher', children: <TeacherForm /> }
  ]

  return (
    <div className='auth-container'>
      <Card className='card'>
        <h2>FluentPace</h2>
        Welcome to FluentPace, the place for improving your english and join a
        community of active students and teachers !
        <br />
        <br />
        <Tabs type='line' centered items={items} defaultActiveKey='1' />
      </Card>
    </div>
  )
}

export default Auth
