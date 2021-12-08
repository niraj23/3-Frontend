import React, { useState } from 'react'

function AddReview({handleAddReview}) {

const [reviewContent, setReviewContent] = useState("")

// const handleChange = (e) => {
//     setReviewContent({reviewContent})
// }

const handleSubmit = (e) => {
    e.preventDefault()
//     console.log("Submit handled")
//     // ???????
    
//     fetch(`http://localhost:6001/songs/${id}`, {
//         method: "POST",
//         headers: {"Content-Type": "application/json",
//     },
//         body: JSON.stringify(reviewData),
//     })
//     .then(res => res.json())
//     .then(newReview => handleAddReview(newReview))

//     setReviewContent("")
}

    

    return(
        <div>
            <form id="review-form" onSubmit={(e) => handleSubmit(e)}>
                <textarea id="reviewForm" type="text" onChange={(e) => console.log(e.target.value)} minLength="10" maxLength="1000" placeholder="Write a review...">
                </textarea>
                <input type="submit"></input>

            </form>
        </div>
           )
}

export default AddReview
