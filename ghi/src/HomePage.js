import React, { useState } from "react"
import { HiOutlineSearch } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import MoviesList from "./MoviesList";
import Footer from "./Footer";


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
        <form onSubmit={handleSubmit} className="d-flex mt-3 mb-3">
            <HiOutlineSearch style={{fontSize: '45px'}} />
            <input placeholder="Enter a movie..." type="search" name="movie" id="movie" aria-label="Search" className="form-control form-control-lg me-2"/>
            <button className="btn btn-dark me-2 rounded-circle" type="submit"><FaArrowRight style={{fontSize: '22px'}} /></button>
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