import React, { useState, useEffect, useRef } from 'react';
import { AiFillStar } from "react-icons/ai";
import { useToken } from "./token"
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CreateReviewForm.css';


function CreateReviewForm(props) {

    // eslint-disable-next-line
    const [token, login, logout] = useToken();
    const [auth, setAuth] = useState([]);
    const navigate = useNavigate();

    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');

    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const stars = [1, 2, 3, 4, 5];

    const [userName, setUserName] = useState('');

    // eslint-disable-next-line
    const [checkRating, setCheckRating] = useState('');
    
    const clicked = false

    // eslint-disable-next-line
    const [valid, setValid] = useState(false);

    const handleTitleInputChange = (event) => {
        setTitle(event.target.value);
    }

    const handlePostInputChange = (event) => {
        setPost(event.target.value);
    }

    const submitted = useRef();
    // imdbID is variable from MovieDetail.js
    submitted["imdb_id"] = props.movie.imdbID
    // console.log("MOVIE " + props["movie"]["Title"])

    const showModal = () => { 
        if (auth) {
            handleShow()
        } else {
            navigate("/Login");
        }
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        const reviewUrl = `${process.env.REACT_APP_REVIEWS_HOST}/api/create/review/`;

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
                // eslint-disable-next-line
                const newReview = await response.json()
                setValid(true)
            }
        } else {
            setCheckRating(false)
        }            
    };

    // gets the username
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
    }, [])

    // gets cookies from browser, and compares to token JS
    useEffect(() => {
        async function authen() {
            if (token !== null) {
                const tokenUrl = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/tokens/mine`;
                const request = await fetch(tokenUrl, {
                    method: "get",
                    credentials: "include",
                    mode: "cors",
                })
                if (request.ok) {
                    const toDa = await request.json()
                    if (toDa['token'] === token) {
                        setAuth(true)
                    }
                    else {
                        setAuth(false)
                    }
                }
                else {
                    setAuth(false)
                }
            }
            else {
                setAuth(false)
            }
        } authen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
    )


    return (
        <>
            <Button variant="light create-review-button" onClick={showModal}>Create A Review</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Write your review for {props["movie"]["Title"]}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="validationCustom01">
                            {rating === 0 && clicked ? <div className='req-rating'>Please provide a rating!</div> : null}
                            <div className="stars">
                                {stars.map((star, i) => rating >= i + 1 || hoverRating >= i + 1 ? (
                                    <AiFillStar
                                        key={i}
                                        // while hovering over the stars
                                        onMouseOver={() => !rating && setHoverRating(i + 1)}
                                        onMouseLeave={() => setHoverRating('')}
                                        color={"#FFD700"}
                                        size={50}
                                        onClick={() => setRating(i + 1)}
                                    />
                                ) : (
                                    <AiFillStar
                                        key={i}
                                        onMouseOver={() => !rating && setHoverRating(i + 1)}
                                        onMouseLeave={() => setHoverRating('')}
                                        color={"#A9A9A9"}
                                        size={50}
                                        onClick={() => setRating(i + 1)}
                                    />
                                )
                                )}
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="validationCustom02">
                            <Form.Label>Headline</Form.Label>
                            <Form.Control
                                required
                                onChange={handleTitleInputChange}
                                value={title}
                                type="text"
                                name="title"
                                placeholder="What's most important to know?"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a title for your post.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>What did you think?</Form.Label>
                            <Form.Control
                                required
                                onChange={handlePostInputChange}
                                as="textarea"
                                rows={3}
                                value={post}
                                name="post"
                                id="post"
                                placeholder="Enter your review..."
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide your review.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button type="submit" variant="outline-primary">Submit form</Button>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default CreateReviewForm;