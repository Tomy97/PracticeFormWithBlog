import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import img from '../assets/img/logo.jpg'

const NavbarComponet = () => {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand className="text-white">
          <img
            src={img}
            width="30"
            height="30"
            className="d-inline-block"
            alt="logo"
          />
          Pagina de Prueba
        </Navbar.Brand>
        <Nav>
          <Nav.Link className="text-white" href="/users">Users</Nav.Link>
          <Nav.Link className="text-white" href="/posts">Posts</Nav.Link>
          <Nav.Link className="text-white" href="/albumes">Albumes</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarComponet
