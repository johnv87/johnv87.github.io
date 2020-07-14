import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import GoToTopButton from './misc/GoToTopButton'

export default function Content() {
  return (
    <div id='content' className='container'>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/about'} component={About} />
        <Redirect path={'*'} to={'/'} />
      </Switch>
      <GoToTopButton />
    </div>
  )
}
