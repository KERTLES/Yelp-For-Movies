import React, { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const omdbapiKey = process.env.REACT_APP_OMDB_API_KEY
const tmdbapiKey = process.env.REACT_APP_TMDB_API_KEY
const omdbURL = process.env.REACT_APP_OMDB_URL
const tmdbURL = process.env.REACT_APP_TMDB_URL

function MovieDetail() {
    const imdbID = useRef()
    const {state} = useParams()
    const movieId = state.split("-").at(-1)

    const [movie, setMovie] = useState({})
    const [genres, setGenres] = useState([])
    const [ratings, setRatings] = useState([])

    const getMovieData = async () => {
        const movieResponse = await fetch(`${omdbURL}/?i=${imdbID.current}&plot=full&apikey=${omdbapiKey}`)
            if (movieResponse.ok) {
                const moviesData = await movieResponse.json()
                setMovie(moviesData)
                setGenres(moviesData.Genre.split(","))
                setRatings(moviesData.Ratings)
            }
    }

    const getImdbID = async () => {
        const imdbIdResponse = await fetch(`${tmdbURL}/movie/${movieId}?api_key=${tmdbapiKey}&language=en-US`)
        if (imdbIdResponse.ok) {
            const imdbIddata = await imdbIdResponse.json()
            imdbID.current = imdbIddata.imdb_id
            getMovieData()
        }
    }

    useEffect(() => {
        getImdbID()
    }, [])

    const checkIfRatings = (ratings) => {
        if (ratings.length === 0) {
            return (<div>Ratings: N/A</div>)
        } else {
            return(
                <>
                {ratings.map((rating, index) => {
                    return (
                        <div key={index}>
                            {rating.Source}: {rating.Value}
                        </div>
                    )
                })}
                </>
            )        
        }
    }

    return (
        <>
        <div className="container">
            <h1>{ movie.Title }</h1>
            <ul className="list-inline">
                <li className="list-inline-item">{ movie.Year } • </li>
                <li className="list-inline-item">{ movie.Rated === "N/A" ? "NR" : movie.Rated } • </li>
                <li className="list-inline-item">{ movie.Runtime }</li>
            </ul>
            <div className="row">
                <div className="col-3">
                    <img src={ movie.Poster } width='250' height='auto' />
                    <div>
                        {checkIfRatings(ratings)}
                    </div>
                </div>
                <div className="col-9">
                    <div>
                        {genres.map((genre, index) => {
                            return (
                            <span key={index}>
                                <Button className="rounded-pill" variant="outline-dark" size="sm">{ genre }</Button>{' '}
                            </span>
                            )
                        })}
                    </div>    
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={2}>{ movie.Plot }</td>
                            </tr>
                            <tr>
                                <th scope="row">Release date</th>
                                <td>{ movie.Released }</td>
                            </tr>
                            <tr>
                                <th scope="row">Language</th>
                                <td>{ movie.Language }</td> 
                            </tr>
                            <tr>
                                <th scope="row">Country</th>
                                <td>{ movie.Country }</td> 
                            </tr>
                            <tr>
                                <th scope="row">Director(s)</th>
                                <td>{ movie.Director }</td> 
                            </tr>
                            <tr>
                                <th scope="row">Writer(s)</th>
                                <td>{ movie.Writer }</td> 
                            </tr>
                            <tr>
                                <th scope="row">Main Casts</th>
                                <td>{ movie.Actors }</td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}

export default MovieDetail;