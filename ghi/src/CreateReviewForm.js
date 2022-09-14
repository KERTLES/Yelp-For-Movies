import React, { useState, useEffect, useRef } from 'react';
import { AiFillStar } from "react-icons/ai";
import './CreateReviewForm.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


function CreateReviewForm(props) {
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');

    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const stars = Array(5).fill()

    const [userName, setUserName] = useState('');

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


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        const reviewUrl = `${process.env.REACT_APP_REVIEWS_HOST}/api/create/review/`;

        const data = {
            rating,
            title,
            post,
        }

    };


    return (
        <>
            <Button variant="light create-review-button" onClick={handleShow}>Create A Review</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Write your review for {props["movie"]["Title"]}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="validationCustom01">
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="1"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="2"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                        inline
                                        label="3"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-3`}
                                    />
                                    <Form.Check
                                        inline
                                        label="4"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-4`}
                                    />
                                    <Form.Check
                                        inline
                                        label="5"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-5`}
                                    />
                                </div>
                            ))}
                            <Form.Control.Feedback type="invalid">
                                Please provide a rating.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="validationCustom02">
                            <Form.Label>Headline</Form.Label>
                            <Form.Control
                                required
                                onChange={handleTitleInputChange}
                                value={title}
                                type="text"
                                placeholder="What's most important to know?"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a title for your post.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="validationCustom03">
                            <Form.Label>What did you think?</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                rows={3}
                                onChange={handlePostInputChange}
                                value={post}
                                placeholder="Enter your review..."
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide your review.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default CreateReviewForm;