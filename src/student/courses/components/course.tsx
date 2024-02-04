import React, { useState } from 'react'
import { Typography, Button, Modal, Space, Divider } from 'antd'
import { useLocation, useParams } from 'wouter'
import { useAppSelector } from '../../../store/hooks'

const { Title } = Typography

const Course: React.FC = () => {
  const params = useParams()
  const [, setLocation] = useLocation()
  const course = useAppSelector((state) =>
    state.courseSlice.courses.find((c) => c.id === params.id)
  )

  const [modalVisible, setModalVisible] = useState(false)

  const handleBack = () => {
    setModalVisible(true)
  }

  const handleConfirmLeave = () => {
    setModalVisible(false)
    setLocation('/courses/')
  }

  const handleCancelLeave = () => {
    setModalVisible(false)
  }

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <Space direction='vertical' className='max-size'>
      <Space
        direction='horizontal'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Title level={3} style={{ margin: '0px' }}>
          {course.title}
        </Title>
        <Button type='default' onClick={handleBack}>
          Back
        </Button>
      </Space>
      <Divider type='horizontal' />
      <Space
        direction='vertical'
        className='max-size'
        style={{ display: 'flex', justifyItems: 'center' }}
      >
        <div style={{ maxWidth: '1000px' }}>
          <div className='iframe-container'>
            <iframe
              src={`https://www.youtube.com/embed/${course.videoId}`}
              title={`${course.title}`}
              className='responsive-iframe'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <ul>
          {course.questions.map((question, index) => (
            <li key={index}>{question.title}</li>
          ))}
        </ul>
      </Space>

      <Modal
        title='Leave Course'
        open={modalVisible}
        onOk={handleConfirmLeave}
        onCancel={handleCancelLeave}
        okText='Yes'
        cancelText='No'
      >
        <p>
          Are you sure you want to leave this course? Your progress won't be
          save and you'll have to start it all over again.
        </p>
      </Modal>
    </Space>
  )
}

export default Course
