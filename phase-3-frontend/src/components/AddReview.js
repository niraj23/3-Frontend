import React, { useState } from 'react'

function AddReview({handleAddReview}) {

const [reviewContent, setReviewContent] = useState("")

const handleChange = (e) => {
    setReviewContent({reviewContent})
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submit handled")
    const reviewData = {
        content: reviewContent,

    }
    fetch("http://localhost:6001/review", {
        method: "POST",
        headers: {"Content-Type": "application/json",
    },
        body: JSON.stringify(reviewData),
    })
    .then(res => res.json())
    .then(newReview => handleAddReview(newReview))

    setReviewContent("")
}

    return(
        
        <form id="review-form" onSubmit={(e) => handleSubmit(e)}>
            <textarea id="reviewForm" type="text" onChange={(e) => setReviewContent(e.target.value)} minLength="10" maxLength="1000" placeholder="Write a review...">
            </textarea>
            <input type="submit"></input>

        </form>
    )
}

export default AddReview
