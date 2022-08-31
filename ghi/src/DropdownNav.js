import React, { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function DropdownNav() {
  const [genres, setGenres] = useState([])

  const apiKey = process.env.REACT_APP_TMDB_API_KEY
  const tmdbURL = process.env.REACT_APP_TMDB_URL

  useEffect(() => {
    (async () => {
        const genresResponse = await fetch(`${tmdbURL}/genre/movie/list?api_key=${apiKey}&language=en-US`)
        if (genresResponse.ok) {
            const genresData = await genresResponse.json()
            setGenres(genresData.genres)
        }
    })()
}, [])
  
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Yovies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Genre" id="basic-nav-dropdown" menuVariant="dark">
              {genres.map(genre => {
                return (
                  <NavDropdown.Item key={genre.id} href={`/${genre.name.toLowerCase()}/${genre.id}`}>{genre.name}</NavDropdown.Item>
                )
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default DropdownNav;