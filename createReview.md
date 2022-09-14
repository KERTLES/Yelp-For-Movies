<!--


    const [checkRating, setCheckRating] = useState('')
    const [clicked, setClicked] = useState(false)

    const [submitForm, setSubmitForm] = useState(false);


    async function handleSubmit(event) {
        event.preventDefault();
        if (title && post && rating) {
            setValid(true);
        }
        setSubmitForm(true);
        setClicked(true)

        const reviewUrl = `${process.env.REACT_APP_REVIEWS_HOST}/api/create/review/`;
        console.log("%%%%%%%%%%%%%%%%%%%%%%review url", reviewUrl)
        console.log('clickeddddddddddddd', clicked)
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
                // setValid(true)
            }
        } else {
            // console.log(checkRating)
            setCheckRating(false)3
        }
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
    }, [])

    function renderForm() {
        const modalWithForm = (
            <div className="form-container">
                <form className="review-form" onSubmit={handleSubmit} id="review-form">

                    {/* modal */}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabi="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                {rating == 0 && clicked ? <div className='req-rating'>Please provide a rating!</div> : null}

                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Write your review for {props["movie"]["Title"]}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div className="modal-body">
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

                                    <div className="mb-4">
                                        <label htmlFor="headline-prompt" className="form-label">Headline</label>
                                        <input
                                            onChange={handleTitleInputChange}
                                            required value={title}
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            name="title"
                                            placeholder="What's most important to know?"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="post-prompt" className="form-label">What did you think?</label>
                                        <textarea
                                            onChange={handlePostInputChange}
                                            required value={post}
                                            type="text"
                                            className="form-control"
                                            id="post"
                                            name="post"
                                            placeholder="Enter your review...">
                                        </textarea>
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="Submit" className="btn btn-primary">Submit Review</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        )

        const successModal = (
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabi="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Thanks for your review!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )

        let modal = submitForm && valid ? successModal : modalWithForm;

        return (
            modal
            // <div className="form-container">
            //     <form className="review-form" onSubmit={handleSubmit} id="review-form">

            //         {/* modal */}
            //         <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabi="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            //             <div className="modal-dialog modal-dialog-centered">
            //                 <div className="modal-content">
            //                     {rating == 0 && clicked ? <div className='req-rating'>Please provide a rating!</div> : null}
            //                     {submitForm && valid ? <div className="success-message">Thanks for your review!</div> : null}

            //                     <div className="modal-header">
            //                         <h5 className="modal-title" id="staticBackdropLabel">Write your review for {props["movie"]["Title"]}</h5>
            //                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            //                     </div>

            //                     <div className="modal-body">
            //                         <div className="stars">
            //                             {stars.map((star, i) => rating >= i + 1 || hoverRating >= i + 1 ? (
            //                                 <AiFillStar
            //                                     key={i}
            //                                     // while hovering over the stars
            //                                     onMouseOver={() => !rating && setHoverRating(i + 1)}
            //                                     onMouseLeave={() => setHoverRating('')}
            //                                     color={"#FFD700"}
            //                                     size={50}
            //                                     onClick={() => setRating(i + 1)}
            //                                 />
            //                             ) : (
            //                                 <AiFillStar
            //                                     key={i}
            //                                     onMouseOver={() => !rating && setHoverRating(i + 1)}
            //                                     onMouseLeave={() => setHoverRating('')}
            //                                     color={"#A9A9A9"}
            //                                     size={50}
            //                                     onClick={() => setRating(i + 1)}
            //                                 />
            //                             )
            //                             )}
            //                         </div>

            //                         <div className="mb-4">
            //                             <label htmlFor="headline-prompt" className="form-label">Headline</label>
            //                             <input
            //                                 onChange={handleTitleInputChange}
            //                                 required value={title}
            //                                 type="text"
            //                                 className="form-control"
            //                                 id="title"
            //                                 name="title"
            //                                 placeholder="What's most important to know?"
            //                             />
            //                         </div>

            //                         <div className="mb-4">
            //                             <label htmlFor="post-prompt" className="form-label">What did you think?</label>
            //                             <textarea
            //                                 onChange={handlePostInputChange}
            //                                 required value={post}
            //                                 type="text"
            //                                 className="form-control"
            //                                 id="post"
            //                                 name="post"
            //                                 placeholder="Enter your review...">
            //                             </textarea>
            //                         </div>
            //                     </div>

            //                     <div className="modal-footer">
            //                         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            //                         <button type="Submit" className="btn btn-primary">Submit Review</button>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>

            //     </form>
            // </div>
        )
    }

    // return (
    //     <div>
    //         <button type="button" className="create-review-button btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Create A Review</button>
    //         {renderForm()}
    //     </div>
    // );
}
export default CreateReviewForm; -->