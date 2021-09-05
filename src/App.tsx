import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import LoginForm from './pages/FormLog'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <Container className="w-100 h-100">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LoginForm></LoginForm>
          </Route>
          <Route exact path="/login">
            <LoginForm></LoginForm>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  )
}

export default App
