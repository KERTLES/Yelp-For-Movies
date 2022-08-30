import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthProvider, useToken } from "./token";


function DropdownNav() {

  const [token, login, logout] = useToken();
  function user_visibility() {
    if (token !== null ) 
    {
      return (
        <>
        <NavDropdown.Item href="/sign-out">Sign Out</NavDropdown.Item>
        <NavDropdown.Item href="/my-profile">My Profile</NavDropdown.Item>
        </>
  
      ) }
    else {
      return (
        <>
          <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
          </>
      )
    }
    }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Yovies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Genre" id="basic-nav-dropdown" menuVariant="dark">
              <NavDropdown.Item href="/action">Action</NavDropdown.Item>
              <NavDropdown.Item href="/comedy">Comedy</NavDropdown.Item>
              <NavDropdown.Item href="/Drama">Drama</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="User" id="basic-nav-dropdown" menuVariant="dark">
            {user_visibility()}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default DropdownNav;
