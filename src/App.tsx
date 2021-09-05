import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Users from './pages/Users'
import LoginForm from './pages/FormLog'
import Posts from './pages/Posts';
import Albumes from './pages/Albumes';
import { Container } from 'react-bootstrap'
import NavBarContainer from './components/NavbarComponet'

const App = () => {
  return (
    <BrowserRouter>
      <NavBarContainer />
      <Container>
        <Switch>
          <Route exact path="/">
            <LoginForm></LoginForm>
          </Route>
          <Route exact path="/login">
            <LoginForm></LoginForm>
          </Route>
          <Route exact path="/home">
            <Users></Users>
          </Route>
          <Route exact path="/posts">
            <Posts></Posts>
          </Route>
          <Route exact path="/albumes">
            <Albumes></Albumes>
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App
