import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Lunches from './components/Lunches'

export default () => (
  <BrowserRouter>
    <Route exact path="/" component={Lunches} />
  </BrowserRouter>
)
