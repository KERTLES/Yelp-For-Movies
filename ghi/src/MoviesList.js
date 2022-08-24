import React, { useState, useEffect } from "react"
import MovieCardBody from "./MovieCardBody"


function MoviesList() {
    const [movieColumns, setMovieColumns] = useState([[],[],[],[],[]]) //(Array(5).fill([]))
    const [movies, setMovies] = useState([])
    const apiKey = process.env.REACT_APP_TMDB_API_KEY
    const tmdbURL = process.env.REACT_APP_TMDB_URL

    useEffect(() => {
        (async () => {
            const moviesResponse = await fetch(`${tmdbURL}/trending/movie/day?api_key=${apiKey}`)
            if (moviesResponse.ok) {
                const moviesData = await moviesResponse.json()
                setMovies(moviesData.results)
            }
        })()
    }, [])
    

    useEffect(() => {
        const columns = [[],[],[],[],[]] //Array(5).fill([])
        let i = 0
        for (const movie of movies) {
            columns[i].push(movie)
            i = i + 1
            if (i > 4) {
                i = 0
            }
        }
        setMovieColumns(columns)
    }, [movies])

    return (
        <div className="container">
            <h2>TRENDING</h2>
            <div className="row mt-5">
                {movieColumns.map((column, col_idx) => {
                    return (
                        MovieCardBody(column, col_idx)
                    );
                })}
            </div>
        </div>
    )
}

export default MoviesList;

