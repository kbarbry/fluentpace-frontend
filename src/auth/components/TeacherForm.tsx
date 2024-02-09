import { Button, Form, Input, Space } from 'antd'
import React, { useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { EProfile, setUserInfos } from '../../store/slices/user.slice'
import { useTranslation } from 'react-i18next'

const TeacherForm: React.FC = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const [username, setUsername] = useState('')

  const handleLogUserClick = () => {
    if (!username) return
    try {
      dispatch(
        setUserInfos({
          profile: EProfile.teacher,
          username: username,
          courseMade: []
        })
      )
    } catch (e) {}
  }

  return (
    <Space direction='vertical'>
      <Form name='TeacherForm' onFinish={handleLogUserClick}>
        <Form.Item
          name='Name'
          label={t('auth.teacher.name')}
          rules={[{ required: true, message: 'lala' }]}
        >
          <Input
            placeholder='John Doe'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' block>
            {t('auth.teacher.login')}
          </Button>
        </Form.Item>
      </Form>
    </Space>
  )
}

export default TeacherForm
