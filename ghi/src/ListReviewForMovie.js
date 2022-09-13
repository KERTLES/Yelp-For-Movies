import React, { useState, useEffect, useRef } from 'react';
import './style.css'

function ListReviewForMovie(data) {
  const [reviews, setReviews] = useState([])
  // const [movie, setMovie] = useState([false])
  // const [reviewLoading, setIsLoading] = useState([true])
  const post_data = useRef()
  const review_api = process.env.REACT_APP_REVIEWS_HOST
  post_data["imdb_id"] = data.movie.imdbID
  post_data["title"] = data.movie["Title"]

  const getMovies = async () => {

    const url = `${review_api}/api/movies/`
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(post_data),
      headers: {
        'Content-type': 'application/json',
      },
    }
    await fetch(url, fetchConfig)
    // const response = await fetch(url, fetchConfig)
    // if (response.ok) {
    //   // const data = await response.json()
    //   // setMovie(true)
    // } 
  }

  const getReviews = async () => {
    const response = await fetch(`${review_api}/api/reviews/${data.movie.imdbID}/`)
    if (response.ok) {
      const data = await response.json();
      setReviews(data)
      post_data["reviews"] = data
      // setIsLoading(false)
    } else {
      console.log("Still not ok")
    }
  }

  useEffect(() => {
    getMovies()
    getReviews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function ReviewExists(reviews) {
    if (reviews.length === 0) {
      return (
        <>
          <div className="mt-4">
            <div className="flex-grow-1 flex-shrink-1">
              <div className="shadow p-2 mb-5 bg-white rounded">
                <div className="p-3 mb-3 mb-md-0 mr-md-3 bg-light text-black">
                  <div>No reviews for this movie yet, click here to create one!</div>
                </div>
              </div>
            </div>
          </div >
        </>
      )
    } else {
      return (
        <div className='review-box scroll'>
          {reviews.map((review, i) => {
            return (
              <div key={i} className=' text'>
                {/* {i !== 0 ? <br></br> : null} */}
                <span className="user">{'@' + review.user.user_name}</span>
                <span className="style">{'\t'}{review.date}</span>
                {checkIfRatings(review.rating)}
                <h className="h" key={i}> {review.title}</h>
                <br></br>
                <span>{review.post}</span>
                {/* <br /> */}
              </div>
            )
          })}


        </div>
      )
    }

  }

  const checkIfRatings = (rating) => {
    return (
      <>
        <div className="rating-color ratings i">
          {[...Array(rating)].map((star) => {
            return (
              <span className="star">&#9733;</span>
            );
          })}
        </div>
      </>
    )
  }

  return (
    <div>

      {ReviewExists(reviews)}

    </div >
  )
}
export default ListReviewForMovie



