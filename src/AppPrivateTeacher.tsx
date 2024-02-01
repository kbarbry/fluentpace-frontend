import { Layout, Menu, MenuProps } from 'antd'
import React from 'react'
import {
  AiOutlineHome,
  AiOutlineLaptop,
  AiOutlineSetting
} from 'react-icons/ai'
import { Link, Route, Switch } from 'wouter'
import NotFound from './Error/404'
import { Content, Header } from 'antd/es/layout/layout'
import Home from './teacher/home/home'
import Courses from './teacher/courses/courses'
import Profile from './teacher/profile/profile'
const AppPrivateTeacher: React.FC = () => {
  const items: MenuProps['items'] = [
    {
      label: (
        <Link href='/'>
          <a>Home</a>
        </Link>
      ),
      icon: <AiOutlineHome />,
      key: 'home'
    },
    {
      label: (
        <Link href='/courses'>
          <a>Courses</a>
        </Link>
      ),
      icon: <AiOutlineLaptop />,
      key: 'game'
    },
    {
      label: (
        <Link href='/profile'>
          <a>Profile</a>
        </Link>
      ),
      icon: <AiOutlineSetting />,
      key: 'profile'
    }
  ]
  return (
    <Layout style={{ height: '100%', maxHeight: '100%' }}>
      <Header
        className='unselectable'
        style={{
          position: 'fixed',
          width: '100%',
          padding: 0,
          zIndex: 1,
          background: '#001529'
        }}
      >
        <Menu
          mode='horizontal'
          selectedKeys={['/']}
          defaultSelectedKeys={['/']}
          items={items}
          style={{
            width: '100%',
            padding: 0,
            display: 'flex',
            justifyContent: 'center'
          }}
        />
      </Header>
      <Content
        style={{
          background: '#242424',
          position: 'fixed',
          top: '50px',
          left: 0,
          right: 0,
          bottom: 0,
          overflowY: 'auto'
        }}
      >
        <div
          style={{
            background: '#242424',
            color: '#fff',
            padding: 24,
            height: '100%'
          }}
        >
          <div
            style={{
              height: '100%'
            }}
          >
            <Switch>
              <Route path='/' component={Home} />
              <Route path='/courses' component={Courses} />
              <Route path='/profile' component={Profile} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default AppPrivateTeacher
