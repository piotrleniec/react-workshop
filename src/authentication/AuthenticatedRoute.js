import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getCurrentUser } from './index'

export default ({ component, ...rest }) => (
  <Route {...rest} render={props => {
    const currentUser = getCurrentUser()

    if (!currentUser) return <Redirect to="/login" />

    return React.createElement(component, props)
  }} />
)
