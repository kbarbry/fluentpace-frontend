import React from 'react'
import { Card } from 'antd'
import { useLocation } from 'wouter'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../store/hooks'
import Meta from 'antd/es/card/Meta'

import './courses.css'

const Courses: React.FC = () => {
  const { t } = useTranslation()
  const [, setLocation] = useLocation()
  const courses = useAppSelector((state) => state.courseSlice.courses)

  const handleCardClick = (courseId: string) => {
    setLocation(`/courses/${courseId}`)
  }

  return (
    <>
      <div className='courses-container unselectable'>
        {courses.map((course, index) => (
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
      </div>
    </>
  )
}

export default Courses
