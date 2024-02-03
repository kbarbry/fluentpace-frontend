import { Button, Form, Input, Space } from 'antd'
import React, { useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { EProfile, setUserInfos } from '../../store/slices/user.slice'
import { useTranslation } from 'react-i18next'

const StudentForm: React.FC = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const [username, setUsername] = useState('')

  const handleLogUserClick = () => {
    if (!username) return
    try {
      dispatch(setUserInfos({ profile: EProfile.student, username: username }))
    } catch (e) {}
  }

  return (
    <Space direction='vertical'>
      <Form name='StudentForm' onFinish={handleLogUserClick}>
        <Form.Item
          name='Name'
          label={t('auth.student.name')}
          rules={[
            { required: true, message: t('auth.student.error.name.required') }
          ]}
        >
          <Input
            placeholder='John Doe'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' block>
            {t('auth.student.login')}
          </Button>
        </Form.Item>
      </Form>
    </Space>
  )
}

export default StudentForm
