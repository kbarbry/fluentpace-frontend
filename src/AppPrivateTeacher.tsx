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
import Home from './teacher/home/home'
import Courses from './teacher/courses/courses'
import Profile from './teacher/profile/profile'
import { useAppSelector } from './store/hooks'
import Hb from './zbirthday/hb'

const AppPrivateTeacher: React.FC = () => {
  const user = useAppSelector((state) => state.userSlice.user)

  let items: MenuProps['items'] =
    user?.username === 'Joan'
      ? [
          {
            label: <Link href='/'>HAPPY BIRTHDAAAAYYYYYY !!!!</Link>,
            key: 'hb'
          }
        ]
      : [
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
          {user?.username === 'Joan' ? (
            <Route path='/' component={Hb} />
          ) : (
            <Route path='/' component={Home} />
          )}
          <Route path='/courses' component={Courses} />
          <Route path='/profile' component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </Content>
    </Layout>
  )
}

export default AppPrivateTeacher
