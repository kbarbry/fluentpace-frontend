import React from 'react'
import { useTranslation } from 'react-i18next'

const Courses: React.FC = () => {
  const { t } = useTranslation()

  return <>{t('app.student.courses.title')}</>
}

export default Courses
