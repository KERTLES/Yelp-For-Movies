import React, { useState, useEffect, useRef } from 'react';
import './style.css'
function ListReviewForMovie(data) {
  const [reviews, setReviews] = useState([])
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
  }

  const getReviews = async () => {
    const response = await fetch(`${review_api}/api/reviews/${data.movie.imdbID}/`)
    if (response.ok) {
      const data = await response.json();
      setReviews(data)
      post_data["reviews"] = data
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
          <div className="text">
            <div className='text-white'>
              No reviews for this movie yet. Click here to create one!
            </div>
          </div>
        </>
      )
    } else if (reviews.length <= 2) {
      return (

        <div className='review-box2'>
          {reviews.map((review, i) => {
            return (
              <div key={i} className='text'>
                <span className="user">{'@' + review.user.user_name}</span>
                <span className="style">{'\t'}{review.date}</span>
                {checkIfRatings(review.rating)}
                <h className="h" key={i}> {review.title}</h>
                <br></br>
                <span>{review.post}</span>
              </div>
            )
          })}

        </div>

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
    // <div className="mt-100px bg-black scroll">
    <div>
      {/* <br /> */}
      {ReviewExists(reviews)}
    </div>
    // </div>
  )
}
export default ListReviewForMovie

