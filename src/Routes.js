import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import AuthenticatedRoute from './authentication/AuthenticatedRoute'
import Lunches from './components/Lunches'
import LogInForm from './components/LogInForm'

export default () => (
  <BrowserRouter>
    <div>
      <AuthenticatedRoute exact path="/" component={Lunches} />
      <Route exact path="/login" component={LogInForm} />
    </div>
  </BrowserRouter>
)
