import React, { useState } from 'react'

function AddReview({song: {id, reviews}, song, reviewList, setReviewList}) {

const [reviewContent, setReviewContent] = useState("")

function handleAddReview(newReview) {
       
    setReviewList([...reviewList, newReview])
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submit handled")

    fetch(`http://localhost:6001/${song.id}`, {
        method: "POST",
        headers: {"Content-Type": "application/json",
    },
        body: JSON.stringify(reviewContent),
    })
    .then(res => res.json())
    .then(newReview => handleAddReview(reviewContent))

    handleAddReview(reviewContent)
    setReviewContent("")
}

    

    return(
        <div>
            <form id="review-form" onSubmit={(e) => handleSubmit(e)}>
                <textarea id="reviewForm" type="text" onChange={(e) => setReviewContent(e.target.value)} minLength="10" maxLength="1000" placeholder="Write a review...">
                </textarea>
                <input type="submit"></input>

            </form>
        </div>
           )
}

export default AddReview
