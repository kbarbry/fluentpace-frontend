import React from 'react'
import { Link, Route, Switch } from 'wouter'
import { NotFound } from './Error/404'
import Auth from './auth/Auth'
import './App.css'

const AppPublic: React.FC = () => {
  return (
    <div className='unselectable'>
      <div className='background'></div>
      <Link href='/'></Link>
      <Switch>
        <Route path='/' component={Auth} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default AppPublic
