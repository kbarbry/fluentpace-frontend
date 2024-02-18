import React, { useState } from 'react'
import { useLocation, useParams } from 'wouter'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'

import { Button, Card, Divider, Input, Modal, Space, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import { EQuestionType } from '../../../store/slices/course.slice'
import ReactAudioPlayer from 'react-audio-player'
import { addCourseCompleted } from '../../../store/slices/user.slice'
import { MessageSuccess } from '../../../notifications/messageSuccess'

import '../courses.css'

const { Title } = Typography
const { TextArea } = Input

const Course: React.FC = () => {
  const params = useParams()
  const { t } = useTranslation()
  const [, setLocation] = useLocation()
  const dispatch = useAppDispatch()
  const [modalVisible, setModalVisible] = useState(false)
  const course = useAppSelector((state) =>
    state.courseSlice.courses.find((c) => c.id === params.id?.split('+')[0])
  )
  const correction = course?.answers.find(
    (c) => c.id === params.id?.split('+')[1]
  )

  if (!course || !correction)
    return <div>{t('app.teacher.courses.course.error.notFound')}</div>

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
    MessageSuccess(t('global.notification.success.correctionSubmitted'))
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
        <Card className='course-section'>
          <Title level={4} className='box-title-container'>
            {t('app.teacher.courses.course.resources')}
          </Title>
          <Divider type='horizontal' />
          <div className='video-container unselectable'>
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
        </Card>
        <Card className='course-section'>
          <Title level={4} className='box-title-container'>
            {t('app.teacher.courses.course.questions', {
              username: correction.username
            })}
          </Title>
          <Divider type='horizontal' />
          {course.questions.map((question, index) => (
            <div className='questions-container' key={index}>
              <Title level={4} style={{ margin: '0px', marginTop: '16px' }}>
                {index + 1}. {question.title}
              </Title>
              {question.type === EQuestionType.Vocal ? (
                <div className='recorder-container'>
                  <ReactAudioPlayer
                    src={
                      correction.answers.find((c) => c.id === question.id)
                        ?.vocalUrl
                    }
                    controls
                    style={{ width: '100%' }}
                  />
                </div>
              ) : (
                <p style={{ margin: '24px' }}>
                  {correction.answers.find((c) => c.id === question.id)?.text}
                </p>
              )}
              <Title level={5} style={{ margin: '0px' }}>
                {t('app.teacher.courses.course.feedback')}
              </Title>
              <TextArea
                className='recorder-container'
                rows={4}
                maxLength={2000}
                showCount
              />
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
        title={t('app.teacher.courses.course.modal.leave.title')}
        open={modalVisible}
        onOk={handleConfirmLeave}
        onCancel={handleCancelLeave}
        okText={t('global.button.yes')}
        cancelText={t('global.button.no')}
      >
        <p>{t('app.teacher.courses.course.modal.leave.message')}</p>
      </Modal>
    </Space>
  )
}

export default Course
