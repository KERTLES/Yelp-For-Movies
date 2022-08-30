import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext, useToken } from "./token";
import LogoutButton from "./LogoutButton"


function DropdownNav() {
  const [token, login, logout] = useToken(); // for some reason, login has to be included here, even if it is never used.

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
              {/* <NavDropdown.Item href="/SignupPage">Signup</NavDropdown.Item>
              <NavDropdown.Item href="/Login">Login</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown className="mr-auto" title= "User" id="basic-nav-dropdown" menuVariant= "dark">
              <LogoutButton></LogoutButton>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default DropdownNav;

