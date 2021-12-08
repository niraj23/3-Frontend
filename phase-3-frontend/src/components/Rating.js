import React, {useState} from 'react'
import Star from './Star';


function Rating({ onChange }) {

const [rating, setRating] = useState(0)
const starRating = [1, 2, 3, 4, 5]


const changeRating = (newRating) => {
    setRating(newRating);
    onChange?.(newRating);

   //function to post star rating - will need to figure out how to prevent a user from adding more than one rating

//     e.preventDefault()
//     console.log("Star rating clicked")
//     const ratingData = {
//         content: ,

//     }
//     fetch("http://localhost:6001/songs", {
//         method: "POST",
//         headers: {"Content-Type": "application/json",
//     },
//         body: JSON.stringify(reviewData),
//     })
//     .then(res => res.json())
//     .then(newReview => handleAddReview(newReview))

//     setReviewContent("")
// }
}


    return(
       
       <div className="star-rating">
        {starRating.map((value) => (
            <Star key={value}
            filled={value <= rating}
            onClick={ () => changeRating(value)} 
            />
        ))}

       </div>
    )
}

export default Rating