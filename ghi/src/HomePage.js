import React, { useState } from "react"
import { HiOutlineSearch } from "react-icons/hi";
import { IoArrowForwardOutline } from "react-icons/io5";
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
        <a href={`${process.env.PUBLIC_URL}/`}>
          <img src={`${process.env.PUBLIC_URL}/yoovieswhite.png`} alt="logo" width="500" height="auto" />
        </a>
        <form onSubmit={handleSubmit} className="d-flex mt-3 mb-3">
            <HiOutlineSearch style={{fontSize: "50px", color: "white"}} />
            <input 
              placeholder="Enter a movie..." 
              type="search" 
              name="movie" 
              id="movie" 
              aria-label="Search" 
              className="form-control form-control-lg mx-2"
            />
            <button 
              className="btn btn-light rounded-circle p-2" type="submit" style={{outline: "none", border: "none"}}>
              <IoArrowForwardOutline style={{fontSize: "35px"}} />
            </button>
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