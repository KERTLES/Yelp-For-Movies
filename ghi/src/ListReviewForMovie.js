import React, { useState, useEffect, useRef } from 'react';
import './style.css'
function ListReviewForMovie(data) {
  console.log(data)
  const [reviews, setReviews] = useState([])
  const [movie, setMovie] = useState([false])
  const [reviewLoading, setIsLoading] = useState([true])
  const post_data = useRef()
  post_data["imdb_id"] = data.movie.imdbID
  post_data["title"] = data.movie["Title"]

  const getMovies = async () => {
    const url = `http://localhost:8090/api/movies/`
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(post_data),
      headers: {
        'Content-type': 'application/json',
      },
    }
    const response = await fetch(url, fetchConfig)
    if (response.ok) {
      const data = await response.json()
      setMovie(true)
    }
  }

  const getReviews = async () => {
    const response = await fetch(`http://localhost:8090/api/reviews/${data.movie.imdbID}/`)
    if (response.ok) {
      const data = await response.json();
      setReviews(data)
      post_data["reviews"] = data
      setIsLoading(false)
    } else {
      console.log("Still not ok")
    }
  }

  useEffect(() => {
    getMovies()
    getReviews()
  }, [])

  function ReviewExists(reviews) {
    if (reviews.length == 0) {
      return (
        <>
          <div className="shadow p-2 mb-5 bg-grey">
            <div>
              No reviews for this movie yet. Click here to create one!
            </div>
          </div>

        </>
      )
    } else {
      return (
       

        reviews.map((review, i) => {
          return (
            
            <div className='text'>
              {i !== 0?<br></br>: null}
                
                <span className="user">{'@'+review.user.user_name}</span>
                
                <span className="style">{'\t'}{review.date}</span>
                {checkIfRatings(review.rating)}
                <h className="h" key={i}> {review.title}</h>
                <br></br>
                <span>{review.post}</span>
                <br/>
                
              {/* </div> */}
           
             </div>
             
          )
        }
        )
      )
    }

  }

  const checkIfRatings = (rating) => {
    return (
      <>
        <div className="rating-color ratings i">
          {[...Array(rating)].map((star, i) => {
            return (
              <span className="star" key={i}>&#9733;</span>
            );
          })}
        </div>
      </>
    )
  }

  return (

    <div className="mt-100px bg-black scroll">
   {/* <div className="shadow p-2 mb-5 bg"> */}
        <div className= "review-box">
        <br />
      {ReviewExists(reviews)}
       </div>
      {/* </div>  */}
    </div>

  )
}
export default ListReviewForMovie

