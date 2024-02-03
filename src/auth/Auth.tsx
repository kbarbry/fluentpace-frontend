import React, { useState } from 'react'
import { Card, Tabs, TabsProps } from 'antd'
import { useTranslation } from 'react-i18next'
import { FR, ES, GB } from 'country-flag-icons/react/3x2'

import StudentForm from './components/StudentForm'
import TeacherForm from './components/TeacherForm'

import './Auth.css'

const Auth: React.FC = () => {
  const {
    t,
    i18n: { changeLanguage, language }
  } = useTranslation()
  const [, setCurrentLanguage] = useState(language)

  const items: TabsProps['items'] = [
    { key: '1', label: t('auth.student.title'), children: <StudentForm /> },
    { key: '2', label: t('auth.teacher.title'), children: <TeacherForm /> }
  ]

  const handleChangeLanguage = (language: string) => () => {
    setCurrentLanguage(language)
    changeLanguage(language)
  }

  return (
    <>
      <div className='background'></div>
      <div className='auth-container'>
        <Card className='card-auth'>
          <h2>FluentPace</h2>
          {t('auth.welcome')}
          <br />
          <br />
          <Tabs type='line' centered items={items} defaultActiveKey='1' />
        </Card>
        <div className='card-lang'>
          <GB
            title='English'
            className='lang-selector'
            onClick={handleChangeLanguage('en')}
          />
          <ES
            title='Spanish'
            className='lang-selector'
            onClick={handleChangeLanguage('es')}
          />
          <FR
            title='French'
            className='lang-selector'
            onClick={handleChangeLanguage('fr')}
          />
        </div>
      </div>
    </>
  )
}

export default Auth
