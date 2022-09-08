import React, { useState, useEffect, useRef } from 'react';
import { AiFillStar } from "react-icons/ai";
import './CreateReviewForm.css';
// import { getToken } from './token';
// import MovieDetail from './MovieDetail';
// import { Navigate } from 'react-router-dom';


function CreateReviewForm(props) {

    // const {userName} = useContext(MainContext);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const stars = Array(5).fill()
    const [userName, setUserName] = useState('');


    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');
    const [valid, setValid] = useState(false)
    const [checkRating, setCheckRating] = useState('')
    const [clicked, setClicked] = useState(false)

    const submitted = useRef();
    // imdbID is variable from MovieDetail.js
    submitted["imdb_id"] = props.movie.imdbID
    console.log(props)
    console.log(props.movie.imdbID)
    console.log("MOVIE " + props["movie"]["Title"])


    const handleTitleInputChange = (event) => {
        setTitle(event.target.value);
    }

    const handlePostInputChange = (event) => {
        setPost(event.target.value);
    }

    useEffect(() => {
        async function getToken() {
            const userTokenUrl = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/get/token/`
            const request = await fetch(userTokenUrl, { method: "delete", credentials: "include" })

            if (request.ok) {
                const responseData = await request.json()
                setUserName(responseData.token.username)
                // console.log(responseData.token.username)
            }

        }
        getToken()
        handleSubmit()
        

    }, [])
    const handleSubmit = async (event) => {
        event.preventDefault();
        setClicked(true)

        // 


        // console.log('****************************data', data)

        // double check this url///////////////////////////////////////////////
        const reviewUrl = `${process.env.REACT_APP_REVIEWS_HOST}/api/create/review/`;
        console.log("%%%%%%%%%%%%%%%%%%%%%%review url", reviewUrl)
        console.log(clicked)
        if (rating !== 0) {



            setCheckRating(true)

            const data = {
                rating,
                title,
                post,
            }

            // append imdb_id to the data being submitted
            data['imdb_id'] = submitted['imdb_id']
            data["user_name"] = userName
            const fetchConfig = {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                }
            };
            const response = await fetch(reviewUrl, fetchConfig)
            if (response.ok) {
                const newReview = await response.json()
                console.log('------new review: ', newReview)
                setValid(true)
            }
        } else {
            console.log(checkRating)
            setCheckRating(false)
        }
    }

    function renderForm() {

        // <div className="form-container">
        //     {/* button to trigger modal pop up */}

        // </div>

        return (
            <div className="form-container">
                {/* button to trigger modal pop up */}

                <form onSubmit={handleSubmit} id="review-form">
                    {/* modal */}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabi="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                {rating == 0 && clicked ? <div className='text-black'>please submit a rating!</div> : null}


                                {submitted && valid ? <div className="success-message">Thanks for your review!</div> : null}
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Write your review for {props["movie"]["Title"]}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div className="modal-body">
                                    <div className="stars">
                                        {stars.map((star, i) => rating >= i + 1 || hoverRating >= i + 1 ? (
                                            <AiFillStar
                                                // while hovering over the stars
                                                onMouseOver={() => !rating && setHoverRating(i + 1)}
                                                onMouseLeave={() => setHoverRating('')}
                                                color={"#FFD700"}
                                                size={50}
                                                onClick={() => setRating(i + 1)}
                                            />
                                        ) : (
                                            <AiFillStar
                                                onMouseOver={() => !rating && setHoverRating(i + 1)}
                                                onMouseLeave={() => setHoverRating('')}
                                                color={"#A9A9A9"}
                                                size={50}
                                                onClick={() => setRating(i + 1)}
                                            />
                                        )
                                        )}
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="headline-prompt" className="form-label">Headline</label>
                                        <input
                                            onChange={handleTitleInputChange}
                                            value={title}
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            name="title"
                                            placeholder="What's most important to know?"
                                        />
                                        {/* <span id="title-error">Please enter a title for your movie review</span> */}
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="post-prompt" className="form-label">What did you think?</label>
                                        <textarea
                                            onChange={handlePostInputChange}
                                            value={post}
                                            type="text"
                                            className="form-control"
                                            id="post"
                                            name="post"
                                            placeholder="Enter your review...">
                                        </textarea>
                                        {/* <span id="title-error">Please enter a title for your movie review</span> */}
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Submit Review</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        )
    }


    return (
        <div>
            <button type="button" className="create-review-button btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Create A Review
            </button>

            {submitted && valid && clicked ? null : renderForm()}
        </div>



    );
}
export default CreateReviewForm;

{/* <div className="form-container">
    {/* button to trigger modal pop up */}
    // <button type="button" className="create-review-button btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    //     Create A Review
    // </button>



// </div> */}

// {submitted && valid && clicked ? : renderForm() }