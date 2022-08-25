import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom';


function MovieCardBody(column, col_idx) {
  return (
    <div key={col_idx} className="col">
      {column.map(movie => {
        const title = movie.title.toLowerCase().split(/[:\s,]+/).join("-")
        console.log(title)
        return (
          <div key={movie.id} className="card mb-3 shadow">
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} className="card-img-top" />
            <div className="card-body">
              <Link to={`/${title}-${movie.id}`}>
                <h5 className="card-title">{movie.title}</h5>
              </Link>
              <span className="card-text">
                {new Date(movie.release_date).getFullYear()} 
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieCardBody;