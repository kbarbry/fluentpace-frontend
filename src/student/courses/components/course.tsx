import React, { useState } from 'react'
import { Typography, Button, Modal, Space, Divider, Card } from 'antd'
//@ts-ignore
import { VoiceRecorder } from 'react-voice-recorder-player'
import { useLocation, useParams } from 'wouter'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { useTranslation } from 'react-i18next'
import { MessageSuccess } from '../../../notifications/messageSuccess'
import { addCourseCompleted } from '../../../store/slices/user.slice'
import { EQuestionType } from '../../../store/slices/course.slice'
import { Input } from 'antd'
import { AudioRecorder } from 'react-audio-voice-recorder'

const { TextArea } = Input
const { Title } = Typography

const Course: React.FC = () => {
  const params = useParams()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const [, setLocation] = useLocation()
  const course = useAppSelector((state) =>
    state.courseSlice.courses.find((c) => c.id === params.id)
  )
  const [modalVisible, setModalVisible] = useState(false)

  if (!course) {
    return <div>{t('app.student.courses.course.error.notFound')}</div>
  }

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

  const submitClass = () => {
    dispatch(addCourseCompleted(course.id))
    MessageSuccess(t('global.notification.success.courseSubmitted'))
    setLocation('/courses/')
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
          {t('global.button.back')}
        </Button>
      </Space>
      <Divider type='horizontal' />
      <Space direction='vertical' className='max-size'>
        <Card className='s-course-section'>
          <Title level={4} className='s-box-title-container'>
            {t('app.student.courses.course.resources')}
          </Title>
          <Divider type='horizontal' />
          <div className='s-video-container unselectable'>
            <div className='iframe-container'>
              <iframe
                src={`https://www.youtube.com/embed/${course.videoId}`}
                title={`${course.title}`}
                className='s-responsive-iframe'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Card>
        <Card className='s-course-section'>
          <Title level={4} className='s-box-title-container'>
            {t('app.student.courses.course.questions')}
          </Title>
          <Divider type='horizontal' />
          {course.questions.map((question, index) => (
            <div className='s-questions-container' key={index}>
              <Title level={5} style={{ margin: '0px' }}>
                {index + 1}. {question.title}
              </Title>
              {question.type === EQuestionType.Vocal ? (
                <div className='s-recorder-container'>
                  <AudioRecorder downloadOnSavePress />
                </div>
              ) : (
                <TextArea
                  className='s-text-container'
                  rows={4}
                  maxLength={2000}
                  showCount
                />
              )}
            </div>
          ))}
          <Divider type='horizontal' />
          <Space
            direction='horizontal'
            className='max-size'
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Button type='primary' onClick={submitClass}>
              {t('global.button.submit')}
            </Button>
            <Button danger onClick={handleBack}>
              {t('global.button.leave')}
            </Button>
          </Space>
        </Card>
      </Space>

      <Modal
        title={t('app.student.courses.course.modal.leave.title')}
        open={modalVisible}
        onOk={handleConfirmLeave}
        onCancel={handleCancelLeave}
        okText={t('global.button.yes')}
        cancelText={t('global.button.no')}
      >
        <p>{t('app.student.courses.course.modal.leave.message')}</p>
      </Modal>
    </Space>
  )
}

export default Course
