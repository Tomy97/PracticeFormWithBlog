import { Container, Nav, Navbar } from 'react-bootstrap'
import img from '../assets/img/logo.jpg'

const NavbarComponet = () => {
  return (
    <Navbar bg="dark" expand="lg">
    <Container>
      <Navbar.Brand className="text-white">
        <img
            src={img}
            width="30"
            height="30"
            className="d-inline-block"
            alt="logo"
          />
          Pagina de Prueba</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/posts">Posts</Nav.Link>
          <Nav.Link href="/albumes">Albumes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarComponet
