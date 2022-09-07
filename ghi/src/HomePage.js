import React, { useState } from "react"
import { HiOutlineSearch } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import MoviesList from "./MoviesList";
// import Footer from "./Footer";


function HomePage() {
  const [movieName, setMovieName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    setMovieName(event.target.movie.value.toLowerCase())
  }  

  return (
      <>
      <div className="px-4 py-5 my-5 text-center">
        <a href="/">
          <img src="/yoovieswhite.png" alt="logo" width="500" height="auto" />
        </a>
        <form onSubmit={handleSubmit} className="d-flex mt-3 mb-3">
            <HiOutlineSearch style={{fontSize: "45px", color: "white"}} />
            <input placeholder="Enter a movie..." type="search" name="movie" id="movie" aria-label="Search" className="form-control form-control-lg me-2"/>
            <button className="btn btn-light me-2 rounded-circle" type="submit"><FaArrowRight style={{fontSize: "22px", color: "black"}} /></button>
        </form>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 text-white">
            Ratings, Reviews, and Where to Watch the Best Movies...
          </p>
        </div>
      </div>
      {<MoviesList query={movieName} />}
      </>

    );
  }
  
  export default HomePage;