import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../store/hooks'
import { Badge, Card, Divider, Typography } from 'antd'
import Meta from 'antd/es/card/Meta'
import { useLocation } from 'wouter'

const { Title } = Typography

const Courses: React.FC = () => {
  const [, setLocation] = useLocation()
  const { t } = useTranslation()
  const courses = useAppSelector((state) => state.courseSlice.courses)

  const coursesCorrection = courses.filter(
    (course) => course.answers.length > 0
  )
  const coursesNoCorrection = courses.filter(
    (course) => course.answers.length === 0
  )

  const handleCardClick = (courseId: string) => {
    setLocation(`/courses/${courseId}`)
  }

  return (
    <div className='courses-container unselectable'>
      <Title level={4} className='box-title-container'>
        {t('app.student.courses.available')}
      </Title>
      <Divider type='horizontal' />
      {coursesCorrection.length === 0 && (
        <>{t('app.student.courses.nothingCompleted')}</>
      )}
      {coursesCorrection.map((course, index) => (
        <div style={{ margin: '20px' }}>
          <Badge count={course.answers.length}>
            <Card
              key={index}
              className='course-container'
              cover={<img alt={course.title} src={course.profilePictureUrl} />}
              onClick={() => handleCardClick(course.id)}
            >
              <Meta
                title={course.title}
                description={`Creator: ${course.creator}  Time: ${course.time} hours`}
              />
            </Card>
          </Badge>
        </div>
      ))}

      <Divider type='horizontal' />
      <Title level={4} className='box-title-container'>
        {t('app.student.courses.completed')}
      </Title>
      <Divider type='horizontal' />
      {coursesNoCorrection.length === 0 && (
        <>{t('app.student.courses.nothingCompleted')}</>
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
            description={`Creator: ${course.creator}  Time: ${course.time} hours`}
          />
        </Card>
      ))}
    </div>
  )
}

export default Courses
