import React, { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// eslint-disable-next-line
import { AuthContext, useToken } from "./token";
import LogoutButton from "./LogoutButton";
// eslint-disable-next-line
import UserProfile from './UserProfile';


function DropdownNav() {
  const [genres, setGenres] = useState([])
  // eslint-disable-next-line
  const [token, login, logout] = useToken(); // for some reason, login has to be included here, even if it is never used.
  const apiKey = process.env.REACT_APP_TMDB_API_KEY
  const tmdbURL = process.env.REACT_APP_TMDB_URL

  useEffect(() => {
    (async () => {
      const genresResponse = await fetch(`${tmdbURL}/genre/movie/list?api_key=${apiKey}&language=en-US`)
      console.log(genresResponse)
      if (genresResponse.ok) {
        const genresData = await genresResponse.json()
        setGenres(genresData.genres)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps    
  }, [])


  return (
    <Navbar fixed="top" variant="dark" expand="lg" bg="dark">
      <Container fluid>
        <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>
          <img
            alt=""
            src={`${process.env.PUBLIC_URL}/yoovieswhite.png`}
            width="85"
            height="auto"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Genre" id="basic-nav-dropdown" menuVariant="dark">
              {genres.map(genre => {
                return (
                  <NavDropdown.Item key={genre.id} href={`${process.env.PUBLIC_URL}/${genre.name.toLowerCase()}/${genre.id}`}>{genre.name}</NavDropdown.Item>
                )
              })}
            </NavDropdown>
            <NavDropdown className="mr-auto" title="User" id="basic-nav-dropdown" menuVariant="dark">
              <LogoutButton></LogoutButton>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default DropdownNav;
