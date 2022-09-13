import React, { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
// import MovieDetail from './MovieDetail';
import './CreateReviewForm.css';


function CreateReviewForm() {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const stars = Array(5).fill()

    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');
    // const [submitted, setSubmitted] = useState('');
    // const [valid, setValid] = useState(false)

    const handleTitleInputChange = (event) => {
        setTitle(event.target.value);
    }

    const handlePostInputChange = (event) => {
        setPost(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            rating,
            title,
            post,
        }
        console.log('****************************data', data)

        // double check this url///////////////////////////////////////////////
        const reviewUrl = `${process.env.REACT_APP_REVIEWS_HOST}/api/reviews/`;
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
        };
        const response = await fetch(reviewUrl, fetchConfig)
        if (response.ok) {
            const newReview = await response.json()
            console.log('------new review: ', newReview)
        }
    }


    return (

        <div className="form-container">
            {/* button to trigger modal pop up */}
            <button type="button" className="create-review-button btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Create A Review
            </button>

            <form onSubmit={handleSubmit} id="review-form">
                {/* modal */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabi="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            {/* submitted && valid? */}
                            {/* {submitted ? <div className="success-message">Thanks for your review!</div> : null} */}
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Write your review for MOVIE NAME</h5>
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
    );
}
export default CreateReviewForm;