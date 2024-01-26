import { Button, Form, Input, Space } from 'antd'
import React, { useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { EProfile, setUserInfos } from '../../store/slices/user.slice'

const StudentForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const [username, setUsername] = useState('')

  const handleLogUserClick = () => {
    if (!username) return
    try {
      dispatch(setUserInfos({ profile: EProfile.student, username: username }))
    } catch (e) {}
    console.log('lala')
  }

  return (
    <Space direction='vertical'>
      <Form name='StudentForm' onFinish={handleLogUserClick}>
        <Form.Item
          name='Name'
          label='Name'
          rules={[{ required: true, message: 'Name is required' }]}
        >
          <Input
            placeholder='John Doe'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' block>
            Login as Student
          </Button>
        </Form.Item>
      </Form>
    </Space>
  )
}

export default StudentForm