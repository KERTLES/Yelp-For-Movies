import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom';


function MovieCardBody(column, col_idx) {
  return (
    <div key={col_idx} className="col">
      {column.map(movie => {
        const title = movie.title.toLowerCase().split(/[-:\s,]+/).join("-")
        return (
          <div key={movie.id} className="card mb-3 shadow">
            <Link to={`/${title}-${movie.id}`}>
              {movie.poster_path === null 
              ? <img src={"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"} className="card-img-top" />
              : <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} className="card-img-top" />
              }
            </Link>
            <div className="card-body">
              <Link to={`/${title}-${movie.id}`}>
                <h5 className="card-title">{movie.title}</h5>
              </Link>
              <span className="card-text">
                {(movie.release_date === "" || !movie.release_date)
                ? "Unknown"
                : new Date(movie.release_date).getFullYear()} 
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieCardBody;