import React, { useState, useEffect } from "react"
import MovieColumn from "./MovieColumn"


function MoviesList() {
    const [movieColumns, setMovieColumns] = useState([[],[],[],[],[]]) //(Array(5).fill([]))
    const [movies, setMovies] = useState([])

    useEffect(() => {
        (async () => {
            const moviesResponse = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=4b2db849ffe5144d7b9048b8762a2743')
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
                    MovieColumn(column, col_idx)
                    );
                })}
        </div>
        
        </div>
    )
}

export default MoviesList;

