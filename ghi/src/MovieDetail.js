import React, { useState, useEffect } from "react"


function MovieDetail() {
    const [movie, setMovie] = useState({})
    const apiKey = process.env.REACT_APP_OMDB_API_KEY
    const omdbURL = process.env.REACT_APP_OMDB_URL

    useEffect(() => {
        (async () => {
            const movieResponse = await fetch(`${omdbURL}/?i=tt5113044&plot=full&apikey=${apiKey}`)
            if (movieResponse.ok) {
                const moviesData = await movieResponse.json()
                setMovie(moviesData)
            }
        })()
    }, [])
    

    return (
        <div className="container">
            <h1>{ movie.Title }</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Release date</th>
                    <th>Runtime</th>
                    {/* <th>Ratings</th> */}
                    <th>Poster</th>
                </tr>
                </thead>
                <tbody>
                    <tr key={movie.id}>
                        <td>{ movie.Released }</td>
                        <td>{ movie.Runtime }</td>
                        {/* <td>
                            {console.log(movie)}
                            {console.log(movie.Ratings)}
                            {movie.Ratings.map(rating => {
                                return (`${rating.Source}: ${rating.Value}`)
                            })}
                        </td> */}
                        <td><img src={ movie.Poster } width='100' height='auto' /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MovieDetail;