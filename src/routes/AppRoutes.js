import React from 'react'
import { Route } from 'react-router-dom'
import { Home } from '../pages'

const AppRoutes = () => {
  return (
    <Route>
      <Route path='/'  element={<Home />} />
    </Route>
  )
}

export default AppRoutes