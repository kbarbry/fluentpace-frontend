import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../store/hooks'
import { Badge, Card, Divider, Modal, Typography } from 'antd'
import Meta from 'antd/es/card/Meta'
import { useLocation } from 'wouter'
import './courses.css'

const { Title } = Typography

const Courses: React.FC = () => {
  const [, setLocation] = useLocation()
  const { t } = useTranslation()
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null)
  const [selectedCorrectionId, setSelectedCorrectionId] = useState<
    string | null
  >(null)
  const courses = useAppSelector((state) => state.courseSlice.courses)

  const coursesCorrection = courses.filter(
    (course) => course.answers.length > 0
  )
  const coursesNoCorrection = courses.filter(
    (course) => course.answers.length === 0
  )

  const handleCardClick = (courseId: string) => {
    setSelectedCourseId(courseId)
    const selectedCourse = courses.find((course) => course.id === courseId)
    if (selectedCourse && selectedCourse.answers.length > 0) {
      const randomIndex = Math.floor(
        Math.random() * selectedCourse.answers.length
      )
      setSelectedCorrectionId(selectedCourse.answers[randomIndex].id)
      setModalVisible(true)
    }
  }

  const handleModalConfirm = () => {
    if (selectedCourseId && selectedCorrectionId) {
      setLocation(`/courses/${selectedCourseId}+${selectedCorrectionId}`)
    }
    setModalVisible(false)
  }

  const handleModalCancel = () => {
    setSelectedCourseId(null)
    setSelectedCorrectionId(null)
    setModalVisible(false)
  }

  return (
    <div className='courses-container unselectable'>
      <Title level={4} className='box-title-container'>
        {t('app.teacher.courses.available')}
      </Title>
      <Divider type='horizontal' />
      {coursesCorrection.length === 0 && (
        <>{t('app.teacher.courses.nothingCompleted')}</>
      )}
      {coursesCorrection.map((course, index) => (
        <div key={index} style={{ margin: '20px' }}>
          <Badge className='badge-container' count={course.answers.length}>
            <Card
              className='course-container'
              cover={<img alt={course.title} src={course.profilePictureUrl} />}
              onClick={() => handleCardClick(course.id)}
            >
              <Meta
                title={course.title}
                description={`Creator: ${course.creator}  Time: ${course.time} min`}
              />
            </Card>
          </Badge>
        </div>
      ))}

      <Divider type='horizontal' />
      <Title level={4} className='box-title-container'>
        {t('app.teacher.courses.completed')}
      </Title>
      <Divider type='horizontal' />
      {coursesNoCorrection.length === 0 && (
        <>{t('app.teacher.courses.nothingCompleted')}</>
      )}

      {coursesNoCorrection.map((course, index) => (
        <Card
          key={index}
          className='course-container completed'
          style={{ margin: '20px' }}
          cover={<img alt={course.title} src={course.profilePictureUrl} />}
        >
          <Meta
            title={course.title}
            description={`Creator: ${course.creator}  Time: ${course.time} min`}
          />
        </Card>
      ))}

      <Modal
        title='Privacy Warning'
        open={modalVisible}
        onOk={handleModalConfirm}
        onCancel={handleModalCancel}
      >
        <p>
          By proceeding, you acknowledge that you are about to access a random
          student's work. Please ensure to respect the privacy and
          confidentiality of this content. Avoid sharing any information or
          documents obtained from this correction session.
        </p>
      </Modal>
    </div>
  )
}

export default Courses
