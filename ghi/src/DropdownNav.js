import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext, useToken } from "./token";


function DropdownNav() {
  const [token, login, logout] = useToken(); // for some reason, login has to be included here, even if it is never used.

  async function clogout()
{
  const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/logout/`;
  const response = await fetch(url, {
    method: "delete",
    credentials: "include",
  });
  if (response.ok) {
    // For Django services, use this one
    try {
        logout()
    } catch (e) {
      console.log('error')
    }
  }
  else{
    let error = await response.json();
    console.log("hello")
  }
  // DO SOMETHING WITH THE ERROR, IF YOU WANT
}

  function user_visibility() {
    if (token !== null)
    {
      return (
        <>
        <NavDropdown.Item onClick={() => clogout()}>Sign Out</NavDropdown.Item>
        
        <NavDropdown.Item href='/my-profile'>My Profile</NavDropdown.Item>
        </>
      ) }
    else {
      return (
        <>
        <NavDropdown.Item href='/Login'>Login</NavDropdown.Item>
          <NavDropdown.Item href='/SignupPage'>Signup</NavDropdown.Item>
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
              {user_visibility()}
              {/* <NavDropdown.Item href="/SignupPage">Signup</NavDropdown.Item>
              <NavDropdown.Item href="/Login">Login</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default DropdownNav;
