import React, { useState, useEffect } from "react"



function ListReviewForMovie() {
  //declare new state variable 

  const [reviews, setReviews] = useState([])

  //fetches review data 
  useEffect(() => {
    async function getData() {
      const url = `http://localhost:8090/api/reviews/`
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json();
        setReviews(data.reviews)
      }

    }
    getData()

  }, [setReviews])





    //if review exists for this movie in database




    // function handleReviewChange(e) {
    //   setReviews(e.target.value)
    // }

    return (
      <div className="mt-4">
        <div className="flex-grow-1 flex-shrink-1">
          <div>


          </div>

          {reviews?.map((review) => {
            return (

              <div className="shadow p-3 mb-5 bg-white rounded" >
                <p className="mb-1">
                  @film_fanatic3

                  {review.rating}<span className="small"></span>
                </p>

                {review.post}</div>
            )
          })
          }


        </div>
      </div>





    )
  }

  export default ListReviewForMovie