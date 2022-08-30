import React, { useState } from "react"

import MoviesList from "./MoviesList";


function HomePage() {
  const [movieName, setMovieName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    setMovieName(event.target.movie.value.toLowerCase())
  }  

  return (
      <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Yovies</h1>
        <form onSubmit={handleSubmit} className="d-flex mt-3 mb-3" >
            <input placeholder="Enter a movie..." type="search" name="movie" id="movie" aria-label="Search" className="form-control me-2"/>
            <button className="btn btn-outline-secondary text-nowrap me-2" type="submit">Search</button>
        </form>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Ratings, Reviews, and Where to Watch the Best Movies...
          </p>
        </div>
      </div>
      {<MoviesList query={movieName} />}
      </>
    );
  }
  
  export default HomePage;