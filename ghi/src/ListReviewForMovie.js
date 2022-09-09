import React, { useState, useEffect, useRef } from 'react';

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
          <div>
            No reviews for this movie yet. Click here to create one!
          </div>
        </>
      )
    } else {
      return (
        reviews.map((review, i) => {
          return (
            <div className="text" key={i}>
              <br />
              <h6 key={i}> {review.title}</h6>
              <span className="user">@{review.user.user_name}</span>
              <span className="style">{'\t'}{review.date}</span>
              {checkIfRatings(review.rating)}
              {review.post}
              <br />
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
        <div className="star-rating">
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
    <div className="mt-4">
      <div className="flex-grow-1 flex-shrink-1">
        <div className="shadow p-2 mb-5 bg-white rounded">
          <div className="p-3 mb-3 mb-md-0 mr-md-3 bg-light scroll">
            {ReviewExists(reviews)}
          </div>
        </div>
      </div>
    </div >
  )
}
export default ListReviewForMovie




// import React, { useState, useEffect, useRef } from 'react';
// function ListReviewForMovie(data) {
//   const [reviews, setReviews] = useState([])
//   const [movie, setMovie] = useState([false])
//   const [reviewLoading, setIsLoading] = useState([true])
//   const post_data = useRef()
//   post_data["imdb_id"] = data.movie.imdbID
//   post_data["title"] = data.movie["Title"]

//   const getMovies = async () => {
//     const url = `http://localhost:8090/api/movies/${data.movie.imdbID}/`
//     const fetchConfig = {
//       method: "post",
//       body: JSON.stringify(post_data),
//       headers: {
//         'Content-type': 'application/json',
//       },
//     }
//     // try {
//     if (await fetch(url, fetchConfig)) {
  
//     } else {
      

//     }
//     // if (response.ok) {
//     //   const data = await response.json()
//     //   setMovie(true)
//     // } else {
//     //   response = await fetch(url)
//     //   if (response.ok) {
//     //     const data = await response.json()
//     //     // console.log(data)
//     //     setMovie(true)
//     //   } else{
        
//     //   }
//     //   console.log("movie exists")
//     // }
  
//   }

//   const getReviews = async () => {
//     const response = await fetch(`http://localhost:8090/api/reviews/${data.movie.imdbID}/`)
//     if (response.ok) {
//       const data = await response.json();
//       setReviews(data)
//       post_data["reviews"] = data
//       setIsLoading(false)
//     } else {
//       console.log("Still not ok")
      
//     }
//   }

//   useEffect(() => {
//     getMovies()
//     getReviews()
//   }, [])

//   function ReviewExists(reviews) {
//     if (reviews.length == 0) {
//       return (
//         <>
//           <div>
//             No reviews for this movie yet. Click here to create one!
//           </div>
//         </>
//       )
//     } else {
//       return (
//         reviews.map((review, i) => {
//           return (
//             <div className="text" key={i}>
//               <br />
//               <h6 key={i}> {review.title}</h6>
//               <span className="user">@{review.user.user_name}</span>
//               <span className="style">{'\t'}{review.date}</span>
//               {checkIfRatings(review.rating)}
//               {review.post}
//               <br />
//             </div>
//           )
//         }
//         )
//       )
//     }

//   }

//   const checkIfRatings = (rating) => {
//     return (
//       <>
//         <div className="star-rating">
//           {[...Array(rating)].map((star) => {
//             return (
//               <span className="star">&#9733;</span>
//             );
//           })}
//         </div>
//       </>
//     )
//   }

//   return (
//     <div className="mt-4">
//       <div className="flex-grow-1 flex-shrink-1">
//         <div className="shadow p-4 mb-5 bg-white rounded">
//           <div className="p-3 mb-3 mb-md-0 mr-md-3 bg-light scroll">
//             {ReviewExists(reviews)}
//           </div>
//         </div>
//       </div>
//     </div >
//   )
// }
// export default ListReviewForMovie
