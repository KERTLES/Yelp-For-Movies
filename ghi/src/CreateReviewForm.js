import React, { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import './CreateReviewForm.css';


function CreateReviewForm() {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const stars = Array(5).fill()

    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');

    const handleTitleInputChange = (event) => {
        setTitle (event.target.value);
    }
    const handlePostInputChange = (event) => {
        setPost (event.target.value);
    }

    return (
        <div className="button-modal">
            {/* button trigger modal */}
            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Create A Review
            </button>
            
            {/* pop up modal - vertically centered */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabi="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Write your review for MOVIE NAME</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <div className="mb-3">
                                {stars.map((star, i) => rating >= i + 1 || hoverRating >= i + 1 ? (
                                            <AiFillStar
                                                onMouseOver={() => !rating && setHoverRating(i + 1)}
                                                onMouseLeave={() => setHoverRating(undefined)}
                                                color= {"#FFD700"} 
                                                size={50}
                                                onClick={() => setRating(i + 1)}
                                            />
                                        ) : (
                                            <AiFillStar
                                                onMouseOver={() => !rating && setHoverRating(i + 1)}
                                                onMouseLeave={() => setHoverRating(undefined)}
                                                color= {"#A9A9A9"}
                                                size={50}
                                                onClick={() => setRating(i + 1)}
                                            />
                                        )
                                    )}
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" onChange={handleTitleInputChange} className="form-label">Headline</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="What's most important to know?" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" onChange={handlePostInputChange} className="form-label">What did you think?</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter your review" rows="3"></textarea>
                            </div>

                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Submit Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default CreateReviewForm;