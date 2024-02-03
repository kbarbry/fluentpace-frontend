import React from 'react'
import { useTranslation } from 'react-i18next'

const Courses: React.FC = () => {
  const { t } = useTranslation()

  return <>{t('app.teacher.courses.title')}</>
}

export default Courses
