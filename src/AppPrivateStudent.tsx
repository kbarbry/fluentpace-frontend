import React from 'react'
import { Layout, Menu, MenuProps } from 'antd'
import {
  AiOutlineHome,
  AiOutlineLaptop,
  AiOutlineSetting
} from 'react-icons/ai'
import { Link, Route, Switch } from 'wouter'
import { Content, Header } from 'antd/es/layout/layout'

import NotFound from './Error/404'
import Home from './student/home/home'
import Courses from './student/courses/courses'
import Profile from './student/profile/profile'
import './AppPrivate.css'

const AppPrivateStudent: React.FC = () => {
  const items: MenuProps['items'] = [
    {
      label: <Link href='/'>Home</Link>,
      icon: <AiOutlineHome />,
      key: 'home'
    },
    {
      label: <Link href='/courses'>Courses</Link>,
      icon: <AiOutlineLaptop />,
      key: 'courses'
    },
    {
      label: <Link href='/profile'>Profile</Link>,
      icon: <AiOutlineSetting />,
      key: 'profile'
    }
  ]

  return (
    <Layout className='max-size'>
      <Header className='unselectable header-app'>
        <Menu
          mode='horizontal'
          selectedKeys={['/']}
          defaultSelectedKeys={['/']}
          items={items}
          className='menu-app'
        />
      </Header>
      <Content className='content-app'>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/courses' component={Courses} />
          <Route path='/profile' component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </Content>
    </Layout>
  )
}

export default AppPrivateStudent
