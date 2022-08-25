import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom';

import MoviesList from "./MoviesList";


function HomePage() {
    return (
      <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Yovies</h1>
        <form className="d-flex mt-3 mb-3" >
            <input placeholder="Enter movie..." type="search" name="" id="" aria-label="Search" className="form-control me-2"/>
            <button className="btn btn-outline-secondary text-nowrap me-2" type="submit">Search</button>
        </form>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Ratings, Reviews, and Where to Watch the Best Movies...
          </p>
        </div>
      </div>
      <MoviesList />
      </>
    );
  }
  
  export default HomePage;