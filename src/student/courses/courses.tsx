import React from 'react'
import { Button, Card, Divider, Typography } from 'antd'
import { useLocation } from 'wouter'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import Meta from 'antd/es/card/Meta'

import './courses.css'
import {
  removeCourseCompleted,
  setUserInfos
} from '../../store/slices/user.slice'
import { useTranslation } from 'react-i18next'
import { MessageSuccess } from '../../notifications/messageSuccess'

const { Title } = Typography

const Courses: React.FC = () => {
  const [, setLocation] = useLocation()
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const courses = useAppSelector((state) => state.courseSlice.courses)
  const user = useAppSelector((state) => state.userSlice.user)

  if (!user) {
    dispatch(setUserInfos(null))
    setLocation('/', { replace: true })
    return <></>
  }

  const completedCourses = courses.filter((course) =>
    user.courseMade.includes(course.id)
  )
  const incompleteCourses = courses.filter(
    (course) => !user.courseMade.includes(course.id)
  )

  const handleCardClick = (courseId: string) => {
    setLocation(`/courses/${courseId}`)
  }

  const handleRemoveCompletedCourse = (courseId: string) => {
    MessageSuccess(t('global.notification.success.courseRemovedCompleted'))
    dispatch(removeCourseCompleted(courseId))
  }

  return (
    <div className='courses-container unselectable'>
      <Title level={4} className='box-title-container'>
        {t('app.student.courses.available')}
      </Title>
      <Divider type='horizontal' />
      {incompleteCourses.map((course, index) => (
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
      ))}

      <Divider type='horizontal' />
      <Title level={4} className='box-title-container'>
        {t('app.student.courses.completed')}
      </Title>
      <Divider type='horizontal' />
      {completedCourses.length === 0 && (
        <>{t('app.student.courses.nothingCompleted')}</>
      )}

      {completedCourses.map((course, index) => (
        <Card
          key={index}
          className='course-container completed'
          cover={<img alt={course.title} src={course.profilePictureUrl} />}
          extra={
            <Button onClick={() => handleRemoveCompletedCourse(course.id)}>
              {t('app.student.courses.removeCompleted')}
            </Button>
          }
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
