import React, { useState, useEffect } from "react"
import MovieCardBody from "./MovieCardBody"


function MoviesList(props) {
    const [movieColumns, setMovieColumns] = useState([[], [], [], [], []])
    const [movies, setMovies] = useState([])
    const apiKey = process.env.REACT_APP_TMDB_API_KEY
    const tmdbURL = process.env.REACT_APP_TMDB_URL
    let apiURL = ""

    if (props.query) {
        apiURL = `${tmdbURL}/search/movie?api_key=${apiKey}&language=en-US&query=${props.query}`
    } else {
        apiURL = `${tmdbURL}/trending/movie/day?api_key=${apiKey}`
    }

    useEffect(() => {
        (async () => {
            const moviesResponse = await fetch(apiURL)
            if (moviesResponse.ok) {
                const moviesData = await moviesResponse.json()
                setMovies(moviesData.results)
            }
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props])


    useEffect(() => {
        const columns = [[], [], [], [], []]
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
        <div className="container text-white">
            <h2>{props.query ? `Search results for "${props.query}"...` : "TRENDING"}</h2>
            <div className="row mt-5 mb-5">
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


