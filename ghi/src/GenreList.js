import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import MovieCardBody from "./MovieCardBody"


function GenreList(props) {
    const { genreId }= useParams()
    const { genreName }= useParams()
    const [movieColumns, setMovieColumns] = useState([[],[],[],[],[]])
    const [movies, setMovies] = useState([])
    const apiKey = process.env.REACT_APP_TMDB_API_KEY
    const tmdbURL = process.env.REACT_APP_TMDB_URL
    
    useEffect(() => {
        (async () => {
            const moviesResponse = await fetch(`${tmdbURL}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreId}&with_watch_monetization_types=flatrate`)
            if (moviesResponse.ok) {
                const moviesData = await moviesResponse.json()
                setMovies(moviesData.results)
            }
        })()
    }, [])
    

    useEffect(() => {
        const columns = [[],[],[],[],[]]
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
        <>
        <div className="px-4 pt-5 pb-3 mt-5 mb-1 text-center">
            <img src="/yoovies.png" alt="logo" width="500" height="auto" />
        </div>
        <div className="container">
            <h2 className="text-capitalize">{`${genreName} Movies`}</h2>
            <div className="row mt-5">
                {movieColumns.map((column, col_idx) => {
                    return (
                        MovieCardBody(column, col_idx)
                    );
                })}
            </div>
        </div>
        </>
    )
}

export default GenreList;

